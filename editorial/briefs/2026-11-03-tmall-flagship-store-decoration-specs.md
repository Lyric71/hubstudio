---
brief_id: 03
publish_date: 2026-11-03
week: 08
slot: B
slot_job: the spec page
cluster: China specs
content_type: Spec page
status: not_started
---

# BRIEF 03: Tmall flagship store decoration specs, module by module

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
| Working H1 | Tmall flagship store decoration specs, module by module |
| Slug | `/resources/insights/tmall-flagship-store-decoration-specs/` |
| Output file | `output/tmall-flagship-store-decoration-specs.md` |
| Research file | `research/tmall-flagship-store-decoration-specs.md` |
| Primary query | `tmall flagship store banner size specifications` |
| Secondary queries | `tmall store decoration size`, `tmall shop banner dimensions`, `tmall store module specs` |
| SERP verdict | VACANT. A physical signage vendor ranks in the top five |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

A real module-by-module spec sheet, PC against mobile, that a designer can build from without opening the backend.

## The research gate, before any drafting

No body copy until `research/tmall-flagship-store-decoration-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `tmall flagship store banner size specifications` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/tmall-flagship-store-decoration-specs/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Module dimensions, from the store decoration backend only
- Mobile share of Tmall traffic, category source with a date and a method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Header and banner dimensions
- Floor module sizes
- Navigation
- Live tab
- The mobile-first reality of Tmall traffic
- How a 618 (六一八) or Singles Day (双十一) skin differs from an always-on store
- An asset checklist for a full store refresh

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: module, PC size, mobile size, notes
- Annotated screenshot of the decoration backend
- Checklist: every asset a full store refresh needs
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
- Brands solutions page: `/solutions/brands`
- China spec library hub: `/resources/specs`

## CTA

Final section only. CTA label: **Talk to the production team**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Tmall Flagship Store Decoration Specs (37 chars) |
| Meta description | 152 chars | Module-by-module Tmall store specs, PC and mobile: header, banners, floor modules, navigation, live tab, plus a full refresh asset checklist. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size is a Tmall store banner?
2. Do Tmall store modules differ between mobile and PC?
3. How many assets does a Tmall store refresh need?
4. How does a Singles Day store skin differ from an always-on store?
5. Can one design serve both the store and the listing pages?

## Definition of done

- [ ] `research/tmall-flagship-store-decoration-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/tmall-flagship-store-decoration-specs.md`
