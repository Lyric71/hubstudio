---
brief_id: 10
publish_date: 2026-09-25
week: 02
slot: D
slot_job: the proof page
cluster: China specs
content_type: Linkable asset
status: not_started
---

# BRIEF 10: One shoot, six platforms: the China variant matrix

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
| Working H1 | One shoot, six platforms: the China variant matrix |
| Slug | `/resources/insights/one-shoot-six-platforms-china-variant-matrix/` |
| Output file | `output/one-shoot-six-platforms-china-variant-matrix.md` |
| Research file | `research/one-shoot-six-platforms-china-variant-matrix.md` |
| Primary query | `china social media creative asset variants` |
| Secondary queries | `china platform asset matrix`, `how many assets for china launch`, `china creative variants per sku` |
| SERP verdict | VACANT. Every result is a "top China platforms" listicle. Low search volume, high link value. A linkable asset, not a traffic play |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

Publish the actual matrix. One product shoot, six platforms, N ratios, M copy lengths, and the real asset count that comes out the other end. Everyone quotes "we adapt for every platform" and nobody has published what that number is.

## The research gate, before any drafting

No body copy until `research/one-shoot-six-platforms-china-variant-matrix.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `china social media creative asset variants` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/one-shoot-six-platforms-china-variant-matrix/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Every cell in the matrix traces to the corresponding spec piece in the cluster. Nothing enters this table that is not already verified on a spec page.
- The total asset count is derived arithmetic from the matrix, labeled as such, not a survey figure

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The matrix as one wide table, platform down, asset type across
- The total asset count for a single SKU launch
- Which cells are re-crops, which are re-edits, which need new capture
- What you must capture on the shoot day to serve all six

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The matrix, one wide table, five columns maximum, split across two tables if needed
- Table: cell type, re-crop, re-edit or new capture
- Shoot-day capture checklist
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. One number from hubStudio's delivery record with its method stated. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Solutions overview: `/solutions`
- AI image production: `/solutions/ai-production/image`
- DIY European retailer case study: `/work/diy-european-retailer`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | One Shoot, Six Platforms: China Matrix (38 chars) |
| Meta description | 152 chars | One product shoot across six Chinese platforms: the full variant matrix, the real asset count per SKU, and what to capture on the day to serve all six. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How many assets does one SKU need for China?
2. Can one shoot serve Tmall, JD, Douyin and RedNote?
3. Which China assets are re-crops and which need new capture?
4. What has to be captured on the shoot day?
5. How many aspect ratios does a China launch need?

## Definition of done

- [ ] `research/one-shoot-six-platforms-china-variant-matrix.md` written before drafting, every claim marked
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
- [ ] File saved as `output/one-shoot-six-platforms-china-variant-matrix.md`
