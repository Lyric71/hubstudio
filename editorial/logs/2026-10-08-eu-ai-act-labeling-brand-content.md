# Run log: 2026-10-08, eu-ai-act-labeling-brand-content

| Field | Value |
|---|---|
| Brief | 52 (wave two), `editorial/scripts/wave2/52-eu-ai-act-labeling-brand-content.mjs` |
| Slug | eu-ai-act-labeling-brand-content |
| Research file | research/eu-ai-act-labeling-brand-content.md, captures in research/eu-ai-act-labeling-brand-content/ |
| Output | output/eu-ai-act-labeling-brand-content.md |
| Body word count | 3,657 with tables and blockquotes; 2,979 prose with blockquotes; 2,074 running prose without blockquotes (target 2,200) |
| Body char count | 20,891 |
| Status reached | image_ready (steps 0 to 3 of the pipeline; publish and translation are done by the integrator) |
| Model used at every step | Claude Opus 5.5 for research, drafting and the quality pass; gpt-image-2 at high quality for the image. No cheaper path taken |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Provider and deployer duties, dates, Omnibus status, deployer allocation, deep fake scope for ads, label form, platform rules, app facts |
| R2 SERP mapped, four phrasings minimum | yes, six queries | The session's shared web search budget ran out after six queries, so the map covers six phrasings judged from title and summary rather than ten opened results per phrasing. Recorded as a runbook substitution below |
| R3 primary sources for every number | yes | AI Act text on the Commission's Service Desk, the Commission guidelines PDF, the code PDF, Commission pages, the EPRS briefing, the platforms' own help pages |
| R4 Chinese-language web searched first | not applicable | EU and Western platform subject. The one China claim is a ledger row reused with its two check dates |
| R5 every figure interrogated | yes | The only counts are the fine ceiling (instrument), the signatory count (Commission's own register, labeled as such) |
| R6 triangulated, conflicts published as ranges | yes | The grace-period conflict (six months proposed, three months in Parliament, December 2, 2026 adopted) is published as the negotiation history with the adopted date as the rule |
| R7 research file written before drafting | yes | |
| R8 reconciled after drafting | yes | Every date and number traced; nothing removed |

**Gap statement, one sentence:** nobody lays the deployer duty next to the
platform labels and shows where the two triggers disagree for a brand asset.

**Research time spent:** about 2 hours 15 minutes.

- Figures reused from the ledger: China labeling Measures full-text row (Art. 4, Art. 5, in force September 1, 2025; checks 2026-09-24). The ledger's Article 50 FAQ row (grace period to December 2, 2026) was confirmed against the instrument itself and the Omnibus record.
- Claims cut because they could not be sourced: TikTok and YouTube paid-ad labeling rules (primary pages not located before the search budget ran out; the platform table covers organic posting plus Meta ads and the asset brief says so); the Official Journal publication date of Regulation (EU) 2026/1744 (EUR-Lex unreachable; entry into force used instead); the Council final adoption date (consilium.europa.eu returned 403); which named companies signed which section of the code.
- Conflicts published as a range rather than a single figure: the marking grace period history, above.
- Captures saved to `research/eu-ai-act-labeling-brand-content/`: six platform help captures (text and PNG), five text extracts of the guidelines and the code, one extract of the EPRS briefing. Em dash characters in captured text replaced with a spaced hyphen-minus.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification (write the list out)
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- Iteration 1: full draft from the research file, one question per H2, answer table in the first screen, not-legal-advice line in the first answer.
- Iteration 2, ten weaknesses: (1) lead sentence carried two ideas; (2) the Omnibus section risked reading as pending; (3) the deployer section needed the Commission's own advertising-agency sentence, not a paraphrase of a paraphrase; (4) no table for which ad assets are deep fakes; (5) platform section had no line on where platform and EU triggers disagree; (6) the 35 million figure from the live copyright page had to be kept out and the real ceiling given; (7) no app or studio tie-in to the workflow; (8) the China counterpart missing; (9) FAQ answers ran past 70 words; (10) no service page reference.
- Iteration 3: fixed all ten; added the deep fake asset table from the guidelines' examples, the "Where do the platform labels fall short" section, the checklist with the app facts, the China section and the ad creative design service reference; FAQ answers trimmed to 46 to 59 words.
- Iteration 4: production review. British spellings in verbatim EU quotes would fail the checker, so every blockquote became an attributed close paraphrase in American spelling; decision written into the asset brief.
- Iteration 5: scanned for stock AI phrasing and the positioning file's banned words; none present. Varied the section openers so no two H2 answers start the same way.
- Iteration 6: zero em dashes; all 13 blockquotes in one format, claim then a Source line with a date.
- Iteration 7: ran as the cadence variant, not the planted-error variant. Broke three parallel structures (the triad of engine, face and scene; the three-part contract clause; the three-location list), let the deployer section run long against single-line paragraphs ("Being outside the EU doesn't help."), one parenthetical aside. No deliberate errors of any kind.
- Iteration 8: check 2 run on every cited surface (browser re-render of 16 pages, fresh download of the guidelines, code and EPRS PDFs, both Commission PDFs byte-identical to check 1). All held. R8 reconciliation: every date and number traced to the claims tables; nothing removed.
- Iteration 9: title 49, description 149 (trimmed from 153 by dropping "the"), excerpt 25 words.
- Iteration 10: second pass on AI tells; nothing new found. The remaining fixes (two performing closers, a repeated "anyway") were taken in the quality pass below.
- Iteration 11: final human touch; contractions where a reporter would use them.
- Iteration 12: three tables (answer table, deep fake assets, platform labels), checklist with bold lead-ins, FAQ in bold questions. No ordinals anywhere.
- Iteration 13: five visual concepts listed in the feature image block, concept A chosen (a real boot on a set in front of a generated mountain, the guidelines' own real-product-on-AI-background case), prompt written with no named person.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : pause, second AI-undetectable pass
[x] Iteration 10 : second human touch pass
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check
[x] Final        : fold the SEO content into the markdown
```

Versions saved in the session scratchpad (v1 createarticle final, v2 after
iteration 3, v3 after iteration 13, v4 final).

- 1: newsroom register confirmed on the createarticle output.
- 2, ten weaknesses: day-month dates where the wave two set uses month-day; the lead split needed; the creative-works table row ambiguous ("disclose that it exists"); "catch teams out" reads British; two closing punchlines performing ("a proposal that lost", "a weak place to stand"); "anyway" used twice; the platform section lacked a freshness cue; a triad of three distribution places; mid-sentence dates missing the comma after the year; a double blank line before the appended blocks.
- 3: all ten fixed. Every date converted to the American form (August 2, 2026; Aug. 2, 2026 in tables), comma after the year mid-sentence.
- 4: production ready; nothing missing against SPEC.md.
- 5 and 9: AI tells: no "seamless", "leverage", "robust", "unlock", "elevate", "delve", "comprehensive", "navigate" anywhere (searched).
- 6 and 15: zero em dashes; 13 blockquotes in identical format; straight quotes kept, matching every other draft in output/ (the publish step sets typography).
- 7 and 10: human touch through cadence; no planted errors.
- 8 and 17: house ceilings, not the skill's 60 and 156: title 49, meta 149, excerpt 25 words. H1, ten H2s, no H3 skips.
- 11, hostile reader, ten problems fixed in one pass: freshness cue added to the platform section (read October 8, 2026, pages change without notice); the TikTok endorsement ban moved next to the platform quotes; the "not legal advice" line kept in the first answer; the Meta ads row reworded to what Meta's page says (advertiser disclosure only on social issue, election and political ads); a credibility anchor (paragraph numbers) on every guidelines quote; the deployer "probably shares the role" hedge kept and tied to the decision-and-control test; the FAQ answers checked against the body for contradictions (none); the provider chatbot row kept but short; the China section's claim narrowed to what the ledger row supports; the CTA lead-in rewritten as production work, not legal advice.
- 12: bold-label passages (three divergence paragraphs, eight checklist items, FAQ) against flowing prose: under half; no conversion needed.
- 13: broke three: the engine/face/scene triad, the contract triad, the three-location list.
- 14: cut two well-turned closers (see 2).
- 16: one transition kept before the platform tools quote ("The platform tools still do real work."), no padding added.
- 18: "anyway" reduced to one; "though" left once in a quote and once in prose.
- Final: frontmatter holds the SEO fields; no change needed.

## Image

- Prompt used: verbatim from the feature-image block (one unbroken prose paragraph).
- Confirmed the prompt names no real person: yes.
- Attempts: one. Accepted.
- AI-tells checklist on the final frame: hands holding the loupe anatomically sound; face asymmetric with freckles and visible pores, no plastic skin; flyaway hairs present; one light source from camera left with one shadow; no text, no logos, no watermark; the screen edge and stand are visible at right, which carries the idea; the boot laces and eyelets read as real. One weakness accepted: the mountain on the screen is sharper than f/4 would render, which reads as a display rather than a window, the intended effect.
- Saved to: public/Images/insight-eu-ai-act-labeling-brand-content.webp (1536 x 1024, webp quality 78, 109 KB). The raw PNG stays in the scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero. Platforms and regulators named; no engine maker, agency or tool vendor named |
| `$` occurrences | zero |
| Em dash occurrences | zero (draft, research file, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; file ends on the CTA |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters | none in the draft, research file or captures |
| Statistics in blockquotes with source, date and method | 13 blockquotes, all sourced and dated |
| `node editorial/scripts/check-draft.mjs` | all hard checks passed |

## Sources

- New figures added to the ledger, with both check dates: see "Ledger additions" below for the integrator.
- Rows added to the do-not-publish log: see the research file's "Do not publish" table; the four ledger-worthy ones are listed below.

## Ledger additions

Rows for `editorial/sources/verified-sources.md`, section "Industry and
regulatory" (columns: Figure | Attribution | Source | Date | Confidence |
Check 1 | Check 2 | Used in). Used in: 52.

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| AI Act Art. 111(4), added by the AI Omnibus: providers of generative AI systems placed on the market before 2 August 2026 comply with Article 50(2) by 2 December 2026 | "AI Act consolidated text, version of 27 July 2026, on the European Commission's AI Act Service Desk" | ai-act-service-desk.ec.europa.eu/en/ai-act/article-111 | 2026-07-27 | primary | 2026-10-08 | 2026-10-08 | 52 |
| AI Omnibus is Regulation (EU) 2026/1744, proposal adopted 19 November 2025, political agreement 7 May 2026, in force 27 July 2026 | "the European Commission's AI Act policy page" | digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Marking grace period: Commission proposed six months, Parliament three months, agreed 2 December 2026; Parliament approved 16 June 2026 | "European Parliamentary Research Service, briefing PE 782.651, June 2026" | europarl.europa.eu/RegData/etudes/BRIE/2026/782651/EPRS_BRI(2026)782651_EN.pdf | 2026-06 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Art. 50(2), 50(4) both subparagraphs, 50(5), 50(7) as amended; Art. 3(60) deep fake | "AI Act, Article 50, consolidated text of 27 July 2026" | ai-act-service-desk.ec.europa.eu/en/ai-act/article-50 and /article-3 | 2026-07-27 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Art. 99(4): Article 50 breaches up to EUR 15,000,000 or 3 percent of worldwide annual turnover, whichever is higher; 99(6) SMEs whichever is lower. NOT 35 million or 7 percent (that is Article 5) | "AI Act, Article 99(4) and 99(6), consolidated text of 27 July 2026" | ai-act-service-desk.ec.europa.eu/en/ai-act/article-99 | 2026-07-27 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Commission guidelines on Article 50, C(2026) 5054, 20 July 2026: para 14 (a company merely commissioning an agency without control over AI use is not a deployer; an advertising company is the deployer, staff are not), para 13 (third-country deployers in scope when they foresee EU use, including posting on the open internet), deep fake examples after para 116 (misleading AI product image, synthetic CEO, celebrity influencer are deep fakes; real car on AI background is not), para 117 (machine marking does not meet the deployer duty), para 122 (ads only sometimes creative works), para 126 (platform labeling tools can be relied on within the platform), para 142 (labels under menus not clear), para 154 (no retroactive labels) | "European Commission guidelines on Article 50, 20 July 2026, paragraph N" | ec.europa.eu/newsroom/dae/redirection/document/131215, from digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems | 2026-07-20 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Code of practice on transparency of AI-generated content: final 10 June 2026; adequate per the Commission opinion of 9 July 2026; about 190 signatories by end of July 2026; formal updates at least every two years; deployer label built on the capitalized "AI", top right example, video start and after breaks; providers apply at least two marking layers (signed metadata and an imperceptible watermark) | "Code of Practice on Transparency of AI-Generated Content, 10 June 2026"; "European Commission, code of practice page, 31 July 2026" | ec.europa.eu/newsroom/dae/redirection/document/129555; digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content; .../library/commission-opinion-assessment-code-practice-transparency-ai-generated-content | 2026-06-10 | primary | 2026-10-08 | 2026-10-08 | 52 |
| EU icons for labeling: optional, labeling not; fully generated, modified and basic versions; SVG and PNG | "European Commission, EU icons page, updated 24 September 2026" | digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content | 2026-09-24 | primary | 2026-10-08 | 2026-10-08 | 52 |
| Meta: label required on photorealistic video or realistic-sounding audio digitally generated or altered, not on images; Instagram "Add AI label" toggle; modified-with-AI signals shown in the Options menu, not on the post | "Instagram Help Center, Label AI content on Instagram, read 8 October 2026"; "Meta Help Center, How to identify AI content on Meta products, read 8 October 2026" | help.instagram.com/761121959519495; meta.com/help/artificial-intelligence/1783222608822690 | read 2026-10-08 | primary (platform policy) | 2026-10-08 | 2026-10-08 | 52 |
| Meta ads: "AI info" on the About this ad screen when Meta's tools or detected third-party AI tools were used; advertiser disclosure required for social issue, election and political ads | "Meta Help Center, How AI-generated images in ads are identified and labeled, read 8 October 2026" | meta.com/help/artificial-intelligence/355108217670024 | read 2026-10-08 | primary (platform policy) | 2026-10-08 | 2026-10-08 | 52 |
| TikTok: label required for AI-generated or significantly edited content showing realistic scenes or people; unlabeled may be removed, restricted or labeled; "AI-generated content" setting; auto label from TikTok AI effects or C2PA Content Credentials, not removable | "TikTok Community Guidelines, Integrity and Authenticity, and TikTok Support, About AI-generated content, read 8 October 2026" | tiktok.com/safety/en/policies-and-engagement/integrity-authenticity; tiktok.com/support/faq_detail?id=7636670084747893268 | read 2026-10-08 | primary (platform policy) | 2026-10-08 | 2026-10-08 | 52 |
| YouTube: disclosure required when AI meaningfully alters or generates photorealistic content; YouTube Studio, Attributes, "AI use"; label in player for photorealistic, description otherwise; auto label from YouTube tools, C2PA metadata, detection; penalties: manual label, removal, YouTube Partner Program suspension | "YouTube Help, Disclosing use of GenAI content, read 8 October 2026" | support.google.com/youtube/answer/14328491 | read 2026-10-08 | primary (platform policy) | 2026-10-08 | 2026-10-08 | 52 |

Do-not-publish log additions (columns: Claim | Where it came from | Why | Date):

| Claim | Where it came from | Why | Date |
|---|---|---|---|
| Article 50 fines of 35 million euros or 7 percent | /resources/copyright-and-ai and several SERP pages | That ceiling is Article 99(3), for Article 5 prohibited practices. Article 50 is under 99(4): 15 million or 3 percent | 2026-10-08 |
| A 2 February 2027 (six-month) marking deadline | The Commission's Omnibus proposal of 19 November 2025 and pre-adoption alerts | Superseded; the adopted Article 111(4) says 2 December 2026 | 2026-10-08 |
| "Meta requires advertisers to declare AI-generated creative in Ads Manager; undisclosed AI is grounds for rejection" | /resources/insights/your-ai-content-is-about-to-introduce-itself | Meta's own ads help page states advertiser disclosure only for social issue, election and political ads | 2026-10-08 |
| "TikTok exempts AI-written captions, hashtags and overlays" | Same live page | Not on TikTok's support or guidelines pages read 8 October 2026 | 2026-10-08 |

## Watch rows

```
2026-12-03,eu-ai-act-labeling-brand-content,"Article 111(4) marking grace period for generative AI systems placed on the market before 2 August 2026 ended on 2 December 2026. Re-read the Service Desk Article 111 and Article 50 pages and the Commission AI Act page for any change or Commission statement. If the date held, change the answer table cell and the dates section from future to past tense where needed and move the page's last updated date; if anything moved, rewrite the table row, the dates section and the FAQ on timing.",ai-act-service-desk.ec.europa.eu/en/ai-act/article-111,2026-10-08
2027-01-08,eu-ai-act-labeling-brand-content,"Quarterly recheck of the four platform help surfaces (Instagram Label AI content, Meta How to identify AI content, Meta AI info in ads, TikTok About AI-generated content and Integrity and Authenticity guidelines, YouTube Disclosing use of GenAI content): requirement sentences, setting names (Add AI label, AI-generated content, AI use), auto-label sources. Also re-read the Commission code of practice page and the EU icons page for task force outputs (audio-only icon, interactive second layer) and the guidelines library page for a revised version. Update the platform table, the divergence section and the FAQ on any change.",help.instagram.com/761121959519495; tiktok.com/support/faq_detail?id=7636670084747893268; support.google.com/youtube/answer/14328491; digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content,2026-10-08
2028-06-10,eu-ai-act-labeling-brand-content,"The Commission's opinion of 9 July 2026 says the AI Office will consider formal updates to the code of practice at least every two years; the final code was published 10 June 2026. Check for an updated code and a new adequacy opinion, and update the label-spec blockquote and the code paragraph.",digital-strategy.ec.europa.eu/en/library/commission-opinion-assessment-code-practice-transparency-ai-generated-content,2026-10-08
```

No vote is pending: the AI Omnibus is adopted (Regulation (EU) 2026/1744, in
force 27 July 2026) and the code of practice is final (10 June 2026). No
further proposal touching Article 50 was found on 8 October 2026, so there is
no vote date to watch; the quarterly row covers a new one appearing.

## Live pages this piece contradicts

Each was found during research and checked against the primary text. This
run may not edit shared files, so the integrator applies the fixes in the
same publish commit, moves `dateModifiedISO` on each insight entry, updates
the matching `output/` draft, and re-extracts and retranslates the changed
French and Chinese sentences.

1. `src/pages/resources/copyright-and-ai.astro`, lines 187 to 193 (the "European Union, from August 2026" list) and line 377.
   - "The EU AI Act mandates labeling for AI-generated images, audio, and video" overstates it. Fix: "The EU AI Act requires providers to mark AI output machine-readably, and requires deployers to visibly label deep fakes and unreviewed AI text on matters of public interest".
   - "Required format: 'clearly labelled as AI generated' by machine-readable means" conflates the two duties. Fix: "Machine-readable marking by the engine provider; a visible label, clear and distinguishable at first exposure, by the deployer".
   - "Text content is currently exempt" is wrong. Fix: "AI text published to inform the public on matters of public interest must be labeled unless a person reviewed it and someone holds editorial responsibility".
   - "Penalties for non-compliance reach €35M or 7% of global annual revenue" and the same figure at line 377 are wrong for Article 50. Fix: "up to 15 million euros or 3 percent of worldwide annual turnover, whichever is higher (Article 99(4))".
   - Line 377, "Images, audio, and video distributed in the EU must be labeled as AI-generated": fix to "Deep fakes shown in the EU must carry a visible AI label".
2. `src/pages/resources/insights/your-ai-content-is-about-to-introduce-itself.astro` (and its entry in `src/data/insights.ts`).
   - Line 24, "If you run campaigns you are a deployer, and your obligation rests on a provider-side mark you don't control": the Commission's guidelines (para 14) say a company that only commissions an agency without control over AI use is not a deployer, and (para 117) that the deployer duty cannot rest on the provider's mark. Fix: "Whoever decides how AI is used on a campaign is the deployer, often the agency, and the visible label is that deployer's job whatever the engine marks."
   - Line 28, "under the provisional agreement of 7 May": now adopted. Fix: "under Article 111(4), added by the AI Omnibus, Regulation (EU) 2026/1744, in force since 27 July 2026."
   - Line 42, "Meta now requires advertisers to declare AI-generated creative in Ads Manager ... Undisclosed AI content is grounds for rejection": not supported by Meta's own ads help page. Fix: "Meta labels ad images made with its own generative tools or with third-party AI tools it detects, with AI info on the About this ad screen, and requires advertisers to disclose AI in social issue, election and political ads."
   - The TikTok captions exemption sentence: not on TikTok's pages read 8 October 2026. Fix: cut the sentence.
   - Line 95 (FAQ), "your disclosure duty depends on their marking": fix to "Your disclosure duty does not depend on their marking; the provider's mark is a separate duty, with a grace period to 2 December 2026 for engines already on sale."
3. `src/pages/resources/insights/disclosure-audit-trail-per-asset.astro`, line 212, and `editorial/output/disclosure-audit-trail-per-asset.md` line 147: "A production studio is usually neither." The guidelines (para 14) treat an advertising company using AI under its authority as the deployer. Fix: "A studio that decides how AI is used on the work is usually the deployer, and a brand that only commissions it is not; neither duty is a duty to keep a file." Move `dateModifiedISO`.
4. `src/content/help/youtube.md`, step 6 of "How it goes, press by press": names the YouTube Studio setting "Altered content"; YouTube's own page now calls it "AI use" under Attributes. The help center is synced from the app repo and is not edited by hand here, so the fix goes to the app repo's help source: "If the video was made or changed by AI and looks real, answer Yes under AI use, in the Attributes section." The new article avoids the setting name in its app paragraph so it does not contradict either version.

## Closed in this run

- First-party figures used: none. App behavior only from the help center (tiktok.md, youtube.md) and the positioning file (History, Validation, Image editor, studio provenance per asset). TikTok labeled Beta.
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: TikTok and YouTube paid-ad labeling (the platform table covers organic posting on all three plus Meta ads; the asset brief says not to fill the gap from secondary pages); Official Journal publication date; Council adoption date; named code signatories.
- Briefs amended because the research or the live site proved them wrong: none. Brief 52 was written in this run from the research, so it already carries the adopted dates. Brief 78 (us-ai-disclosure-rules-brands) links to this slug, which matches.
- Live articles corrected because this piece contradicted them: four found, fixes written out above for the integrator (this agent may not edit shared files).
- Rows added to `watch.csv`: three, above.
- Settled fallbacks applied: 4 (length: running prose 2,074 against a 2,200 floor, within 10 percent; the overage in the with-tables count is blockquotes and tables); 9 (outside-repo facts below).
- Runbook substitutions: EUR-Lex returned an empty body on every URL form, so the instrument was read on the Commission's AI Act Service Desk and cross-checked against the Article 50 text reproduced in the guidelines and the code. The session's shared web search budget ran out after six queries, so R2 covers six phrasings judged from titles and summaries. Help pages that render client-side were read with a headless browser (Playwright, already in the repo), with full-page captures saved. The house checker fails British spelling, so EU text appears as attributed close paraphrase, never as a verbatim quotation. Dates use the American month-day form like the other wave two drafts.
- Outside-repo facts: consilium.europa.eu returned 403 to both the fetch tool and the browser.
- Integration, 2026-10-08: the three page fixes applied in English with this log's wording. `copyright-and-ai`: the four EU list items and the line-377 sentence (15 million euros or 3 percent, Article 99(4)). `your-ai-content-is-about-to-introduce-itself`: the deployer sentence, Article 111(4) in place of the provisional agreement, the Meta ads sentence, the TikTok captions exemption cut (replaced by TikTok's own realistic-content rule) and the vendor-marking FAQ; its FAQ "Do AI-written captions need labeling?" repeated the same exemption and was rewritten from TikTok's pages and Article 50(4). `disclosure-audit-trail-per-asset`: the studio sentence, page and `output/` draft. `dateModifiedISO` 2026-10-08 on both insight entries. `copyright-and-ai` is a resource page with no draft and no date field.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 52, eu-ai-act-labeling-brand-content)") and watch rows merged into `watch.csv`, sorted by due date.

## Decisions recorded

- Category: Rights, which the /solutions/brands placement claims, beside the China labeling, C2PA and audit trail insights.
- Author: Liyan Ye, the author of the related Rights insights.
- French slug proposal: `etiquetage-ia-ai-act-contenus-de-marque`.
- The CTA is Send a brief (insight family). The CTA lead-in describes production work (flag synthetic assets, mark masters, record provenance), not legal review.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 49 | 52 | yes |
| Meta description | 149 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish

Step 4 (page, insights.ts entry, French and Chinese, build, commit, email)
is run by the integrator after this drafting run, as the wave two
instructions set out. This run stops at image_ready.

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/eu-ai-act-labeling-brand-content`, French address `/fr/ressources/analyses/ai-act-l-etiquetage-ia-des-contenus-de-marque` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/eu-ai-act-labeling-brand-content/` and `.i18n-work/passes/zh/resources/insights/eu-ai-act-labeling-brand-content/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

Terms held from earlier pages: AI Act, fournisseur, déployeur, deepfake (with « hypertrucage » named once, the regulation's own French word), lisible par machine, étiquette (visible label), marquage (machine-readable mark). New: sigle AI (the visible "AI mark"), code de bonnes pratiques, lignes directrices, omnibus IA / omnibus numérique, claire et reconnaissable (the regulation's French for "clear and distinguishable").

[lede] pass1 -> pass3: « Elle incombe à celui qui a décidé de l’usage de l’IA » -> « C’est à celui qui a décidé de l’usage de l’IA de l’apposer. » / why: the duty reads as an action, not a legal abstraction; second sentence ends on « jamais la même d’un réseau à l’autre », a native cadence.
[intro] pass1 -> pass3: one long sentence with the date at the tail -> date moved up front (« Depuis le 2 août 2026, les déployeurs... doivent signaler »), « non relus » folded into the noun group. / why: English skeleton (date as afterthought) removed.
[table] pass1 -> pass3: « Leurs obligations » -> « Ce qui leur incombe »; « Informer les personnes qu’elles ont affaire à une IA, sauf si c’est évident » -> « Prévenir les personnes qu’elles échangent avec une IA, sauf évidence ». / why: tighter table French; article citations set as « Art. 50, § 4, premier alinéa ».
[provider vs deployer] pass1 -> pass3: « Une marque conçoit rarement le moteur » -> « Rares sont les marques qui conçoivent elles-mêmes le moteur »; « vous concernent » -> « sont votre affaire ». / why: native emphasis and register.
[omnibus] pass1 -> pass3: « c’est désormais du droit positif, plus une proposition » -> « l’affaire est réglée : c’est désormais la loi, et non plus une proposition »; « délai de grâce » -> « bref sursis ». / why: jargon calque removed; « en vigueur depuis » corrected to « entré en vigueur le » (entry into force, not application).
[omnibus] pass1 -> pass3: « Si la négociation compte encore, c’est parce que... reprennent toujours son premier chiffre » -> « Si la négociation mérite encore d’être retracée, c’est que des pages plus anciennes affichent toujours son chiffre de départ. » / why: says why the history is told, as a French editor would.
[who labels] pass1 -> pass3: « La frontière passe donc là où beaucoup d’équipes de marque ne l’attendent pas » -> « La ligne de partage passe donc là où bien des équipes côté marque ne l’attendent pas. » / why: « équipes de marque » is ambiguous in French; « côté marque » is the trade's phrase.
[extraterritorial] pass1 -> pass3: « Être établi hors de l’UE n’y change rien » -> « ne met à l’abri de rien »; « entre dans le champ » -> « tombe sous le coup du texte ». / why: stronger legal-press verbs.
[fines] pass1 -> pass3: « c’est le moins élevé des deux qui s’applique » -> « c’est le plus bas des deux montants qui s’applique ». / why: avoids the repeated « élevé ».
[deep fakes] pass1 -> pass3: « Bien plus que des visages » -> « Le champ déborde largement les visages »; « L’intention importe peu. Le public prévisible, lui, compte » -> « L’intention n’entre pas en ligne de compte ; le public prévisible, si ». / why: the English "doesn't matter / does" pair rebuilt as a French antithesis.
[examples table] pass1 -> pass3: « Image produit générée par IA qui embellit le produit » -> « Image produit IA qui montre le produit sous un jour plus flatteur que la réalité »; « Cité comme exclu du régime allégé » -> « Explicitement exclu du régime allégé ». / why: "better than it is" rendered, not flattened.
[creative works] pass1 -> pass3: « c’est le volet informatif qui l’emporte » -> « l’informatif l’emporte »; « Prévoyez l’étiquetage complet » -> « Mieux vaut prévoir l’étiquetage complet ». / why: lighter, advisory register.
[label spec] pass1 -> pass3: « L’élément principal de l’étiquette est le sigle AI » -> « L’étiquette s’articule autour du sigle AI »; « reste visible sans aucune interaction » -> « se voit sans le moindre geste »; « en fait un cahier des charges opérationnel » -> « en tire un véritable cahier des charges ». / why: noun chains turned into verbs.
[two traps] pass1 -> pass3: « Le second : le code est facultatif, et il fait pourtant référence » -> « Ensuite, le code a beau être facultatif, c’est lui qui fait référence. » / why: native concessive.
[platforms] pass1 -> pass3: « Chaque plateforme a sa propre règle, écrite pour ses propres raisons » -> « Chaque plateforme suit sa propre règle, dictée par ses propres raisons ». / why: collocation.
[TikTok rule] pass1 -> pass3: « adultes anonymes » -> « particuliers majeurs »; « une règle qu’aucune étiquette ne règle » -> « qu’aucune étiquette ne contourne ». / why: accurate term for "private adults"; repeated root removed.
[menus] pass1 -> pass3: « ne comptez pas sur une simple étiquette de menu » -> « ne misez pas sur une étiquette reléguée dans un menu ». / why: idiomatic.
[triggers] pass1 -> pass3: « Ils ne se recoupent pas exactement » -> « Ils ne coïncident pas terme à terme »; « étiquetez selon la réponse la plus stricte » -> « étiquetez selon le plus exigeant ». / why: native phrasing of "label to the stricter answer".
[off-platform] pass1 -> pass3: « Un sigle intégré au master, lui, voyage avec le fichier » -> « Le sigle intégré au master, lui, le suit partout ». / why: rhythm; the sentence closes on the point.
[checklist] pass1 -> pass3: « Un passage par contenu » -> « Un contrôle par contenu, avant qu’il ne sorte de production »; « Consignez la réponse et sa justification » -> « ce qui la motive »; minor-edit item rebuilt with verbs (« Retoucher les couleurs ou les dimensions... reste mineur »). / why: verbal constructions over noun lists.
[app] pass1 -> pass3: « se fait déjà dans » -> « est déjà intégrée à »; « garde la trace » -> « consigne »; app labels kept as in the app: Historique, Validation, Éditeur d’images, « Contenu généré par l’IA », TikTok (Bêta). / why: interface labels match the localized app.
[China] pass1 -> pass3: « a légiféré la première, et elle en demande davantage » -> « a ouvert la voie, et se montre plus exigeante sur le fichier lui-même »; « ne mord que sur » -> « ne vise que ». / why: register.
[FAQ] pass1 -> pass3: H2 « Les questions des marques sur l’étiquetage IA dans l’UE » -> « Étiquetage IA dans l’UE : les questions des marques »; dates answer split in two sentences with « en revanche ». / why: French headline shape; lighter sentence.
[CTA] pass1 -> pass3: « Si une campagne destinée à l’Europe met en scène... envoyez-nous le brief » -> « Votre campagne européenne met en scène... ? Envoyez-nous le brief. » / why: native direct address.
[SEO] title kept at 59 characters (« AI Act : l’étiquetage IA des contenus de marque | hubStudio »); meta rewritten to « depuis quand, et comment s’y articulent les étiquettes IA ».
[SEO] meta pass2 -> pass3: « Article 50 de l’AI Act : ... » -> « AI Act, article 50 : ... » / why: brought to 155 characters without dropping a platform.

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass3: 欧盟《人工智能法》AI 标识：品牌内容该标什么 -> 欧盟《人工智能法》下的 AI 标识：品牌内容须知 / why: a 财经 headline, not a spoken question
[meta] pass1 -> pass3: 何时起适用，以及……与之如何对应 -> 标注什么、自何时起……又与之如何衔接 / why: two parallel clauses, tighter rhythm
[lede] pass1 -> pass3: 凡属深度伪造的内容都须带有……平台标签只能覆盖 -> 广告活动若含深度伪造，必须加上……平台标签只能分担 / why: verb-led, no "凡属……的内容" noun chain
[table, obligations] pass1 -> pass3: "Who"/"From" headers were prefilled 执行人/入口 (wrong for this table) -> 义务主体/适用起始日 / why: the column holds legal addressees and start dates
[table, obligations] pass1 -> pass3: 在明显属于……作品中使用 AI 的部署者 -> 将 AI 用于明显具有……性质作品的部署者 / why: shorter attributive, legal register
[after table] pass1 -> pass3: 提供者那几行，要问引擎厂商 -> 表中提供者各行，要去问引擎厂商……才是您或您的代理公司要承担的 / why: written register, not spoken "那几行"
[Omnibus] pass1 -> pass3: 改动了其中一个，而且已成定法 -> 改了其中一个，而且已是生效的法律，不再停留在提案阶段 / why: 定法 is not current usage
[Omnibus] pass1 -> pass3: 回顾谈判过程，只是因为…… -> 之所以还要回顾谈判过程，只因…… / why: native causal frame
[who labels] pass1 -> pass3: 谁有权决定 AI 的使用方式，谁就负责 -> 谁有权决定怎么用 AI，谁就负责加标识 / why: the answer names the duty, not a vague 负责
[who labels] pass1 -> pass3: 这样划线，许多品牌团队始料未及 -> 这条线划在哪里，不少品牌团队都没有想到 / why: less literary, more newsroom
[who labels] pass1 -> pass3: （用哪个引擎、用谁的合成面孔），就是在做决定 -> 比如选哪个引擎、用谁的合成面孔，就是在拍板 / why: 拍板 is the native verb for taking the call
[outside EU] pass1 -> pass3: 身在欧盟之外也无济于事 -> 企业设在欧盟以外也躲不开 / why: idiomatic, keeps the subject explicit
[fines] pass1 -> pass3: 以较高者为准；……以两者中较低者为准 -> 两者取其高；……两者取其低 / why: the set phrase of Chinese legal reporting
[deep fake table] pass1 -> pass3: 是，不享受创意作品的宽松待遇 / 被列为非深度伪造示例 -> 是，不享受创意作品的从宽待遇 / 明确列为反例 / why: shorter cells, standard legal wording
[deep fake table] pass1 -> pass3: 不逼真，不可能被当成真实 -> 不写实，无法以假乱真 / why: idiom instead of a calque
[creative work] pass1 -> pass3: 请按完整标识来规划 -> 规划时请按完整标识考虑 / why: smoother closing instruction
[label spec] pass1 -> pass3: 它应放在……视频须在开头显示，条件允许时每隔一段时间重复显示 -> 标识以大写字母 AI 为主体……条件允许时间隔重复 / why: cut the repeated 显示, spec register
[two traps] pass1 -> pass3: 有两点常让团队栽跟头 -> 有两点最容易让团队栽跟头……其二，行为准则虽属自愿，却依然是参照基准 / why: parallel 其一/其二 framing
[non-signers] pass1 -> pass3: 也可能收到监管机构更多的问询 -> 也可能招来监管机构更多的信息问询 / why: stronger verb, exact "requests for information"
[platforms] pass1 -> pass3: 以下内容于 2026 年 10 月 8 日查阅 -> 以下内容均查阅于 2026 年 10 月 8 日 / why: written order
[gaps, images] pass1 -> pass3: 但图片若属深度伪造，该法就有要求 -> 但图片一旦构成深度伪造，该法就要求加标识……直接把 AI 标记做进画面 / why: legal verb 构成, concrete action
[gaps, menus] pass1 -> pass3: 对深度伪造而言，不要只靠菜单里的标签 -> 遇到深度伪造，别只指望菜单里的标签 / why: short punchy line, as in the English
[gaps, tool edge] pass1 -> pass3: 工具有边界……就完全没有平台标签了 -> 工具的作用止于平台……就没有任何平台标签 / why: states the limit up front
[C2PA] pass1 -> pass3: 能否在您自己的制作流程中保留下来，是另一个问题，详见 -> 能否在您自己的制作流程中保全下来……对此有专门讨论 / why: link sentence reads as a pointer, not "see"
[checklist] pass1 -> pass3: 是谁决定在这件素材上使用 AI、又如何使用 -> 这件素材用不用 AI、怎么用，由谁决定 / why: question order a Chinese editor would use
[checklist] pass1 -> pass3: 静态图片，把 AI 标记放在…… -> 把标记嵌入母版。静态图……开头先加一句口头声明 / why: imperative heading, tighter items
[hubStudio] pass1 -> pass3: 其中一部分已内置于 hubStudio 应用。在 TikTok（测试版）中，发布步骤…… -> 这些步骤有一部分已内置于 hubStudio 应用。TikTok（测试版）的发布步骤…… / why: removes the doubled "发布"
[China] pass1 -> pass3: 每件素材都应按两者中更严格的标准制作 -> 按两地规则中更严的一方制作 / why: names what is compared
[FAQ images] pass1 -> pass3: 明显虚幻的图片 -> 一望即知是幻想的图片 / why: "plainly fantastical" rendered natively
[FAQ platform label] pass1 -> pass3: 在平台内部，标签清晰可辨即可满足 -> 在平台内部，只要标签清晰可辨，就够了 / why: direct answer to a yes/no question
[CTA] pass1 -> pass3: 如果您……出现合成的人物 -> 如果您……用到了合成的人物……我们会找出涉及这些内容的素材 / why: active verbs

## Publish

- Page created: `src/pages/resources/insights/eu-ai-act-labeling-brand-content.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
