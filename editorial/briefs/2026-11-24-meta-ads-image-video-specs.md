---
brief_id: 104
publish_date: 2026-11-24
week: 07
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 104: Meta ads image and video specs for 2026 (Facebook and Instagram ads)

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
| Working H1 | Meta ads image and video specs for 2026 (Facebook and Instagram ads) |
| Slug | `/resources/insights/meta-ads-image-video-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/meta-ads-image-video-specs.md` |
| Research file | `research/meta-ads-image-video-specs.md` |
| Hero image | `public/Images/insight-meta-ads-image-video-specs.webp`, referenced as `/Images/insight-meta-ads-image-video-specs.webp` |
| Primary query | `Meta ads specs 2026` |
| Secondary queries | `Facebook ad specs 2026`, `Instagram ad sizes 2026`, `Meta ads safe zone`, `Meta carousel ad specs`, `Facebook ad primary text character limit` |
| SERP verdict | SATURATED, SECONDHAND. Social tool blogs and ad-tech vendors rank with one table of sizes, safe zones rounded to 250 px top and bottom, and performance lifts with no method; few link Meta's Ads Guide placement by placement, and none notes where Meta's own pages disagree with each other. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Ads only, placement by placement, every value read from Meta's Ads Guide and dated: Feed, Stories, Reels, Marketplace, Explore, search results, in-stream video, right column and Audience Network where the guide lists them, plus the carousel and collection formats and the text limits per placement. Then the one asset set that covers most placements, as Meta itself recommends it, and the places Meta's pages contradict each other, quoted as written. Organic posts live on the Facebook and Instagram spec pages.

## The research gate, before any drafting

No body copy until `research/meta-ads-image-video-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Meta ads specs 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/meta-ads-image-video-specs/` with a date. For a China platform, the
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

- Every dimension, ratio, file limit, length and text limit: Meta Ads Guide (facebook.com/business/ads-guide) per placement and format; the ledger rows of 2026-09-10 and 2026-09-15 for Reels, Stories and Feed are reused only after a fresh read on the research date
- Safe zones: Meta Ads Guide pages for Instagram Reels, Facebook Reels, Instagram Stories and Facebook Stories, quoted as Meta states them
- AI-generated ad rules: Meta Business Help Center or Transparency Center pages, dated
- hubStudio facts: create-an-image.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A placement table: placement, ratio, recommended pixels, minimum, file type and weight, length, text limits, the Ads Guide page each row comes from
- Reels and Stories safe zones as Meta states them (the 14 percent top, 35 percent bottom, 6 percent sides rows in the ledger), and the Facebook Stories page whose pixels and percentages do not reconcile, quoted as written
- Carousel ads (number of cards, ratio, per-card media) and collection ads, from the Ads Guide
- Text limits: primary text, headline and description per placement as the guide gives them, recommended against maximum
- The minimum asset set: which ratios cover which placements, and Meta's own placement asset customization, from Meta's pages
- Meta's own rules on AI-generated or digitally altered ads and the AI label, scoped exactly as Meta scopes them
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the Image studio renders square, portrait 4:5 and vertical 9:16 shapes; the Video editor's Social panel frames an Instagram or Facebook Reel at 9:16, 1080 x 1920, a Story, Feed portrait 4:5 or Square, and shows what the network covers; the files then go up in Meta Ads Manager

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog, resizer or ad-tech page
- Repeat a performance lift for spec-matched creative without a study that states its method
- Mix organic page or account post specs into the ads tables
- Claim hubStudio buys, places or uploads ads
- Name any competitor or design tool
- Print any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Placement table with a source column
- Safe zone table per vertical placement
- Text limits table
- Minimum asset set table: ratio, placements covered
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-meta-ads-image-video-specs.webp`.
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
- Facebook post, Reel and Story specs: `/resources/insights/facebook-post-specs`
- Instagram Reels and Stories specs: `/resources/insights/instagram-reels-stories-specs`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- ad creative design service: `/services/design/ad-creative`
- platform specs hub: `/resources/specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Meta Ads Image and Video Specs for 2026 (39 chars) |
| Meta description | 152 chars | Facebook and Instagram ad specs for 2026, placement by placement from Meta's Ads Guide: sizes, safe zones, carousel, text limits, with a Reviewed date. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should Meta ads be in 2026?
2. What is the safe zone for Instagram and Facebook Reels ads?
3. Can one ad creative run on every Meta placement?
4. How many cards can a Meta carousel ad have?
5. What is the character limit for Facebook ad primary text?
6. Do Meta ads need an AI label?

## Notes

Spec page: Meta Ads Guide and Meta's help pages only. Visible Reviewed date. Watch row due 2027-02-24 for the quarterly recheck. Ads only; organic lives on facebook-post-specs and the two Instagram spec pages.

## Definition of done

- [ ] `research/meta-ads-image-video-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/meta-ads-image-video-specs.md` with `template: spec`
