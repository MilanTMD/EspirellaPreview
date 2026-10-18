# ASSETS – espirella homepage (preview)

All files go in `C:\Users\milan\Desktop\Espirella preview\preview\espirella\assets\`. Format is WebP (quality 80). Always set the `width`/`height` attributes. The hero is loaded eagerly with `fetchpriority="high"`; all other images use `loading="lazy"`. The logos are not listed here because they are downloaded from the URLs in BRIEF.md.

Palette references: espresso `--color-dark` #2A1D15, `--color-dark-2` #3A2A1F, cream `--color-bg` #FAF6F0, sand `--color-surface-alt` #F1E6D8, rust `--color-primary` #9C4A1A, crema `--color-accent` #E9B97F.

Shared negative prompt (append to every prompt): `no text, no letters, no logos, no watermarks, no brand names, no people's faces, no latte art hearts, no steam clipart, no plastic look, no oversaturation, no cool/blue color cast, no busy cluttered background, no CGI render look`.

---

## 1. Hero
- **File:** `hero-kava.webp` (1200×1500) + `hero-kava-720.webp` (720×900)
- **Aspect ratio:** 4:5 (portrait)
- **Placement:** Homepage, hero. Right column at 1024px and up (next to the text on the espresso panel). Under 1024px it sits below the hero text, full-bleed, cropped to 4:3 with `object-fit:cover; object-position:50% 55%`. Keep the subject inside the central 60%.
- **Alt:** "French press s čerstvě spařenou kávou, hrnek a hrst středně pražených kávových zrn na tmavém dřevěném stole"
- **Prompt:** Moody, warm editorial still life for a specialty coffee roaster. A glass French press with freshly steeped coffee stands slightly right of center on a dark walnut wooden table. Next to it is a simple matte cream ceramic mug (#FAF6F0) of black coffee and a small loose pile of evenly medium-roasted whole coffee beans in warm chestnut brown, some spilling toward the foreground. Low 3/4 angle, 85mm lens, f/2.8, shallow depth of field. The beans in the foreground are sharp and the background falls off into deep espresso darkness (#2A1D15) so the image blends into a dark brown page panel on its left edge. Single soft window light from the upper left gives gentle highlights on the glass and bean surfaces, with subtle warm crema tones (#E9B97F) in the highlights. Rich, natural, calm, premium but approachable. Photographic realism, fine detail on the bean texture, natural color grading. Avoid: very dark/oily over-roasted beans, cafe interior, hands, text.

---

## 2–5. Product packshots (one consistent series)
- **Files:** `produkt-brasil-zrno.webp`, `produkt-royal-gold-zrno.webp`, `produkt-columbia-zrno.webp`, `produkt-green-tea-passion.webp`. Each is 800×800, plus `-400` variants (400×400) for `srcset`.
- **Aspect ratio:** 1:1
- **Placement:** Homepage, "Naše káva" product grid, product card media (rendered at 112px in the mobile list layout and up to about 280px in the desktop grid).
- **Alt text:**
  - Brasil: "Balení zrnkové kávy espirella Brasil"
  - Royal Gold: "Balení zrnkové kávy espirella Royal Gold"
  - Columbia: "Balení zrnkové kávy espirella Columbia"
  - Tea: "Balení čaje Green tea passion s lístky zeleného čaje"
- **Shared style prompt (use it for all four, then add the per-product line):** Clean studio product packshot of a single matte white stand-up kraft-lined coffee pouch with a flat-bottom gusset, standing upright, centered, front-facing with a very slight 10-degree turn. The front has one subtle vertical pair of thin silver-grey parallel lines as a minimal graphic and a plain blank rectangular label area (leave it empty, no text). Seamless warm sand backdrop (#F1E6D8) with a soft floor shadow directly beneath. Large soft key light from the upper left, gentle fill, no harsh reflections. 100mm macro lens, f/8, everything in focus. The pouch fills about 62% of the frame height with even padding on all sides. Identical camera height, lighting and backdrop across the whole series. Calm, minimal, premium, natural color.
  - **Brasil:** add "a small heap of medium-roasted chestnut-brown coffee beans in the front left of the pouch".
  - **Royal Gold:** add "a thin matte gold foil band across the top of the pouch, and a small heap of medium-roasted coffee beans in the front right".
  - **Columbia:** add "a small heap of medium-roasted coffee beans and two glossy green coffee leaves at the front left".
  - **Green tea passion:** add "the same pouch style with a thin sage-green band across the top, and a small shallow cream ceramic dish of loose dried green tea leaves at the front left" (no coffee beans).
- **Note:** the real packshots (white bag with the "ll" mark, product name and Czech flag sticker) on espirella.com are more accurate. Prefer them if the owner supplies them in the same 1:1 sand-background treatment. AI-generated packaging must not be presented as the real product in production.

---

## 6. Tasting
- **File:** `ochutnavka.webp` (1200×800) + `ochutnavka-720.webp` (720×480)
- **Aspect ratio:** 3:2
- **Placement:** Homepage, tasting band ("Ochutnávka kávy? Žádný problém"). Left column at 1024px and up, above the text on mobile. Rounded 12px corners.
- **Alt:** "Ochutnávka kávy: několik šálků čerstvě připravené kávy a misky s kávovými zrny na dřevěném pultu"
- **Prompt:** Warm, inviting photograph of a small coffee tasting set up on a light oak counter in a cozy shop. A row of four small matte cream ceramic cups of freshly brewed black coffee, each with a small shallow dish of whole medium-roasted beans in front of it, and a glass French press at one end. One pair of hands (wrists and forearms only, no face, plain linen apron in sand tone) pours coffee from a gooseneck kettle into a cup. Eye-level side angle, 50mm lens, f/2.8, focus on the middle cups. Soft natural daylight from a window on the right, warm color temperature, gentle shadows. The background is a softly blurred shelf of plain unlabeled coffee pouches in warm browns. Palette: sand (#F1E6D8), cream (#FAF6F0), espresso browns (#2A1D15, #3A2A1F) and a hint of rust (#9C4A1A). Friendly, unhurried, welcoming, authentic documentary style. Avoid: crowds, visible faces, latte art, branded cups, text on shelves, cold lighting.
