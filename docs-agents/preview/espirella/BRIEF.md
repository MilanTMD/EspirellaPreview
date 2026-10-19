# BRIEF – espirella preview (static copy of the production homepage)

- **Source of truth:** https://espirellaproduction.netlify.app/. This is the finished Astro redesign that our team built. The preview must reproduce its homepage faithfully, with the same design and the same copy. Do not invent new design.
- **Saved production source** (read only): `C:\Users\milan\AppData\Local\Temp\claude\c--Users-milan-Desktop-Espirella-preview\f0ddda49-60e9-4991-b3ce-dbc1f1ad0130\scratchpad\prod\`. It contains `index.html`, `base.css` (all CSS values below come from it) and `favicon.svg`.
- **Reference screenshots of production:** `screenshots/reference-375.png` and `screenshots/reference-1440.png`.
  - They were taken in Chromium with a classic scrollbar, so the page width is 361px and 1425px.
  - The dark "Powered by Netlify" pill that appears in them is the Netlify HUD. It is NOT part of the design.
- **Old site (www.espirella.com):** `screenshots/before-375.png` and `screenshots/before-1440.png`.

## 1. Business
- **Company:** Espirella s.r.o., a Czech coffee company.
- **Main product:** its own "espirella" espresso coffees. There are five blends, sold as beans and ground, roasted in the Czech Republic.
- **Other products:** teas (TeaToGo, Don Vitto, Magic Fresh Fruit, Matcha), accessories (sugar, hot chocolate, cups) and cleaning products for JURA, SAECO and lever machines.
- **Sales channel:** its own e-shop.
- **Also offers:** coffee tastings by appointment, and a combined supply service for offices and cafés, with purchases on IČO/DIČ.
- **Locations:** registered office in Praha 1, warehouse in Říčany. Open Mon–Fri 9:00–15:00.
- **Site language:** Czech (`lang="cs"`, prices in Kč, `og:locale` cs_CZ).
- **Preview languages:** Czech stays at the root. The preview adds English (`en/`) and German (`de/`), with a CS/EN/DE language switcher.
  - Translation is the builder's job.
  - The switcher is the only visible element production does not have (see 6.6).

## 2. Audience
- **Primary: home espresso drinkers in Czechia.**
  - They use automatic or lever machines.
  - They need to see which blend suits them (taste notes, intensity), whether to pick beans or ground, the price, and a short path to buy.
  - Assumption: most of them are on mobile.
- **Secondary: offices and cafés.**
  - They want coffee plus consumables in one order, invoiced to the company.
  - The old brief only guessed at this group. Production now serves it directly with the "Pro kanceláře a kavárny" band.
- **Tertiary: two smaller groups.**
  - People near Prague who want a tasting. They need the booking button, opening hours and address.
  - Owners of JURA or SAECO machines who are looking for cleaning products.
- **Reader of this preview: the Espirella owner.**
  - The preview must look and behave like production.
  - Every link to a page outside the homepage must land on a clear "not part of the preview" page.

## 3. Main goal
Get visitors to choose and buy coffee.
- **Primary action:** the hero's filled button "Vybrat kávu". It is backed directly below the hero by five blend cards, each with a price and links to the bean and ground product pages, and by the "Celá nabídka kávy" button.
- **Secondary action:** "Domluvit ochutnávku". It appears as the hero's outline button and again in the tasting band.
- **Tertiary action:** "Poptat firemní odběr" in the B2B band.

In the preview all three actions go to `beyond-preview.html`. Keep the hierarchy exactly: one filled primary button, with the outline secondary button next to it.

## 4. 3 biggest design weaknesses (old espirella.com)
1. **The hero says nothing and the shop is buried.**
   - **What the screenshots show:** the H1 is "VÍTEJTE NA WEBOVÝCH STRÁNKÁCH ESPIRELLA S.R.O.", in white uppercase over a busy bean photo. It wraps to 4 lines at 375px. It sits above two small, equal-weight outline buttons, "OBCHOD" and "KONTAKT". At 375px the products start about 3,300px down a 5,200px page, after three long text blurbs.
   - **Production's answer:** a value-proposition H1, one filled primary CTA, and all five coffees with prices directly under the hero.
2. **Text is hard to read.**
   - **What the screenshots show:** body copy is 14px Open Sans at weight 300 in #666, and it is justified, which leaves visible gaps in the 375px columns. The "OCHUTNÁVKA KÁVY? ŽÁDNÝ PROBLÉM" band is flat light grey with thin white text. The footer text sits directly on a bean photo.
   - **Production's answer:** 16–17px Instrument Sans in dark brown on cream, solid colour bands (light teal and dark espresso) instead of text over photos, and a solid dark footer.
3. **The product area looks unfinished.**
   - **What the screenshots show:** the 4th card, "Green tea passion", shows the grey WooCommerce placeholder image. Tea sits under the heading "KÁVA KTEROU ZÁKAZNÍCI MILUJÍ". The cards are small bordered boxes with no description and no CTA.
   - **Production's answer:**
     - Real blend cards with taste notes, a 10-dot intensity scale, the price and a link to the ground version.
     - Separate category tiles for tea, accessories and machine care.

## 5. Key content to keep
- **Name:** Espirella s.r.o. (no comma). Blends are written in lowercase as "espirella".
- **Title:** `Espirella – čerstvě pražená káva na espresso`
- **Meta/OG description:** `Espresso kávy espirella pražené v České republice – zrnkové i mleté. K tomu čaje, doplňky a péče o kávovary JURA a SAECO. Domluvte si ochutnávku.`
- **Logo:** a CSS text wordmark, not an image. Copy this markup as-is:
  `<a class="wordmark" aria-label="Espirella – úvodní stránka"><span class="wordmark__main" aria-hidden="true">espire<span class="wordmark__ll">ll</span>a</span><span class="wordmark__sub" aria-hidden="true">coffee</span></a>`
  - **"espire" + "a":** Fraunces, weight 620, letter-spacing -0.02em, in the text colour.
  - **"ll":** same font, in the accent colour (#96501c on light backgrounds, #e0a46b on dark ones).
  - **"coffee":** Instrument Sans 600, letter-spacing .24em, in the accent colour, with margin-left .45em and margin-right -.24em.
  - **Correction to the task description:** "coffee" does NOT sit beneath the name. In production it sits on the same baseline, to the right of "espirella" (`display:inline-flex; align-items:baseline`). The screenshots confirm this.
  - **Sizes (main / sub):**

    | Context | Main | Sub |
    |---|---|---|
    | Default | 1.5rem | .6875rem |
    | ≥768px | 1.625rem | unchanged |
    | ≥1024px | 1.75rem | .75rem |
    | Footer (`wordmark--footer`) | 2rem | .8125rem |
    | ≤339px | 1.375rem | .625rem |

  - **Hover:** "coffee" changes to the text colour.
- **`favicon.svg`:** a 32×32 circle in #443226 with a bold Georgia "e" (24px, #FAF6F0).
  - Copy it to the preview root.
  - Link it as `<link rel="icon" href="favicon.svg" type="image/svg+xml">`, using `../favicon.svg` in `en/` and `de/`.
- **Offer:** the five blends (Royal Gold, Gourmet, Columbia, Brasil, Dekaf) with their notes, intensities and prices (6.1 §2), and the category counts: Káva 10, Čaj 26, Doplňky 8, Péče o kávovar 9.
- **Phone:** +420 608 311 088 (`tel:+420608311088`)
- **Email:** info@espirella.com (`mailto:info@espirella.com`)
- **Registered office:** Kaprova 42/14, 110 00 Praha 1
- **Warehouse (Sklad):** Politických vězňů 1233/40, budova E, 251 01 Říčany. Spell it "vězňů"; the old brief had the typo "věznů".
- **Opening hours:** Po–Pá 9:00–15:00, So–Ne zavřeno
- **Company IDs:**
  - IČO 24187267
  - DIČ CZ24187267
  - "zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 186818"
- **Main navigation:** Obchod, Káva, Čaj, Doprava a platba, Kontakt, plus two icon buttons: search ("Hledat") and cart ("Košík").
- **Footer navigation:**
  - **Obchod:** Káva, Čaj, Doplňky, Péče o kávovar
  - **Informace:** Doprava a platba, Obchodní podmínky, Ochrana osobních údajů, Kontakt
- **Do not revert to old-site content:**
  - No logo PNGs.
  - No "Green tea passion".
  - No "Sklízení" step; production calls it "Původ".
  - No `mailto:…@espirella.cz`.
  - The old site's confusing `tel:+420725808007` link is gone.

## 6. Production homepage map

### 6.0 Global (copy values verbatim from `base.css`)
- **Colours (light mode):**

  | Token | Value |
  |---|---|
  | bg | #faf6f0 |
  | surface | #fff |
  | surface-alt | #f2eadf |
  | text | #2f2118 |
  | text-muted | #6e5a4b |
  | primary | #443226 (hover #2f2118) |
  | link / focus | #1f5f66 |
  | accent | #96501c |
  | teal | #7ebec5 |
  | teal-subtle | #dceeef |
  | border | #e3d7c7 |
  | border-strong | #8c7766 |
  | tint-kava | #ebd9c3 |
  | tint-caj | #dde7d3 |
  | tint-doplnky | #f3dccb |
  | tint-pece | #dceeef |
  | tile-frame | #2f21188c |
  | blend-royal-gold | #b8892b |
  | blend-gourmet | #8a3b2e |
  | blend-columbia | #3f6b47 |
  | blend-brasil | #2f6475 |
  | blend-dekaf | #6a5a8c |

- **`.scope-espresso` (dark band, used by B2B and the footer):**
  - Background #2f2118, text #f3ebe1, muted #bba999, accent #e0a46b, link #8fd0d6.
  - The primary button on this band is #e8c9a0 with #1a130e text.
- **`.scope-teal`:** background #dceeef.
- **Dark mode:** production also ships a `prefers-color-scheme: dark` token block. Carry it over verbatim so the preview matches production on dark-mode devices. The reference screenshots are light mode.
- **Fonts:** self-hosted woff2, `font-display: swap`, latin + latin-ext subsets. Put them in `preview/espirella/assets/fonts/`.
  - **"Fraunces Variable" (wght 100–900):** headings and wordmark.
  - **"Instrument Sans Variable" (wght 400–700):** body and UI.
  - **Fallback faces:** copy the `Fraunces Fallback` (Georgia) and `Instrument Sans Fallback` (Arial) `@font-face` metric overrides.
  - **Obtaining the files:** take them from `@fontsource-variable/fraunces` and `@fontsource-variable/instrument-sans`. The equivalent built files exist on production under `/_astro/`, but the preview must never reference that URL.
  - **Cleanup:** the current preview's Open Sans files, static Fraunces files and logo PNGs are no longer used and can be removed.
- **Type:**

  | Element | Size | Notes |
  |---|---|---|
  | h1 (hero) | clamp(2.5rem, 1.8rem + 3vw, 4.5rem) = 40px at 375, 72px at 1440 | weight 540, letter-spacing -.025em |
  | h2 | clamp(1.875rem, 1.53rem + 1.47vw, 2.75rem) = 44px at 1440 | weight 560 |
  | h3 | clamp(1.25rem, …, 1.5rem) | weight 600 |
  | body | clamp(1rem, .96rem + .19vw, 1.0625rem) | line-height 1.6 |
  | .lead | clamp(1.125rem, …, 1.3125rem) | muted, max 60ch |

  - h1–h4 use Fraunces with `text-wrap: balance`.
- **Layout:**
  - `.container--wide` = `min(100% - 2*gutter, 82.5rem)`, which is 1320px at 1440.
  - Gutter: `clamp(1rem, .5rem + 2.2vw, 2.5rem)`.
  - Section padding-block: `clamp(3.5rem, 2.27rem + 5.26vw, 7rem)`.
  - Grid gap: `clamp(.75rem, .45rem + 1.3vw, 1.5rem)`.
  - Breakpoints: 768, 1024 and 1280px.
- **Shared patterns:**
  - **`.eyebrow`:** 12px, weight 600, uppercase, .12em tracking, accent colour, preceded by a 24×1.5px line. The source text is in sentence case; CSS does the uppercasing.
  - **`.btn`:** pill-shaped, weight 600.
    - Heights: 48px default, 56px for `--lg` (padding 2rem, font 1.0625rem), 44px for `--sm`.
    - `--primary`: filled primary colour.
    - `--secondary`: transparent with a 2px inset ring in the primary colour; hover fills it with surface-alt.
    - `--ghost`: underlined text.
    - `:active` moves the button down 1px.
  - **`.badge`:** 24px pill in surface-alt, 12px, weight 600.
- **Icons:** an inline SVG `<symbol>` sprite at the top of `<body>`.
  - Style: stroke icons, `fill:none; stroke:currentColor; stroke-width:1.75px`, round caps and joins.
  - Sizes: 16, 20 or 24px.
  - Symbols used on the homepage: search, bag, menu, close, chevron-right, phone, camera, bean, leaf, cube, drop, arrow-right, check, clock, store, package, external. Copy their paths from `index.html`.
- **Copy rules:**
  - Keep the 9 `&nbsp;` (U+00A0) exactly where they are: "80 % arabika", "20 % robusta", every "191 Kč" and "202 Kč", "výběr z vysokohorských", "oříšky a smetana".
  - Use en dash "–" in ranges and titles, and "·" (U+00B7) as the separator.
  - "100% arabika" has no space.
- **Accessibility markup to keep:**
  - Skip link `#obsah` "Přeskočit na obsah". `<main id="obsah" tabindex="-1">`.
  - Section `aria-labelledby` ids: `hero-title`, `nase-kava`, `od-zrna-k-salku`, `co-u-nas-najdete`, `b2b-title`, `tasting-title`, `kde-nas-najdete`. Keep these Czech ids in EN and DE too.
  - All media slots have `aria-hidden="true"`.
  - Visually hidden texts: ": Royal Gold" etc. after "Mletá verze", and " (otevře se v novém okně)" on the Mapy.cz links.
  - The intensity row has `role="img"` with `aria-label="Intenzita 8 z 10"`.

