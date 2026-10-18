# Review log – espirella preview

Local URL: http://127.0.0.1:4173/

## Round 1

**Verdict: REVISE**

| Criterion | Score |
|---|---|
| Hierarchy | 8 |
| Typography | 8 |
| Spacing and rhythm | 7 |
| Color | 8 |
| Motion | 8 |
| Originality | 7 |
| Polish | 7 |

**Critic fixes (in order)**
1. `.hero__text` at ≥1024px: text starts at x=40 while logo and sections start at x=120. Align via `padding-inline-start: max(var(--gutter), calc((100vw - var(--container)) / 2))`. `.hero__lead` max-width to `44ch`; write "e‑shopu" with a non-breaking hyphen (U+2011).
2. `.card` at ≥560px: price and "Vybrat →" rows sit at different heights. Make card and body flex columns; price `margin-top:auto` with `padding-top:var(--space-3)`.
3. `.card__media.slot` under 560px: stretches to 112×199 instead of 112×112. Fix size, `align-self:start`, body padding `--space-4`. Hide or move hero chips under 560px so the first product lands within about one scroll.
4. `.step__num`: muted colour; use `var(--color-primary)`.
5. `.tasting .slot` (`ochutnavka.webp`): flat empty box. Give it the product-placeholder treatment (gradient or centred "ll" mark), keep 3:2 and `--radius-md`, add `1px solid var(--color-border)`.

**Critic's departures from the brief, and director decisions**
- Email/phone links now match the displayed text (info@espirella.com, +420 608 311 088). *Kept on purpose: the builder was told to match links to their text. Flagged for owner confirmation in PITCH.md.*
- Legal PDF links point to live espirella.com paths. *Checked: both return 404. Sent to builder to restore the web.archive.org copies used on the live site.*
- "© 2023 All rights reserved" missing. *Not restored: an outdated year undermines trust. Left for owner in PITCH.md.*
- Page title differs from the live one. *Kept: the new title describes the offer better.*
- Search box missing. *Not added: the static preview can't search; the shop has its own.*
- Header "Obchod" pill label 15px vs 16px in DESIGN.md. *Sent to builder.*

