---
brief_id: 47
publish_date: 2026-12-03
week: 12
slot: C
slot_job: the operations page
cluster: Operations
content_type: Operations page
status: not_started
---

# BRIEF 47: Retouch at volume: the QA pipeline, gate by gate

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
| Working H1 | Retouch at volume: the QA pipeline, gate by gate |
| Slug | `/resources/insights/retouch-at-volume-qa-pipeline/` |
| Output file | `output/retouch-at-volume-qa-pipeline.md` |
| Research file | `research/retouch-at-volume-qa-pipeline.md` |
| Primary query | `product photo retouching quality control process` |
| Secondary queries | `product image qa checklist`, `image retouching quality standards`, `batch retouching workflow ecommerce` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

The QA pipeline for retouching at catalog volume: gates from ingest to delivery (file and color checks, a color-managed workflow, the retouch spec, sampling inspection, marketplace compliance, final approval), with the sampling plan drawn from the published acceptance-sampling standard rather than a gut number, color management from the relevant standards, and marketplace rejection rules from the cleared collections.

## The research gate, before any drafting

No body copy until `research/retouch-at-volume-qa-pipeline.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `product photo retouching quality control process` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/retouch-at-volume-qa-pipeline/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Standards by designation and edition, read at source or on two standards-body surfaces
- Ledger rows reused with attribution

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Gate table: check, standard or tool, pass rule, owner
- A sampling plan table from the acceptance-sampling standard, labeled as the standard's
- A retouch spec template
- The per-image retouch rate band from the ledger, as a category figure
- Marketplace rejection reasons from the cleared collections and the Taobao AI fake-image rule

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print the 22 or 78 percent approval figures.
- Present the gate design as an industry standard beyond what the standards say.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Gate table
- Sampling plan table
- Retouch spec template
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

- Ecommerce design service: `/services/design/ecommerce`
- AI image production: `/solutions/ai-production/image`
- Tmall white background image rules article: `/resources/insights/tmall-white-background-image-rules`
- Training a brand model article: `/resources/insights/training-a-brand-model-that-stays-on-brand`

## CTA

Final section only. CTA label: **Run a retouch pilot**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Retouch at Volume: The QA Pipeline (34 chars) |
| Meta description | 152 chars | The QA pipeline for retouching product images at catalog volume: the gates, sampling plans from the published standard, and rejection rules. (140 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do you quality check thousands of retouched images?
2. What sample size should image QA use?
3. What goes in a retouching spec?
4. How much does product photo retouching cost?
5. Why do marketplaces reject retouched product images?

## Notes

Planning decision 2026-09-10: the calendar H1 carried the 78 percent approval figure, blocked in the ledger. The H1 became "gate by gate".

## Definition of done

- [ ] `research/retouch-at-volume-qa-pipeline.md` written before drafting, every claim marked
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
- [ ] File saved as `output/retouch-at-volume-qa-pipeline.md`
