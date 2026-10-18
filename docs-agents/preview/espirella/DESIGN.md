# DESIGN – espirella (homepage preview)

## 1. Visual direction
Warm, calm and roastery-like. Dark espresso brown (from the existing footer bar and bean photography) frames the page at the top (header + hero) and bottom (footer) so the white logo always sits on a solid dark surface. Between them, a cream "paper" body puts the coffees, prices and origin first. Czech home brewers on mobile should reach a product within one scroll, and the only strong-colored button on the page leads to the e-shop ("Do obchodu"). "Domluvit ochutnávku" is always the quieter outline button. Readability matters more than atmosphere: no text over busy photos, no justified text, no light-weight (300) body copy.

Layout skeleton (for reference): sticky dark header → hero (text on a solid espresso panel; the photo sits beside it at ≥1024px and below the text on mobile) → "Naše káva" product grid → "Čím je výjimečná" 3 steps (text only, numbered) → tasting band on sand → dark footer.

## 2. Type scale
- **Display / headings:** `Fraunces` (Google Fonts, SIL OFL, variable; the latin-ext subset covers ě š č ř ž ý á í é ů ú ň ť ď). Weights 600 and 700, `opsz` axis auto.
  `--font-display: "Fraunces", Georgia, "Times New Roman", serif;`
- **Body / UI:** `Open Sans` (Google Fonts, OFL, latin-ext). It is kept from the current site for brand continuity, but used at 400/600/700 only. **Never use weight 300.**
  `--font-body: "Open Sans", "Segoe UI", Roboto, Arial, sans-serif;`
- Load: `https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Open+Sans:wght@400;600;700&display=swap` (Google serves latin-ext automatically via `unicode-range`). Set `<html lang="cs">`.
- Body text is always `text-align: left`. Use sentence case for headings. Only `--text-xs` eyebrows use uppercase.

| Token | Size | Line height | Weight | Letter spacing | Family / use |
|---|---|---|---|---|---|
| `--text-xs` | 0.8125rem (13px) | 1.4 | 600 | 0.08em, uppercase | body – eyebrows ("Káva · zrno"), tags |
| `--text-sm` | 0.9375rem (15px) | 1.5 | 400 | 0 | body – card meta, footer, legal |
| `--text-base` | 1.0625rem (17px) | 1.65 | 400 | 0 | body – paragraphs (max 68ch) |
| `--text-lg` | 1.25rem (20px) | 1.4 | 600 (body) / 600 (display) | 0 | card titles (display), prices (body 700), lead text (body 400) |
| `--text-xl` | clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem) (22–28px) | 1.25 | 600 | -0.005em | display – step titles, footer headings |
| `--text-2xl` | clamp(1.875rem, 1.4rem + 1.6vw, 2.75rem) (30–44px) | 1.12 | 600 | -0.015em | display – section H2 |
| `--text-3xl` | clamp(2.375rem, 1.6rem + 3.2vw, 4.25rem) (38–68px) | 1.04 | 700 | -0.02em | display – hero H1 (max 14ch) |

Button label: `--font-body`, 1rem (16px), weight 600, line height 1.2, letter spacing 0.01em, no uppercase.

## 3. Color tokens (single light theme with dark framing surfaces)
```css
:root {
  --color-bg:            #FAF6F0; /* cream page body */
  --color-surface:       #FFFFFF; /* cards */
  --color-surface-alt:   #F1E6D8; /* sand – tasting band, packshot backdrop */
  --color-dark:          #2A1D15; /* espresso – header, hero panel, footer */
  --color-dark-2:        #3A2A1F; /* footer bottom bar */
  --color-text:          #2A1D15;
  --color-muted:         #6B5A4C;
  --color-on-dark:       #FAF6F0;
  --color-on-dark-muted: #C9B8A6;
  --color-primary:       #9C4A1A; /* roasted rust – main CTA on light, links */
  --color-primary-hover: #7E3A13;
  --color-accent:        #E9B97F; /* crema – main CTA on dark, highlights on dark */
  --color-accent-hover:  #F3CC9A;
  --color-border:        #E3D6C6; /* decorative dividers, card edge */
  --color-border-strong: #8A7766; /* input/UI borders (3:1) */
  --color-focus:         #2A1D15; /* focus ring on light surfaces */
  --color-focus-on-dark: #E9B97F; /* focus ring on dark surfaces */
  --color-success:       #2F6B3A;
  --color-warning:       #8A5300;
  --color-danger:        #B3261E;
}
```

Contrast ratios (WCAG 2.x relative luminance, computed):

