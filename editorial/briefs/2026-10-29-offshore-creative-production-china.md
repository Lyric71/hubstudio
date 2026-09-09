---
brief_id: 20
publish_date: 2026-10-29
week: 07
slot: C
slot_job: the operations page
cluster: Buying models
content_type: Operations page
status: not_started
---

# BRIEF 20: Offshore creative production in China: what it means in 2026

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
| Working H1 | Offshore creative production in China: what it means in 2026 |
| Slug | `/resources/insights/offshore-creative-production-china/` |
| Output file | `output/offshore-creative-production-china.md` |
| Research file | `research/offshore-creative-production-china.md` |
| Primary query | `offshore creative production china` |
| Secondary queries | `china creative outsourcing`, `offshore design studio china`, `china production partner models` |
| SERP verdict | WEAK. The head term is held by India and Philippines coverage with no China facility story |
| Body length | 2,600 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

Take the geographic long tail rather than the head term. Nobody holding this query has a China facility to describe.

## The research gate, before any drafting

No body copy until `research/offshore-creative-production-china.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `offshore creative production china` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/offshore-creative-production-china/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- The circulating 40 percent offshore savings figure is a market claim published as a percentage with no absolute figures and no sample size: label it as such, then examine what it excludes

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What offshore production actually looks like in China in 2026
- The models available: dedicated team, project, platform
- The 40 percent savings figure that circulates in the category, quoted as a market claim and then examined
- Data, contracting and payment mechanics
- How to run a pilot

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name the source of the 40 percent claim, or any vendor.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Table: the three engagement models, what you buy, what you manage
- Pilot plan: weeks, gates, what to measure
- Checklist: data, contracting and payment questions
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

- The studio: `/the-studio`
- Pricing page: `/pricing`
- Agencies solutions page: `/solutions/agencies`

## CTA

Final section only. CTA label: **Scope a pilot**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Offshore Creative Production in China (37 chars) |
| Meta description | 152 chars | What offshore creative production in China looks like in 2026: the three engagement models, the 40 percent savings claim examined, and how to pilot. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is offshore creative production in China?
2. Does offshore production really save 40 percent?
3. What engagement models are available?
4. How does data and IP work with a China studio?
5. How do I run a pilot before committing?

## Definition of done

- [ ] `research/offshore-creative-production-china.md` written before drafting, every claim marked
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
- [ ] File saved as `output/offshore-creative-production-china.md`
