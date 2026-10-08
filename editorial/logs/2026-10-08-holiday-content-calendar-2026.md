# Run log: 2026-10-08, holiday-content-calendar-2026

| Field | Value |
|---|---|
| Brief | 049 (wave two data module `editorial/scripts/wave2/49-holiday-content-calendar-2026.mjs`) |
| Slug | holiday-content-calendar-2026 |
| Research file | research/holiday-content-calendar-2026.md |
| Output | output/holiday-content-calendar-2026.md |
| Body word count | 3,456 with tables; 2,716 prose only (prose includes the 14 blockquote citations and the 7 FAQ answers) |
| Body char count | 19,139 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish run by the integrator) |
| Model used at every step | Claude Opus 5.5 for research, drafting and both quality loops; gpt-image-2 at high quality for the image. No cheaper path taken |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | 23 claims, C1 to C23 |
| R2 SERP mapped, four phrasings minimum | yes | six phrasings, about 55 results recorded by domain and page type |
| R3 primary sources for every number | yes | platform help articles, the Amazon Seller Central announcement, the USPS newsroom, OPM, GOV.UK, Service Public, EUR-Lex; captures in `research/holiday-content-calendar-2026/` |
| R4 Chinese-language web searched first | not applicable beyond the pointer | the page prints no China date; the 11.11 pointer rests on ledger rows from briefs 30 and 46 |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Meta-commissioned and Amazon-published performance statistics cut as market claims |
| R6 triangulated, conflicts published as ranges | yes | every date is single primary; no conflicts between primaries. The SERP's wrong Black Friday date (28 November) and its "28 days" arithmetic logged as do-not-publish |
| R7 research file written before drafting | yes | |
| R8 reconciled after drafting | yes | table in the research file; four unsourced characterizations removed |

**Gap statement, one sentence:** the ranking pages list holiday dates or sell
6 to 16 week plans with no source, and none counts back from what platforms,
carriers and regulators publish to a dated last day to brief and deliver.

**Research time spent:** about 80 minutes.

- Figures reused from the ledger: Amazon A+ review and content rules, Amazon main image rules and the synthetic performer tag (brief 31); Meta feed and Reels specs, TikTok auction in-feed specs (brief 32); the observation that no source publishes a creative lead time (brief 30) and that no approval-cycle benchmark exists (brief 39); the studio windows on the ecommerce and video production pages (brief 39 delivery rows).
- Claims cut because they could not be sourced: Meta's "start ads by mid-October" (primary not reached); Royal Mail 2026 dates (royalmail.com served Access Denied; aggregators printed 2024 weekdays); Amazon Black Friday Week 2026 dates (not in the announcement); TikTok learning phase thresholds; Google Merchant Center product review times; every seller lead time on the SERP.
- Conflicts published as a range rather than a single figure: none needed.
- Captures saved to `research/holiday-content-calendar-2026/`: 27 text files, check 1 and check 2.

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

1. Draft from the brief and research file: H1, a 55-word answer naming hubStudio once, the counted-back calendar table in the first screen with its method, then one question per H2.
2. Ten weaknesses: (a) the standfirst stated the Oct. 30 consequence as fact, not as the result of stated inputs; (b) the method paragraph called all inputs assumptions when two are first-party windows; (c) "catches holiday launches every year" unsourced; (d) "the most expensive day of the year" unsourced; (e) the TikTok "hook in the opening seconds" cell outside the gate; (f) Meta spec figures in prose without a blockquote; (g) "needs no ad at all for most brands" unsourced; (h) "the longest step in most holiday plans" unsourced; (i) the A+ refresh advice ignored Amazon's own ban on promotional language in A+; (j) "mid-October" for the shoot case was vague when the arithmetic gives Oct. 16.
3. Rewrite fixed all ten: standfirst conditioned on the counting, inputs split into assumptions and published windows, the four unsourced lines cut or rewritten, Meta specs moved into a cited blockquote, the A+ content rule added from the ledger with a new paragraph on why the deal message lives outside A+, Oct. 16 printed.
4. Production review: the Royal Mail line said "hadn't published" when the evidence is an access refusal; rewritten to "weren't available at source". Added a Reviewed line. Confirmed the app is described only with positioning-file facts and that scheduling is claimed for organic posts only, never ads.
5. AI-tell pass: no banned vocabulary found by search; "Here is what none of that changes" kept as a plain turn; two tidy closers flagged for iteration 7.
6. Em dash search: zero in the output, research file, brief module and this log. Fourteen blockquotes in the final file, each with a Source line, a date and a one-sentence method.
7. Cadence pass, the house variant: no planted errors. Broke three parallel structures ("every format, every offer and every market"; "products, deal prices, deal types"; the triad in the platforms paragraph), let the AI-production paragraph run long against one-line answers ("It shortens the making. It doesn't touch the queues."), added one parenthetical aside (the synthetic performer tag), cut two performing closers ("Don't let that become the reason it's briefed last", the "most expensive day" line).
8. Check 2: every cited URL re-rendered or re-fetched; every quoted phrase and figure found again (table in the research file). R8: every number traced to a claim row; nothing in the draft lacks one.
9. SEO: title 48 characters, meta description 140, excerpt 24 words, all inside 52 / 152 / 25. Primary query in the H1, in the first 100 words (first H2) and in one H2.
10. Second AI pass: replaced "The UK has no regulated date" (an unsourced legal claim) with the bank holiday facts; replaced "take days rather than a new shoot" (unsourced comparison) with "come from one approved master instead of a new shoot".
11. Human touch: FAQ answer on approvals corrected ("fall in Thanksgiving week", not "on the holiday weekend", which the dates contradicted); "The USPS ground date is still Dec. 17" replaced "stops ground delivery promises".
12. Visual formatting: four tables (calendar, platform deadlines, assets per moment, published windows), none over five columns; long lines rewrapped near 80 characters.
13. Five concepts (wall planner, gift and shipping label, sample crate at the door, retoucher at monitors, one product half dressed for December on an October studio table); the last chosen, the crate kept as runner-up; one prompt written, no person named.

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

