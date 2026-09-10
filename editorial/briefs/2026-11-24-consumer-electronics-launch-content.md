---
brief_id: 42
publish_date: 2026-11-24
week: 11
slot: B
slot_job: the spec page
cluster: Playbook
content_type: Spec page
status: not_started
---

# BRIEF 42: Consumer electronics launch content: the build, asset by asset

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
| Working H1 | Consumer electronics launch content: the build, asset by asset |
| Slug | `/resources/insights/consumer-electronics-launch-content/` |
| Output file | `output/consumer-electronics-launch-content.md` |
| Research file | `research/consumer-electronics-launch-content.md` |
| Primary query | `consumer electronics product launch content` |
| Secondary queries | `tech product launch asset list`, `simulated screen images in ads rules`, `electronics product photography requirements` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

The content build for a consumer electronics launch: the asset list, what has to be accurate (simulated screens, certification marks, claimed specs, energy labels), which parts can be generated and which must be captured, and a build plan labeled as production practice. HiSense and iFlytek AnyPin case figures run attributed to their case pages only.

## The research gate, before any drafting

No body copy until `research/consumer-electronics-launch-content.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `consumer electronics product launch content` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/consumer-electronics-launch-content/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Advertising rulings and codes on simulated screens and spec claims, read at source
- Energy label and marketplace category requirements reused from the cleared collections or read at source
- Case figures as the case pages publish them

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Asset list table
- Accuracy and compliance table: simulated screens, marks, specs, energy labels, each tied to a code or instrument
- Generate or capture by asset
- A build plan labeled production practice, not a benchmark

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim a fixed number of weeks as a benchmark.
- Add a case figure the case pages do not publish.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Asset list table
- Compliance table
- Build plan table
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

- HiSense case study: `/work/hisense`
- iFlytek AnyPin case study: `/work/iflytek-anypin`
- Manufacturers solutions page: `/solutions/manufacturers`
- Video production service: `/services/design/video-production`

## CTA

Final section only. CTA label: **Plan a launch build**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Consumer Electronics Launch Content, Asset by Asset (51 chars) |
| Meta description | 152 chars | What a consumer electronics launch needs: the asset list, what must be accurate on screens, marks and specs, what can be generated, and the build. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What content does a consumer electronics launch need?
2. Can product screens be simulated in ads?
3. How should certification marks appear in product images?
4. Which parts of a tech launch can be AI-generated?
5. How long does a launch content build take?

## Notes

Planning decision 2026-09-10: "the six-week build" had no source, so the H1 became "asset by asset".

## Definition of done

- [ ] `research/consumer-electronics-launch-content.md` written before drafting, every claim marked
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
- [ ] File saved as `output/consumer-electronics-launch-content.md`
