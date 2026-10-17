"""Unit and mock tests for extractor module.
"""

import json
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from config import ReconstructionConfig
from extractor import ContentExtractor, ImageAsset, PageData


SAMPLE_RICH_HTML = """
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Exclusive Ubud Tour | Bali Agung Tours</title>
    <meta name="description" content="Discover Ubud's hidden waterfalls and temples.">
    <link rel="canonical" href="https://bali-agung-tours.com/tours/ubud/">
    <meta property="og:title" content="Exclusive Ubud Tour">
    <meta property="og:description" content="Discover Ubud's hidden waterfalls and temples.">
    <meta property="og:image" content="https://bali-agung-tours.com/images/ubud-og.jpg">
    <link rel="stylesheet" href="https://bali-agung-tours.com/wp-content/themes/bali/style.css">
    <style>
        .custom-banner { background-color: #2c3e50; }
    </style>
</head>
<body>
    <header>
        <a href="/">Home</a>
        <a href="https://tripadvisor.com/review">External TripAdvisor</a>
    </header>
    <main>
        <h1 class="main-title" id="top-heading">Private Ubud Day Tour</h1>
        <p>Explore the cultural heart of Bali with our private luxury transport.</p>
        
        <h2 class="section-title">Tour Highlights</h2>
        <p>Visit Tegenungan Waterfall, Tegalalang Rice Terrace, and Monkey Forest.</p>
        
        <!-- Lazy loaded image with data-src and base64 placeholder -->
        <img src="data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=" 
             data-src="https://bali-agung-tours.com/wp-content/uploads/2026/05/tegalalang.jpg" 
             alt="Tegalalang Rice Terrace" />
             
        <!-- Standard permitted image -->
        <img src="/wp-content/uploads/2026/05/waterfall.png" alt="Tegenungan Waterfall" />
        
        <!-- Tracking pixel that must be excluded -->
        <img src="https://www.facebook.com/tr?id=123456" alt="" />
        
        <!-- Unrelated external ad image -->
        <img src="https://doubleclick.net/ad.png" alt="Ad" />
    </main>
</body>
</html>
"""


def test_extractor_metadata_and_opengraph():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/tours/ubud/", SAMPLE_RICH_HTML)

    assert page.title == "Exclusive Ubud Tour | Bali Agung Tours"
    assert page.meta_description == "Discover Ubud's hidden waterfalls and temples."
    assert page.canonical_url == "https://bali-agung-tours.com/tours/ubud/"
    assert page.og_title == "Exclusive Ubud Tour"
    assert page.og_description == "Discover Ubud's hidden waterfalls and temples."
    assert page.og_image == "https://bali-agung-tours.com/images/ubud-og.jpg"
    assert page.slug == "ubud"


def test_extractor_headings_and_paragraphs():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/tours/ubud/", SAMPLE_RICH_HTML)

    assert len(page.headings) == 2
    h1 = page.headings[0]
    assert h1["tag"] == "h1"
    assert h1["text"] == "Private Ubud Day Tour"
    assert "main-title" in h1["classes"]
    assert h1["id"] == "top-heading"

    assert len(page.paragraphs) == 2
    assert "Explore the cultural heart of Bali" in page.paragraphs[0]


def test_extractor_links_internal_vs_external():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/tours/ubud/", SAMPLE_RICH_HTML)

    assert len(page.links) == 2
    internal_links = [l for l in page.links if l["is_internal"]]
    external_links = [l for l in page.links if not l["is_internal"]]

    assert len(internal_links) == 1
    assert internal_links[0]["href"] == "https://bali-agung-tours.com/"

    assert len(external_links) == 1
    assert "tripadvisor.com" in external_links[0]["href"]


def test_extractor_lazy_and_filtered_images():
    extractor = ContentExtractor()
    page = extractor.extract("https://bali-agung-tours.com/tours/ubud/", SAMPLE_RICH_HTML)

    # Tracking pixel and external ad must be omitted!
    image_urls = [img.source_url for img in page.images]
    assert len(image_urls) == 2

    # Verify lazy data-src was captured
    assert "https://bali-agung-tours.com/wp-content/uploads/2026/05/tegalalang.jpg" in image_urls
    # Verify relative URL was resolved
    assert "https://bali-agung-tours.com/wp-content/uploads/2026/05/waterfall.png" in image_urls

    # Verify no tracking pixel
    assert not any("facebook.com" in url for url in image_urls)
    assert not any("doubleclick.net" in url for url in image_urls)

    # Check local filenames and mapping
    tegalalang_asset = next(img for img in page.images if "tegalalang" in img.source_url)
    assert tegalalang_asset.local_filename.startswith("tegalalang_")
    assert tegalalang_asset.local_filename.endswith(".jpg")
    assert tegalalang_asset.source_url in extractor.asset_url_map


def test_asset_download_and_manifest(tmp_path):
    output_dir = tmp_path / "output"
    assets_dir = output_dir / "assets"
    config = ReconstructionConfig(
        output_dir=output_dir,
        assets_dir=assets_dir,
        request_delay=0.0,
    )
    extractor = ContentExtractor(config)
    page = extractor.extract("https://bali-agung-tours.com/tours/ubud/", SAMPLE_RICH_HTML)

    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.headers = {"Content-Type": "image/jpeg"}
    mock_resp.iter_content.return_value = [b"fake_image_bytes_12345"]

    with patch.object(extractor.session, "get", return_value=mock_resp):
        downloaded = extractor.download_assets_for_page(page, max_assets=2)
        assert downloaded == 2

        # Check downloaded files on disk
        for img in page.images:
            assert img.downloaded is True
            assert Path(img.local_abs_path).exists()
            assert Path(img.local_abs_path).read_bytes() == b"fake_image_bytes_12345"

        # Check asset manifest JSON
        manifest_file = assets_dir / "asset_manifest.json"
        assert manifest_file.exists()
        with open(manifest_file, "r", encoding="utf-8") as f:
            manifest_data = json.load(f)
        assert manifest_data["total_mapped_assets"] >= 2
