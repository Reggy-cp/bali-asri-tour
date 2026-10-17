"""Unit and integration tests for WordPress exporter module.
"""

import json
from pathlib import Path
import xml.etree.ElementTree as ET

import pytest

from config import ReconstructionConfig
from extractor import ImageAsset, PageData
from wordpress_exporter import ExportReport, WordPressExporter


def test_wxr_xml_generation():
    exporter = WordPressExporter()
    pages = [
        PageData(
            url="https://bali-agung-tours.com/about/",
            slug="about",
            title="About Bali Agung Tours",
            headings=[{"tag": "h1", "text": "About Us"}],
            paragraphs=["We provide luxury private tours in Bali."],
            images=[ImageAsset(source_url="https://bali-agung-tours.com/driver.jpg", alt_text="Driver")],
        )
    ]

    wxr_str = exporter.generate_wxr(pages)

    # Validate XML well-formedness
    root = ET.fromstring(wxr_str)
    assert root.tag == "rss"
    channel = root.find("channel")
    assert channel is not None

    wxr_version = channel.find("{http://wordpress.org/export/1.2/}wxr_version")
    assert wxr_version is not None
    assert wxr_version.text == "1.2"

    items = channel.findall("item")
    assert len(items) == 1
    item = items[0]
    assert item.find("title").text == "About Bali Agung Tours"
    assert item.find("{http://wordpress.org/export/1.2/}post_name").text == "about"
    assert item.find("{http://wordpress.org/export/1.2/}post_type").text == "page"
    assert item.find("{http://wordpress.org/export/1.2/}status").text == "publish"


def test_export_wxr_and_manifest_files(tmp_path):
    output_dir = tmp_path / "output"
    assets_dir = output_dir / "assets"
    reports_dir = output_dir / "reports"
    wxr_file = output_dir / "wordpress-export.xml"

    config = ReconstructionConfig(
        output_dir=output_dir,
        assets_dir=assets_dir,
        reports_dir=reports_dir,
        wordpress_export_path=wxr_file,
    )
    exporter = WordPressExporter(config)

    pages = [
        PageData(
            url="https://bali-agung-tours.com/tours/",
            slug="tours",
            title="Bali Tours List",
            paragraphs=["Browse our full day tour collection."],
            images=[
                ImageAsset(
                    source_url="https://bali-agung-tours.com/tour1.jpg",
                    alt_text="Tour 1",
                    local_filename="tour1_12345678.jpg",
                    local_rel_path="assets/tour1_12345678.jpg",
                    downloaded=True,
                    file_size_bytes=1024,
                )
            ],
        )
    ]

    # Export WXR
    saved_wxr = exporter.export_wxr(pages)
    assert saved_wxr.exists()
    assert "<wp:post_name>tours</wp:post_name>" in saved_wxr.read_text(encoding="utf-8")

    # Export Manifest
    saved_manifest = exporter.export_asset_manifest(pages)
    assert saved_manifest.exists()
    with open(saved_manifest, "r", encoding="utf-8") as f:
        manifest_data = json.load(f)
    assert manifest_data["total_assets"] == 1
    assert manifest_data["assets"][0]["source_url"] == "https://bali-agung-tours.com/tour1.jpg"

    # Export Report
    saved_report = exporter.create_import_report(pages, saved_wxr, saved_manifest)
    assert saved_report.exists()
    assert "Import Instructions" in saved_report.read_text(encoding="utf-8")
