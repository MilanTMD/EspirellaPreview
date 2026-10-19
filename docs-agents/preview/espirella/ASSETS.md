# ASSETS – espirella preview homepage

There are 10 images, one per production media slot (BRIEF 6.2). All are `.webp` in `preview/espirella/assets/` and shared by CS, EN and DE (`../assets/…` from `en/` and `de/`). Name each file after its slot's `data-slot`.

**How they are used (see DESIGN 5.8):**
- Each slot keeps production's CSS art, frame and "FOTO: …" label.
- An `<img>` placed last inside the slot covers the art, frame and label: `position:absolute; inset:0; z-index:2; object-fit:cover; object-position:50% 50%`.
- `onerror="this.remove()"` brings the placeholder back if the file is missing.
- One file serves both ratios. Where production switches ratio at ≥1024px, the file uses the **taller-or-wider master** listed below and `object-fit:cover` crops it, so keep the subject inside the stated safe zone.

**Image attributes:**
- Set `width`/`height` to the file's pixel size and add `decoding="async"`.
- Hero: `loading="eager" fetchpriority="high"`. All others: `loading="lazy"`.
- Encode at quality 75–80. Size budget: hero ≤ 180 KB, all others ≤ 120 KB.

**Alt text:** Czech is given below; the builder translates it for EN/DE. Production marks every slot `aria-hidden="true"`, which hides the alt from assistive tech while the slot keeps that attribute (see the report).

**Shared style for every prompt:**
- Natural-light editorial still-life photography, as for a small specialty roastery.
- Shot on a full-frame camera, matte, true-to-life colour, gentle contrast, fine grain.
- Warm palette built on espresso brown #2f2118, crema #c98b4e / #96501c, cup cream #f3ebe1 and page cream #faf6f0, plus the slot's tint.
- **Avoid in every image:** text, logos, brand names or labels (including JURA/SAECO), packaging graphics, human faces, steam clichés, latte art hearts, oily over-roasted beans, busy bokeh bean backgrounds, oversaturation, HDR, vignettes, AI artefacts (melted cups, extra handles, malformed hands).

---

