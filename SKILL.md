---
name: strong-gym-design
description: Use this skill to generate well-branded interfaces and assets for Strong Gym, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick Reference

### Brand Identity
- **Company**: Strong Gym — neighborhood fitness center in Rafael Calzada, Buenos Aires
- **Tagline**: "Crezcamos juntos"
- **Tone**: Direct, motivational, community-driven, Argentine Spanish

### Color Tokens
- Primary: `#FFB800` (amber accent)
- Black: `#0A0A0A` (backgrounds)
- Surface: `#1A1A1A` (cards)
- Raised: `#2A2A2A` (elevated surfaces)
- Border: `#3A3A3A`
- Text secondary: `#888888`
- White: `#FFFFFF` (primary text)

### Typography
- **Font**: Montserrat (Google Fonts) — weights 400, 600, 700, 900
- **Headlines**: Uppercase, Black 900, tight tracking
- **Body**: Regular 400, 16px, 1.5 line-height
- **Labels**: Semibold 600, uppercase, wide tracking

### Key Files
- `colors_and_type.css` — Full CSS custom properties
- `assets/logo-full-color.png` — Official logo (yellow STRONG + dark gray barbell/GYM) — use on light/accent backgrounds
- `assets/logo-on-dark.png` — Dark-bg variant (yellow STRONG/S + white barbell/GYM) — use on black/dark backgrounds
- `ui_kits/website/` — Full website prototype with modular JSX components
