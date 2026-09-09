---
brief_id: 25
publish_date: 2026-10-08
week: 04
slot: C
slot_job: the operations page
cluster: Rights
content_type: Operations page
status: not_started
---

# BRIEF 25: Content Credentials in a real pipeline: where C2PA survives and where it breaks

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
| Working H1 | Content Credentials in a real pipeline: where C2PA survives and where it breaks |
| Slug | `/resources/insights/content-credentials-c2pa-in-production/` |
| Output file | `output/content-credentials-c2pa-in-production.md` |
| Research file | `research/content-credentials-c2pa-in-production.md` |
| Primary query | `c2pa content credentials for brands` |
| Secondary queries | `content credentials production workflow`, `c2pa survives platform upload`, `do content credentials survive social media` |
| SERP verdict | WEAK. Tool-side coverage only, thinly, no producer voice |
| Body length | 2,200 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

The producer's view. Where credentials survive from capture through retouch, versioning and platform upload, and exactly where they get stripped. Tested, not assumed.

## The research gate, before any drafting

No body copy until `research/content-credentials-c2pa-in-production.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `c2pa content credentials for brands` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/content-credentials-c2pa-in-production/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Every survival table row carries a test date, the file type, and the tool or platform version
- Where a platform behaviour could not be tested, mark it untested rather than inferring it

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A stage-by-stage survival table: capture, ingest, retouch, export, DAM, platform upload, social re-encode, each marked survives, degrades or strips
- Which platforms preserve credentials today and which do not, tested rather than assumed
- What to do when they break
- An honest verdict on whether it is worth implementing now
- A plain line that this describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Assert a platform behaviour that was not tested. Every row in the survival table states the test date and the file type used.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Survival table: stage, survives, degrades or strips, test date, file type
- Table: platform, preserves credentials, tested on
- Decision box: implement now, implement later, or wait
- Feature image: see `../SPEC.md`. `hubstudio-image-style-guide.md` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. A workflow, checklist or document structure the reader can use tomorrow. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Glossary: `/resources/glossary`
- Short video design service: `/services/design/short-video`
- AI excellence page: `/the-studio/ai-excellence`

## CTA

Final section only. CTA label: **Talk about your pipeline**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Where C2PA Survives in a Real Pipeline (38 chars) |
| Meta description | 152 chars | Content Credentials tested stage by stage: capture, retouch, export, DAM, platform upload. Where they survive, where they strip, and whether to adopt. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Do Content Credentials survive social media upload?
2. At what point does C2PA metadata get stripped?
3. Which platforms preserve Content Credentials?
4. Is C2PA worth implementing in 2026?
5. What do I do when credentials break mid-pipeline?

## Definition of done

- [ ] `research/content-credentials-c2pa-in-production.md` written before drafting, every claim marked
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
- [ ] File saved as `output/content-credentials-c2pa-in-production.md`
