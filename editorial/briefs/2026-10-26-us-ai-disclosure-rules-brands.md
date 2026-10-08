---
brief_id: 78
publish_date: 2026-10-26
week: 03
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 78: AI disclosure in US advertising: the FTC, state laws and platform labels

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
| Working H1 | AI disclosure in US advertising: the FTC, state laws and platform labels |
| Slug | `/resources/insights/us-ai-disclosure-rules-brands/` |
| Publishes as | insight |
| Output file | `output/us-ai-disclosure-rules-brands.md` |
| Research file | `research/us-ai-disclosure-rules-brands.md` |
| Hero image | `public/Images/insight-us-ai-disclosure-rules-brands.webp`, referenced as `/Images/insight-us-ai-disclosure-rules-brands.webp` |
| Primary query | `AI disclosure rules advertising US` |
| Secondary queries | `FTC AI generated content advertising rules`, `New York synthetic performer disclosure law`, `do I have to disclose AI in ads`, `AI label on Instagram TikTok YouTube`, `California AI Transparency Act` |
| SERP verdict | LAW-FIRM AND CREATOR BLOGS. Results mix law-firm alerts on single statutes with creator-platform blogs that overstate the rules (invented 'enforcement up 40 percent' figures, a 'double disclosure rule'); none lays the three layers (federal, state, platform) side by side for a brand producing ads, with each obligation tied to its primary text. |
| Body length | 2,400 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

There is no single US AI disclosure law. A brand faces three layers: the FTC's existing deception and endorsement rules applied to AI, a handful of state statutes with narrow triggers (synthetic performers in ads, political content, provenance data from large AI providers), and each platform's own label. This page maps the layers to the assets a brand actually makes, from primary text only, and says what each one triggers.

## The research gate, before any drafting

No body copy until `research/us-ai-disclosure-rules-brands.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI disclosure rules advertising US` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/us-ai-disclosure-rules-brands/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC Act Section 5 and 16 CFR Part 255 and Part 465: ecfr.gov and ftc.gov, with effective dates
- FTC enforcement on deceptive AI claims (the September 2024 sweep and later orders): ftc.gov press releases and orders, dated
- New York synthetic performer statute: nysenate.gov bill text and chapter, effective date
- California SB 942 and its amending bill: leginfo.legislature.ca.gov, operative date
- Platform labels: Meta, YouTube, TikTok, LinkedIn help pages, dated

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Answer table in the first screen: layer (FTC, state, platform), what triggers it, what it requires, the primary source
- FTC: Section 5 of the FTC Act; the Endorsement Guides (16 CFR Part 255, revised 2023); the rule on consumer reviews and testimonials (16 CFR Part 465) and its treatment of AI-generated fake reviews; enforcement actions on AI claims, from ftc.gov
- New York: the synthetic performer disclosure requirement for ads, the statute's own text and effective date
- California: the AI Transparency Act (SB 942) as amended, who it binds (covered providers) and when it applies, from the legislature's own site
- Other state rules that touch ads (election deepfake laws, voice and likeness laws) listed briefly with the statute and what triggers them
- Platform labels: Meta, YouTube, TikTok and LinkedIn disclosure tools or automatic labels, from each platform's own help page
- What a brand should keep per asset: which engine made it, the prompt, who approved it; in hubStudio, History keeps every render with its prompt and engine, and Validation keeps who approved which version on a thread that cannot be deleted
- A plain statement that the page describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite law-firm alerts or vendor blogs as the source of any rule; statutes, regulations, FTC pages and platform help only
- Print unsourced enforcement-growth figures
- Present the Image anonymizer or Download clean copy as a way to avoid disclosure; do not mention them in this piece
- Name any competitor, tool or agency
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: layer, trigger, requirement, source
- Asset-by-asset table: asset type (product image, synthetic person, cloned voice, review or testimonial, political content), which rules it triggers
- Record-keeping checklist as a plain list
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-us-ai-disclosure-rules-brands.webp`.
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

- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- A disclosure audit trail per asset: `/resources/insights/disclosure-audit-trail-per-asset`
- Content credentials in production: `/resources/insights/content-credentials-c2pa-in-production`
- AI avatars in brand content: `/resources/insights/ai-avatars-brand-content`
- Copyright and AI: `/resources/copyright-and-ai`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Disclosure in US Ads: FTC, States, Platforms (47 chars) |
| Meta description | 152 chars | What US brands must disclose about AI in ads: FTC deception and endorsement rules, New York and California statutes and platform labels, from the text. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Do I have to disclose AI-generated content in US ads?
2. What does the FTC say about AI in advertising?
3. What is New York's synthetic performer disclosure law?
4. Does California require labels on AI-generated images?
5. Do Instagram, TikTok and YouTube label AI content automatically?
6. Can I use AI-generated reviews or testimonials?
7. What records should a brand keep for AI-made ads?

## Notes

Not legal advice line mandatory. Watch rows for any statute with an effective date after publication and for the FTC rulemaking docket if one is open at research time.

## Definition of done

- [ ] `research/us-ai-disclosure-rules-brands.md` written before drafting, every claim marked
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
- [ ] File saved as `output/us-ai-disclosure-rules-brands.md` with `template: insight`
