---
brief_id: 13
publish_date: 2026-10-05
week: 04
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 13: What it costs to localize a global campaign for China

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
| Working H1 | What it costs to localize a global campaign for China |
| Slug | `/resources/insights/cost-to-localize-a-campaign-for-china/` |
| Output file | `output/cost-to-localize-a-campaign-for-china.md` |
| Research file | `research/cost-to-localize-a-campaign-for-china.md` |
| Primary query | `cost to localize a global campaign for China` |
| Secondary queries | `china campaign localization cost`, `adapt global campaign for china`, `china market campaign adaptation budget` |
| SERP verdict | VACANT for the production reading. SERP is translation SaaS and game-localization vendors |
| Body length | 3,000 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

Localizing for China is a re-shoot and re-layout problem, not a translation problem. Software cannot fake a stage. Every page holding this query prices words.

## The research gate, before any drafting

No body copy until `research/cost-to-localize-a-campaign-for-china.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `cost to localize a global campaign for China` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/cost-to-localize-a-campaign-for-china/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Each cost line carries a category range with a collection date, or is labeled as a structural cost with no published benchmark
- The asset count multiplier comes from the China variant matrix piece, cited by name

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The cost stack: adaptation, re-shoot, model recasting, platform variants, copy transcreation, compliance and labeling, upload QA
- Why a Western master usually cannot be re-cropped
- The asset count from the China variant matrix as the multiplier
- What a translation quote leaves out, itemised
- Two worked examples at different budget levels

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate. Send that to the calculator.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table in the first screen: cost line, what it covers, category range
- Table: what a translation quote includes against what a production quote includes
- Two worked examples, itemised
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
- Tmall platform page: `/solutions/platforms/tmall`
- Premium SUV case study: `/work/premium-suv`

## CTA

Final section only. CTA label: **Get a market range for your campaign**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Cost to Localize a Campaign for China (37 chars) |
| Meta description | 152 chars | China localization is a re-shoot and re-layout problem, not a translation one. The full cost stack, what a translation quote leaves out, two examples. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does it cost to adapt a campaign for China?
2. Is China localization just translation?
3. Why can a Western master not be re-cropped for China?
4. What does a translation quote leave out?
5. How many assets does a China adaptation produce?

## Notes

Most defensible query in the set.

## Definition of done

- [ ] `research/cost-to-localize-a-campaign-for-china.md` written before drafting, every claim marked
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
- [ ] File saved as `output/cost-to-localize-a-campaign-for-china.md`
