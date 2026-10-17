"""WordPress Exporter module for Bali Agung Tours Website Reconstruction Tool.
Generates WordPress WXR 1.2 XML content exports, asset manifests, and import reports.
Keeps content import distinct from Elementor template JSON import.
"""

from dataclasses import asdict, dataclass, field
import datetime
import html
import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
import xml.etree.ElementTree as ET

from config import DEFAULT_CONFIG, ReconstructionConfig
from extractor import PageData

logger = logging.getLogger(__name__)


@dataclass
class ExportReport:
    """Summary of exported WordPress data."""
    total_pages: int = 0
    total_assets: int = 0
    xml_path: str = ""
    manifest_path: str = ""
    export_timestamp: str = field(
        default_factory=lambda: datetime.datetime.now(datetime.timezone.utc).isoformat()
    )

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class WordPressExporter:
    """Generates WordPress WXR 1.2 compliant XML and import manifests."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG

    def generate_wxr(self, pages: List[PageData]) -> str:
        """Construct WordPress eXtended RSS (WXR 1.2) XML string."""
        now = datetime.datetime.now(datetime.timezone.utc)
        pub_date = now.strftime("%a, %d %b %Y %H:%M:%S +0000")
        post_date = now.strftime("%Y-%m-%d %H:%M:%S")

        items_xml: List[str] = []
        for idx, page in enumerate(pages, start=1):
            title = html.escape(page.title or page.slug)
            slug = html.escape(page.slug)
            url = html.escape(page.url)

            # Build HTML content from headings and paragraphs
            content_parts = []
            for h in page.headings:
                tag = h.get("tag", "h2")
                text = html.escape(h.get("text", ""))
                content_parts.append(f"<{tag}>{text}</{tag}>")
            for p in page.paragraphs:
                content_parts.append(f"<p>{html.escape(p)}</p>")

            # Embed image references if present
            for img in page.images[:4]:
                alt = html.escape(img.alt_text)
                src = html.escape(img.source_url)
                content_parts.append(f'<figure><img src="{src}" alt="{alt}" /></figure>')

            body_content = "\n".join(content_parts)

            item = f"""\t<item>
\t\t<title>{title}</title>
\t\t<link>{url}</link>
\t\t<pubDate>{pub_date}</pubDate>
\t\t<dc:creator><![CDATA[admin]]></dc:creator>
\t\t<guid isPermaLink="false">{url}#id={idx}</guid>
\t\t<description></description>
\t\t<content:encoded><![CDATA[{body_content}]]></content:encoded>
\t\t<excerpt:encoded><![CDATA[]]></excerpt:encoded>
\t\t<wp:post_id>{idx}</wp:post_id>
\t\t<wp:post_date>{post_date}</wp:post_date>
\t\t<wp:post_date_gmt>{post_date}</wp:post_date_gmt>
\t\t<wp:comment_status>closed</wp:comment_status>
\t\t<wp:ping_status>closed</wp:ping_status>
\t\t<wp:post_name>{slug}</wp:post_name>
\t\t<wp:status>publish</wp:status>
\t\t<wp:post_parent>0</wp:post_parent>
\t\t<wp:menu_order>0</wp:menu_order>
\t\t<wp:post_type>page</wp:post_type>
\t\t<wp:post_password></wp:post_password>
\t\t<wp:is_sticky>0</wp:is_sticky>
\t\t<wp:postmeta>
\t\t\t<wp:meta_key>_source_url</wp:meta_key>
\t\t\t<wp:meta_value><![CDATA[{url}]]></wp:meta_value>
\t\t</wp:postmeta>
\t\t<wp:postmeta>
\t\t\t<wp:meta_key>_reconstructed_by</wp:meta_key>
\t\t\t<wp:meta_value><![CDATA[Bali Agung Tours Reconstruction Tool]]></wp:meta_value>
\t\t</wp:postmeta>
\t</item>"""
            items_xml.append(item)

        items_str = "\n".join(items_xml)

        wxr = f"""<?xml version="1.0" encoding="UTF-8" ?>
