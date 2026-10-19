# PITCH – espirella preview

Preview of the finished redesign (https://espirellaproduction.netlify.app/), packaged as a static homepage concept in Czech, English and German. "Before" is the client's current site, www.espirella.com.

## 1. What's better

1. **Visitors see right away what Espirella sells, and can start buying in one tap.** The old homepage opened with "Vítejte na webových stránkách espirella s.r.o." in white capitals over a busy bean photo, with two small, equally weighted buttons. On a phone the products started about 3,300px down. The new homepage says "Čerstvě pražená káva pro vaše espresso" and offers one clear "Vybrat kávu" button. All five espirella coffees, with prices, follow straight after.
2. **Everything is easy to read.** The thin, small, grey, justified text is gone. So is the pale grey tasting band with white text, and so is footer text printed over a coffee-bean photo. Text is now larger and dark on warm cream, and each section sits on a calm, solid band of colour (light teal, sand, dark espresso), so nothing is hard to make out.
3. **The shop looks finished and trustworthy.** The four plain boxes, one of them a grey "missing image" icon and a tea listed under a coffee heading, are now five proper coffee cards. Each card shows taste notes, a strength scale, the price and a link to the ground version. Tea, accessories and machine care have their own clearly labelled tiles. There's also a band for offices and cafés, a tasting invitation and a tidy "Kde nás najdete" block with hours, addresses and contacts.

## 2. Email paragraph

**Czech (to send):**

> Dobrý den, posíláme ukázku nové podoby úvodní stránky webu Espirella: [preview link]. Hned nahoře je jasně řečeno, co nabízíte, a jedno výrazné tlačítko vede k výběru kávy. Všech pět káv espirella s chuťovým profilem, intenzitou a cenou je přímo pod úvodem. Najdete tu také čaje, doplňky, péči o kávovar, nabídku pro kanceláře a kavárny i pozvánku na ochutnávku. Texty jsou větší a dobře čitelné, i na mobilu. Ukázka je v češtině, angličtině a němčině; fotografie jsou zatím jen zástupné a ostatní stránky webu na ni navážou ve stejném stylu. Budeme rádi za Vaše připomínky – máte chvilku na krátký hovor?

**English (for reference):**

> Hello, here is a preview of the new Espirella homepage: [preview link]. Right at the top it says clearly what you offer, and one strong button leads to choosing a coffee. All five espirella coffees, with taste notes, intensity and price, sit directly below the intro. You'll also find teas, accessories, machine care, an offer for offices and cafés, and an invitation to a tasting. The text is larger and easy to read, on mobile too. The preview is in Czech, English and German; the photos are placeholders for now, and the rest of the site would follow in the same style. We'd be glad to hear your thoughts. Would you have a moment for a short call?

## 3. Screenshots to attach

Attach the **1440px pair**: `screenshots/before-1440.png` and `screenshots/after-1440.png`. On a laptop screen the contrast is obvious at a glance: the busy photo hero against the clear headline and button, the grey tasting band against the calm colour bands, and four bare product boxes against five full coffee cards.

The 375px pair (`before-375.png`, `after-375.png`) shows the faster path to the coffees on a phone even better. Both images are very tall and narrow, though, so save them for a follow-up or the call.

Ideally, generate at least `hero-home.webp` first and re-shoot `after-1440.png`. The hero is the largest placeholder and the first thing the owner sees.

## 4. Scores and open items

**Final critic verdict: APPROVED (round 2).**

| Criterion | Round 1 | Round 2 |
|---|---|---|
| Hierarchy | 9 | 9 |
| Typography | 9 | 9 |
| Spacing and rhythm | 9 | 9 |
| Color | 9 | 9 |
| Motion | 8 | 9 |
| Originality | 8 | 8 |
| Polish | 7 | 9 |

The homepage matches production section by section at 375px and 1440px. The only visible differences are the intended additions: the CS/EN/DE switcher and the footer note.

**Links: none point to the client's old website or to the production URL.** Every other page (shop, categories, products, cart, search, shipping, terms, privacy, tasting and B2B contact forms) opens `beyond-preview.html` in the same language. That page has "Zpět na ukázku" / "Back to the preview" / "Zurück zur Vorschau". The only outbound links are `tel:`, `mailto:info@espirella.com` and Mapy.cz.

**Deliberate deviation from production:** "Kontakt" in the header, mobile menu and footer jumps to the homepage's "Kde nás najdete" section instead of production's `/kontakt/` page, so the owner lands on real content.

**Skipped builder items:** none. All round-1 fixes were applied and verified.

**Optional critic suggestions (not applied, non-blocking)**
1. CS footer note at 375px: "web." wraps onto its own line. Use `ostrý&nbsp;web.` or `text-wrap: pretty`, and check DE "Live-Website." too.
2. Mobile menu → Kontakt: keyboard focus ends on the page body. Move it to the "Kde nás najdete" heading.
3. The cup graphic on the beyond-preview page has no frame or label and reads slightly unfinished. If you change it, use production's crema colours.

**Worth a native check:** a few EN/DE wording choices, for example "Machine care" / "Maschinenpflege", "Shipping & payment" / "Versand & Zahlung", and the short IČO/DIČ explanation added in the EN and DE B2B text.

**Images still to generate (10, prompts in ASSETS.md):** `hero-home.webp`, `process-puvod.webp`, `process-prazeni.webp`, `process-priprava.webp`, `category-kava.webp`, `category-caj.webp`, `category-doplnky.webp`, `category-pece.webp`, `b2b.webp`, `tasting.webp`. Drop them into `preview/espirella/assets/` and they appear on all three language versions with no code change. Keep subjects inside the safe zones in ASSETS.md, because the hero and category slots change shape at 1024px.