Versions saved in the session scratch folder (ca-v1, ca-v3-to-v7, cq-final).

1. Newsroom read of the createarticle output: sentences already short; no change beyond the iteration 7 cadence work.
2. Ten weaknesses: Royal Mail evidence overstated; no freshness cue; UK regulatory claim unsourced; AI comparison unsourced; FAQ approval timing wrong against the table; "stops ground delivery promises" overstated; two lines over the wrap; one triad in the deals sentence; the email closer performing; the studio sentence joined to the Amazon tag sentence in one long paragraph.
3. Rewrite fixed all ten (see createarticle 4, 10, 11 and the edits listed there).
4. Production ready: yes after the fixes. Nothing missing against SPEC.md: H1, answer, two-plus tables, FAQ 7, CTA last, three blocks.
5. AI-undetectable pass: rewrote the "what AI does not change" paragraph, which repeated "still" five times in five sentences; it now opens "None of that moves anyone else's deadline" and varies its verbs.
6. Em dashes zero; blockquotes uniform (claim, then "Source:" with date and method). Straight quotes kept, matching every file in `output/` (the publish step typesets).
7. Human touch: kept the reporter asides ("'Most' is doing work in all three sentences", "That's Cyber Monday."); no slang.
8. SEO title, meta, excerpt kept from the brief; already under the house ceilings (48, 140, 24 words), so the skill's looser 60 / 156 were not used.
9. Second pass: checked for balanced sentence pairs; "It shortens the making. It doesn't touch the queues." kept as the one deliberate pair, and the next paragraph's opener changed so "queues" is not repeated.
10. Second human pass: "Few retail teams have a spare hour that day" replaced the absolute "Nobody".
11. Hostile reader, ten problems found and fixed in one pass: (1) a reader outside the US gets US business days, answered by the Europe line under the method; (2) Dec. 24 and Dec. 31 treated as working days, now stated with the fix; (3) no freshness cue, Reviewed line added; (4) Amazon start-date uncertainty buried, moved next to the A+ dates; (5) the A+ "refresh" looked pointless for a sale, answered by the content rule; (6) the shoot case vague, dated; (7) the Cyber Monday learning trap unclear, rewritten around scheduling; (8) "order by" banners had no end date, now Dec. 18; (9) the EU price rule read as legal advice, the practice line added; (10) pricing questions: none answerable without amounts, which the house bans, so the page points to the brief instead.
12. Structural ratio: one bold-label block (the FAQ questions, which are the format); the rest is prose and tables. No conversion needed.
13. AI marker hunt: three triads broken (see createarticle 7); no hollow openers; no "it's not just".
14. Read-aloud: "Keeping them costs less than it sounds" kept; "In November they overlap." kept as information (the 11.11 spot sale runs into the Black Friday production window), not a flourish.
15. Sniff test: blockquote formatting identical across all fourteen; first-person plural appears once, for the studio, as the positioning file prescribes; no em dash.
16. Pacing: the long Amazon section already turns on a one-line transition ("Keeping them costs less than it sounds"); the AI section opens on a two-sentence answer before its long paragraph. No lines added, no padding.
17. SEO and structure: title 48, meta 140, excerpt 24 words; one H1, eleven H2s, no H3; no markdown links; US spelling (checker pass).
18. Self-created patterns: "still" had become a tic (nine uses, five in one paragraph); cut to one. "On the counting" appeared in the standfirst and the first FAQ answer; the FAQ now reads "on this page's counting".
Final: SEO fields are in the frontmatter; nothing to fold.

## Image

