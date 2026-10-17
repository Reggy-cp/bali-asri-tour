"""Unit and mock tests for elementor_generator module.
"""

import json
from pathlib import Path
import re

import pytest

from config import ReconstructionConfig
from elementor_generator import (
    ElementorGenerator,
    ElementorTemplate,
    generate_elementor_id,
)
from extractor import PageData
from layout_analyzer import LayoutAnalysisResult, PageSection, SectionType


def test_generate_elementor_id():
    id1 = generate_elementor_id()
    id2 = generate_elementor_id()
    assert len(id1) == 7
    assert len(id2) == 7
    assert id1 != id2
    assert re.match(r"^[0-9a-f]{7}$", id1)


def test_create_widgets():
    generator = ElementorGenerator()

    # Heading widget
    heading = generator.create_heading_widget("Explore Bali", html_tag="h1", align="left", align_mobile="center")
    assert heading["elType"] == "widget"
    assert heading["widgetType"] == "heading"
    assert heading["settings"]["title"] == "Explore Bali"
    assert heading["settings"]["header_size"] == "h1"
    assert heading["settings"]["align"] == "left"
    assert heading["settings"]["align_mobile"] == "center"

    # Text editor widget
    text_w = generator.create_text_editor_widget("<p>Custom tour packages.</p>")
    assert text_w["elType"] == "widget"
    assert text_w["widgetType"] == "text-editor"
    assert "<p>Custom tour packages.</p>" in text_w["settings"]["editor"]

    # Image widget
    img_w = generator.create_image_widget("https://bali-agung-tours.com/logo.png", alt_text="Logo")
    assert img_w["elType"] == "widget"
    assert img_w["widgetType"] == "image"
    assert img_w["settings"]["image"]["url"] == "https://bali-agung-tours.com/logo.png"
    assert img_w["settings"]["image"]["alt"] == "Logo"

    # Button widget
    btn_w = generator.create_button_widget("Book Tour", "https://wa.me/62812345678")
    assert btn_w["elType"] == "widget"
    assert btn_w["widgetType"] == "button"
    assert btn_w["settings"]["text"] == "Book Tour"
    assert btn_w["settings"]["link"]["url"] == "https://wa.me/62812345678"
    assert btn_w["settings"]["link"]["is_external"] is True


def test_build_hero_section():
    generator = ElementorGenerator()
    sec = PageSection(
        section_type=SectionType.HERO,
        order=0,
        confidence=0.9,
        html_tag="section",
        heading="Exclusive Bali Private Driver",
        subheading="Top-rated tours on TripAdvisor",
        content_snippets=["Experience the spiritual wonders and hidden beaches of Bali."],
        images=["https://bali-agung-tours.com/hero.jpg"],
        links=[{"text": "Explore Tours", "href": "https://bali-agung-tours.com/tours"}],
    )

    hero_container = generator.build_hero_section(sec)
    assert hero_container["elType"] == "container"
    assert len(hero_container["elements"]) >= 4

    widget_types = [w["widgetType"] for w in hero_container["elements"] if w["elType"] == "widget"]
    assert "image" in widget_types
    assert "heading" in widget_types
    assert "text-editor" in widget_types
    assert "button" in widget_types


def test_build_card_grid_responsive_settings():
    generator = ElementorGenerator()
    sec = PageSection(
        section_type=SectionType.CARD_GRID,
        order=1,
        confidence=0.85,
        html_tag="section",
        heading="Our Featured Tour Packages",
        images=[
            "https://bali-agung-tours.com/ubud.jpg",
            "https://bali-agung-tours.com/nusa.jpg",
            "https://bali-agung-tours.com/kintamani.jpg",
        ],
        links=[
            {"text": "Ubud Tour", "href": "/tours/ubud"},
            {"text": "Nusa Penida Tour", "href": "/tours/nusa"},
            {"text": "Kintamani Tour", "href": "/tours/kintamani"},
        ],
        content_snippets=["Full day temple & waterfall adventure."],
    )

    grid = generator.build_card_grid_section(sec)
    assert grid["elType"] == "container"

    # Find inner card container
    inner_grid = [e for e in grid["elements"] if e["elType"] == "container"][0]
    assert inner_grid["settings"]["flex_direction"] == "row"
    assert inner_grid["settings"]["flex_direction_mobile"] == "column"

    # Check child cards responsive widths
    cards = inner_grid["elements"]
    assert len(cards) == 3
    card1 = cards[0]
    assert card1["settings"]["width"]["size"] == 31.0
    assert card1["settings"]["width_tablet"]["size"] == 48.0
    assert card1["settings"]["width_mobile"]["size"] == 100.0


def test_generate_and_save_full_template(tmp_path):
    elementor_dir = tmp_path / "elementor-templates"
    config = ReconstructionConfig(elementor_dir=elementor_dir)
    generator = ElementorGenerator(config)

    page_data = PageData(
        url="https://bali-agung-tours.com/contact/",
        slug="contact",
        title="Contact Bali Agung Tours",
        paragraphs=["Reach out to us anytime for instant booking."],
    )

    layout = LayoutAnalysisResult(
        url=page_data.url,
        slug=page_data.slug,
        sections=[
            PageSection(
                section_type=SectionType.HERO,
                order=0,
                confidence=0.9,
                html_tag="section",
                heading="Get in Touch",
            ),
            PageSection(
                section_type=SectionType.CALL_TO_ACTION,
                order=1,
                confidence=0.85,
                html_tag="section",
                heading="Chat with our Bali Tour Experts",
                links=[{"text": "WhatsApp Us", "href": "https://wa.me/6281237897308"}],
            ),
        ],
    )

    template = generator.generate_page_template(page_data, layout)
    assert template.title == "Contact Bali Agung Tours"
    assert template.version == "0.4"
    assert template.template_type == "page"
    assert len(template.content) == 2

    saved_file = generator.save_template(template, slug=page_data.slug)
    assert saved_file.exists()

    with open(saved_file, "r", encoding="utf-8") as f:
        loaded = json.load(f)
    assert loaded["version"] == "0.4"
    assert loaded["title"] == "Contact Bali Agung Tours"
    assert len(loaded["content"]) == 2
