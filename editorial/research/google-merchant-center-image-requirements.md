# Research: google-merchant-center-image-requirements

| Field | Value |
|---|---|
| Brief | 83 |
| Target query | google shopping image requirements |
| Gap statement | Reconcile Google's separate attribute pages, dated minimum-size transition and AI metadata rules into one production handoff. |
| Research time spent | Active research began at 00:30 Shanghai on October 23, 2026; exact gate and reconciliation timestamps recorded in the run transcript. Automated parallel HTTP captures supplemented source reading. |
| Written | 2026-10-23, before article body copy |

## R1. Claims mapped before lookup

The pre-search decision record in logs/runs/2026-10-23-draft.txt maps attribute
purpose, current and future size limits, file formats and caps, presentation
restrictions, variant rules, AI metadata, automatic improvements and the app's
export behavior. No performance, price or China-platform claim is needed.

## R2. SERP map

The four complete ten-position observations are in
google-merchant-center-image-requirements/serp-map.md. The queries were:
google shopping image requirements; google merchant center image size;
merchant center image disapproved; google shopping lifestyle image requirements.
Excluded publishers have no identifying information or descriptive treatment,
as required by the standing rule. Search-tool result order is not claimed as a
localized search rank. Official pages supply all specifications.

The bar: separate technical tables for main, additional and lifestyle images,
a rejection-to-remedy table, and a dated transition explanation. About 1,500
words is the brief's floor; necessary source notes may take it above that.
The sources do not supply a defensible measured word-count benchmark.

## R3 to R6. Claims and figure interrogation

