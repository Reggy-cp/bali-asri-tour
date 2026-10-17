"""Validator module for Bali Agung Tours Website Reconstruction Tool.
Validates JSON schemas, WordPress XML well-formedness, missing assets,
duplicate URLs, empty content, and broken internal links.
"""

from dataclasses import asdict, dataclass, field
import datetime
import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Set, Tuple
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

from config import DEFAULT_CONFIG, ReconstructionConfig
from extractor import PageData

logger = logging.getLogger(__name__)


@dataclass
class ValidationIssue:
    """Represents a discovered validation issue or warning."""
    level: str  # "ERROR", "WARNING", "INFO"
    category: str  # "XML", "JSON", "URL", "CONTENT", "ASSET", "LINK"
    message: str
    context: Optional[Dict[str, Any]] = None

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class ValidationReport:
    """Consolidated validation summary."""
    is_valid: bool = True
    errors_count: int = 0
    warnings_count: int = 0
    issues: List[ValidationIssue] = field(default_factory=list)
    validated_at: str = field(
        default_factory=lambda: datetime.datetime.now(datetime.timezone.utc).isoformat()
    )

    def add_issue(self, level: str, category: str, message: str, context: Optional[Dict[str, Any]] = None):
        self.issues.append(ValidationIssue(level=level, category=category, message=message, context=context))
        if level == "ERROR":
            self.is_valid = False
            self.errors_count += 1
        elif level == "WARNING":
            self.warnings_count += 1

    def to_dict(self) -> Dict[str, Any]:
        return {
            "is_valid": self.is_valid,
            "errors_count": self.errors_count,
            "warnings_count": self.warnings_count,
            "validated_at": self.validated_at,
            "issues": [i.to_dict() for i in self.issues],
        }

    def generate_markdown_summary(self) -> str:
        """Create a human-readable markdown validation summary."""
        status_badge = "✅ PASSED" if self.is_valid else "❌ FAILED"
        lines = [
            f"# Reconstruction Validation Report ({status_badge})",
            f"**Validation Timestamp:** {self.validated_at}",
            f"**Total Errors:** {self.errors_count}",
            f"**Total Warnings:** {self.warnings_count}",
            "",
            "## Findings & Issues",
        ]
        if not self.issues:
            lines.append("No errors or warnings discovered. Output artifacts are completely sound.")
        else:
            for idx, issue in enumerate(self.issues, start=1):
                icon = "🛑" if issue.level == "ERROR" else "⚠️"
                lines.append(f"{idx}. {icon} **[{issue.level}] [{issue.category}]**: {issue.message}")
                if issue.context:
                    lines.append(f"   *Context:* `{json.dumps(issue.context)}`")
        return "\n".join(lines)


