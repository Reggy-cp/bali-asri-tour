"""Crawler module for Bali Agung Tours Website Reconstruction Tool.
Implements polite, domain-restricted crawling with robots.txt adherence,
sitemap discovery, duplicate prevention, and configurable rate limits.
"""

from dataclasses import asdict, dataclass, field
import json
import logging
from pathlib import Path
import time
from typing import Dict, List, Optional, Set, Tuple
from urllib.parse import urljoin, urlparse
import urllib.robotparser
import xml.etree.ElementTree as ET

from bs4 import BeautifulSoup
import requests

from config import DEFAULT_CONFIG, ReconstructionConfig

logger = logging.getLogger(__name__)

# File extensions to ignore during webpage link discovery
IGNORED_EXTENSIONS = {
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".ico", ".bmp",
    ".pdf", ".zip", ".tar", ".gz", ".rar", ".7z",
    ".mp3", ".mp4", ".avi", ".mov", ".wmv", ".wav",
    ".css", ".js", ".json", ".xml", ".doc", ".docx", ".xls", ".xlsx"
}


@dataclass
class CrawlResult:
    """Represents the crawling state and payload of a single page."""
    url: str
    final_url: str = ""
    status_code: Optional[int] = None
    content: Optional[str] = None
    error: Optional[str] = None
    content_type: str = ""
    discovered_links: List[str] = field(default_factory=list)
    discovery_source: str = "seed"  # "seed", "sitemap", or "link"
    timestamp: float = field(default_factory=time.time)


@dataclass
class CrawlReport:
    """Summary and telemetry of the crawl execution."""
    target_url: str
    visited_urls: List[str] = field(default_factory=list)
    failed_urls: Dict[str, str] = field(default_factory=dict)
    discovered_sitemaps: List[str] = field(default_factory=list)
    sitemap_url_count: int = 0
    total_pages_crawled: int = 0
    duration_seconds: float = 0.0

    def to_dict(self) -> Dict:
        return asdict(self)


