"""Elementor Generator module for Bali Agung Tours Website Reconstruction Tool.
Generates Elementor 3.x+ container and widget template JSON adhering to verified
Elementor schema specifications, supporting responsive layouts and semantic section mapping.
"""

from dataclasses import asdict, dataclass, field
import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
import uuid

from config import DEFAULT_CONFIG, ReconstructionConfig
from extractor import PageData
from layout_analyzer import LayoutAnalysisResult, PageSection, SectionType

logger = logging.getLogger(__name__)


def generate_elementor_id() -> str:
    """Generate a 7-character hexadecimal Elementor element ID."""
    return uuid.uuid4().hex[:7]


@dataclass
class ElementorTemplate:
    """Represents an Elementor template export object."""
    title: str
    template_type: str = "page"
    version: str = "0.4"
    content: List[Dict[str, Any]] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        """Convert template to Elementor-compatible dictionary."""
        return {
            "version": self.version,
            "title": self.title,
            "type": self.template_type,
            "content": self.content,
        }

    def to_json(self, indent: int = 2) -> str:
        """Serialize template to JSON formatted string."""
        return json.dumps(self.to_dict(), indent=indent, ensure_ascii=False)


class ElementorGenerator:
    """Transforms analyzed page sections and extracted content into Elementor template JSON."""

    def __init__(self, config: Optional[ReconstructionConfig] = None):
        self.config = config or DEFAULT_CONFIG

    def create_heading_widget(
        self,
        text: str,
        html_tag: str = "h2",
        align: str = "left",
        align_mobile: str = "center",
    ) -> Dict[str, Any]:
        """Create a standard Elementor heading widget with responsive alignment."""
        return {
            "id": generate_elementor_id(),
            "elType": "widget",
            "isInner": False,
            "widgetType": "heading",
            "settings": {
                "title": text,
                "header_size": html_tag,
                "align": align,
                "align_mobile": align_mobile,
            },
        }

    def create_text_editor_widget(
        self,
        content_html: str,
        align: str = "left",
    ) -> Dict[str, Any]:
        """Create a standard Elementor text-editor widget."""
        return {
            "id": generate_elementor_id(),
            "elType": "widget",
            "isInner": False,
            "widgetType": "text-editor",
            "settings": {
                "editor": content_html,
                "align": align,
            },
        }

    def create_image_widget(
        self,
        image_url: str,
        alt_text: str = "",
        align: str = "center",
    ) -> Dict[str, Any]:
        """Create a standard Elementor image widget."""
        return {
            "id": generate_elementor_id(),
            "elType": "widget",
            "isInner": False,
            "widgetType": "image",
            "settings": {
                "image": {
                    "url": image_url,
                    "id": "",
                    "alt": alt_text,
                },
                "align": align,
            },
        }

    def create_button_widget(
        self,
        text: str,
        url: str = "#",
        align: str = "left",
        align_mobile: str = "center",
        button_type: str = "default",
    ) -> Dict[str, Any]:
        """Create a standard Elementor button widget."""
        return {
            "id": generate_elementor_id(),
            "elType": "widget",
            "isInner": False,
            "widgetType": "button",
            "settings": {
                "text": text,
                "link": {"url": url, "is_external": url.startswith("http"), "nofollow": False},
                "align": align,
                "align_mobile": align_mobile,
                "button_type": button_type,
            },
        }

    def create_icon_box_widget(
        self,
        title: str,
        description: str = "",
        icon_name: str = "fas fa-star",
    ) -> Dict[str, Any]:
        """Create a standard Elementor icon-box widget for highlights/features."""
        return {
            "id": generate_elementor_id(),
            "elType": "widget",
            "isInner": False,
            "widgetType": "icon-box",
            "settings": {
                "selected_icon": {"value": icon_name, "library": "fa-solid"},
                "title_text": title,
                "description_text": description,
                "position": "top",
            },
        }

    def create_container(
        self,
        elements: List[Dict[str, Any]],
        settings: Optional[Dict[str, Any]] = None,
        is_inner: bool = False,
    ) -> Dict[str, Any]:
        """Create an Elementor 3.x+ flexbox Container."""
        return {
            "id": generate_elementor_id(),
            "elType": "container",
            "isInner": is_inner,
            "settings": settings or {},
            "elements": elements,
        }

    def build_hero_section(self, section: PageSection) -> Dict[str, Any]:
        """Assemble Hero container with responsive headings and action button."""
        widgets: List[Dict[str, Any]] = []

        title = section.heading or "Welcome to Bali Agung Tours"
        widgets.append(
            self.create_heading_widget(title, html_tag="h1", align="left", align_mobile="center")
        )

        if section.subheading:
            widgets.append(
                self.create_heading_widget(section.subheading, html_tag="h3", align="left", align_mobile="center")
            )

        for snippet in section.content_snippets[:2]:
            widgets.append(self.create_text_editor_widget(f"<p>{snippet}</p>"))

        if section.links:
            top_link = section.links[0]
            widgets.append(
                self.create_button_widget(top_link["text"], top_link["href"], button_type="success")
            )

        container_settings: Dict[str, Any] = {
            "content_width": "boxed",
            "flex_direction": "column",
            "padding": {"unit": "px", "top": 60, "right": 20, "bottom": 60, "left": 20},
        }

        # If hero image is present, set background or include image widget
        if section.images:
            widgets.insert(0, self.create_image_widget(section.images[0]))

        return self.create_container(widgets, settings=container_settings)

    def build_card_grid_section(self, section: PageSection) -> Dict[str, Any]:
        """Assemble responsive multi-column Card Grid container."""
        parent_widgets: List[Dict[str, Any]] = []

        if section.heading:
            parent_widgets.append(
                self.create_heading_widget(section.heading, html_tag="h2", align="center")
            )

        # Card container with responsive flexwrap settings
        card_items: List[Dict[str, Any]] = []

        # If multiple images/snippets exist, create cards
        card_count = max(len(section.images), len(section.links), 3)
        for i in range(min(card_count, 6)):
            card_widgets: List[Dict[str, Any]] = []

            if i < len(section.images):
                card_widgets.append(self.create_image_widget(section.images[i]))

            card_title = (
                section.links[i]["text"]
                if i < len(section.links)
                else (section.subheading if i == 0 else f"Bali Tour Package #{i+1}")
            )
            card_widgets.append(self.create_heading_widget(card_title, html_tag="h3", align="center"))

            if i < len(section.content_snippets):
                card_widgets.append(self.create_text_editor_widget(f"<p>{section.content_snippets[i]}</p>"))

            if i < len(section.links):
                card_widgets.append(
                    self.create_button_widget(
                        "View Details", section.links[i]["href"], align="center"
                    )
                )

            card_settings = {
                "width": {"unit": "%", "size": 31.0},
                "width_tablet": {"unit": "%", "size": 48.0},
                "width_mobile": {"unit": "%", "size": 100.0},
                "padding": {"unit": "px", "top": 20, "right": 20, "bottom": 20, "left": 20},
                "border_radius": {"unit": "px", "top": 8, "right": 8, "bottom": 8, "left": 8},
                "background_background": "classic",
            }
            card_items.append(self.create_container(card_widgets, settings=card_settings, is_inner=True))

        grid_settings = {
            "flex_direction": "row",
            "flex_direction_mobile": "column",
            "flex_wrap": "wrap",
            "flex_justify_content": "space-between",
            "gap": {"unit": "px", "size": 20},
        }
        grid_container = self.create_container(card_items, settings=grid_settings, is_inner=True)
        parent_widgets.append(grid_container)

        parent_settings = {
            "content_width": "boxed",
            "padding": {"unit": "px", "top": 40, "right": 20, "bottom": 40, "left": 20},
        }
        return self.create_container(parent_widgets, settings=parent_settings)

    def build_gallery_section(self, section: PageSection) -> Dict[str, Any]:
        """Assemble image gallery / slider container."""
        widgets: List[Dict[str, Any]] = []

        if section.heading:
            widgets.append(self.create_heading_widget(section.heading, html_tag="h2", align="center"))

        gallery_items: List[Dict[str, Any]] = []
        for img_url in section.images[:6]:
            img_container = self.create_container(
                [self.create_image_widget(img_url)],
                settings={
                    "width": {"unit": "%", "size": 31.0},
                    "width_mobile": {"unit": "%", "size": 100.0},
                },
                is_inner=True,
            )
            gallery_items.append(img_container)

        gallery_settings = {
            "flex_direction": "row",
            "flex_direction_mobile": "column",
            "flex_wrap": "wrap",
            "gap": {"unit": "px", "size": 15},
        }
        widgets.append(self.create_container(gallery_items, settings=gallery_settings, is_inner=True))

        return self.create_container(widgets, settings={"content_width": "boxed"})

    def build_cta_section(self, section: PageSection) -> Dict[str, Any]:
        """Assemble Call to Action container."""
        widgets: List[Dict[str, Any]] = []

        title = section.heading or "Plan Your Bali Holiday With Us"
        widgets.append(self.create_heading_widget(title, html_tag="h2", align="center"))

        for snippet in section.content_snippets[:1]:
            widgets.append(self.create_text_editor_widget(f"<p>{snippet}</p>", align="center"))

        btn_text = section.links[0]["text"] if section.links else "Contact Us on WhatsApp"
        btn_url = section.links[0]["href"] if section.links else "https://wa.me/6281237897308"
        widgets.append(
            self.create_button_widget(btn_text, btn_url, align="center", align_mobile="center", button_type="success")
        )

        cta_settings = {
            "content_width": "boxed",
            "padding": {"unit": "px", "top": 50, "right": 20, "bottom": 50, "left": 20},
            "background_background": "classic",
        }
        return self.create_container(widgets, settings=cta_settings)

    def build_text_block_section(self, section: PageSection) -> Dict[str, Any]:
        """Assemble standard text content container."""
        widgets: List[Dict[str, Any]] = []

        if section.heading:
            widgets.append(self.create_heading_widget(section.heading, html_tag="h2"))

        content_html = "".join(f"<p>{s}</p>" for s in section.content_snippets)
        if not content_html and section.subheading:
            content_html = f"<p>{section.subheading}</p>"

        if content_html:
            widgets.append(self.create_text_editor_widget(content_html))

        for img in section.images[:2]:
            widgets.append(self.create_image_widget(img))

        return self.create_container(widgets, settings={"content_width": "boxed"})

    def build_section_container(self, section: PageSection) -> Dict[str, Any]:
        """Dispatch section by type to its appropriate Elementor builder."""
        if section.section_type == SectionType.HERO:
            return self.build_hero_section(section)
        elif section.section_type == SectionType.CARD_GRID:
            return self.build_card_grid_section(section)
        elif section.section_type == SectionType.GALLERY:
            return self.build_gallery_section(section)
        elif section.section_type == SectionType.CALL_TO_ACTION:
            return self.build_cta_section(section)
        elif section.section_type == SectionType.NAVIGATION:
            # Simple header container representation
            widgets = [self.create_heading_widget(section.heading or "Bali Agung Tours", html_tag="h4")]
            for l in section.links[:4]:
                widgets.append(self.create_button_widget(l["text"], l["href"]))
            return self.create_container(widgets, settings={"content_width": "full"})
        elif section.section_type == SectionType.FOOTER:
            # Simple footer container representation
            widgets = [self.create_text_editor_widget("<p>&copy; Bali Agung Tours. All Rights Reserved.</p>")]
            return self.create_container(widgets, settings={"content_width": "full"})
        else:
            return self.build_text_block_section(section)

    def generate_page_template(
        self,
        page_data: PageData,
        layout: Optional[LayoutAnalysisResult] = None,
    ) -> ElementorTemplate:
        """Assemble full Elementor template from analyzed sections or extracted data."""
        containers: List[Dict[str, Any]] = []

        if layout and layout.sections:
            for sec in layout.sections:
                containers.append(self.build_section_container(sec))
        else:
            # Fallback simple reconstruction from PageData
            if page_data.title:
                containers.append(
                    self.create_container([self.create_heading_widget(page_data.title, html_tag="h1")])
                )
            for p in page_data.paragraphs[:6]:
                containers.append(
                    self.create_container([self.create_text_editor_widget(f"<p>{p}</p>")])
                )
            for img in page_data.images[:4]:
                containers.append(
                    self.create_container([self.create_image_widget(img.source_url, alt_text=img.alt_text)])
                )

        title = page_data.title or page_data.slug or "Reconstructed Page"
        return ElementorTemplate(title=title, content=containers)

    def save_template(
        self,
        template: ElementorTemplate,
        slug: str,
    ) -> Path:
        """Write Elementor template JSON to output/elementor-templates/."""
        self.config.ensure_directories()
        out_file = self.config.elementor_dir / f"{slug}.json"
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(template.to_json(indent=2))
        logger.info(f"Elementor template saved to: {out_file}")
        return out_file
