---
brief_id: 15
publish_date: 2026-11-02
week: 08
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 15: In-house studio or outsourced production: the fully loaded model

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
| Working H1 | In-house studio or outsourced production: the fully loaded model |
| Slug | `/resources/insights/in-house-studio-vs-outsourced-production/` |
| Output file | `output/in-house-studio-vs-outsourced-production.md` |
| Research file | `research/in-house-studio-vs-outsourced-production.md` |
| Primary query | `in-house creative studio cost vs outsourcing` |
| Secondary queries | `in-house agency cost model`, `in-house studio vs agency cost`, `cost of running an in-house creative team` |
| SERP verdict | WEAK. Heavily written about, thinly evidenced, nobody publishes a loaded model |
| Body length | 2,900 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The costs in-house teams never book. Recruitment, idle capacity between campaigns, software seats, freelancer surge, and the share of headcount absorbed by trafficking and versioning rather than making anything.

## The research gate, before any drafting

No body copy until `research/in-house-studio-vs-outsourced-production.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `in-house creative studio cost vs outsourcing` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/in-house-studio-vs-outsourced-production/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- ANA in-house agency share, 82 percent, up from 78 percent in 2018, with the survey date and population stated
- Every line in the loaded model carries a category range and a collection date, or is labeled structural

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A fully loaded annual model with every line named
- The utilization question: what share of a salaried creative's year is on billable output
- The fixed against variable argument
- When in-house is genuinely right
- The hybrid model, platform plus studio, as the third option
- ANA data showing 82 percent of members run an in-house agency, up from 78 percent in 2018

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Fully loaded annual model, one table, every line named
- Decision table: volume, variation, originated against adapted, which model fits
- Chart: cost per asset against utilization rate
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

- hub4you platform: `/hub4you`
- Consulting solutions page: `/solutions/consulting`
- Quotation calculator: `/pricing/calculator`

## CTA

Final section only. CTA label: **Model it against your volume**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | In-House Studio or Outsourced Production (40 chars) |
| Meta description | 152 chars | The fully loaded annual model for an in-house creative studio, the costs nobody books, the utilization question, and when in-house is genuinely right. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Is an in-house studio cheaper than outsourcing?
2. What does a fully loaded in-house model include?
3. What utilization rate does an in-house team actually hit?
4. When does in-house production make sense?
5. What is the hybrid platform and studio model?

## Definition of done

- [ ] `research/in-house-studio-vs-outsourced-production.md` written before drafting, every claim marked
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
- [ ] File saved as `output/in-house-studio-vs-outsourced-production.md`
