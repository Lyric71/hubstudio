---
brief_id: 45
publish_date: 2026-11-30
week: 12
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 45: Digital humans in China: build cost, run cost and labeling rules

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
| Working H1 | Digital humans in China: build cost, run cost and labeling rules |
| Slug | `/resources/insights/digital-humans-in-china/` |
| Output file | `output/digital-humans-in-china.md` |
| Research file | `research/digital-humans-in-china.md` |
| Primary query | `digital human cost china` |
| Secondary queries | `virtual livestreamer cost china`, `ai digital human brand ambassador china`, `digital human livestream rules china` |
| SERP verdict | To be mapped at R2 |
| Body length | 3,000 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

What a brand digital human costs in China to build and to run (a custom presenter, its voice, livestream operation), from Chinese-language published rate cards and reports with a method, conflicts published and never averaged. Plus the rules: deep synthesis consent, the AI labeling measures, and livestream marketing rules on virtual hosts. Labeling is described as what the instruments say; allocating duties is ledger hard block 2.

## The research gate, before any drafting

No body copy until `research/digital-humans-in-china.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `digital human cost china` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/digital-humans-in-china/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Chinese rate cards as dated market claims, no vendor named
- Market reports only with sample and method
- Instruments read on the regulator's own site

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: licensed real-person replica, custom digital human, or generic avatar
- Build cost bands and run cost bands, Chinese sources first, conflicts published
- Rules table: instrument, article, issuing body, effective date
- The consent chain, reusing cleared rows from brief 26

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Allocate labeling duties or print a penalty figure.
- Name digital human vendors or livestream agencies.
- Average conflicting rate cards.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table
- Build and run cost table
- Rules table
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

- AI brand ambassadors article: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- China AI labeling rules article: `/resources/insights/china-ai-labeling-rules-production-workflow`
- AI video production: `/solutions/ai-production/video`
- Douyin platform page: `/solutions/platforms/douyin`

## CTA

Final section only. CTA label: **Scope a digital human**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Digital Humans in China: Cost and Rules (39 chars) |
| Meta description | 152 chars | What a brand digital human costs in China to build and to run, from published Chinese rate cards, plus the consent, labeling and livestream rules. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does a digital human cost in China?
2. What does it cost to run a virtual livestreamer?
3. Do digital humans in China need an AI label?
4. Can a digital human host a Douyin livestream?
5. Do I need consent to build a digital human from a real person?
6. Is a custom digital human cheaper than a celebrity?

## Notes

Planning decision 2026-09-10: "labeling duties" became "labeling rules", because allocating duties is ledger hard block 2.

## Definition of done

- [ ] `research/digital-humans-in-china.md` written before drafting, every claim marked
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
- [ ] File saved as `output/digital-humans-in-china.md`
