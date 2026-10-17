"""Unit and integration tests for ReconstructionValidator module.
"""

import json
from pathlib import Path

import pytest

from config import ReconstructionConfig
from extractor import ImageAsset, PageData
from validator import ReconstructionValidator, ValidationReport


def test_validate_json_strings():
    validator = ReconstructionValidator()

    # Valid JSON
    valid_report = validator.validate_json_string('{"name": "Bali", "tours": [1, 2]}')
    assert valid_report.is_valid is True
    assert valid_report.errors_count == 0

    # Malformed JSON
    bad_report = validator.validate_json_string('{"name": "Bali", broken}')
    assert bad_report.is_valid is False
    assert bad_report.errors_count == 1
    assert "Failed to parse" in bad_report.issues[0].message


def test_validate_xml_strings():
    validator = ReconstructionValidator()

    valid_xml = '<rss><channel><title>Bali Agung</title></channel></rss>'
    rep = validator.validate_xml_string(valid_xml)
    assert rep.is_valid is True

    # Missing channel
    bad_xml_no_channel = '<rss><title>Bali Agung</title></rss>'
    rep_no_ch = validator.validate_xml_string(bad_xml_no_channel)
    assert rep_no_ch.is_valid is False
    assert any("channel" in i.message for i in rep_no_ch.issues)

    # Broken XML syntax
    broken_xml = '<rss><channel><title>Unclosed</rss>'
    rep_broken = validator.validate_xml_string(broken_xml)
    assert rep_broken.is_valid is False


def test_detect_duplicate_urls_and_empty_content():
    validator = ReconstructionValidator()
    pages = [
        PageData(url="https://bali-agung-tours.com/tour1/", slug="tour1", title="Tour 1", paragraphs=["Content"]),
        PageData(url="https://bali-agung-tours.com/tour1/", slug="tour1", title="Tour 1 Duplicate", paragraphs=["Content"]),
        PageData(url="https://bali-agung-tours.com/empty/", slug="empty", title="", paragraphs=[]),
    ]

    report = validator.validate_pages_integrity(pages)
    assert report.is_valid is False
    assert report.errors_count >= 1  # Duplicate URL error

    categories = [i.category for i in report.issues]
    assert "URL" in categories
    assert "CONTENT" in categories


def test_detect_broken_internal_links():
    validator = ReconstructionValidator()
    pages = [
        PageData(
            url="https://bali-agung-tours.com/home/",
            slug="home",
            title="Home",
            links=[
                {"href": "https://bali-agung-tours.com/deleted-tour/", "is_internal": True, "text": "Old Tour"}
            ],
            paragraphs=["Welcome"],
        )
    ]
    failed_urls = {"https://bali-agung-tours.com/deleted-tour/": "HTTP 404 Not Found"}

    report = validator.validate_pages_integrity(pages, known_failed_urls=failed_urls)
    assert report.is_valid is False
    assert any(i.category == "LINK" and "Broken internal link" in i.message for i in report.issues)


def test_validate_asset_manifest_missing_files(tmp_path):
    output_dir = tmp_path / "output"
    assets_dir = output_dir / "assets"
    assets_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = assets_dir / "asset_manifest.json"

    # Write manifest pointing to non-existent local file
    manifest_data = {
        "mappings": {
            "https://bali-agung-tours.com/missing.jpg": "assets/missing_file.jpg"
        }
    }
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest_data, f)

    config = ReconstructionConfig(
        project_root=tmp_path,
        output_dir=output_dir,
        assets_dir=assets_dir,
    )
    validator = ReconstructionValidator(config)

    report = validator.validate_asset_manifest(manifest_path, assets_dir)
    assert report.warnings_count >= 1
    assert any("missing on disk" in i.message for i in report.issues)


def test_validate_elementor_templates_schema(tmp_path):
    elementor_dir = tmp_path / "elementor-templates"
    elementor_dir.mkdir(parents=True, exist_ok=True)

    # Valid template
    valid_file = elementor_dir / "valid.json"
    valid_file.write_text('{"version": "0.4", "title": "Valid", "type": "page", "content": []}', encoding="utf-8")

    # Invalid template missing required content key
    invalid_file = elementor_dir / "invalid.json"
    invalid_file.write_text('{"title": "Missing Version and Content"}', encoding="utf-8")

    validator = ReconstructionValidator()
    report = validator.validate_elementor_templates(elementor_dir)

    assert report.is_valid is False
    assert report.errors_count >= 1
    assert any("missing required Elementor schema keys" in i.message for i in report.issues)


def test_master_validation_report_generation(tmp_path):
    reports_dir = tmp_path / "reports"
    wxr_path = tmp_path / "wordpress-export.xml"
    manifest_path = tmp_path / "site_manifest.json"

    reports_dir.mkdir(parents=True, exist_ok=True)
    wxr_path.write_text('<rss><channel><title>Bali Agung</title></channel></rss>', encoding="utf-8")
    manifest_path.write_text('{"version": "1.0", "pages": []}', encoding="utf-8")

    config = ReconstructionConfig(
        project_root=tmp_path,
        reports_dir=reports_dir,
        wordpress_export_path=wxr_path,
        manifest_path=manifest_path,
        elementor_dir=tmp_path / "elementor-templates",
        assets_dir=tmp_path / "assets",
    )
    validator = ReconstructionValidator(config)

    report = validator.validate_project()
    assert report.is_valid is True

    json_path, md_path = validator.save_validation_report(report)
    assert json_path.exists()
    assert md_path.exists()
    assert "Reconstruction Validation Report" in md_path.read_text(encoding="utf-8")
