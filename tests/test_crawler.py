"""Unit and mock tests for crawler module.
"""

import json
from pathlib import Path
import time
from unittest.mock import MagicMock, patch

import pytest
import requests

from config import ReconstructionConfig
from crawler import PoliteCrawler, CrawlResult, CrawlReport


MOCK_ROBOTS_TXT = """
User-agent: *
Disallow: /wp-admin/
Disallow: /private/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://bali-agung-tours.com/sitemap_index.xml
"""

MOCK_SITEMAP_INDEX = """<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>https://bali-agung-tours.com/page-sitemap.xml</loc>
    </sitemap>
</sitemapindex>
"""

MOCK_PAGE_SITEMAP = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://bali-agung-tours.com/</loc>
    </url>
    <url>
        <loc>https://bali-agung-tours.com/about/</loc>
    </url>
    <url>
        <loc>https://bali-agung-tours.com/contact/</loc>
    </url>
</urlset>
"""

MOCK_HTML_PAGE = """
<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
    <a href="/about/">About Us</a>
    <a href="/tours/">Tours</a>
    <a href="https://external.com/page">External</a>
    <a href="/image.jpg">Image</a>
    <a href="mailto:info@bali.com">Email</a>
    <a href="#section">Anchor</a>
</body>
</html>
"""


def test_robots_txt_parsing():
    config = ReconstructionConfig(request_delay=0.0)
    crawler = PoliteCrawler(config)

    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.text = MOCK_ROBOTS_TXT

    with patch.object(crawler.session, "get", return_value=mock_resp):
        assert crawler.load_robots_txt() is True
        assert "https://bali-agung-tours.com/sitemap_index.xml" in crawler.discovered_sitemaps
        assert crawler.is_allowed_by_robots("https://bali-agung-tours.com/about/") is True
        assert crawler.is_allowed_by_robots("https://bali-agung-tours.com/wp-admin/edit.php") is False
        assert crawler.is_allowed_by_robots("https://bali-agung-tours.com/private/doc.html") is False


def test_normalize_and_filter():
    config = ReconstructionConfig()
    crawler = PoliteCrawler(config)

    # Valid internal links
    assert crawler.normalize_and_filter("https://bali-agung-tours.com/about/") == "https://bali-agung-tours.com/about/"
    assert crawler.normalize_and_filter("https://www.bali-agung-tours.com/tours") == "https://www.bali-agung-tours.com/tours"

    # Ignored file extensions
    assert crawler.normalize_and_filter("https://bali-agung-tours.com/photo.jpg") is None
    assert crawler.normalize_and_filter("https://bali-agung-tours.com/brochure.pdf") is None

    # Off-domain
    assert crawler.normalize_and_filter("https://example.com/bali") is None

    # Admin paths
    assert crawler.normalize_and_filter("https://bali-agung-tours.com/wp-admin/") is None
    assert crawler.normalize_and_filter("https://bali-agung-tours.com/wp-login.php") is None


def test_extract_internal_links():
    config = ReconstructionConfig()
    crawler = PoliteCrawler(config)

    links = crawler.extract_internal_links(MOCK_HTML_PAGE, "https://bali-agung-tours.com/")
    assert "https://bali-agung-tours.com/about/" in links
    assert "https://bali-agung-tours.com/tours/" in links
    assert not any("external.com" in link for link in links)
    assert not any("image.jpg" in link for link in links)
    assert not any("mailto" in link for link in links)


def test_sitemap_discovery():
    config = ReconstructionConfig(request_delay=0.0)
    crawler = PoliteCrawler(config)

    def side_effect(url, **kwargs):
        resp = MagicMock()
        resp.status_code = 200
        if "robots.txt" in url:
            resp.text = MOCK_ROBOTS_TXT
        elif "sitemap_index.xml" in url:
            resp.content = MOCK_SITEMAP_INDEX.encode("utf-8")
        elif "page-sitemap.xml" in url:
            resp.content = MOCK_PAGE_SITEMAP.encode("utf-8")
        else:
            resp.status_code = 404
        return resp

    with patch.object(crawler.session, "get", side_effect=side_effect):
        discovered = crawler.discover_sitemaps()
        assert len(discovered) == 3
        assert "https://bali-agung-tours.com/" in discovered
        assert "https://bali-agung-tours.com/about/" in discovered
        assert "https://bali-agung-tours.com/contact/" in discovered


def test_crawler_mocked_execution(tmp_path):
    output_dir = tmp_path / "output"
    reports_dir = output_dir / "reports"
    manifest_path = output_dir / "site_manifest.json"

    config = ReconstructionConfig(
        output_dir=output_dir,
        reports_dir=reports_dir,
        manifest_path=manifest_path,
        max_pages=2,
        request_delay=0.0,
    )
    crawler = PoliteCrawler(config)

    def mock_get(url, **kwargs):
        resp = MagicMock()
        resp.url = url
        resp.status_code = 200
        resp.headers = {"Content-Type": "text/html; charset=utf-8"}
        resp.text = MOCK_HTML_PAGE
        return resp

    with patch.object(crawler.session, "get", side_effect=mock_get):
        results, report = crawler.crawl(max_pages=2, use_sitemap=False)

        assert len(results) == 2
        assert report.total_pages_crawled == 2
        assert len(report.visited_urls) == 2
        assert manifest_path.exists()
        assert (reports_dir / "crawl_report.json").exists()

        # Check saved manifest
        with open(manifest_path, "r", encoding="utf-8") as f:
            manifest_data = json.load(f)
        assert manifest_data["total_crawled_pages"] == 2
        assert len(manifest_data["pages"]) == 2


def test_crawler_failed_page_recording():
    config = ReconstructionConfig(request_delay=0.0, max_retries=1)
    crawler = PoliteCrawler(config)

    mock_resp = MagicMock()
    mock_resp.status_code = 404
    mock_resp.headers = {"Content-Type": "text/html"}

    with patch.object(crawler.session, "get", return_value=mock_resp):
        res = crawler.fetch_page("https://bali-agung-tours.com/non-existent-page")
        assert res.status_code == 404
        assert "HTTP 404" in res.error
        assert "https://bali-agung-tours.com/non-existent-page" in crawler.failed
