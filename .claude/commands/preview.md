---
description: Turn a prospect's live website into a client-ready homepage design concept (architect, designer, builder, critic).
argument-hint: <prospect-website-url>
---

You are the director of a multi-agent web development team. Your job is to orchestrate the subagents below; you do not write application code yourself. Only the builder edits the preview site.

Prospect site: $ARGUMENTS

If no URL was given, ask for one before doing anything else. If it has no scheme, prepend `https://`.

Run only the **architect**, **designer**, **builder**, and **critic**. Skip **reviewer**, **qa**, and **auditor** entirely. Run straight through without waiting for my approval, but stop and tell me why if:

- the architect, the designer, or the first builder run reports `STATUS: FAIL`, or
- the architect or critic can't use the Playwright browser tools. Don't let them fall back to scripts.

## Setup

- Derive a short slug from the domain: lowercase the hostname, drop a leading `www.` and the public suffix (`.cz`, `.com`, `.co.uk`, …), turn the remaining dots into hyphens, and keep only `a-z`, `0-9`, and `-`. Examples: `https://www.cafe-luna.cz` → `cafe-luna`, `https://shop.cafe-luna.cz` → `shop-cafe-luna`.
- Folders, relative to the project root (the current working directory):
  - **Working docs:** `docs-agents/preview/<slug>/` – BRIEF.md, DESIGN.md, ASSETS.md, REVIEW-LOG.md, PITCH.md, and `screenshots/`
  - **Output:** `preview/<slug>/` – the site
- Always give agents these folders as absolute paths. Below they are written `<docs-dir>` and `<out-dir>`.
- If either folder already exists, ask me whether to replace it (clear both folders first) or use `<slug>-2` before going further.
- Never create, modify, or delete any file outside these two folders. (The Playwright tool keeps its own scratch files in `.playwright-mcp/`; leave that folder as it is.)

## Agent prompts

Subagents start with no context, and their standing instructions are written for /elevate. Begin **every** agent prompt in this command with this block, filled in:

> This is a /preview run for <URL> (slug `<slug>`). For this run:
>
> - Working docs are in `<docs-dir>` and the site is in `<out-dir>`. These replace `/docs-agents/` and `/public/assets/` everywhere in your standing instructions. Ignore the files directly in the root `docs-agents/` folder; they are from a different job.
> - Create, edit, or delete files only inside those two folders, and only the ones your task calls for.
> - Where your task below differs from your standing instructions (file paths, document structure, build steps, screenshot location), follow the task. Keep your usual final report and status line.

## Step 1 – Brief

Run the **architect** with this task:

- There is no local codebase for this prospect. Skip the code inventory and the tech stack decision, and analyze the live site only.
- Open the homepage with the Playwright browser tools. At 375px wide and again at 1440px wide: resize the browser, scroll to the bottom so lazy-loaded images render, then take a full-page screenshot, passing `<docs-dir>/screenshots/before-<width>.png` as the filename. The tool doesn't return the image when it saves to a filename, so Read the saved PNGs to see them.
- Write `<docs-dir>/BRIEF.md`, at most one page, with only these sections:
  1. **Business** – what they do, where, and the language of the site.
  2. **Audience** – who visits and what they need.
  3. **Main goal** – the one action the homepage should drive (book, call, visit, order, …).
  4. **3 biggest design weaknesses** – most damaging first, each tied to what the screenshots show.
  5. **Key content to keep** – business name, logo (with its image URL), offer, contact details (phone, email, address, opening hours), the names of the site's main navigation items, and any other facts the new homepage must repeat accurately.

Confirm both before-screenshots exist in `docs-agents/preview/<slug>/screenshots/`. If they landed elsewhere, such as `.playwright-mcp/`, copy them there.

## Step 2 – Design

Run the **designer** with this task:

- Read BRIEF.md, and Read the before-screenshots to see the existing brand (logo colors and anything worth keeping).
- Write a compact `<docs-dir>/DESIGN.md` with only these sections:
  1. **Visual direction** – two or three sentences tied to the audience and main goal.
  2. **Type scale** – one or two open-licensed font families (e.g. from Google Fonts) that cover the site's language, with fallbacks, and a named scale with size, line height, and weight.
  3. **Color tokens** – named semantic tokens with hex values for a single theme (light unless the brand calls for dark), with the WCAG AA contrast ratio of each text/background pair.
  4. **Spacing** – base unit, named scale, section padding, and container width.
  5. **Buttons and cards** – exact styles, including hover and focus-visible states.
- Write `<docs-dir>/ASSETS.md` listing only the images the homepage needs. For each: file name (as it will live in `<out-dir>/assets/`), size and aspect ratio, placement, alt text, and a generation prompt.

## Step 3 – Build

Run the **builder** with this task:

- Build only the homepage: a hero, 2–3 key sections that serve the main goal in BRIEF.md, and a footer.
- Output a static, self-contained site in `<out-dir>`: `index.html`, `beyond-preview.html`, plus `css/` and `assets/` if needed. No framework, no build step, no package.json, and no dev server. It must work when `index.html` is opened straight from disk and when the folder is dropped onto any static host, so:
  - use relative paths only (no leading `/`), no `<script type="module">`, and no `fetch()` of local files;
  - load nothing from other servers: self-host web fonts as woff2 in `assets/fonts/` (for example downloaded from `@fontsource` on cdn.jsdelivr.net), including the latin-ext subset when the copy has accented characters, as Czech does.
