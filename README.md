# Bali Asri Tour Website & Platform

A professional, polite, domain-restricted Python application that analyzes the publicly accessible website [https://bali-agung-tours.com/](https://bali-agung-tours.com/) and reconstructs its pages into an importable **WordPress package (WXR 1.2 XML)** and **Elementor Pro-compatible templates (JSON)** with high visual fidelity.

---

## Architecture & Modules

The application is built with a modular, test-driven architecture:

| Module | Purpose |
| :--- | :--- |
| [`config.py`](file:///Users/mac/Desktop/bali%20agung/config.py) | Central configuration: defines target URL, domain whitelist (`bali-agung-tours.com`), request timeouts, polite throttling delays (default: 1.0s), and output directory paths. |
| [`crawler.py`](file:///Users/mac/Desktop/bali%20agung/crawler.py) | Polite domain-restricted crawler with live `robots.txt` enforcement, recursive XML sitemap discovery (`sitemap_index.xml`), duplicate URL prevention, retry with exponential backoff, and crawl telemetry. |
| [`extractor.py`](file:///Users/mac/Desktop/bali%20agung/extractor.py) | Semantic content extractor: captures metadata (titles, meta descriptions, canonical URLs, OpenGraph), headings hierarchy, clean paragraphs, internal vs. external links, lazy-load image resolution (`data-src`), collision-resistant local filename hashing, and polite asset downloading. |
| [`layout_analyzer.py`](file:///Users/mac/Desktop/bali%20agung/layout_analyzer.py) | DOM layout analyzer: classifies sections into `Navigation`, `Hero`, `Card Grid`, `Gallery`, `Text Block`, `Call to Action`, and `Footer`. Flags unsupported elements (iframes, dynamic forms, external widgets), calculates layout confidence, and captures full-page visual screenshots via Playwright Chromium. |
| [`elementor_generator.py`](file:///Users/mac/Desktop/bali%20agung/elementor_generator.py) | Generates verified Elementor 3.x+ Flexbox container and widget schemas (`heading`, `text-editor`, `image`, `button`, `icon-box`) with responsive breakpoints (`desktop`, `tablet`, `mobile`). |
| [`wordpress_exporter.py`](file:///Users/mac/Desktop/bali%20agung/wordpress_exporter.py) | Constructs WordPress eXtended RSS (WXR 1.2) XML with CDATA-wrapped HTML, post slugs, custom postmeta (`_source_url`, `_reconstructed_by`), asset manifests, and import documentation. |
| [`validator.py`](file:///Users/mac/Desktop/bali%20agung/validator.py) | Master integrity validator: checks XML well-formedness, Elementor JSON schemas, missing assets, duplicate URLs, empty content, and broken internal links; outputs audit reports in JSON and Markdown. |
| [`cli.py`](file:///Users/mac/Desktop/bali%20agung/cli.py) | Unified command-line interface orchestrating crawl, extract, layout analysis, screenshot capture, Elementor generation, WordPress export, and validation workflows. |

---

## Output Structure

The application creates and populates the following directory hierarchy:

```
output/
├── site_manifest.json          # Overall crawl and extraction state manifest
├── assets/                     # Downloaded permitted image assets
│   ├── asset_manifest.json     # Bidirectional mapping of source URLs to local paths
│   ├── logo-white_20f8b2b9.png
│   └── trip-2026-awards_3a33f78a.png
├── elementor-templates/        # Elementor-compatible template JSON exports
│   └── home.json
├── wordpress-export.xml        # Standard WordPress WXR 1.2 XML for content import
└── reports/                    # Telemetry, layout analysis, and validation audits
    ├── crawl_report.json       # HTTP status codes, visited URLs, and discovery paths
    ├── extracted_home.json     # Semantic extraction snapshot
    ├── layout_home.json        # Section hierarchy and confidence scoring
    ├── import_instructions.md  # Step-by-step WordPress & Elementor import manual
    ├── validation_report.json  # Machine-readable validation audit
    ├── validation_summary.md   # Human-readable pass/fail validation report
    └── screenshots/            # Playwright high-resolution visual reference screenshots
        └── home.png
```

---

## Installation & Environment Setup

### 1. Prerequisites
* **macOS** (Apple Silicon or Intel)
* **Python 3.10+** (tested and verified with Python 3.14.8)

### 2. Initialize Virtual Environment & Install Dependencies
Clone or navigate to the workspace directory:
```bash
cd "/Users/mac/Desktop/bali agung"
```

Create and activate the virtual environment:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install required Python packages:
```bash
pip install -r requirements.txt
```

### 3. Install Playwright Chromium Browser
Install the Chromium browser engine used for visual screenshot validation:
```bash
playwright install chromium
```

### 4. Verify Environment
Run the CLI environment check:
```bash
python cli.py --check-env
```

---

## CLI Execution Guide

The command-line interface provides dedicated flags for each reconstruction stage:

### 1. Discover Sitemaps & Indexed URLs
Inspect live `robots.txt` and recursively parse all sitemaps without downloading full pages:
```bash
python cli.py --discover-sitemaps
```

### 2. Polite Domain-Restricted Crawl
Crawl up to N pages with polite request throttling (e.g. 1.0s delay between requests):
```bash
python cli.py --crawl --max-pages 10 --delay 1.0
```

### 3. Content Extraction & Asset Download
Extract semantic headings, paragraphs, and download permitted images into `output/assets/`:
```bash
python cli.py --extract --download-assets --max-assets 10
```

### 4. Layout Analysis & Full-Page Visual Screenshot
Analyze DOM section roles, detect unsupported elements, and capture a Playwright reference screenshot:
```bash
python cli.py --analyze-layout --screenshot
```

### 5. Generate Elementor Templates
Generate Elementor 3.x+ container JSON templates into `output/elementor-templates/`:
```bash
python cli.py --generate-elementor
```

### 6. Export WordPress Content (WXR 1.2)
Generate `output/wordpress-export.xml` and the asset mapping manifest:
```bash
python cli.py --export-wordpress
```

### 7. Run Comprehensive Validation
Verify XML well-formedness, JSON schemas, missing assets, and broken links:
```bash
python cli.py --validate
```

---

## WordPress & Elementor Import Instructions

To achieve high visual fidelity without corrupting theme structures, keep content import separate from Elementor template import.

### Step 1: WordPress Content Import (WXR)
1. In your WordPress admin dashboard, navigate to **Tools > Import**.
2. Select **WordPress** (click *Install Now* if the importer plugin is not yet installed).
3. Click **Run Importer** and upload `output/wordpress-export.xml`.
4. Map posts to an existing administrator user.
5. Check *Download and import file attachments* (or upload local media in Step 2).
6. Click **Submit**. All page titles, slugs, and body content are now imported.

### Step 2: Media & Assets Upload
1. Navigate to **Media > Add New**.
2. Upload downloaded assets from `output/assets/`.
3. Reference `output/assets/asset_manifest.json` to verify that all source image URLs correspond to the uploaded filenames.

### Step 3: Elementor Template Import
1. Ensure the modern **Flexbox Container** feature is enabled in **Elementor > Settings > Features > Flexbox Container**.
2. In your WordPress admin, navigate to **Templates > Saved Templates**.
3. Click the **Import Templates** button at the top of the screen.
4. Select the generated template JSON from `output/elementor-templates/` (e.g. `home.json`).
5. Click **Import Now**.
6. Open any page in the Elementor editor, click the folder icon (*Add Template*), open the **My Templates** tab, and click **Insert**.

### Step 4: Permalinks Configuration
* Navigate to **Settings > Permalinks** and ensure the permalink structure is set to **Post name** (`/%postname%/`) so that internal slugs align with the source site.

---

## Technical Limitations & Boundaries

1. **Server-Side & Backend Logic**:
   * As the reconstruction operates via public HTTP access only, server-side PHP scripts, private database queries, and private admin endpoints are not accessible.
2. **Dynamic Third-Party Plugins**:
   * Review widgets (e.g., TrustIndex TripAdvisor embeds), booking engines, and interactive forms (e.g., Contact Form 7, WPForms) are flagged in `unsupported_elements` and require configuring appropriate WordPress form or review plugins post-import.
3. **E-Commerce & User Accounts**:
   * Private user login systems, shopping carts, and dynamic session states cannot and should not be scraped or exported.
4. **Template Verification**:
   * Generated Elementor templates utilize verified Elementor 3.x+ Flexbox container schemas. Always test imported templates on a staging WordPress instance before deploying to production.

---

## Ethical Scraping & Compliance Rules

* **Robots.txt**: Strictly adhered to via `urllib.robotparser`. Disallowed paths (e.g. `/wp-admin/`) are never requested.
* **Polite Rate Limiting**: Request delays are enforced between consecutive network calls (default: 1.0s).
* **Domain Whitelisting**: Crawling and asset downloads are restricted exclusively to `bali-agung-tours.com` and `www.bali-agung-tours.com`.
* **No Anti-Bot Bypass**: Does not use IP rotation proxies, captcha bypassers, or evasive fingerprinting.
* **Privacy & Credentials**: Excludes third-party tracking pixels (e.g., Facebook Pixel) and avoids private user data.

---

## Automated Test Suite

The project includes automated tests using `pytest` covering configuration, polite crawling, extraction, layout analysis, Elementor generation, WordPress exporting, and validation.

To run the complete test suite:
```bash
.venv/bin/pytest
```

Current test results: **42 passed** (0.22s execution time).
