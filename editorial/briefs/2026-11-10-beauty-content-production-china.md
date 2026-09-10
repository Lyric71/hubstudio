---
brief_id: 34
publish_date: 2026-11-10
week: 09
slot: B
slot_job: the spec page
cluster: Playbook
content_type: Spec page
status: not_started
---

# BRIEF 34: Beauty content production in China: the category playbook

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
| Working H1 | Beauty content production in China: the category playbook |
| Slug | `/resources/insights/beauty-content-production-china/` |
| Output file | `output/beauty-content-production-china.md` |
| Research file | `research/beauty-content-production-china.md` |
| Primary query | `cosmetics advertising rules china` |
| Secondary queries | `skincare efficacy claims china`, `beauty brand content china`, `cosmetics before and after ads china` |
| SERP verdict | To be mapped at R2 |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | Spec table, annotated screenshot, rejection reasons, visible reviewed date |

## The angle

What beauty and skincare content in China has to do differently, from the instruments that govern it: the cosmetics regulation and its efficacy-claim rules, the Advertising Law bans, the internet advertising measures on disguised ads, and platform rules on beauty content, plus the deliverables a beauty SKU needs on Tmall, Douyin and RedNote from the cleared spec collections. Production practice, not legal advice.

## The research gate, before any drafting

No body copy until `research/beauty-content-production-china.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `cosmetics advertising rules china` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/beauty-content-production-china/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Instrument text read on the issuing body's own site, Chinese first, with article numbers and effective dates
- Platform rules primary where readable, otherwise under deviation 7 with the disclaimer

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A claims table: allowed, needs evidence, banned, each row tied to an instrument and article
- Which efficacy claims need an evaluation report, from the instrument text
- Rules on before-and-after imagery, models and retouching for cosmetics
- Creator and endorser disclosure
- The beauty deliverable list per platform, from the cleared collections
- How retouched or generated skin meets the Taobao AI fake-image rule

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Give legal advice or allocate liability.
- Print a penalty figure not read in the instrument text.
- Use a client figure beyond what the Shiseido RQ PYOLOGY and AGE20 case study pages already publish.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Claims table
- Deliverables per platform table
- Pre-shoot compliance checklist
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

- RedNote platform page: `/solutions/platforms/rednote`
- Tmall platform page: `/solutions/platforms/tmall`
- Ecommerce design service: `/services/design/ecommerce`
- Shiseido RQ PYOLOGY case study: `/work/shiseido-rq-pyology`

## CTA

Final section only. CTA label: **Plan a beauty launch**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Beauty Content Production in China (34 chars) |
| Meta description | 152 chars | What beauty content in China has to do: efficacy claims, banned terms, before-and-after rules, creator disclosure and the deliverables per platform. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What claims can cosmetics make in Chinese advertising?
2. Do skincare efficacy claims need testing in China?
3. Can beauty ads in China show before and after images?
4. What does a beauty brand need for Tmall, Douyin and RedNote?
5. Can retouching or AI skin break Chinese platform rules?

## Definition of done

- [ ] `research/beauty-content-production-china.md` written before drafting, every claim marked
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
- [ ] File saved as `output/beauty-content-production-china.md`
