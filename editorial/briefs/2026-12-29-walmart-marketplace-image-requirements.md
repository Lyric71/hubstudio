---
brief_id: 139
publish_date: 2026-12-29
week: 12
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 139: Walmart Marketplace image requirements for 2026

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Platform specs (`template: spec` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Walmart Marketplace image requirements for 2026 |
| Slug | `/resources/insights/walmart-marketplace-image-requirements/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/walmart-marketplace-image-requirements.md` |
| Research file | `research/walmart-marketplace-image-requirements.md` |
| Hero image | `public/Images/insight-walmart-marketplace-image-requirements.webp`, referenced as `/Images/insight-walmart-marketplace-image-requirements.webp` |
| Primary query | `Walmart image requirements` |
| Secondary queries | `Walmart product image size`, `Walmart Marketplace main image rules`, `Walmart image white background`, `Walmart product video requirements`, `Walmart listing quality images` |
| SERP verdict | STALE AND UNCITED. Listing agencies and feed tools rank with rules copied from one another, often mixing the supplier guide with Marketplace seller rules and rarely linking Walmart's own pages; none sets the main image against the additional images and rich media, or says how images feed Walmart's listing quality score. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Walmart's own Marketplace Learn and Seller Help pages, read and dated: the main image, the additional images and rich media kept apart, and how images count toward listing quality. Set beside Amazon and Google Merchant Center for the seller who lists on all three. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/walmart-marketplace-image-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Walmart image requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/walmart-marketplace-image-requirements/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- A Western network's or marketplace's own help, business or policy pages are
  readable and therefore primary: no deviation 7 disclaimer, but a visible
  Reviewed date on the page and a `watch.csv` row three months out for the
  quarterly recheck. A China platform keeps deviation 7 where its rule text
  is gated.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Main and additional image rules: Walmart Marketplace Learn image guidelines, dated
- Listing quality and the role of images: Walmart Seller Help, dated
- Rich media rules and eligibility: Walmart's own pages, dated
- Amazon and Google values: reuse the ledger citations of the Amazon and Google Merchant Center spec pieces
- hubStudio facts: create-an-image.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Main image table from Walmart's own pages: background, fill of the frame, minimum and recommended size, ratio, formats, file limit, what may not appear
- Additional images: how many, what they may show, from Walmart's pages
- Rich media (video, 360-degree views) only as Walmart describes it for Marketplace sellers, with any eligibility condition
- How images feed the listing quality score, from Walmart Seller Help
- Where Walmart differs from Amazon and Google Merchant Center, in one comparison table, each value linked to its own spec page
- What Walmart's pages say about AI-generated images; if they say nothing, the page says so and applies Walmart's accuracy rules instead
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: a white-background packshot made from your own product photo (Image studio, Edit an image), Upscale & restore for a small source, the Image editor's Square crop; hubStudio has no Walmart connection, files are uploaded in Seller Center by hand

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from an agency, feed tool or third-party blog
- Mix the supplier guide with Marketplace seller rules without labeling which is which
- Claim hubStudio connects to Walmart
- Print any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Main image spec table: rule, value, source page
- Three-marketplace comparison table: Walmart, Amazon, Google Merchant Center
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-walmart-marketplace-image-requirements.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Spec table with a source column, visible Reviewed date, dated changelog. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- Google Merchant Center image requirements: `/resources/insights/google-merchant-center-image-requirements`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- AI product image rules on Amazon and Google Shopping: `/resources/insights/marketplace-policies-ai-product-images`
- platform specs hub: `/resources/specs`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Walmart Marketplace Image Requirements for 2026 (47 chars) |
| Meta description | 152 chars | Walmart Marketplace main image, additional image, rich media and listing quality rules for 2026, from Walmart's own pages, set beside Amazon and Google. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What are Walmart's product image requirements?
2. What size should Walmart product images be?
3. Does Walmart require a white background on the main image?
4. How many images can a Walmart listing have?
5. Can I add video to a Walmart Marketplace listing?
6. Does Walmart allow AI-generated product images?

## Notes

Spec page: Walmart's own Marketplace Learn and Seller Help pages only. Watch row due 2027-03-29. hubStudio has no Walmart connection.

## Definition of done

- [ ] `research/walmart-marketplace-image-requirements.md` written before drafting, every claim marked
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
- [ ] Reviewed date visible on the page, dated changelog present
- [ ] `watch.csv` row added three months out for the quarterly recheck
- [ ] File saved as `output/walmart-marketplace-image-requirements.md` with `template: spec`
