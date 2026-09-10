---
brief_id: 46
publish_date: 2026-12-01
week: 12
slot: B
slot_job: the spec page
cluster: Playbook
content_type: Spec page
status: not_started
---

# BRIEF 46: Running a Tmall flagship's content, month by month

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
| Working H1 | Running a Tmall flagship's content, month by month |
| Slug | `/resources/insights/running-a-tmall-flagship-content/` |
| Output file | `output/running-a-tmall-flagship-content.md` |
| Research file | `research/running-a-tmall-flagship-content.md` |
| Primary query | `tmall store content calendar` |
| Secondary queries | `tmall annual promotion calendar`, `tmall flagship store operation plan`, `how often to refresh a tmall store` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

A year of Tmall flagship content: the platform's reported promotion calendar by month, with platform and year on every date, what each cycle asks of the store (decoration refresh, main image sets, detail pages, short video, livestream assets), and a month-by-month plan labeled production practice. Reuses the cleared calendar (brief 30), decoration (brief 03) and image collections (01, 02) by link and verbatim quote, never re-counting.

## The research gate, before any drafting

No body copy until `research/running-a-tmall-flagship-content.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `tmall store content calendar` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/running-a-tmall-flagship-content/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Promotion dates from Chinese press reporting the platform, with platform and year
- Spec values only as reused from the cleared collections, with the disclaimer

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Annual promotion table with reported dates and years
- Month-by-month content plan, labeled production practice
- What gets reused and what gets rebuilt per cycle
- A refresh checklist

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print a date without its platform and year.
- Present the plan as a platform requirement.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Annual promotion table
- Monthly plan table
- Refresh checklist
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. Spec table, annotated screenshot, rejection reasons, visible reviewed date. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Tmall platform page: `/solutions/platforms/tmall`
- Tmall flagship store decoration specs article: `/resources/insights/tmall-flagship-store-decoration-specs`
- 11.11 and 618 production calendar article: `/resources/insights/singles-day-618-production-calendar`
- Retailers solutions page: `/solutions/retailers`

## CTA

Final section only. CTA label: **Plan the year with us**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Running a Tmall Flagship's Content by Month (43 chars) |
| Meta description | 152 chars | A year of Tmall flagship content, month by month: the platform's reported promotion calendar, what each cycle asks of the store, and a refresh plan. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What are the main Tmall promotions each year?
2. How often should a Tmall store be redecorated?
3. What content does a Tmall flagship need each month?
4. How far ahead should Tmall campaign content be ready?
5. What can be reused between Tmall promotions?

## Definition of done

- [ ] `research/running-a-tmall-flagship-content.md` written before drafting, every claim marked
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
- [ ] File saved as `output/running-a-tmall-flagship-content.md`
