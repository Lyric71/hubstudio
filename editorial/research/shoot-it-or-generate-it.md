# Research: shoot-it-or-generate-it

| Field | Value |
|---|---|
| Brief | 027 |
| Target query | when to shoot vs generate product images |
| Gap statement (one sentence) | Every page ranking for this query is published by a company selling either generation tools or photography, gives an unsourced use-case list, and never names a single instrument that actually forces capture (platform image policy, an advertising regulator ruling, food or cosmetics labeling law, synthetic performer statutes) or publishes a working studio's measured mix with its method. |
| Research time spent | About 75 minutes active |
| Written | 2026-09-09 |

## Constraint banner, read before drafting

Two hard limits apply to everything below.

1. **No competitor and no AI tool vendor reaches the page.** The SERP table
   names domains because the spec's table shape requires it. Not one of those
   domains, brands or product names may appear in the article. The two research
   papers cited below each name the specific generation models they tested.
   Those names are deliberately withheld from this file so they cannot leak
   into a draft. On the page, say "current image generation models" or "the
   models tested."
2. **No hubStudio rate, price or dollar figure.** This includes the per-image
   cost band already sitting in site copy (see the do-not-publish list). The
   "cost consequence" section in the brief is written as rework, returns and
   regulatory exposure, never as a number of dollars.

## R0. What the site already says, verbatim

The brief's summary of the site is close but not exact. Where they differ, the
site wins (SPEC.md, stop-and-ask condition 5). Corrections are flagged.

| Page | File and line | Exact site wording | Reading |
|---|---|---|---|
| Ecommerce design service | `src/pages/services/design/ecommerce.astro:80` | "We shoot real product when the brief calls for it. We generate the rest from brand-trained models. Most catalogs run about 70 percent generated, 30 percent shot." | Catalog-level statement about assets, scoped to "most catalogs" |
| Ecommerce design service, FAQ | `src/pages/services/design/ecommerce.astro:211` | "for categories where it really matters (luxury, beauty hero shots, anything with reflective or transparent surfaces) we still shoot. Hybrid is the working model, not full-stack generation." | The site's existing capture-condition statement |
| Who we are | `src/pages/the-studio/who-we-are.astro:252` | "The trick is knowing which 20% of the work needs a real set, and which 80% can be reimagined." | Judgment about work, not a measured ratio |
| Who we are | `src/pages/the-studio/who-we-are.astro:329` | "The real work is knowing which 20% to shoot and which 80% to build from there." | Same, restated |
| Who we are | `src/pages/the-studio/who-we-are.astro:340-344` | A ratio bar rendering "20%  Shoot for real" against "80%  Build with AI" | The 20/80 is rendered as a visual, not sourced to a sample |
| Who we are | `src/pages/the-studio/who-we-are.astro:252` (same block) | "Take a footwear launch: twelve colorways, four markets ... one strong shoot of the hero product, then AI for every color variant, market adaptation and e-commerce angle." | The hero-then-variants pattern the brief refers to. It is an illustrative example, not a measurement |
| AI image production | `src/pages/solutions/ai-production/image.astro` | No ratio anywhere on the page | **Correction to the brief:** this page publishes no shot-to-generated ratio |
| AI excellence | `src/pages/the-studio/ai-excellence.astro:155` | "Cuts production time by 80 percent." | A different 80 percent. Time saved, not a shoot mix. Do not conflate |
| AI excellence, FAQ | `src/pages/the-studio/ai-excellence.astro:239` | "Where it gets more interesting is high-end fashion editorial, or shoots that need a specific talent or location. There we usually recommend a hybrid approach: live capture combined with AIGC post-production." | The site's existing talent and location condition |
| Pricing | `src/pages/pricing.astro:158` | "Both. We run a live-action studio for real photo and video shoots ... Plenty of briefs are better generated, or built as a hybrid of the two." | Consistent with the article's premise |

**Three corrections the brief needs.**

