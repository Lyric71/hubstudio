---
brief_id: 14
publish_date: 2026-10-26
week: 07
slot: A
slot_job: the money page
cluster: Cost
content_type: Money page
status: not_started
---

# BRIEF 14: The all-in cost of AI video, and what the dollar-an-ad math leaves out

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
| Working H1 | The all-in cost of AI video, and what the dollar-an-ad math leaves out |
| Slug | `/resources/insights/all-in-cost-of-ai-video/` |
| Output file | `output/all-in-cost-of-ai-video.md` |
| Research file | `research/all-in-cost-of-ai-video.md` |
| Primary query | `AI video production cost for brands` |
| Secondary queries | `ai video ad cost`, `cost of ai generated video`, `ai video production pricing` |
| SERP verdict | CONTESTED, but the ranking pages are conflicted: software vendors understate cost to sell seats |
| Body length | 2,700 words (body only, per the char-count rule) |
| Slot requirement | Decision table, cost-band section, FAQ block |

## The angle

The honest all-in figure, including the shot plates, direction, retakes, clearance and versioning that tool-side estimates leave out. A studio can publish this because it does not sell seats.

## The research gate, before any drafting

No body copy until `research/all-in-cost-of-ai-video.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI video production cost for brands` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/all-in-cost-of-ai-video/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- The dollar-to-five-dollars per ad figure is a circulating market claim: label it as a claim, then unpack what it excludes
- Retake and selection rate is hubStudio delivery data: state the method, the sample and the period
- Generation cost against total cost, as a ratio with the build shown

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A line-by-line build of a real 30-second AI-assisted brand film
- Generation cost against total cost as a ratio
- The retake and selection rate nobody publishes
- Rights clearance and talent releases as a cost line
- The circulating dollar-to-five-dollars per AI ad figure quoted as a market claim and then unpacked
- Where AI genuinely does cost a fraction, with the conditions attached

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a hubStudio rate.
- Name any AI video tool vendor, or characterise a specific one as understating cost. The pattern is the point.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Line-by-line build table for one 30-second film
- Table: what a tool-side estimate counts against what a delivered film costs
- Chart: generation cost as a share of total cost
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

- AI video production: `/solutions/ai-production/video`
- Video production service: `/services/design/video-production`
- Quotation calculator: `/pricing/calculator`

## CTA

Final section only. CTA label: **Get a market range for your video program**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | The All-In Cost of AI Video (27 chars) |
| Meta description | 152 chars | A line-by-line build of a 30-second AI-assisted brand film: what generation actually costs, and what the dollar-an-ad math leaves out. (134 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How much does an AI video ad cost?
2. Is AI video really a dollar per ad?
3. What does AI video generation not cover?
4. How many generations does one usable shot take?
5. When is AI video genuinely cheaper?

## Definition of done

- [ ] `research/all-in-cost-of-ai-video.md` written before drafting, every claim marked
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
- [ ] File saved as `output/all-in-cost-of-ai-video.md`
