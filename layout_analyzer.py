"""Layout Analyzer module for Bali Agung Tours Website Reconstruction Tool.
Decomposes webpage DOM into structured semantic sections (Navigation, Hero,
Card Grids, Text Blocks, Galleries, Calls to Action, Footer). Detects unsupported
elements and provides visual screenshot capture via Playwright.
"""

from dataclasses import asdict, dataclass, field
from enum import Enum
import json
import logging
from pathlib import Path
import re
import time
from typing import Any, Dict, List, Optional, Set, Tuple
from urllib.parse import urlparse

from bs4 import BeautifulSoup, Tag

from config import DEFAULT_CONFIG, ReconstructionConfig

logger = logging.getLogger(__name__)


class SectionType(str, Enum):
    NAVIGATION = "navigation"
    HERO = "hero"
    CARD_GRID = "card_grid"
    TEXT_BLOCK = "text_block"
    GALLERY = "gallery"
    CALL_TO_ACTION = "call_to_action"
    FOOTER = "footer"
    UNSUPPORTED = "unsupported"
    UNKNOWN = "unknown"


@dataclass
class PageSection:
    """Represents an identified visual/structural section of a webpage."""
    section_type: SectionType
    order: int
    confidence: float  # 0.0 to 1.0
    html_tag: str
    classes: List[str] = field(default_factory=list)
    id_attr: str = ""
    heading: Optional[str] = None
    subheading: Optional[str] = None
    content_snippets: List[str] = field(default_factory=list)
    images: List[str] = field(default_factory=list)
    links: List[Dict[str, str]] = field(default_factory=list)
    unsupported_elements: List[str] = field(default_factory=list)
    raw_html: str = ""

    def to_dict(self) -> Dict[str, Any]:
        data = asdict(self)
        data["section_type"] = self.section_type.value
        return data


@dataclass
class LayoutAnalysisResult:
    """Outcome of layout analysis on a single page."""
    url: str
    slug: str
    sections: List[PageSection] = field(default_factory=list)
    screenshot_path: Optional[str] = None
    overall_confidence: float = 0.0
    unsupported_elements_count: int = 0
    analyzed_at: float = field(default_factory=time.time)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "url": self.url,
            "slug": self.slug,
            "overall_confidence": self.overall_confidence,
            "unsupported_elements_count": self.unsupported_elements_count,
            "screenshot_path": self.screenshot_path,
            "analyzed_at": self.analyzed_at,
            "total_sections": len(self.sections),
            "sections": [s.to_dict() for s in self.sections],
        }


