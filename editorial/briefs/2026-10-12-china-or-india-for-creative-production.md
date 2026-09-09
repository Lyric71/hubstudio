---
brief_id: 19
publish_date: 2026-10-12
week: 05
slot: A
slot_job: the money page
cluster: Buying models
content_type: Money page
status: not_started
---

# BRIEF 19: China or India for creative production: an honest comparison

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
| Working H1 | China or India for creative production: an honest comparison |
| Slug | `/resources/insights/china-or-india-for-creative-production/` |
| Output file | `output/china-or-india-for-creative-production.md` |
| Research file | `research/china-or-india-for-creative-production.md` |
| Primary query | `china vs india offshore creative production` |
| Secondary queries | `offshore creative production comparison`, `china vs india design outsourcing`, `where to offshore creative work` |
| SERP verdict | VACANT. Two of the top results are IT-outsourcing articles from the CIO and Computerworld era |
| Body length | 3,200 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The China-side case, argued by an operator that also runs Philippines operations and can therefore concede where India wins. Regions, not companies. Conceding first is what makes the rest credible.

## The research gate, before any drafting

No body copy until `research/china-or-india-for-creative-production.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `china vs india offshore creative production` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/china-or-india-for-creative-production/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Talent pool and cost figures carry a source, a date and a method, or are cut
- Where no comparable figure exists for both regions, say so rather than comparing unlike numbers

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An honest comparison table: cost, English fluency, time zones, talent pool scale, physical studio capacity, category proximity, IP and data, platform fluency
- Where India genuinely wins, stated first
- Where China wins: studio capacity, consumer electronics and beauty and fashion supply-chain proximity, native Douyin (抖音), RedNote (小红书) and Tmall (天猫) fluency
- The data and IP question handled directly rather than dodged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a single vendor in either country. The comparison is regional.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Comparison table: dimension, India, China, who wins and why
- Table: category proximity by vertical
- Checklist: the data and IP questions to ask either region
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

- Who we are: `/the-studio/who-we-are`
- Agencies solutions page: `/solutions/agencies`
- Pricing page: `/pricing`

## CTA

Final section only. CTA label: **Talk to the studio**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | China or India for Creative Production (38 chars) |
| Meta description | 152 chars | An honest regional comparison: cost, English fluency, studio capacity, category proximity, IP and data. Where India wins, stated first. (135 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Is China or India better for creative production?
2. Where does India win on creative outsourcing?
3. What is China better at for creative production?
4. How do IP and data rules differ?
5. Which region suits high-volume ecommerce content?

## Definition of done

- [ ] `research/china-or-india-for-creative-production.md` written before drafting, every claim marked
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
- [ ] File saved as `output/china-or-india-for-creative-production.md`
