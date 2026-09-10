---
brief_id: 37
publish_date: 2026-11-16
week: 10
slot: A
slot_job: the money page
cluster: Buying models
content_type: Money page
status: not_started
---

# BRIEF 37: Procurement's guide to buying AI content production

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | procurement |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Procurement's guide to buying AI content production |
| Slug | `/resources/insights/procurement-guide-buying-ai-content-production/` |
| Output file | `output/procurement-guide-buying-ai-content-production.md` |
| Research file | `research/procurement-guide-buying-ai-content-production.md` |
| Primary query | `how to procure ai content production` |
| Secondary queries | `ai content production rfp`, `statement of work ai creative services`, `ai production vendor scoring` |
| SERP verdict | To be mapped at R2 |
| Body length | 3,000 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The documents procurement needs to buy AI content production: RFP sections, the unit definitions a statement of work needs (asset, variant, revision round, usable second), a weighted scoring table, the contract clauses for rights, model ownership, training data, labeling and data security, and a cost-band section with category figures only. The twelve questions article is a conversation guide and the roster review article is a consolidation decision; this page is the paperwork, and links to both.

## The research gate, before any drafting

No body copy until `research/procurement-guide-buying-ai-content-production.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how to procure ai content production` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/procurement-guide-buying-ai-content-production/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Category ranges reused from the ledger with their attribution
- Standards cited by designation and edition date
- Trade-body production transparency and bid form rows reused from the ledger

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: buying model by need
- RFP section list
- Statement of work unit definitions table
- A weighted scoring table the reader can copy
- Contract clause checklist
- Cost-band section from ledger category ranges

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Score or recommend hubStudio.
- Repeat the twelve questions or the roster review; link them.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- SOW unit definitions table
- Weighted scoring table
- Contract clause checklist
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Decision table, cost-band section, FAQ block. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Questions to ask an AI production partner article: `/resources/insights/questions-to-ask-ai-production-partner`
- Production roster review article: `/resources/insights/production-roster-review-questions`
- Pricing page: `/pricing`
- Production cost estimator: `/resources/production-cost`

## CTA

Final section only. CTA label: **Send us your RFP**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Procurement's Guide to AI Content Production (44 chars) |
| Meta description | 152 chars | The documents procurement needs to buy AI content production: RFP sections, statement of work units, a weighted scoring table, clauses and cost bands. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write an RFP for AI content production?
2. What units should an AI production statement of work use?
3. How should procurement score AI production vendors?
4. Which contract clauses matter for AI-generated content?
5. What does AI content production cost?
6. Who owns models trained during an engagement?

## Definition of done

- [ ] `research/procurement-guide-buying-ai-content-production.md` written before drafting, every claim marked
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
- [ ] File saved as `output/procurement-guide-buying-ai-content-production.md`