| Foreground → Background | Ratio | Passes |
|---|---|---|
| text #2A1D15 → bg #FAF6F0 | 15.18:1 | AA/AAA body |
| text #2A1D15 → surface #FFFFFF | 16.34:1 | AA/AAA body |
| text #2A1D15 → surface-alt #F1E6D8 | 13.27:1 | AA/AAA body |
| muted #6B5A4C → bg #FAF6F0 | 6.11:1 | AA body |
| muted #6B5A4C → surface #FFFFFF | 6.58:1 | AA body |
| muted #6B5A4C → surface-alt #F1E6D8 | 5.34:1 | AA body |
| primary #9C4A1A → bg #FAF6F0 (links) | 5.72:1 | AA body |
| primary #9C4A1A → surface #FFFFFF | 6.16:1 | AA body |
| primary #9C4A1A → surface-alt #F1E6D8 | 5.00:1 | AA body |
| primary-hover #7E3A13 → bg #FAF6F0 | 7.80:1 | AA/AAA body |
| #FFFFFF → primary #9C4A1A (button label) | 6.16:1 | AA body |
| #FFFFFF → primary-hover #7E3A13 | 8.39:1 | AA/AAA body |
| on-dark #FAF6F0 → dark #2A1D15 | 15.18:1 | AA/AAA body |
| on-dark-muted #C9B8A6 → dark #2A1D15 | 8.47:1 | AA/AAA body |
| on-dark-muted #C9B8A6 → dark-2 #3A2A1F | 7.11:1 | AA/AAA body |
| #FFFFFF → dark-2 #3A2A1F | 13.72:1 | AA/AAA body |
| accent #E9B97F → dark #2A1D15 (text/links on dark) | 9.11:1 | AA/AAA body |
| accent #E9B97F → dark-2 #3A2A1F | 7.65:1 | AA/AAA body |
| dark #2A1D15 → accent #E9B97F (button label) | 9.11:1 | AA/AAA body |
| dark #2A1D15 → accent-hover #F3CC9A | 10.83:1 | AA/AAA body |
| border-strong #8A7766 → bg #FAF6F0 (UI) | 3.97:1 | AA UI (3:1) |
| border-strong #8A7766 → surface #FFFFFF (UI) | 4.28:1 | AA UI (3:1) |
| focus #2A1D15 → bg / surface / surface-alt | 15.18 / 16.34 / 13.27:1 | AA UI |
| focus-on-dark #E9B97F → dark / dark-2 | 9.11 / 7.65:1 | AA UI |
| success #2F6B3A → bg #FAF6F0 | 5.94:1 | AA body |
| warning #8A5300 → bg #FAF6F0 | 5.88:1 | AA body |
| danger #B3261E → bg #FAF6F0 | 6.07:1 | AA body |
| #FFFFFF → danger #B3261E | 6.54:1 | AA body |

`--color-border` #E3D6C6 is decorative only. Never use it as the only boundary of an interactive control.
Rules: never put text directly on a photo. The hero text sits on the solid `--color-dark` panel. Primary (rust) is for light surfaces only and accent (crema) for dark surfaces only. Do not swap them.

## 4. Spacing
- Base unit: **4px**.
- Scale: `--space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-5: 24px; --space-6: 32px; --space-7: 48px; --space-8: 64px; --space-9: 96px; --space-10: 128px;`
- Section padding (block): `--section-pad: clamp(64px, 4rem + 4vw, 128px);` (64px at 375, about 120px at 1440). Hero: `padding-block: clamp(48px, 3rem + 4vw, 112px)`.
- Gutter (inline): `--gutter: clamp(20px, 5vw, 40px);`
- Containers: `--container: 1200px;` (max-width, centered, with `--gutter` padding) and `--container-narrow: 720px;` (text blocks, tasting copy).
- Gaps: grid gap `--space-5` (24px) under 768px and `--space-6` (32px) at 768px and up. Heading to content gap `--space-7`. Paragraph spacing `--space-4`.
- Radius: `--radius-sm: 6px; --radius-md: 12px; --radius-pill: 999px;`
- Shadow: `--shadow-card-hover: 0 12px 32px rgba(42, 29, 21, 0.12);`
- Breakpoints: `--bp-sm: 560px; --bp-md: 768px; --bp-lg: 1024px; --bp-xl: 1440px`. Product grid: horizontal list cards under 560px, 2 columns at 560px and up, 4 columns at 1024px and up. Hero: stacked under 1024px, 2 columns (text 6/12, image 6/12) at 1024px and up. Steps: 1 column under 768px, 3 columns at 768px and up. Footer: 1 column, then 2 at 768px, then 4 (mark + 3 info columns) at 1024px.

## 5. Buttons and cards
Motion tokens: `--dur-fast: 150ms; --dur-med: 250ms; --dur-slow: 600ms; --ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);`. Animate only `background-color`, `color`, `border-color`, `box-shadow`, `transform`. Under `@media (prefers-reduced-motion: reduce)`, remove all `transform` changes and set transitions to `0.01ms`.

### Buttons (`<a class="btn">`; minimum touch target 48×48px)
Base: `display:inline-flex; align-items:center; justify-content:center; gap:var(--space-2); min-height:48px; padding:14px 28px; border:2px solid transparent; border-radius:var(--radius-pill); font:600 1rem/1.2 var(--font-body); letter-spacing:0.01em; text-decoration:none; transition:background-color var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out);`. Full width (`width:100%`) under 560px when two buttons stack. Stack gap `--space-3`.

