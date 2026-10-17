"""Tests verifying baseline logic across extraction, generation, export, validation,
and required directory/file structure.
"""

from pathlib import Path
import json

from config import DEFAULT_CONFIG
from extractor import ContentExtractor, PageData, ImageAsset
from layout_analyzer import LayoutAnalyzer, SectionType
from elementor_generator import ElementorGenerator
from wordpress_exporter import WordPressExporter
from validator import ReconstructionValidator


SAMPLE_HTML = """
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Bali Agung Tours | Authentic Bali Experience</title>
    <meta name="description" content="Discover best tours in Bali with private driver.">
    <link rel="canonical" href="https://bali-agung-tours.com/">
    <link rel="stylesheet" href="/wp-content/themes/bali/style.css">
</head>
<body>
    <header class="site-header">
        <nav><a href="/">Home</a><a href="/tours/">Tours</a></nav>
    </header>
    <main>
        <section class="hero-section">
            <h1>Welcome to Bali Agung Tours</h1>
            <p>Experience the beauty of Bali with experienced local guides.</p>
            <img src="/images/hero.jpg" alt="Bali Temple">
        </section>
        <section class="tour-cards">
            <h2>Popular Day Tours</h2>
            <div class="card">
                <h3>Ubud Cultural Tour</h3>
                <p>Visit sacred temples and rice terraces.</p>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2026 Bali Agung Tours</p>
    </footer>
</body>
</html>
"""


def test_extractor_baseline():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/", SAMPLE_HTML)

    assert page.title == "Bali Agung Tours | Authentic Bali Experience"
    assert page.meta_description == "Discover best tours in Bali with private driver."
    assert page.canonical_url == "https://bali-agung-tours.com/"
    assert page.slug == "home"
    assert any(h["text"] == "Welcome to Bali Agung Tours" for h in page.headings)
    assert any("beauty of Bali" in p for p in page.paragraphs)
    assert len(page.images) == 1
    assert page.images[0].source_url == "https://bali-agung-tours.com/images/hero.jpg"
    assert page.images[0].alt_text == "Bali Temple"
    assert any("style.css" in c for c in page.css_links)


def test_layout_analyzer_baseline():
    analyzer = LayoutAnalyzer()
    layout = analyzer.analyze_html("https://bali-agung-tours.com/", SAMPLE_HTML)

    assert layout.url == "https://bali-agung-tours.com/"
    assert len(layout.sections) >= 3
    section_types = [s.section_type for s in layout.sections]
    assert SectionType.NAVIGATION in section_types
    assert SectionType.HERO in section_types
    assert SectionType.FOOTER in section_types
    assert layout.overall_confidence > 0.5


def test_elementor_generator_baseline():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/", SAMPLE_HTML)

    analyzer = LayoutAnalyzer()
    layout = analyzer.analyze_html("https://bali-agung-tours.com/", SAMPLE_HTML)

    generator = ElementorGenerator()
    template = generator.generate_page_template(page, layout)

    template_dict = template.to_dict()
    assert template_dict["version"] == "0.4"
    assert template_dict["type"] == "page"
    assert len(template_dict["content"]) > 0

    json_str = template.to_json()
    parsed_json = json.loads(json_str)
    assert parsed_json["title"] == template.title


def test_wordpress_exporter_baseline():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/", SAMPLE_HTML)

    exporter = WordPressExporter()
    wxr = exporter.generate_wxr([page])

    assert "<?xml version=" in wxr
    assert "<wp:wxr_version>1.2</wp:wxr_version>" in wxr
    assert "<title>Bali Agung Tours | Authentic Bali Experience</title>" in wxr
    assert "<wp:post_type>page</wp:post_type>" in wxr

    # Test asset manifest
    manifest = exporter.generate_asset_manifest([page])
    assert manifest["total_assets"] == 1
    assert manifest["assets"][0]["source_url"] == "https://bali-agung-tours.com/images/hero.jpg"


def test_validator_baseline():
    validator = ReconstructionValidator()

    # Valid JSON test
    valid_json = '{"version": "0.4", "title": "Home"}'
    report = validator.validate_json_string(valid_json)
    assert report.is_valid is True

    # Invalid JSON test
    invalid_json = '{"version": "0.4", title: missing_quotes}'
    report_bad_json = validator.validate_json_string(invalid_json)
    assert report_bad_json.is_valid is False
    assert report_bad_json.errors_count == 1

    # Valid XML test
    valid_xml = "<rss><channel><title>Test</title></channel></rss>"
    report_xml = validator.validate_xml_string(valid_xml)
    assert report_xml.is_valid is True

    # Invalid XML test
    invalid_xml = "<rss><channel><title>Unclosed</channel></rss>"
    report_bad_xml = validator.validate_xml_string(invalid_xml)
    assert report_bad_xml.is_valid is False


def test_output_structure_requirements():
    """Verify that all required output directories and files exist as specified."""
    project_root = DEFAULT_CONFIG.project_root
    output_dir = project_root / "output"
    assert output_dir.is_dir(), "output/ must exist"
    assert (output_dir / "assets").is_dir(), "output/assets/ must exist"
    assert (output_dir / "elementor-templates").is_dir(), "output/elementor-templates/ must exist"
    assert (output_dir / "reports").is_dir(), "output/reports/ must exist"
    assert (output_dir / "site_manifest.json").is_file(), "output/site_manifest.json must exist"
    assert (output_dir / "wordpress-export.xml").is_file(), "output/wordpress-export.xml must exist"
