---
brief_id: 52
publish_date: 2026-10-08
week: 00
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 52: The EU AI Act labeling duty: what brand content has to carry, and what Instagram, TikTok and YouTube ask for

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Insight (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | The EU AI Act labeling duty: what brand content has to carry, and what Instagram, TikTok and YouTube ask for |
| Slug | `/resources/insights/eu-ai-act-labeling-brand-content/` |
| Publishes as | insight |
| Output file | `output/eu-ai-act-labeling-brand-content.md` |
| Research file | `research/eu-ai-act-labeling-brand-content.md` |
| Hero image | `public/Images/insight-eu-ai-act-labeling-brand-content.webp`, referenced as `/Images/insight-eu-ai-act-labeling-brand-content.webp` |
| Primary query | `EU AI Act AI-generated content labeling` |
| Secondary queries | `Article 50 AI Act deepfake disclosure`, `EU AI Act code of practice labeling AI-generated content`, `EU AI icon AI generated`, `do I have to label AI images in EU ads`, `Instagram TikTok YouTube AI label rules`, `AI Act 2 December 2026 marking deadline` |
| SERP verdict | LAW-FIRM MEMOS AND COMPLIANCE BLOGS. The results explain Article 50, the code of practice and the omnibus dates for lawyers; the platform help pages explain their own toggles and never mention the EU rule. No ranking page puts the provider and deployer duties next to the three platform labels for a brand or agency shipping campaign assets, and several still print the superseded six-month proposal or the high-risk fine. |
| Body length | 2,200 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Brands and agencies running AI content in Europe need to know what Article 50 of the EU AI Act requires of a deployer (deep fake disclosure, AI-generated text on matters of public interest) versus a provider (machine-readable marking), from which date, and how that lines up with the labels Instagram and Facebook, TikTok and YouTube already ask for. Primary sources only: the AI Act text (read through the Commission AI Act Service Desk, EUR-Lex being unreachable to scripts), the Commission guidelines of 20 July 2026, the code of practice of 10 June 2026 and its adequacy opinion, the Commission pages on the AI Omnibus (Regulation (EU) 2026/1744, adopted, in force 27 July 2026), and each platform help page. Production practice, not legal advice.

## The research gate, before any drafting

No body copy until `research/eu-ai-act-labeling-brand-content.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `EU AI Act AI-generated content labeling` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/eu-ai-act-labeling-brand-content/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Article 50(2), 50(4), 50(5), Article 3(60), Article 111(4), Article 113, Article 99(4): AI Act Service Desk, consolidated text of 27 July 2026
- Guidelines C(2026) 5054 of 20 July 2026: deployer, deep fake examples, platform tools, first exposure, retroactivity
- Code of practice, final 10 June 2026; Commission opinion of 9 July 2026; about 190 signatories by end of July 2026
- EPRS briefing PE 782.651, June 2026: proposal six months, Parliament three months, agreed 2 December 2026
- Meta, TikTok, YouTube help pages read 8 October 2026

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Who must do what table: role (provider or deployer), obligation, date, source article
- The adopted Omnibus outcome stated as adopted: Article 111(4), marking by 2 December 2026 for generative systems placed on the market before 2 August 2026; no pending vote on Article 50 found as of 8 October 2026
- The Commission guidelines on who the deployer is: the agency that decides how AI is used; a brand that only commissions without control over AI use is not
- Which brand assets are deep fakes under the guidelines, with the advertising examples (misleading product image, synthetic influencer, synthetic CEO) and the non-examples (real car on AI background, color correction, re-scaling)
- Platform labels table: platform, when the label is required, how it is applied, source
- Where the platform trigger and the EU trigger differ (Meta requires no label on images; a label behind a menu)
- Workflow checklist per asset
- The China labeling insight as the counterpart, the C2PA insight, the disclosure audit trail insight, the copyright and AI resource page
- A plain line: production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite law-firm memos or vendor blogs as the source of any rule
- Print the €35 million or 7 percent figure (Article 5 prohibited practices, not Article 50)
- Present the Commission six-month proposal or the Parliament three-month position as the rule
- Say Article 50 requires a per-asset record or names C2PA
- Present the Image anonymizer or Download clean copy in any way; do not mention them in this piece
- Name any competitor, tool vendor or agency
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Who must do what table
- Platform labels table
- Brand asset to deep fake table, from the guidelines examples
- Per-asset checklist as a plain list
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-eu-ai-act-labeling-brand-content.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Decision or answer table in the first screen, FAQ block. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- China AI labeling rules for production: `/resources/insights/china-ai-labeling-rules-production-workflow`
- Content Credentials in a real pipeline: `/resources/insights/content-credentials-c2pa-in-production`
- The AI disclosure audit trail per asset: `/resources/insights/disclosure-audit-trail-per-asset`
- Copyright and AI: `/resources/copyright-and-ai`
- TikTok platform page: `/solutions/platforms/tiktok`
- Meta platform page: `/solutions/platforms/meta`
- Ad creative design service: `/services/design/ad-creative`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | EU AI Act Labeling: What Brand Content Must Carry (49 chars) |
| Meta description | 152 chars | What Article 50 of the EU AI Act asks brands and agencies to label, from which date, and how Instagram, TikTok and YouTube AI labels line up with it. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Does the EU AI Act require labels on all AI-generated images?
2. When does the EU AI Act labeling requirement start?
3. Who has to label AI content, the brand or the agency?
4. Is a product image made with AI a deep fake?
5. Is the Instagram or TikTok AI label enough for the EU AI Act?
6. Do we have to use the EU AI icon?
7. What are the fines for not labeling AI content in the EU?

## Notes

Not legal advice line mandatory. Watch rows: 2 December 2026 marking deadline, quarterly recheck of the platform pages and the code, the code formal update due at least every two years from 10 June 2026.

## Definition of done

- [ ] `research/eu-ai-act-labeling-brand-content.md` written before drafting, every claim marked
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
- [ ] File saved as `output/eu-ai-act-labeling-brand-content.md` with `template: insight`
