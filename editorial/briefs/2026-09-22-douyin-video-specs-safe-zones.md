---
brief_id: 05
publish_date: 2026-09-22
week: 02
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 05: Douyin video specs and safe zones: why a TikTok cut fails

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Douyin video specs and safe zones: why a TikTok cut fails |
| Slug | `/resources/insights/douyin-video-specs-safe-zones/` |
| Output file | `output/douyin-video-specs-safe-zones.md` |
| Research file | `research/douyin-video-specs-safe-zones.md` |
| Primary query | `douyin video specifications aspect ratio safe zone` |
| Secondary queries | `douyin video size`, `douyin safe zone`, `douyin aspect ratio`, `douyin video specs 2026` |
| SERP verdict | VACANT. Every top result is about TikTok |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

State plainly that Douyin (抖音) is not TikTok in UI overlay geometry, and publish an annotated safe-zone diagram with pixel offsets. The whole SERP answers a Douyin query with TikTok numbers.

## The research gate, before any drafting

No body copy until `research/douyin-video-specs-safe-zones.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `douyin video specifications aspect ratio safe zone` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/douyin-video-specs-safe-zones/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Overlay offsets, measured from live app captures at a stated device and resolution
- Codec, bitrate and file size caps, from the Douyin creator or Ocean Engine (巨量引擎) documentation only

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Resolution, aspect ratio, duration bands, codec, bitrate, file size
- The UI overlay map with top, bottom, right-rail and caption zones measured
- Where a TikTok master's captions and end cards land on Douyin
- Cover frame requirements
- Sound-on assumptions
- A re-export fix checklist

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Annotated safe-zone diagram with pixel offsets, device and resolution stated
- Spec table: field, value, source surface
- Side-by-side: the same master on TikTok and on Douyin, overlays shown
- Re-export checklist
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Spec table, annotated screenshot, rejection reasons, visible reviewed date. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Douyin platform page: `/solutions/platforms/douyin`
- Short video design service: `/services/design/short-video`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Douyin Video Specs and Safe Zones (33 chars) |
| Meta description | 152 chars | Douyin is not TikTok. Resolution, duration, codec and an annotated safe-zone map with pixel offsets, plus a re-export checklist for TikTok masters. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the Douyin safe zone?
2. Can I upload a TikTok video to Douyin?
3. What aspect ratio does Douyin use?
4. How long can a Douyin video be?
5. Where do Douyin captions and end cards get covered?

## Definition of done

- [ ] `research/douyin-video-specs-safe-zones.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] Chinese terms as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] File saved as `output/douyin-video-specs-safe-zones.md`
