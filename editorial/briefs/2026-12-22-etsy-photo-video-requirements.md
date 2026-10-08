---
brief_id: 132
publish_date: 2026-12-22
week: 11
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 132: Etsy listing photo and video requirements for 2026

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
| Working H1 | Etsy listing photo and video requirements for 2026 |
| Slug | `/resources/insights/etsy-photo-video-requirements/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/etsy-photo-video-requirements.md` |
| Research file | `research/etsy-photo-video-requirements.md` |
| Hero image | `public/Images/insight-etsy-photo-video-requirements.webp`, referenced as `/Images/insight-etsy-photo-video-requirements.webp` |
| Primary query | `Etsy photo size` |
| Secondary queries | `etsy listing photo size 2026`, `etsy thumbnail crop`, `etsy listing video length`, `etsy shop banner size`, `can I use AI images on Etsy` |
| SERP verdict | STALE AND UNCITED. Seller blogs and template sites repeat one pixel figure and old banner sizes, rarely link to Etsy's own Help Center, and mix listing photos with shop branding; few explain how the first photo is cropped into the search thumbnail, and none sets the sizes beside Etsy's own rules on photos that must show the actual item and on work made with AI. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Etsy's own Help Center and Seller Handbook, read and dated: listing photos, the thumbnail crop, listing video and shop images, kept apart. Then the rule that matters more than pixels on Etsy: the photos must show the item the buyer receives, and Etsy's own standards say how work made with AI is disclosed. A generated scene can set the mood; the item in it must be the real item. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/etsy-photo-video-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Etsy photo size` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/etsy-photo-video-requirements/` with a date. For a China platform, the
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

- Listing photo count, size, file types and file limit: the Etsy Help Center page on adding photos to a listing, dated
- Thumbnail crop behavior and how to adjust it: Etsy Help Center or Etsy Seller Handbook, dated
- Listing video length, file size, formats and sound: the Etsy Help Center page on listing videos, dated
- Shop banner, shop icon and profile photo sizes: Etsy Help Center, dated
- Photo accuracy and AI rules: Etsy's Creativity Standards and House Rules on etsy.com/legal, quoted, dated
- hubStudio facts: create-an-image.md, create-a-video.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Listing photo table from Etsy's Help Center: how many photos a listing takes, the recommended size and shortest side, accepted file types, the file size limit and the ratio Etsy recommends
- The thumbnail: how Etsy crops the first photo in search and in the shop grid, how a seller adjusts that crop, and where to keep the item so it survives it
- Listing video: length, file size, formats and whether sound plays, from Etsy's own page
- Shop images kept apart from listings: banner, shop icon and profile photo, from Etsy's Help Center
- Etsy's rules on what a listing photo must show, and its Creativity Standards on items and images made with AI, quoted from etsy.com with their date
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: a lifestyle scene built from your own product photo in the Image studio (Edit an image, up to four source pictures, engine dependent); the Image editor's Crop, with Free and fixed formats, for the ratio Etsy recommends; a short clip that opens on one product photo in the Video studio (Start image); the Video editor trims it and writes an MP4
- hubStudio has no Etsy connection: files are downloaded and uploaded in Etsy by hand. Say so plainly

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog or template site
- Claim hubStudio publishes to or connects with Etsy
- Show a generated item as if it were the product sold
- Name any competitor, design tool or template site
- Print any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: surface, ratio, recommended pixels, file limits, source page
- Thumbnail crop diagram described in the ASSET BRIEF: the full photo, the grid crop, where to keep the item
- Video table: length, file size, formats, sound
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-etsy-photo-video-requirements.webp`.
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

- Shopify product image sizes: `/resources/insights/shopify-product-image-sizes`
- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- AI product image rules on Amazon and Google Shopping: `/resources/insights/marketplace-policies-ai-product-images`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- platform specs hub: `/resources/specs`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Etsy Listing Photo and Video Requirements 2026 (46 chars) |
| Meta description | 152 chars | Etsy listing photo sizes, the thumbnail crop, video limits and shop images for 2026, read from Etsy's own Help Center, with its rules on AI. Dated. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should Etsy listing photos be in 2026?
2. How does Etsy crop the listing thumbnail?
3. How long can an Etsy listing video be?
4. How many photos can an Etsy listing have?
5. Can I use AI-generated images on Etsy?
6. What is the Etsy shop banner size?

## Notes

Spec page: Etsy's Help Center, Seller Handbook and etsy.com/legal only. Watch row due 2027-03-22. hubStudio has no Etsy connection.

## Definition of done

- [ ] `research/etsy-photo-video-requirements.md` written before drafting, every claim marked
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
- [ ] File saved as `output/etsy-photo-video-requirements.md` with `template: spec`