1. The brief says the 20/80 is a "shoot-to-generate mix on variants." The site
   does not scope it to variants and does not call it a measurement. It reads
   as an editorial judgment about where the work sits. The article may not
   restate it as a delivery measurement unless the method statement below is
   supplied.
2. The brief implies `/solutions/ai-production/image` carries a ratio. It does
   not. Do not attribute one to it.
3. The two ratios are measured on different things: 70/30 counts catalog
   assets, 20/80 counts "the work." They point the same direction but they are
   not the same metric at two scopes. The article must not present them as one
   number restated, or the method statement will be false.

**No contradiction found.** Nothing the article needs to say about capture
conditions conflicts with the ecommerce FAQ (reflective and transparent
surfaces, luxury, beauty hero) or the ai-excellence FAQ (talent, location).
Build the four conditions so they contain those cases rather than replacing
them.

## R2. SERP map

Searched 2026-09-09. Result sets returned eight to nine organic results per
query rather than a clean ten. Counts below are what was actually returned, not
padded. Where a page carries no publication or update date on the page itself,
that is recorded, because it is part of the gap.

Query: **when to shoot vs generate product images**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | weshop.ai | Tool vendor blog | Shoot what proves a fact, generate new scenes; function shots, fit, scale | No instrument, no regulator, no platform rule, no measured mix | No date on page |
| 2 | gotolstoy.com | Tool vendor blog | How to generate product images, workflow steps | Decision rule absent; it assumes generation | No date on page |
| 3 | squareshot.com | Photo studio blog | Whether brands should use AI images at all, framed as trust | No conditions list, no sourced rule | No date on page |
| 4 | pixc.com | Retouching vendor blog | When AI helps and hurts for product photos | Unsourced; no platform or legal angle | No date on page |
| 5 | prolificstudio.co | Animation studio blog | 3D animation against photography, off-intent | Does not answer generate-vs-shoot for stills | No date on page |
| 6 | hoopstudios.com | Photo studio blog | AI shoot against professional photography, seller-side framing | Vendor position, no evidence, no conditions | No date on page |
| 7 | lovpics.com | Tool vendor blog | AI against traditional for ecommerce | Unsourced conversion and cost claims | No date on page |
| 8 | nettonic.co.uk | Agency blog | "Can AI replace product photography," 2026 framing | Opinion piece; no sourced rule or measured mix | 2026 badge, no exact date |

Query: **ai generated vs photographed product images**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | gotolstoy.com | Tool vendor blog | Same how-to as above | Same gaps | No date on page |
| 2 | ncbi.nlm.nih.gov | Peer-reviewed study | Human recognition of AI images against real photographs | Not about product imagery or the buying decision | Journal-dated |
| 3 | quora.com | Q&A thread | Opinions on replacement | No evidence at all | Undated thread |
| 4 | manipal.digital | Agency blog | Era framing, AI against traditional shoots | Unsourced throughout | No date on page |
| 5 | rewarx.com | Tool vendor blog | AI against professional photography for ecommerce | Source of several fabricated-looking statistics, see do-not-publish | 2026 badge, no exact date |
| 6 | anangsha.me | Personal blog | Which is better in 2026 | Personal opinion, no method | 2026 badge |
| 7 | photta.app | Tool vendor blog | Cost, time and ROI comparison | Publishes conversion and cost numbers with no method or sample | No date on page |

Query: **when to use ai product photography**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | medium.com | Personal post | Practical guide to scaling a catalog | 2025 framing, no instrument, no method | 2025 |
| 2 | fibbl.com | Tool vendor blog | How to use AI for product photography | Vendor framing, no rules | No date on page |
| 3 | fibbl.com | Tool listicle | Twelve tools ranked | Pure vendor listicle, no decision content | 2026 badge |
| 4 | nightjar.so | Tool vendor blog | Seven things that matter for ecommerce | Closest to a rule; still unsourced. Also publishes an 80/20 rule of thumb | 2026 badge |
| 5 | caspa.ai | Tool vendor blog | Why use AI, seventeen tools | Vendor listicle | No date on page |
| 6 | rewarx.com | Tool vendor blog | AI against traditional, ecommerce | Same as above | 2026 badge |
| 7 | rewarx.com | Tool vendor blog | Second near-duplicate of the same page | Thin duplication | 2026 badge |

