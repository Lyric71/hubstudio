---
brief_id: 41
publish_date: 2026-11-23
week: 11
slot: A
slot_job: the money page
cluster: Operations
content_type: Money page
status: not_started
---

# BRIEF 41: What a 48-hour binding proposal contains

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
| Working H1 | What a 48-hour binding proposal contains |
| Slug | `/resources/insights/what-a-48-hour-binding-proposal-contains/` |
| Output file | `output/what-a-48-hour-binding-proposal-contains.md` |
| Research file | `research/what-a-48-hour-binding-proposal-contains.md` |
| Primary query | `what should a creative production proposal include` |
| Secondary queries | `production quote vs estimate`, `creative production proposal template`, `binding quote creative services` |
| SERP verdict | To be mapped at R2 |
| Body length | 2,800 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

What a binding production proposal should contain, line by line, so a buyer can compare any proposal, including hubStudio's: deliverables defined as units, inclusions and exclusions, revision rounds, rights and usage, timeline and dependencies, acceptance, change control and payment terms, and what binding actually commits a supplier to. hubStudio's 48-hour binding proposal and three revision rounds are published policy and run only as policy.

## The research gate, before any drafting

No body copy until `research/what-a-48-hour-binding-proposal-contains.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `what should a creative production proposal include` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/what-a-48-hour-binding-proposal-contains/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Ledger category ranges and bid form rows reused with attribution
- Any definition of quote, estimate or binding offer from a primary or trade-body source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: binding proposal, estimate or retainer
- Proposal anatomy table, section by section
- An exclusions checklist
- Cost-band section from ledger category ranges and the trade-body bid form

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate or sample price.
- Present binding as a legal term of art without a source.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Proposal anatomy table
- Exclusions checklist
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

- Pricing page: `/pricing`
- Production cost estimator: `/resources/production-cost`
- What a finished brand asset costs article: `/resources/insights/what-a-finished-brand-asset-costs`
- Contact page: `/contact`

## CTA

Final section only. CTA label: **Get a binding proposal**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | What a Binding Production Proposal Contains (43 chars) |
| Meta description | 152 chars | What a binding creative production proposal should spell out: units, inclusions, exclusions, revision rounds, rights, timeline and change control. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What should a creative production proposal include?
2. What is the difference between a quote and an estimate?
3. What does a binding proposal commit the studio to?
4. How many revision rounds should a proposal include?
5. What is usually excluded from a production quote?
6. How fast should a production proposal come back?

## Definition of done

- [ ] `research/what-a-48-hour-binding-proposal-contains.md` written before drafting, every claim marked
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
- [ ] File saved as `output/what-a-48-hour-binding-proposal-contains.md`
