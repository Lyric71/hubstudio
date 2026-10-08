---
brief_id: 66
publish_date: 2026-10-13
week: 01
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 66: Facebook post, Reel and Story specs for 2026

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
| Working H1 | Facebook post, Reel and Story specs for 2026 |
| Slug | `/resources/insights/facebook-post-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/facebook-post-specs.md` |
| Research file | `research/facebook-post-specs.md` |
| Hero image | `public/Images/insight-facebook-post-specs.webp`, referenced as `/Images/insight-facebook-post-specs.webp` |
| Primary query | `facebook post size 2026` |
| Secondary queries | `facebook image size 2026`, `facebook reel size`, `facebook story size and safe zone`, `facebook link preview image size`, `facebook carousel image size` |
| SERP verdict | SATURATED, UNCITED. Tool blogs and resizer pages repeat 1080 x 1350 and 1200 x 630 with no link to Meta, mix organic posts with ads specs, and give no review date; none separates what Meta's Ads Guide states from what organic page posts accept. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Every figure read from Meta's own pages, organic page posts and ads kept apart, with a visible Reviewed date and a quarterly recheck. The ranking pages blend the two and cite nobody; this one says which surface each number comes from, and where Meta gives a range rather than a single size.

## The research gate, before any drafting

No body copy until `research/facebook-post-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `facebook post size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/facebook-post-specs/` with a date. For a China platform, the
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

- Every dimension, ratio, file limit and length: Meta Ads Guide (facebook.com/business/ads-guide) per placement, and Meta Business Help Center for organic page posts; record URL and both check dates
- Story and Reel safe zones (top and bottom margins free of text): Meta Ads Guide, quoted as Meta states them
- hubStudio limits: facebook.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table for feed images: ratio, recommended pixels, minimum, file type and weight, with the Meta page each row comes from
- Reels and Stories: 9:16, recommended size, length limits, and the safe zones Meta's Ads Guide gives for text and logos
- Link previews, carousels and video in feed, each from Meta's own page
- Organic page posts versus ads: where the specs differ, said plainly
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the Facebook module posts to pages (text only, one image, a carousel of 2 to 8 slides when rendered, or one video; up to 10 pictures, JPG, PNG or GIF up to 10 MB each, or one MP4 or MOV clip up to 20 minutes); the Image editor crops to Link 1.91:1 or Square; the Video editor's Social panel frames a Facebook Reel 9:16 at 1080 x 1920, a Story, Feed portrait 4:5 or Square and shows what the network covers
- Publishing to Facebook through hubStudio costs nothing; scheduling goes to up to 20 pages per post

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog or resizer page
- Claim hubStudio publishes Facebook Stories or Reels as such: the module publishes page posts with pictures or one video
- Name any competitor or design tool
- Print any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: surface, ratio, recommended pixels, file limits, source page
- Reels and Stories table: ratio, size, length, safe zone, source page
- Organic versus ads table: where the two differ
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-facebook-post-specs.webp`.
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

- Meta platform page: `/solutions/platforms/meta`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- Instagram Reels and Stories specs: `/resources/insights/instagram-reels-stories-specs`
- Social media design service: `/services/design/social-media`
- Image editor: `/app/image-tools`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Facebook Post, Reel and Story Specs 2026 (40 chars) |
| Meta description | 152 chars | Facebook feed image, carousel, link preview, Reel and Story sizes for 2026, from Meta's own pages, organic and ads kept apart, with a Reviewed date. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size is a Facebook post image in 2026?
2. What is the best aspect ratio for Facebook feed posts?
3. What size should a Facebook Reel be?
4. What is the safe zone on a Facebook Story?
5. What size is a Facebook link preview image?
6. How many pictures can a Facebook post have?

## Notes

Spec page: primary sources only (Meta Business Help Center, Meta Ads Guide). Visible Reviewed date. Watch row due 2027-01-13 for the quarterly recheck.

## Definition of done

- [ ] `research/facebook-post-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/facebook-post-specs.md` with `template: spec`
