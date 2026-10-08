---
brief_id: 127
publish_date: 2026-12-17
week: 10
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 127: How to make images for a whole product catalog

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | How-to (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to make images for a whole product catalog |
| Slug | `/resources/how-to/bulk-ai-product-images/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/bulk-ai-product-images.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/bulk-ai-product-images.md` |
| Research file | `research/bulk-ai-product-images.md` |
| Hero image | `public/Images/howto-bulk-ai-product-images.webp`, referenced as `/Images/howto-bulk-ai-product-images.webp` |
| Primary query | `bulk AI product images` |
| Secondary queries | `AI product photos at scale`, `batch generate product images`, `AI images for hundreds of products`, `consistent product images across a catalog`, `AI lifestyle images for every SKU` |
| SERP verdict | Bulk-generation apps and API tutorials rank with upload-a-spreadsheet promises; none deals with what breaks at catalog scale: drift between the first image and the two-hundredth, a shape or a light that changes mid-run, and no sampling plan to catch a wrong label before it goes live. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A catalog batch is a recipe, not a button: one engine, one shape, one light and one prompt template, locked on a pilot of a few products, then run product by product with only the product changing. Consistency comes from what you hold still; quality comes from a sampling check sized to the batch. Shown with the Image studio's parallel runs, History, skills, Campaigns and the Assets Library's bulk actions, and with the studio for catalogs in the thousands.

## The research gate, before any drafting

No body copy until `research/bulk-ai-product-images.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `bulk AI product images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/bulk-ai-product-images/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- App behavior: create-an-image.md, history.md, skills.md, campaigns.md, assets-library.md, balance-and-payments.md
- Sample sizes: reuse the published standard cited on the retouch at volume page, from the ledger
- Case reference: diy-european-retailer in src/data/case-studies.ts, as written

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The recipe: a style frame, then a prompt template with one slot for the product, and the engine, shape, resolution and format written down and never changed mid-batch
- A pilot of a handful of products chosen from the catalog's hardest cases (reflective, transparent, text-heavy, very small, very large) before the full run
- Running it in the Image studio, from the help center only: Edit an image with each product's photo as the source (up to four sources on the engines that take several); several runs at once, each in its own tab; Images per run (1 to 10) on the ChatGPT Image engines gives variants of one product, not different products; Reuse prompt and Run again on a tab; Use this prompt in History for the next product
- Say plainly what the app does not do: no spreadsheet import, no API; a catalog runs as a series of runs, several at a time
- Holding the style still: a Team skill that carries the catalog's rules into every Improve with AI rewrite; the Catalog skills E-commerce packshot and Lifestyle product scene
- Filing at scale: a campaign for the batch, picked in the Campaign menu of the form so every render joins it, then tags and bulk actions in the Assets Library (tick several rows to move, tag or add to a campaign)
- QA at volume: a sampling plan and pass rules, pointing to the retouch at volume piece rather than restating it; what to check per image (label, shape, color, scale, edges), pointing to the keep the product exact guide
- When the studio fits better: thousands of SKUs on a running seasonal calendar, as in the DIY retailer case, only as written in src/data/case-studies.ts
- The price of each run shown before it starts; a failed run is not charged; the Usage log lists every paid run

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim a bulk upload, spreadsheet import, API or automation in the app
- Promise identical results across a batch
- Name a bulk-generation app or vendor
- Print a price or a per-image cost
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Recipe table: what to lock, the value, why
- Pilot table: hard case, what goes wrong, the fix
- QA checklist: what to inspect per image and the pass rule
- Existing localized captures create-an-image-studio.webp and campaigns-choice.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-bulk-ai-product-images.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A step sequence, a prompt example, a checklist the reader can use today. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- retouch at volume: `/resources/insights/retouch-at-volume-qa-pipeline`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- on-brand images with skills: `/resources/how-to/on-brand-images-with-skills`
- product photography cost per SKU: `/resources/insights/product-photography-cost-per-sku`
- DIY retailer case study: `/work/diy-european-retailer`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make AI Images for a Whole Product Catalog (49 chars) |
| Meta description | 152 chars | Make consistent AI images for every product in a catalog: lock one recipe on a pilot, run product by product, file the batch, check it with a sample. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI generate product images in bulk?
2. How do I keep AI product images consistent across a catalog?
3. How many products should I test before a full AI batch?
4. Can I upload a spreadsheet of products to generate images?
5. How do I check the quality of hundreds of AI images?
6. Is AI cheaper than a photo shoot for a large catalog?

## Notes

Help: create-an-image.md, history.md, skills.md, campaigns.md, assets-library.md. Reuse existing localized captures. H1 drops "in one batch": the app runs a catalog as a series of runs, several at once, with no import.

## Definition of done

- [ ] `research/bulk-ai-product-images.md` written before drafting, every claim marked
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
- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center
- [ ] File saved as `output/bulk-ai-product-images.md` with `template: howto`
