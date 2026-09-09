---
brief_id: 30
publish_date: 2026-10-09
week: 04
slot: D
slot_job: the proof page
cluster: Craft
content_type: Proof page
status: not_started
---

# BRIEF 30: The 11.11 and 618 production calendar, counted backwards

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
| Working H1 | The 11.11 and 618 production calendar, counted backwards |
| Slug | `/resources/insights/singles-day-618-production-calendar/` |
| Output file | `output/singles-day-618-production-calendar.md` |
| Research file | `research/singles-day-618-production-calendar.md` |
| Primary query | `singles day 618 content production timeline` |
| Secondary queries | `double 11 content deadline`, `618 campaign production timeline`, `china sale event asset lock dates` |
| SERP verdict | VACANT. Results drift to Western event production and encyclopaedia entries |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

A real reverse-engineered calendar with lock dates, asset counts and approval gates counted backwards from the sale date. Every ranking page explains what Singles Day is. None says when your assets have to be locked.

## The research gate, before any drafting

No body copy until `research/singles-day-618-production-calendar.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `singles day 618 content production timeline` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/singles-day-618-production-calendar/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Platform milestone dates come from the platform seller announcements only, with the year stated, because they move annually
- Asset counts at each gate trace to the China variant matrix piece

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The full timeline as a table, week by week, from T minus 16 to launch
- The platform milestones: registration, pre-sale, warm-up, main sale, restock
- Asset counts at each gate
- What has to be locked before Chinese New Year in a 618 (六一八) cycle
- The two failure modes, late approval and late reshoot, and what they cost

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- The calendar as one table: week, milestone, what locks, asset count
- Table: failure mode, when it bites, what it costs
- Countdown checklist, copyable
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. One number from hubStudio's delivery record with its method stated. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Tmall platform page: `/solutions/platforms/tmall`
- Retailers solutions page: `/solutions/retailers`
- Ecommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Plan the cycle with us**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | The 11.11 and 618 Production Calendar (37 chars) |
| Meta description | 152 chars | A reverse-engineered production calendar for Singles Day and 618: lock dates, asset counts, approval gates, and the two failure modes that cost most. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. When do Singles Day assets have to be locked?
2. How long before 618 should production start?
3. What are the Tmall pre-sale milestones?
4. How does Chinese New Year affect a 618 cycle?
5. What happens if creative approval slips?

## Definition of done

- [ ] `research/singles-day-618-production-calendar.md` written before drafting, every claim marked
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
- [ ] File saved as `output/singles-day-618-production-calendar.md`
