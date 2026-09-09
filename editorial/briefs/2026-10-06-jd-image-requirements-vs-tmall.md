---
brief_id: 04
publish_date: 2026-10-06
week: 04
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 04: JD image requirements, and the twelve places they differ from Tmall

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
| Working H1 | JD image requirements, and the twelve places they differ from Tmall |
| Slug | `/resources/insights/jd-image-requirements-vs-tmall/` |
| Output file | `output/jd-image-requirements-vs-tmall.md` |
| Research file | `research/jd-image-requirements-vs-tmall.md` |
| Primary query | `jd.com product image requirements` |
| Secondary queries | `jd image size`, `jingdong product image specs`, `jd vs tmall image requirements` |
| SERP verdict | VACANT. Two of five results are about a different company that shares the initials |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

The delta table nobody has published. A brand selling on both is producing two sets of assets and mostly does not know which parts actually differ.

## The research gate, before any drafting

No body copy until `research/jd-image-requirements-vs-tmall.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `jd.com product image requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/jd-image-requirements-vs-tmall/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- JD main image and detail page dimensions, from the JD seller backend only
- Ad slot ratios, from the JD ad platform documentation only

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- JD (京东) main image rules
- Detail page
- JD ad slot ratios (Jingzhuntong, Kuaiche)
- A side-by-side Tmall against JD table with a "same or different" column
- What has to be reshot against what can be re-cropped

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Delta table: spec, Tmall, JD, same or different
- Table: reshoot against re-crop, by asset type
- Annotated screenshot of the JD upload screen
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

- JD platform page: `/solutions/platforms/jd`
- Ecommerce design service: `/services/design/ecommerce`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | JD Image Requirements vs Tmall (30 chars) |
| Meta description | 152 chars | JD main image, detail page and ad slot specs, with a side-by-side Tmall delta table showing what has to be reshot and what can be re-cropped. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a JD main image be?
2. Are JD and Tmall image requirements the same?
3. What are the JD ad slot image ratios?
4. Can I reuse Tmall images on JD?
5. Which assets have to be reshot for JD?

## Definition of done

- [ ] `research/jd-image-requirements-vs-tmall.md` written before drafting, every claim marked
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
- [ ] File saved as `output/jd-image-requirements-vs-tmall.md`
