---
brief_id: 44
publish_date: 2026-11-27
week: 11
slot: D
slot_job: the proof page
cluster: Operations
content_type: Proof page
status: not_started
---

# BRIEF 44: Transcreation as a production line, not a translation service

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
| Working H1 | Transcreation as a production line, not a translation service |
| Slug | `/resources/insights/transcreation-as-a-production-line/` |
| Output file | `output/transcreation-as-a-production-line.md` |
| Research file | `research/transcreation-as-a-production-line.md` |
| Primary query | `transcreation process for marketing` |
| Secondary queries | `transcreation vs translation`, `transcreation workflow steps`, `how is transcreation priced` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | One number from hubStudio's delivery record with its method stated |

## The angle

Transcreation run as a production line rather than bought per word: the stages, the roles, the standards that exist for translation services and post-editing, the handoffs where meaning gets lost, and how copy and image get adapted together. Category rate bands from the ledger run with their no-method note.

## The research gate, before any drafting

No body copy until `research/transcreation-as-a-production-line.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `transcreation process for marketing` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/transcreation-as-a-production-line/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Standards cited by designation and edition
- Ledger translation band and the advertiser trade body GenAI translation adoption row reused

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Stage table: brief, source analysis, adaptation, copy, visual adaptation, review, compliance check
- Translation, transcreation and localization defined from standards bodies or professional associations
- A transcreation brief template
- How pricing structure differs, per word against per project, with category bands only

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name translation or localization vendors.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Stage table
- Definitions table
- Brief template
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

- AI content production: `/solutions/ai-production/content`
- Cost to localize a campaign for China article: `/resources/insights/cost-to-localize-a-campaign-for-china`
- Campaign adaptation cost per market article: `/resources/insights/campaign-adaptation-cost-per-market`
- Brands solutions page: `/solutions/brands`

## CTA

Final section only. CTA label: **Adapt a campaign**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Transcreation as a Production Line (34 chars) |
| Meta description | 152 chars | Transcreation run as a production line, not a per-word translation buy: the stages, roles, standards, brief and review loop that keep meaning intact. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between translation and transcreation?
2. How does a transcreation process work?
3. Is there a standard for transcreation?
4. How is transcreation priced?
5. Can AI do transcreation?

## Definition of done

- [ ] `research/transcreation-as-a-production-line.md` written before drafting, every claim marked
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
- [ ] File saved as `output/transcreation-as-a-production-line.md`
