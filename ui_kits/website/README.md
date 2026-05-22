# Strong Gym Website — UI Kit

## Overview
Full-page interactive website prototype for Strong Gym, a neighborhood fitness center in Rafael Calzada, Buenos Aires.

## Design Specs
- **Width**: Responsive, mobile-first; max-width 1200px for content
- **Theme**: Dark mode (deep black) with #FFB800 amber accent
- **Font**: Montserrat 400/600/700/900 from Google Fonts
- **Layout**: Single-page scroll with 8 sections

## Sections
1. **Navbar** — Fixed top nav with logo, links, and CTA
2. **Hero** — Full-viewport with tagline "Crezcamos juntos" and CTA
3. **Activities** — Musculación and Spinning cards
4. **Why Choose Us** — 3 value props (trainers, hours, community)
5. **Schedule** — Operating hours display
6. **Pricing** — Single featured plan: Membresía Libre $40.000/mes
7. **Testimonials** — Motivational fitness quotes
8. **Location** — Address + embedded Google Map
9. **Footer** — Logo, social links, contact info

## Components
| File | Component | Description |
|------|-----------|-------------|
| `Navbar.jsx` | `<Navbar>` | Fixed transparent → solid nav on scroll |
| `Hero.jsx` | `<Hero>` | Full-bleed hero with animated text |
| `Activities.jsx` | `<Activities>` | Activity cards grid |
| `WhyChooseUs.jsx` | `<WhyChooseUs>` | Value proposition cards |
| `Schedule.jsx` | `<Schedule>` | Hours display |
| `Pricing.jsx` | `<Pricing>` | Featured pricing card |
| `Testimonials.jsx` | `<Testimonials>` | Quote carousel |
| `Location.jsx` | `<Location>` | Map + address |
| `Footer.jsx` | `<Footer>` | Site footer |

## Usage
Open `index.html` to see the full interactive prototype.
