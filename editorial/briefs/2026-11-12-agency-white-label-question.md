---
brief_id: 35
publish_date: 2026-11-12
week: 09
slot: C
slot_job: the operations page
cluster: Buying models
content_type: Operations page
status: not_started
---

# BRIEF 35: The agency white-label question: NDA, contact rules, margin per asset

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The agency white-label question: NDA, contact rules, margin per asset |
| Slug | `/resources/insights/agency-white-label-question/` |
| Output file | `output/agency-white-label-question.md` |
| Research file | `research/agency-white-label-question.md` |
| Primary query | `white label creative production for agencies` |
| Secondary queries | `white label production nda`, `white label agency client contact rules`, `agency margin on outsourced production` |
| SERP verdict | WEAK, per Part 1.5: software and two small studios |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

An operations page for agency owners buying white-label production: what the NDA has to cover, the client contact rules (who may speak to whom, non-solicitation), how IP and model ownership pass through two contracts, and how to think about margin per asset without anyone publishing a rate. Contract content is production practice, not legal advice. hubStudio's agencies page makes white-label promises; they run only as published policy attributed to that page.

## The research gate, before any drafting

No body copy until `research/agency-white-label-question.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `white label creative production for agencies` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/agency-white-label-question/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Any markup or margin figure needs a trade-body study with a method, or it is cut
- Reuse the cleared copyright and likeness rows from briefs 22 and 26

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An NDA clause checklist
- A client contact rules table: allowed, needs consent, never
- The ownership chain for work and trained models across the agency and supplier contracts
- A margin section built from method-stated category data, or a worked structure with no numbers if none exists
- Disclosure of AI use to the end client, labeling described as generally treated as

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate, wholesale price or margin.
- State what a court would enforce.
- Allocate AI labeling duties.
- Quote the approval-rate figure on the partner program page.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- NDA checklist
- Contact rules table
- Ownership chain across two contracts
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

- Agencies solutions page: `/solutions/agencies`
- Partner program: `/partner-program`
- hub4you platform: `/hub4you`
- Questions to ask an AI production partner article: `/resources/insights/questions-to-ask-ai-production-partner`

## CTA

Final section only. CTA label: **Start a white-label brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | White-Label Production for Agencies: The Rules (46 chars) |
| Meta description | 152 chars | What an agency buying white-label production needs in writing: the NDA, client contact rules, who owns the work and model, and how to set margin. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What should a white-label production NDA cover?
2. Can a white-label studio contact my client?
3. Who owns work made under a white-label agreement?
4. How do agencies set margin on outsourced production?
5. Do my clients need to know AI was used?

## Definition of done

- [ ] `research/agency-white-label-question.md` written before drafting, every claim marked
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
- [ ] File saved as `output/agency-white-label-question.md`