Google Help pages below are undated living documentation, accessed October 23,
2026. Dates are explicitly access dates, not invented publication dates.
Sample size is not applicable: these are platform specifications, not studies.
Method is direct reading of the responsible platform's published rule text;
publisher and funder are Google. IPTC maintains the vocabulary definitions.
All captures have UTC timestamps (October 22 UTC equals October 23 Shanghai).
The existing ledger entries for briefs 50 and 51 supplied verified starting
facts; new scope and conflicts were checked at their primary pages.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Main image required; JPEG, WebP, PNG, GIF, BMP, TIFF; at most 64 MP and 16 MB; around 1500 x 1500 or above recommended | https://support.google.com/merchants/answer/6324350?hl=en | Undated; accessed 2026-10-23 | Not applicable | Read Format table | Google | primary |
| Until January 31, 2027: 100 x 100 non-clothing, 250 x 250 clothing; general minimum becomes 500 x 500 on that date; warnings from July 2026; YouTube Shopping TV already requires 500 x 500 | https://support.google.com/merchants/answer/12159030?hl=en | Undated; accessed 2026-10-23 | Not applicable | Read transition notice and current rules together | Google | primary |
| A main image below the applicable size can disapprove the product; no guarantee that automatic optimization fixes it | https://support.google.com/merchants/answer/12159030?hl=en | Same access date | Not applicable | Read issue and transition text | Google | primary |
| Additional images optional, up to 10; same main-image requirements with staging, close-up, bundle-part and multipack exceptions; an undersized additional image is not shown but does not itself disapprove the product | https://support.google.com/merchants/answer/6324370?hl=en | Same access date | Not applicable | Read format, minimum and best-practice sections | Google | primary |
| Lifestyle optional, up to 5; 600 x 600 minimum; up to 64 MP and 16 MB; same six formats; highest-resolution full-size original recommended; no separate recommended pixel dimensions | https://support.google.com/merchants/answer/9103186?hl=en | Same access date | Not applicable | Read attribute-specific format and best practices | Google | primary |
| Lifestyle page prints 2:0 to 2:3; first ratio is unusable. No corrected upper bound is verified | https://support.google.com/merchants/answer/9103186?hl=en | Same access date | Not applicable | Read exact minimum-requirements cell and save screenshot | Google | primary for printed conflict; corrected ratio unverified and cut |
| General best-practice page says lifestyle inherits primary resolution; attribute page still states 600 x 600. Use stricter attribute-specific minimum and disclose conflict | https://support.google.com/merchants/answer/18353357?hl=en and https://support.google.com/merchants/answer/9103186?hl=en | Same access date | Not applicable | Compare scope and wording; conservative editorial recommendation | Google | primary |
| Solid white or light-neutral main background recommended, staged/lifestyle images acceptable; 75 to 90 percent fill is best practice, not a stated pixel-area formula | https://support.google.com/merchants/answer/18353357?hl=en and https://support.google.com/merchants/answer/6324350?hl=en | Same access date | Not applicable | Separate recommendations from minimum requirements | Google | primary |
| Main images exclude promotional overlays, added logos, borders, placeholder art and unrelated items not sold together; physical product branding allowed; named product-category exceptions exist for generic artwork | https://support.google.com/merchants/answer/6324350?hl=en | Same access date | Not applicable | Read prohibitions and exceptions together | Google | primary |
| Text-overlay disapproval persists until compliant imagery; added branding differs from branding inherent in product | https://support.google.com/merchants/answer/12158684?hl=en | Same access date | Not applicable | Read dedicated error article | Google | primary |
| Additional and lifestyle images must retain AI metadata; Google's listed codes include TrainedAlgorithmicMedia, CompositeSynthetic, AlgorithmicMedia | https://support.google.com/merchants/answer/6324370?hl=en and https://support.google.com/merchants/answer/9103186?hl=en | Same access date | Not applicable | Read explicit preservation clauses | Google | primary |
| Exact IPTC IDs are trainedAlgorithmicMedia, compositeSynthetic and algorithmicMedia; generated, composite containing generative elements, and non-trained algorithmic creation differ | https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia ; https://cv.iptc.org/newscodes/digitalsourcetype/compositeSynthetic ; https://cv.iptc.org/newscodes/digitalsourcetype/algorithmicMedia | Concept dates in captures; accessed 2026-10-23 | Not applicable | Read controlled vocabulary IDs and definitions | IPTC | primary |
| Automatic image improvements off by default; enable in Products > Automations; attempts overlay removal, inspect original versus improved version in Needs attention; AI disclosure labels exempt from overlay prohibition | https://support.google.com/merchants/answer/12724659?hl=en | Undated; accessed 2026-10-23 | Not applicable | Read default, recovery and disclosure exception | Google | primary |
| Apparel: recommend on-person clothing, keep head and feet for full-body view; shoes/bags/accessories alone in main and on-person in additional; primary and additional images match variant | https://support.google.com/merchants/answer/7348545?hl=en | Undated; accessed 2026-10-23 | Not applicable | Read apparel recommendations and variant section | Google | primary |
| Public image URLs must be crawlable and return real supported image files, not a login/page; extension must match file; diagnose in Products > Needs attention | https://support.google.com/merchants/answer/18353079?hl=en | Undated; accessed 2026-10-23 | Not applicable | Read current troubleshooting table | Google | primary |
| Oversize help headline says less than 64 MP/smaller than 16 MB while body and attribute page allow no larger than those values; keep exports below both as production recommendation | https://support.google.com/merchants/answer/12473903?hl=en | Undated; accessed 2026-10-23 | Not applicable | Compare headline and body | Google | primary |
| hubStudio Image studio up to 4K, engine-dependent; transparent only ChatGPT Image 2.5 engines in PNG/WebP; Image editor crops; Download image original versus clean-copy stripping | https://www.hubstudio.ai/help/create-an-image and https://www.hubstudio.ai/help/assets-library | Local help updated 2026-10-22; checked 2026-10-23 | Not applicable | Read src/content/help and binding positioning; repeat check in iteration 8 | hubStudio | primary |
| hubStudio supplies creation/export, not a Merchant Center feed connection; no assurance that editing retains tags or that every original already carries every required tag | hubstudio-positioning.md and src/content/help/create-an-image.md | Checked 2026-10-23 | Not applicable | Bound feature descriptions to documented product facts | hubStudio | primary |