Query: **should I shoot or generate product photos**

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | business.adobe.com | Software vendor guide | Effective product photography basics | Not a decision rule; predates the question | No date on page |
| 2 | weshop.ai | Tool vendor blog | Shoot for proof, generate for scene | Same gaps as query 1 | No date on page |
| 3 | alanranger.com | Photographer blog | Product photography setup for beginners | Off-intent | No date on page |
| 4 | bigcommerce.com | Platform blog | Budget product photography tips | Predates generative imagery as an option | No date on page |
| 5 | blog.hubspot.com | Marketing blog | Beginner product photography tutorial | Off-intent | No date on page |
| 6 | photoroom.com | Tool vendor blog | AI product photography setup guide | Vendor how-to, not a decision rule | No date on page |
| 7 | prophotostudio.net | Photo studio blog | Ten reasons to invest in imagery | Seller-side argument | No date on page |
| 8 | riverflow.ai | Tool vendor blog | AI against traditional shoots | Vendor framing | No date on page |

**The bar:** ranking pages run roughly 1,200 to 2,500 words with zero or one
table, no dated citations, no named instrument, and in most cases no
publication date on the page at all. One page publishes an 80/20 rule of thumb
with nothing behind it. Beating this bar takes 1,500 words, three tables, every
condition tied to a dated instrument, and one first-party number carrying its
method.

**The gap, in one sentence:** Nobody ranking has connected the decision to the
rules that actually govern it, and nobody has published a working studio's own
mix with a method statement attached.

Note for the writer: the SERP is dominated by sellers on both sides of the
question, which is why the answer everywhere is a use-case list rather than a
rule. The H1 should carry the rule, not the comparison.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified, or
first-party.

### Condition 1: texture and material truth

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| A benchmark of instruction-based image editing across optics, mechanics and state transition found all open-source models scoring below 60 on the physical-realism score, with only two closed-source systems slightly above it | arxiv.org/html/2510.17681v1 | 2025-10-20 | 900 editing samples, 8 subdimensions, 11 models | Human-annotated key regions (reflection surfaces, contact interfaces) scored against physical consistency, not semantic fidelity | Academic preprint, no vendor sponsor stated | single-source primary |
| Generated images "can be perceptually convincing without being physically plausible," and generative depictions "do not originate from distal scene properties and, consequently, cannot be directly linked to physical parameters" | jov.arvojournals.org (Journal of Vision 26(3):7); PMC13001837 | 2026-03-16 | 32 materials from the MERL BRDF dataset; observers 45, 35 and 40 in experiment 1, then 18, 18 and 13 in experiment 2 | Triplet similarity judgments comparing physically based renderings against generated sphere stimuli of the same materials | Peer-reviewed journal, university authors | primary |
| Taobao (淘宝) listed the AI fake-image failure categories it now polices: product material or style not matching the real item, distorted or exaggerated product effects, an obvious cutout and paste look, and human bodies or scenes that break physical laws | jjckb.xinhuanet.com/20250327/db1aeefb30ba4603b6415560e604ed1e/c.html; 21jingji.com/article/20250330/herald/e01c2c00e35889697690ca9cae940415.html | 2025-03-27 (platform), 2025-03-30 (press) | Platform-wide rule, no sample stated | Platform announcement reported by Chinese business press; enforcement by detection model plus manual review | Platform announcement | triangulated |
| **Caveat, binding.** The Journal of Vision study tested 2022-era generators. It supports the structural point (generated imagery is not derived from a physical scene) and must NOT be used to characterize the quality of current models | as above | 2026-03-16 | as above | as above | as above | primary, scope-limited |

