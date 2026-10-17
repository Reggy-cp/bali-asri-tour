"""Configuration settings for Bali Agung Tours Website Reconstruction Tool.
"""

from dataclasses import dataclass, field
import os
from pathlib import Path
from typing import List
from urllib.parse import urlparse, urlunparse


@dataclass
class ReconstructionConfig:
    """Central configuration for crawling, extracting, and reconstructing the site."""

    # Target Website Settings
    target_url: str = "https://bali-agung-tours.com/"
    allowed_domains: List[str] = field(
        default_factory=lambda: ["bali-agung-tours.com", "www.bali-agung-tours.com"]
    )

    # Polite Crawling Settings
    user_agent: str = (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/126.0.0.0 Safari/537.36 (BaliAgungReconstructionBot/1.0)"
    )
    request_delay: float = 1.0  # Seconds between requests to respect server load
    request_timeout: int = 15  # Seconds for HTTP request timeouts
    max_pages: int = 50  # Default crawl safety limit
    respect_robots_txt: bool = True
    max_retries: int = 3
    backoff_factor: float = 1.5

    # Directory Paths
    project_root: Path = field(default_factory=lambda: Path(__file__).resolve().parent)
    output_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent / "output")
    assets_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent / "output" / "assets")
    elementor_dir: Path = field(
        default_factory=lambda: Path(__file__).resolve().parent / "output" / "elementor-templates"
    )
    reports_dir: Path = field(default_factory=lambda: Path(__file__).resolve().parent / "output" / "reports")
    manifest_path: Path = field(
        default_factory=lambda: Path(__file__).resolve().parent / "output" / "site_manifest.json"
    )
    wordpress_export_path: Path = field(
        default_factory=lambda: Path(__file__).resolve().parent / "output" / "wordpress-export.xml"
    )

    def ensure_directories(self) -> None:
        """Create all required output directories if they do not exist."""
        for directory in [self.output_dir, self.assets_dir, self.elementor_dir, self.reports_dir]:
            directory.mkdir(parents=True, exist_ok=True)

    def is_allowed_url(self, url: str) -> bool:
        """Check if a URL belongs to the allowed domain."""
        parsed = urlparse(url)
        hostname = (parsed.hostname or "").lower()
        if not hostname:
            return False
        return any(
            hostname == domain.lower() or hostname.endswith(f".{domain.lower()}")
            for domain in self.allowed_domains
        )

    @staticmethod
    def normalize_url(url: str) -> str:
        """Normalize URL: lower-case host, remove fragment, standardize path."""
        if not url:
            return ""
        parsed = urlparse(url)
        scheme = parsed.scheme.lower() if parsed.scheme else "https"
        netloc = parsed.netloc.lower()
        # Drop port 80/443 default
        if netloc.endswith(":443") and scheme == "https":
            netloc = netloc[:-4]
        elif netloc.endswith(":80") and scheme == "http":
            netloc = netloc[:-3]

        path = parsed.path
        if not path:
            path = "/"
        elif path != "/" and path.endswith("/"):
            # keep trailing slash consistent for WordPress directories
            path = path
        # Remove empty query parameters or anchors
        return urlunparse((scheme, netloc, path, "", parsed.query, ""))


# Default configuration instance
DEFAULT_CONFIG = ReconstructionConfig()
