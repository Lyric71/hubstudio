---
brief_id: 56
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 56: Instagram Reel and Story size in 2026: lengths, limits and safe zones

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
| Working H1 | Instagram Reel and Story size in 2026: lengths, limits and safe zones |
| Slug | `/resources/insights/instagram-reels-stories-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/instagram-reels-stories-specs.md` |
| Research file | `research/instagram-reels-stories-specs.md` |
| Hero image | `public/Images/insight-instagram-reels-stories-specs.webp`, referenced as `/Images/insight-instagram-reels-stories-specs.webp` |
| Primary query | `instagram reel size 2026` |
| Secondary queries | `instagram story size`, `reels safe zone`, `instagram reel length limit` |
| SERP verdict | Page one is tool-vendor and creator-blog spec sheets that print 1080x1920 as official, disagree on length (90 seconds, 3, 15 or 20 minutes) and on safe-zone pixels, and none quotes or links the Instagram Help Center or the Meta Ads Guide, or separates organic posts from ads. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Reels and Stories specs read only from Instagram's and Meta's own pages (Instagram Help Center, Meta Business Help Center, the Meta Ads Guide for the Reels and Stories placements, and the Instagram Platform developer reference for posts published through the API): ratio, recommended size, length limits for organic posts and for ads, file limits, the safe zone as Meta publishes it, and the Reel cover. Where Meta publishes nothing on a point, the page says so. Visible "Reviewed October 8, 2026". Primary readings, so no deviation 7 disclaimer.

## The research gate, before any drafting

No body copy until `research/instagram-reels-stories-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `instagram reel size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/instagram-reels-stories-specs/` with a date. For a China platform, the
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

- Instagram Help Center: Reels from 1.91:1 to 9:16, at least 30 FPS and 720 pixels; up to 20 minutes recorded; over 3 minutes not recommended to new audiences
- Instagram Help Center: cover photo 420 by 654 pixels (1:1.55), not editable after upload
- Instagram Help Center: Story videos up to 60 seconds show as one clip, longer ones split
- Instagram Help Center: boosting needs 90 seconds or less and 9:16
- Meta Ads Guide: Reels and Stories ads 9:16, 1440 by 2560; Reels ads 0 seconds to 15 minutes; Stories video ads 1 second to 60 minutes; 4GB; images 30MB
- Meta Ads Guide: leave 14 percent top, 35 percent bottom, 6 percent each side free
- Meta Business Help Center: Reels ads with disclaimers leave the bottom 40 percent free; taller screens may zoom and crop outside the safe zone
- Instagram Platform reference: Reels 3 seconds to 15 minutes, 300MB; Stories 3 to 60 seconds, 100MB; images JPEG 8MB; cover JPEG 8MB, center 9:16 crop, center 1:1 for feed

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A spec table: surface, ratio, size, length, source
- A safe-zone section built only on Meta's published wording and percentages, with the pixel arithmetic labeled as arithmetic
- An organic against ads differences table
- Common rejection and crop failures, each taken from an official help or developer page
- How hubStudio publishes a Reel or a Story to an Instagram professional account and frames the clip in the Video editor, from src/content/help/instagram.md and assets-library.md only
- A dated changelog block
- The Douyin video specs and safe zones insight as the China counterpart

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name or describe any spec-sheet publisher, tool vendor or scheduling product
- Print 1080x1920 as Instagram's published organic Reels size: no Instagram page prints it
- Print any safe-zone pixel inset as Instagram's own for organic posts
- Print a price, an amount or the word credits
- Leave TikTok unlabeled if it is mentioned: TikTok (Beta)

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Hero image: public/Images/insight-instagram-reels-stories-specs.webp
- App shots reused from src/data/app-shots.ts: videoSocial, videoSave, instagram
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-instagram-reels-stories-specs.webp`.
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
- short video design service: `/services/design/short-video`
- the app's publishing page: `/app/publish`
- Douyin video specs and safe zones: `/resources/insights/douyin-video-specs-safe-zones`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Instagram Reel Size 2026: Stories, Length, Safe Zone (52 chars) |
| Meta description | 152 chars | Instagram Reels and Stories specs from Meta's own pages: ratio, size, length for posts and ads, file limits, the ad safe zone and the Reel cover. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should an Instagram Reel be in 2026?
2. How long can an Instagram Reel be?
3. How long can an Instagram Story video be?
4. What is the Instagram Reels safe zone?
5. Does Instagram publish a safe zone for organic Reels?
6. What size is an Instagram Reel cover?
7. Why can't I boost my Reel?

## Notes

Primary Western spec page: Reviewed date visible, watch row 2027-01-08 for the quarterly recheck. Author Sophie Brennan (Social Creative).

## Definition of done

- [ ] `research/instagram-reels-stories-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/instagram-reels-stories-specs.md` with `template: spec`