### Condition 2: regulated categories

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| EU food law bars misleading consumers "by suggesting, by means of the appearance, the description or pictorial representations, the presence of a particular food or an ingredient, while in reality a component naturally present or an ingredient normally used in that food has been substituted with a different component or a different ingredient" (Article 7(1)(d)) | eur-lex.europa.eu/eli/reg/2011/1169/oj/eng; food.ec.europa.eu fair-information-practices page | Regulation dated 2011-10-25 | n/a, legal instrument | Text of the regulation, confirmed against the European Commission's own summary page | EU legislature | primary |
| The same fair-information rules apply to "the advertising and the presentation of foods, in particular their shape, appearance or packaging materials used" (Article 7(4)) | as above | 2011-10-25 | n/a | as above | EU legislature | primary |
| EU cosmetic claims must meet six common criteria, and under the honesty criterion "presentations of a product's performance shall not go beyond the available supporting evidence" | eur-lex.europa.eu/eli/reg/2013/655/oj/eng; legislation.gov.uk/eur/2013/655/annex | Applied 2013-07-11 | n/a, legal instrument | Text of the Annex | EU legislature | triangulated |
| A UK advertising regulator upheld 22 complaints against a robot-dog toy ad, finding that scenes "which appeared to be of real and/or AI-generated puppies, also gave the impression that the product was highly realistic," breaching CAP Code rules 3.1, 3.7 and 3.11, and told the advertiser not to "misleadingly represent or exaggerate the functionality and appearance of their products in future" | asa.org.uk/rulings/uab-commercecore-g25-1321974-uab-commercecore.html | 2026-03-25 | One ruling, 22 complaints | Regulator investigation and published ruling | Regulator | primary |
| The same regulator's guidance holds that the code is media-neutral, "the rules apply regardless of how the content was created," and "if an AI tool produces something problematic, the advertiser remains responsible for any output used in their ads" | asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html | 2026-06-11 | n/a | Published regulator guidance | Regulator | primary |
| A major US general marketplace requires that "images generated by artificial intelligence must be truthful, accurate and not misleading" and that sellers use "actual product images that accurately reflect the product being sold" | marketplacelearn.walmart.com, product detail page image guidelines | Page dated 2026-05-12 | n/a, platform rule | Platform's own published seller guidelines | Platform | primary |
| China's AI content labeling measures and the mandatory national standard took effect 1 September 2025 | Ledger rows, `sources/verified-sources.md` (chinalawtranslate.com/en/ai-labeling/, GB 45438-2025) | 2025-03-14 issued, effective 2025-09-01 | n/a | Instrument text | Regulator | primary, ledger row, both checks still outstanding |

### Condition 3: talent

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| New York enacted a synthetic performer disclosure law: an advertisement using a synthetic performer "shall conspicuously disclose in such advertisement that a synthetic performer is in such advertisement," with a synthetic performer defined as "a digitally created asset created, reproduced, or modified by computer, using generative artificial intelligence or a software algorithm, that is intended to create the impression that the asset is engaging in an audiovisual and/or visual performance of a human performer who is not recognizable as any identifiable natural performer." Penalties $1,000 first violation, $5,000 subsequent | nysenate.gov/legislation/bills/2025/S8420/amendment/A | Signed 2025-12-11, effective 180 days later (2026-06-09) | n/a, statute | Bill text on the legislature's own site | Legislature | primary |
| EU AI Act Article 50 transparency obligations apply from 2 August 2026, with a limited grace period to 2 December 2026 for marking obligations on systems already placed on the market. Deployers of deep fakes must disclose "upon first exposure at the latest" in "a clear and distinguishable manner," and the disclosure must be understandable without special technical tools | digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act | Page last updated 2026-07-24 | n/a, instrument plus official FAQ | Commission's own guidance page | EU Commission | primary |
| California renders unenforceable contract terms permitting creation and use of a digital replica in place of work the performer would have performed in person, absent a reasonably specific list of proposed uses and representation by counsel or a union | leginfo.legislature.ca.gov, AB-2602 | Signed Sept 2024, effective 2025-01-01 | n/a, statute | Bill text plus law firm alerts | Legislature | triangulated |
| A major US marketplace requires sellers to tag listing and A+ media containing photorealistic wholly AI-generated people with the keyword `contains-synthetic-performer` in the dc:subject (XMP) field before upload; images of real people, including real people edited with AI tools, are exempt | Announcement reported 2026-07-22, coverage 2026-07-25 and 2026-08-03; platform help pages are behind seller login | Announced 2026-07-22 | n/a, platform rule | Two independent secondary reports of the platform announcement. The platform's own help page could not be fetched | Platform | triangulated, secondary. **TODO: seller backend capture needed before this is stated as a spec** |

