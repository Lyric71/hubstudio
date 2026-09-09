---
brief_id: 24
publish_date: 2026-09-24
week: 02
slot: C
slot_job: the operations page
cluster: Rights
content_type: Operations page
status: not_started
---

# BRIEF 24: The disclosure audit trail: what a pipeline records per asset

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
| Working H1 | The disclosure audit trail: what a pipeline records per asset |
| Slug | `/resources/insights/disclosure-audit-trail-per-asset/` |
| Output file | `output/disclosure-audit-trail-per-asset.md` |
| Research file | `research/disclosure-audit-trail-per-asset.md` |
| Primary query | `ai content disclosure audit trail production` |
| Secondary queries | `ai asset provenance record`, `ai content compliance record keeping`, `what to log per ai generated asset` |
| SERP verdict | VACANT |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

The operational layer law firms omit. What a production workflow has to record, per asset, to survive a disclosure audit in any jurisdiction. hubStudio's own audit trail is the worked example.

## The research gate, before any drafting

No body copy until `research/disclosure-audit-trail-per-asset.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `ai content disclosure audit trail production` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/disclosure-audit-trail-per-asset/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Each regime cited by instrument, issuing body and effective date
- The 90-day file retention figure is hubStudio policy: state it as policy, not as a legal requirement

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The record schema: model and version, prompt, reference images and their rights status, human edits, approver, date, destination markets
- How it is stored and for how long
- Who can ask for it and when
- The three regimes it has to satisfy at once, China labeling, EU AI Act Article 50, US state disclosure laws, as a table of what each asks for
- hubStudio's own audit trail as the worked example
- A plain line that this describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Interpret any of the three regimes beyond what the instrument itself says. Cite the article, not a commentary.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Record schema table: field, what it holds, why an auditor asks for it
- Table: the three regimes, what each asks for, what satisfies it
- The worked example: one asset, every field filled
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

- AI excellence page: `/the-studio/ai-excellence`
- Copyright and AI resource: `/resources/copyright-and-ai`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Talk about your pipeline**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | The AI Disclosure Audit Trail per Asset (39 chars) |
| Meta description | 152 chars | What a production pipeline records per asset to survive a disclosure audit: the record schema, retention, and the three regimes it has to satisfy. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What should be logged for every AI-generated asset?
2. How long do provenance records need to be kept?
3. Who can request an AI disclosure audit trail?
4. Does the EU AI Act require a per-asset record?
5. What does a complete provenance record look like?

## Definition of done

- [ ] `research/disclosure-audit-trail-per-asset.md` written before drafting, every claim marked
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
- [ ] File saved as `output/disclosure-audit-trail-per-asset.md`
