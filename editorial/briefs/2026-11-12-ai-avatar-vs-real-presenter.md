---
brief_id: 95
publish_date: 2026-11-12
week: 05
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 95: An AI avatar or a real presenter for product explainers

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Comparison (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | An AI avatar or a real presenter for product explainers |
| Slug | `/resources/insights/ai-avatar-vs-real-presenter/` |
| Publishes as | insight, category Buying models |
| Output file | `output/ai-avatar-vs-real-presenter.md` |
| Research file | `research/ai-avatar-vs-real-presenter.md` |
| Hero image | `public/Images/insight-ai-avatar-vs-real-presenter.webp`, referenced as `/Images/insight-ai-avatar-vs-real-presenter.webp` |
| Primary query | `AI avatar vs real presenter` |
| Secondary queries | `AI avatar video vs real person`, `are AI avatars good for product videos`, `AI presenter video trust`, `AI spokesperson vs human` |
| SERP verdict | Avatar software vendors rank with speed claims and a one-line nod to real presenters; one cites trust research; none covers the contract side (likeness, voice, term, territory) or the disclosure rules, which decide most brand cases. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

Decide by what the explainer has to carry: information or trust. Avatars win on updates, languages and volume; a real presenter wins where the face is the proof. Then the paperwork: a likeness license, a voice, a term, a disclosure. Compared by job and by contract, never by vendor.

## The research gate, before any drafting

No body copy until `research/ai-avatar-vs-real-presenter.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI avatar vs real presenter` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-avatar-vs-real-presenter/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Trust: the preregistered experiments on AI-mediated video and trust, from the journal page, with sample size and method
- Presenter fees: union scale or published rate cards by category and date, from the union's own pages
- New York GBL 396-b and EU AI Act Article 50: official texts

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table by job: product tour, onboarding, multilingual update, testimonial, founder message, regulated claims
- Trust evidence only from peer-reviewed or preregistered studies, with sample and method stated
- Contracts: likeness and voice rights, term, territory, usage, pointing to the brand ambassadors piece
- Disclosure: New York's synthetic performer law, the EU AI Act transparency duty for deepfakes (Article 50), platform labels; pointing to the EU and US disclosure pieces
- Localization: lip sync across languages, pointing to the lip-sync piece
- Cost by pricing model: presenter fees and usage by category and date, avatar pricing models by category; no hubStudio amount
- How the app fits, inside its facts: reference to video with pictures, clips and sound on the engines that take them; the Consistent character across images skill; Validation for approvals; the studio runs avatar programs and their contracts

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name an avatar vendor
- Claim the app makes talking avatars or lip sync
- Repeat a vendor's speed-saving claim
- Give legal advice: say the piece describes production practice
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table by job
- Contract checklist table
- Cost model table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-avatar-vs-real-presenter.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A decision table and a when-to-choose section, no company named. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- AI avatars in brand content: `/resources/insights/ai-avatars-brand-content`
- AI brand ambassadors: what you sign: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- lip sync across languages: `/resources/insights/lip-sync-across-languages`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- video production service: `/services/design/video-production`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Avatar or Real Presenter for Product Explainers (50 chars) |
| Meta description | 152 chars | When an AI avatar does the job and when a real presenter must: a decision by job, the trust evidence, the contract terms and the disclosure rules. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Are AI avatars good for product explainer videos?
2. Do viewers trust AI avatars?
3. Do I need to disclose an AI avatar in an ad?
4. Is an AI avatar cheaper than hiring a presenter?
5. Can an AI avatar speak several languages?
6. What rights do I need to make an avatar of a real person?

## Notes

Category Buying models. Compares ways of working, never a named tool.

## Definition of done

- [ ] `research/ai-avatar-vs-real-presenter.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] No Han characters in the article: Chinese names romanized (deviation 6)
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] File saved as `output/ai-avatar-vs-real-presenter.md` with `template: insight`
