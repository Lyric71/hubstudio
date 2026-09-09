---
brief_id: 18
publish_date: 2026-09-28
week: 03
slot: A
slot_job: the money page
cluster: Buying models
content_type: Money page
status: not_started
---

# BRIEF 18: Automation multiplies, studios originate: platform or production partner

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
| Working H1 | Automation multiplies, studios originate: platform or production partner |
| Slug | `/resources/insights/automation-platform-or-production-partner/` |
| Output file | `output/automation-platform-or-production-partner.md` |
| Research file | `research/automation-platform-or-production-partner.md` |
| Primary query | `creative automation platform vs production studio` |
| Secondary queries | `creative automation vs agency`, `creative automation platform limits`, `who makes the master creative` |
| SERP verdict | VACANT. Every ranking result is a software vendor comparing itself to other software vendors. The studio half of the query is unanswered |
| Body length | 3,000 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The argument no software vendor can make. Automation multiplies assets you already have. It cannot originate the master. So the real question is who makes the master, and at what cost.

## The research gate, before any drafting

No body copy until `research/automation-platform-or-production-partner.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `creative automation platform vs production studio` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/automation-platform-or-production-partner/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Layer costs carry category ranges with collection dates
- The originated against adapted ratio is described structurally unless a sourced figure exists

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What each layer genuinely does well, described as layers rather than products
- The handoff point between studio and platform
- Why the two are complementary, since the buyer usually already owns the stack
- A cost comparison of the two layers
- A decision table on volume, variation count, and how much of the work is originated against adapted

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any automation platform.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Layer diagram: originate, multiply, distribute, with the handoff marked
- Decision table: volume, variation count, originated share, which layer
- Cost comparison table, two layers
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
- AI excellence page: `/the-studio/ai-excellence`
- Pricing page: `/pricing`

## CTA

Final section only. CTA label: **Talk about the originate layer**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Automation Platform or Production Partner (41 chars) |
| Meta description | 152 chars | Automation multiplies assets you already have. It cannot originate the master. Where the handoff sits, what each layer costs, and a decision table. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can a creative automation platform replace a production studio?
2. What does creative automation actually do?
3. Who makes the master creative?
4. Do I need both a platform and a studio?
5. When is automation alone enough?

## Definition of done

- [ ] `research/automation-platform-or-production-partner.md` written before drafting, every claim marked
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
- [ ] File saved as `output/automation-platform-or-production-partner.md`