### Condition 4: physical scale

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Platform rules require the listing image to reflect the actual item shipped, which is what breaks generated scale and included-contents shots | marketplacelearn.walmart.com image guidelines, as above | 2026-05-12 | n/a | Platform's own guidelines | Platform | primary |
| A major marketplace requires the main image to be a professional photograph of the actual product, prohibits drawings, illustrations, mockups and placeholders, and bars props or accessories not included with the item | Multiple secondary guides agree; the platform's own help page is behind seller login | Guides carry 2026 badges | n/a | Secondary restatement of a platform rule | Sellers of listing services | **unverified as a spec. Do not publish as a captured platform rule. TODO: backend capture** |

Note on condition 4: no independent research source was found that measures
scale misrepresentation specifically. Build this condition from the platform
rule that the image must show the actual item, plus the ecommerce FAQ language
already on the site, and keep it short. Do not manufacture evidence for it.

### First-party figures

Both are hubStudio delivery figures. Do not source them externally. Do not
estimate. They publish only with a method statement.

| Figure | Site wording it must match | Method statement required before publication | Status |
|---|---|---|---|
| 70/30 generated-to-shot on ecommerce | "Most catalogs run about 70 percent generated, 30 percent shot" (`/services/design/ecommerce`) | What is counted (delivered final images, per catalog or per SKU), across how many client engagements, over what period, and whether the figure is a median or a mean across catalogs | first-party, method statement required before publication |
| 20/80 shoot-to-generate | "The real work is knowing which 20% to shoot and which 80% to build from there" (`/the-studio/who-we-are`), rendered as a 20 percent / 80 percent bar | What unit is counted (setups, assets, hours or budget), across how many engagements, over what period, and whether it is scoped to variant work or to all work. The site does not scope it to variants; the brief does | first-party, method statement required before publication |

**Writer instruction.** Brief 27 requires one number from the delivery record
with its method stated on the page. Use the 70/30 figure, because it is the one
the site already states as a delivery observation about catalogs. If the method
detail is not available before drafting, publish the sentence without the
number and leave `TODO: client sign-off / method statement` at that line rather
than inventing a sample or a period. Do not publish the 20/80 as a measured
delivery ratio at all unless its unit and sample are supplied; if they are not,
the article may still describe the hero-then-variants pattern in words, because
that pattern is published site copy, but it carries no percentage.

## Cleared for use

Blockquote-ready. Attribution form is exactly as written. No company is named
for a market figure, and no generation tool is named anywhere.

> Physical realism, not semantic accuracy, is where current image generation
> still breaks: a 900-case benchmark covering optics, mechanics and state
> transition scored eleven current image editing models against
> human-annotated reflection surfaces and contact points, and every
> open-source model scored below 60, with only two closed systems slightly
> above it.
> Source: PICABench, image editing physical-realism benchmark, October 2025.
> https://arxiv.org/html/2510.17681v1

> Generated images can be perceptually convincing without being physically
> plausible, because unlike a rendering or a photograph they do not originate
> from a three-dimensional scene and cannot be tied back to physical
> parameters.
> Source: Journal of Vision 26(3):7, March 2026, a study of 32 reference
> materials judged by 45, 35 and 40 observers in triplet similarity tasks
> against physically based renderings. https://pmc.ncbi.nlm.nih.gov/articles/PMC13001837/

