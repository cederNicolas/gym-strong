# STRONG GYM — Design System

## Overview

**Strong Gym** is a neighborhood fitness center located at Av. San Martín 2573, Rafael Calzada, Buenos Aires, Argentina. The brand identity is bold, motivational, and community-driven — built around the tagline **"Crezcamos juntos"** (Let's grow together).

The gym offers Musculación (weight training) and Spinning, with a single membership plan: **Membresía Libre** at $40.000/mes. The brand emphasizes real community, always-present trainers, and wide operating hours (Mon–Fri 07:30–22:00).

### Sources

- **Logo PNG**: `uploads/STRONG GYM 4.png` — Original raster logo (2466×1302, transparent PNG)
- **Brand guidelines**: Provided inline with project brief (colors, type, tone, content spec)
- **Instagram**: @gymstrong2573
- **WhatsApp / Teléfono**: +54 9 11 4960-1563 (`wa.me/5491149601563`)

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Direct and motivational** — speaks to the reader as a training partner, not a corporation
- **Second-person, informal "vos/tu"** — Argentine Spanish, casual but energetic
- **Community-first** — emphasizes "juntos" (together), belonging, shared effort
- **No corporate jargon** — zero buzzwords, no "synergy" or "optimize"; real gym language
- **Action-oriented CTAs** — "Empezá hoy", "Sumate", "Escribinos"

### Casing & Formatting
- **Headlines**: FULL UPPERCASE — aggressive, impactful, sport-aesthetic
- **Body copy**: Sentence case — warm and readable
- **Labels/tags**: UPPERCASE with wide letter-spacing

### Copy Examples
- Hero tagline: **"CREZCAMOS JUNTOS"**
- CTA: **"EMPEZÁ HOY"** / **"SUMATE"**
- Value props: "Profes siempre presentes" · "Horarios amplios" · "Comunidad real"
- WhatsApp prewritten: "Hola! Vi la web de Strong Gym y quiero información sobre la membresía libre 💪"

### Emoji
- Used sparingly and only in informal contact contexts (WhatsApp messages)
- Never in headlines, navigation, or formal UI elements
- 💪 is the signature emoji when used

---

## VISUAL FOUNDATIONS

### Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Yellow/Amber) | `#FFB800` | Accent color — CTAs, highlights, isotipo, headings emphasis |
| Primary Light | `#FFCA3A` | Hover states on primary elements |
| Primary Dark | `#E5A500` | Active/pressed states |
| Black | `#0A0A0A` | Main background, deep surfaces |
| Gray 900 | `#1A1A1A` | Card backgrounds, elevated surfaces |
| Gray 800 | `#2A2A2A` | Raised surfaces, input fields |
| Gray 700 | `#3A3A3A` | Borders, dividers |
| Gray 500 | `#888888` | Secondary text, captions |
| White | `#FFFFFF` | Primary text on dark backgrounds |

The palette is deliberately narrow: **amber on black**. The yellow is the singular accent — it carries all the energy. No secondary hue competes with it.

### Typography
- **Typeface**: Montserrat (Google Fonts)
- **Weights**: 400 (body), 600 (semibold UI), 700 (bold headings), 900 (black display)
- **Headlines**: Uppercase, Black (900), tight tracking (-0.02em), aggressive sizing (48–72px)
- **Body**: Regular (400), normal line-height (1.5), 16–18px
- **Labels**: Semibold (600), uppercase, wide tracking (0.1em), small (14px)

### Backgrounds
- **Default**: Solid deep black (#0A0A0A) — dark mode by default
- **Surface cards**: Slightly lighter (#1A1A1A) with no border or very subtle (#3A3A3A) border
- **Accent sections**: Full-bleed #FFB800 backgrounds with black text
- **Image treatment**: B&W photography with yellow overlay, or dark overlay for text readability
- **No gradients** except subtle amber-to-transparent overlays on hero images
- **No patterns or textures** — clean, bold, flat surfaces

### Layout & Composition
- **Asymmetric blocks** — offset grids, overlapping elements, bold diagonal energy
- **Full-bleed sections** — sections alternate between black and near-black
- **Large white space** — generous section padding (96px vertical)
- **Max content width**: 1200px, centered
- **Mobile-first**: stacks vertically, with full-width cards

### Corners & Borders
- **Cards**: 8–12px border-radius (--radius-md to --radius-lg)
- **Buttons**: 9999px (pill/full-round) for CTAs, 8px for secondary
- **Borders**: 1px solid #3A3A3A on cards, 2px solid #FFB800 for accent borders
- **No heavy box shadows on dark backgrounds** — use subtle glow for accent (shadow-accent)

### Shadows & Elevation
- Dark theme: shadows are deep and black (rgba 0,0,0,0.4–0.6)
- Accent glow: amber shadow (`0 4px 20px rgba(255,184,0,0.3)`) on featured/highlighted elements
- Minimal shadow use overall — depth comes from background color steps, not shadows

### Hover & Press States
- **Buttons (primary)**: bg darkens to #E5A500 on hover, slight scale(1.02)
- **Buttons (secondary/outline)**: border brightens, subtle bg fill appears
- **Cards**: subtle translateY(-2px) lift + accent shadow on hover
- **Links**: color transitions to #FFCA3A
- **Press/active**: scale(0.98) micro-shrink, bg darkens further
- **Transition**: 250ms with cubic-bezier(0.16, 1, 0.3, 1) — snappy out-ease

### Animation & Motion
- **Scroll-triggered fade-in**: elements fade up (translateY 20px → 0) on viewport entry
- **Easing**: ease-out (cubic-bezier 0.16, 1, 0.3, 1) for entrances
- **Duration**: 400ms for fade-ins, 250ms for hover/interactive transitions
- **No bounces, no spring physics** — clean, intentional movement
- **No auto-play carousels** — static layout with manual navigation if needed

### Imagery Style
- **B&W fitness photography** with amber accent overlays
- **High contrast** — deep blacks, bright highlights
- **Dark overlays** on images when text overlays (rgba(10,10,10,0.7))
- **No illustrations** — photo-only aesthetic
- **Warm-toned** when color is used (pulled toward amber)

---

## ICONOGRAPHY

### Approach
- **Minimal icon usage** — the brand relies on bold typography and photography, not icons
- **Lucide Icons** (CDN) recommended when icons are needed — clean, consistent stroke style
  - CDN: `https://unpkg.com/lucide-static@latest/font/lucide.css`
- **Stroke weight**: 2px (Lucide default) — matches the brand's bold but clean aesthetic
- **Icon color**: inherits text color (white on dark, black on accent)
- **No custom icon font** — Lucide covers all needed glyphs
- **No emoji in UI** — only in WhatsApp/contact context
- **Common icons used**: Dumbbell, Clock, Users, MapPin, Phone, Instagram, MessageCircle (WhatsApp), ChevronRight, Menu, X

### Social Icons
- Instagram: primary social platform
- WhatsApp: primary contact channel
- Both rendered as Lucide or simple inline SVG icons

---

## FILE INDEX

```
├── README.md                  ← This file
├── SKILL.md                   ← Agent skill definition
├── colors_and_type.css        ← CSS custom properties (tokens + base styles)
├── assets/
│   ├── logo-full-color.png    ← Official logo (yellow STRONG + dark gray barbell/GYM)
│   └── logo-on-dark.png       ← For dark backgrounds (yellow STRONG/S + white barbell/GYM)
├── preview/                   ← Design system preview cards (HTML)
│   ├── colors-primary.html
│   ├── colors-neutrals.html
│   ├── colors-semantic.html
│   ├── type-scale.html
│   ├── type-headings.html
│   ├── spacing-tokens.html
│   ├── shadows-radii.html
│   ├── buttons.html
│   ├── cards.html
│   ├── forms.html
│   ├── badges-labels.html
│   ├── logo-variants.html
│   └── brand-imagery.html
└── ui_kits/
    └── website/
        ├── README.md
        ├── index.html         ← Full interactive website prototype
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Activities.jsx
        ├── WhyChooseUs.jsx
        ├── Schedule.jsx
        ├── Pricing.jsx
        ├── Testimonials.jsx
        ├── Location.jsx
        └── Footer.jsx
```
