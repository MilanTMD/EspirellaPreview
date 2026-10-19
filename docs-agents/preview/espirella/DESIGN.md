# DESIGN – espirella preview (static copy of the production homepage)

Source of truth: production `base.css` + the inline `<style>` in production `index.html` (fonts). Every value below is copied from them. Where a value here and base.css disagree, base.css wins. Preview-only additions are marked **[preview]**.

**Port rule for the builder.** Copy these blocks from base.css verbatim, in this order: `:root{…}`, `@media (width>=1024px){:root{…}}`, `@media (prefers-color-scheme:dark){:root{…}}`, `.scope-espresso`, its dark-mode media block, `.scope-teal`, then the base element rules and every component rule whose selector appears in the homepage markup (list in §5.9). Do not port `.gateway`, `toast*`, `cart-badge.is-bump`/`@keyframes bump`, or the PDP/cart/checkout/contact/legal rules.

---

## 1. Visual direction

The look is warm, quiet and editorial, like a small Czech roastery. Fraunces serif headings and dark espresso-brown text sit on cream (#faf6f0), and the page alternates solid colour bands (light teal hero and tasting, sand "Od zrna k šálku", dark espresso B2B band and footer) instead of putting text over photos. It is built for home espresso drinkers on mobile: one filled primary button ("Vybrat kávu") and five blend cards with taste notes, an intensity scale and a price directly under the hero. Offices are served by a clearly separate dark band. Imagery is framed by a thin double "label" frame that echoes coffee-bag labels.

---

## 2. Type scale

### 2.1 Families

| Token | Value |
|---|---|
| `--font-display` | `"Fraunces Variable", "Fraunces Fallback", Georgia, "Times New Roman", serif` (h1–h4, wordmark, blend brand, process numbers, mobile-nav links) |
| `--font-sans` | `"Instrument Sans Variable", "Instrument Sans Fallback", "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, sans-serif` (body, UI) |

**Files.** Use self-hosted woff2 variable files (`wght` axis) from `@fontsource-variable/fraunces` and `@fontsource-variable/instrument-sans`, placed in `preview/espirella/assets/fonts/`:
- `fraunces-latin-wght-normal.woff2`
- `fraunces-latin-ext-wght-normal.woff2`
- `instrument-sans-latin-wght-normal.woff2`
- `instrument-sans-latin-ext-wght-normal.woff2`

You need **both subsets**. Czech č ď ě ň ř š ť ů ž (U+0100–017F) are only in latin-ext. German äöüß, „“ and Czech á é í ó ú ý are in latin. Like production, preload the two Fraunces files (`<link rel="preload" as="font" type="font/woff2" crossorigin>`). Never point at `/_astro/`.

**@font-face (production values; only the `src` path changes, and it is relative to the file that holds the rule):**

```css
@font-face{font-family:'Fraunces Variable';font-style:normal;font-display:swap;font-weight:100 900;src:url(fonts/fraunces-latin-ext-wght-normal.woff2) format('woff2-variations');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Fraunces Variable';font-style:normal;font-display:swap;font-weight:100 900;src:url(fonts/fraunces-latin-wght-normal.woff2) format('woff2-variations');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'Instrument Sans Variable';font-style:normal;font-display:swap;font-weight:400 700;src:url(fonts/instrument-sans-latin-ext-wght-normal.woff2) format('woff2-variations');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}
@font-face{font-family:'Instrument Sans Variable';font-style:normal;font-display:swap;font-weight:400 700;src:url(fonts/instrument-sans-latin-wght-normal.woff2) format('woff2-variations');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
/* metric-adjusted fallbacks, verbatim */
@font-face{font-family:'Fraunces Fallback';src:local('Georgia');size-adjust:98%;ascent-override:92%;descent-override:24%;line-gap-override:0%}
@font-face{font-family:'Instrument Sans Fallback';src:local('Arial');size-adjust:97%;ascent-override:98%;descent-override:26%;line-gap-override:0%}
```

### 2.2 Size and line-height tokens (px values computed at 375 / 1440)

| Token | Size | px @375 / @1440 | Line-height token |
|---|---|---|---|
| `--text-2xs` | .6875rem | 11 / 11 | `--lh-2xs` 1rem |
| `--text-xs` | .75rem | 12 / 12 | `--lh-xs` 1rem |
| `--text-sm` | .875rem | 14 / 14 | `--lh-sm` 1.25rem |
| `--text-base` | clamp(1rem, .96rem + .19vw, 1.0625rem) | 16.1 / 17 | `--lh-base` 1.6 |
| `--text-lg` | clamp(1.125rem, 1.06rem + .3vw, 1.3125rem) | 18.1 / 21 | `--lh-lg` 1.55 |
| `--text-xl` | clamp(1.25rem, 1.15rem + .45vw, 1.5rem) | 20.1 / 24 | `--lh-xl` 1.3 |
| `--text-2xl` | clamp(1.5rem, 1.3rem + .85vw, 2rem) | 24 / 32 | `--lh-2xl` 1.2 |
| `--text-3xl` | clamp(1.875rem, 1.53rem + 1.47vw, 2.75rem) | 30 / 44 | `--lh-3xl` 1.12 |
| `--text-4xl` | clamp(2.125rem, 1.65rem + 2.03vw, 3.5rem) | 34 / 55.6 | `--lh-4xl` 1.06 |
| `--text-5xl` | clamp(2.5rem, 1.8rem + 3vw, 4.5rem) | 40 / 72 | `--lh-5xl` 1.02 |

Weights: `--fw-regular` 400, `--fw-medium` 500, `--fw-semibold` 600, `--fw-bold` 700, `--fw-display` 560, `--fw-display-hero` 540, `--fw-wordmark` 620.
Tracking: `--tracking-tight` -.02em, `--tracking-display` -.015em, `--tracking-eyebrow` .12em, `--tracking-label` .02em, `--ws-numeric` .12em (word-spacing).

### 2.3 Roles used on the homepage

| Role (selector) | Family | Size / LH | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Hero H1 `.hero__title` | display | 5xl / 1.02 | 540 | -.025em | `text-wrap:balance` (all h1–h4) |
| H1 default (beyond-preview page) | display | 4xl / 1.06 | 560 | -.02em | |
| H2 | display | 3xl / 1.12 | 560 | -.015em | |
| H3 default (process steps) | display | xl / 1.3 | 600 | -.005em | |
| Blend name `.blend-card__name` | display | 2xl / 1.2 | 600 | -.005em | |
| Category title `.category-tile__title` | display | lg, xl at ≥768 / 1.3 | 600 | -.005em | |
| Store-info H3 | display | lg / lh-xl 1.3 | 600 | -.005em | |
| Process number `.process__no` | display | 3xl / 1 | 500 | 0 | accent, tabular-nums |
| Mobile-nav link | display | xl | 600 | 0 | |
| Wordmark main / sub | display / sans | see BRIEF §5 table | 620 / 600 | -.02em / .24em | |
| Blend brand `.blend-card__brand` | display | sm | 620 | -.02em | muted |
| Body | sans | base / 1.6 | 400 | 0 | |
| `.lead` | sans | lg / 1.55 | 400 | 0 | muted, max 60ch, `text-wrap:pretty` |
| `.eyebrow` | sans | xs / 1rem | 600 | .12em | uppercase, accent, 24×1.5px rule before it, 8px gap |
| `.stamp` | sans | xs / 1rem | 700 | .14em | uppercase, accent |
| Button | sans | base (lg: 1.0625rem) / 1.2 | 600 | .01em | |
| Site-nav link | sans | base | 500 | 0 | |
| Menu button | sans | sm | 600 | 0 | |
| `.badge` | sans | xs / 1 | 600 | 0 | |
| Media label | sans | xs / 1rem (2xs at slot ≤280px) | 600 | .02em | |
| Notes, tile text, b2b facts, footer bottom, `dt` | sans | sm / 1.25rem | 400 | 0 | |
| Price `.price--md` | sans | lg | 700 | 0 | tabular; `.price__from` 400 muted |
| Intensity label / number | sans | xs / sm | 600 / 700 | .12em / 0 | label uppercase muted |
| Footer heading | sans | xs / 1rem | 600 | .12em | uppercase, accent |
| Store contact links | sans | lg | 600 | 0 | link colour, underlined |

---

## 3. Color tokens

### 3.1 Light theme (`:root`) and dark theme (`@media (prefers-color-scheme:dark)`)

| Token | Light | Dark |
|---|---|---|
| `--color-bg` | #faf6f0 | #1a130e |
| `--color-surface` | #fff | #241a14 |
| `--color-surface-alt` | #f2eadf | #2e231b |
| `--color-text` | #2f2118 | #f3ebe1 |
| `--color-text-muted` | #6e5a4b | #bba999 |
| `--color-primary` | #443226 | #e8c9a0 |
| `--color-primary-hover` | #2f2118 | #f2ddbf |
| `--color-on-primary` | #fff | #1a130e |
| `--color-link` | #1f5f66 | #8fd0d6 |
| `--color-accent` | #96501c | #e0a46b |
| `--color-on-accent` | #fff | #1a130e |
| `--color-teal` | #7ebec5 | #2f5a5e |
| `--color-teal-subtle` | #dceeef | #15282a |
| `--color-border` | #e3d7c7 | #3a2d24 |
| `--color-border-strong` | #8c7766 | #857262 |
| `--color-focus` / `--color-info` | #1f5f66 | #8fd0d6 |
| `--color-info-surface` | #dceeef | #15282a |
| `--color-success` / `-surface` | #2e6b3a / #e6f2e7 | #7fcb8e / #1c2b1f |
| `--color-warning` / `-surface` | #7a4b00 / #fcefd6 | #f2c46b / #2e2410 |
| `--color-danger` / `-surface` / `on-danger` | #a8322a / #fbe9e7 / #fff | #f19a90 / #321a17 / #1a130e |
| `--color-disabled-bg` / `-text` | #eae2d7 / #6e5a4b | #3a2d24 / #bba999 |
| `--color-overlay` (menu backdrop) | #1f150f8f | #000000a3 |
| `--tint-kava` | #ebd9c3 | #3a2a1f |
| `--tint-caj` | #dde7d3 | #1f2a1e |
| `--tint-doplnky` | #f3dccb | #3a241c |
| `--tint-pece` | #dceeef | #15282a |
| `--tile-line` | #2f21181f | #f3ebe11a |
| `--tile-line-strong` | #2f211838 | #f3ebe12e |
| `--tile-frame` | #2f21188c | #f3ebe173 |
| `--ph-label-bg` / `--ph-label-ink` | #fff / #6e5a4b | #241a14 / #bba999 |
| `--ph-espresso-bg` | #2f2118 | #120d0a |
| `--ph-cup` | #f3ebe1 | #d9cbbb |
| `--ph-crema-core` / `--ph-crema-edge` | #c98b4e / #96501c | #b87a40 / #7a4416 |
| `--ph-saucer` | #f3ebe138 | #f3ebe129 |
| `--ph-frame-on-dark` | #f3ebe161 | #f3ebe14d |
| `--ph-heat` | #96501c38 | #e0a46b29 |
| `--blend-royal-gold` / `gourmet` / `columbia` / `brasil` / `dekaf` | #b8892b / #8a3b2e / #3f6b47 / #2f6475 / #6a5a8c | (unchanged) |

`:root` also sets `color-scheme: light dark`. `::selection` uses `--color-teal` as the background and `--color-text` as the text.

### 3.2 Scope classes (verbatim)

`.scope-espresso` (B2B band and footer) redefines tokens locally, so every component inside it re-themes automatically:

| Token | Value |
|---|---|
| `--band-bg` | #2f2118 (dark mode: #2e231b; **footer** in dark mode: #120d0a plus `border-top:1px solid #3a2d24`) |
| `--color-text` | #f3ebe1 |
| `--color-text-muted` | #bba999 |
| `--color-primary` / `-hover` / `on-primary` | #e8c9a0 / #f2ddbf / #1a130e |
| `--color-link` / `--color-focus` | #8fd0d6 |
| `--color-accent` / `on-accent` | #e0a46b / #1a130e |
| `--color-border` / `-strong` | #4a3a2e / #857262 |
| `--color-surface` / `-surface-alt` | #3a2d24 |

It also sets `background:var(--band-bg); color:var(--color-text)`.

`.scope-teal` (hero and tasting) sets `--band-bg:var(--color-teal-subtle); background:var(--band-bg)`. The teal follows the theme: #dceeef in light mode, #15282a in dark mode.

### 3.3 Contrast of the pairs actually used (WCAG 2.x, light theme unless noted)

| Pair (foreground on background) | Where | Ratio | AA |
|---|---|---|---|
| text #2f2118 on bg #faf6f0 | body, headings | 14.43 | pass |
| text on surface #fff | header, tiles, menu panel | 15.54 | pass |
| text on surface-alt #f2eadf | §3 process band | 13.03 | pass |
| text on teal-subtle #dceeef | hero, tasting | 12.96 | pass |
| text on tint-kava #ebd9c3 | blend cards, "Mletá verze" ghost | 11.28 | pass |
| muted #6e5a4b on bg | store-info `dt` | 6.04 | pass |
| muted on surface #fff | tile text, media label | 6.51 | pass |
| muted on surface-alt | badge, cart badge | 5.46 | pass |
| muted on teal-subtle | hero and tasting lead | 5.43 | pass |
| muted on tint-kava | blend brand, intensity label, "od " | 4.72 | pass |
| link #1f5f66 on bg | store contact links, Mapy.cz | 6.76 | pass |
| link / info icon on teal-subtle | icon circles, focus ring in hero | 6.07 | pass |
| accent #96501c on bg | eyebrow | 5.64 | pass |
| accent on teal-subtle | stamp, tasting eyebrow | 5.06 | pass |
| accent on surface-alt | process numbers | 5.09 | pass |
| #fff on primary #443226 | primary button, active language pill | 12.14 | pass |
| #fff on primary-hover #2f2118 | primary hover/active | 15.54 | pass |
| primary #443226 on teal-subtle / bg / surface-alt | secondary button (default / hover) | 10.13 / 11.27 / 10.18 | pass |
| espresso: text #f3ebe1 on #2f2118 | B2B, footer | 13.16 | pass |
| espresso: muted #bba999 on #2f2118 | B2B facts, lead, footer tagline, `dt`, bottom row | 6.84 | pass |
| espresso: accent #e0a46b on #2f2118 | eyebrow, footer headings, wordmark "ll" | 7.17 | pass |
| espresso: link/focus #8fd0d6 on #2f2118 | focus ring | 9.00 | pass |
| espresso: #1a130e on #e8c9a0 / #f2ddbf | B2B primary button / hover | 11.63 / 13.88 | pass |
| dark: text #f3ebe1 on #1a130e / on teal #15282a | dark mode body / hero | 15.55 / 12.99 | pass |
| dark: muted #bba999 on #1a130e / on #3a2a1f | dark mode lead / blend cards | 8.09 / 6.04 | pass |
| Non-text: border-strong #8c7766 on #fff | menu button ring | 4.25 | ≥3:1 pass |
| Non-text: accent dots on tint-kava | intensity dots | 4.40 | ≥3:1 pass |

---

## 4. Spacing, layout, breakpoints

### 4.1 Scale (base unit 4px = .25rem)

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--space-1` | .25rem (4) | | `--space-10` | 2.5rem (40) |
| `--space-2` | .5rem (8) | | `--space-12` | 3rem (48) |
| `--space-3` | .75rem (12) | | `--space-16` | 4rem (64) |
| `--space-4` | 1rem (16) | | `--space-20` | 5rem (80) |
| `--space-5` | 1.25rem (20) | | `--space-24` | 6rem (96) |
| `--space-6` | 1.5rem (24) | | `--space-32` | 8rem (128) |
| `--space-8` | 2rem (32) | | `--space-0` | 0 |

Stacks: `--stack-xs` space-2, `--stack-sm` space-4, `--stack-md` space-6, `--stack-lg` space-10, `--stack-xl` space-16 (`.stack-* > * + * { margin-block-start }`).

### 4.2 Fluid layout tokens

| Token | Value | @375 | @1440 |
|---|---|---|---|
| `--gutter` | clamp(1rem, .5rem + 2.2vw, 2.5rem) | 16.3 | 39.7 |
| `--section-py` (`.section`, hero bottom, b2b, tasting, store-info) | clamp(3.5rem, 2.27rem + 5.26vw, 7rem) | 56 | 112 |
| `--section-py-sm` (footer) | clamp(2.5rem, 1.9rem + 2.5vw, 4.5rem) | 40 | 66.4 |
| `--grid-gap` | clamp(.75rem, .45rem + 1.3vw, 1.5rem) | 12.1 | 24 |
| Hero padding | top `--space-10` (40), `--space-16` (64) at ≥768; bottom `--section-py` | | |

### 4.3 Containers and fixed sizes

| Token / class | Value |
|---|---|
| `.container--wide` (header, every section, footer) | `inline-size:min(100% - 2*var(--gutter), var(--container-wide))` with `--container-wide` 82.5rem (1320px); `margin-inline:auto` |
| `.container` / `--container-max` | 75rem (1200px) |
| `.container--prose` / `--container-prose` | 45rem (720px) |
| `.container--narrow` / `--container-narrow` | 40rem (640px), used by the beyond-preview page |
| `--header-h` | 4rem (64px); 4.75rem (76px) at ≥1024 |
| `scroll-padding-top` / `[id]{scroll-margin-top}` | `calc(var(--header-h) + var(--space-4))` |
| Radii | `--radius-sm` 4px, `--radius-md` 8px, `--radius-card` 12px, `--radius-lg` 16px, `--radius-pill` 999px |
| Borders | `--border-1` 1px, `--border-control` 1.5px, `--border-selected` 2px, `--frame-double` `3px double` |
| Controls | `--control-h` 3rem, `--control-h-sm` 2.75rem, `--control-h-lg` 3.5rem, `--tap-min` 2.75rem |
| Icons | `--icon-sm` 16px, `--icon-md` 20px, `--icon-lg` 24px; `.icon` stroke 1.75px, round caps and joins, `fill:none` |
| z-index | header 100, overlay 200, mobile nav 300, skip link 500 |

### 4.4 Breakpoints (production uses `width` range syntax)

| Query | What changes |
|---|---|
| ≤339px | wordmark 1.375rem / .625rem; header actions gap 0 |
| ≤359px | `.btn{white-space:normal}` |
| ≤374px | "Menu" label visually hidden; menu-btn min-inline 44px |
| ≤399px | header gap space-2; menu-btn padding-inline space-2 |
| ≤479px | hero buttons full width (stacked) |
| **375 (reference)** | 1-col hero (text, then 4:3 slot); blends 1 col; process stacked; categories 2×2 (1:1 slots); B2B and tasting stacked; store-info 1 col; footer 1 col |
| ≥768px | wordmark main 1.625rem; hero top padding 64; blends 2 cols (last spans 2); process 3 cols; categories 4 cols; store-info 2 cols; footer 2 cols; tile body padding 16, tile title xl |
| ≥1024px | header 76px, `site-nav` shown, menu button hidden; wordmark 1.75rem / .75rem; hero 12-col grid (text cols 1–6, media 7–12, gap grid-gap); media slots switch to `--ratio-lg`; blends 6-col grid (3 + 2); B2B and tasting 2 cols with gap space-16; store-info 4 cols; footer `4fr 2fr 3fr 3fr`; **[preview]** language switcher appears in the header |
| 1024–1279px | **[preview]** `.site-nav ul{gap:var(--space-6)}` so nav + switcher fit in the 963px container in CS/EN/DE |
| ≥1280px | blends 5 in one row |
| 1280–1439px | blend-card padding-inline space-4; foot gap space-1 |
| **1440 (reference)** | 1320px container; hero media 648×518; blend cards ≈245px; process 3×413 (gap 40); categories 4×312 (4:5 slots); B2B / tasting 2×628 |

Note: `ol.process[role=list]` has gap space-10 (40px) at every width. Its higher specificity beats the `.process` gap of space-8 at ≥768, which is why 1440 gives 413px columns.

---

## 5. Buttons and cards

Motion tokens: `--dur-instant` 80ms, `--dur-fast` .14s, `--dur-base` .2s, `--dur-slow` .28s; `--ease-standard` cubic-bezier(.2,0,0,1), `--ease-out` cubic-bezier(.16,1,.3,1), `--ease-in` cubic-bezier(.4,0,1,1).
Shadows (light): `--shadow-1` `0 1px 2px #2f21180f, 0 1px 1px #2f21180a`; `--shadow-2` `0 10px 24px -10px #2f211838, 0 2px 4px #2f21180f`; `--shadow-3` `0 24px 48px -16px #2f21184d`. Dark mode: `--shadow-1` `0 0 0 1px var(--color-border)`; `--shadow-2` `0 0 0 1px var(--color-border), 0 12px 28px -12px #0009`; `--shadow-3` `0 0 0 1px var(--color-border), 0 24px 48px -16px #000000b3`.
**Global focus-visible:** `outline:3px solid var(--color-focus); outline-offset:2px` (`--focus-ring`, `--focus-offset`).
**Hover rules** live only inside `@media (hover:hover)`. **Reduced motion:** `*{transition-duration:.01ms!important; animation-duration:.01ms!important}`; `.blend-card:hover, .category-tile:hover, .btn:active{translate:none}`; smooth scrolling only under `no-preference`.

### 5.1 Buttons

| Class | Default | Hover | Active | Focus-visible / other |
|---|---|---|---|---|
| `.btn` (base) | inline-flex, centered, gap 8; min-height 48 (`--control-h`); padding-inline 24; radius pill; sans base 600, .01em, lh 1.2; no border or underline; nowrap. Transition: color, background-color, box-shadow, text-decoration-color 140ms standard; translate 80ms standard | — | `translate:0 1px` | global ring. Disabled / `aria-disabled`: bg #eae2d7, text #6e5a4b, no shadow, `not-allowed` (not used on the homepage) |
| `.btn--lg` | min-height 56; padding-inline 32; font 1.0625rem | | | |
| `.btn--sm` | min-height 44; padding-inline 16; font sm | | | |
| `.btn--block` | `inline-size:100%` | | | |
| `.btn--primary` | bg primary #443226, text #fff (espresso: #e8c9a0 / #1a130e) | bg primary-hover #2f2118 (espresso #f2ddbf) | bg primary-hover + 1px down | |
| `.btn--secondary` | transparent; text primary; `box-shadow:inset 0 0 0 2px var(--color-primary)` | bg surface-alt #f2eadf | bg surface-alt + 1px down | |
| `.btn--ghost` | transparent; text primary; padding-inline 12; `text-decoration:underline 1px`, offset .2em | text `--color-text`, underline 2px | 1px down | In blend cards `.blend-card__alt`: text colour, padding-inline 4, `position:relative; z-index:1` (above the card link overlay) |
| `.btn-row` | flex, wrap, gap 12 | | | `.hero__cta`: width 100%, margin-top 16; ≤479px each `.btn` 100% wide |
| `.icon-btn` (search, cart, close) | 44×44 grid-centered; radius pill; text colour; icon 24px; transition bg 140ms | bg surface-alt | 1px down | global ring |
| `.cart-badge` | absolute top 2px right 0; 20px tall, min 20 wide, padding-inline 6; pill; bg surface-alt; muted text xs 700 tabular, lh 1; `box-shadow:0 0 0 2px var(--color-surface)`; static "0", `data-filled="false"` | | | |
| `.menu-btn` (<1024 only) | inline-flex, gap 8; height 44; padding-inline 12 (≤399: 8); `border:1.5px solid` border-strong #8c7766; radius pill; sm 600 text colour; transparent; icon 20px; transition bg 140ms | bg surface-alt | — | `[aria-expanded=true]`: bg primary, text on-primary, border primary; hamburger swapped for close icon. Hidden ≥1024 (`display:none!important`) |
| Links `a` (default) | colour link #1f5f66; underline 1px, offset .18em | underline 2px | — | global ring |
| `.site-nav a` | inline-flex, min-height 44; padding 12px 4px; radius 4; text colour; 500; no underline; underline-offset 8px | underline in accent | — | `[aria-current=page]`: 600, underline in primary |
| `.site-footer__links a` | flex, min-height 44; text colour; no underline | underline | — | |
| `.info-dl a` (footer) | text colour, underlined; inline-flex, min-height 44 | underline 2px | — | |
| `.link-ext` (Mapy.cz) | inline-flex, gap 8, min-height 44; link colour; external icon 16 | underline 2px | — | |
| `.store-info__links a` | inline-flex, min-height 44; lg 600; link colour, underlined | underline 2px | — | |
| `.mobile-nav__list a` | flex space-between; min-height 56; padding-inline 8; `border-bottom:1px solid` border; display xl 600; text colour; chevron 20px muted | bg surface-alt | — | `outline-offset:-3px` |
| `.skip-link:focus` | fixed at 12/12; padding 12px 16px; bg primary, text on-primary, 600; radius 8; z 500 | | | |
| `a.wordmark` | inline-flex baseline; padding-block 12; min-height 44; no underline | "coffee" turns text colour (140ms) | — | `outline-offset:4px; border-radius:4px` |

### 5.2 Header, mobile panel, footer

- **`.site-header`:** sticky top 0, z 100, bg surface, `border-bottom:1px solid` border. `__inner` is a `.container--wide` flex row, space-between, centered, gap 16, height `--header-h`. `__actions` is flex with gap 4.
- **Mobile panel:**
  - **Backdrop:** fixed, overlay colour, opacity 0 → 1. Fades over 200ms, `--ease-out` when opening and `--ease-in` when closing.
  - **`.mobile-nav__panel`:** fixed to the right edge, full height, width `min(88vw, 22.5rem)`, padding 16, bg surface, shadow-3, flex column with gap 16, `translate:100%`. Opens to `translate:0` over 280ms `--ease-out`; closes over 200ms `--ease-in`.
  - **Rows:** `__top` is a space-between row (wordmark and close icon-btn). `.mobile-nav__phone` (secondary lg block) has `margin-block-start:auto`.
- **`.site-footer.scope-espresso`:**
  - **Box:** padding-block section-py-sm; `margin-block-start:auto`.
  - **Grid:** gap 32. Columns as in 4.4.
  - **Brand column:** tagline muted, margin-top 12. Rule 48×1.5px in accent, margin-top 16.
  - **Headings:** xs 600, .12em, uppercase, accent, margin-bottom 12.
  - **`.info-dl`:** grid with gap 12. `dt` sm muted. `dd` base.
  - **`__bottom`:** `border-top:1px solid` border (#4a3a2e), sm muted, grid gap 8, margin-top 32, padding-top 24.

### 5.3 Blend card `article.blend-card[data-blend]`

| Part | Style |
|---|---|
| Box | flex column, gap 12; padding 24 (1280–1439: inline 16); bg tint-kava; `border-top:6px solid var(--blend)`, where `--blend` comes from `data-blend` (royal-gold, gourmet, columbia, brasil, dekaf); radius 12; position relative; transition translate and box-shadow 200ms standard |
| Inner frame `::before` | `inset:8px; border:3px double var(--tile-frame); border-radius:8px; pointer-events:none`; transition border-color 140ms |
| Top row | flex, space-between, centered. Brand "espirella" (display 620, sm, -.02em, muted) and bean icon 24px muted |
| Name | h3 2xl / 1.2 / 600. `.blend-card__link`: text colour, no underline; `::after{content:"";position:absolute;inset:0;border-radius:12px}` makes the whole card the link |
| Notes | sm / 1.25rem |
| Intensity `.intensity` | `margin-block-start:auto`; flex wrap, gap 8px 12px. Dots: inline-flex gap 4; each 8×8 circle with `border:1.5px solid` border-strong; `.is-filled` bg and border accent. Number "n/10" sm 700 tabular |
| Foot | flex, space-between, baseline, gap 8 (1280–1439: 4), nowrap. `.price.price--md` lg 700 tabular; `.price__from` 400 muted. Ghost sm "Mletá verze" |
| Hover | shadow-2; `translate:0 -2px`; frame turns `--color-text`; link underlined 1px, offset .15em |
| Active | shadow-1; translate 0 |
| Focus-visible | `.blend-card:has(.blend-card__link:focus-visible){outline:3px solid var(--color-focus);outline-offset:3px}`; the link's own outline is none. The "Mletá verze" button gets the global ring |
| Grid `.blend-grid` | margin-top 40; gap grid-gap. 1 col → ≥768: 2 cols, last spans 2 → ≥1024: 6 cols, children span 2, `:nth-child(n+4)` span 3 → ≥1280: 5 cols, all span 1 |

### 5.4 Category tile `a.category-tile`

| Part | Style |
|---|---|
| Box | flex column; bg surface; `1px solid` border; radius 12; `overflow:clip`; text colour; no underline; transition translate and box-shadow 200ms standard |
| Media | `.media-slot` with radius `12px 12px 0 0`; ratio 1/1, 4/5 at ≥1024 |
| Body | flex column, items start, gap 8; padding 12 (≥768: 16); flex 1 |
| Title | h3, flex with gap 8; lg (≥768: xl) 600. Arrow-right icon 20px with `transition:translate 200ms var(--ease-out)` |
| Text | sm / 1.25rem muted; margin-bottom 8 |
| `.badge` | `margin-block-start:auto`; 24px tall; padding-inline 8; pill; bg surface-alt; muted xs 600, lh 1 |
| Hover | shadow-2; `translate:0 -2px`; arrow `translate:4px`; slot frame turns `--color-text` |
| Active | shadow-1; translate 0 |
| Focus-visible | `outline:3px solid var(--color-focus); outline-offset:3px` |
| Grid `.category-grid` | margin-top 32; gap grid-gap; 2 cols → 4 at ≥768 |

### 5.5 Process steps `ol.process`

`ol.process[role=list]` has margin-top 32, gap 40 and is a grid: 1 col, 3 equal columns at ≥768. `.process__step` is a grid with gap 16 and `align-content:start`: slot (4:3), then `.process__head` (flex, baseline, gap 12: number display 500 3xl accent lh 1 tabular, then h3), then `.process__text` (max 38ch). The section is `.section.section--alt` (bg surface-alt). The heading is left-aligned with no eyebrow.

### 5.6 Hero, B2B band, tasting band

| Block | Style |
|---|---|
| Hero `section.hero.scope-teal` | padding as in 4.2. `.hero__grid`: grid, gap 32, centered; ≥1024 12 cols with gap grid-gap. `.hero__text`: grid, gap 16, `justify-items:start`. Stamp: inline-flex, gap 8; padding 4px 12px; pill; `border:1.5px solid` (currentColor = accent); 6px accent dot |
| B2B `section.b2b.scope-espresso` | padding-block section-py. `.b2b__grid`: grid, gap 32, centered; ≥1024 2 equal cols with gap 64. Text column: `>*+*` margin-top 16; h2 margin-top 12; facts margin-top 24; facts + button paragraph margin-top 32. `.b2b__facts`: flex wrap, gap 8px 20px, sm muted; check icon 16px accent. Lead muted. Button: primary lg (light #e8c9a0 here) |
| Tasting `section.tasting.scope-teal` | Same grid as B2B; media is first in the DOM, so it is on the left at ≥1024. Text: `>*+*` 16; h2 12; lead + button paragraph 32. Button: primary lg |

### 5.7 Store info `section.store-info`

Padding-block section-py. h2 margin-bottom 32. Grid gap `32px var(--grid-gap)`; 1 → 2 (≥768) → 4 (≥1024) cols.
- **Block:** grid, gap 8, start-aligned.
- **`.icon-circle`:** 40×40, radius 50%, bg teal-subtle, icon colour info #1f5f66, icon 20px.
- **h3:** lg / 1.3, margin-top 8.
- **`dl.hours`:** grid, gap 4. Each row is flex with gap 16. `dt` min-width 4rem, muted. `dd` 600 tabular.
- **`.store-info__links`:** grid, gap 4.

### 5.8 Media slot `.media-slot[data-slot][data-motif]` (CSS art, copy verbatim)

| Part | Style |
|---|---|
| Box | `isolation:isolate; position:relative; overflow:hidden; container-type:inline-size; aspect-ratio:var(--ratio)` (≥1024: `var(--ratio-lg, var(--ratio))`); `border-radius:var(--slot-radius, 16px)`; `background-color:var(--slot-bg)` |
| `__art` | absolute, inset 0; carries the motif gradient |
| `__glyph` (category slots) | centered; width `clamp(32px,22cqi,64px)`; muted; stroke 1.25px |
| `__frame` | absolute, inset `clamp(8px,3cqi,16px)`; `border:3px double var(--slot-frame, var(--tile-frame))`; radius 8; transition border-color 140ms. Turns `--color-text` on parent link hover |
| `__label` | absolute, bottom-left at `clamp(14px,5cqi,28px)`; inline-flex, gap 6; padding 5px 10px; pill; bg `--ph-label-bg`; ink `--ph-label-ink`; xs/1rem 600 .02em; shadow-1; camera icon 14px; max-width `calc(100% - 2*clamp(14px,5cqi,28px))`. `@container (width<=280px)`: 2xs/1rem, radius 8, padding 4px 8px |
| Motifs | `crema` (hero `--cup:74%`, cup at `left:54%` ≥1024; priprava `--cup:64%`, saucer = tile-line-strong), `contour`, `beans`, `rings`, `veins`, `dots`, `lines`, `grid` + six b2b cups (`17% 23%`; ≥1024 `16% 21.33%`), `cups` (3 cups at 14/50/86%, teal band at 72%). Gradients exactly as in base.css |
| **[preview]** photo layer | `.media-slot > img{position:absolute;inset:0;z-index:2;inline-size:100%;block-size:100%;object-fit:cover;object-position:50% 50%}`. The `<img>` sits after the label so it covers art, glyph, frame and label; `onerror="this.remove()"` reveals the placeholder. Files and sizes are in ASSETS.md |

### 5.9 Selectors the homepage needs (port list)

`*`, `html`, `body`, `main`, `img/svg`, `h1–h4`, `p/ul/ol/dl/dd`, `ul[role=list]`, `a`, `button`, `[hidden]`, `.tabular/.price`, `:focus-visible`, `[id]`, `::selection`, `.lead`, reduced-motion blocks, `.visually-hidden`, `.container*`, `.stack-*`, `.section`, `.section--alt`, `.muted`, `.text-sm`, `.text-center`, `.btn-row`, `.icon*`, `.btn*`, `.badge`, `.eyebrow*`, `.section-heading*`, `.price*`, `.cup-empty*` (beyond page), `.media-slot*` + motifs, `.skip-link`, `.wordmark*` (not `--logo`/`--gateway`), `.site-header*`, `.site-nav*`, `.icon-btn`, `.cart-badge` (not `.is-bump`), `.menu-btn*`, `mobile-nav`, `html.nav-open`, `.mobile-nav*`, `.site-footer*`, `.info-dl`, `.category-tile*`, `.intensity*`, `.blend-card*`, `[tabindex="-1"]:focus`, `.icon-circle`, `.link-ext`, `.hero*`, `.stamp*`, `.blend-grid`, `.section-cta`, `.category-grid`, `.process*`, `.b2b*`, `.tasting*`, `.store-info*`, `.hours`, `.nf*` and `.cart-empty__actions` (beyond page).

---

## 6. Language switcher [preview]

| Item | Spec |
|---|---|
| Markup | `<nav class="lang-switch lang-switch--header" aria-label="Jazyk">` (EN "Language", DE "Sprache") with three `<a>`s. Each `<a>` has `lang` and `hreflang`. Visible text is `CS`, `EN`, `DE` inside `<span aria-hidden="true">`, followed by `<span class="visually-hidden">Čeština</span>` / `English` / `Deutsch`. Order is always CS, EN, DE. No "·" characters are rendered; the pill shapes separate the labels |
| Hrefs | Root: `index.html`, `en/index.html`, `de/index.html`. In `en/` and `de/`: `../index.html`, `../en/index.html`, `../de/index.html`. On beyond-preview pages, point to that language's `beyond-preview.html` |
| Default link | inline-flex, centered; `min-inline-size:var(--tap-min)` (44); `block-size:var(--tap-min)` (44); padding-inline 8; radius pill; sans sm 600, lh 1, letter-spacing .02em; text colour; no underline; transition background-color and color 140ms standard. Group: flex, gap 2px (about 136px wide) |
| Current `[aria-current="true"]` | bg primary #443226, text on-primary #fff (12.14:1). Dark mode: #e8c9a0 / #1a130e (11.63:1) |
| Hover (`hover:hover`) | Non-current: bg surface-alt #f2eadf (same as icon-btn). Current: bg primary-hover #2f2118 |
| Active | `translate:0 1px` |
| Focus-visible | global ring, 3px #1f5f66, offset 2px |
| ≥1024px (1440 reference) | Inside `.site-header__actions`, before the search icon-btn, with `margin-inline-end:var(--space-2)`. `.lang-switch--header{display:none}` below 1024 and `display:flex` at ≥1024. Order: [CS EN DE] [search] [bag]. Also add the 1024–1279 nav-gap rule from 4.4 and check that nothing wraps at 1024px in all three languages (`.site-nav a{white-space:nowrap}`) |
| <1024px (375 reference) | **Inside the mobile menu panel**, between the `nav` list and the phone button: `<div class="mobile-nav__lang">` (flex, space-between, centered, gap 12, padding-block 8). On the left is the label `Jazyk` / `Language` / `Sprache` as `<p class="eyebrow eyebrow--plain eyebrow--muted" aria-hidden="true">` (muted on white, 6.51:1). On the right is `<nav class="lang-switch lang-switch--panel" aria-label="…">` with gap 4. The panel already has a focus trap over `a[href]`, so the links are included automatically |
| Why the panel | The 375 header is already full (wordmark + search + bag + Menu ≈ 343px of 343px). A slim row would add 44px of sticky chrome on every scroll, so the panel is the only no-cost place |

Use distinct `--header` / `--panel` modifiers: the panel lives inside `.site-header__actions`, so a plain `.site-header .lang-switch` selector would hide the panel copy too.

---

## 7. "Beyond preview" page [preview]

Same `<head>` pattern (title, `noindex, nofollow`, hreflang), skip link, icon sprite, header, mobile menu and footer as the homepage. No nav item gets `aria-current`. All header and footer links follow the BRIEF 6.4 table.

```
<main id="obsah" tabindex="-1">
  <section class="beyond" aria-labelledby="beyond-title">
    <div class="container--narrow nf">
      <div class="cup-empty cup-empty--120" aria-hidden="true"></div>
      <p class="eyebrow">Designový koncept</p>
      <h1 id="beyond-title">Tato stránka není součástí ukázky</h1>
      <p class="lead">…existing message…</p>
      <div class="btn-row cart-empty__actions">
        <a class="btn btn--primary btn--lg" href="index.html">Zpět na ukázku</a>
        <a class="btn btn--secondary btn--lg" href="index.html#kde-nas-najdete">Kontakt</a>
      </div>
      <p class="text-sm muted">…mailto/tel fallback line, links in link colour…</p>
    </div>
  </section>
</main>
```

| Part | Reused production component | Spec |
|---|---|---|
| Wrapper | `.nf` (production 404 layout) inside `.container--narrow` (640px) | grid, gap 20, centered text and items, padding-bottom section-py. **[preview]** `.beyond{padding-block-start:var(--section-py)}` on the page bg |
| Decorative cup | `.cup-empty.cup-empty--120` | 120px empty top-view cup (surface-alt, border-strong ring, border saucer). `aria-hidden` |
| Eyebrow | `.eyebrow` | accent with a 24px rule. Keeps the existing "Designový koncept" text |
| Heading | `h1` default | 4xl / 1.06 / 560 / -.02em |
| Text | `.lead` | 1–2 sentences, muted, max 60ch, centered (`.nf .lead{margin-inline:auto}`) |
| Actions | `.btn-row` + `.cart-empty__actions` (`justify-content:center`) | Primary lg back to the homepage (one filled button), then secondary lg "Kontakt" → `index.html#kde-nas-najdete`. **[preview]** `@media (width<=479px){.beyond .btn{inline-size:100%}}` |
| Fallback line | `.text-sm.muted` | `info@espirella.com` (mailto) and `+420 608 311 088` (tel), in the default link style, with production wording from BRIEF §5 |

At 375 the page reads cup, eyebrow, H1 (about 3 lines at 34px), lead, stacked full-width buttons, then the fallback line. At 1440 it is a centered 640px column.
