"""Unit and mock tests for layout_analyzer module.
"""

import json
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from config import ReconstructionConfig
from layout_analyzer import LayoutAnalyzer, LayoutAnalysisResult, PageSection, SectionType


MOCK_COMPLEX_HTML = """
<!DOCTYPE html>
<html>
<head><title>Bali Tour Packages</title></head>
<body>
    <header class="site-header">
        <nav><a href="/">Home</a><a href="/tours">Tours</a></nav>
    </header>
    
    <!-- Hero Section -->
    <section class="elementor-section elementor-top-section hero-banner">
        <h1>Discover Bali with Local Drivers</h1>
        <p>Customized private tours across Bali at best prices.</p>
        <a href="#book" class="elementor-button">Explore Tours</a>
    </section>
    
    <!-- Card Grid Section -->
    <section class="elementor-section elementor-top-section tour-packages-grid">
        <h2>Popular Day Tours</h2>
        <div class="elementor-row">
            <div class="elementor-column card">
                <h3>Ubud Tour</h3>
                <p>Rice terraces and holy springs.</p>
                <img src="/img1.jpg">
            </div>
            <div class="elementor-column card">
                <h3>Nusa Penida Tour</h3>
                <p>Kelingking beach and crystal bay.</p>
                <img src="/img2.jpg">
            </div>
            <div class="elementor-column card">
                <h3>Bedugul & Tanah Lot</h3>
                <p>Iconic water temple and sunset.</p>
                <img src="/img3.jpg">
            </div>
        </div>
    </section>
    
    <!-- Image Gallery -->
    <section class="elementor-section elementor-top-section gallery-slider">
        <h2>Our Tour Gallery</h2>
        <div class="swiper-container">
            <img src="/g1.jpg"><img src="/g2.jpg"><img src="/g3.jpg"><img src="/g4.jpg"><img src="/g5.jpg">
        </div>
    </section>
    
    <!-- Text Block -->
    <section class="elementor-section elementor-top-section about-block">
        <h2>Why Choose Bali Agung Tours</h2>
        <p>We are a certified Indonesian tour operator with over 10 years experience providing safe and friendly transport.</p>
        <p>All our cars are air-conditioned, clean, and drivers speak fluent English.</p>
    </section>
    
    <!-- Call to Action with unsupported form and widget -->
    <section class="elementor-section elementor-top-section cta-booking">
        <h2>Book Your Private Driver Today</h2>
        <a href="https://wa.me/62812345678" class="button">WhatsApp Us Now</a>
        <form action="/submit-inquiry" method="POST">
            <input type="text" name="name" placeholder="Your Name">
            <button type="submit">Submit</button>
        </form>
        <div class="trustindex-widget">
            <iframe src="https://trustindex.io/reviews"></iframe>
        </div>
    </section>
    
    <footer class="site-footer">
        <p>&copy; 2026 Bali Agung Tours. All Rights Reserved.</p>
    </footer>
</body>
</html>
"""


def test_section_identification_and_ordering():
    analyzer = LayoutAnalyzer()
    layout = analyzer.analyze_html("https://bali-agung-tours.com/tours", MOCK_COMPLEX_HTML)

    assert layout.url == "https://bali-agung-tours.com/tours"
    assert layout.slug == "tours"
    assert len(layout.sections) == 7

    types = [s.section_type for s in layout.sections]
    assert types[0] == SectionType.NAVIGATION
    assert types[1] == SectionType.HERO
    assert types[2] == SectionType.CARD_GRID
    assert types[3] == SectionType.GALLERY
    assert types[4] == SectionType.TEXT_BLOCK
    assert types[5] == SectionType.CALL_TO_ACTION
    assert types[6] == SectionType.FOOTER

    # Check ordering is sequential
    for i, s in enumerate(layout.sections):
        assert s.order == i


def test_headings_and_snippets_captured():
    analyzer = LayoutAnalyzer()
    layout = analyzer.analyze_html("https://bali-agung-tours.com/tours", MOCK_COMPLEX_HTML)

    hero = layout.sections[1]
    assert hero.heading == "Discover Bali with Local Drivers"
    assert len(hero.links) >= 1
    assert hero.links[0]["text"] == "Explore Tours"

    cards = layout.sections[2]
    assert cards.heading == "Popular Day Tours"
    assert cards.subheading == "Ubud Tour"

    cta = layout.sections[5]
    assert cta.heading == "Book Your Private Driver Today"
    assert any("WhatsApp" in l["text"] for l in cta.links)


def test_unsupported_elements_detection():
    analyzer = LayoutAnalyzer()
    layout = analyzer.analyze_html("https://bali-agung-tours.com/tours", MOCK_COMPLEX_HTML)

    cta = layout.sections[5]
    assert len(cta.unsupported_elements) >= 2
    unsupported_str = " ".join(cta.unsupported_elements).lower()
    assert "form" in unsupported_str
    assert "iframe" in unsupported_str or "trustindex" in unsupported_str
    assert layout.unsupported_elements_count >= 2


def test_layout_report_serialization(tmp_path):
    reports_dir = tmp_path / "reports"
    config = ReconstructionConfig(reports_dir=reports_dir)
    analyzer = LayoutAnalyzer(config)

    layout = analyzer.analyze_html("https://bali-agung-tours.com/tours", MOCK_COMPLEX_HTML)
    report_file = reports_dir / f"layout_{layout.slug}.json"

    assert report_file.exists()
    with open(report_file, "r", encoding="utf-8") as f:
        data = json.load(f)

    assert data["slug"] == "tours"
    assert data["total_sections"] == 7
    assert data["overall_confidence"] > 0.8
    assert len(data["sections"]) == 7


def test_capture_screenshot_mocked(tmp_path):
    reports_dir = tmp_path / "reports"
    config = ReconstructionConfig(reports_dir=reports_dir)
    analyzer = LayoutAnalyzer(config)

    mock_page = MagicMock()
    mock_browser = MagicMock()
    mock_browser.new_page.return_value = mock_page
    mock_playwright = MagicMock()
    mock_playwright.chromium.launch.return_value = mock_browser

    with patch("playwright.sync_api.sync_playwright") as mock_pw_ctx:
        mock_pw_ctx.return_value.__enter__.return_value = mock_playwright
        res_path = analyzer.capture_screenshot("https://bali-agung-tours.com/", slug="test_shot")

        assert res_path is not None
        assert "test_shot.png" in res_path
        mock_page.goto.assert_called_once()
        mock_page.screenshot.assert_called_once()
