---
brief_id: 59
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 59: YouTube Shorts specs for 2026

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
| Working H1 | YouTube Shorts specs for 2026 |
| Slug | `/resources/insights/youtube-shorts-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/youtube-shorts-specs.md` |
| Research file | `research/youtube-shorts-specs.md` |
| Hero image | `public/Images/insight-youtube-shorts-specs.webp`, referenced as `/Images/insight-youtube-shorts-specs.webp` |
| Primary query | `youtube shorts size` |
| Secondary queries | `youtube shorts length limit`, `youtube shorts aspect ratio`, `youtube shorts resolution` |
| SERP verdict | Tool-maker blogs own the SERP; several still say 60 seconds, call 9:16 mandatory, give a 1280x720 Shorts thumbnail, and none cites YouTube's help pages, the 1080p upload ceiling, the Content ID block on Shorts over a minute or the ads rule that only the first 60 seconds play. |
| Body length | 1,300 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Shorts specs from YouTube's own Help Center and YouTube blog only: what YouTube classifies as a Short (square or vertical, up to 3 minutes, since October 15, 2024), the 1080p upload ceiling, upload paths, thumbnail and cover behavior, and Shorts ads specs from Google Ads help. Visible "Reviewed October 8, 2026". Primary, no deviation 7 disclaimer.

## The research gate, before any drafting

No body copy until `research/youtube-shorts-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `youtube shorts size` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/youtube-shorts-specs/` with a date. For a China platform, the
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

- Shorts: square or vertical, up to 3 minutes, uploads on or after October 15, 2024 (YouTube Help)
- Shorts upload maximum resolution 1080p (YouTube Help)
- Shorts over one minute with an active Content ID claim are blocked globally per the English help page; the French version of the same page says new Shorts under three minutes are no longer blocked automatically from September 24, 2026: publish both (YouTube Help)
- Shorts thumbnail 9:16, 2160 x 3840, minimum height 640 px, desktop YouTube Studio, verified account (YouTube Help)
- Shorts ads up to 3 minutes, first 60 seconds play in the Shorts feed, 9:16 recommended, horizontal served with blurred top and bottom (Google Ads Help)
- Instagram Reels record up to 20 minutes, over 3 minutes not recommended to new audiences, ratio 1.91:1 to 9:16 (Instagram Help Center)
- TikTok Content Posting API: all creators 3 minutes, some 5 or 10 minutes (TikTok for Developers, August 4, 2026)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table with spec, value and source columns
- What makes YouTube treat an upload as a Short (ratio and length, the October 15, 2024 change, older uploads unchanged)
- Shorts vs Reels vs TikTok length and ratio table, values only from each platform's own pages, cited and scoped
- How hubStudio fits: Shorts autopilot makes the clips, the YouTube module prepares the post and the channel kit, the Short is published by hand in YouTube Studio (facts from src/content/help/youtube.md and shorts-autopilot.md only)
- Dated changelog block
- Visible Reviewed October 8, 2026

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- No competitor or tool maker named
- No deviation 7 disclaimer (Western platform pages are readable and primary)
- No 1080x1920 "recommended" figure attributed to YouTube: YouTube states a 1080p maximum, the pixel size is derived
- No claim that hubStudio uploads to YouTube or schedules a Short
- No hubStudio price or amount
- TikTok publishing in hubStudio is always labeled Beta

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Hero image
- Spec table
- Three-network table
- Changelog table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-youtube-shorts-specs.webp`.
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

- short video design service: `/services/design/short-video`
- the app's publishing page: `/app/publish`
- the YouTube help article: `/help/youtube`
- TikTok platform page: `/solutions/platforms/tiktok`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | YouTube Shorts Size, Length and Specs for 2026 (46 chars) |
| Meta description | 152 chars | YouTube Shorts size, length limit, aspect ratio and resolution, read from YouTube's own help pages, plus Shorts ads specs and a Reels and TikTok table. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a YouTube Short be?
2. How long can a YouTube Short be?
3. Does a YouTube Short have to be 9:16?
4. Can I upload a YouTube Short in 4K?
5. Can I upload YouTube Shorts from a computer?
6. How do I change a YouTube Shorts thumbnail?
7. How long can a YouTube Shorts ad be?
8. Why is my YouTube Short over a minute blocked?

## Notes

Quarterly recheck due 2027-01-08 (watch.csv). The specs hub /resources/specs is not built: the reference stays plain text until it is (settled fallback 5).

## Definition of done

- [ ] `research/youtube-shorts-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/youtube-shorts-specs.md` with `template: spec`