<!-- Generator: Bali Agung Tours Reconstruction Tool v1.0 -->
<rss version="2.0"
\txmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
\txmlns:content="http://purl.org/rss/1.0/modules/content/"
\txmlns:wfw="http://wellformedweb.org/CommentAPI/"
\txmlns:dc="http://purl.org/dc/elements/1.1/"
\txmlns:wp="http://wordpress.org/export/1.2/"
>
<channel>
\t<title>Bali Agung Tours Reconstruction</title>
\t<link>{self.config.target_url}</link>
\t<description>Importable reconstructed content from {self.config.target_url}</description>
\t<pubDate>{pub_date}</pubDate>
\t<language>en-US</language>
\t<wp:wxr_version>1.2</wp:wxr_version>
\t<wp:base_site_url>{self.config.target_url}</wp:base_site_url>
\t<wp:base_blog_url>{self.config.target_url}</wp:base_blog_url>
{items_str}
</channel>
</rss>"""
        return wxr

    def export_wxr(self, pages: List[PageData], output_path: Optional[Path] = None) -> Path:
        """Export pages to WordPress WXR 1.2 XML file."""
        self.config.ensure_directories()
        out_path = output_path or self.config.wordpress_export_path
        xml_content = self.generate_wxr(pages)

        with open(out_path, "w", encoding="utf-8") as f:
            f.write(xml_content)
        logger.info(f"WordPress WXR export generated: {out_path} ({len(pages)} pages)")
        return out_path

    def generate_asset_manifest(self, pages: List[PageData]) -> Dict[str, Any]:
        """Produce separate JSON manifest mapping assets and source-to-destination paths."""
        assets_list = []
        seen_urls = set()

        for page in pages:
            for img in page.images:
                if img.source_url not in seen_urls:
                    seen_urls.add(img.source_url)
                    assets_list.append({
                        "source_url": img.source_url,
                        "alt_text": img.alt_text,
                        "local_filename": img.local_filename,
                        "local_rel_path": img.local_rel_path,
                        "downloaded": img.downloaded,
                        "file_size_bytes": img.file_size_bytes,
                    })

        return {
            "source_site": self.config.target_url,
            "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "total_assets": len(assets_list),
            "assets": assets_list,
        }

    def export_asset_manifest(self, pages: List[PageData], output_path: Optional[Path] = None) -> Path:
        """Write asset manifest JSON file."""
        self.config.ensure_directories()
        out_path = output_path or (self.config.assets_dir / "asset_manifest.json")
        manifest_data = self.generate_asset_manifest(pages)

        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(manifest_data, f, indent=2)
        logger.info(f"Asset manifest generated: {out_path} ({manifest_data['total_assets']} assets)")
        return out_path

    def create_import_report(self, pages: List[PageData], xml_path: Path, manifest_path: Path) -> Path:
        """Create documentation report explaining WordPress import vs Elementor import."""
        self.config.ensure_directories()
        report_path = self.config.reports_dir / "import_instructions.md"

        total_assets = sum(len(p.images) for p in pages)
        report_content = f"""# WordPress & Elementor Import Instructions

**Generated for:** {self.config.target_url}
**Export Date:** {datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")}

## 1. File Artifacts Summary
* **WordPress Content XML:** `{xml_path.name}` ({len(pages)} pages)
* **Asset Manifest:** `{manifest_path.name}` ({total_assets} mapped assets)
* **Elementor Templates:** `output/elementor-templates/`

---

## 2. Step-by-Step Import Procedure

### Step A: WordPress Content Import (WXR)
1. In your WordPress admin dashboard, navigate to **Tools > Import**.
2. Select **WordPress** and install the official importer if prompted.
3. Upload `{xml_path.name}`.
4. Assign posts to an existing administrator user.
5. Click **Submit** to import all page titles, slugs, and body content.

### Step B: Media & Assets Upload
1. Upload downloaded media from `output/assets/` into **Media > Add New**.
2. Source-to-destination filename mappings are recorded in `output/assets/asset_manifest.json`.

### Step C: Elementor Templates Import (Keep Separate from Content)
1. Navigate to **Templates > Saved Templates** in WordPress.
2. Click **Import Templates**.
3. Select the template JSON files from `output/elementor-templates/` (e.g., `home.json`).
4. Click **Import Now**.
5. Once imported, you can edit any page with Elementor and insert your imported template directly.

---

## 3. Notes & Troubleshooting
* **Permalinks:** Ensure Settings > Permalinks is set to **Post name** (`/%postname%/`).
* **Elementor Container Experiment:** Ensure Elementor > Settings > Features > **Flexbox Container** is enabled.
"""
        with open(report_path, "w", encoding="utf-8") as f:
            f.write(report_content)
        logger.info(f"Import report saved to: {report_path}")
        return report_path