R4: No China-related claims or specifications in this article. Chinese-first
research therefore does not apply. No China table or modal-spec fallback used.

## Cleared for use

- The general 2027 minimum, the temporary minima and TV exception, attributed
  to Google's Image too small page, accessed October 23, 2026.
- Main and additional caps/formats; lifestyle-specific 600 x 600 and its own
  caps/formats, attributed to each attribute page. Use recommendations as
  recommendations, not enforcement rules.
- Short quotation from Image too small: “Enforcement of the new requirements
  will begin January 31, 2027.” Do not invent an announcement date.
- Short quotation from Additional image link: “Don't remove embedded metadata
  tags”. Explain the property and values in original prose.
- Background guidance from Image best practices updates the older packshot
  article's suggestion that all white-background advice is confined to a
  different Google product. Correct its table, paragraph, FAQ and date in this run.

## Do not publish

- A made-up announcement date. Only enforcement and warning dates are verified.
- An inferred lifestyle ratio replacing the malformed value. Print the source
  problem and advise checking the intended crop in Merchant Center.
- A claim that 500 x 500 overrides the lifestyle-specific 600 x 600 row.
- A blanket ban on every image containing multiple objects. Bundle content and
  additional/lifestyle context have different rules.
- A promise of approval, feed submission or automatic metadata restoration by
  hubStudio; none is documented. Never recommend a clean-copy export for feeds.
- Performance percentages, a claim that larger images improve conversions by a
  stated amount, or a universal approval/review turnaround.
- Apparel aspect-ratio and alternative resolution recommendations are outside
  this article's size table; do not confuse them with current mandatory minima.
- Generic-image category IDs are unnecessary. Describe exceptions without them.

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| main-format-2026-10-23.png | Main-image technical table | 2026-10-23 Shanghai | Google Help 6324350 |
| additional-format-2026-10-23.png | Formats and count | Same day | Google Help 6324370 |
| lifestyle-format-2026-10-23.png | Formats and count | Same day | Google Help 9103186 |
| lifestyle-minimum-2026-10-23.png | 600 x 600 and malformed ratio | Same day | Google Help 9103186 |
| small-transition-2026-10-23.png | Enforcement and warning dates | Same day | Google Help 12159030 |

Thirteen check1 text captures preserve the other primary evidence. Source URL,
HTTP status and capture time are in each header; only unrelated tool promotion
is omitted and long dashes normalized. screenshots.json supplies exact times.
These are research evidence, not a recreated Merchant Center interface or
an illustration to ship with the article.

## R7. Gate

Every planned factual claim is primary or explicitly cut. The documented
conflicts can be explained without guessing a value. Research file written
before the article. The source brief is amended for those distinctions.

## R8. Reconciliation

Completed in createarticle iteration 8 on October 23, 2026. All thirteen
external URLs were fetched again with HTTP 200. Article text after the capture
headers is identical between check1 and check2 for each source. Local product
sources were re-read; their hashes and both check dates are recorded in
local-source-checks.json.

| Draft number or identifier | Cleared claim |
|---|---|
| 2026 and October 23, 2026 | Article scope and actual Shanghai review date |
| 100 x 100; 250 x 250; 500 x 500; January 31, 2027; July 2026 | Transition and TV exception, Image too small |
| 1500 x 1500 | Main and additional recommendation, attribute pages |
| 64 MP / megapixels; 16 MB | Main and lifestyle caps, inherited for additional |
| 10 additional; 5 lifestyle | Respective attribute format tables |
| 600 x 600; printed 2:0 and 2:3 | Lifestyle minimum; malformed ratio explicitly not an export instruction |
| 75 to 90 percent | Google best-practice framing range, not a measurement formula |
| 4K; ChatGPT Image 2.5 | Product help, engine-dependent resolution and transparent-format limitation |
| Source URL numeric IDs | Citation locators, not article claims |

All other instructions are editorial production recommendations grounded in
these source requirements. No additional statistic was introduced in drafting.
No speculative announcement date or corrected aspect ratio entered the copy.
