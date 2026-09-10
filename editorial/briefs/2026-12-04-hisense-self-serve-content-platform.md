---
brief_id: 48
publish_date: 2026-12-04
week: 12
slot: D
slot_job: the proof page
cluster: Proof
content_type: Proof page
status: not_started
---

# BRIEF 48: HiSense: eight weeks to a self-serve content platform

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
| Working H1 | HiSense: eight weeks to a self-serve content platform |
| Slug | `/resources/insights/hisense-self-serve-content-platform/` |
| Output file | `output/hisense-self-serve-content-platform.md` |
| Research file | `research/hisense-self-serve-content-platform.md` |
| Primary query | `self-serve ai content platform for brands` |
| Secondary queries | `brand ai content platform deployment`, `how long to deploy an ai content platform`, `agencies using a brand ai platform` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

The proof page for the HiSense deployment, built strictly from the published case study (eight weeks, thousands of assets a week, day-one generation, per-category adapter models, custom agents) attributed to the case page, plus independent context on what a self-serve brand platform deployment involves: adapter training per product line, governance, labeling and approval, from cleared research in briefs 24, 25 and 29.

## The research gate, before any drafting

No body copy until `research/hisense-self-serve-content-platform.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `self-serve ai content platform for brands` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/hisense-self-serve-content-platform/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Case figures attributed to the HiSense case study page, never described as measured with a method
- Any market ranking on the case page only with an independent tracker, its method and date, or cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Deployment table: what the case page publishes, and what is production practice
- What self-serve means for internal teams and outside agencies
- Governance and approval gates
- What the published figures measure and what they do not

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Add a HiSense figure, quote or detail the case page does not publish.
- Describe the figures as measured.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Deployment table
- Governance gates table
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

- HiSense case study: `/work/hisense`
- hub4you platform: `/hub4you`
- AI excellence page: `/the-studio/ai-excellence`
- Training a brand model article: `/resources/insights/training-a-brand-model-that-stays-on-brand`

## CTA

Final section only. CTA label: **See hub4you**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | HiSense: A Self-Serve Content Platform in 8 Weeks (49 chars) |
| Meta description | 152 chars | How HiSense went live on a self-serve, brand-trained content platform in eight weeks, what the published figures measure, and what deployment involves. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is a self-serve AI content platform?
2. How long does it take to deploy a brand AI content platform?
3. Can agencies use a brand's AI content platform?
4. How are brand models kept accurate to real products?
5. Who approves assets generated on a self-serve platform?

## Notes

Planning decision 2026-09-10: "rebuilt" in the calendar H1 described nothing the case page says, so the H1 and slug dropped it.

## Definition of done

- [ ] `research/hisense-self-serve-content-platform.md` written before drafting, every claim marked
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
- [ ] File saved as `output/hisense-self-serve-content-platform.md`
