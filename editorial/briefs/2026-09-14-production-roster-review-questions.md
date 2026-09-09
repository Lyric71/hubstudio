---
brief_id: 17
publish_date: 2026-09-14
week: 01
slot: A
slot_job: the money page
cluster: Buying models
content_type: Money page
status: not_started
---

# BRIEF 17: Your production roster is consolidating. The 14 questions to ask now

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
| Working H1 | Your production roster is consolidating. The 14 questions to ask now |
| Slug | `/resources/insights/production-roster-review-questions/` |
| Output file | `output/production-roster-review-questions.md` |
| Research file | `research/production-roster-review-questions.md` |
| Primary query | `production agency roster review checklist` |
| Secondary queries | `production partner review questions`, `creative roster consolidation`, `production agency review checklist` |
| SERP verdict | WEAK. Trade news covers the industry shift, nobody has written the buyer's instrument |
| Body length | 2,800 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

Production has moved from a network-distributed model, where each agency ran its own studio, to centralized units attached to platforms. That is an industry fact, stated without naming anyone. Consolidation triggers roster reviews, and roster reviews are when production budgets move. Be the instrument that runs the review.

## The research gate, before any drafting

No body copy until `research/production-roster-review-questions.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `production agency roster review checklist` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/production-roster-review-questions/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- ANA 2017 production transparency study: fewer than half of respondents required in-house bidding disclosure, over 60 percent did not require production rebates returned. Survey date and population stated.
- The centralization shift is described as a category pattern with no company named and no figure attached unless one can be sourced to a trade body

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What centralization changes in practice: who your producer reports to, what tooling your assets pass through, how utilization drives pricing
- The 14 questions in four groups: contract continuity, commercials, bidding conflict, platform and data exit
- A copyable scoring table
- The ANA 2017 production transparency findings
- The point that the questions apply to every partner on the roster, including hubStudio

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any holding company, production unit, rebrand, executive, financial result or website. The piece works on the pattern, not on an example.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The 14 questions, grouped, each with what a good answer sounds like and what a weak one sounds like
- Copyable scoring table, one row per question, three vendor columns
- Table: what centralization changes, before and after
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

- Brands solutions page: `/solutions/brands`
- Work index: `/work`
- Pricing page: `/pricing`

## CTA

Final section only. CTA label: **Book a roster review call**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | 14 Questions for a Production Roster Review (43 chars) |
| Meta description | 152 chars | Production is consolidating into centralized units. The 14 questions to ask every partner on your roster, grouped, with a copyable scoring table. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is a production roster review?
2. What changes when production consolidates?
3. What should I ask a production partner about bidding conflict?
4. How do I score production vendors consistently?
5. What is a production rebate?
6. Who owns my assets if I leave a production platform?

## Notes

Publish first. An earlier draft of this piece was built around a named company. It is void. Rewrite from this brief.

## Definition of done

- [ ] `research/production-roster-review-questions.md` written before drafting, every claim marked
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
- [ ] File saved as `output/production-roster-review-questions.md`
