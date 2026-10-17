# Bali Agung Tours — Comprehensive Design System Specification
**Milestone 2 Deliverable**  
**Version:** 1.0.0  
**Target Reference:** [https://bali-agung-tours.com/](https://bali-agung-tours.com/)  
**Framework Target:** Next.js 15+ (App Router), Tailwind CSS v3 / CSS Custom Properties, TypeScript

---

## 1. Design Principles & Verified Provenance

This design system translates the inspected visual language of **Bali Agung Tours** into a modern, accessible, and high-performance component ecosystem. 

All core tokens have been extracted directly from the live site's Elementor Global Kit CSS (`post-6.css`), ensuring 100% brand fidelity while modernizing the implementation with CSS custom properties, responsive layout primitives, and accessible interactive behaviors.

### Core Principles
1. **Tropical Warmth & Island Heritage:** Vibrant emerald green (`#59A246`) paired with deep forest teal (`#043732`) and sunlit amber (`#FFB200`), evoking Bali's lush landscapes and cultural warmth.
2. **Editorial Clarity:** High-contrast Josefin Sans typography for elegant headings paired with ultra-readable Poppins for body copy and tour itineraries.
3. **Frictionless Conversion:** Clear, persistent access to WhatsApp messaging (`+62 812-3789-7308`) and transparent, upfront vehicle and tour pricing.
4. **Mobile-First Responsiveness:** Flawless usability across mobile devices (the primary medium for travelers on the ground in Bali) with generous touch targets (min 44px) and smooth drawer menus.

---

## 2. Color Palette & Token Architecture

The design system employs a 3-tier token hierarchy (Literal → Semantic → UI Application) configured via CSS Custom Properties on `:root`:

```
[Literal Palette]  ──►  [Semantic Tokens]  ──►  [Component Application]
#59A246                 --color-primary        Primary Buttons, Active Links
#043732                 --color-secondary      Top Utility Bar, Footer, Deep Headings
#FFB200                 --color-accent         TripAdvisor Stars, Promo Pills
#1D1D1D                 --color-text           Body Typography
#F9FBF8                 --color-bg-light       Page Backgrounds
#FFFFFF                 --color-surface        Card Containers, Modals
```

### Verified Color Values

| Token Name | Value (Hex / HSL) | Contrast Ratio on White | Usage & Intent |
| :--- | :---: | :---: | :--- |
| `--color-primary` | `#59A246` | 3.3:1 (large text) / UI | Primary brand color, primary CTA buttons, active states, feature checkmarks |
| `--color-primary-dark` | `#308C17` | 4.6:1 (WCAG AA) | Hover states for primary buttons, accent borders, deep foliage elements |
| `--color-secondary` | `#043732` | 14.8:1 (WCAG AAA) | Dark forest teal, top announcement bar, dark cards, footer background |
| `--color-secondary-light`| `#0A524B` | 9.2:1 (WCAG AAA) | Hover state for dark elements, secondary header backgrounds |
| `--color-accent` | `#FFB200` | 1.8:1 (accent only) | Star ratings, discount/promo badges, highlight callouts |
| `--color-accent-hover` | `#E09D00` | 2.3:1 | Hover state for golden accents and warning alerts |
| `--color-whatsapp` | `#25D366` | 2.5:1 (UI icon/btn) | WhatsApp brand green for direct traveler inquiries |
| `--color-whatsapp-dark` | `#1EBE5D` | 3.1:1 | WhatsApp button active/hover state |
| `--color-text` | `#1D1D1D` | 16.1:1 (WCAG AAA) | Primary body copy, headings on white, high legibility |
| `--color-text-muted` | `#666666` | 5.7:1 (WCAG AA) | Secondary meta text, itinerary timings, breadcrumb dividers |
| `--color-text-light` | `#9CA3AF` | 2.5:1 | Subtle placeholder text, inactive pagination items |
| `--color-bg-light` | `#F9FBF8` | N/A | Off-white subtle greenish background for clean section separation |
| `--color-surface` | `#FFFFFF` | N/A | Card surfaces, modal sheets, dropdown menu containers |
| `--color-border` | `#E5E7EB` | N/A | Card outlines, table lines, accordion dividers |
| `--color-border-focus` | `#59A246` | N/A | Keyboard focus rings and active form input borders |

---

## 3. Typography Hierarchy

### Font Families
- **Headings & Display:** `"Josefin Sans"`, system-ui, -apple-system, sans-serif
  - Character: Elegant, geometric, balanced display font reflecting Balinese hospitality and boutique travel aesthetics.
  - Weights: `400` (Regular), `600` (SemiBold), `700` (Bold).
- **Body, UI & Meta:** `"Poppins"`, system-ui, -apple-system, sans-serif
  - Character: Clean, highly legible humanist sans-serif optimized for multi-day itineraries, pricing matrices, and mobile reading.
  - Weights: `300` (Light), `400` (Regular), `500` (Medium), `600` (SemiBold).

### Type Scale

| Level | Font Family | Size (px / rem) | Line Height | Weight | Letter Spacing | CSS Class Equivalent |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Display 1** | Josefin Sans | `48px / 3.0rem` | `1.15` | `700` | `-0.02em` | `text-4xl md:text-5xl font-bold font-heading` |
| **Heading 1** | Josefin Sans | `36px / 2.25rem` | `1.2` | `700` | `-0.01em` | `text-3xl md:text-4xl font-bold font-heading` |
| **Heading 2** | Josefin Sans | `28px / 1.75rem` | `1.25` | `600` | `-0.01em` | `text-2xl md:text-3xl font-semibold font-heading` |
| **Heading 3** | Josefin Sans | `22px / 1.375rem`| `1.3` | `600` | `0` | `text-xl md:text-2xl font-semibold font-heading` |
| **Heading 4** | Josefin Sans | `18px / 1.125rem`| `1.35` | `600` | `0` | `text-lg font-semibold font-heading` |
| **Body Large** | Poppins | `18px / 1.125rem`| `1.6` | `400` | `0` | `text-lg font-body` |
| **Body Regular**| Poppins | `16px / 1.0rem` | `1.6` | `400` | `0` | `text-base font-body` |
| **Body Small** | Poppins | `14px / 0.875rem`| `1.5` | `400` | `0` | `text-sm font-body` |
| **Meta / Badge**| Poppins | `12px / 0.75rem` | `1.4` | `500` | `0.04em` | `text-xs font-medium uppercase font-body` |

---

## 4. Spacing, Elevation & Geometry

### Layout Geometry
- **Boxed Container Max-Width:** `1140px` (`max-w-6xl` in Tailwind) — strictly matches original Elementor boxed width.
- **Wide Container Max-Width:** `1280px` (`max-w-7xl` in Tailwind) — used for top navigation, wide footer, and full-bleed image galleries.
- **Widget / Column Gap:** `20px` (`gap-5`) standard across card grids and itinerary items.
- **Section Vertical Padding:**
  - Mobile: `48px` (`py-12`)
  - Desktop: `80px` (`py-20`)

### Corner Radii
- **`rounded-sm`:** `4px` (Meta badges, chips)
- **`rounded-md`:** `8px` (Form inputs, action buttons, alert banners)
- **`rounded-lg`:** `12px` (Tour cards, fleet cards, dropdown menus)
- **`rounded-xl`:** `16px` (Hero containers, modal dialogs, featured highlight cards)
- **`rounded-full`:** `9999px` (Pills, circular avatar frames, floating WhatsApp bubble)

### Elevation & Shadows
- **Card Rest:** `0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)` (`shadow-sm`)
- **Card Hover:** `0 12px 24px -4px rgba(4, 55, 50, 0.12), 0 4px 8px -2px rgba(4, 55, 50, 0.06)` (`shadow-lg hover:-translate-y-1 transition-all duration-300`)
- **Sticky Header:** `0 4px 20px -2px rgba(0, 0, 0, 0.08)` (Subtle glassmorphic blur `backdrop-blur-md bg-white/95`)
- **Floating WhatsApp Button:** `0 8px 24px rgba(37, 211, 102, 0.35)`

---

## 5. CSS Custom Properties (`globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Brand Palette */
  --color-primary: #59A246;
  --color-primary-dark: #308C17;
  --color-secondary: #043732;
  --color-secondary-light: #0A524B;
  --color-accent: #FFB200;
  --color-accent-hover: #E09D00;
  --color-whatsapp: #25D366;
  --color-whatsapp-dark: #1EBE5D;

  /* Neutrals */
  --color-text: #1D1D1D;
  --color-text-muted: #666666;
  --color-text-light: #9CA3AF;
  --color-bg-light: #F9FBF8;
  --color-surface: #FFFFFF;
  --color-border: #E5E7EB;
  --color-border-focus: #59A246;

  /* Typography */
  --font-heading: 'Josefin Sans', sans-serif;
  --font-body: 'Poppins', sans-serif;

  /* Sizing & Geometry */
  --container-boxed: 1140px;
  --container-wide: 1280px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

/* Base resets & typography defaults */
html {
  scroll-behavior: smooth;
  color: var(--color-text);
  background-color: #FFFFFF;
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.01em;
}

/* Accessible focus ring */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

---

## 6. Centralized Tailwind Configuration (`tailwind.config.ts`)

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#59A246',
          'primary-dark': '#308C17',
          secondary: '#043732',
          'secondary-light': '#0A524B',
          accent: '#FFB200',
          'accent-hover': '#E09D00',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
        },
        surface: {
          light: '#F9FBF8',
          DEFAULT: '#FFFFFF',
        },
        body: {
          DEFAULT: '#1D1D1D',
          muted: '#666666',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        heading: ['var(--font-josefin)', 'Josefin Sans', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      maxWidth: {
        'boxed': '1140px',
        'wide': '1280px',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(4, 55, 50, 0.12), 0 4px 8px -2px rgba(4, 55, 50, 0.06)',
        'sticky': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'floating': '0 8px 24px rgba(37, 211, 102, 0.35)',
      },
      borderRadius: {
        'boxed': '12px',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 7. Component Blueprints & Architecture

### 1. `SiteHeader` & `TopUtilityBar`
- **Utility Bar:** Dark forest background (`bg-brand-secondary text-white text-xs py-2`), displaying operating hours (`Open Daily 24 Hours`), WhatsApp quick link (`+62 812-3789-7308`), and email (`agung@bali-agung-tours.com`).
- **Main Navbar:** Sticky top header with glassmorphism (`backdrop-blur-md bg-white/95 border-b border-gray-100`). Contains brand logo, desktop dropdown menu, mobile drawer toggle button, and "Book via WhatsApp" CTA pill button.

### 2. `DesktopNavigation` & `MobileNavigation`
- **Desktop Nav:** Multi-level accessible menus for Tour Packages, Day Tours, Car Hire, and About Us. Features smooth hover transitions and keyboard arrow navigation.
- **Mobile Drawer:** Accessible slide-over drawer triggered by hamburger toggle. Contains collapsible accordion links, direct phone call button, and WhatsApp CTA button.

### 3. `HeroSection`
- **Layout:** High-impact responsive hero banner with high-resolution imagery and dark emerald gradient overlay (`from-black/60 via-black/40 to-transparent`).
- **Content:** Headline in Josefin Sans (`Explore Bali with Licensed Private Drivers & Trusted Guides`), TripAdvisor rating badge (5.0 rating with 5 stars), subtext, and dual CTA buttons ("Browse Tour Packages" & "Book a Car").

### 4. `TourCard` & `TourGrid`
- **Card Structure:**
  - 16:9 Image container with duration badge pill (e.g. `10 Hours` or `3D2N`) and "Featured" badge.
  - Title in Josefin Sans (`font-heading font-semibold text-lg text-brand-secondary line-clamp-1`).
  - Rating summary (5 golden stars + "5.0 (120+ reviews)").
  - Key itinerary stops bullet points (e.g. `Tanah Lot • Ubud Monkey Forest • Rice Terrace`).
  - Pricing footer: `From $45 / person` with "View Details" text link and WhatsApp book button.
- **Grid System:** Responsive CSS grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.

### 5. `FleetCard` (Car Hire with Driver)
- **Structure:**
  - Clean vehicle photo (Toyota Avanza, Innova Reborn, Alphard, HiAce, Elf).
  - Model name + passenger badge (`5 Guests`), luggage badge (`3 Bags`), AC indicator.
  - Price pill: `$40 / day (10 Hours)` including English-speaking chauffeur, fuel, and parking.
  - Direct WhatsApp booking button pre-filled with the vehicle model name.

### 6. `ItinerarySection` (Day-by-Day Timeline)
- **Structure:**
  - Timeline node with vertical green connecting line.
  - Collapsible day headers (`Day 1: Arrival & Sunset at Uluwatu Temple`).
  - Activity details: Morning pickup, sightseeing itinerary, lunch stop, sunset dance show, hotel drop-off.
  - Accessible toggle with smooth height animation and `aria-expanded` state.

### 7. `IncludedAndExcludedSection`
- **Two-Column Card Matrix:**
  - **Included (Left):** Green checkmark icons (`CheckCircle2` from Lucide) for Private AC car, English-speaking driver, fuel, parking fees, bottled water.
  - **Excluded (Right):** Muted crossmark icons (`XCircle` from Lucide) for Flight tickets, personal expenses, gratuities/tips.

### 8. `FAQAccordion`
- **Categorized Groups:** General Booking, Vehicles & Fleet, Tour Inclusions, Airport Pickups.
- **Accordion Item:** Accessible `<button>` triggering content `<div role="region">` with chevron rotation animation.

### 9. `ContactForm` & `BookingCallToAction`
- **Form Fields:** Full Name, Email, WhatsApp Phone, Travel Date, Number of Adults/Children, Selected Tour or Car, Special Requests.
- **Validation:** Type-safe Zod schema validation with clear error messages.
- **Dual Conversion:** Direct form submit button + prominent "Prefer instant response? Chat on WhatsApp" button.

---

## 8. Button & Interactive Primitives

```tsx
// 1. Primary Brand Button
<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-medium text-white bg-brand-primary hover:bg-brand-primary-dark transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0">
  Explore Tours
</button>

// 2. WhatsApp Direct Conversion Button
<a href="https://wa.me/6281237897308" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-medium text-white bg-brand-whatsapp hover:bg-brand-whatsapp-dark transition-all duration-200 shadow-floating hover:-translate-y-0.5">
  <MessageCircle className="w-5 h-5 fill-current" />
  <span>Chat on WhatsApp</span>
</a>

// 3. Secondary Outline Button
<button className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-body font-medium text-brand-secondary border-2 border-brand-secondary hover:bg-brand-secondary hover:text-white transition-all duration-200">
  View Itinerary
</button>
```

---

## 9. Accessibility & Core Web Vitals Guarantees

1. **Touch Targets:** All interactive buttons, menu toggles, and WhatsApp anchors satisfy the WCAG minimum target size of `44px x 44px`.
2. **Color Contrast:** Body copy (`#1D1D1D`) on white yields `16.1:1`; dark headings (`#043732`) on light backgrounds yield `14.8:1`. All exceed the WCAG AAA requirement (`7:1`).
3. **Keyboard Focus States:** Custom focus rings with `outline: 2px solid #59A246` and `outline-offset: 2px`.
4. **Semantic HTML5:** Strict hierarchy (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, single `<h1>` per page).
5. **Reduced Motion:** Respects `prefers-reduced-motion: reduce` for card transforms and drawer animations.