> A Chinese marketplace became the first to publish a rule aimed specifically
> at AI fake product images, naming four failure categories: product material
> or style that does not match the real item, distorted or exaggerated product
> effects, an obvious cutout and paste look, and bodies or scenes that break
> physical laws.
> Source: Economic Information Daily (经济参考报), March 2025, reporting the
> platform's own rule announcement and its detection-model enforcement.
> http://jjckb.xinhuanet.com/20250327/db1aeefb30ba4603b6415560e604ed1e/c.html

> A general marketplace's seller image guidelines state that images generated
> by artificial intelligence must be truthful, accurate and not misleading, and
> that sellers must use actual product images that accurately reflect the
> product being sold.
> Source: marketplace seller image guidelines, page dated May 2026, the
> platform's own published rules.
> https://marketplacelearn.walmart.com/guides/Item%20setup/Item%20content,%20imagery,%20and%20media/Product-detail-page:-Image-guidelines-&-requirements

> A UK advertising regulator upheld 22 complaints against an ad for a robot
> toy, finding that footage which appeared to show real or AI-generated
> puppies gave the impression the product was highly realistic, and ruled that
> the advertiser must not misleadingly represent or exaggerate the
> functionality and appearance of its products.
> Source: UK advertising regulator ruling, 25 March 2026, an upheld
> investigation under the code's misleading advertising, substantiation and
> exaggeration rules.
> https://www.asa.org.uk/rulings/uab-commercecore-g25-1321974-uab-commercecore.html

> The same regulator's guidance holds that the advertising code is
> media-neutral: the rules apply regardless of how the content was created, and
> the advertiser remains responsible for any AI output used in its ads.
> Source: UK advertising regulator guidance, June 2026.
> https://www.asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html

> EU food law bars misleading a consumer by suggesting, through the appearance,
> the description or pictorial representations, the presence of an ingredient
> that has in fact been substituted, and applies the same rule to the
> advertising and presentation of the food, including its shape and appearance.
> Source: Regulation (EU) No 1169/2011, Article 7(1)(d) and Article 7(4),
> adopted 25 October 2011, as summarized on the European Commission's own fair
> information practices page. https://eur-lex.europa.eu/eli/reg/2011/1169/oj/eng

> EU cosmetics rules set six common criteria for claims, and under the honesty
> criterion a presentation of a product's performance may not go beyond the
> available supporting evidence.
> Source: Commission Regulation (EU) No 655/2013, in application since 11 July
> 2013. https://eur-lex.europa.eu/eli/reg/2013/655/oj/eng

> A New York statute signed in December 2025 and in force since 9 June 2026
> requires an advertisement using a synthetic performer to conspicuously
> disclose it, defining a synthetic performer as a digitally created asset
> intended to create the impression of a visual performance by a human
> performer who is not any identifiable real person, with civil penalties of
> $1,000 for a first violation and $5,000 after that.
> Source: New York Senate Bill S8420A, signed 11 December 2025, effective 180
> days later. https://www.nysenate.gov/legislation/bills/2025/S8420/amendment/A

> EU transparency obligations for synthetic content apply from 2 August 2026,
> with a limited grace period to 2 December 2026 for marking obligations on
> systems already on the market, and require deployers of deep fakes to
> disclose them on first exposure in a clear and distinguishable manner.
> Source: European Commission FAQ on Article 50 transparency obligations, page
> last updated 24 July 2026.
> https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act

> A California statute in force since 1 January 2025 makes unenforceable any
> contract term allowing a digital replica of a performer to replace work the
> performer would otherwise have done, unless the proposed uses are described
> in reasonably specific terms and the performer was represented by counsel or
> a union.
> Source: California Assembly Bill 2602, effective 1 January 2025.
> https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240AB2602

Ledger rows already carried, reusable with their logged attribution once both
checks are run: the CAC labeling measures issued 14 March 2025 and effective
1 September 2025, and mandatory national standard GB 45438-2025.

## Do not publish

Everything checked that did not clear the bar. This list is the point of the
exercise: it stops the next writer re-researching the same dead ends.

