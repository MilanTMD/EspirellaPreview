# BRIEF – espirella (preview of https://www.espirella.com/)

## 1. Business
Espirella, s.r.o. is a Czech coffee company that sells hand-picked, medium-roasted coffee beans ("zrno") sourced from small independent farmers (e.g. Brazil), plus some tea, through its own WooCommerce e-shop (/obchod/). It also offers coffee tastings by appointment "v naší prodejně". The registered office is in Prague (Staré Město) and the warehouse is in Říčany u Prahy. **The site is in Czech** (`lang="cs"`, prices in Kč), and the new homepage must be in Czech too.

## 2. Audience
- **Primary:** Czech coffee lovers buying whole beans for home brewing. They need to see the coffees, prices and origin quickly, then get to the shop. Most are likely on mobile (assumption).
- **Secondary:** people in or near Prague who want a tasting. They need to know how to book and when the company is open (Mon–Fri 9.00–15.00).
- **Assumption:** the weekday-only hours and the warehouse address suggest some office or wholesale buyers. Nothing on the site says so; the owner should confirm.

## 3. Main goal
**Get visitors into the e-shop to order coffee** (Obchod / product pages). Booking a tasting ("Domluvit ochutnávku" → /kontakt/) is the secondary action. Today the hero gives "Obchod" and "Kontakt" the same visual weight.

## 4. 3 biggest design weaknesses
1. **The hero says nothing, and the shop sits far down the page.** The H1 is a generic "Vítejte na webových stránkách espirella s.r.o.", set in white uppercase over a busy coffee-bean photo. It has no value proposition. Below it are two small, thin-outline ghost buttons with equal weight. At 375px the H1 wraps to 4 lines. The products don't appear until about 3,300px down a 5,200px page, so a buyer has to scroll past three long text blurbs to see anything for sale.
2. **Text is hard to read.** Body copy is 14px Open Sans at weight 300 in #666, and it is justified, which leaves visible gaps between words in the narrow 375px columns. In both screenshots the "OCHUTNÁVKA KÁVY? / ŽÁDNÝ PROBLÉM" band renders as flat light grey with thin white 14px text, which is nearly illegible. The footer's light white text sits directly on a busy bean photo.
3. **The product section looks unfinished, which hurts trust.** The 4th card, "Green tea passion", shows the grey WooCommerce placeholder image ("Zástupný symbol"), and tea appears under the heading "KÁVA KTEROU ZÁKAZNÍCI MILUJÍ". The cards are small, bordered boxes with no description or add-to-cart button. Footer links also contradict what they display (see section 5), and the Kontakt page breadcrumb wrongly reads "Domů / Čaj / MATCHA / Bio Matcha Tea Premium 20×1,5g".

## 5. Key content to keep (copy exactly)
- **Name:** Espirella, s.r.o. (page title: "Espirella | Oficiální webové stránky firmy Espirella, s.r.o."). The logo wordmark reads "espirella coffee".
- **Logo:** `https://www.espirella.com/wp-content/uploads/2023/04/logo_text_white.png` (white PNG, 128×68, alt "Espirella"; it needs a dark background). The footer uses a second mark, the double "ll" in white: `https://www.espirella.com/wp-content/uploads/2023/04/logo_white_double.png`.
- **Navigation:** Hlavní stránka, Obchod (`/obchod/`), Košík (`/kosik/`), Kontakt (`/kontakt/`), plus a search box ("Hledat:").
- **Products shown:**
  - espirella Brasil – zrno, 191 Kč (`/obchod/espirella-brasil-zrno/`)
  - espirella Royal Gold – zrno, 191 Kč – 359 Kč (`/obchod/espirella-royal-gold-zrno/`)
  - espirella Columbia – zrno, 202 Kč (`/obchod/espirella-columbia-zrno/`)
  - Green tea passion, 184 Kč (`/obchod/green-tea-passion/`)
  - "Do Obchodu" button → `/obchod/`
- **Story (NAŠE KÁVA – ČÍM JE VÝJIMEČNÁ):** three steps, 01 Sklízení, 02 Pražení, 03 Příprava. Key facts: hand-picked ("ručně vybírána") for 100% bean quality, from small independent farmers, medium roast ("středního pražení"), French Press recommended.
- **Tasting:** "OCHUTNÁVKA KÁVY? ŽÁDNÝ PROBLÉM". Visitors book a tasting at the shop; CTA "Domluvit ochutnávku" → `/kontakt/` (that page has a contact form).
- **Otevírací doba:** Pondělí, Úterý, Středa, Čtvrtek, Pátek: 9.00 - 15.00. Sobota and Neděle: Zavřeno.
- **Sídlo společnosti:** IČO: 24187267 · info@espirella.com · +420 608 311 088 · Kaprova 42/14, Staré Město, 110 00 Praha
- **Adresa Skladu:** Politických věznů 1233/40, budova E, Říčany u Prahy, 251 01
- **Also on /kontakt/:** OBCHOD@ESPIRELLA.COM, and "Tel. číslo +420 725 808 007".
- **Legal links:**
  - "Všeobecné obchodní podmínky" and "Ochrana osobních údajů". Both currently point to web.archive.org copies of `/wp-content/uploads/2018/07/Vseobecne-ObchodniPodminky-Espirella.pdf` and `/wp-content/uploads/2018/07/Podminky-Ochrany-Osobnich-Udaju-Espirella.pdf`.
  - Footer: "© 2023 All rights reserved".
- **Must confirm with owner (do not "fix" silently):**
  - Every email link displays info@espirella.com but opens `mailto:info@espirella.cz`.
  - The warehouse phone displays +420 608 311 088 but dials `tel:+420725808007`.
  - The site does not say which address is the "prodejna" used for tastings.
  - The homepage has no meta description and no OG tags. The new homepage should add them.