- Reuse the business name, logo, and key facts from BRIEF.md, but rewrite all the copy, in the site's language. Don't invent facts, prices, reviews, or numbers.
- Download the logo from the URL in BRIEF.md into `assets/` and show it with an `<img>` tag (never paste SVG markup inline). If you can't get it, use a text wordmark of the business name.
- Don't copy the prospect's photos. Use CSS-generated visuals or clearly marked placeholders. Give each image in ASSETS.md a slot at its aspect ratio, with a styled placeholder background and a small visible label showing its file name, and put `<img src="assets/<file name>" alt="<alt text>" onerror="this.remove()">` on top. Dropping a generated image with that file name into `assets/` then shows it with no code change.
- **Links – the visitor must never leave the preview for the prospect's old website:**
  - Never link to the prospect's own domain or any of its subdomains, in any form (absolute URLs, `www.` or not, `http` or `https`).
  - Links to sections on the homepage use anchors (`#contact`). The logo and any "home" link point to `index.html`.
  - Every navigation item, button, or link that would lead to another page of the site (menu, about, booking, e-shop, gallery, blog, a subpage, …) points to `beyond-preview.html`. Keep the original navigation labels from BRIEF.md so the concept still feels complete.
  - External links that aren't the prospect's website are fine: `tel:`, `mailto:`, map links, and social media profiles. Give the map and social links `target="_blank" rel="noopener"`.
- **Create `beyond-preview.html`**, a simple page that uses the same CSS, fonts, header, and footer as `index.html`:
  - The `<title>` and a short heading, in the site's language, saying this part of the website is outside the scope of the preview. For a Czech site, for example: "Tato stránka není součástí ukázky".
  - One or two friendly sentences, in the site's language, explaining that this is a design concept of the homepage and the rest of the site would follow in the same style.
  - A clear primary button back to `index.html` (for a Czech site, for example "Zpět na ukázku"), styled as in DESIGN.md.
  - Header navigation links on this page follow the same rules: homepage sections point to `index.html#section`, other pages to `beyond-preview.html`.
  - The same `<meta name="robots" content="noindex, nofollow">` and footer note as `index.html`.
- Add `<meta name="robots" content="noindex, nofollow">` in the `<head>`.
- Add a small footer note: "Design concept for [business name], not a live site."
- Instead of the production build in your standing instructions, check that:
  - every file referenced from `index.html`, `beyond-preview.html`, and the CSS exists;
  - nothing loads from another server;
  - no `href` in either HTML file contains the prospect's domain (search both files for the domain name without `www.`). Fix any you find before reporting.

## Step 4 – Critic loop (max 2 rounds)

The Playwright browser blocks `file:` URLs, so serve `<out-dir>` locally. In the background, run `python -m http.server 4173 --bind 127.0.0.1 --directory "<out-dir>"`. Use another port if 4173 is taken, or `npx -y http-server "<out-dir>" -p 4173 -a 127.0.0.1` if Python is missing. Create `<docs-dir>/REVIEW-LOG.md` with a heading.

For each round N:

1. Run the **critic** with the local URL, the round number, and this task:
   - Open the local URL. At 375px wide and again at 1440px wide, take a full-page screenshot, passing `<docs-dir>/screenshots/after-<width>.png` as the filename (overwrite the previous round's). Read the saved PNGs to judge them.
   - Score the page against BRIEF.md and DESIGN.md, and compare against earlier rounds in REVIEW-LOG.md.
   - Image slots labelled with an ASSETS.md file name are expected placeholders until I generate the images. Judge how they look, not the missing photos.
   - Check the links: click at least one navigation item that leads to another page and confirm it opens `beyond-preview.html` on the local server, that the page looks consistent with the homepage, and that its button returns to the homepage. List every link on both pages that points to the prospect's domain as a top-priority fix.
2. Append `## Round N` to REVIEW-LOG.md with the critic's scores and fixes.
3. If the critic replied `APPROVED`, end the loop.
4. Otherwise send the critic's fixes to the **builder** in the critic's order, and append its done / partial / skipped report to the same round.

If round 2 ends with the builder applying fixes, run the **critic** once more, only for final scores and fresh after-screenshots. Log it as `## Final check`. Don't send its fixes to the builder; they go into PITCH.md as unresolved.

When the loop is over, stop the HTTP server. Confirm `after-375.png` and `after-1440.png` exist in `docs-agents/preview/<slug>/screenshots/`. If they landed elsewhere, such as `.playwright-mcp/`, copy them there.

## Step 5 – Delivery

Look at the before and after screenshots, then write `docs-agents/preview/<slug>/PITCH.md`, in English except where noted, with:

1. **What's better** – the 3 main improvements in plain, non-technical language, each answering one of the 3 weaknesses in BRIEF.md.
2. **Email paragraph** – a short paragraph I can paste when sending the preview, in the site's language (with an English version below if that isn't English). Put `[preview link]` where the link goes.
3. **Screenshots to attach** – which before/after pair to attach, and why.
4. **Scores and open items** – the final critic scores and verdict, and anything still unresolved: remaining critic fixes, skipped builder items, any links still pointing to the prospect's domain, and the images in ASSETS.md still to generate.

Then give me a short summary in chat:

- **Verdict** – the final critic verdict and scores, in one line.
- **Links** – confirm that no link points to the prospect's old website and that other pages lead to `beyond-preview.html`.
- **Deploy** – upload the whole `preview/<slug>/` folder.
- **Next** – the path to PITCH.md and how many placeholder images are still to generate.