### 1. hero-home.webp
- **Type / format:** image, webp
- **Size:** 1600×1200 (4:3 master). Below 1024px the slot is 4:3 (343×257 at 375). At ≥1024px the slot is **5:4** (648×518 at 1440), so the cover crop removes about 50px from each side. **Safe zone:** the central 1500×1200.
- **Placement:** homepage, §1 Hero (`section.hero.scope-teal`), right column at ≥1024 and below the buttons on mobile. Slot `hero-home`, motif `crema`.
- **Alt (cs):** `Šálek espressa s lískooříškovou cremou na tmavém podkladu, pohled shora`
- **Prompt:** Overhead top-down photograph of a single freshly pulled espresso in a thick cream-white ceramic cup (#f3ebe1) on a matching saucer. It sits on a matte, very dark espresso-brown surface (#2f2118) that fills the whole frame. The crema is dense and even: hazelnut gold (#c98b4e) in the centre, deepening to a russet tiger-striped rim (#96501c). The cup and saucer span about 72% of the image height, centred vertically, with the cup centre at about 53% of the width. A few roasted beans lie loosely at one corner and stay well inside the safe zone. Soft window light from the upper left, gentle shadow to the lower right, 50mm lens straight down, f/5.6. Calm, premium, quiet mood. The composition must echo concentric rings: crema, cup rim, saucer.

### 2. process-puvod.webp
- **Type / format:** image, webp
- **Size:** 960×720 (4:3 at every width; 413×310 at 1440, 343×257 at 375).
- **Placement:** homepage, §3 "Od zrna k šálku", step 01 "Původ". Slot `process-puvod`, motif `contour`.
- **Alt (cs):** `Větev kávovníku se zralými červenými plody na plantáži`
- **Prompt:** Close-to-mid shot of a coffee shrub branch heavy with ripe red and some yellow-green coffee cherries. Behind it, out of focus, terraced hillside rows of coffee plants fade into a soft morning haze with gently layered contours, like the lines of a topographic map. The palette is muted sage and pale green (#dde7d3) with cherry reds kept warm rather than neon. Diffused overcast light, 85mm lens, f/2.8, branch in the left two thirds, horizon soft in the upper right. No people, no farm machinery.

### 3. process-prazeni.webp
- **Type / format:** image, webp
- **Size:** 960×720 (4:3).
- **Placement:** homepage, §3, step 02 "Pražení". Slot `process-prazeni`, motif `beans`.
- **Alt (cs):** `Čerstvě pražená kávová zrna v chladicím sítu pražírny`
- **Prompt:** Freshly roasted medium-roast coffee beans, evenly spread as a dense layer in the perforated cooling tray of a small drum roaster, seen from a 45° high angle. The beans are uniform cinnamon-to-chestnut brown with a dry, matte surface (not oily). Warm amber light glows from the lower edge, as if from the roaster, and fades to neutral sand (#ebd9c3) at the top of the frame. A brushed steel stirring arm crosses one corner. 50mm lens, f/4, shallow depth so the back of the tray softens. Warm, artisanal, honest.

### 4. process-priprava.webp
- **Type / format:** image, webp
- **Size:** 960×720 (4:3).
- **Placement:** homepage, §3, step 03 "Příprava". Slot `process-priprava`, motif `crema`.
- **Alt (cs):** `Espresso vytékající z kávovaru do malého šálku`
- **Prompt:** Side view at cup height of espresso being extracted from a polished chrome portafilter with a bottomless or twin spout. Two thin honey-brown streams (#96501c to #c98b4e) fall into a small cream ceramic espresso cup (#f3ebe1) on a saucer, on a stainless drip tray. The background is a clean, pale teal-grey kitchen wall (#dceeef) with a soft gradient and nothing else in view. The cup is centred, filling about 60% of the frame height. Soft side light from the left, 85mm lens, f/4, crisp streams, no splashes. Quiet morning ritual.

### 5. category-kava.webp
- **Type / format:** image, webp
- **Size:** 800×1000 (**4:5 master**). Below 1024px the slot is 1:1 (165×165 at 375; about 170 at 768). At ≥1024px it is 4:5 (312×390 at 1440). **Safe zone:** the central 800×800, so keep the subject inside the middle square.
- **Placement:** homepage, §4 "Co u nás najdete", tile "Káva". Slot `category-kava`, motif `rings` + bean glyph.
- **Alt (cs):** `Zrnková a mletá káva vedle sebe v keramických miskách`
- **Prompt:** Top-down still life on a smooth warm sand background (#ebd9c3). Two small handmade cream ceramic bowls sit side by side, centred. One holds whole medium-roast beans; the other holds fine espresso-ground coffee. A brass coffee scoop rests between them with a few loose beans scattered. Soft, even daylight from the top right with gentle short shadows. 50mm lens straight down. Keep generous plain background above and below the subject so it crops cleanly to a square. Minimal, tactile.

### 6. category-caj.webp
- **Type / format:** image, webp
- **Size:** 800×1000 (4:5 master; central 800×800 safe for the 1:1 crop).
- **Placement:** homepage, §4, tile "Čaj". Slot `category-caj`, motif `veins` + leaf glyph.
- **Alt (cs):** `Sypaný čaj, šálek čaje a matcha s bambusovou metličkou`
- **Prompt:** Top-down still life on a pale sage background (#dde7d3). It shows a clear glass cup of amber tea, a small heap of loose-leaf green and black tea, dried fruit pieces for a fruit infusion, and a small bowl of bright matcha with a bamboo whisk (chasen). Arrange them in a loose diagonal running at about 60°, kept within the middle square. Soft diffused daylight, gentle shadows, 50mm lens straight down. Fresh, light, natural greens. No tea bags with tags, no packaging.

### 7. category-doplnky.webp
- **Type / format:** image, webp
- **Size:** 800×1000 (4:5 master; central 800×800 safe for the 1:1 crop).
- **Placement:** homepage, §4, tile "Doplňky". Slot `category-doplnky`, motif `dots` + cube glyph.
- **Alt (cs):** `Porcovaný cukr, horká čokoláda a papírové kelímky s víčky`
- **Prompt:** Top-down still life on a soft peach background (#f3dccb). It shows a short stack of plain cream paper to-go cups with white lids (no print), a mug of hot chocolate with a thick cocoa surface, a few white sugar cubes, and wrapped sugar sticks in plain white paper, arranged in a neat grid-like rhythm. Even soft daylight, crisp but gentle shadows, 50mm lens straight down, subject within the middle square. Orderly, friendly, practical.

### 8. category-pece.webp
- **Type / format:** image, webp
- **Size:** 800×1000 (4:5 master; central 800×800 safe for the 1:1 crop).
- **Placement:** homepage, §4, tile "Péče o kávovar". Slot `category-pece`, motif `lines` + drop glyph.
- **Alt (cs):** `Čisticí tablety, odvápňovač a kartáček pro péči o kávovar`
- **Prompt:** Top-down still life on a pale teal background (#dceeef). It shows white round cleaning tablets in a small dish, a plain unlabelled white bottle of descaling liquid, a few clear water droplets, a small group-head cleaning brush with dark bristles, and a folded light-grey microfiber cloth, laid out in clean horizontal rows. Bright, clean, soft daylight and a cool-neutral feel kept slightly warm. 50mm lens straight down, subject within the middle square. Hygienic and calm. No brand names, no machine logos.

### 9. b2b.webp
- **Type / format:** image, webp
- **Size:** 1280×960 (**4:3 master**). Below 1024px the slot is 3:2 (343×229 at 375). At ≥1024px it is 4:3 (628×471 at 1440). **Safe zone:** the central 1280×853, so the crop removes about 53px top and bottom.
- **Placement:** homepage, §5 "Pro kanceláře a kavárny" (`section.b2b.scope-espresso`, dark band), right column at ≥1024 and below the text on mobile. Slot `b2b`, motif `grid` + six cups.
- **Alt (cs):** `Kávový koutek v kanceláři s automatickým kávovarem a zásobami`
- **Prompt:** Eye-level, slightly elevated three-quarter view of a tidy office coffee corner on a light oak counter. It shows an unbranded matte-black bean-to-cup automatic machine, a neat row of six cream espresso cups on saucers, a stack of plain paper cups with lids, a glass jar of sugar sticks, and a closed plain cardboard supply box. Behind them is a warm off-white wall (#f3ebe1) with soft daylight from a window on the left. Palette: warm sand (#ebd9c3), espresso brown, cream, one muted teal accent (#7ebec5) such as a mug or towel. 35mm lens, f/5.6, everything sharp, calm and organised. It must read clearly against the dark espresso band (#2f2118). No people, no screens, no visible text.

### 10. tasting.webp
- **Type / format:** image, webp
- **Size:** 1280×853 (3:2 at every width; 628×419 at 1440, 343×229 at 375).
- **Placement:** homepage, §6 "Ochutnávka" (`section.tasting.scope-teal`), left column at ≥1024 and first on mobile. Slot `tasting`, motif `cups`.
- **Alt (cs):** `Tři šálky espressa připravené k ochutnávce`
- **Prompt:** Top-down photograph of three cream ceramic espresso cups on saucers in one horizontal row, centred at about 44% of the image height, at about 14%, 50% and 86% of the width. Each crema has a slightly different shade, from light hazelnut (#c98b4e) through russet (#96501c) to a deep dark-roast brown (#443226), to suggest a comparison. The table is warm sand linen (#ebd9c3). A teal linen runner (#7ebec5) crosses the full width as a horizontal band at about 72% of the height, below the cups. A small tasting card with no legible text and a pencil sit near the runner. Soft window light from above left, 50mm lens straight down. Inviting, social, unhurried. No hands, no people.
