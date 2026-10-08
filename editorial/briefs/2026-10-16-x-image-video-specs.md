---
brief_id: 70
publish_date: 2026-10-16
week: 01
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 70: X image and video specs for 2026

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
| Working H1 | X image and video specs for 2026 |
| Slug | `/resources/insights/x-image-video-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/x-image-video-specs.md` |
| Research file | `research/x-image-video-specs.md` |
| Hero image | `public/Images/insight-x-image-video-specs.webp`, referenced as `/Images/insight-x-image-video-specs.webp` |
| Primary query | `X image size 2026` |
| Secondary queries | `twitter image size 2026`, `x post image aspect ratio`, `x video length and size limit`, `x header photo size`, `x ads image specs` |
| SERP verdict | STALE AND UNCITED. Tool and marketing blogs recycle 1200 x 675 and 1500 x 500 from the Twitter years, mix ads specs with organic posts, and rarely link to X's own Help Center or Business specs; none explains how X crops several pictures in one post. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

X's own Help Center and Business specs, read and dated, organic and ads kept apart, plus the thing that actually ruins X images: how a post with two, three or four pictures is cropped in the timeline. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/x-image-video-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `X image size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/x-image-video-specs/` with a date. For a China platform, the
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

- Image formats, file limits and video limits: X Help Center pages on posting photos, GIFs and videos, dated
- Ads specs: X Business ad format specifications, dated
- Profile and header sizes: X Help Center, dated
- hubStudio limits: x.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table for post images: supported formats, file size limits, recommended ratios, from X Help Center
- Multi-picture posts: up to four pictures, how the timeline crops two, three and four, and how to keep the subject inside the crop
- Video: formats, length, size and ratio limits from X's own pages, organic and ads separately
- Profile photo and header photo sizes from X Help Center
- Ads specs from X Business, flagged as ads only
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the X module posts a single post or a thread with up to four pictures (JPG, PNG, WebP and GIF up to 5 MB each; an animated GIF up to 15 MB goes out alone); the Image editor's Social panel for X offers Post wide 1600 x 900 marked Best, square, portrait and One of two, and shows how X crops beside other pictures
- Each post sent to X through hubStudio is charged, with the price shown before you send; posting by hand costs nothing
- The X module publishes pictures, not video: say so plainly

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog
- Claim hubStudio posts video to X
- Print the price of an X post or any hubStudio amount
- Name any competitor or design tool
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: surface, ratio, recommended pixels, file limits, source page
- Multi-picture crop table: number of pictures, how each is shown, where to keep the subject
- Video table: organic versus ads, length, size, ratio
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-x-image-video-specs.webp`.
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

- LinkedIn post specs: `/resources/insights/linkedin-post-specs`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- Publishing in the hubStudio app: `/app/publish`
- Social media design service: `/services/design/social-media`
- X help in hubStudio: `/help/x`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | X Image and Video Specs for 2026 (32 chars) |
| Meta description | 152 chars | X post image sizes, multi-picture crops, video limits, profile and header photos for 2026, read from X's own Help Center and Business specs, dated. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the best image size for X in 2026?
2. How does X crop a post with several pictures?
3. How long can a video on X be?
4. What is the X header photo size?
5. What file types does X accept for images?
6. How many pictures can I add to one post on X?

## Notes

Spec page: X Help Center and X Business only. Watch row due 2027-01-16. No platform-wide video claim that is not on X's own pages.

## Definition of done

- [ ] `research/x-image-video-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/x-image-video-specs.md` with `template: spec`
