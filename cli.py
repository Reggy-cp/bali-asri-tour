"""Command Line Interface for Bali Agung Tours Website Reconstruction Tool.
"""

import argparse
import json
import logging
import sys
from pathlib import Path

from config import DEFAULT_CONFIG, ReconstructionConfig
from crawler import PoliteCrawler
from extractor import ContentExtractor, PageData
from layout_analyzer import LayoutAnalyzer
from elementor_generator import ElementorGenerator
from wordpress_exporter import WordPressExporter
from validator import ReconstructionValidator

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("bali_agung")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Bali Agung Tours Website Reconstruction Tool (CLI)"
    )
    parser.add_argument(
        "--target",
        type=str,
        default=DEFAULT_CONFIG.target_url,
        help="Target base website URL (default: https://bali-agung-tours.com/)",
    )
    parser.add_argument(
        "--max-pages",
        type=int,
        default=DEFAULT_CONFIG.max_pages,
        help="Maximum pages to crawl (default: 50)",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=DEFAULT_CONFIG.request_delay,
        help="Polite delay between consecutive requests in seconds (default: 1.0)",
    )
    parser.add_argument(
        "--check-env",
        action="store_true",
        help="Perform environment and directory verification check",
    )
    parser.add_argument(
        "--crawl",
        action="store_true",
        help="Execute polite domain-restricted crawler",
    )
    parser.add_argument(
        "--discover-sitemaps",
        action="store_true",
        help="Discover sitemaps and list indexed URLs without crawling full pages",
    )
    parser.add_argument(
        "--extract",
        action="store_true",
        help="Extract structured page data and assets from target or crawled pages",
    )
    parser.add_argument(
        "--download-assets",
        action="store_true",
        help="Download accessible image assets during extraction",
    )
    parser.add_argument(
        "--max-assets",
        type=int,
        default=10,
        help="Maximum image assets to download (default: 10)",
    )
    parser.add_argument(
        "--analyze-layout",
        action="store_true",
        help="Analyze page layout sections, hierarchy, and unsupported elements",
    )
    parser.add_argument(
        "--screenshot",
        action="store_true",
        help="Capture visual screenshot via Playwright Chromium for layout validation",
    )
    parser.add_argument(
        "--generate-elementor",
        action="store_true",
        help="Generate Elementor-compatible template JSON in output/elementor-templates/",
    )
    parser.add_argument(
        "--export-wordpress",
        action="store_true",
        help="Export reconstructed content into WordPress WXR 1.2 XML and asset manifest",
    )
    parser.add_argument(
        "--validate",
        action="store_true",
        help="Run comprehensive validation across XML, JSON, assets, and link integrity",
    )
    parser.add_argument(
        "--page-filter",
        type=str,
        default=None,
        help="Filter URLs to crawl matching this substring",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    config = ReconstructionConfig(
        target_url=args.target,
        max_pages=args.max_pages,
        request_delay=args.delay,
    )
    config.ensure_directories()

    logger.info("Bali Agung Tours Website Reconstruction Tool initialized.")
    logger.info(f"Target URL: {config.target_url}")
    logger.info(f"Allowed Domains: {', '.join(config.allowed_domains)}")
    logger.info(f"Max Pages: {config.max_pages}")
    logger.info(f"Request Delay: {config.request_delay}s")
    logger.info(f"Output Directory: {config.output_dir}")

    if args.check_env:
        logger.info("Environment check passed: all output directories exist and are writable.")
        return 0

    crawler = PoliteCrawler(config)
    extractor = ContentExtractor(config)
    analyzer = LayoutAnalyzer(config)
    generator = ElementorGenerator(config)
    exporter = WordPressExporter(config)
    validator = ReconstructionValidator(config)

    if args.discover_sitemaps:
        logger.info("Discovering sitemaps...")
        urls = crawler.discover_sitemaps()
        logger.info(f"Discovered {len(urls)} URLs from {len(crawler.discovered_sitemaps)} sitemaps.")
        for s in crawler.discovered_sitemaps:
            logger.info(f"  Sitemap: {s}")
        return 0

    if args.export_wordpress:
        logger.info(f"Extracting and exporting WordPress WXR for target: {config.target_url}")
        res = crawler.fetch_page(config.target_url)
        if not res.content:
            logger.error(f"Failed to fetch content from {config.target_url}: {res.error}")
            return 1

        page_data = extractor.extract(config.target_url, res.content)
        xml_path = exporter.export_wxr([page_data])
        manifest_path = exporter.export_asset_manifest([page_data])
        report_path = exporter.create_import_report([page_data], xml_path, manifest_path)

        logger.info(f"WordPress WXR XML generated: {xml_path}")
        logger.info(f"Asset manifest generated: {manifest_path}")
        logger.info(f"Import instructions written to: {report_path}")
        return 0

    if args.validate:
        logger.info("Executing comprehensive project validation...")
        master_report = validator.validate_project()
        logger.info(f"Validation finished. Valid: {master_report.is_valid}")
        logger.info(f"Errors: {master_report.errors_count}, Warnings: {master_report.warnings_count}")
        logger.info(f"Validation reports saved to {config.reports_dir}")
        return 0 if master_report.is_valid else 1

    if args.generate_elementor:
        logger.info(f"Generating Elementor template for: {config.target_url}")
        res = crawler.fetch_page(config.target_url)
        if not res.content:
            logger.error(f"Failed to fetch content from {config.target_url}: {res.error}")
            return 1

        page_data = extractor.extract(config.target_url, res.content)
        layout_res = analyzer.analyze_html(config.target_url, res.content, capture_screenshot=args.screenshot)

        template = generator.generate_page_template(page_data, layout_res)
        saved_path = generator.save_template(template, slug=page_data.slug)

        logger.info(f"Generated Elementor template '{template.title}' (version {template.version})")
        logger.info(f"Root containers: {len(template.content)}")
        logger.info(f"Saved template to: {saved_path}")
        return 0

    if args.analyze_layout or args.screenshot:
        logger.info(f"Performing layout analysis on target: {config.target_url}")
        res = crawler.fetch_page(config.target_url)
        if not res.content:
            logger.error(f"Failed to fetch content from {config.target_url}: {res.error}")
            return 1

        layout_res = analyzer.analyze_html(
            url=config.target_url,
            html=res.content,
            capture_screenshot=args.screenshot,
        )

        logger.info(f"Identified {len(layout_res.sections)} sections. Overall Confidence: {layout_res.overall_confidence}")
        for s in layout_res.sections:
            logger.info(f"  [{s.order}] {s.section_type.value.upper()} (conf: {s.confidence}) - Heading: {s.heading or '(none)'}")
            if s.unsupported_elements:
                logger.warning(f"      Unsupported elements: {', '.join(s.unsupported_elements)}")

        if layout_res.screenshot_path:
            logger.info(f"Visual screenshot saved to: {layout_res.screenshot_path}")

        logger.info(f"Layout report written to: {config.reports_dir / f'layout_{layout_res.slug}.json'}")
        return 0

    if args.extract:
        logger.info(f"Extracting content from target: {config.target_url}")
        res = crawler.fetch_page(config.target_url)
        if not res.content:
            logger.error(f"Failed to fetch content from {config.target_url}: {res.error}")
            return 1

        page_data = extractor.extract(config.target_url, res.content)
        logger.info(f"Extracted Page: '{page_data.title}' (slug: {page_data.slug})")
        logger.info(f"Headings count: {len(page_data.headings)}")
        logger.info(f"Paragraphs count: {len(page_data.paragraphs)}")
        logger.info(f"Permitted Images found: {len(page_data.images)}")
        logger.info(f"Links found: {len(page_data.links)}")

        if args.download_assets and page_data.images:
            logger.info(f"Downloading up to {args.max_assets} image assets...")
            dl_count = extractor.download_assets_for_page(page_data, max_assets=args.max_assets)
            logger.info(f"Downloaded {dl_count} assets into {config.assets_dir}")

        # Save extraction report
        report_path = config.reports_dir / f"extracted_{page_data.slug}.json"
        with open(report_path, "w", encoding="utf-8") as f:
            json.dump(page_data.to_dict(), f, indent=2)
        logger.info(f"Extracted page data saved to: {report_path}")
        return 0

    if args.crawl:
        logger.info(f"Starting crawl (max {config.max_pages} pages, {config.request_delay}s delay)...")
        results, report = crawler.crawl(
            max_pages=config.max_pages,
            page_filter=args.page_filter,
        )
        logger.info(f"Crawl finished. Crawled {report.total_pages_crawled} pages in {report.duration_seconds}s.")
        logger.info(f"Report written to: {config.reports_dir / 'crawl_report.json'}")
        logger.info(f"Site manifest updated: {config.manifest_path}")
        return 0

    return 0


if __name__ == "__main__":
    sys.exit(main())
