---
brief_id: 129
publish_date: 2026-12-18
week: 10
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 129: AI content for pet product brands

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Industry page (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | AI content for pet product brands |
| Slug | `/resources/insights/ai-content-pet-products/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-pet-products.md` |
| Research file | `research/ai-content-pet-products.md` |
| Hero image | `public/Images/insight-ai-content-pet-products.webp`, referenced as `/Images/insight-ai-content-pet-products.webp` |
| Primary query | `AI pet product photography` |
| Secondary queries | `AI generated pet photos for brands`, `pet food advertising rules`, `AI dog and cat images for ecommerce`, `pet product lifestyle images AI`, `pet brand social media content` |
| SERP verdict | Consumer pet-portrait apps and prompt galleries rank, aimed at owners picturing their own pets; none covers the brand problems: animals that look right at the paw and the eye, a product sized true to the animal, pet food claims, and scenes that show care a vet would object to. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

Animals are the hardest thing to direct on a set and among the easiest to get subtly wrong in a render. Generate the animal, the home and the season; keep the product, its size against the animal and its claims true; never show unsafe care. With the pet food labeling and claims rules in the US and the EU, and one case for the method.

## The research gate, before any drafting

No body copy until `research/ai-content-pet-products.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI pet product photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-pet-products/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FDA CVM pages on pet food labels and claims, dated
- AAFCO's own page on its model regulations and their adoption by states, dated
- EUR-Lex text of 767/2009; the industry labeling code from its publisher's page, dated
- Any pet market or spending figure only from a source with a stated method; if an association that promotes the category published it, label it a market claim

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table by asset: packshot, product in use with an animal, lifestyle scene, social clip, size and fit (collars, harnesses, beds, crates); shoot, generate, mixed
- What generation gets wrong with animals: paws and toes, eyes and teeth, fur at the edges, breed traits, the scale of the product to the animal; a QA list
- Product truth: the pack, the food itself, the size of a bed or a collar against the animal shown; a fitted product on the wrong size of animal misleads; point to the keep the product exact guide
- Safe care in the picture: no food toxic to the species in the scene, no unsafe restraint or travel, no health effect the label cannot carry
- US: FDA Center for Veterinary Medicine pages on pet food labels and claims; the AAFCO model regulations, described from aafco.org as a model states adopt, not as federal law; the FTC on advertising
- EU: Regulation (EC) No 767/2009 on the placing on the market and use of feed, which covers pet food labeling and claims, from EUR-Lex; the pet food industry's code of good labeling practice, described as an industry code
- A consistent brand animal or mascot across a series: point to the consistent character guide
- Case reference, only as written in src/data/case-studies.ts: the DIY retailer (basic product shots into lifestyle imagery at catalog scale), with a plain statement that it is not a pet brand
- The three ways to work: the studio for a launch; the app for seasonal and social variants (Image studio edits from source pictures, the Lifestyle product scene and Consistent character across images skills)
- A line stating the piece describes production practice, not legal or veterinary advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Show or describe a health effect, ingredient or size the product does not have
- Name a pet brand, a retailer or any tool vendor
- Present an industry code or a model regulation as law
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, shoot, generate, mixed
- Animal QA checklist table: what to check, what goes wrong, the fix
- Rules table by market: the rule, the page, what it means for an image
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-pet-products.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- DIY retailer case study: `/work/diy-european-retailer`
- consistent character in AI images and video: `/resources/how-to/consistent-character-ai-images-video`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- marketplace policies for AI product images: `/resources/insights/marketplace-policies-ai-product-images`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Pet Product Brands (33 chars) |
| Meta description | 152 chars | Where AI fits in pet product content: animals that look right, products sized true to the pet, safe care in every scene, and US and EU pet food rules. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can pet brands use AI-generated images of animals?
2. Why do AI pet photos look wrong?
3. What are the rules for pet food advertising?
4. How do I show a pet product at the right size in AI images?
5. Can AI keep the same dog or cat across a campaign?
6. Do I need to disclose AI-generated pet images?

## Notes

Category Production. Regulators' own pages, with AAFCO and the industry code described for what they are; case study diy-european-retailer as written, never presented as pet work.

## Definition of done

- [ ] `research/ai-content-pet-products.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] No Han characters in the article: Chinese names romanized (deviation 6)
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] Any case reference taken from `src/data/case-studies.ts`, nothing invented
- [ ] File saved as `output/ai-content-pet-products.md` with `template: insight`
