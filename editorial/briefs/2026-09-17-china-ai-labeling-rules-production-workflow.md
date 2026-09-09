---
brief_id: 23
publish_date: 2026-09-17
week: 01
slot: C
slot_job: the operations page
cluster: Rights
content_type: Operations page
status: not_started
---

# BRIEF 23: China's AI labeling rules: what your production workflow has to do

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
| Working H1 | China's AI labeling rules: what your production workflow has to do |
| Slug | `/resources/insights/china-ai-labeling-rules-production-workflow/` |
| Output file | `output/china-ai-labeling-rules-production-workflow.md` |
| Research file | `research/china-ai-labeling-rules-production-workflow.md` |
| Primary query | `china ai content labeling rules for brands` |
| Secondary queries | `china ai labeling workflow`, `cac ai labeling measures brands`, `gb 45438-2025 production` |
| SERP verdict | Operational tail of a hard legal head |
| Body length | 2,400 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

Law firms own the legal head term and will keep it. Nobody has written what a production workflow actually has to do: where each label attaches, and where it gets lost. This is production practice, not legal advice, and the page says so plainly.

## The research gate, before any drafting

No body copy until `research/china-ai-labeling-rules-production-workflow.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `china ai content labeling rules for brands` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/china-ai-labeling-rules-production-workflow/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- CAC Measures for Labeling of AI-Generated Synthetic Content, issued 14 March 2025 by CAC, MIIT, MPS and NRTA, effective 1 September 2025, with mandatory national standard GB 45438-2025 in force the same day
- Two label layers: explicit (visible mark, opening-frame mark on video, voice cue on audio) and implicit (metadata carrying content attribute, provider name or code, content ID)
- Users must proactively declare. Removing, altering, forging or concealing a label is prohibited, as is supplying tools to do so
- Distribution platforms verify metadata and add notices in three cases: confirmed, declared, suspected
- February 2026 enforcement figures, from the original release, with the date and the issuing body

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A workflow diagram from generation through retouch, versioning, upload and archive, showing where each label attaches and where it can be lost
- What an asset handover pack has to contain
- The export-survives-download requirement and what it means for file formats
- The February 2026 enforcement figures, sourced
- A plain line that this describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a fine figure. Penalties are not specified as a new schedule and enforcement runs through existing instruments.
- Write "requires" about the allocation of duties between brand, agency and tool vendor. Write "generally treated as". That allocation is law-firm interpretation, not an explicit regulator statement.
- Compete with a law firm on the legal head term.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Workflow diagram: generation to archive, label attach and label loss points marked
- Table: pipeline stage, explicit label, implicit label, survives or lost
- Handover pack contents list
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. A workflow, checklist or document structure the reader can use tomorrow. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Copyright and AI resource: `/resources/copyright-and-ai`
- Douyin platform page: `/solutions/platforms/douyin`
- AI excellence page: `/the-studio/ai-excellence`

## CTA

Final section only. CTA label: **Talk about your pipeline**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China AI Labeling Rules for Production (38 chars) |
| Meta description | 152 chars | What China's AI labeling rules mean for a production workflow: where each label attaches, where it gets stripped, and what a handover pack must carry. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What do China's AI labeling rules require?
2. What is the difference between an explicit and an implicit label?
3. Where does an AI label get lost in a production pipeline?
4. Who is responsible for labeling, the brand or the agency?
5. What has to be in an asset handover pack?
6. Does the label have to survive download?

## Definition of done

- [ ] `research/china-ai-labeling-rules-production-workflow.md` written before drafting, every claim marked
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
- [ ] File saved as `output/china-ai-labeling-rules-production-workflow.md`