- Prompt used: verbatim from the feature-image block (the October studio table, one amber candle jar half wrapped in red paper, a Chinese woman's hands tying the ribbon, sample boxes, window light from the left, 50mm at f/4, Portra-like grade, right two thirds left for type).
- Confirmed the prompt names no real person: yes (Portra 400 is a film stock).
- Attempts: one. Accepted on first look.
- AI-tells checklist on the final frame: hands have five fingers each, natural knuckles and a plain ring that does not melt into skin; one window light from the left and one consistent shadow direction across jar, mug and boxes; no legible text anywhere (boxes plain, monitor dark, phone face down); no bokeh circles; shelf props irregular, not aligned; table wood and paper carry texture; slight grain present. One thing to watch at publish size: the ribbon loops over the cork lid in a way a real tie could make, so it was kept.
- Saved to: `public/Images/insight-holiday-content-calendar-2026.webp`, 1536x1024 (no enlargement), webp quality 78, 105,578 bytes. Intermediate PNG kept in the session scratch folder only.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero. Platforms, carriers and regulators only; no SERP publisher named on the page |
| `$` occurrences, each one a category range with a date | zero in the output |
| Em dash occurrences | zero (output, research file, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; file ends on CTA: Send a brief |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none (checker pass) |
| Statistics in blockquotes with source, date and method | 14 of 14 |
| `node editorial/scripts/check-draft.mjs` | all hard checks passed |

## Sources

- New figures for the ledger, with both check dates: see "Ledger additions" below.
- Rows for the do-not-publish log: see the same section.

## Closed in this run

- First-party figures used, each with the page that already publishes it: paid social launch batch five to seven business days (`/services/design/ad-creative`); email template about a week (`/services/design/email-design`); single-SKU pack roughly two weeks and 20 to 50 SKU catalog three to four weeks (`/services/design/ecommerce`); studio shoot one to two weeks (`/services/design/video-production`); brief read within one business day and proposal within 48 hours (`/pricing`). Settled fallback 1 applied: printed as published policy, never as measured delivery data.
- Spec rows published under deviation 7: none (no China spec on the page).
- Claims cut and which section is now thinner: Royal Mail dates (the December section carries the US cutoff only); Amazon Black Friday Week dates (the Amazon section counts from Nov. 19 and says what moves if the week opens earlier); Meta's mid-October line (the learning-week section rests on the help articles alone).
- Briefs amended because the research or the live site proved them wrong: none. The brief was written in this run from the research.
- Live articles corrected because this piece contradicted them: none contradicted. One linked page is out of date on its own terms, listed under "Live pages this piece contradicts" for the integrator, who holds the shared files.
- Rows for `watch.csv`: see "Watch rows" below.
- Settled fallbacks applied: 1 (first-party windows), 4 (length over target: the overage is fourteen cited blockquotes, four tables and the FAQ; prose was not padded), 12 (no showcase clip; the page ships with its hero image).
- Runbook substitutions: this drafter may not edit `schedule.csv`, `watch.csv`, `verified-sources.md` or any `src/` file, so the ledger rows, watch rows and the stale-page fix are handed to the integrator below. Meta help articles serve no body to a plain fetch, so a logged-out headless Chromium render (Playwright from the repo) was used, as brief 32 did. The Google Merchant Center page rendered its FAQ index only; its text was read with curl.
- Integration, 2026-10-08: `singles-day-618-production-calendar` (page and `output/` draft) now carries Tmall's 2026 Double 11 dates from the ledger (first FAQ answer, a Tmall Singles Day 2026 table row, a sourced blockquote and one line of arithmetic after the table), `dateModifiedISO` 2026-10-08 and an amendment section in its research file. JD and Douyin 2026 dates were not researched; a watch row due 2026-10-12 rechecks them.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 49, holiday-content-calendar-2026)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 48 | 52 | yes |
| Meta description | 140 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Ledger additions

New section for `sources/verified-sources.md`:

### Holiday 2026 calendar: US and Europe platform, carrier and regulatory dates (added 2026-10-08, brief 49)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Thanksgiving Thursday 26 November 2026; Christmas Friday 25 December 2026; New Year's Day Friday 1 January 2027 | "US Office of Personnel Management, federal holidays 2026 and 2027" | opm.gov/policy-data-oversight/pay-leave/federal-holidays/ | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| UK: Christmas Day Friday 25 December 2026; Boxing Day bank holiday Monday 28 December 2026 (substitute day); New Year's Day Friday 1 January 2027; Scotland 2 January substitute Monday 4 January 2027 | "GOV.UK, UK bank holidays" | gov.uk/bank-holidays.json | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| USPS 2026: for expected delivery before 25 December, contiguous US, send by 17 December (Ground Advantage, First-Class Mail), 18 December (Priority Mail), 19 December (Priority Mail Express); Alaska, Hawaii, Puerto Rico and territories Ground Advantage 16 December | "US Postal Service newsroom release, 22 September 2026" | about.usps.com/newsroom/local-releases/ma/2026/0922-postal-service-recommends-2026-holiday-mailing-and-shipping-dates.htm | 2026-09-22 | primary | 2026-10-08 | 2026-10-08 | 49 |
| Amazon US: deal submission 8 July to 20 October 2026 for Black Friday Week and Cyber Monday, 8 July to 8 September for Prime Big Deal Days; Prime Big Deal Days prices excluded from the 30-day and 60-day lookback for the Black Friday Week maximum deal price; Black Friday Week and Cyber Monday inventory arrival 14 October (AWD), 21 October and 28 October (FBA by split option); Black Friday Week dates not stated | "Amazon Seller Central news post, 'Holiday 2026: Same fees, same eligibility, earlier deadlines', US store, July 2026" | sellercentral.amazon.com/seller-forums/discussions/t/3e31fbb7-04e0-4ed4-873e-f74b1052e2ff | July 2026 ("3 months ago" on 2026-10-08) | primary, US store | 2026-10-08 | 2026-10-08 | 49 |
| Meta: "Most ads are reviewed within 24 hours, although in some cases it may take longer"; creative, targeting, optimization and billing-event edits trigger a new review; a scheduled ad is reviewed on submission and delivers from its start date | "Meta Business Help Center, About ads in review" | facebook.com/business/help/204798856225114 | page undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| Meta: ad sets exit learning "usually ... after about 50 results in the week after the ad set's last significant edit"; ad sets in learning are less stable and usually have a higher CPA; significant edits include any change to ad creative and adding a new ad to the ad set | "Meta Business Help Center, About the learning phase; Significant edits and learning phase" | facebook.com/business/help/112167992830700; facebook.com/business/help/316478108955072 | pages undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| TikTok: "Typically most ads are reviewed within 24 hours, although in some cases, it may take longer"; editing creative triggers a review "which may take up to 24 hours" | "TikTok Ads Help Center, Ad Review FAQs, updated February 2025" | ads.tiktok.com/help/article/ad-review-faq | 2025-02, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| Google Ads: "Most ads are reviewed within one business day"; "If you need your ad reviewed by a particular date, submit the ad several days in advance"; a new webpage must be complete for the ad to be reviewed | "Google Ads Help, About the ad review process" | support.google.com/google-ads/answer/1722120 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 49 |
| Google Merchant Center: "We recommend that you submit promotions at least 24 hours before the effective start time"; review typically within 12 hours, up to 24; submit Monday to Friday in business hours | "Google Merchant Center Help, Promotion status FAQs" | support.google.com/merchants/answer/13509015 | read 2026-10-08 | primary | 2026-10-08 (WebFetch) | 2026-10-08 (curl) | 49 |
| France: winter sales open the second Wednesday of January at 8 a.m., advanced to the first Wednesday when the second falls after the 12th; 2026 ran 7 January to 3 February; four eastern departments on their own dates | "Service Public, the French government's information service, 12 December 2025" | service-public.gouv.fr/particuliers/actualites/A15407 | 2025-12-12 | primary | 2026-10-08 | 2026-10-08 | 49 |
| Derived: French winter sales 2027 open Wednesday 6 January 2027 at 8 a.m. in most of metropolitan France (second Wednesday is the 13th) | "the published rule applied to the 2027 calendar, 8 October 2026, official 2027 notice not yet published" | Arithmetic on the row above | 2026-10-08 | derived | 2026-10-08 | 2026-10-08 | 49 |
| EU: any announcement of a price reduction indicates the prior price, the lowest price applied in a period not shorter than 30 days before the reduction; measures applied from 28 May 2022 | "Directive (EU) 2019/2161, Article 6a of Directive 98/6/EC" | eur-lex.europa.eu CELEX 32019L2161 | 2019-11-27; applied 2022-05-28 | primary; national rules vary | 2026-10-08 | 2026-10-08 | 49 (also cited by brief 79) |
| Meta's own 2026 holiday post phases the season Q2 foundation, Q3 launch and optimize, Q4 execute at scale | "Meta for Business news post, 11 June 2026" | facebook.com/business/news/2026-winning-hearts-boosting-carts | 2026-06-11 | primary for the guidance only | 2026-10-08 | | research only, not printed |
| Derived: holiday calendar counted back in business days (US federal holidays skipped) with inputs of two days review and scheduling, three days sign-off, seven days production, two days proposal: Black Friday paid social in market 19 Nov, approved 17 Nov, files 12 Nov, brief 30 Oct; full row set in the research file C21 | "date arithmetic, 8 October 2026, on published platform, carrier and holiday dates and the studio's published windows; review and sign-off allowances are planning assumptions, not measurements" | research/holiday-content-calendar-2026.md | 2026-10-08 | derived | 2026-10-08 | 2026-10-08 | 49 |
| Derived: 38 days from Amazon's 20 October deal close to Black Friday; 17 days from Cyber Monday to the USPS Ground Advantage date; A+ in market 19 Nov means submit 10 Nov, files 5 Nov, brief 20 Oct for one SKU and 6 Oct for a 20 to 50 SKU catalog | "date arithmetic, 8 October 2026" | research file C22, C23 | 2026-10-08 | derived | 2026-10-08 | 2026-10-08 | 49 |
| Search-results audit: six buyer phrasings on holiday content calendars and Black Friday creative timing returned about 55 results, almost all vendor, agency or tool pages; lead times of 6 to 16 weeks printed with no source; one result gives Black Friday 2026 as 28 November; none cites a platform review time, the Amazon deal close or a carrier cutoff | "search-results audit run 8 October 2026 across six phrasings, publisher type recorded, no domain named" | R2 in the research file | 2026-10-08 | primary observation | 2026-10-08 | | 49 |

Check 2 confirmations for existing rows, all 2026-10-08, values unchanged:
Amazon A+ Content guide (review up to seven business days; no pricing,
promotional language, time-sensitive references or shipping details; Basic
970 x 300); Amazon Product image guide (RGB 255; 1,000 or more pixels for zoom;
contains-synthetic-performer); Meta Ads Guide Instagram Reels (1440 x 2560;
14 / 35 / 6) and Facebook Feed image (4:5, 1440 x 1800); TikTok auction in-feed
(9:16 at or above 540x960, updated June 2026). Add 49 to their "Used in".

For the "hubStudio delivery figures" table (Figure, Method still needed, Used in):

| Figure | Method still needed | Used in |
|---|---|---|
| Ad creative: five to seven business days for a full launch batch on a standard brief, including statics, video cuts and platform-native variants (ad-creative.astro:183) | Policy range, no engagement sample | 49 |
| Email design: about a week for a standard campaign template (email-design.astro:198) | Policy range, no engagement sample | 49 |

Add 49 to the "Used in" of the existing ecommerce (ecommerce.astro:174) and
video production (video-production.astro:205) rows from brief 39.

Do-not-publish rows:

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| "Start ads by mid-October to let Meta learn before the peak" | Agency blogs attributing it to Meta's Holiday Insights Center, brief 49 | Primary not reached; not in Meta's 11 June 2026 post | 2026-10-08 |
| Meta-commissioned holiday statistics (85 percent weekly use, 94 percent look to creators, 1.2x spend, 20 percent better cost per result) | Meta's 11 June 2026 post | Commissioned by the seller of the ads they flatter | 2026-10-08 |
| AWD "over 13 percent" more shipped units | Amazon's Holiday 2026 post | Published by the seller of the feature, no method | 2026-10-08 |
| Seller lead times for Black Friday: 6 weeks, 16 weeks, briefs due 15 October, creative settled by 30 September, 2 to 3 weeks per variation | Five vendor and agency playbooks, brief 49 SERP | No sample, no method, sellers of the preparation | 2026-10-08 |
| Black Friday 2026 on 28 November; "28 days between Thanksgiving and Christmas" | Link-tool and agency blogs | Wrong: 27 November; 29 days | 2026-10-08 |
| Green Monday as "third-largest shopping holiday"; Super Saturday significance | Link-tool blog | No source | 2026-10-08 |
| Royal Mail 2026 last posting dates | Aggregators printing 2024 weekday names under a 2026 heading | Not readable at source on 2026-10-08 (Access Denied); watch row | 2026-10-08 |
| TikTok learning phase "50 conversions in seven days" | Third-party blogs | Not read on a TikTok page | 2026-10-08 |
| Google Merchant Center product review "3 business days" | Third-party help pages | Not read on a Google page | 2026-10-08 |
| hubStudio ad creative "48 to 72 hours for first concept territories on a rush brief" | ad-creative.astro:183 | Not used; the standard-brief window is enough, and brief 32 logged the site's fast-turn counters as no-method | 2026-10-08 |

## Watch rows

```
2026-10-26,holiday-content-calendar-2026,"Amazon had not published the 2026 Black Friday Week start and end dates on 2026-10-08. Re-read the Seller Central news posts and the Deals for events help page. If Black Friday Week opens before Thursday Nov. 19, move the A+ in-market date and every A+ date on the page (submit Nov. 10, files Nov. 5, brief Oct. 20 and Oct. 6) earlier by the same number of business days, and the FAQ answer with them; if it opens on or after Nov. 19, add the dates to the Amazon section. Move the page's last updated date.",sellercentral.amazon.com/seller-forums/discussions/t/3e31fbb7-04e0-4ed4-873e-f74b1052e2ff,2026-10-08
2026-11-02,holiday-content-calendar-2026,"Royal Mail 2026 Christmas last posting dates were not readable at source on 2026-10-08 (Access Denied to a headless render). Read them in a normal browser. Add a UK 'order by' line to the December section, cited to Royal Mail, and a UK row to the calendar counted back with the page's inputs (two business days review, three sign-off, seven production, two proposal). Move the page's last updated date.",royalmail.com/christmas/last-posting-dates,2026-10-08
2026-12-15,holiday-content-calendar-2026,"The page prints the French winter sales 2027 opening as Wednesday Jan. 6, 2027, 8 a.m., derived from the published rule. Read the official 2027 notice on Service Public or entreprises.gouv.fr. If it confirms, change 'the date above is the rule applied to the calendar' to cite the notice; if it differs, fix the calendar row, the Europe section and the FAQ. Move the page's last updated date.",service-public.gouv.fr/particuliers/actualites,2026-10-08
2027-01-08,holiday-content-calendar-2026,"Quarterly recheck. Re-read Meta About ads in review (204798856225114), About the learning phase (112167992830700), Significant edits (316478108955072), TikTok Ad Review FAQs, Google Ads About the ad review process (1722120) and Google Merchant Center Promotion status FAQs (13509015). If any review time, the 50-results week or the significant-edit list changed, fix the platform table, the learning section and the FAQ, and move the last updated date. The 2026 season is over by now: add one line under the standfirst saying the dates are the 2026 season's.",facebook.com/business/help/204798856225114,2026-10-08
2027-07-01,holiday-content-calendar-2026,"Recount for the 2027 season from the 2027 sources: OPM 2027 holidays (Thanksgiving Nov. 25, 2027), Amazon's Holiday 2027 announcement, the USPS 2027 holiday dates, Royal Mail 2027, the French winter sales rule for January 2028. Keep this URL and the 2026 rows as published; publish the 2027 calendar under the editorial schedule and add a pointer to it under this page's standfirst.",opm.gov/policy-data-oversight/pay-leave/federal-holidays/,2026-10-08
```

## Live pages this piece contradicts

None. This piece prints no China date and contradicts no live page.

One page this piece links to is out of date on its own terms and should be
fixed in the same publish run: `src/pages/resources/insights/singles-day-618-production-calendar.astro`
(and `editorial/output/singles-day-618-production-calendar.md`) says in its
JD-and-Douyin section and its first FAQ answer that "no 2026 dates were
announced as of 10 September 2026". The ledger has carried Tmall's 2026 Double
11 dates since 2026-09-27 (brief 46 recheck: deposits from 8 p.m. on 15
October, spot sale 20 October to 13 November, attributed to "Chinese press
reporting the platform's 2026 Double 11 merchant rules, September 2026").
Fix: replace the "no 2026 dates" sentences with that row, cited as the ledger
words it, add a "Tmall Singles Day 2026" row to its Singles Day table, and move
its `dateModifiedISO` in `src/data/insights.ts`.

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/holiday-content-calendar-2026`, French address `/fr/ressources/analyses/calendrier-des-contenus-des-fetes-2026` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/holiday-content-calendar-2026/` and `.i18n-work/passes/zh/resources/insights/holiday-content-calendar-2026/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

First round:

[title] pass1 -> pass3: "Calendrier des contenus des fêtes 2026, à rebours | hubStudio" -> "Fêtes 2026 : calendrier des contenus à rebours | hubStudio" / why: 62 characters, over the 60 ceiling; the season leads, as a French headline would.
[meta] pass1 -> pass3: "la date limite de brief et de livraison de chaque contenu ... comptée à rebours depuis l’examen des publicités et l’expédition" -> "quand briefer et livrer chaque contenu des fêtes, à rebours des délais d’examen publicitaire et d’expédition" / why: noun chain replaced by two verbs, 145 characters.
[lede] pass1 -> pass3: "Briefez la publicité sociale du Black Friday après le vendredi 30 octobre et ... elle passera le Black Friday en pleine phase d’apprentissage" -> "Si le brief des publicités sociales du Black Friday part après le vendredi 30 octobre, la campagne passera le jour J en pleine phase d’apprentissage" / why: the English imperative-as-condition does not work in French; a plain conditional does.
[answer] pass1 -> pass3: "le dernier jour pour briefer ses publicités ... est le 30 octobre, et le renouvellement ... devait être briefé" -> "Ses publicités ... doivent pourtant être briefées au plus tard le 30 octobre, et un renouvellement ... aurait dû l’être le 6 octobre au plus tard" / why: "but" carried by "pourtant", past conditional for a deadline already gone.
[table] pass1: column heads "En ligne au plus tard / Fichiers livrés au plus tard / Brief au plus tard"; dates as "Ven. 27 nov.", "Ven. 1er janv. 2027", "Mer. 6 janv., 8 h" / why: French abbreviated weekday and month, "1er", 24-hour time.
[method] pass1 -> pass3: "Méthode de calcul : jours ouvrés uniquement ... Sept de production ... Deux pour la proposition écrite." -> "Comment les dates ont été calculées : seuls les jours ouvrés comptent ... La production en prend sept ... ; la proposition écrite, deux." / why: verbless English list fragments rebuilt as French sentences with an ellipsis.
[platform table] pass1 -> pass2: "examinées en 24 heures" -> "examinées sous 24 heures"; "Conséquence pour le plan" -> "Ce que cela implique pour le plan" / why: "sous" is the idiomatic deadline preposition.
[Meta quotes] pass1 -> pass2: "Dans les trois phrases, « la plupart » pèse lourd" -> pass3 "Dans ces trois phrases, tout repose sur « la plupart »" / why: "is doing work" has no literal French; the editor's version says what it means.
[learning phase] pass1 -> pass2: "Glissez un nouveau visuel ... et l’ensemble passera la journée à réapprendre" -> "Insérez un nouveau visuel ... : l’ensemble passera la journée à réapprendre" / why: the colon carries the consequence, as French prose does.
[Cyber Monday] pass1 -> pass3: "Le Cyber Monday est le piège. ... La voie la plus propre : l’intégrer" -> "Le Cyber Monday tend un piège. ... Mieux vaut l’intégrer" / why: "cleaner route" is an English image; "mieux vaut" is the native advice form.
[Amazon] pass1 -> pass2: "Les images et les pages A+ qui les entourent ne le sont pas, et elles suivent leur propre horloge" -> "Pas les images ni les pages A+ qui les accompagnent : elles obéissent à leur propre calendrier" / why: shorter, punchier, no borrowed "clock" image.
[Amazon] pass1 -> pass3: "Réduisez-le aux produits phares" -> "Recentrez-le sur les produits phares" / why: "cut it to" read as a calque.
[December] pass1 -> pass3: "Cette bascule, c’est la ligne Noël du calendrier, en ligne le vendredi 18 décembre, avec un brief attendu le lundi 30 novembre. Autrement dit le Cyber Monday." -> "Cette bascule, c’est la ligne Noël du calendrier : mise en ligne le vendredi 18 décembre, brief attendu le lundi 30 novembre, c’est-à-dire le jour du Cyber Monday." / why: removed the "ligne ... en ligne" echo and the verbless fragment.
[December] pass1 -> pass2: "équipes retail" -> "équipes de la distribution" / why: anglicism with a standard French term.
[Boxing Day] pass1 -> pass3: "C’est là la véritable échéance" -> "C’est là que se situe la vraie échéance" / why: smoother cadence.
[France] pass1 -> pass3: "La France encadre les dates de ses soldes, et la règle est fixée à l’avance" -> "En France, les dates des soldes sont réglementées, selon une règle connue d’avance" / why: one clause instead of two coordinated ones.
[EU price] pass1 -> pass3: "attend le responsable de l’historique des prix. Ce qui précède décrit une pratique de production" -> "attend le feu vert du responsable de l’historique des prix. Il s’agit ici d’une pratique de production" / why: native idiom, standard disclaimer form.
[formats] pass1 -> pass2: "avec 14 % en haut, 35 % en bas et 6 % de chaque côté laissés libres" -> "les 14 % du haut, les 35 % du bas et 6 % de chaque côté restent libres de tout texte, logo ou élément clé" / why: participle chain replaced by a main verb.
[email] pass1 -> pass3: "c’est la seule famille qui peut se décaler tard" -> "c’est la seule famille qui tolère un bouclage tardif" / why: "move late" rendered by the production idiom.
[shoot] pass1 -> pass3: "le brief recule jusqu’à deux semaines" -> "le brief avance de deux semaines au plus" / why: "recule" read as later; the brief moves earlier.
[AI section] pass1 -> pass2: "Ce que la génération comprime, c’est la déclinaison : une idée validée transformée dans chaque format" -> "La génération comprime surtout la déclinaison : une idée validée, adaptée à chaque format, à chaque offre et à chaque marché" / why: cleft sentence and participle chain dropped.
[AI section] pass1 -> pass3: "Les validations tiennent sur un seul fil ..., chaque version étant conservée : la variante Cyber Monday ne rouvre pas la discussion" -> "..., toutes versions conservées : la variante Cyber Monday ne rouvre pas le dossier du Black Friday" / why: absolute construction is native; "rouvrir le dossier" is the idiom. App labels kept: Éditeur d’images, Campagne, Validation, Bêta.
[limits] pass1 -> pass3: "Rien de tout cela ne déplace l’échéance de qui que ce soit d’autre" -> "Rien de tout cela ne déplace les échéances fixées par d’autres"; "a fermé le 20 octobre" -> "se referme le 20 octobre" / why: lighter phrasing; tense valid before and after the date.
[China] pass1 -> pass3: "les compte à rebours de la même façon" -> "en tire un compte à rebours selon la même méthode"; "En novembre, ils se chevauchent." folded into "deux calendriers, qui se chevauchent en novembre" / why: tighter close.
[FAQ] pass1 -> pass3: "Une page A+ Amazon renouvelée devait être briefée au plus tard le 20 octobre" -> "Pour une page A+ Amazon renouvelée, le brief devait partir le 20 octobre au plus tard"; "ces bannières doivent avoir des visuels de remplacement prêts" -> "il faut des visuels de remplacement prêts pour le lendemain" / why: passive and possessive chains replaced by active French.

Second round (leftovers after the English fixes):

Round 1 pass files kept as round1-*.json / round1-changes.md. This round: unit 177 only (English tense fix "closes on Oct. 20").

[files d’attente] pass1: round 1's final pass 3 sentence reused as is, already in the present: "La fenêtre des offres d’Amazon se referme le 20 octobre" / why: it matches the corrected English tense; the rest of the paragraph keeps its round 1 wording.

### Chinese changes

First round:

[title] pass1 -> pass3: 2026 节日季内容日历：从截止日倒推 -> 2026 年节日季内容日历：截止日倒推表 / why: noun title reads like a 36氪 explainer, year written in full.
[meta] pass1 -> pass3: 均按广告审核时长与寄送截止日倒推得出 -> 设问 + 本文按广告审核时长与寄送截止日逐一倒推 / why: a question hook instead of a trailing passive clause.
[lead] pass1 -> pass3: 简报若晚于 10 月 30 日（周五）才下……仍在学习期里打转 -> 简报若拖过 10 月 30 日（周五）……广告仍困在学习期 / why: tighter verb, less spoken.
[lead] pass1 -> pass3: 倒推出简报最晚须送达的那一天 -> 倒推出简报最晚必须发出的那一天 / why: the team sends the brief; 送达 kept an English "land" image.
[calendar h2] pass1 -> pass2: 倒推之下……是什么样子？ -> 从截止日倒推，2026 年节日季内容日历如何排布？ / why: 是什么样子 is spoken register.
[calendar intro] pass1 -> pass2: 2026 年的黑色星期五（黑五）是 -> 2026 年黑色星期五（下称黑五）落在 / why: press convention for a short form, stronger verb.
[method note] pass1 -> pass3: 推算方法……各行日期随之移动 -> 推算口径……表中日期也会随之调整 / why: 口径 is the finance-press word; ending no longer calqued.
[platform h2] pass1 -> pass2: 哪些平台截止日真正卡人？ -> 哪些平台截止日真正说了算？ / why: 卡人 too colloquial for a heading.
[platform intro] pass1 -> pass3: 计划应当围绕这几个日期来搭，因为加多少班都挪不动它们 -> 排期就该围绕它们搭建，因为加再多班也撼动不了 / why: rhythm and a stronger closing verb.
[platform table] pass1 -> pass2: 同样预留两个工作日 / 黑五前 38 天即锁定促销 -> 同样两个工作日 / 促销在黑五前 38 天即已锁定 / why: table cells shortened, subject first.
[review quotes] pass1 -> pass2: 大多数广告会在 24 小时内完成审核 -> 大多数广告会在 24 小时内审完 / why: 完成审核 is a noun-chain calque.
["Most"] pass1 -> pass2: “大多数”三个字都分量不轻 -> 三句话里的“大多数”都不是虚词 / why: a native editor's turn of phrase.
[learning h2 intro] pass1 -> pass3: Meta 说明了这段时间通常有多长 -> 这段时间通常持续多久，Meta 有明确说明 / why: topic-comment order reads Chinese.
[Cyber Monday] pass1 -> pass3: 网络星期一才是陷阱 -> 真正的陷阱在网络星期一 / why: natural emphasis order.
[Amazon] pass1 -> pass2: 这比黑五早了 38 天。到 10 月 20 日，促销本身已提报完毕 -> 比黑五足足早 38 天。10 月 20 日之前，提报的是促销本身 / why: shorter, keeps the stress on the gap.
[Amazon] pass1 -> pass3: 要么缩减到主推商品 -> 要么只做主推商品 / why: plain business verb.
[Amazon] pass1 -> pass3: <a1>Amazon 平台页面</a1>对该平台的制作工作有更详细的介绍 -> 该平台上的制作工作，详见 <a1>Amazon 平台页面</a1> / why: 详见 is the standard cross-reference form.
[December] pass1 -> pass3: 随后，信息必须掉头 -> 随后，传播口径整个掉头 / why: 信息 was a literal "message".
[December] pass1 -> pass2: 截止日不再是促销日，而是送达日 -> 截止日不再由促销决定，而由送达决定 / why: parallel verbs instead of copula.
[Boxing Day] pass1 -> pass3: 那是圣诞节前最后一个完整的工作周 -> 即圣诞前最后一个完整工作周的周五 / why: a date cannot be a week; fixed the English-shaped apposition.
[EU prices] pass1 -> pass3: 宣布降价的促销视觉还多一重依赖 -> 凡是宣布降价的促销画面，还多一层制约 / why: 依赖 was a calque of "dependency".
[assets] pass1 -> pass3: 每类素材都有平台公布的规格，节日季也不会变 -> 每类素材都有平台公布的固定规格，节日季也不会例外 / why: rhythm.
[AI h2 lead] pass1 -> pass3: 它缩短的是制作，排队一点也缩短不了 -> 它缩短的是制作，至于排队，一分钟也省不下 / why: sharper antithesis.
[AI app para] pass1 -> pass3: 生成技术压缩的是出版本 -> 生成技术真正压缩的是多版本制作 / why: 出版本 was ambiguous; app labels kept (图片编辑器, 营销活动, 审核, 测试版).
[AI limits] pass1 -> pass3: 但这些都挪不动别人的截止日 -> 可别人定下的截止日，这些一个也挪不动 / why: native contrastive opening.
[China] pass1 -> pass3: 在两个市场都有销售的品牌要同时跑两本日历，而两者在 11 月重叠 -> 两地都有生意的品牌得同时跑两本日历，11 月两者还会撞在一起 / why: livelier close without slang.
[FAQ] pass1 -> pass3: 关于 2026 年节日季日历的常见问题 / 应在何时下简报 -> 2026 年节日季日历常见问题 / 最晚何时下简报 / why: drop 关于, match the search phrasing.

Second round (leftovers after the English fixes):

[shortens the making] round 1 -> pass1: Amazon 的促销提报窗口已于 10 月 20 日关闭 -> 将于 10 月 20 日关闭 / why: the English now says the window "closes on Oct. 20"; on October 8 it is still open, so the Chinese moves from past to future.
[shortens the making] pass1 -> pass2: 将于 10 月 20 日关闭 -> 10 月 20 日截止 / why: 截止 is the word Chinese trade copy uses for a submission window, and it sits with 截止日 two sentences later; the rest of the paragraph keeps its round-1 wording.
[shortens the making] pass3: no further change; the sentence matches the deal-window table row (10 月 20 日前提报).

## Publish

- Page created: `src/pages/resources/insights/holiday-content-calendar-2026.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
