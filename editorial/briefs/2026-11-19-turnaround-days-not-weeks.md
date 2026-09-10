---
brief_id: 39
publish_date: 2026-11-19
week: 10
slot: C
slot_job: the operations page
cluster: Operations
content_type: Operations page
status: not_started
---

# BRIEF 39: Turnaround: what days not weeks means, stage by stage

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
| Working H1 | Turnaround: what days not weeks means, stage by stage |
| Slug | `/resources/insights/turnaround-days-not-weeks/` |
| Output file | `output/turnaround-days-not-weeks.md` |
| Research file | `research/turnaround-days-not-weeks.md` |
| Primary query | `content production turnaround time` |
| Secondary queries | `creative production timeline by stage`, `how long does a product photoshoot take`, `ai content production timeline` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

A stage-by-stage timeline for a production engagement (brief, proposal, scope, capture or model training, generation, review rounds, retouch, delivery): what compresses, what does not, and where the calendar actually goes, which is review and approval. hubStudio's published timelines (the 48-hour binding proposal, three revision rounds, three to six weeks of model training, case study durations) run only attributed to their pages. Industry timing figures need a method.

## The research gate, before any drafting

No body copy until `research/turnaround-days-not-weeks.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `content production turnaround time` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/turnaround-days-not-weeks/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- First-party timelines attributed to the page that publishes each
- Any industry turnaround or approval-cycle figure needs a sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A stage table: what happens, what compresses, what does not, who owns the delay
- The arithmetic of review rounds
- A turnaround checklist the reader can use tomorrow
- Case study durations, attributed and never presented as typical

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Present a case duration as typical or as a benchmark.
- Promise a turnaround.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Stage table
- Review-round arithmetic table
- Turnaround checklist
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
- AI excellence page: `/the-studio/ai-excellence`
- Work index: `/work`
- Subscription or managed production article: `/resources/insights/subscription-or-managed-production`

## CTA

Final section only. CTA label: **Check a timeline**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Content Production Turnaround, Stage by Stage (45 chars) |
| Meta description | 152 chars | Where the days go in a content production engagement, stage by stage: what compresses, what cannot, and why review rounds set the calendar. (139 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How long does content production take?
2. What slows down a creative production project?
3. How many revision rounds are normal?
4. How fast can AI content production turn around?
5. How do I shorten approval time?

## Definition of done

- [ ] `research/turnaround-days-not-weeks.md` written before drafting, every claim marked
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
- [ ] File saved as `output/turnaround-days-not-weeks.md`
