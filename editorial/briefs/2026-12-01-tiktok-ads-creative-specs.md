---
brief_id: 111
publish_date: 2026-12-01
week: 08
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 111: TikTok ads creative specs for 2026, format by format

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
| Working H1 | TikTok ads creative specs for 2026, format by format |
| Slug | `/resources/insights/tiktok-ads-creative-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/tiktok-ads-creative-specs.md` |
| Research file | `research/tiktok-ads-creative-specs.md` |
| Hero image | `public/Images/insight-tiktok-ads-creative-specs.webp`, referenced as `/Images/insight-tiktok-ads-creative-specs.webp` |
| Primary query | `TikTok ads specs` |
| Secondary queries | `TikTok ad specs 2026`, `TikTok Spark Ads requirements`, `TikTok carousel ad specs`, `TikTok ad text character limit`, `TikTok ad review creative rejection` |
| SERP verdict | Ad-tech vendors and influencer platforms rank with one long table per format that mixes auction and reservation values, gives Spark authorization windows and carousel minimums without a link, and stops at sizes; none reads TikTok's ads help center format by format with dates, and none sets out the creative rules ad review applies beyond the file. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Ads only, format by format, every value from TikTok's ads help center and dated: auction in-feed, Spark Ads, carousel and image formats where offered, reservation in-feed, TopView, and the shopping formats where TikTok publishes them; then the ad text, display name and profile image fields, and the creative rules ad review applies (sound, resolution, what may cover the frame). The organic and base in-feed video specs stay on the TikTok video specs page.

## The research gate, before any drafting

No body copy until `research/tiktok-ads-creative-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `TikTok ads specs` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/tiktok-ads-creative-specs/` with a date. For a China platform, the
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

- Every format value: TikTok ads help center pages per format (ads.tiktok.com/help), with each page's updated date and the read date; ledger rows for auction in-feed (June 2026), reservation in-feed (July 2025), TopView (June 2026) and creative best practices (June 2025) reused only after a fresh read
- Spark Ads authorization rules and periods: TikTok ads help center, dated
- Ad review creative policies and the AIGC label: TikTok advertising policies and ads help center, dated
- hubStudio facts: tiktok.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A format table: format, buying type, ratio, resolution, length, file size and type, bitrate, sound rule, the TikTok page and its updated date
- Spark Ads: what the organic post must be, how authorization works and its periods, as TikTok states them
- Carousel and image formats: where they run, card counts, ratios, from TikTok's own pages
- TopView and reservation in-feed: the stricter rules (5 to 60 seconds with 9 to 15 recommended, sound required, the first-seconds rule on plain white) from the ledger rows, reread on the research date
- Ad text, display name, profile image and call-to-action fields with their limits
- Ad review: the creative requirements TikTok publishes (resolution, sound, black bars, misleading content, AI-generated content label), quoted as TikTok states them
- Safe zone: TikTok's own template files, as measured for the TikTok video specs page, linked rather than repeated
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the Video editor's Social panel frames a TikTok Video at 9:16, 1080 x 1920, shows in red what TikTok covers and runs checks with fixes; the TikTok module (always labeled Beta) publishes organic posts, which TikTok's own rules let an account use as Spark Ads in Ads Manager; hubStudio does not create, buy or place ads
- Douyin as the China counterpart, linking the Douyin ad creative specs piece

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog, ad-tech or influencer platform page
- Put a reservation or TopView value on an auction row, or a Douyin value on a TikTok row
- Print a third-party safe-zone inset
- Claim hubStudio makes, buys or boosts ads
- Name any company other than the platforms
- Print any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Format table with a source column
- Spark Ads requirements table
- Ad text and fields table
- Ad review creative rules table
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-tiktok-ads-creative-specs.webp`.
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

- TikTok video specs and safe zones: `/resources/insights/tiktok-video-specs`
- TikTok platform page: `/solutions/platforms/tiktok`
- Douyin ad creative specs by format: `/resources/insights/douyin-ad-creative-specs-by-format`
- Meta ads image and video specs: `/resources/insights/meta-ads-image-video-specs`
- ad creative design service: `/services/design/ad-creative`
- platform specs hub: `/resources/specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | TikTok Ads Creative Specs for 2026 (34 chars) |
| Meta description | 152 chars | TikTok ad specs for 2026 format by format from TikTok's ads help center: in-feed, Spark Ads, carousel, TopView, ad text limits and ad review rules. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What are the TikTok ad specs in 2026?
2. What are the requirements for TikTok Spark Ads?
3. What size is a TikTok carousel ad?
4. How long can a TikTok ad be?
5. What is the character limit for TikTok ad text?
6. Why was my TikTok ad rejected?

## Notes

Spec page: TikTok's ads help center and advertising policies only. Visible Reviewed date. Watch row due 2027-03-01 for the quarterly recheck. Distinct from brief 57 (organic and base in-feed video): this one covers every ad format and the ad fields and review rules.

## Definition of done

- [ ] `research/tiktok-ads-creative-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/tiktok-ads-creative-specs.md` with `template: spec`
