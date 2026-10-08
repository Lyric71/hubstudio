---
brief_id: 79
publish_date: 2026-10-27
week: 03
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 79: How to make Black Friday and holiday visuals from the product photos you already have

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
| Working H1 | How to make Black Friday and holiday visuals from the product photos you already have |
| Slug | `/resources/how-to/holiday-visuals-from-product-photos/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/holiday-visuals-from-product-photos.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/holiday-visuals-from-product-photos.md` |
| Research file | `research/holiday-visuals-from-product-photos.md` |
| Hero image | `public/Images/howto-holiday-visuals-from-product-photos.webp`, referenced as `/Images/howto-holiday-visuals-from-product-photos.webp` |
| Primary query | `black friday product images AI` |
| Secondary queries | `holiday product photos with AI`, `christmas product images from existing photos`, `black friday ad images`, `AI background for product photos holiday` |
| SERP verdict | TOOL PROMOS. The SERP is background-generator vendors with seasonal landing pages; they show one festive backdrop and stop, and none covers keeping the product identical (label, color, scale), the price-claim rules a sale visual triggers, or the formats the season's placements need. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

The season needs dozens of visuals in three weeks, and the product must stay exactly the product. Start from the photos you already have, change the scene and never the object, add the offer as an editable overlay rather than baked-in text, and check the price claim against the rules before it goes out. Black Friday 2026 is Friday, November 27.

## The research gate, before any drafting

No body copy until `research/holiday-visuals-from-product-photos.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `black friday product images AI` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/holiday-visuals-from-product-photos/` with a date. For a China platform, the
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

- 2026 dates: computed from the calendar (Thanksgiving is the fourth Thursday of November) and cross-checked against the holiday calendar piece
- FTC Guides Against Deceptive Pricing, 16 CFR Part 233, ecfr.gov
- EU prior-price rule: Directive 98/6/EC Article 6a as inserted by Directive (EU) 2019/2161, EUR-Lex
- App facts: create-an-image.md, skills.md, assets-library.md, campaigns.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The season's dates in one table: Thanksgiving November 26, Black Friday November 27, Cyber Monday November 30, 2026, plus the European dates from the holiday calendar piece
- Edit an image in the Image studio: your product photo as a source picture (up to four, engine dependent), a prompt that names what changes (scene, props, light) and what must not (label, color, shape)
- The Lifestyle product scene and E-commerce packshot skills from the Catalog shaping Improve with AI
- A fidelity check after every render: label text, logo, color, proportions; reject and rerun rather than retouch a wrong product
- Offer text as an overlay in the free Image editor (Text panel, outline or shadow for legibility), never rendered into the picture, so the discount can change without a new run
- Price claims: the FTC Guides Against Deceptive Pricing (16 CFR Part 233) for former-price comparisons in the US, and the EU prior-price rule (lowest price in the previous 30 days) for Europe
- Formats for the season's placements via the Image editor's Social panel and crop presets; keep everything for the launch together in a Campaign
- Several runs at once, each in its own tab; 1 to 10 images a run on the ChatGPT Image engines; the price shown before every run; a failed run never charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any background generator, tool or competitor
- Bake a discount figure into a generated image
- Print conversion-lift statistics from vendor blogs
- Print a hubStudio amount
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Season dates table
- Prompt pattern table: what changes, what stays, example wording
- Fidelity checklist as a plain list
- Existing captures: create-an-image-studio, image-editor-draw
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-holiday-visuals-from-product-photos.webp`.
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

- Holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`
- Product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- Create in the hubStudio app: `/app/create`
- Ecommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Black Friday Visuals From Your Product Photos (45 chars) |
| Meta description | 152 chars | Turn the product photos you have into Black Friday and holiday visuals: change the scene not the product, keep offers editable and check price claims. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I make Black Friday product images with AI?
2. Can AI put my product in a holiday scene without changing it?
3. Should I put the discount in the image or on top of it?
4. When is Black Friday 2026?
5. What are the rules for showing a sale price in an ad?
6. How many holiday visuals do I need for the season?

## Notes

Holiday piece publishes October 27, a month before Black Friday. Engines named only from the in-app list.

## Definition of done

- [ ] `research/holiday-visuals-from-product-photos.md` written before drafting, every claim marked
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
- [ ] File saved as `output/holiday-visuals-from-product-photos.md` with `template: howto`
