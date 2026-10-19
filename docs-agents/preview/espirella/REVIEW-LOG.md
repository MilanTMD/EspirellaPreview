# REVIEW LOG – espirella preview (static copy of the production homepage)

Source: https://espirellaproduction.netlify.app/ · Local server: http://127.0.0.1:4173/

## Round 1

**Verdict: REVISE**

| Hierarchy | Typography | Spacing | Color | Motion | Originality | Polish |
|---|---|---|---|---|---|---|
| 9 | 9 | 9 | 9 | 8 | 8 | 7 |

Fidelity: section-by-section match with production at 375 and 1440 (copy, layout, CSS-art placeholders, colour). The only differences are side effects of the intended additions: the nav sits about 74px further left at 1440 because of the language switcher, and the page is 48–68px taller because of the footer note. Links: nothing points to `espirellaproduction.netlify.app` or `espirella.com`; the only match is the allowed `mailto:info@espirella.com`. Switcher (CS↔EN↔DE, homepage and beyond pages, 1440 and in the 375 menu), German header at 1024, and the beyond-preview round trip all pass.

Note: the after-screenshots were taken after scrolling to the bottom, so the sticky header appears partway down both images (a screenshot artefact, not a site bug).

**Fixes (critic's order)**
1. `js/site.js`: the mobile menu stays open (and scrolling stays locked) after tapping an in-page link ("Kontakt" → `#kde-nas-najdete`). Close the panel on clicks on `a[href^="#"]` inside it.
2. Favicon: move from `assets/favicon.svg` to the preview root and link it as `favicon.svg` / `../favicon.svg`.
3. `de/index.html`, tasting lead: "…den passenden auszuwählen." → "…den passenden Kaffee auszuwählen."
4. (Optional) Footer note on the CS and DE pages: put the page's own language first and English second.

**Builder report (round 1 fixes)**
1. Done – `js/site.js` closes the panel (`close(false)`) on same-page hash links (`#id` and same-page `index.html#id`). Verified at 375 in CS, EN and DE: the panel closes, the scroll lock is released and `#kde-nas-najdete` is in view.
2. Done – `favicon.svg` moved to the preview root, linked as `favicon.svg` / `../favicon.svg`; the old copy in `assets/` is deleted.
3. Done – DE tasting lead now ends "…den passenden Kaffee auszuwählen."
4. Done – the CS and DE footer notes show the page's own language first and English second; EN unchanged.

Static checks re-run: no `type="module"`, `@import`, `fetch(`, root-relative or protocol-relative URLs; `espirella.com` appears only as `mailto:info@espirella.com`; no `netlify`/`astro`. Only unresolved references are the 10 not-yet-generated `.webp` images (by design: `onerror` removes them).

## Round 2

**Verdict: APPROVED**

| Criterion | R1 | R2 |
|---|---|---|
| Hierarchy | 9 | 9 |
| Typography | 9 | 9 |
| Spacing and rhythm | 9 | 9 |
| Color | 9 | 9 |
| Motion | 8 | 9 |
| Originality | 8 | 8 |
| Polish | 7 | 9 |

All four round-1 fixes pass, with no regressions (switcher round trip, nav → `beyond-preview.html` → "Zpět na ukázku", menu close/Esc/backdrop/focus trap). Fidelity: section-by-section match with production at 375 and 1440; the only height differences come from the footer note (+68px at 375, +48px at 1440). Link audit on all six pages: no `espirellaproduction.netlify.app` or `espirella.com` links; the only matches are `mailto:info@espirella.com`, and the only outbound link is Mapy.cz. After-screenshots re-shot from the top (no sticky-header artefact).

**Deliberate deviation from production (keep):** the nav, mobile-menu and footer "Kontakt" links go to the homepage's `#kde-nas-najdete` section instead of production's `/kontakt/` page (which would map to `beyond-preview.html`), so the visitor stays on real content. Don't "fix" this back.

**Optional, non-blocking items (not sent to the builder; carried to PITCH.md)**
1. Generate the 10 `.webp` images from ASSETS.md (respect the safe zones; hero and category slots change ratio at 1024px).
2. CS footer note at 375: "web." wraps alone; use `ostrý&nbsp;web.` or `text-wrap: pretty` (check DE "Live-Website." too).
3. `js/site.js`: after Menu → Kontakt, focus ends on `BODY`; move it to `#kde-nas-najdete` (`tabindex="-1"`, `focus({preventScroll:true})`).
4. Beyond-page cup graphic has no frame/label and reads slightly unfinished; if changed, use production's crema motif colours (#c98b4e / #96501c).
