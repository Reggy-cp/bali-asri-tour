# WordPress & Elementor Import Instructions

**Generated for:** https://bali-agung-tours.com/
**Export Date:** 2026-10-17 11:18:03 UTC

## 1. File Artifacts Summary
* **WordPress Content XML:** `wordpress-export.xml` (1 pages)
* **Asset Manifest:** `asset_manifest.json` (36 mapped assets)
* **Elementor Templates:** `output/elementor-templates/`

---

## 2. Step-by-Step Import Procedure

### Step A: WordPress Content Import (WXR)
1. In your WordPress admin dashboard, navigate to **Tools > Import**.
2. Select **WordPress** and install the official importer if prompted.
3. Upload `wordpress-export.xml`.
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