class LayoutAnalyzer:
    """Analyzes HTML hierarchy and DOM structure to identify Elementor-mappable sections."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG
        self.screenshots_dir = self.config.reports_dir / "screenshots"

    def analyze_html(
        self,
        url: str,
        html: str,
        capture_screenshot: bool = False,
    ) -> LayoutAnalysisResult:
        """Inspect HTML DOM and decompose into sequential semantic sections."""
        soup = BeautifulSoup(html, "lxml")
        parsed_url = urlparse(url)
        path = parsed_url.path.strip("/")
        slug = path.split("/")[-1] if path else "home"
        if not slug:
            slug = "home"

        candidate_elements = self._find_candidate_sections(soup)
        sections: List[PageSection] = []
        total_unsupported = 0

        for order, elem in enumerate(candidate_elements):
            sec_type, confidence, unsupported = self._classify_section(elem, order, len(candidate_elements))
            total_unsupported += len(unsupported)

            # Headings
            h_tags = elem.find_all(["h1", "h2", "h3", "h4"])
            heading_text = h_tags[0].get_text(strip=True) if h_tags else None
            subheading_text = h_tags[1].get_text(strip=True) if len(h_tags) > 1 else None

            # Snippets
            snippets = [
                p.get_text(strip=True)
                for p in elem.find_all("p")
                if len(p.get_text(strip=True)) > 15
            ][:3]

            # Images
            imgs = []
            for img in elem.find_all("img"):
                src = img.get("data-src") or img.get("src")
                if src and not src.startswith("data:image"):
                    imgs.append(src)

            # Links / Buttons
            links = []
            for a in elem.find_all("a", href=True):
                txt = a.get_text(strip=True)
                href = a["href"].strip()
                if txt and not href.startswith("javascript:") and href != "#":
                    links.append({"text": txt, "href": href})

            sections.append(
                PageSection(
                    section_type=sec_type,
                    order=order,
                    confidence=confidence,
                    html_tag=elem.name,
                    classes=elem.get("class", []),
                    id_attr=elem.get("id", ""),
                    heading=heading_text,
                    subheading=subheading_text,
                    content_snippets=snippets,
                    images=imgs[:6],
                    links=links[:5],
                    unsupported_elements=unsupported,
                    raw_html=str(elem)[:800],
                )
            )

        avg_conf = (
            sum(s.confidence for s in sections) / len(sections)
            if sections
            else 0.0
        )

        screenshot_file = None
        if capture_screenshot:
            screenshot_file = self.capture_screenshot(url, slug=slug)

        result = LayoutAnalysisResult(
            url=url,
            slug=slug,
            sections=sections,
            screenshot_path=screenshot_file,
            overall_confidence=round(avg_conf, 2),
            unsupported_elements_count=total_unsupported,
        )

        self.save_layout_report(result)
        return result

    def _find_candidate_sections(self, soup: BeautifulSoup) -> List[Tag]:
        """Extract top-level sections in DOM order, supporting Elementor sections and standard HTML."""
        body = soup.find("body") or soup
        candidates: List[Tag] = []

        # Check for header
        header = body.find("header") or body.find(class_=lambda c: c and "site-header" in c)
        if header and isinstance(header, Tag):
            candidates.append(header)

        # Check for native Elementor sections / containers
        elementor_sections = body.find_all(
            class_=lambda c: c and ("elementor-top-section" in c or "e-con--top" in c)
        )
        if elementor_sections:
            for sec in elementor_sections:
                if sec not in candidates and isinstance(sec, Tag):
                    candidates.append(sec)
        else:
            # Fallback to standard semantic HTML
            main_elem = body.find("main") or body
            semantic_sections = main_elem.find_all(["section", "article"], recursive=False)
            if not semantic_sections:
                semantic_sections = [
                    div for div in main_elem.find_all("div", recursive=False)
                    if len(div.find_all()) >= 3
                ]
            for sec in semantic_sections:
                if sec not in candidates and isinstance(sec, Tag):
                    candidates.append(sec)

        # Check for footer
        footer = body.find("footer") or body.find(class_=lambda c: c and "site-footer" in c)
        if footer and isinstance(footer, Tag) and footer not in candidates:
            candidates.append(footer)

        return candidates

    def _classify_section(
        self,
        element: Tag,
        order: int,
        total_sections: int,
    ) -> Tuple[SectionType, float, List[str]]:
        """Classify section role, confidence score, and record unsupported elements."""
        class_str = " ".join(element.get("class", [])).lower()
        id_str = (element.get("id") or "").lower()
        combined = f"{class_str} {id_str} {element.name}"
        unsupported: List[str] = []

        # Detect unsupported widgets and embeds
        if element.find("iframe"):
            for ifr in element.find_all("iframe"):
                src = ifr.get("src", "embedded frame")
                unsupported.append(f"iframe: {src[:50]}")
        if element.find("form"):
            unsupported.append("Interactive Web Form (requires Form plugin mapping)")
        if "trustindex" in combined or element.find(class_=lambda c: c and "trustindex" in c):
            unsupported.append("TripAdvisor / TrustIndex dynamic review widget")

        # 1. Navigation / Header
        if "header" in combined or "nav" in combined or element.name == "header":
            return SectionType.NAVIGATION, 0.95, unsupported

        # 2. Footer
        if "footer" in combined or element.name == "footer" or order == total_sections - 1 and ("copyright" in element.get_text().lower()):
            return SectionType.FOOTER, 0.95, unsupported

        # 3. Hero Section (typically order 0 or 1, h1 present or banner styling)
        if order <= 1 and (element.find("h1") or "hero" in combined or "banner" in combined):
            return SectionType.HERO, 0.90, unsupported

        # 4. Card Grid (multiple cards, tour packages, repeated structured items)
        cards = element.find_all(class_=lambda c: c and any(w in c.lower() for w in ["card", "post-item", "tour", "package", "elementor-post"]))
        if len(cards) >= 2 or "grid" in combined or len(element.find_all(class_=lambda c: c and "elementor-column" in c)) >= 3:
            return SectionType.CARD_GRID, 0.85, unsupported

        # 5. Image Gallery / Swiper Slider
        if len(element.find_all("img")) >= 4 or "gallery" in combined or "swiper" in combined or "slider" in combined:
            return SectionType.GALLERY, 0.80, unsupported

        # 6. Call To Action (prominent button, WhatsApp inquiry, book now)
        button_texts = [a.get_text(strip=True).lower() for a in element.find_all(["a", "button"])]
        if any(cta_term in " ".join(button_texts) for cta_term in ["book", "contact", "whatsapp", "inquire", "chat"]):
            return SectionType.CALL_TO_ACTION, 0.85, unsupported

        # 7. Text Block
        if element.find_all(["p", "h2", "h3"]) and len(element.get_text(strip=True)) > 60:
            return SectionType.TEXT_BLOCK, 0.75, unsupported

        return SectionType.UNKNOWN, 0.45, unsupported

    def capture_screenshot(
        self,
        url: str,
        slug: Optional[str] = None,
        full_page: bool = True,
        viewport_width: int = 1280,
        viewport_height: int = 800,
    ) -> Optional[str]:
        """Capture full-page visual screenshot using Playwright Chromium."""
        self.screenshots_dir.mkdir(parents=True, exist_ok=True)
        clean_slug = slug or "screenshot"
        screenshot_filename = f"{clean_slug}.png"
        screenshot_path = self.screenshots_dir / screenshot_filename

        try:
            from playwright.sync_api import sync_playwright

            with sync_playwright() as p:
                browser = p.chromium.launch(headless=True)
                page = browser.new_page(
                    viewport={"width": viewport_width, "height": viewport_height},
                    user_agent=self.config.user_agent,
                )
                logger.info(f"Navigating to {url} with Playwright for screenshot...")
                page.goto(url, wait_until="domcontentloaded", timeout=self.config.request_timeout * 1000)
                # Brief wait for animations/lazyloads to settle
                page.wait_for_timeout(1000)
                page.screenshot(path=str(screenshot_path), full_page=full_page)
                browser.close()

            logger.info(f"Visual screenshot saved to: {screenshot_path}")
            return str(screenshot_path)
        except Exception as e:
            logger.warning(f"Failed to capture Playwright screenshot for {url}: {e}")
            return None

    def save_layout_report(self, result: LayoutAnalysisResult) -> Path:
        """Persist layout analysis results into output/reports/."""
        self.config.ensure_directories()
        report_path = self.config.reports_dir / f"layout_{result.slug}.json"
        with open(report_path, "w", encoding="utf-8") as f:
            json.dump(result.to_dict(), f, indent=2)
        return report_path