| Variant | Default | Hover | Focus-visible | Active |
|---|---|---|---|---|
| **Primary (light)** – "Do obchodu" | bg `--color-primary`, text #FFFFFF | bg `--color-primary-hover`, `translateY(-1px)` | `outline:3px solid var(--color-focus); outline-offset:3px` | `translateY(0)`, bg `--color-primary-hover` |
| **Primary (on dark)** – hero/header shop CTA | bg `--color-accent`, text `--color-dark` | bg `--color-accent-hover`, `translateY(-1px)` | `outline:3px solid var(--color-focus-on-dark); outline-offset:3px` | `translateY(0)` |
| **Secondary (light)** – "Domluvit ochutnávku" | transparent, border 2px `--color-text`, text `--color-text` | bg `--color-text`, text `--color-on-dark` | as primary (light) | `translateY(0)` |
| **Secondary (on dark)** | transparent, border 2px `--color-on-dark`, text `--color-on-dark` | bg `--color-on-dark`, text `--color-dark` | `outline:3px solid var(--color-focus-on-dark); outline-offset:3px` | `translateY(0)` |
| **Text link** | `--color-primary` on light, `--color-accent` on dark; `text-decoration: underline; text-underline-offset:3px; text-decoration-thickness:1px` | `--color-primary-hover` / `--color-on-dark`; thickness 2px | `outline:2px solid` focus token; `outline-offset:2px; border-radius:2px` | same as hover |

Each section has only one primary button. An optional trailing arrow icon (`→`, 16px, `aria-hidden="true"`) moves `translateX(3px)` on hover.

### Product card (`<article class="card">`, whole card clickable through a stretched title link)
- Container: bg `--color-surface`; `border:1px solid var(--color-border)`; `border-radius:var(--radius-md)`; `overflow:hidden`; `position:relative`; `transition: transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out), border-color var(--dur-med) var(--ease-out);`
- Media: 1:1, bg `--color-surface-alt`, `<img>` with `object-fit:cover`, `width/height` attributes set, `loading="lazy"`. Under 560px the card is horizontal: grid `112px 1fr`, image 112×112, gap `--space-4`.
- Body: padding `--space-5` (`--space-4` in the horizontal layout). Stack: eyebrow `--text-xs` `--color-muted` ("Káva · zrno" / "Čaj"), then title `--font-display` `--text-lg` 600 `--color-text` (the `<a>`, with `::after{content:"";position:absolute;inset:0}`), then meta line `--text-sm` `--color-muted` (only facts from the BRIEF, e.g. "Brazílie · střední pražení"; no invented tasting notes), then price `--font-body` `--text-lg` 700 `--color-text` with `margin-top:--space-3`, then the visual cue "Vybrat →" `--text-sm` 600 `--color-primary`.
- Hover: `transform:translateY(-4px)`; `box-shadow:var(--shadow-card-hover)`; `border-color:var(--color-border-strong)`; image `transform:scale(1.04)` over `--dur-slow`.
- Focus-visible (`.card:has(a:focus-visible)`, or `:focus-within` as fallback): `outline:3px solid var(--color-focus); outline-offset:4px`. Remove the link's own outline so only one ring shows. Same lift as hover.
- Active: `transform:translateY(-1px)`.
- Missing image (error): show the `--color-surface-alt` box with a 40px "ll" mark in `--color-border-strong`. Never show the WooCommerce placeholder.
- The tea card uses eyebrow "Čaj". The section heading must not claim that every item is coffee (e.g. H2 "Naše káva a čaj" or a tea card placed after the coffees with its own eyebrow).

### Step item ("Čím je výjimečná")
No box. The number ("01") is `--font-display` `--text-2xl` 700 `--color-primary`. Title `--text-xl` `--color-text`. Body `--text-base` `--color-muted`, max 40ch. Top border 2px `--color-text` with width 48px and `margin-bottom:--space-5`.

### Tasting band
bg `--color-surface-alt`, 2 columns at 1024px and up (image `ochutnavka.webp` 3:2, `--radius-md`; text column). Eyebrow, then H2 `--text-2xl`, then body `--text-base` `--color-text`, then Secondary (light) button "Domluvit ochutnávku", then hours line `--text-sm` `--color-muted` ("Po–Pá 9.00–15.00").

### Header and footer surfaces
- Header: sticky, bg `--color-dark`, height 64px (under 1024px) / 88px (1024px and up), bottom border 1px `rgba(250,246,240,0.08)`. Logo `logo_text_white.png` shown at 96×51 (mobile) / 128×68 (desktop), never scaled up. Nav links are `--text-sm` 600 `--color-on-dark`. Hover/current state uses `--color-accent` with a 2px underline at 6px offset. Focus uses `--color-focus-on-dark`.
- Footer: bg `--color-dark`. Headings `--text-xl` `--color-on-dark`. Body `--text-sm` `--color-on-dark-muted`. Links `--color-accent`. Hours rows separated by 1px `rgba(250,246,240,0.12)` with the time right-aligned. The bottom bar is bg `--color-dark-2` with `--text-sm` `--color-on-dark-muted`. No photo behind the footer.