| Claim | Where it came from | Why it was cut |
|---|---|---|
| "Professionally photographed products convert at 4.2 percent, AI-generated at 2.8 percent, a 33 percent difference" | Tool vendor blogs surfacing on query 2 | No sample, no method, no period, published by a party selling the service it flatters. Fails R5 on every column |
| "67 percent of shoppers could identify AI-generated product images; 58 percent reported less confidence buying products that appeared synthetic" | Same vendor blogs | Same failure. No survey instrument, no n, no fielding date |
| "A traditional shoot for 50 SKUs at 3 angles costs $4,000 to $10,000, roughly $26 to $66 per final image" | Tool vendor blog | No method, and it is a price figure. Also collides with the no-rate rule |
| "$500 to $2,000 per traditional image" | hubStudio's own site copy, `src/pages/solutions/ai-production/image.astro` | Unsourced site copy and a price figure. Do not repeat it, do not cite the site as evidence for it. Flagged separately for the site backlog |
| "The most effective ecommerce brands use AI for about 80 percent of catalog imagery and reserve traditional photography for the 20 percent that needs it" | Tool vendor blog on query 3 | Unsourced rule of thumb from a seller. Repeating it would also make hubStudio's own first-party figure look derivative rather than measured |
| "AI tools generate dozens of images in minutes, most starting under $10 to $25 a month" | Tool vendor blogs | Vendor marketing. Also names a product category price band that has no bearing on the decision rule |
| Walmart "Real or AI" mandatory tag for clothing images, August 2026 | Two SEO blogs | The platform's own image guidelines page, dated 12 May 2026, contains no such tag and no clothing-specific AI rule. Contradicted at the primary source. Cut |
| "47 percent of AI product photos must carry disclosure labels by August" | SEO blog | No study, no method, no publisher. Reads as invented |
| "A 2026 consumer survey found misleading product pages overtook buyer's remorse as the leading cause of returns, at 27.8 percent" | Statistics-roundup blog attributing it to a carrier's consumer survey | The carrier's own site carries no such 2026 survey. Primary not found. Cut |
| "Inaccurate descriptions cause 14 percent of returns" | Return-statistics roundup blogs | Circular citation between roundups, no traceable primary, no fielding date |
| "The FTC set up a dedicated AI enforcement unit in January 2026," "advertising enforcement cases rose 40 percent in 2025," "an $18 million judgment in March 2026" | SEO law-adjacent blogs | None confirmed on the regulator's own site. Cut entirely. The regulator's real September 2024 action concerned deceptive AI business claims, not product imagery, and must not be stretched to cover this article |
| Etsy AI-tagging requirement for listing images, 2026 | Vendor blogs only | Platform policy page not reachable and not confirmed. Cut |
| California SB 1050 synthetic performer false advertising | A Senate committee analysis PDF | Committee analysis is not an enacted instrument. Enactment not confirmed. Cut. The New York statute covers the same point and is enacted |
| Amazon main image spec: professional photograph of the actual product, no drawings or mockups, pure white RGB 255, 85 percent fill | Multiple secondary listing-service guides | Consistent across sources but the platform's own page is behind seller login. R3 bars citing an English article for a platform spec. Do not publish as a captured platform rule. Use the reachable, dated marketplace guidelines instead |
| Amazon `contains-synthetic-performer` metadata requirement | Two independent secondary reports of a July 2026 platform announcement | Strong lead, credible, but unverified at the source. May be described as reported, dated and hedged, or held back. **Preferred: hold it back and use the enacted statutes instead, which are primary** |
| Named generation models and their benchmark scores | The two research papers | Naming a generation tool as a product being evaluated reads as competitor commentary. Cite the benchmark, never the model list |
| The Journal of Vision study used as evidence about how good current models are | The study itself | It tested 2022-era generators. It supports only the structural point that generated imagery is not derived from a physical scene. Any performance reading of it is out of scope |
| "20/80 shoot-to-generate on variants" as a measured delivery ratio | Brief 27 | The site does not scope it to variants and does not present it as a measurement. Publish it only with a real method statement, or describe the pattern in words with no percentage |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| (none required) | | | |

