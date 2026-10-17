"""Extractor module for Bali Agung Tours Website Reconstruction Tool.
Extracts semantic HTML metadata, headings hierarchy, text content, links,
image assets, and stylesheet references. Implements polite asset downloading
and source-to-destination URL mapping.
"""

from dataclasses import asdict, dataclass, field
import hashlib
import json
import logging
from pathlib import Path
import re
import time
from typing import Any, Dict, List, Optional, Set
from urllib.parse import unquote, urljoin, urlparse

from bs4 import BeautifulSoup
import requests

from config import DEFAULT_CONFIG, ReconstructionConfig

logger = logging.getLogger(__name__)

# Valid image extensions to permit downloading
PERMITTED_IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".svg", ".gif", ".ico"}

# Known external tracking or ad patterns to exclude
TRACKING_PATTERNS = [
    "facebook.com/tr",
    "google-analytics.com",
    "googletagmanager.com",
    "doubleclick.net",
    "pixel",
    "gravatar.com/avatar",
]


@dataclass
class ImageAsset:
    """Represents an extracted image asset with source and local destination tracking."""
    source_url: str
    alt_text: str = ""
    local_filename: str = ""
    local_rel_path: str = ""
    local_abs_path: str = ""
    downloaded: bool = False
    file_size_bytes: int = 0
    content_type: str = ""
    error: Optional[str] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class PageData:
    """Structured extraction data for a single web page."""
    url: str
    slug: str
    title: str = ""
    meta_description: str = ""
    canonical_url: str = ""
    og_title: str = ""
    og_description: str = ""
    og_image: str = ""
    headings: List[Dict[str, Any]] = field(default_factory=list)  # [{"tag": "h1", "text": "...", "classes": [...]}]
    paragraphs: List[str] = field(default_factory=list)
    links: List[Dict[str, Any]] = field(default_factory=list)  # [{"href": "...", "text": "...", "is_internal": bool}]
    images: List[ImageAsset] = field(default_factory=list)
    css_links: List[str] = field(default_factory=list)
    inline_styles: List[str] = field(default_factory=list)
    raw_html: str = ""
    extracted_at: float = field(default_factory=time.time)

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class ContentExtractor:
    """Extracts structured metadata, content, and assets from HTML pages."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": self.config.user_agent})
        # Persistent mapping: source_url -> relative local path
        self.asset_url_map: Dict[str, str] = {}
        self.last_download_time: float = 0.0

    def extract(self, url: str, html: str) -> PageData:
        """Parse HTML and extract metadata, structured content, and asset links."""
        soup = BeautifulSoup(html, "lxml")

        # Slug generation
        parsed_url = urlparse(url)
        path = parsed_url.path.strip("/")
        slug = path.split("/")[-1] if path else "home"
        if not slug:
            slug = "home"

        # Title
        title_tag = soup.find("title")
        title = title_tag.get_text(strip=True) if title_tag else ""

        # Meta description
        meta_desc = ""
        meta_tag = soup.find("meta", attrs={"name": "description"})
        if meta_tag and meta_tag.get("content"):
            meta_desc = meta_tag["content"].strip()

        # Canonical URL
        canonical = ""
        canonical_tag = soup.find("link", attrs={"rel": "canonical"})
        if canonical_tag and canonical_tag.get("href"):
            canonical = urljoin(url, canonical_tag["href"].strip())

        # OpenGraph Metadata
        og_title = ""
        og_desc = ""
        og_image = ""
        for m in soup.find_all("meta"):
            prop = m.get("property") or m.get("name") or ""
            if prop == "og:title" and m.get("content"):
                og_title = m["content"].strip()
            elif prop == "og:description" and m.get("content"):
                og_desc = m["content"].strip()
            elif prop == "og:image" and m.get("content"):
                og_image = urljoin(url, m["content"].strip())

        # Headings hierarchy
        headings: List[Dict[str, Any]] = []
        for h in soup.find_all(["h1", "h2", "h3", "h4", "h5", "h6"]):
            text = h.get_text(strip=True)
            if text:
                headings.append({
                    "tag": h.name,
                    "text": text,
                    "classes": h.get("class", []),
                    "id": h.get("id", ""),
                })

        # Paragraphs (excluding header, footer, script, style tags)
        paragraphs: List[str] = []
        main_content = soup.find("main") or soup.find("article") or soup.body or soup
        for p in main_content.find_all("p"):
            p_text = p.get_text(strip=True)
            if p_text and len(p_text) > 3:
                paragraphs.append(p_text)

        # Links (internal vs external categorization)
        links: List[Dict[str, Any]] = []
        seen_links = set()
        for a in soup.find_all("a", href=True):
            raw_href = a["href"].strip()
            if not raw_href or raw_href.startswith(("javascript:", "mailto:", "tel:", "#")):
                continue
            abs_href = urljoin(url, raw_href)
            if abs_href in seen_links:
                continue
            seen_links.add(abs_href)

            is_internal = self.config.is_allowed_url(abs_href)
            links.append({
                "href": abs_href,
                "text": a.get_text(strip=True),
                "is_internal": is_internal,
                "rel": a.get("rel", []),
            })

        # Extract permitted images with source-to-destination mapping
        images = self._extract_images(soup, url)

        # CSS links
        css_links: List[str] = []
        for link in soup.find_all("link", rel=lambda r: r and "stylesheet" in r):
            href = link.get("href")
            if href:
                css_links.append(urljoin(url, href))

        # Inline styles (useful for custom element styling)
        inline_styles: List[str] = []
        for style in soup.find_all("style"):
            content = style.get_text(strip=True)
            if content and len(content) < 10000:  # store reasonable inline style snippets
                inline_styles.append(content)

        return PageData(
            url=url,
            slug=slug,
            title=title,
            meta_description=meta_desc,
            canonical_url=canonical,
            og_title=og_title,
            og_description=og_desc,
            og_image=og_image,
            headings=headings,
            paragraphs=paragraphs,
            links=links,
            images=images,
            css_links=css_links,
            inline_styles=inline_styles,
            raw_html=html,
        )

    def _extract_images(self, soup: BeautifulSoup, page_url: str) -> List[ImageAsset]:
        """Extract images with support for lazy-loading attributes and domain filtering."""
        images: List[ImageAsset] = []
        seen_sources: Set[str] = set()

        for img in soup.find_all("img"):
            # Check lazy-loading sources first, then standard src
            src = (
                img.get("data-src")
                or img.get("data-lazy-src")
                or img.get("data-original")
                or img.get("src")
            )
            if not src:
                continue

            # Skip base64 data URIs used as lazy loading placeholders
            if src.startswith("data:image"):
                continue

            abs_src = urljoin(page_url, src)

            # Skip tracking pixels and unrelated external resources
            if any(tp in abs_src.lower() for tp in TRACKING_PATTERNS):
                continue

            # Only permit images from the allowed domain / CDN
            if not self.config.is_allowed_url(abs_src):
                continue

            if abs_src in seen_sources:
                continue
            seen_sources.add(abs_src)

            alt_text = img.get("alt", "").strip()
            local_filename = self._generate_local_filename(abs_src)
            rel_path = f"assets/{local_filename}"
            abs_path = str(self.config.assets_dir / local_filename)

            # Save mapping
            self.asset_url_map[abs_src] = rel_path

            images.append(
                ImageAsset(
                    source_url=abs_src,
                    alt_text=alt_text,
                    local_filename=local_filename,
                    local_rel_path=rel_path,
                    local_abs_path=abs_path,
                )
            )

        return images

    def _generate_local_filename(self, source_url: str) -> str:
        """Generate a safe, deterministic filename preserving extension and avoiding collisions."""
        parsed = urlparse(source_url)
        path = unquote(parsed.path)
        original_name = Path(path).name or "image"

        stem = Path(original_name).stem
        ext = Path(original_name).suffix.lower()

        if not ext or ext not in PERMITTED_IMAGE_EXTENSIONS:
            ext = ".jpg"

        # Sanitize stem
        clean_stem = re.sub(r"[^a-zA-Z0-9_\-]", "_", stem)[:40]
        # Hash source URL to guarantee uniqueness
        url_hash = hashlib.md5(source_url.encode("utf-8")).hexdigest()[:8]
        return f"{clean_stem}_{url_hash}{ext}"

    def throttle(self) -> None:
        """Respectful delay between asset downloads."""
        elapsed = time.time() - self.last_download_time
        if elapsed < self.config.request_delay:
            time.sleep(self.config.request_delay - elapsed)
        self.last_download_time = time.time()

    def download_image(self, asset: ImageAsset, overwrite: bool = False) -> bool:
        """Download a single permitted image asset to output/assets/ with polite throttling."""
        self.config.ensure_directories()
        target_file = Path(asset.local_abs_path)

        if target_file.exists() and not overwrite and target_file.stat().st_size > 0:
            asset.downloaded = True
            asset.file_size_bytes = target_file.stat().st_size
            return True

        self.throttle()
        try:
            resp = self.session.get(
                asset.source_url,
                timeout=self.config.request_timeout,
                stream=True,
            )
            if resp.status_code == 200:
                c_type = resp.headers.get("Content-Type", "")
                asset.content_type = c_type

                with open(target_file, "wb") as f:
                    for chunk in resp.iter_content(chunk_size=8192):
                        if chunk:
                            f.write(chunk)

                asset.downloaded = True
                asset.file_size_bytes = target_file.stat().st_size
                logger.info(f"Downloaded asset: {asset.local_filename} ({asset.file_size_bytes} bytes)")
                return True
            else:
                asset.error = f"HTTP {resp.status_code}"
                logger.warning(f"Failed to download asset {asset.source_url}: HTTP {resp.status_code}")
                return False
        except Exception as e:
            asset.error = str(e)
            logger.warning(f"Error downloading asset {asset.source_url}: {e}")
            return False

    def download_assets_for_page(
        self,
        page_data: PageData,
        max_assets: Optional[int] = None,
    ) -> int:
        """Download accessible images for a page and update the asset manifest."""
        downloaded_count = 0
        limit = max_assets if max_assets is not None else len(page_data.images)

        for img in page_data.images[:limit]:
            if self.download_image(img):
                downloaded_count += 1

        self.save_asset_manifest()
        return downloaded_count

    def save_asset_manifest(self) -> None:
        """Save persistent source-to-destination asset manifest JSON."""
        self.config.ensure_directories()
        manifest_path = self.config.assets_dir / "asset_manifest.json"
        with open(manifest_path, "w", encoding="utf-8") as f:
            json.dump(
                {
                    "generated_at": time.time(),
                    "total_mapped_assets": len(self.asset_url_map),
                    "mappings": self.asset_url_map,
                },
                f,
                indent=2,
            )
