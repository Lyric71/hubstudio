---
brief_id: 80
publish_date: 2026-10-27
week: 03
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 80: Shopify product image sizes for 2026

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
| Working H1 | Shopify product image sizes for 2026 |
| Slug | `/resources/insights/shopify-product-image-sizes/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/shopify-product-image-sizes.md` |
| Research file | `research/shopify-product-image-sizes.md` |
| Hero image | `public/Images/insight-shopify-product-image-sizes.webp`, referenced as `/Images/insight-shopify-product-image-sizes.webp` |
| Primary query | `shopify product image size` |
| Secondary queries | `shopify image size 2048 x 2048`, `shopify product image aspect ratio`, `shopify max image size`, `shopify product video requirements`, `shopify image formats webp` |
| SERP verdict | CONFLICTING AND DATED. App vendors and theme sellers give different maxima and file limits (3 MB against 20 MB), several pages are from 2024, and few quote the Shopify Help Center; none explains that the theme, not Shopify, decides how a non-square image is cropped. |
| Body length | 1,400 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Shopify's own Help Center values, quoted and dated, separated from what the theme decides. The size limits come from Shopify; the crop and aspect behavior comes from the theme's settings, so the page tells a team which number to build to and where to check the theme. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/shopify-product-image-sizes.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `shopify product image size` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/shopify-product-image-sizes/` with a date. For a China platform, the
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

- Every limit: Shopify Help Center pages on product media and supported file types, quoted, URL and both check dates
- hubStudio facts: create-an-image.md and assets-library.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table: maximum dimensions, maximum megapixels and file size, accepted formats, the recommended square size, each quoted from the Shopify Help Center
- Product media beyond images: video and 3D model limits from Shopify's own page
- Aspect ratio: why one ratio across all images of a product and of a collection; where the theme sets image crop or aspect, said generally (no named theme)
- Alt text and file names, from Shopify's own guidance
- A visible Reviewed date and a dated changelog block at the foot
- Making the files in hubStudio: renders up to 4K in the Image studio; the Image editor crops Square 1:1 and saves PNG, JPG or WEBP at a chosen size, with quick picks at 2048 px on the long side; Upscale and restore for older photos
- hubStudio does not connect to Shopify: files are downloaded and uploaded in the Shopify admin

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party app, theme vendor or blog
- Name any Shopify app, theme vendor or competitor
- Claim a Shopify connector, sync or API in hubStudio
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: media type, maximum, recommended, formats, source page
- Who decides what table: Shopify (limits) versus the theme (crop, ratio, zoom behavior)
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-shopify-product-image-sizes.webp`.
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

- Shopify platform page: `/solutions/platforms/shopify`
- Ecommerce design service: `/services/design/ecommerce`
- AI white-background packshot: `/resources/how-to/ai-white-background-packshot`
- Product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Ecommerce website: `/solutions/platforms/ecommerce-website`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Shopify Product Image Sizes for 2026 (36 chars) |
| Meta description | 152 chars | Shopify product image sizes, limits and formats for 2026, quoted from the Shopify Help Center, with what the theme decides about crop and ratio, dated. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should Shopify product images be?
2. What is the maximum image size on Shopify?
3. Should Shopify product images be square?
4. What image formats does Shopify accept?
5. Why are my Shopify product images cropped?
6. Can I add video to a Shopify product page?

## Notes

Spec page: Shopify Help Center only. Watch row due 2027-01-27.

## Definition of done

- [ ] `research/shopify-product-image-sizes.md` written before drafting, every claim marked
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
- [ ] File saved as `output/shopify-product-image-sizes.md` with `template: spec`
