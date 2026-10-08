---
brief_id: 57
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 57: TikTok video specs and safe zones for 2026

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
| Working H1 | TikTok video specs and safe zones for 2026 |
| Slug | `/resources/insights/tiktok-video-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/tiktok-video-specs.md` |
| Research file | `research/tiktok-video-specs.md` |
| Hero image | `public/Images/insight-tiktok-video-specs.webp`, referenced as `/Images/insight-tiktok-video-specs.webp` |
| Primary query | `tiktok video specs` |
| Secondary queries | `tiktok video size`, `tiktok ad specs`, `tiktok safe zone`, `tiktok video length limit` |
| SERP verdict | Tool-vendor and agency guides rank, mixing organic and ad figures, printing device file caps and web upload limits no TikTok page states, and treating the safe zone as a blur; none measures TikTok's own template files or splits record, upload and ad lengths by source. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Organic and ad video specs from TikTok's own Help Center, TikTok For Business / TikTok Ads Manager help and the TikTok Creative Center only: ratio, resolution, length limits (record in app, upload, ads), file size and format, the in-feed safe zone, photo posts and carousel ads where officially published. Visible "Reviewed October 8, 2026". Primary, no deviation 7 disclaimer.

## The research gate, before any drafting

No body copy until `research/tiktok-video-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `tiktok video specs` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/tiktok-video-specs/` with a date. For a China platform, the
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

- Record in app up to 10 minutes, upload up to 60 minutes (TikTok Help Center, Camera tools)
- Auction in-feed: 9:16 at or above 540x960, up to 10 minutes, 500 MB, 516 kbps (Ads Manager help, June 2026)
- Reservation in-feed and TopView: 5 to 60 seconds, 9 to 15 recommended, 2,500 kbps (July 2025, June 2026)
- Safe zone insets measured from TikTok's in-feed template files

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table: surface, ratio, resolution, length, source
- Safe zone section, measured from TikTok's downloadable template files
- Organic against in-feed ad table
- Common upload failures from TikTok's own help pages
- How hubStudio publishes to TikTok, always labeled Beta, facts from src/content/help/tiktok.md and hubstudio-positioning.md only
- A dated changelog block
- Douyin as the China counterpart, linking the two Douyin spec insights

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print a file size, resolution or web upload limit that no TikTok page states (287.6 MB, 72 MB, 4 GB, 10 GB, 30 GB)
- Use a third-party safe-zone inset
- Put a TikTok figure on a Douyin row or a Douyin figure on a TikTok row
- Name any company other than the platforms
- State an amount or say credits

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Hero image
- Spec table
- File table
- Organic against ad table
- Safe zone table
- Changelog table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-tiktok-video-specs.webp`.
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

- TikTok platform page: `/solutions/platforms/tiktok`
- short video design service: `/services/design/short-video`
- publishing page of the app: `/app/publish`
- Douyin video specs and safe zones: `/resources/insights/douyin-video-specs-safe-zones`
- Douyin ad creative specs by format: `/resources/insights/douyin-ad-creative-specs-by-format`
- platform specs hub: `/resources/specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | TikTok Video Specs and Safe Zones for 2026 (42 chars) |
| Meta description | 152 chars | TikTok video and ad specs from TikTok's own help pages: ratio, size, length limits, file rules, and the safe zone measured from TikTok's templates. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a TikTok video be?
2. How long can a TikTok video be in 2026?
3. What is the TikTok safe zone in pixels?
4. What are the TikTok in-feed ad specs?
5. How many photos can a TikTok post have?
6. Why won't my TikTok video upload?
7. Can hubStudio post to TikTok for me?

## Notes

Quarterly recheck due 2027-01-08 (watch row in the run log).

## Definition of done

- [ ] `research/tiktok-video-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/tiktok-video-specs.md` with `template: spec`