### 6.1 Sections in order

**Header** `header.site-header`
- **Behaviour:** sticky (`position:sticky; top:0`), white background, 1px #e3d7c7 bottom border.
- **Height:** 4rem (64px), and 4.75rem (76px) at ≥1024px.
- **375px:**
  - Wordmark on the left.
  - On the right: search icon button, bag icon button with a "0" badge, and the "Menu" pill button (hamburger icon + "Menu", 1.5px #8c7766 border).
  - At ≤374px the "Menu" label is visually hidden.
- **1440px:**
  - Wordmark on the left.
  - `nav.site-nav` (aria-label "Hlavní navigace") in the middle: Obchod · Káva · Čaj · Doprava a platba · Kontakt. Weight 500, 32px gap. On hover, an accent-coloured underline appears with an 8px offset.
  - Search and bag on the right.
  - No Menu button at ≥1024px.

**§1 Hero** `section.hero.scope-teal`
- **Copy:**
  - Stamp: `Praženo v České republice`. A pill with a 1.5px accent border, 12px bold text, uppercase, .14em tracking and a 6px accent dot.
  - H1: `Čerstvě pražená káva pro vaše espresso`
  - Lead: `Pět káv espirella – od sametové Royal Gold po bezkofeinový Dekaf. Zrnkové i mleté, k tomu čaje, doplňky a vše pro péči o kávovar.`
  - Buttons: `Vybrat kávu` (primary lg) and `Domluvit ochutnávku` (secondary lg).
- **375px:** one column.
  - Stamp, H1 (3 lines), lead.
  - Both buttons stacked at full width (≤479px).
  - Then the 4:3 media slot.
- **1440px:**
  - A 12-column grid: text spans columns 1–6, media spans columns 7–12.
  - The media slot is 5:4, about 648×518px.
  - The buttons sit inline.
  - Padding-top is 4rem (at ≥768px).

**§2 Naše káva** `section.section` on the page background
- **Copy:**
  - Centered heading: eyebrow `Naše káva`, H2 `Pět chutí espirella`.
  - Lead: `Všechny naše kávy pražíme pro přípravu espressa. Zrnkovou si vyberte do automatického kávovaru, mletou do pákového.`
- **Five `article.blend-card`:**
  - **Background:** tint-kava.
  - **Top border:** 6px in the blend colour.
  - **Inset frame:** a 3px double border at 8px inset, which darkens on hover.
  - **Top row:** "espirella" (Fraunces 14px, muted) and a bean glyph.
  - **H3 name:** a link whose `::after` covers the whole card.
  - **Notes:** 14px.
  - **Intensity row:** "INTENZITA" label, 10 dots of 8px (filled dots in accent), then "n/10".
  - **Foot:** the price (bold, text-lg; "od " is regular weight and muted) and a ghost sm button `Mletá verze`.

  | Card | Notes (verbatim) | Intensity | Price |
  |---|---|---|---|
  | Royal Gold | 80 % arabika, 20 % robusta · ovocné aroma, sametová crema | 8/10 | od 191 Kč |
  | Gourmet | 100% arabika · výběr z vysokohorských plantáží | 8/10 | 202 Kč |
  | Columbia | 100% arabika Colombia Excelso · oříšky a smetana | 8/10 | 202 Kč |
  | Brasil | 100% arabika Brasil Santos · čokoláda, nízká kyselost | 7/10 | 191 Kč |
  | Dekaf | Bezkofeinová 100% arabika · jemně ovocná | 7/10 | 202 Kč |

- **Section button:** centered `Celá nabídka kávy` (secondary lg).
- **Grid by width:**

  | Width | Columns |
  |---|---|
  | 375px | 1 |
  | ≥768px | 2; the last card spans both |
  | ≥1024px | 6-column grid: 3 cards on the first row, 2 wider cards on the second |
  | ≥1280px (and 1440px) | 5 in one row |

  - At 1280–1439px, card padding-inline drops to 1rem.

**§3 Od zrna k šálku** `section.section.section--alt` with background #f2eadf
- **Copy:** left-aligned H2 `Od zrna k šálku`. No eyebrow.
- **Steps:** `ol.process`, 3 steps. Each step has a 4:3 media slot, then the number (Fraunces 500, text-3xl, accent) and an H3 on one baseline, then text (max 38ch).

  | Step | Title | Text (verbatim) |
  |---|---|---|
  | 01 | Původ | Naše káva pochází z několika pěstitelských oblastí, například z Brazílie a Kolumbie. Zrna jsou ručně vybíraná, aby se do pražírny dostala jen ta nejlepší. |
  | 02 | Pražení | Kávu odebíráme od menších nezávislých pěstitelů, kteří o své plantáže pečlivě pečují. Pražíme ji středně, aby vynikla její přirozená chuť, a teprve potom ji balíme. |
  | 03 | Příprava | Posledním krokem k dokonalému šálku je příprava. Naše kávy jsou stavěné na espresso, ale skvěle chutnají i z french pressu – zkuste to. |

- **Layout:** stacked at 375px. 3 columns at ≥768px (1440px: 3 × 413px).

**§4 Co u nás najdete** `section.section`
- **Copy:** H2 `Co u nás najdete`.
- **Tiles:** 4 `a.category-tile`, each a single link.
  - White card, 1px border, 12px radius.
  - Media slot on top.
  - Body: H3 with an arrow-right icon, 14px muted text, and a badge.

  | Tile | Text (verbatim) | Badge |
  |---|---|---|
  | Káva | Zrnková i mletá, pražená v Česku | 10 produktů |
  | Čaj | TeaToGo, Don Vitto, Magic Fresh Fruit a Matcha | 26 produktů |
  | Doplňky | Cukr, horká čokoláda a kelímky | 8 produktů |
  | Péče o kávovar | Pro JURA, SAECO i pákové kávovary | 9 produktů |

- **Layout:** a 2×2 grid at 375px (square media). 4 columns at ≥768px (4:5 media at ≥1024px; 1440px: 4 × 312px).

**§5 Pro firmy** `section.b2b.scope-espresso#pro-firmy` (dark band)
- **Copy:**
  - Eyebrow: `Pro kanceláře a kavárny`
  - H2: `Vše pro firemní kávu na jednom místě`
  - Lead: `Kávu, čaje, porcovaný cukr, horkou čokoládu, kelímky s víčky i čisticí prostředky pro kávovary vám dodáme v jedné objednávce. Nakupujte na firmu s IČO a DIČ, nebo nám napište a připravíme nabídku pro pravidelný odběr.`
  - Facts (check icon in accent, 14px, muted): `Nákup na IČO a DIČ`, `Jedna objednávka`, `Pravidelný odběr`
  - Button: `Poptat firemní odběr` (primary lg, which is the light #e8c9a0 button on this band).
- **375px:** text first, then a 3:2 media slot.
- **1440px:** 2 columns with a 64px gap: text on the left, a 4:3 media slot on the right.

**§6 Ochutnávka** `section.tasting.scope-teal`
- **Copy:**
  - Eyebrow: `Ochutnávka`
  - H2: `Ochutnávka kávy? Žádný problém.`
  - Lead: `Chcete si naše kávy nejdřív vyzkoušet? Domluvte si termín a rádi vám připravíme šálek espirella a pomůžeme vybrat tu pravou.`
  - Button: `Domluvit ochutnávku` (primary lg).
- **Layout:** the media slot comes first at both widths.
  - 375px: stacked.
  - 1440px: 2 columns, media on the left, text on the right.
  - The slot is 3:2.

**§7 Kde nás najdete** `section.store-info` on the page background
- **Copy:** H2 `Kde nás najdete`.
- **Blocks:** four. Each has a 40px icon circle (teal-subtle background, #1f5f66 icon) and an H3.
  1. **`Otevírací doba`** (clock icon): `dl.hours` with `Po–Pá` → **9:00–15:00** and `So–Ne` → **zavřeno**.
  2. **`Sídlo společnosti`** (store icon): `Espirella s.r.o.` / `Kaprova 42/14, 110 00 Praha 1` / `IČO 24187267`
  3. **`Sklad`** (package icon): `Politických vězňů 1233/40, budova E, 251 01 Říčany`, then the link `Otevřít v Mapy.cz` with an external-link icon.
  4. **`Kontakt`** (phone icon): the links `+420 608 311 088` and `info@espirella.com` in text-lg, weight 600, link colour, underlined.
- **Layout:** 1 column at 375px, 2 at ≥768px, 4 at ≥1024px.

**Footer** `footer.site-footer.scope-espresso` (#2f2118 in light mode)
- **Column 1:** footer wordmark, tagline `Káva pražená v České republice` (muted), and a 48×1.5px accent rule.
- **Column 2:** `nav` with aria-label "Obchod". Heading `Obchod`. Links: Káva, Čaj, Doplňky, Péče o kávovar.
- **Column 3:** `nav` with aria-label "Informace". Heading `Informace`. Links: Doprava a platba, Obchodní podmínky, Ochrana osobních údajů, Kontakt.
- **Column 4:** heading `Kontakt`, then a `dl.info-dl`. Each entry has a 14px muted dt:

  | dt | dd |
  |---|---|
  | Otevírací doba | Po–Pá 9:00–15:00, So–Ne zavřeno |
  | Sídlo společnosti | Kaprova 42/14, 110 00 Praha 1 |
  | Sklad | Politických vězňů 1233/40, budova E, 251 01 Říčany, with the link `Otevřít v Mapy.cz` below |
  | Telefon | +420 608 311 088 |
  | E-mail | info@espirella.com |

- **Headings:** 12px, uppercase, .12em tracking, accent #e0a46b.
- **Link rows:** 44px tall.
- **Bottom row** (top border, 14px, muted):
  - `Espirella s.r.o. · IČO 24187267 · DIČ CZ24187267 · zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, oddíl C, vložka 186818`
  - `© 2026 Espirella s.r.o.`
- **Layout:**
  - 375px: one stacked column.
  - ≥768px: 2 columns.
  - ≥1024px: `4fr 2fr 3fr 3fr` (1440px: 408/204/306/306px).

### 6.2 Media placeholder slots (CSS art only, no images)
- **Structure** (copy as-is): `.media-slot[data-slot][data-motif]` with `style="--ratio:…; --ratio-lg:…"`. At ≥1024px the slot uses `--ratio-lg`.
- **Children:**
  - `.media-slot__art`
  - an optional centered `.media-slot__glyph`, sized `clamp(32px,22cqi,64px)`, muted
  - `.media-slot__frame`: a 3px double border inset `clamp(8px,3cqi,16px)`, radius 8px
  - `.media-slot__label`: a white pill with a camera icon, 12px, weight 600, #6e5a4b, placed bottom-left at `clamp(14px,5cqi,28px)`
- **Slot rules:**
  - Container queries: the label shrinks to 11px when the slot is ≤280px wide.
  - Radius: 16px; category slots use 12px top corners only.
  - When the parent link is hovered, the frame turns to the text colour.

| Slot | Label text (verbatim) | Ratio <1024 / ≥1024 | Background | Motif |
|---|---|---|---|---|
| hero-home | FOTO: hero – šálek espressa | 4/3 / 5/4 | espresso #2f2118, frame #f3ebe161 | `crema`: a top-view cup made of concentric radial rings (crema core #c98b4e, crema edge #96501c, cup #f3ebe1, faint saucer ring). Cup size 74% of the height. Centered; at ≥1024px moved to `left:54%`. |
| process-puvod | FOTO: původ – kávové plantáže | 4/3 | tint-caj | `contour`: repeating radial ellipses (topographic lines) centred at 22% 78% |
| process-prazeni | FOTO: pražení – čerstvě pražená zrna | 4/3 | tint-kava | `beans`: a staggered 28×22px grid of small oval "beans" over a bottom heat gradient |
| process-priprava | FOTO: příprava – espresso z kávovaru | 4/3 | tint-pece | `crema` cup at 64% size, with the saucer ring in tile-line-strong |
| category-kava | FOTO: kategorie – káva | 1/1 / 4/5 | tint-kava | `rings`: concentric arcs from the top-right corner, plus a **bean** glyph |
| category-caj | FOTO: kategorie – čaj | 1/1 / 4/5 | tint-caj | `veins`: 60° diagonal lines, plus a **leaf** glyph |
| category-doplnky | FOTO: kategorie – doplňky | 1/1 / 4/5 | tint-doplnky | `dots`: a 14px dot grid, plus a **cube** glyph |
| category-pece | FOTO: kategorie – péče o kávovar | 1/1 / 4/5 | tint-pece | `lines`: horizontal lines every 8px, plus a **drop** glyph |
| b2b | FOTO: firemní káva – kancelář | 3/2 / 4/3 | tint-kava | `grid` (24px squares) with 6 crema cups in a 3×2 grid (cups 16% × 21.33% at ≥1024px) |
| tasting | FOTO: ochutnávka – šálky espirella | 3/2 / 3/2 | tint-kava | `cups`: three cups in a row at 14%, 50% and 86% (light crema, dark crema, primary-brown centre) above a teal #7ebec5 band at 72% height |

### 6.3 Interactive behaviour
- **Header:** sticky at all widths. `html` has `scroll-padding-top` = header height + 1rem, and `[id]` has `scroll-margin-top`. Scrolling is smooth unless `prefers-reduced-motion` is set.
- **Mobile menu (<1024px).** Port the inline `<mobile-nav>` custom-element script from the source as-is; it is self-contained.
  - **Menu button:** `button.menu-btn`, `aria-expanded`, `aria-controls="mobile-nav-panel"`. When expanded it fills with the primary colour and swaps the hamburger icon for the close icon.
  - **Panel:**
    - `role="dialog" aria-modal="true" aria-label="Hlavní menu"`, initially `hidden`.
    - Fixed to the right edge at full height; width `min(88vw, 22.5rem)`, which is 330px at 375.
    - White, shadow-3, 1rem padding.
    - Slides in from `translate:100%`: 0.28s ease-out when opening, 0.2s ease-in when closing.
  - **Backdrop:** #1f150f8f, fades in.
  - **Panel contents, top to bottom:**
    1. A row with the wordmark and a 44px round close button (`aria-label="Zavřít menu"`).
    2. Navigation (`aria-label="Mobilní navigace"`): Obchod, Káva, Čaj, Doprava a platba, Kontakt. Rows are 56px tall, Fraunces text-xl, weight 600, with a bottom border and a muted chevron-right icon.
    3. Pushed to the bottom: a block secondary lg button with a phone icon, `+420 608 311 088` → `tel:+420608311088`.
  - **Behaviour (verified on production):**
    - On open: `html.nav-open { overflow:hidden }` locks scrolling, and focus moves to the close button.
    - Tab is trapped inside the panel.
    - Esc, the close button or a backdrop click closes the panel and returns focus to the Menu button.
    - The panel auto-closes when the viewport reaches ≥1024px.
- **Cart:** the bag icon links to the cart page with `aria-label="Košík, 0 položek"`. Its `.cart-badge` is a static "0" with `data-filled="false"` (surface-alt background, muted text). Do NOT port `CartCount`, `Toast`, `<toast-region>` or the `bump` animation; they depend on modules that do not exist in the preview.
- **Hover effects to keep (only inside `@media (hover:hover)`):**
  - Blend card: lifts 2px with shadow-2, the frame darkens and the name underlines.
  - Category tile: lifts 2px with shadow-2, the arrow moves 4px and the slot frame darkens.
  - Buttons:
    - Primary darkens.
    - Secondary fills with surface-alt.
    - Ghost thickens its underline.
  - Icon buttons get a surface-alt circle.
  - Nav links get an accent underline.
  - Footer links get an underline.
  - Wordmark "coffee" changes colour.
- **Reduced motion:** all transitions are cut to 0.01ms under `prefers-reduced-motion: reduce`. There is no other animation.

### 6.4 Link table

The **CS root** column applies at the site root. In `en/` and `de/`, use the same mapping inside that folder (`index.html` and `beyond-preview.html` in the same folder; shared files via `../`).

| Production `href` | Where it appears | Preview `href` (CS root) |
|---|---|---|
| `#obsah` | skip link | `#obsah` (keep) |
| `/` | wordmark in header, mobile panel and footer | `index.html` |
| `/obchod/` | nav "Obchod" | `beyond-preview.html` |
| `/product-category/kava/` | nav "Káva", hero "Vybrat kávu", "Celá nabídka kávy", tile "Káva", footer "Káva" | `beyond-preview.html` |
| `/product-category/caj/` | nav, tile, footer "Čaj" | `beyond-preview.html` |
| `/product-category/doplnkovy-sortiment/` | tile and footer "Doplňky" | `beyond-preview.html` |
| `/product-category/cistici-chemie/` | tile and footer "Péče o kávovar" | `beyond-preview.html` |
| `/doprava-a-platba/` | nav and footer | `beyond-preview.html` |
| `/kontakt/` | nav and footer "Kontakt" | `beyond-preview.html` |
| `/obchod/#hledat` | search icon | `beyond-preview.html` |
| `/kosik/` | cart icon | `beyond-preview.html` |
| `/kontakt/?tema=ochutnavka#formular` | hero and tasting "Domluvit ochutnávku" | `beyond-preview.html` |
| `/kontakt/?tema=firmy#formular` | "Poptat firemní odběr" | `beyond-preview.html` |
| `/obchod/espirella-{royal-gold,gourmet,columbia,brasil,dekaf}-zrno/` (5) | blend card names | `beyond-preview.html` |
| `/obchod/espirella-{royal-gold,gourmet,columbia,brasil,dekaf}-mleta/` (5) | "Mletá verze" | `beyond-preview.html` |
| `/obchodni-podminky/`, `/ochrana-osobnich-udaju/` | footer | `beyond-preview.html` |
| `tel:+420608311088` | mobile panel, store info, footer | keep as-is |
| `mailto:info@espirella.com` | store info, footer | keep as-is |
| `https://mapy.cz/zakladni?q=Politick%C3%BDch%20v%C4%9Bz%C5%88%C5%AF%201233%2F40%2C%20budova%20E%2C%20251%2001%20%C5%98%C3%AD%C4%8Dany` | Sklad block, footer | keep as-is, with `target="_blank" rel="noopener noreferrer"` |
| `/favicon.svg` (`<link rel=icon>`) | head | `favicon.svg` (`../favicon.svg` in en/ and de/) |

### 6.5 Forbidden and not carried over
- **No link to the production or old domain:** no `href`, `src`, `content` or text URL may contain `espirellaproduction.netlify.app` or `espirella.com` (with or without `www.`, any scheme or `//`).
  - **Only exception:** `mailto:info@espirella.com` and the visible text "info@espirella.com".
- **Drop these production head items:**
  - `<link rel="canonical" href="https://www.espirella.com/">`
  - `og:url`
  - The JSON-LD `Store` block. Omit it entirely; if kept, it must have no `url`.
  - The Netlify HTML comment in `<head>`.
  - `<meta name="generator" content="Astro …">`
  - Every `/_astro/…` path.
  - The `CartCount` and `Toast` module scripts.
  - The trailing `<script src="/.netlify/scripts/hud…">`, which is the "Powered by Netlify" badge.
- **Keep these head items:**
  - The title and meta description (5).
  - `og:site_name` "Espirella", `og:locale` (cs_CZ, en_GB, de_DE), `og:type` "website", `og:title` and `og:description`.
  - The `twitter:card` "summary", title and description.
- **Check:** after the build, run `grep -rniE "espirellaproduction|netlify|_astro|//(www\.)?espirella\.com" preview/espirella`. It must return nothing.

### 6.6 Preview-only additions
- **Robots:** add `<meta name="robots" content="noindex, nofollow">` to every page, as the current preview does.
- **hreflang:** add relative `hreflang` alternates for cs, en and de.
- **Language switcher (CS / EN / DE)**, in the production style:
  - Small pill links: Instrument Sans 600, 14px, 44px tap targets. The current language is filled with the primary colour and has `aria-current="true"`.
  - Each link has `lang` and `hreflang`. The group is `nav` with `aria-label` "Jazyk", "Language" or "Sprache".
  - **≥1024px:** in `.site-header__actions`, before the search icon.
  - **<1024px:** inside the mobile panel, between the nav list and the phone button. The 375px header has no room for it.
  - **Links:** from the root: `index.html`, `en/index.html`, `de/index.html`. From `en/` and `de/`: `../index.html`, `../en/index.html`, `../de/index.html`.
- **`beyond-preview.html`** (in the root, `en/` and `de/`):
  - Rebuild it with the production header, mobile menu and footer.
  - Keep its existing message: "Tato stránka není součástí ukázky" and the mailto/tel fallback.
  - Update its contact facts to the production wording in §5.