class PoliteCrawler:
    """Polite, domain-restricted web crawler with robots.txt adherence and sitemap discovery."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG
        self.visited: Set[str] = set()
        self.failed: Dict[str, str] = {}
        self.sitemap_urls: List[str] = []
        self.discovered_sitemaps: List[str] = []
        self.robot_parser = urllib.robotparser.RobotFileParser()
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": self.config.user_agent})
        self.last_request_time: float = 0.0
        self._robots_loaded: bool = False

    def load_robots_txt(self) -> bool:
        """Fetch and parse robots.txt from target website."""
        if not self.config.respect_robots_txt:
            self._robots_loaded = True
            return True

        robots_url = urljoin(self.config.target_url, "/robots.txt")
        try:
            self.throttle()
            resp = self.session.get(robots_url, timeout=self.config.request_timeout)
            if resp.status_code == 200:
                self.robot_parser.parse(resp.text.splitlines())
                self._robots_loaded = True

                # Extract sitemaps declared in robots.txt
                for line in resp.text.splitlines():
                    line_clean = line.strip()
                    if line_clean.lower().startswith("sitemap:"):
                        sitemap_url = line_clean.split(":", 1)[1].strip()
                        if sitemap_url and sitemap_url not in self.discovered_sitemaps:
                            self.discovered_sitemaps.append(sitemap_url)
                logger.info(f"Loaded robots.txt successfully. Found {len(self.discovered_sitemaps)} sitemaps.")
                return True
            elif resp.status_code == 404:
                logger.info("robots.txt not found (404). Defaulting to open crawl permissions.")
                self.robot_parser.parse(["User-agent: *", "Allow: /"])
                self._robots_loaded = True
                return True
            else:
                logger.warning(f"robots.txt returned status {resp.status_code}, assuming open permissions.")
                self.robot_parser.parse(["User-agent: *", "Allow: /"])
                self._robots_loaded = True
                return False
        except Exception as e:
            logger.warning(f"Could not load robots.txt: {e}. Defaulting to open crawl permissions.")
            self.robot_parser.parse(["User-agent: *", "Allow: /"])
            self._robots_loaded = True
            return False

    def is_allowed_by_robots(self, url: str) -> bool:
        """Check if robots.txt allows crawling the given URL."""
        if not self.config.respect_robots_txt:
            return True
        if not self._robots_loaded:
            self.load_robots_txt()
        # robotparser returns True if allowed, or if parsing was empty
        return self.robot_parser.can_fetch(self.config.user_agent, url)

    def normalize_and_filter(self, url: str) -> Optional[str]:
        """Normalize URL and enforce allowed domain and non-asset filtering."""
        if not url:
            return None

        normalized = self.config.normalize_url(url)
        if not self.config.is_allowed_url(normalized):
            return None

        # Check ignored extensions
        path = urlparse(normalized).path.lower()
        if any(path.endswith(ext) for ext in IGNORED_EXTENSIONS):
            return None

        # Disallow WordPress admin/login paths
        if any(admin_path in path for admin_path in ["/wp-admin", "/wp-login.php", "/xmlrpc.php"]):
            return None

        return normalized

    def throttle(self) -> None:
        """Enforce configured polite delay between consecutive network requests."""
        elapsed = time.time() - self.last_request_time
        if elapsed < self.config.request_delay:
            time.sleep(self.config.request_delay - elapsed)
        self.last_request_time = time.time()

    def fetch_page(self, url: str) -> CrawlResult:
        """Fetch a single page with retries, timeout, and HTTP status tracking."""
        result = CrawlResult(url=url, final_url=url)

        if not self.is_allowed_by_robots(url):
            result.error = "Disallowed by robots.txt"
            self.failed[url] = result.error
            return result

        retries = self.config.max_retries
        backoff = self.config.backoff_factor

        for attempt in range(1, retries + 1):
            self.throttle()
            try:
                response = self.session.get(
                    url,
                    timeout=self.config.request_timeout,
                    allow_redirects=True,
                )
                result.status_code = response.status_code
                result.final_url = str(response.url)
                result.content_type = response.headers.get("Content-Type", "")

                if response.status_code == 200:
                    # Check if HTML content
                    if "text/html" in result.content_type:
                        result.content = response.text
                        result.discovered_links = self.extract_internal_links(response.text, result.final_url)
                    else:
                        result.error = f"Ignored non-HTML content type: {result.content_type}"
                    return result
                elif response.status_code in (404, 403, 410):
                    result.error = f"HTTP {response.status_code}"
                    self.failed[url] = result.error
                    return result
                else:
                    # Retry on 5xx or transient status
                    result.error = f"HTTP {response.status_code}"
                    if attempt < retries:
                        time.sleep(backoff ** attempt)
            except requests.RequestException as e:
                result.error = str(e)
                if attempt < retries:
                    time.sleep(backoff ** attempt)

        if result.error:
            self.failed[url] = result.error
        return result

    def extract_internal_links(self, html: str, base_url: str) -> List[str]:
        """Extract and normalize all allowed internal links from HTML content."""
        soup = BeautifulSoup(html, "lxml")
        links: Set[str] = set()

        for a in soup.find_all("a", href=True):
            raw_href = a["href"].strip()
            # Ignore javascript:, tel:, mailto: links
            if raw_href.startswith(("javascript:", "mailto:", "tel:", "#")):
                continue

            absolute_url = urljoin(base_url, raw_href)
            normalized = self.normalize_and_filter(absolute_url)
            if normalized:
                links.add(normalized)

        return sorted(list(links))

    def discover_sitemaps(self) -> List[str]:
        """Discover and recursively parse all sitemaps into a list of page URLs."""
        if not self._robots_loaded:
            self.load_robots_txt()

        # Seed candidate sitemap URLs if none discovered in robots.txt
        if not self.discovered_sitemaps:
            candidates = [
                urljoin(self.config.target_url, "/sitemap_index.xml"),
                urljoin(self.config.target_url, "/sitemap.xml"),
                urljoin(self.config.target_url, "/wp-sitemap.xml"),
            ]
            for cand in candidates:
                if cand not in self.discovered_sitemaps:
                    self.discovered_sitemaps.append(cand)

        all_page_urls: Set[str] = set()
        sitemaps_to_process = list(self.discovered_sitemaps)
        processed_sitemaps: Set[str] = set()

        while sitemaps_to_process:
            sitemap_url = sitemaps_to_process.pop(0)
            if sitemap_url in processed_sitemaps:
                continue
            processed_sitemaps.add(sitemap_url)

            self.throttle()
            try:
                resp = self.session.get(sitemap_url, timeout=self.config.request_timeout)
                if resp.status_code != 200:
                    continue

                # Parse XML
                root = ET.fromstring(resp.content)
                # Check for sitemap index (child sitemaps)
                for sitemap_elem in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}sitemap"):
                    loc = sitemap_elem.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
                    if loc is not None and loc.text:
                        sub_sitemap = loc.text.strip()
                        if sub_sitemap not in processed_sitemaps:
                            sitemaps_to_process.append(sub_sitemap)
                            if sub_sitemap not in self.discovered_sitemaps:
                                self.discovered_sitemaps.append(sub_sitemap)

                # Check for URL list
                for url_elem in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}url"):
                    loc = url_elem.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
                    if loc is not None and loc.text:
                        page_url = loc.text.strip()
                        norm_url = self.normalize_and_filter(page_url)
                        if norm_url:
                            all_page_urls.add(norm_url)

            except Exception as e:
                logger.warning(f"Error parsing sitemap {sitemap_url}: {e}")

        self.sitemap_urls = sorted(list(all_page_urls))
        logger.info(f"Discovered {len(self.sitemap_urls)} distinct URLs from {len(processed_sitemaps)} sitemaps.")
        return self.sitemap_urls

    def crawl(
        self,
        start_url: Optional[str] = None,
        max_pages: Optional[int] = None,
        use_sitemap: bool = True,
        page_filter: Optional[str] = None,
    ) -> Tuple[List[CrawlResult], CrawlReport]:
        """Perform polite, domain-restricted crawl up to max_pages.
        
        Args:
            start_url: Starting URL (defaults to config.target_url).
            max_pages: Max pages to crawl (defaults to config.max_pages).
            use_sitemap: Whether to discover and queue URLs from sitemap.
            page_filter: Optional substring filter (e.g. 'page-sitemap' or specific section).
        """
        start_time = time.time()
        max_limit = max_pages or self.config.max_pages
        entry_url = self.normalize_and_filter(start_url or self.config.target_url)

        queue: List[Tuple[str, str]] = []  # List of (url, source)
        if entry_url:
            queue.append((entry_url, "seed"))

        # Discover from sitemap if requested
        if use_sitemap:
            sitemap_discovered = self.discover_sitemaps()
            for s_url in sitemap_discovered:
                if page_filter and page_filter not in s_url:
                    continue
                if s_url != entry_url:
                    queue.append((s_url, "sitemap"))

        results: List[CrawlResult] = []

        while queue and len(self.visited) < max_limit:
            current_url, source = queue.pop(0)
            if current_url in self.visited:
                continue

            self.visited.add(current_url)
            logger.info(f"[{len(self.visited)}/{max_limit}] Crawling: {current_url}")

            crawl_res = self.fetch_page(current_url)
            crawl_res.discovery_source = source
            results.append(crawl_res)

            # Enqueue newly discovered internal links if under page limit
            if crawl_res.discovered_links and len(self.visited) + len(queue) < max_limit * 2:
                for link in crawl_res.discovered_links:
                    if link not in self.visited and not any(q[0] == link for q in queue):
                        queue.append((link, "link"))

        duration = time.time() - start_time
        report = CrawlReport(
            target_url=self.config.target_url,
            visited_urls=sorted(list(self.visited)),
            failed_urls=dict(self.failed),
            discovered_sitemaps=list(self.discovered_sitemaps),
            sitemap_url_count=len(self.sitemap_urls),
            total_pages_crawled=len(results),
            duration_seconds=round(duration, 2),
        )

        # Save report and update manifest
        self.save_crawl_report(report, results)
        return results, report

    def save_crawl_report(self, report: CrawlReport, results: List[CrawlResult]) -> None:
        """Persist crawl report and update site_manifest.json."""
        self.config.ensure_directories()
        report_file = self.config.reports_dir / "crawl_report.json"
        with open(report_file, "w", encoding="utf-8") as f:
            json.dump(report.to_dict(), f, indent=2)

        # Update site_manifest.json
        manifest_data = {
            "version": "1.0",
            "target_url": self.config.target_url,
            "status": "crawled",
            "last_crawl_timestamp": time.time(),
            "total_crawled_pages": report.total_pages_crawled,
            "pages": [
                {
                    "url": r.url,
                    "final_url": r.final_url,
                    "status_code": r.status_code,
                    "content_type": r.content_type,
                    "discovery_source": r.discovery_source,
                    "error": r.error,
                }
                for r in results
            ],
            "sitemaps": report.discovered_sitemaps,
        }
        with open(self.config.manifest_path, "w", encoding="utf-8") as f:
            json.dump(manifest_data, f, indent=2)