class ReconstructionValidator:
    """Validates reconstructed output artifacts, XML/JSON integrity, and consistency."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG

    def validate_json_string(self, json_str: str, label: str = "JSON") -> ValidationReport:
        """Validate that a string parses as valid JSON."""
        report = ValidationReport()
        try:
            parsed = json.loads(json_str)
            if not isinstance(parsed, (dict, list)):
                report.add_issue("ERROR", "JSON", f"{label} is not a valid JSON object or list.")
        except json.JSONDecodeError as e:
            report.add_issue("ERROR", "JSON", f"Failed to parse {label}: {e}")
        return report

    def validate_json_file(self, file_path: Path) -> ValidationReport:
        """Validate that a file exists and contains valid JSON."""
        report = ValidationReport()
        if not file_path.exists():
            report.add_issue("ERROR", "JSON", f"File does not exist: {file_path}")
            return report
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)
            if not isinstance(data, (dict, list)):
                report.add_issue("ERROR", "JSON", f"{file_path.name} is not a dict or list.")
        except Exception as e:
            report.add_issue("ERROR", "JSON", f"JSON error in {file_path.name}: {e}")
        return report

    def validate_xml_string(self, xml_str: str, label: str = "XML") -> ValidationReport:
        """Validate that a string parses as well-formed XML and conforms to WXR."""
        report = ValidationReport()
        try:
            root = ET.fromstring(xml_str)
            if root.tag != "rss":
                report.add_issue("WARNING", "XML", f"{label} root element is not <rss>.")
            channel = root.find("channel")
            if channel is None:
                report.add_issue("ERROR", "XML", f"{label} missing required <channel> element.")
        except ET.ParseError as e:
            report.add_issue("ERROR", "XML", f"Failed to parse {label}: {e}")
        return report

    def validate_xml_file(self, file_path: Path) -> ValidationReport:
        """Validate that an XML file exists and is well-formed."""
        report = ValidationReport()
        if not file_path.exists():
            report.add_issue("ERROR", "XML", f"XML file not found: {file_path}")
            return report
        try:
            content = file_path.read_text(encoding="utf-8")
            return self.validate_xml_string(content, label=file_path.name)
        except Exception as e:
            report.add_issue("ERROR", "XML", f"Error reading {file_path.name}: {e}")
            return report

    def validate_pages_integrity(
        self,
        pages: List[PageData],
        known_failed_urls: Optional[Dict[str, str]] = None,
    ) -> ValidationReport:
        """Check pages for duplicates, empty titles/content, and broken internal links."""
        report = ValidationReport()
        seen_urls: Set[str] = set()
        failed_map = known_failed_urls or {}

        for page in pages:
            # Check duplicate URLs
            if page.url in seen_urls:
                report.add_issue("ERROR", "URL", f"Duplicate URL found: {page.url}", {"url": page.url})
            else:
                seen_urls.add(page.url)

            # Check empty content
            if not page.title:
                report.add_issue("WARNING", "CONTENT", f"Page has empty title: {page.url}", {"url": page.url})
            if not page.paragraphs and not page.headings:
                report.add_issue("WARNING", "CONTENT", f"Page has no headings or paragraphs: {page.url}", {"url": page.url})

            # Check broken internal links
            for link in page.links:
                href = link.get("href", "")
                if link.get("is_internal") and href in failed_map:
                    err_msg = failed_map[href]
                    report.add_issue(
                        "ERROR",
                        "LINK",
                        f"Broken internal link from {page.url} to {href} ({err_msg})",
                        {"source": page.url, "target": href, "error": err_msg},
                    )

        return report

    def validate_asset_manifest(self, manifest_path: Path, assets_dir: Path) -> ValidationReport:
        """Check that all assets declared in asset_manifest.json exist on disk."""
        report = ValidationReport()
        if not manifest_path.exists():
            report.add_issue("WARNING", "ASSET", f"Asset manifest does not exist at {manifest_path}")
            return report

        try:
            with open(manifest_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            mappings = data.get("mappings", {})
            for src_url, rel_path in mappings.items():
                local_file = self.config.project_root / "output" / rel_path
                # Check if file was expected to be downloaded
                if not local_file.exists():
                    report.add_issue(
                        "WARNING",
                        "ASSET",
                        f"Mapped asset file missing on disk: {rel_path}",
                        {"source_url": src_url, "rel_path": rel_path},
                    )
        except Exception as e:
            report.add_issue("ERROR", "ASSET", f"Error validating asset manifest: {e}")

        return report

    def validate_elementor_templates(self, elementor_dir: Path) -> ValidationReport:
        """Validate all Elementor template JSON files in directory."""
        report = ValidationReport()
        if not elementor_dir.exists():
            report.add_issue("WARNING", "JSON", f"Elementor directory does not exist: {elementor_dir}")
            return report

        template_files = list(elementor_dir.glob("*.json"))
        if not template_files:
            report.add_issue("INFO", "JSON", "No Elementor template files found to validate.")
            return report

        for t_file in template_files:
            try:
                with open(t_file, "r", encoding="utf-8") as f:
                    data = json.load(f)

                if "version" not in data or "content" not in data:
                    report.add_issue("ERROR", "JSON", f"Template {t_file.name} missing required Elementor schema keys.")
                elif not isinstance(data.get("content"), list):
                    report.add_issue("ERROR", "JSON", f"Template {t_file.name} content must be an array.")
            except Exception as e:
                report.add_issue("ERROR", "JSON", f"Invalid JSON in {t_file.name}: {e}")

        return report

    def validate_project(
        self,
        pages: Optional[List[PageData]] = None,
        failed_urls: Optional[Dict[str, str]] = None,
    ) -> ValidationReport:
        """Run full project validation across XML, JSON, assets, and content integrity."""
        master_report = ValidationReport()

        # 1. Validate WordPress WXR export XML
        xml_report = self.validate_xml_file(self.config.wordpress_export_path)
        for issue in xml_report.issues:
            master_report.add_issue(issue.level, issue.category, issue.message, issue.context)

        # 2. Validate Site Manifest JSON
        manifest_report = self.validate_json_file(self.config.manifest_path)
        for issue in manifest_report.issues:
            master_report.add_issue(issue.level, issue.category, issue.message, issue.context)

        # 3. Validate Elementor Templates
        elem_report = self.validate_elementor_templates(self.config.elementor_dir)
        for issue in elem_report.issues:
            master_report.add_issue(issue.level, issue.category, issue.message, issue.context)

        # 4. Validate Asset Manifest and Files
        asset_report = self.validate_asset_manifest(
            self.config.assets_dir / "asset_manifest.json",
            self.config.assets_dir,
        )
        for issue in asset_report.issues:
            master_report.add_issue(issue.level, issue.category, issue.message, issue.context)

        # 5. Validate Pages Content & Broken Links
        if pages:
            pages_report = self.validate_pages_integrity(pages, failed_urls)
            for issue in pages_report.issues:
                master_report.add_issue(issue.level, issue.category, issue.message, issue.context)

        # Save report JSON & Markdown summary
        self.save_validation_report(master_report)
        return master_report

    def save_validation_report(self, report: ValidationReport) -> Tuple[Path, Path]:
        """Save validation report to JSON and Markdown summary files."""
        self.config.ensure_directories()
        json_path = self.config.reports_dir / "validation_report.json"
        md_path = self.config.reports_dir / "validation_summary.md"

        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(report.to_dict(), f, indent=2)

        with open(md_path, "w", encoding="utf-8") as f:
            f.write(report.generate_markdown_summary())

        logger.info(f"Validation reports saved to {json_path} and {md_path}")
        return json_path, md_path