**Builder report (round 1 fixes)**
1. Hero alignment – **done.** `.hero` is an inline-size container; `.hero__text` uses `max(var(--gutter), calc((100cqw - var(--container)) / 2))` with a `100vw` fallback. Text now lines up with the logo. Lead is `44ch` with a non-breaking "e‑shopu".
2. Card rows – **done.** Flex-column cards and bodies, price `margin-top:auto`. Price and "Vybrat →" sit level across the row at 1440px and in the 2-column layout.
3. Mobile card media and path to products – **done.** Media is 112×112; hero chips hidden under 560px. First card top at y≈1021 at 375px. Hero not shortened further.
4. Step numbers – **done.** The colour was being overridden by `.step p`; the selector is now `.step .step__num` and renders #9C4A1A.
5. Tasting slot – **done.** Gradient from `--color-surface-alt` to new `--color-surface-deep` (#E8D9C6), 1px border, centred "ll" mark, label and `onerror` image kept.
6. Header "Obchod" label – **done.** 16px; header gaps and padding tightened at ≤420px so nothing overflows at 375px.
7. Legal PDFs – **done, with a deviation.** The live site's 2022 web.archive.org links now redirect to 404s. Replaced with the 2020-09-22 snapshots, which return 200 `application/pdf`. These are 2020 versions and may not match the owner's current terms.

Static check: all referenced files exist except the 6 ASSETS.md images (placeholders shown); no scripts, `fetch()`, `@import` or remote loads.

## Round 2

**Verdict: REVISE**

| Criterion | R1 | R2 |
|---|---|---|
| Hierarchy | 8 | 8 |
| Typography | 8 | 8 |
| Spacing and rhythm | 7 | 7 |
| Color | 8 | 8 |
| Motion | 8 | 8 |
| Originality | 7 | 7 |
| Polish | 7 | 8 |

All round 1 fixes confirmed on screen. Director decisions from round 1 not re-raised.

**Critic fixes (in order)**
1. Products → steps gap: doubled section padding leaves ~243px of empty cream at 1440 (~128px at 375). `.section + .section--steps { padding-top: var(--space-8) }` at ≥768px, `var(--space-7)` below; keep the hairline.
2. Card titles: "… – / zrno" orphans. Bind the dash with `&nbsp;–&nbsp;` (visible text unchanged) and add `text-wrap: balance`.
3. Tasting H2 at 1440 orphans "problém". Force a break after "?" (span `display:block` or `white-space:nowrap` on "Žádný problém"); `text-wrap: balance` on `h1, h2`.
4. Steps section at ≥768px reads as three plain columns. Add a continuous 1px `--color-border-strong` line across the grid at the level of the 48px rules (timeline), `.step` max-width 40ch, top-aligned. Mobile unchanged.
5. Mobile: put price and "Vybrat →" on one row in horizontal cards (<560px). Header under 380px: nav gap `var(--space-3)`, pill inline padding `var(--space-4)`, pill `min-height: 48px`.

**Builder report (round 2 fixes)**
1. Products → steps gap – **done.** 186.6px at 1440, 113px at 375. Needed one extra rule beyond the spec: under 768px the products section's bottom padding is reduced to `--space-8` (`.section:has(+ .section--steps)`); tasting band and footer untouched.
2. Card titles – **done.** Dashes bound with `&nbsp;`, `text-wrap: balance`. No orphaned "zrno" at 1440 or 375.
3. Tasting H2 – **done.** "Žádný problém" is a block span; always breaks after "?". `h1, h2` balanced.
4. Steps timeline – **done.** At ≥768px a 1px `--color-border-strong` line runs across the grid with the 48px rules on it; columns top-aligned, `.step` 40ch. Mobile unchanged.
5. Mobile cards and header – **partial.** Price and "Vybrat →" share one row on Brasil, Columbia and Green tea (cards ~175px, down from ~201). Royal Gold's "191 Kč – 359 Kč" is too wide, so its cue still wraps (197px). Header under 380px: gap `--space-3`, pill padding `--space-4`, pill 48px tall; logo steps down to 88/76/64px under 380/360/340px. No overflow at 320–375.

Static check: passed (only the 6 ASSETS.md images missing, as intended).

## Final check

**Verdict: REVISE** (Originality 7; all other criteria 8)

| Criterion | R1 | R2 | Final |
|---|---|---|---|
| Hierarchy | 8 | 8 | 8 |
| Typography | 8 | 8 | 8 |
| Spacing and rhythm | 7 | 7 | 8 |
| Color | 8 | 8 | 8 |
| Motion | 8 | 8 | 8 |
| Originality | 7 | 7 | 7 |
| Polish | 7 | 8 | 8 |

Round 2 fixes confirmed on screen; Royal Gold card at 375 still partial. Placeholders read as intentional, none look broken.

**Unresolved (not sent to the builder; carried to PITCH.md)**
1. Originality: no signature element yet. Re-check once the generated images are in; a strong hero photo may lift it to 8.
2. Royal Gold card at 375: "191 Kč – 359 Kč" pushes "Vybrat →" to its own line (197px vs 174px). Smaller price size, or "od 191 Kč" wording (owner to confirm).
3. Product cards at 1440: uneven title wrapping; Green tea has no meta line, leaving empty space above its price.
4. Steps at 1440: 02 and 03 descriptions are one short line each. Content limit; ask the owner for more detail.
5. Header at 375: "Košík" and "Kontakt" only 12px apart. Minor.

---

# Update: links and beyond-preview page

The /preview command was updated: no link may lead to the prospect's old website, and every link to another page of the site goes to a new `beyond-preview.html`. Only the links and that page were changed; the homepage design was not redone.

**Builder report (links update)**
- Links – **done.** Košík, Obchod, both hero CTAs, the products "Do obchodu", the tasting CTA, the 4 product cards and both legal links → `beyond-preview.html`. Header "Kontakt" → `#kontakt` on the footer's "Sídlo společnosti" column. Logo and "Hlavní stránka" → `index.html`. `mailto:`/`tel:` unchanged. No canonical/og:url/og:image existed.
- `beyond-preview.html` – **done.** Same CSS, fonts, header and footer; `noindex, nofollow`; H1 "Tato stránka není součástí ukázky", short Czech explanation, primary "Zpět na ukázku" → `index.html`; nav "Kontakt" → `index.html#kontakt`.
- Check – **passed.** The only `espirella.c…` match in either HTML file is `mailto:info@espirella.com`. All referenced files exist except the 6 ASSETS.md images.

## Update round 1

**Verdict: REVISE** (Originality 7, carried unresolved item; nothing blocking)

| Criterion | Final | Update 1 |
|---|---|---|
| Hierarchy | 8 | 8 |
| Typography | 8 | 8 |
| Spacing and rhythm | 8 | 8 |
| Color | 8 | 8 |
| Motion | 8 | 8 |
| Originality | 7 | 7 |
| Polish | 8 | 8 |

`beyond-preview.html`: about 7 — consistent and well made, but plain and a dead end.

**Link scan:** no `href`, `src`, `srcset` or meta `content` on either page points to espirella.com/.cz (only the allowed mailto). Clicked Košík, Obchod, both "Do obchodu", a product card, both "Domluvit ochutnávku", a legal link → all open `beyond-preview.html`; "Zpět na ukázku" returns home; "Kontakt" lands on the contact details from both pages.

**Critic fixes (in order)**
1. 375px Kontakt jump: only the tail of the footer "ll" mark shows under the header. Move `id="kontakt"` to `.site-footer__grid`, `scroll-margin-top` = header height + `--space-5`.
2. `beyond-preview.html`: no next step for visitors who came to order or book. Add a line with the footer's email/phone as text links, plus a secondary "Kontakt" button → `index.html#kontakt`.
3. `beyond-preview.html` at 1440: text floats in a mostly empty band. Add a visual anchor at ≥1024px (large "ll" mark or placeholder-style panel), or drop the forced viewport height.
4. `beyond-preview.html` copy: "Ukázka" three times. Eyebrow → "Designový koncept".
5. (Minor, optional) Mark "Obchod" as current on `beyond-preview.html`.

**Builder report (update round 1 fixes)**
1. Kontakt jump – **done.** `id="kontakt"` moved to `.site-footer__grid` on both pages; `scroll-margin-top: calc(var(--header-h) + var(--space-5))`.
2. Next step on `beyond-preview.html` – **done.** Contact line with `mailto:`/`tel:` text links; `.btn-row` with primary "Zpět na ukázku" and outline "Kontakt" → `index.html#kontakt`; full width under 560px.
3. Composition at ≥1024px – **done.** Two-column grid with a `slot slot--sand` panel and a 160px "ll" mark; band now `padding-block: var(--section-pad)` with `min-height: 480px`. Mobile unchanged.
4. Eyebrow – **done.** "Designový koncept".
5. Current page – **done** (semantic only): `aria-current="page"` on "Obchod"; the pill looks unchanged.

Check: only `mailto:`/visible email text match `espirella.c…`; nothing remote; all files exist except the 6 ASSETS.md images.

## Update final check

**Verdict: REVISE** (Originality 7, carried; links clean)

| Criterion | Final | Update 1 | Update final |
|---|---|---|---|
| Hierarchy | 8 | 8 | 8 |
| Typography | 8 | 8 | 8 |
| Spacing and rhythm | 8 | 8 | 8 |
| Color | 8 | 8 | 8 |
| Motion | 8 | 8 | 8 |
| Originality | 7 | 7 | 7 |
| Polish | 8 | 8 | 8 |

`beyond-preview.html`: 6, only because of the pill regression below; the critic puts it at 8 once that is fixed. The two-column layout with the sand "ll" panel, the contact line and the two buttons give visitors a real next step.

**Links:** no link on either page points to espirella.com/.cz (only the allowed `mailto:`). Header "Obchod" → `beyond-preview.html`; "Zpět na ukázku" → `index.html`; "Kontakt" button → `index.html#kontakt`. The Kontakt jump at 375 now shows the full footer mark and "Sídlo společnosti" together.

**Regression fixed after the check (director exception).** On `beyond-preview.html` the header "Obchod" pill label was invisible: `.nav a[aria-current="page"]` set its text to the pill's own accent colour. Because this update introduced it, the builder removed `aria-current` from the pill. The markup is now identical to the homepage pill, which renders correctly. It has not been re-screenshotted.

**Unresolved (carried to PITCH.md):** Originality 7 (waiting on images); Royal Gold "Vybrat →" wrap at 375; uneven card titles and Green tea's empty meta at 1440; one-line steps 02/03 (owner content); 12px gap between Košík and Kontakt at 375.
