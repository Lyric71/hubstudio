---
brief_id: 43
publish_date: 2026-11-26
week: 11
slot: C
slot_job: the operations page
cluster: Craft
content_type: Operations page
status: not_started
---

# BRIEF 43: Lip sync across languages: what breaks and what it costs

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
| Working H1 | Lip sync across languages: what breaks and what it costs |
| Slug | `/resources/insights/lip-sync-across-languages/` |
| Output file | `output/lip-sync-across-languages.md` |
| Research file | `research/lip-sync-across-languages.md` |
| Primary query | `ai lip sync video localization` |
| Secondary queries | `ai dubbing lip sync cost`, `lip sync localization quality problems`, `voice cloning consent for dubbing` |
| SERP verdict | To be mapped at R2 |
| Body length | 1,900 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

What breaks when a filmed or generated master is lip-synced into other languages: mouth-shape mismatch, script expansion, voice likeness consent, on-screen text, gesture and culture. How to check each language before it ships, and what localization with lip sync costs, from method-stated research and category rate cards only.

## The research gate, before any drafting

No body copy until `research/lip-sync-across-languages.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `ai lip sync video localization` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/lip-sync-across-languages/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Lip-sync evaluation research with its metric and dataset
- Script length expansion figures only with a source and method
- Dubbing and voice rate cards as category bands with dates

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Failure mode table
- Per-language QA checklist, usable by someone who does not speak the language
- The consent chain for voice and likeness, reusing cleared rows from briefs 26 and 29
- Cost section with category bands and their methods only

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Print a hubStudio language count. The site publishes two different figures.
- Name any dubbing, voice or lip-sync vendor.
- Allocate labeling duties.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Failure mode table
- Per-language QA checklist
- Consent chain table
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

- AI video production: `/solutions/ai-production/video`
- Video production service: `/services/design/video-production`
- AI brand ambassadors article: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- Cost to localize a campaign for China article: `/resources/insights/cost-to-localize-a-campaign-for-china`

## CTA

Final section only. CTA label: **Test a language pair**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Lip Sync for Video: What Breaks, What It Costs (49 chars) |
| Meta description | 152 chars | What breaks when brand video is lip-synced into other languages, how to check each language before it ships, and what lip-synced localization costs. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How does AI lip sync work for video localization?
2. What goes wrong with AI lip sync?
3. How much does lip-synced video localization cost?
4. Do I need consent to clone a voice for dubbing?
5. How do I check lip sync in a language I do not speak?

## Notes

Planning decision 2026-09-10: the AI video page says 47 languages with lip sync and the video production page says 40+. The slug and H1 drop the count until the site settles one figure.

## Definition of done

- [ ] `research/lip-sync-across-languages.md` written before drafting, every claim marked
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
- [ ] File saved as `output/lip-sync-across-languages.md`
