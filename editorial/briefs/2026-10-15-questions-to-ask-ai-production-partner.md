---
brief_id: 22
publish_date: 2026-10-15
week: 05
slot: C
slot_job: the operations page
cluster: Buying models
content_type: Operations page
status: not_started
---

# BRIEF 22: Twelve questions to ask an AI-native production partner

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
| Working H1 | Twelve questions to ask an AI-native production partner |
| Slug | `/resources/insights/questions-to-ask-ai-production-partner/` |
| Output file | `output/questions-to-ask-ai-production-partner.md` |
| Research file | `research/questions-to-ask-ai-production-partner.md` |
| Primary query | `how to evaluate an AI content production partner` |
| Secondary queries | `ai production vendor questions`, `ai content partner evaluation`, `ai creative vendor due diligence` |
| SERP verdict | VACANT |
| Body length | 2,600 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

A procurement instrument, not a sales page. Written so a buyer can score three vendors with it, including hubStudio, and including questions hubStudio has to answer carefully.

## The research gate, before any drafting

No body copy until `research/questions-to-ask-ai-production-partner.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how to evaluate an AI content production partner` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/questions-to-ask-ai-production-partner/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Where a question references a regulation, cite the instrument, the issuing body and the effective date

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Twelve questions with, for each, what a good answer sounds like and what a weak one sounds like
- A scoring table the reader can copy
- Questions on model ownership, training data provenance, likeness rights, labeling and disclosure, capacity and surge, revision policy, physical capability, data residency, and who actually does the work

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Turn any question into a hubStudio advantage. If a question is one hubStudio answers awkwardly, say so.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The twelve questions, each with a good answer and a weak answer
- Copyable scoring table, three vendor columns
- Table: question, why it matters, what a bad answer costs you later
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
- Contact page: `/contact`
- Copyright and AI resource: `/resources/copyright-and-ai`

## CTA

Final section only. CTA label: **Put us through the list**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | 12 Questions for an AI Production Partner (41 chars) |
| Meta description | 152 chars | A procurement instrument for scoring AI production vendors: twelve questions, what a good answer sounds like, and a scoring table you can copy. (143 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I evaluate an AI content production partner?
2. Who owns a custom-trained brand model?
3. What should I ask about training data provenance?
4. How do I check likeness rights on AI talent?
5. What questions cover data residency?
6. How do I compare three AI vendors fairly?

## Definition of done

- [ ] `research/questions-to-ask-ai-production-partner.md` written before drafting, every claim marked
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
- [ ] File saved as `output/questions-to-ask-ai-production-partner.md`