No capture was needed. Every platform and regulatory source that cleared the
bar is publicly reachable and dated. Two surfaces are worth capturing only if a
later spec page needs them: the seller backend image guidelines behind login,
and the Chinese marketplace's rule center page for the AI fake image rule.
Neither is required for this article as scoped.

## R8. Reconciliation (filled after drafting)

## R8. Reconciliation (after drafting)

Run 2026-09-09 against `output/shoot-it-or-generate-it.md`.

| Figure as it appears in the draft | Traces to | Verdict |
|---|---|---|
| 900-case benchmark, eleven models, open-source all below 60 | Cleared, PICABench, October 2025 | matches |
| Generated images convincing but not physically plausible | Cleared, Journal of Vision, March 2026 | matches. Demoted from blockquote to prose during the length trim, and the draft states in its own voice that it tested earlier generators and should be read for the structural point only |
| Chinese marketplace AI fake-image rule, four failure categories | Cleared, Economic Information Daily, March 2025 | matches. Platform not named, per the standing rule |
| Marketplace seller guidelines requiring truthful AI images | Cleared, platform's own rules, May 2026 | matches. Platform not named |
| 22 complaints upheld, robot toy ad, 25 March 2026 | Cleared, UK regulator ruling | matches |
| Advertising code is media-neutral | Cleared, UK regulator guidance, June 2026 | matches |
| EU food law, pictorial representations | Cleared, Regulation (EU) No 1169/2011 | matches |
| EU cosmetics honesty criterion | Cleared, Regulation (EU) No 655/2013 | matches. Demoted to prose during the length trim, attribution retained |
| New York synthetic performer disclosure, in force 9 June 2026 | Cleared, Senate Bill S8420A | matches. The civil penalty figures were dropped from the draft, see below |
| EU Article 50 from 2 August 2026, grace period to 2 December 2026 | Cleared, European Commission FAQ | matches |
| Roughly 70 percent generated on catalogs | Site's own published line, ecommerce design service page | matches the site's wording. See the flag below |

**The 70 percent figure. RESOLVED 2026-09-09, Cyril: publish it.** The site
publishes "most catalogs run about 70 percent generated, 30 percent shot" on
the ecommerce design service page. No method is on file. The draft originally
hedged it as a published observation rather than a measured average and carried
a `TODO: method statement`; both are now removed and the figure is stated
plainly, attributed to the site's own published line. The FAQ still says the
ratio is an output rather than a target, which is editorial advice and not a
method hedge, so it stays.

For the record, this overrides the `SPEC.md` rule that a figure without its
method does not go on the page. That rule continues to bind third-party and
market figures without exception. The stated exception is a first-party figure
the site already publishes, where the article makes no claim the site does not
already make. Supplying the method later (what counts as one asset, how many
engagements, what period, median or mean) would upgrade it from a published
figure to a measured one.

**The 20/80 ratio is deliberately absent.** Research established that the site
frames 20/80 as a judgment about "the work" on the who-we-are page, not as a
measurement and not scoped to color variants, and that the AI image production
page publishes no ratio at all. The brief assumed otherwise. The two published
ratios count different things, so presenting them as one metric at two scopes
would have produced a false method statement. The brief should be corrected.

**Statutory penalty figures dropped.** The New York statute's $1,000 and
$5,000 civil penalties are primary and were cleared, but they were cut from
the draft. They are not a pricing claim and the no-rate rule does not reach
them, so this is a judgment call rather than a rule: a dollar figure on a
hubStudio page invites the wrong reading, and the disclosure duty is the point
rather than the size of the penalty. Reinstate them if review disagrees.

**Nothing was added that is not in this file.** Specifically absent: every
vendor conversion figure, the shoot cost bands, the Walmart "Real or AI tag"
claim, the returns and label-preference survey figures, the three FTC
enforcement claims, the auth-gated Amazon specs, and every generation model
name.
