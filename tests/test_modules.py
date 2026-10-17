"""Tests verifying that all required architecture modules exist and import cleanly.
"""

def test_imports():
    import config
    import crawler
    import extractor
    import layout_analyzer
    import elementor_generator
    import wordpress_exporter
    import validator
    import cli

    assert hasattr(config, "ReconstructionConfig")
    assert hasattr(crawler, "PoliteCrawler")
    assert hasattr(extractor, "ContentExtractor")
    assert hasattr(layout_analyzer, "LayoutAnalyzer")
    assert hasattr(elementor_generator, "ElementorGenerator")
    assert hasattr(wordpress_exporter, "WordPressExporter")
    assert hasattr(validator, "ReconstructionValidator")
    assert hasattr(cli, "main")


def test_instantiations():
    from config import ReconstructionConfig
    from crawler import PoliteCrawler
    from extractor import ContentExtractor
    from layout_analyzer import LayoutAnalyzer
    from elementor_generator import ElementorGenerator
    from wordpress_exporter import WordPressExporter
    from validator import ReconstructionValidator

    cfg = ReconstructionConfig()
    crawler = PoliteCrawler(cfg)
    extractor = ContentExtractor(cfg)
    analyzer = LayoutAnalyzer(cfg)
    generator = ElementorGenerator(cfg)
    exporter = WordPressExporter(cfg)
    validator = ReconstructionValidator(cfg)

    assert crawler.config == cfg
    assert extractor.config == cfg
    assert analyzer.config == cfg
    assert generator.config == cfg
    assert exporter.config == cfg
    assert validator.config == cfg
