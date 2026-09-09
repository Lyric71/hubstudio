---
brief_id: 07
publish_date: 2026-10-13
week: 05
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 07: RedNote note and cover specs, verified against the live app

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
| Working H1 | RedNote note and cover specs, verified against the live app |
| Slug | `/resources/insights/rednote-note-cover-specs/` |
| Output file | `output/rednote-note-cover-specs.md` |
| Research file | `research/rednote-note-cover-specs.md` |
| Primary query | `xiaohongshu image size note cover dimensions` |
| Secondary queries | `rednote image size`, `xiaohongshu cover size`, `xiaohongshu note dimensions`, `rednote video specs` |
| SERP verdict | CONTESTED. Several tool sites give 3:4 and 1080x1440, all uncited, one claiming verification against official docs while linking to none |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

The only version with screenshots from the live app and a maintained changelog. Win on proof, not on being first.

## The research gate, before any drafting

No body copy until `research/rednote-note-cover-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `xiaohongshu image size note cover dimensions` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/rednote-note-cover-specs/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Ratios and crop behavior, measured from live app captures with the app version and capture date stated

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Note image ratios and counts
- Cover crop behavior in feed against profile grid
- Video note specs
- Text safe areas
- How the cover is cropped differently in search
- A dated changelog block at the foot

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: surface, ratio, pixel size, crop behavior
- Live app screenshots: feed, profile grid, search, with the crop lines drawn on
- Changelog block, dated, updated in place
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

- RedNote platform page: `/solutions/platforms/rednote`
- Social media design service: `/services/design/social-media`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | RedNote Note and Cover Specs 2026 (33 chars) |
| Meta description | 152 chars | RedNote image ratios, cover crops in feed, profile and search, video note specs and text safe areas, verified against the live app with a changelog. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a RedNote cover image be?
2. What aspect ratio does RedNote use?
3. Why is my RedNote cover cropped differently in search?
4. How many images can a RedNote note have?
5. What are the RedNote video note specs?

## Definition of done

- [ ] `research/rednote-note-cover-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/rednote-note-cover-specs.md`
