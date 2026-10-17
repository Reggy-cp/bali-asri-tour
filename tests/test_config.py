"""Tests for configuration settings and URL helpers.
"""

from pathlib import Path
import pytest

from config import DEFAULT_CONFIG, ReconstructionConfig


def test_default_config_values():
    config = ReconstructionConfig()
    assert "bali-agung-tours.com" in config.target_url
    assert "bali-agung-tours.com" in config.allowed_domains
    assert config.request_delay >= 0.5
    assert config.request_timeout > 0
    assert config.max_pages > 0
    assert config.respect_robots_txt is True


def test_is_allowed_url():
    config = ReconstructionConfig()
    assert config.is_allowed_url("https://bali-agung-tours.com/")
    assert config.is_allowed_url("https://bali-agung-tours.com/tours/ubud/")
    assert config.is_allowed_url("https://www.bali-agung-tours.com/about/")
    assert not config.is_allowed_url("https://google.com/")
    assert not config.is_allowed_url("https://evil-bali-agung-tours.com/")
    assert not config.is_allowed_url("https://facebook.com/bali-agung-tours")
    assert not config.is_allowed_url("")


def test_normalize_url():
    config = ReconstructionConfig()
    url1 = "https://bali-agung-tours.com/tours#section1"
    assert config.normalize_url(url1) == "https://bali-agung-tours.com/tours"

    url2 = "https://BALI-AGUNG-TOURS.COM/about/"
    assert config.normalize_url(url2) == "https://bali-agung-tours.com/about/"

    url3 = "https://bali-agung-tours.com:443/contact"
    assert config.normalize_url(url3) == "https://bali-agung-tours.com/contact"


def test_ensure_directories(tmp_path):
    custom_output = tmp_path / "custom_output"
    config = ReconstructionConfig(
        output_dir=custom_output,
        assets_dir=custom_output / "assets",
        elementor_dir=custom_output / "elementor-templates",
        reports_dir=custom_output / "reports",
    )
    config.ensure_directories()
    assert custom_output.exists()
    assert (custom_output / "assets").exists()
    assert (custom_output / "elementor-templates").exists()
    assert (custom_output / "reports").exists()
