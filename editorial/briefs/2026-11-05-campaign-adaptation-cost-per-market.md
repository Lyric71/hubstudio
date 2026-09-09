---
brief_id: 16
publish_date: 2026-11-05
week: 08
slot: C
slot_job: the operations page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 16: Campaign adaptation cost: pricing one master across N markets

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
| Working H1 | Campaign adaptation cost: pricing one master across N markets |
| Slug | `/resources/insights/campaign-adaptation-cost-per-market/` |
| Output file | `output/campaign-adaptation-cost-per-market.md` |
| Research file | `research/campaign-adaptation-cost-per-market.md` |
| Primary query | `campaign adaptation cost per market` |
| Secondary queries | `toolkit adaptation cost`, `campaign versioning cost per market`, `master and adapt production cost` |
| SERP verdict | VACANT, and the query does not resolve: search returns media budget articles. Define the category |
| Body length | 2,500 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

Name the unit. One master, N markets, M formats, so a global brand can budget a toolkit rollout instead of guessing. The query does not resolve because the category has no agreed vocabulary yet.

## The research gate, before any drafting

No body copy until `research/campaign-adaptation-cost-per-market.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `campaign adaptation cost per market` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/campaign-adaptation-cost-per-market/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Each format family carries a category range with a collection date
- The linear against non-linear breakpoint is derived arithmetic, shown, not asserted

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The unit definition
- A rate structure by format family
- Where cost scales linearly with markets and where it does not
- Language, legal and platform variables
- A worked toolkit example at 12 markets
- The vocabulary buyers actually use: versioning, toolkit adaptation, master and adapt, so the page catches the real phrasings

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

- Answer table: format family, unit, what scales, what does not
- Worked example: one master, 12 markets, itemised
- Glossary table: the phrasings buyers use for the same thing
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

- Pricing page: `/pricing`
- Agencies solutions page: `/solutions/agencies`
- Quotation calculator: `/pricing/calculator`

## CTA

Final section only. CTA label: **Get a market range for your rollout**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Campaign Adaptation Cost per Market (35 chars) |
| Meta description | 152 chars | One master, N markets, M formats. The unit definition, a rate structure by format family, and where adaptation cost stops scaling linearly. (139 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does campaign adaptation cost per market?
2. What is a toolkit adaptation?
3. Does adaptation cost scale linearly with markets?
4. What drives adaptation cost up?
5. What is the difference between versioning and adaptation?

## Definition of done

- [ ] `research/campaign-adaptation-cost-per-market.md` written before drafting, every claim marked
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
- [ ] File saved as `output/campaign-adaptation-cost-per-market.md`
