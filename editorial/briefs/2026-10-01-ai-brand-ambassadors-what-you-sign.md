---
brief_id: 26
publish_date: 2026-10-01
week: 03
slot: C
slot_job: the operations page
cluster: Rights
content_type: Operations page
status: not_started
---

# BRIEF 26: AI brand ambassadors: what you actually sign

Run with the CreateArticle skill. Read `../CLAUDE.md` and `../SPEC.md`
first. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | procurement |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | AI brand ambassadors: what you actually sign |
| Slug | `/resources/insights/ai-brand-ambassadors-what-you-sign/` |
| Output file | `output/ai-brand-ambassadors-what-you-sign.md` |
| Research file | `research/ai-brand-ambassadors-what-you-sign.md` |
| Primary query | `ai avatar likeness rights talent release` |
| Secondary queries | `digital human talent release`, `ai ambassador contract clauses`, `synthetic talent likeness agreement` |
| SERP verdict | VACANT on the practical side. Law firms explain the risk, nobody publishes what to sign |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | A workflow, checklist or document structure the reader can use tomorrow |

## The angle

The practical artifact. An annotated release structure from a studio that casts and captures the talent, rather than a risk explainer from someone who has never run a scan session.

## The research gate, before any drafting

No body copy until `research/ai-brand-ambassadors-what-you-sign.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `ai avatar likeness rights talent release` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to `research/ai-brand-ambassadors-what-you-sign/` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- China labeling duties cited to the instrument and its effective date
- Any market practice on compensation models is labeled as observed practice, with the sample and period, or cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The clause map: scope, term, territory, permitted uses, retraining rights, derivative rights, revocation, compensation model, sunset and deletion
- The difference between a scanned real person, a composite and a fully synthetic character, and how the paperwork changes
- What happens when the campaign ends and the model persists
- China labeling duties attaching to a digital human
- The plain statement that a lawyer signs the final document
- A plain line that this describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Publish a template that reads as a legal document ready to sign. It is a clause map and a checklist.

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Clause map table: clause, what it controls, what a weak version leaves open
- Table: scanned person, composite, fully synthetic, how the paperwork changes
- Sunset checklist: what happens to the model at campaign end
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
- Copyright and AI resource: `/resources/copyright-and-ai`
- AI excellence page: `/the-studio/ai-excellence`

## CTA

Final section only. CTA label: **Talk about casting and capture**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Brand Ambassadors: What You Sign (35 chars) |
| Meta description | 152 chars | The clause map for an AI ambassador release: scope, term, retraining rights, revocation, sunset and deletion, and how synthetic talent changes it. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What goes in an AI avatar talent release?
2. Do I need a release for a fully synthetic character?
3. Can a model be retrained after the campaign ends?
4. What happens to a digital human when the contract lapses?
5. Does a digital human have to be labeled in China?

## Definition of done

- [ ] `research/ai-brand-ambassadors-what-you-sign.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-brand-ambassadors-what-you-sign.md`
