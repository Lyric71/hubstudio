---
brief_id: 125
publish_date: 2026-12-15
week: 10
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 125: LinkedIn ad specs for 2026, format by format

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
| Working H1 | LinkedIn ad specs for 2026, format by format |
| Slug | `/resources/insights/linkedin-ads-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/linkedin-ads-specs.md` |
| Research file | `research/linkedin-ads-specs.md` |
| Hero image | `public/Images/insight-linkedin-ads-specs.webp`, referenced as `/Images/insight-linkedin-ads-specs.webp` |
| Primary query | `LinkedIn ads specs` |
| Secondary queries | `LinkedIn ad image size 2026`, `LinkedIn video ad specs`, `LinkedIn carousel ad specs`, `LinkedIn document ad specs`, `LinkedIn thought leader ad specs`, `LinkedIn ad character limits` |
| SERP verdict | Ad-tool vendors and size-guide blogs rank with one image size per format, mix organic post specs into ads, and rarely link to LinkedIn Marketing Solutions Help; none puts every Sponsored Content, Messaging and Dynamic format in one table with its copy limits, or flags which formats show on mobile only. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Every LinkedIn ad format in one table, read from LinkedIn Marketing Solutions Help and business.linkedin.com and dated: Sponsored Content (single image, video, carousel, document, event, thought leader), Messaging (conversation and message ads), Dynamic (follower and spotlight) and text ads, each with its files, ratios and copy limits. The organic post specs page covers posts plus single image, video and document ads; this page is the full ad set and links back to it. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/linkedin-ads-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `LinkedIn ads specs` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/linkedin-ads-specs/` with a date. For a China platform, the
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

- Each format's specs: its LinkedIn Marketing Solutions Help page, dated; business.linkedin.com ad spec pages as a second read
- Ledger rows from brief 63 for single image, video, document and carousel ads, re-read on both check dates
- hubStudio facts: linkedin.md, create-an-image.md, create-a-video.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A spec table for every ad format: format, ratios and recommended pixels, file types and size, length where it applies, copy limits, source page
- The ledger rows logged for brief 63 (a426534 single image, a424737 video, a493903 and a726534 document, a427022 carousel), read again on both check dates
- Formats the post specs page does not cover, each from its own LinkedIn Marketing Solutions Help page: event ads, thought leader ads, conversation ads, message ads, follower ads, spotlight ads, text ads; any newer format only if LinkedIn's own pages list it on the read date
- Copy limits per format: introductory text, headline, description and the call-to-action options, as LinkedIn states them
- Where LinkedIn's pages disagree (the video frame rate on the business page against the help page, logged for brief 63), print both and say which is newer
- What changes on mobile: vertical paid assets shown on mobile only, square and vertical cropped when shared organically, images under 401 px wide shown as a thumbnail
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the creative is made in the Image studio and the Video studio and framed in the Image editor; the LinkedIn module publishes organic posts to profiles and company pages, not ads, and takes no video from hubStudio yet; ad files are downloaded and uploaded in Campaign Manager by hand

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog or ad tool
- Claim hubStudio runs, buys or uploads LinkedIn ads, or reads ad results
- Restate organic post specs beyond a pointer to the post specs page
- Print a hubStudio amount
- Name any competitor or design tool
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: format, ratios and pixels, files, copy limits, source page
- Copy limits table: format, introductory text, headline, other fields
- Mobile behavior table: what LinkedIn changes on a phone and what to do
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-linkedin-ads-specs.webp`.
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
- Meta ads image and video specs: `/resources/insights/meta-ads-image-video-specs`
- LinkedIn platform page: `/solutions/platforms/linkedin`
- LinkedIn help in hubStudio: `/help/linkedin`
- ad creative service: `/services/design/ad-creative`
- platform specs hub: `/resources/specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | LinkedIn Ad Specs for 2026, Format by Format (44 chars) |
| Meta description | 152 chars | Every LinkedIn ad format in one 2026 table: image, video, carousel, document, event, thought leader, message and text ads, from LinkedIn's own pages. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a LinkedIn ad image be in 2026?
2. How long can a LinkedIn video ad be?
3. What are the LinkedIn carousel ad specs?
4. What is the character limit for LinkedIn ad copy?
5. Can I run vertical video ads on LinkedIn?
6. What are LinkedIn thought leader ads?

## Notes

Spec page: LinkedIn Marketing Solutions Help and business.linkedin.com only. Watch row due 2027-03-15. H1 says format by format because linkedin-post-specs already carries three ad formats; this page is the full ad set.

## Definition of done

- [ ] `research/linkedin-ads-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/linkedin-ads-specs.md` with `template: spec`
