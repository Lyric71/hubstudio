---
brief_id: 02
publish_date: 2026-09-29
week: 03
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 02: The white-background image: the Tmall rule most brands fail

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
| Working H1 | The white-background image: the Tmall rule most brands fail |
| Slug | `/resources/insights/tmall-white-background-image-rules/` |
| Output file | `output/tmall-white-background-image-rules.md` |
| Research file | `research/tmall-white-background-image-rules.md` |
| Primary query | `tmall white background image rules` |
| Secondary queries | `tmall white background image`, `baidi tu requirements`, `tmall search image rules` |
| SERP verdict | VACANT. SERP drifts to Amazon and to background-removal tools |
| Body length | 1,400 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

Own the concept. The fifth image is a white-background image (白底图) with its own separate rule set, and no English page explains that it exists, let alone what it does in search and recommendation.

## The research gate, before any drafting

No body copy until `research/tmall-white-background-image-rules.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `tmall white background image rules` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/tmall-white-background-image-rules/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- RGB value and prohibited elements, from the platform rule pages only
- Fill ratio, primary capture only, otherwise the range

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What a white-background image (白底图) is and where it surfaces in search and recommendation
- Pure white, RGB 255
- No text, watermark, logo, border, shadow or model
- Fill ratio guidance with the confidence caveat attached
- A before and after
- What happens to a listing that fails it

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- State a fill ratio as a hard cap without primary confirmation. Publish the range and the conflict.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Before and after pair: a failing image and the corrected version
- Table: element, allowed or prohibited, why
- Screenshot of where the white-background image surfaces in the app
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

- Tmall platform page: `/solutions/platforms/tmall`
- AI image production: `/solutions/ai-production/image`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Tmall White Background Image Rules (34 chars) |
| Meta description | 152 chars | The white-background image is a separate Tmall requirement with its own rules. What it is, what it forbids, and what fails a listing. (133 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is a white-background image on Tmall?
2. Does the white background have to be pure white?
3. Can a model appear in a white-background image?
4. Where does Tmall use the white-background image?
5. What happens if the white-background image is rejected?

## Definition of done

- [ ] `research/tmall-white-background-image-rules.md` written before drafting, every claim marked
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
- [ ] File saved as `output/tmall-white-background-image-rules.md`
