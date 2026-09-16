# Research: hisense-self-serve-content-platform

| Field | Value |
|---|---|
| Brief | 048 |
| Target query | self-serve ai content platform for brands |
| Gap statement (one sentence) | Provisional, pending R2: the one published proof point for this deployment (live in eight weeks, thousands of assets a week, generating from day one) states no start point, no counting rule and no approver, and the method-stated material that explains what such a deployment involves (adapter fine-tuning, a voluntary US generative AI risk profile, an AI management system standard, provenance guidance) sits in papers and standards documents rather than on any page that connects it to a brand deployment. |
| Research time spent | About 85 minutes active. First-party pages and primary standards first. No SERP work possible (see R2) |
| Written | 2026-09-10 |

Scope note for the writer. This is a proof page built on a first-party case
study. Every HiSense figure runs only as a published client result attributed
to the HiSense case study page, never as a measurement. The governance,
provenance and disclosure sections describe production practice, not legal
advice, and the page says so. **Two gate failures are flagged before anything
else:** R2 was not run (the session search budget was exhausted), and the brief's
slot requirement, one delivery-record number with its method stated, cannot be
met because no case figure has a method. See "Notes for the writer".

## R1. What has to be true before anything is looked up

Mapped before any fetch. Each item resolved in the claims table.

| # | Claim the page needs | Resolution |
|---|---|---|
| 1 | HiSense went live on a self-serve content platform in eight weeks | **Holds, first-party only.** Published on the case page as a result. No start point stated. Runs attributed, never as measured |
| 2 | The platform produced thousands of brand assets a week after launch | **Holds, first-party only.** "1000s/week" with no count, no period, no counting rule. Runs attributed as the page's own wording, never converted to a number |
| 3 | Teams were generating from day one with no ramp-up | **Holds, first-party only.** No count of teams, no definition of ramp-up |
| 4 | HiSense is "the world's second-largest TV brand" | **Cut.** Readable independent trackers conflict by period and put HiSense third by branded units in 1Q26 and 1H26. The case page gives no tracker, period or metric. See R6 |
| 5 | The deployment served North America, for internal teams and outside agencies | **Holds, first-party.** Case page facts block, challenge and delivered list |
| 6 | Per-category adapter models keep assets accurate to the actual product | **Mechanism holds** (case page names product-specific LoRA models per category; the 2021 method paper, re-read today, describes the mechanism). **The accuracy claim is cut**: "never an approximation of it" is an absolute with no measurement |
| 7 | Custom agents and workflows were built for HiSense | **Holds, first-party description.** No detail on what they do |
| 8 | North American consumer preference research was trained into the platform | **Holds as the page's description only.** The research is not named. "Output resonates by default" is an unmeasured outcome and is cut |
| 9 | Fine-tuned image models have documented failure modes, and automated fidelity scores only partly track human judgment, so a human approval gate is defensible | **Holds, reused** from brief 29, peer-reviewed |
| 10 | A certifiable international AI management system standard exists | **Holds, triangulated.** ISO/IEC 42001:2023, ledger row, check 2 attempted today |
| 11 | A published US framework describes deployment approval thresholds, sharing pre-deployment test results with whoever holds release approval, and periodic provenance review for generative AI | **Holds, primary.** NIST AI 600-1, July 2024, read in full text today, voluntary |
| 12 | Provenance marks can be lost on export or screenshot | **Holds, reused** from brief 25, the standards body's own deployment guidance |
| 13 | Labeling duty sits with the brand, the agency or the platform | **Cut.** Ledger hard block 2. Labeling stays unallocated |
| 14 | A US federal rule requires disclosure of AI-generated product imagery in ads | **Breaks.** No FTC instrument read today addresses it. Leave it out |
| 15 | A US state statute requires disclosure where an ad contains a synthetic performer | **Holds conditionally.** New York S8420A, re-read today. Applies only to ads with a synthetic performer and actual knowledge. The case page does not say the HiSense assets depict people |
| 16 | Who approves assets generated on the HiSense platform | **Breaks.** The case page is silent. The only approval mention is the baseline, "approval cycles that ran long". Production practice only |
| 17 | A benchmark for how long a brand content platform takes to deploy | **Cut.** No source was read and no search could be run. Do not state that one exists or that none exists |
| 18 | Eight weeks, from what to what | **Breaks as a definition.** End point published ("Platform live and ready for retail season"); start point not published; "operational within two months" is published as the requirement, not the measured window |
| 19 | hub4You is built by the studio and run by the brand's own team on private infrastructure | **Holds, first-party**, hub4you page |
| 20 | The custom models belong to the client and every asset is documented | **Holds as published studio policy**, AI excellence page, re-read in the repo today. Not stated on the HiSense case page, so never written as a HiSense fact |
| 21 | Three to six weeks from brief to trained model | **Holds as a published range only**, AI excellence page. Never subtracted from the eight weeks |
| 22 | Internal approval from 22 to 78 percent, output scaled 7x | **Blocked.** Ledger delivery-figure rows and the brief 29 do-not-publish block |

## R2. SERP map

**Not run. R2 is incomplete and blocks drafting until it is rerun.** On
10 September 2026 the four buyer queries in the brief were issued as the first
searches of this research pass. Every call returned "Web search was not
performed: this session has used its web search budget (200 of 200 WebSearch
calls)", the session-wide limit shared with the parallel research agents. No
result list came back for any query. Three further searches issued in the same
batch (tracker queries in Chinese and English) returned the same message. The
limit was not worked around by scraping a search engine through a page fetch,
because that would bypass an explicit guardrail. The tracker and standards
pages below were reached by fetching publisher URLs directly.

| Query | Issued | Results returned | Status |
|---|---|---|---|
| self-serve ai content platform for brands | 2026-09-10 | 0, search budget exhausted | not run |
| brand ai content platform deployment | 2026-09-10 | 0, search budget exhausted | not run |
| how long to deploy an ai content platform | 2026-09-10 | 0, search budget exhausted | not run |
| agencies using a brand ai platform | 2026-09-10 | 0, search budget exhausted | not run |

Results per query: 0 recorded. Publisher-type counts: none, because nothing was
observed. No domain, page type or age is recorded, and nothing in this file is
inferred from a SERP.

**The bar:** not measured. Do not borrow one from memory or from another brief.

**The gap, in one sentence:** not established by R2. The provisional gap in the
header rests only on what was read directly and must be tested against the
SERP before it drives the H1.

**H1 consequence:** none can be drawn until R2 runs. The brief's working H1 is
kept provisionally.

**What the orchestrator must do:** raise the session search limit or rerun R2
in a fresh session, record up to ten results per query with domain, page type,
what it answers, what it misses and age, count publisher types, then replace
this block. Adjacent findings the rerun should test against, from different
queries and not a substitute: brief 18 found 25 of 36 results on four creative
automation phrasings seller-published; brief 29 found 25 of 29 English results
on brand model training seller-published, with zero carrying an approval rate
with a method.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified.
Anything marked unverified is cut from the outline before writing.

### A. First-party: what the site publishes about HiSense and hub4You

Read in the repo and on the live site on 10 September 2026. The live
`/work/hisense` page matched `src/data/case-studies.ts` word for word on every
field checked. The case page carries no publication date, no author and no
method note. Git history shows the HiSense entry added in commit `cb714d9` on
2026-05-19 and unchanged since. The engagement date and the retail season are
not published.

| Claim | Source | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Result: "8 weeks", label "Platform live and ready for retail season" | `src/data/case-studies.ts` line 426; live https://www.hubstudio.ai/work/hisense | read 2026-09-10; entry dated 2026-05-19 in git | not stated | none stated | hubStudio, the party the result flatters | first-party, published, no method |
| Result: "1000s/week", label "Brand assets produced after launch" | same, line 427 | same | not stated | none stated; no count, period or asset definition | same | first-party, published, no method |
| Result: "Day one", label "Teams generating with no ramp-up" | same, line 428 | same | not stated (no team count) | none stated | same | first-party, published, no method |
| H1 "A self-serve content platform, live in eight weeks"; category "Platform deployment"; industry "Consumer electronics"; region "North America" | same, lines 384 to 387 | same | n/a | n/a | same | first-party |
| Summary: "HiSense needed its teams and agencies to generate thousands of assets a week for North America. We deployed hub4You with custom-trained models and had it live before retail season." | same, line 389 | same | n/a | n/a | same | first-party |
| Challenge, sentence 1: "HiSense, the world's second-largest TV brand, was pushing hard into North America." | same, line 395 | same | n/a | None stated. A third-party market claim | same | **unverified as carried; cut, see section B** |
| Challenge, baseline: "separate product shoots, an agency briefed for every campaign, and approval cycles that ran long" | same, line 395 | same | n/a | Qualitative, no durations | same | first-party description |
| Challenge, the ask: a deployment of hub4You "customised so internal teams and outside agencies could independently produce thousands of weekly assets", to "understand HiSense products, brand visuals and North American taste", "operational within two months to support major retail partnerships" | same, line 396 | same | n/a | A requirement, not a result | same | first-party. British spelling in source; paraphrase in American English |
| Approach: "Dedicated LoRA models for each category keep generated assets accurate to the actual product, never an approximation of it." | same, line 403 | same | n/a | Accuracy asserted, not measured | same | mechanism first-party; accuracy claim unverified, cut |
| Approach: platform "learned HiSense visual language and had North American consumer preference research trained into it, so output resonates by default" | same, line 407 | same | n/a | Research unnamed; outcome unmeasured | same | description first-party; "resonates by default" unverified, cut |
| Approach: "Specialised AIGC agents and workflows go beyond the standard feature set" | same, line 411 | same | n/a | n/a | same | first-party description |
| Approach: "Teams start from very little: the platform supplies the brand understanding, so a brief becomes finished assets fast." | same, line 415 | same | n/a | "fast" unquantified | same | first-party description, no figure |
| Delivered: hub4You SaaS platform customized for HiSense; product-specific LoRA models per category; custom AIGC agents and production workflows; brand-trained generation tuned to North American preferences; self-serve access for internal teams and external agencies | same, lines 419 to 423 | same | n/a | n/a | same | first-party |
| Services: hub4You platform, custom model training, AIGC agents, workflow design | same, line 430 | same | n/a | n/a | same | first-party |
| Home page case card: HiSense, "Consumer tech", "Product visuals across every channel and format" | `src/pages/index.astro` line 174 | read 2026-09-10 | n/a | n/a | same | first-party, adds nothing the case page lacks |
| AI excellence page: "HiSense in consumer electronics, age20 in beauty, both running always-on content programs through the studio." | `src/pages/the-studio/ai-excellence.astro` line 78 | read 2026-09-10 | n/a | n/a | same | first-party. A studio-program detail not on the case page; optional, see writer notes |
| AI excellence page, alt text: "A HiSense brand video frame produced through the hubStudio AIGC pipeline." | same, line 163 | read 2026-09-10 | n/a | n/a | same | first-party alt text. Not a claim to run |
| Service and platform pages list HiSense among clients: ad creative "Brands shipped this year include HiSense" (line 379); creative strategy "Studio samples include HiSense" (357); ecommerce, social media, packaging "Clients have included HiSense" (368, 368, 345); pitch deck "Past clients have included HiSense" (363); website design "category pages for HiSense" (403); short video "We deliver short-form video for HiSense" (380); video production and TikTok "Recent campaigns include work for ... HiSense" (367, 310) | `src/pages/services/design/*.astro`, `src/pages/solutions/platforms/tiktok.astro` | read 2026-09-10 | n/a | n/a | same | first-party client lists. Not about the platform. "this year" and "recent" are undated relative terms; do not use |
| hub4you page: "hub4You is the platform half of hubStudio. Custom AI agents, trained on your brand and your products, on private infrastructure, operated by your team. The studio builds it. You run it." | `src/pages/hub4you.astro` lines 135 to 137; live https://www.hubstudio.ai/hub4you | read 2026-09-10 | n/a | n/a | same | first-party product description |
| hub4you page: "Private infrastructure": "Dedicated GPU pipelines and a private model environment. Your product data and your brand training stay yours, isolated from any shared or public model." | same, line 28 | same | n/a | n/a | same | first-party |
| hub4you page: "hub4You plugs into the DAM, PIM, and commerce platform you already run"; integrations list six named software products | same, lines 36, 61 to 65 | same | n/a | n/a | same | first-party. The integration product names are software vendors and never reach the article |
| hub4you page: the brand's team "at the controls"; "Most brands begin with full-service production and move to hub4You as the volume grows." | same, lines 167 to 169, 267 to 268 | same | n/a | n/a | same | first-party. No figure, no client named |
| AI excellence page: "The custom models we train on your brand are your property, not ours. Full stop." and "Every asset documented: which model was used, which references trained it, which prompts produced it." | `src/pages/the-studio/ai-excellence.astro` lines 223, 224 | read 2026-09-10 | n/a | Published policy | same | first-party policy. Not stated on the HiSense case page |
| AI excellence page: "Three to six weeks from brief to trained model, depending on the depth of the brand library." | same, line 232 (pipeline label line 116) | read 2026-09-10 | not stated | none stated | same | first-party published range, no method |

### B. The third-party line: "the world's second-largest TV brand"

Chinese-language web first, per R4, then English. Every attempt recorded.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Global branded TV shipments 47.12 million units in 1Q26; "the top five were Samsung, TCL, Hisense, LGE, and Xiaomi, in that order" | trendforce.com/presscenter/news/20260521-13055.html | 2026-05-21 | Global branded shipments, brand count not stated on the page | Tracker's own research, branded shipments in units; no methodology paragraph on the release | TrendForce, a market intelligence firm that sells the underlying tracker. Not a TV maker | primary for what the release states; method thin |
| Global TV shipments 93.74 million units in 1H26, up 1.3 percent; Samsung "remained the market leader" at 17.6 million; TCL 15.08 million; Hisense "TV shipments rose 3% YoY to 14.23 million units in 1H26"; LGE 11.3 million | trendforce.com/presscenter/news/20260821-13193.html | 2026-08-21 | Global shipments, brand coverage not stated | Units. The release states no data scope and does not say whether sub-brands or ODM volume are counted; confirmed on a second read asking for scope sentences | Same firm | primary for what the release states; method thin |
| The firm's paid tracker behind these releases: "yearly and quarterly shipment data and shipment forecast of the global TV brand vendors", monthly, listed at 10,000 US dollars | trendforce.com/research/download/RP260731GF | 2026-07-31 | n/a | Report description page | Same firm | primary as to coverage; data not read |
| "On a single-month basis, the shipment ranking in July was Samsung, Hisense, LGE and TCL"; global TV shipments grew 1 percent year on year in July 2026 | counterpointresearch.com/en/reports/monthly-global-tv-shipments-tracker-july-2026 | 2026-09-02 | Monthly tracker "covering monthly TV shipments segmented by region, front plane technology, and brand" | Units, one month; full data paywalled | Counterpoint, a market research firm selling the tracker | single-source, one month |
| No full-year 2025 brand ranking was reachable on either tracker's listing pages | TrendForce TVs category pages 1 and 2, TrendForce consumer electronics press pages 1 and 2, Counterpoint display coverage pages 1 and 2, Counterpoint insights listing | 2026-09-10 | n/a | Listing pages read directly | n/a | observation, not an absence claim about the trackers' archives |
| Omdia press release listing | omdia.tech.informa.com/pr | 2026-09-10 | n/a | HTTP 403 to automated fetch | n/a | **not read** |
| Chinese-language trackers | sigmaintell.com (certificate verification failure), runto.com.cn (socket closed on two attempts), avcrevo.com (DNS lookup failed) | 2026-09-10 | n/a | Direct fetch attempts; the Chinese-language search queries hit the exhausted search budget | n/a | **not read**. R4 attempted and failed |
| Hisense's own ranking claim and its tracker attribution | global.hisense.com/news and hisense.com both 302 to hisense-usa.com; the US home page carries no ranking sentence | 2026-09-10 | n/a | Direct fetch | The client | **not found**. Not an independent source in any case |
| The case page's line carries no tracker, period or metric | `src/data/case-studies.ts` line 395 | 2026-09-10 | n/a | Read | hubStudio | **unverified. Cut** |

Resolution: **cut.** The only independent trackers readable on 10 September
2026 put HiSense third by branded units in 1Q26 and in 1H26, and second in a
single month (July 2026) on a different tracker. The undated superlative on the
case page matches one monthly reading and conflicts with both half-year and
quarter readings. Revenue rankings were not published on any page read.

### C. How a brand model is built and how its accuracy is judged

Reused from brief 29 (`research/training-a-brand-model-that-stays-on-brand.md`),
not re-researched, except the mechanism row, which got its check 2 today.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Adapter-style fine-tuning "freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer" | arxiv.org/abs/2106.09685 | submitted 2021-06-17; abstract re-read 2026-09-10 | n/a | Method paper | Company research lab and academic authors | primary for the mechanism only (check 2 passed) |
| Fine-tuning failure modes: rare contexts, context entangled with subject appearance, overfitting when prompts resemble training images, "some subjects are easier to learn than others" | arxiv.org/abs/2208.12242 | CVPR 2023 | 30 subjects, 3,000 images | Authors' limitations section | Company research lab | primary (brief 29) |
| Automated image-similarity scores reach 50.72 and 60.98 percent of human-to-human agreement on subject preservation | arxiv.org/html/2406.16855v2, Table 4 | ICLR 2025 | 150 reference images, 1,350 prompts, 7 annotators | Pearson correlation as a share of human-to-human agreement | Not stated | primary (brief 29) |
| Diffusion models can emit training images, from photographs of people to trademarked logos | arxiv.org/abs/2301.13188 | USENIX Security 2023 | over 1,000 extracted examples | Extraction attack on large web-trained models | Company labs and universities | primary (brief 29), large-model scope only |

### D. Governance: management system standard and US risk framework

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| ISO/IEC 42001:2023, "Information technology, Artificial intelligence, Management system", published 18 December 2023, status published; establishes requirements for an organization's AI management system | aistandardshub.org/ai-standards/information-technology-artificial-intelligence-management-system/ (read 2026-09-10); iso.org/standard/42001 returned 403 again on 2026-09-10 | 2023-12-18 | n/a | Standards record on a standards-information surface; ledger row triangulated on 2026-09-09 | Standards bodies | triangulated (ledger row; check 2 on the AI Standards Hub surface passed, iso.org still blocked) |
| Certification against ISO/IEC 42001 is issued by an accredited certification body, not self-declared | Ledger row (2026-09-09), published on the site in `questions-to-ask-ai-production-partner.astro` line 182 | 2026-09-09 | n/a | Ledger | n/a | triangulated (reused; not re-read at source today) |
| No page on the site claims ISO/IEC 42001 certification for hubStudio, hub4You or the HiSense deployment | grep of `src/` for 42001, ISO/IEC and NIST, 2026-09-10: one hit, an explanatory quote in an insight | 2026-09-10 | n/a | Repo search | n/a | primary, as a negative finding about the site |
| NIST AI RMF 1.0 "Released on January 26, 2023", "intended for voluntary use" | nist.gov/itl/ai-risk-management-framework | read 2026-09-10 | n/a | The agency's own framework page | US National Institute of Standards and Technology | primary |
| NIST AI 600-1, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile", July 2024, "a cross-sectoral profile of and companion resource for the AI Risk Management Framework"; its suggested actions "primarily address" four considerations: "Governance, Content Provenance, Pre-deployment Testing, and Incident Disclosure" | nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf, section 1, pages 1 and 2 (full text extracted locally) | July 2024; approved by the NIST Editorial Review Board 2024-07-25 | n/a | Agency publication informed by a public working group | Same agency | primary |
| GV-1.3-002: "Establish minimum thresholds for performance or assurance criteria and review as part of deployment approval ("go/"no-go") policies, procedures, and processes, with reviewed processes and approval thresholds reflecting measurement of GAI capabilities and risks." | same PDF, GOVERN 1.3 | July 2024 | n/a | Suggested action, voluntary | Same | primary. Note the source's own stray quotation mark in "go/"no-go" |
| MS-2.3-003: "Share results of pre-deployment testing with relevant GAI Actors, such as those with system release approval authority." | same PDF, MEASURE 2.3, page 30 | July 2024 | n/a | Suggested action | Same | primary |
| GV-1.5-001: "Define organizational responsibilities for periodic review of content provenance and incident monitoring for GAI systems." | same PDF, GOVERN 1.5 | July 2024 | n/a | Suggested action | Same | primary |
| Appendix A.1.2: "Organizations' use of GAI systems may also warrant additional human review, tracking and documentation, and greater management oversight." | same PDF, A.1.2 Organizational Governance | July 2024 | n/a | Agency discussion | Same | primary |
| Appendix A.1.4: "Currently available pre-deployment TEVV processes used for GAI applications may be inadequate, non-systematically applied, or fail to reflect or mismatched to deployment contexts." | same PDF, A.1.4 | July 2024 | n/a | Agency discussion | Same | primary |
| The profile's twelve risks include Confabulation, Data Privacy, Harmful Bias or Homogenization, Human-AI Configuration, Information Integrity, Intellectual Property, and Value Chain and Component Integration | same PDF, section 2 | July 2024 | n/a | Agency list | Same | primary (names only; do not publish the list as a checklist a brand must meet) |

### E. Provenance and labeling

Reused verbatim from briefs 23, 24 and 25. Not re-researched. Labeling duties
stay unallocated (ledger hard block 2).

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| The standards body's deployment guidance warns that screenshotting or re-exporting through tools that remove metadata can strip Content Credentials, and tells adopters to require vendor demonstrations that reflect the actual workflow in use | c2pa.org/wp-content/uploads/sites/33/2026/07/Content-Credentials-Deployment-Guidance.pdf | 2026-07-08 | n/a | Guidance document read in full (brief 25) | Standards body | primary (reused) |
| Specification concession: an asset can become separated from its manifest through removal or corruption of metadata; fingerprint lookup is the recovery path | spec.c2pa.org, version 2.4 | 2026-04 | n/a | Specification text (brief 25) | Standards body | primary (reused) |
| Independent formal-methods analysis: the specifications fail their claimed security goals and should not yet be relied on for high-stakes uses | arxiv.org/abs/2604.24890 | 2026-04-23 | n/a | Protocol analysis (brief 25) | University and government lab | primary as to the analysis (reused) |
| CAC Labeling Measures Article 5 implicit label in metadata; Article 4 explicit label on download, copy or export | cac.gov.cn/2025-03/14/c_1743654684782215.htm | 2025-03-14, in force 2025-09-01 | n/a | Instrument text (brief 23) | Issuing bodies | primary (reused). Scope for a North America deployment not researched |

### F. US disclosure guidance for AI-generated brand imagery

The case is for North America, so this was checked. Canada was not researched.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| New York S8420A, chapter 617 of 2025, signed 11 December 2025: a covered person "shall conspicuously disclose in such advertisement that a synthetic performer is in such advertisement", where the person has actual knowledge; synthetic performer defined as a digitally created asset intended to create the impression of a performance by a human performer not recognizable as any identifiable natural performer; 1,000 US dollars first violation, 5,000 each subsequent; in force 180 days after signing (9 June 2026) | nysenate.gov/legislation/bills/2025/S8420/amendment/A | 2025-12-11; re-read 2026-09-10 | n/a | Bill text on the legislature's own site | State of New York | primary (ledger row, check 2 passed) |
| FTC Endorsement Guides Q and A page contains no question or answer on virtual influencers, computer-generated endorsers or AI-generated content, and does not address AI-generated product imagery | ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking | read 2026-09-10, page date not shown | n/a | Read for AI, virtual influencer or CGI content | FTC | primary, as a negative finding about that page only |
| The Endorsement Guides rule text | ecfr.gov, 16 CFR 255.0 | 2026-09-10 | n/a | Redirected to a federalregister.gov unblock page; not read | n/a | **not read** |
| An FTC business blog post on AI deception | ftc.gov/business-guidance/blog/2023/03/chatbots-deepfakes-voice-clones-ai-deception-sale | 2026-09-10 | n/a | HTTP 404 at the URL tried | n/a | **not read** |
| A federal rule requiring disclosure of AI-generated product imagery in brand, agency or retail advertising | Nothing read supports one; ledger already blocks "Any FTC rule requiring AI content disclosure" (brief 24) | n/a | n/a | n/a | n/a | **unverified. Cut** |

## R6. Where sources conflict

**1. HiSense's global TV rank.** Range across readable independent trackers in
2026: second to third by branded shipment units.

| Reading | Tracker | Period | Metric | HiSense position |
|---|---|---|---|---|
| Top five in order | TrendForce release, 21 May 2026 | 1Q26 | Branded units | Third |
| Brand volumes, 17.6m, 15.08m, 14.23m | TrendForce release, 21 August 2026 | 1H26 | Units | Third by volume (the release names no rank for HiSense; the order follows from its own figures) |
| Single-month ranking | Counterpoint tracker summary, 2 September 2026 | July 2026 | Units | Second |
| "the world's second-largest TV brand" | hubStudio case page, undated, entry in repo since 19 May 2026 | not stated | not stated | Second |

Why they differ: period (a quarter and a half-year against a single month),
tracker (two firms with unpublished brand definitions, neither stating whether
sub-brands or ODM volume are counted), and the case page states no period,
tracker or metric at all. Revenue was not published on any page read. Omdia,
widely used for TV rankings, returned 403, and three Chinese-language trackers
could not be reached, so the conflict may be wider than shown. Under R6 the
page would have to publish the range with reasons, but the brief forbids adding
a HiSense detail the case page does not publish, so the claim is cut rather than
replaced with a tracker figure.

**2. First-party framing of "thousands a week".** The summary presents it as
the need ("needed its teams and agencies to generate thousands of assets a
week"), the challenge as the ask ("independently produce thousands of weekly
assets"), and the results band as the outcome ("1000s/week", "Brand assets
produced after launch"). Not contradictory, but the same phrase does three jobs
and only the results band is a result. Cite only the results band as a result.

**3. "Within two months" against "8 weeks".** Consistent: the two months is the
published requirement, the eight weeks the published result. Not a conflict,
but it confirms the page never states when the clock started.

**4. Three to six weeks against eight weeks.** Not a conflict. They measure
different things on different pages (a published training range for studio
engagements, and a platform go-live for one client). Neither has a method, so
no arithmetic between them is allowed.

**5. Voluntary against certifiable.** NIST AI 600-1 is a voluntary US profile of
suggested actions; ISO/IEC 42001 is a management system standard certified by
an accredited body. Not a conflict. Never describe the NIST actions as
requirements or ISO/IEC 42001 as a legal duty.

## Cleared for use

Blockquote-ready, American English, no competitor, tool, model or software
vendor named, no Han characters, no hubStudio rate. Every blockquote carries its
Source line with a dated year and a one-sentence method. URLs are for the asset
brief; the house form leaves them off the page.

### First-party: the HiSense case study

> hubStudio's HiSense case study publishes that the self-serve content platform
> was live, and ready for retail season, eight weeks into the deployment. The
> page does not say when those eight weeks started.
> Source: hubStudio HiSense case study page, read 10 September 2026, published
> client result, no method stated.

> hubStudio's HiSense case study publishes "1000s/week" of brand assets produced
> after launch. The page gives no count, no period and no definition of an
> asset, so the figure reads as an order of magnitude, not a tally.
> Source: hubStudio HiSense case study page, read 10 September 2026, published
> client result, no method stated.

> hubStudio's HiSense case study publishes that teams were generating from day
> one, with no ramp-up.
> Source: hubStudio HiSense case study page, read 10 September 2026, published
> client result, no method stated.

> hubStudio's HiSense case study describes the brief as a deployment of the
> hub4You platform, customized so HiSense's internal teams and outside agencies
> could independently produce thousands of assets a week for North America, and
> operational within two months to support major retail partnerships.
> Source: hubStudio HiSense case study page, read 10 September 2026, the
> client's published brief as the page states it, no method stated.

> hubStudio's HiSense case study lists what was delivered: the hub4You platform
> customized for HiSense, product-specific LoRA models per category, custom AI
> agents and production workflows, brand-trained generation tuned to North
> American preferences, and self-serve access for internal teams and external
> agencies.
> Source: hubStudio HiSense case study page, read 10 September 2026, published
> deliverables list, no method stated.

> hubStudio's HiSense case study describes the setup the platform replaced as
> separate product shoots, an agency briefed for every campaign, and approval
> cycles that ran long. The page gives no durations.
> Source: hubStudio HiSense case study page, read 10 September 2026, published
> client description, no method stated.

### First-party: hub4You and studio policy

> hubStudio's hub4You page describes the platform as custom AI agents trained on
> a brand and its products, on private infrastructure, operated by the brand's
> own team: "The studio builds it. You run it."
> Source: hubStudio hub4You page, read 10 September 2026, published product
> description.

> The same page says the platform runs on dedicated GPU pipelines and a private
> model environment, and that a brand's product data and brand training "stay
> yours, isolated from any shared or public model."
> Source: hubStudio hub4You page, read 10 September 2026, published product
> description, no audit or certification cited.

> hubStudio publishes that the custom models it trains on a client's brand are
> the client's property, and that every asset is documented with the model used,
> the references that trained it and the prompts that produced it. That is
> hubStudio's published policy, not a legal requirement.
> Source: hubStudio AI excellence page, read 10 September 2026, published studio
> policy.

> hubStudio publishes a window of three to six weeks from brief to a trained
> custom model, depending on the depth of the brand library. It is a published
> range, not a measured benchmark: no sample of engagements sits behind it.
> Source: hubStudio AI excellence page, read 10 September 2026, published range,
> no method stated.

Optional, only if the writer wants the ongoing relationship and accepts that it
is a detail from a page other than the case study:

> hubStudio's AI excellence page names HiSense, in consumer electronics, among
> brand marketing teams running always-on content programs through the studio.
> Source: hubStudio AI excellence page, read 10 September 2026, published client
> reference, no method stated.

### How per-category brand models work, and why a person still signs off

> The most widely used lightweight fine-tuning approach "freezes the
> pre-trained model weights and injects trainable rank decomposition matrices
> into each layer." In practice the brand's training produces a separate, small
> set of weights that sits on top of a base model the brand does not own.
> Source: 2021 research paper introducing low-rank adaptation, company research
> lab and academic authors; method description, abstract read at source
> 10 September 2026.
> https://arxiv.org/abs/2106.09685

> The authors list where fine-tuning breaks: rare contexts, the background
> bleeding into the subject's appearance, overfitting when a prompt resembles
> the training photos, and the plain admission that "some subjects are easier
> to learn than others."
> Source: peer-reviewed computer vision conference paper, CVPR 2023, authors'
> own limitations section.
> https://arxiv.org/abs/2208.12242

> Automated consistency scores are a weak stand-in for a human reviewer. A
> 2025 benchmark had seven annotators rate generated images across 150
> reference images and 1,350 prompts, then checked how well automated scores
> tracked them. On whether the subject was preserved, the two common
> image-similarity scores reached only 50.72 percent and 60.98 percent of the
> agreement human raters showed with each other.
> Source: peer-reviewed machine learning conference paper, ICLR 2025; Pearson
> correlation with human ratings, expressed as a share of human-to-human
> agreement, each image rated by at least two annotators.
> https://arxiv.org/abs/2406.16855

### Governance and approval gates

> ISO/IEC 42001, published in December 2023, is the first international
> management system standard for artificial intelligence, and certification
> against it is issued by an accredited certification body rather than
> self-declared.
> Source: the standard, by designation and edition date, December 2023,
> confirmed on two independent standards-body records, the second read
> 10 September 2026.

> The US National Institute of Standards and Technology released its AI Risk
> Management Framework in January 2023 for voluntary use, and in July 2024
> published a generative AI profile as a companion to it. The profile's
> suggested actions primarily address four considerations: governance, content
> provenance, pre-deployment testing and incident disclosure.
> Source: NIST AI 600-1, Generative Artificial Intelligence Profile, July 2024,
> agency publication read in full text 10 September 2026.
> https://doi.org/10.6028/NIST.AI.600-1

> Among the profile's suggested actions: set minimum performance or assurance
> thresholds and review them as part of deployment approval, a go or no-go
> decision, and share the results of pre-deployment testing with the people who
> hold system release approval authority.
> Source: NIST AI 600-1, July 2024, suggested actions GV-1.3-002 and MS-2.3-003,
> read 10 September 2026; voluntary guidance, not a regulation.
> https://doi.org/10.6028/NIST.AI.600-1

> The same profile notes that an organization's use of generative AI "may also
> warrant additional human review, tracking and documentation, and greater
> management oversight," and suggests defining who is responsible for periodic
> review of content provenance.
> Source: NIST AI 600-1, July 2024, Appendix A.1.2 and suggested action
> GV-1.5-001, read 10 September 2026; voluntary guidance.
> https://doi.org/10.6028/NIST.AI.600-1

> It is also candid about testing: currently available pre-deployment testing
> processes for generative AI "may be inadequate, non-systematically applied,"
> or mismatched to the context the system is actually deployed in.
> Source: NIST AI 600-1, July 2024, Appendix A.1.4, read 10 September 2026;
> agency discussion of current test practice.
> https://doi.org/10.6028/NIST.AI.600-1

### Provenance and labeling

> The standards body's own deployment guidance, version 1.0 of 8 July 2026,
> tells adopters to avoid screen-shotting or re-exporting a file through tools
> that remove metadata, because that can strip the embedded Content Credentials,
> and to require any vendor demonstration to reflect the actual workflow in use
> rather than an idealized or one-off scenario.
> Source: Content Credentials: Deployment Guidance, version 1.0, 8 July 2026,
> read in full 9 September 2026.
> https://c2pa.org/wp-content/uploads/sites/33/2026/07/Content-Credentials-Deployment-Guidance.pdf

> The specification concedes the failure mode in its own words: an asset can
> become separated from its C2PA Manifest due to removal or corruption of asset
> metadata, and a fingerprint of the digital content of the asset could be used
> to search a database to recover the asset with an intact C2PA Manifest.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.
> https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

> Article 5 of the Measures puts the implicit label in the file metadata and
> says it carries content attribute information, the service provider name or
> code, and a content ID, among other production element information. The same
> article defines file metadata as descriptive information embedded in the file
> header in a specific encoding format.
> Source: Cyberspace Administration of China, March 2025, instrument text.
> https://www.cac.gov.cn/2025-03/14/c_1743654684782215.htm

Writer's note on the Chinese quote: use it only as the clearest published
statement of what a machine-readable label contains, next to the C2PA material.
Never say it governs a North America deployment, and never say who in a brand,
agency and platform chain carries the labeling duty.

### US disclosure, conditional

> New York's synthetic performer disclosure law, Senate Bill S8420A, chapter 617
> of the Laws of 2025, requires a covered person to "conspicuously disclose in
> such advertisement that a synthetic performer is in such advertisement, where
> such person has actual knowledge", and sets a civil penalty of 1,000 US
> dollars for a first violation and 5,000 US dollars for each subsequent
> violation. It took effect on 9 June 2026.
> Source: New York State Senate, bill text and status, December 2025, re-read
> 10 September 2026.
> https://www.nysenate.gov/legislation/bills/2025/S8420/amendment/A

Writer's note: this applies only to advertisements containing a synthetic
performer, a generated person not recognizable as any real one. The HiSense
case page does not say its assets depict people. Use it only as a gate an
agency generating people for North American ads has to run, never as something
the HiSense deployment triggered.

### Ownership, optional

> Copyright protects only material that is the product of human creativity, and
> where a generative system produces the expressive elements of a work, that
> material is not protected by copyright.
> Source: US Copyright Office, registration guidance for works containing
> material generated by artificial intelligence, 88 FR 16190, 16 March 2023, a
> statement of policy published by the issuing office.
> https://www.govinfo.gov/content/pkg/FR-2023-03-16/html/2023-05321.htm

Count: 24 blockquotes cleared (11 first-party including the optional one, 13
third-party including the optional copyright quote). Checked by script on
10 September 2026: every blockquote carries a Source line with a year, zero em
dashes, zero Han characters, no dollar sign in the file.

## Do not publish

### Hard blocks for this brief

| Item | Why |
|---|---|
| "HiSense, the world's second-largest TV brand" | Undated, no tracker, period or metric on the case page. Readable independent trackers put HiSense third by branded units in 1Q26 and 1H26 and second in one month. Omdia and three Chinese trackers unreachable. Cut. The case page itself should be corrected or sourced (site backlog, not this agent's edit) |
| Any tracker figure or rank for HiSense on the page (third in 1H26, 14.23 million units, second in July 2026) | A HiSense detail the case page does not publish, which the brief forbids, and it would contradict the client's own case page. Kept here as the evidence for the cut only |
| Any HiSense figure described as measured, tracked, verified or observed | Brief rule and ledger first-party exception. No method exists for any of the three |
| "1000s/week" converted to a number ("over 1,000", "several thousand", a yearly total, a per-agency or per-team split) | The page publishes no count. Any number is an invention |
| The eight weeks decomposed ("training took three to six of the eight weeks", "go-live in two months after a six week training phase") | Arithmetic between two first-party figures that both lack a method. R8 would have nothing to reconcile it against |
| "Day one" restated as an onboarding time, a training time for users, or "no training needed" | The page says "no ramp-up" and defines nothing |
| "Accurate to the actual product, never an approximation of it" as a fact about the models | An absolute accuracy claim with no measurement, contradicted in spirit by the peer-reviewed failure modes. Describe the mechanism, not the guarantee |
| "Output resonates by default" or any claim that the North American preference training improved performance | Research unnamed, outcome unmeasured |
| The number of product categories, LoRA models, agents, teams or agencies on the HiSense platform; which agencies; which retail partners; which retail season or year | Not published |
| Who approves HiSense assets, how many rounds, or any HiSense approval rate | Not published. Approval gates on this page are production practice, labeled as such |
| Any statement that HiSense assets carry labels, C2PA credentials or synthetic performer disclosures, or passed legal review | Not published |
| hubStudio internal approval from 22 to 78 percent; output scaled about 7x; costs about 60 percent lower; "cuts production time by 80 percent" | Ledger blocks, carried from brief 29 |
| ISO/IEC 42001 certification, or NIST alignment, claimed or implied for hubStudio, hub4You or HiSense | No such claim on the site (grep, 2026-09-10). Present both documents as what a buyer can ask about, never as held |
| NIST suggested actions written as requirements, obligations or "the standard" | Voluntary guidance by its own text |
| The executive order under which NIST AI 600-1 was developed | Its current status was not checked. Not needed |
| Allocation of labeling duties between brand, agency and platform; any penalty under the Chinese Measures | Ledger hard blocks 2 and 3 |
| China's labeling Measures as binding on a North America deployment | Scope for this case not researched |
| Any FTC rule, guide or enforcement priority requiring disclosure of AI-generated product imagery | No FTC instrument read today addresses it; the Endorsement Guides Q and A is silent; the rule text and blog URL were not reached. Ledger already blocks it from brief 24 |
| New York S8420A tied to HiSense assets | Conditional statute; the case page does not say synthetic performers were used |
| The six software products named on the hub4you integrations list | Software vendors, several in categories the standing rule covers. Say "the asset management, product information and commerce systems a brand already runs" |
| Client lists on service pages ("Brands shipped this year include HiSense", "Recent campaigns include work for HiSense") | Undated relative time, and not about the platform |
| Any hubStudio rate, platform fee, retainer or per-asset price | Standing rule. No dollar sign is cleared in this file except the New York statutory penalties |
| Any SERP observation, publisher-share count or "no page explains" claim | R2 was not run |
| Any claim that a deployment-time benchmark does or does not exist | Not searched |

### Failed the bar

| Claim | Where it came from | Why it was cut |
|---|---|---|
| A full-year 2025 global TV brand ranking | Tracker listing pages, four pages across two firms | None listed on the pages reachable; not found is not an absence |
| An Omdia-attributed HiSense ranking | Commonly associated with the claim | omdia.tech.informa.com returned 403. Not read, not citable |
| Chinese-language tracker rankings (Sigmaintell, RUNTO, AVC Revo) | R4 attempt | Certificate failure, socket closed twice, DNS failure. Chinese search queries hit the exhausted budget |
| HiSense's own ranking statement | Client corporate sites | Both global domains redirect to the US site, which carries no ranking sentence. A client claim would not be independent anyway |
| 16 CFR 255.0 text on endorsers | eCFR | Redirected to an unblock page, not read |
| FTC blog on AI deception | ftc.gov | 404 at the URL tried |

### Quarantined domains

No SERP domains were observed, so none are quarantined from R2. Recorded for
completeness: the integration software vendors named on `src/pages/hub4you.astro`
lines 61 to 65 never reach the page. TV brands other than HiSense named in the
tracker releases (Samsung, TCL, LGE, Xiaomi) are not hubStudio competitors, but
nothing about them is cleared and they have no place on a HiSense proof page.

### Romanization for the writer

No Chinese term is needed on this page. If the tracker conflict is ever
discussed internally, Sigmaintell and RUNTO are the English trade names.

## Screenshot inventory

Nothing captured in this session. None of these is a platform spec, so none
blocks drafting on R3 grounds. If captured later, save to
`research/hisense-self-serve-content-platform/` with the date in the filename.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| hubstudio-work-hisense-results-band.png | The three results and their labels, and the absence of any date or method note | not yet | hubstudio.ai /work/hisense |
| hubstudio-work-hisense-challenge.png | The second-largest TV brand sentence, for the site backlog correction | not yet | same |
| trendforce-1h26-tv-brands.png | The HiSense, Samsung and TCL paragraphs with unit figures | not yet | trendforce.com release 20260821-13193 |
| trendforce-1q26-top-five.png | The "top five ... in that order" sentence | not yet | trendforce.com release 20260521-13055 |
| counterpoint-july-2026-ranking.png | The single-month ranking sentence and paywall notice | not yet | counterpointresearch.com tracker page |
| nist-ai-600-1-gv-1-3-002-ms-2-3-003.png | The two approval-related suggested actions with IDs | not yet | nvlpubs.nist.gov PDF |

The capture that would change this page is not a screenshot. It is a written
method for the three case figures: the date the eight weeks started and what
"live" meant, and how assets per week were counted, over which weeks, with a
client sign-off to publish it. That is also the only route to the brief's slot
requirement.

## Ledger rows to append

### HiSense self-serve platform proof page (added 2026-09-10, brief 48)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| HiSense case study results: "8 weeks" (Platform live and ready for retail season), "1000s/week" (Brand assets produced after launch), "Day one" (Teams generating with no ramp-up). No start point, count, period, asset definition or team count published | "hubStudio HiSense case study page, read [date], published client result, no method stated" | src/data/case-studies.ts lines 426 to 428; live /work/hisense matched the repo on 2026-09-10; entry unchanged since commit cb714d9, 2026-05-19 | page undated | first-party, published, no method | 2026-09-10 | | 48 |
| HiSense case study qualitative claims cleared as description: deployment for internal teams and outside agencies in North America; product-specific LoRA models per category; custom agents and workflows; brand-trained generation tuned to North American preferences; baseline of separate shoots, an agency briefed per campaign and long approval cycles | Same attribution, "published client description" | src/data/case-studies.ts lines 389 to 423 | page undated | first-party description | 2026-09-10 | | 48 |
| TrendForce 1Q26: branded TV shipments 47.12 million units; top five Samsung, TCL, Hisense, LGE, Xiaomi in that order | "a global market intelligence firm's TV shipment release, 21 May 2026, branded shipments in units, first quarter 2026" | trendforce.com/presscenter/news/20260521-13055.html | 2026-05-21 | primary for the release, method thin (no scope paragraph) | 2026-09-10 | | 48 (evidence for a cut only) |
| TrendForce 1H26: global TV shipments 93.74 million units, up 1.3 percent; Samsung 17.6m, TCL 15.08m, Hisense 14.23m (up 3 percent), LGE 11.3m | "a global market intelligence firm's TV shipment release, 21 August 2026, units, first half 2026" | trendforce.com/presscenter/news/20260821-13193.html | 2026-08-21 | primary for the release, method thin | 2026-09-10 | | 48 (evidence for a cut only) |
| Counterpoint July 2026: single-month shipment ranking Samsung, Hisense, LGE, TCL; global TV shipments up 1 percent year on year | "a market research firm's monthly TV shipment tracker summary, 2 September 2026, units, July 2026 only, full data paywalled" | counterpointresearch.com/en/reports/monthly-global-tv-shipments-tracker-july-2026 | 2026-09-02 | single-source, one month | 2026-09-10 | | 48 (evidence for a cut only) |
| NIST AI RMF 1.0 released 26 January 2023 for voluntary use; NIST AI 600-1 Generative AI Profile, July 2024, a companion resource whose suggested actions primarily address governance, content provenance, pre-deployment testing and incident disclosure | "NIST AI 600-1, Generative Artificial Intelligence Profile, July 2024", voluntary guidance, never a requirement | nist.gov/itl/ai-risk-management-framework; nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf section 1 | 2023-01-26; 2024-07 | primary | 2026-09-10 | | 48 |
| NIST AI 600-1 suggested actions GV-1.3-002 (minimum thresholds reviewed as part of go or no-go deployment approval), MS-2.3-003 (share pre-deployment testing results with those holding system release approval authority), GV-1.5-001 (responsibilities for periodic review of content provenance); A.1.2 (use of generative AI may warrant additional human review, tracking and documentation, and greater management oversight); A.1.4 (current pre-deployment testing processes may be inadequate, non-systematically applied, or mismatched to deployment contexts) | "NIST AI 600-1, July 2024, by action ID or appendix section, voluntary guidance" | same PDF | 2024-07 | primary | 2026-09-10 | | 48 |
| FTC Endorsement Guides Q and A page contains no material on virtual influencers, computer-generated endorsers or AI-generated content | "the FTC's Endorsement Guides question-and-answer page, read 10 September 2026", a negative finding about that page only | ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking | page undated | primary, negative, single page | 2026-09-10 | | 48 |

### Check 2 dates for existing rows

| Existing row | Check 2 | Result |
|---|---|---|
| ISO/IEC 42001:2023 (Industry and regulatory block) | 2026-09-10 | iso.org/standard/42001 returned 403 again. AI Standards Hub record read: BS ISO/IEC 42001:2023, "Information Technology, Artificial intelligence, Management system", published 18 December 2023, status published. Designation, title and date still match. The accredited-certification clause was not re-read today |
| Adapter-style fine-tuning mechanism (brief 29 block) | 2026-09-10 | arxiv.org/abs/2106.09685 abstract re-read, quoted clause and 17 June 2021 submission date match |
| New York S8420A synthetic performer disclosure (Industry and regulatory block) | 2026-09-10 | Bill page re-read: signed 11 December 2025, chapter 617, disclosure sentence, definition, 1,000 and 5,000 dollar penalties, 180-day effective clause all match |

### Delivery figures table, amend the case-study line

Add under "Case study figures": HiSense "8 weeks" still needs the start point
and the definition of live; "1000s/week" still needs the count, the weeks
covered and what counts as an asset (generation, approved asset or published
asset); "Day one" still needs the number of teams and what ramp-up means. Until
then they run under the first-party exception only and cannot satisfy a slot
requirement for a number with its method stated.

### Do-not-publish additions from brief 48

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| HiSense is "the world's second-largest TV brand" | hubStudio HiSense case study page, challenge paragraph | Undated, no tracker, period or metric. TrendForce puts HiSense third by branded units in 1Q26 and 1H26; Counterpoint second in July 2026 only; Omdia 403; three Chinese trackers unreachable. Site copy needs correcting or sourcing | 2026-09-10 |
| Any tracker rank or unit figure for HiSense on an article | TrendForce and Counterpoint releases | Adds a HiSense detail the case page does not publish, and contradicts the case page | 2026-09-10 |
| "1000s/week" as any number; the eight weeks split into training and rollout; "Day one" as an onboarding time | HiSense case study results band | No count, start point or definition published. Arithmetic across unmethod first-party figures is invention | 2026-09-10 |
| HiSense models "accurate to the actual product, never an approximation"; output that "resonates by default" | HiSense case study approach cards | Absolute accuracy and outcome claims with no measurement | 2026-09-10 |
| ISO/IEC 42001 certification or NIST alignment for hubStudio, hub4You or a client deployment | Temptation of the governance section | No such claim on the site; certification is issued by an accredited body | 2026-09-10 |
| Any FTC instrument requiring disclosure of AI-generated product imagery | Brief 48 North America check | Endorsement Guides Q and A silent on AI content; rule text and blog not reached; still nothing at source | 2026-09-10 |
| The integration software names on the hub4you page | hubStudio site copy | Software vendors; describe the systems by role | 2026-09-10 |

## Notes for the writer

### Gate status before drafting

1. **R2 not run.** Drafting should wait for the SERP rerun, or proceed only if a
   person accepts the missing SERP map in writing. If it proceeds, write no
   sentence about what other pages say or miss.
2. **Slot requirement cannot be met.** The brief asks for one number from
   hubStudio's delivery record with its method stated. No case figure has a
   method, and the ledger's delivery figures still lack theirs. The brief also
   says the case figures must never be described as measured with a method,
   which conflicts with its own slot line. Resolution: run the three case
   figures attributed to the case page with the "no method stated" source line,
   say plainly what each does not measure, and mark `TODO: client sign-off`
   against the slot requirement in the log. Do not borrow the 90-day retention
   or the 48-hour proposal as the slot number: they are policies, not delivery
   records.
3. **The ranking line is cut.** Describe HiSense by the case page's own
   industry label, "the consumer electronics brand", never by a rank.

### SEO fields

Title "HiSense: A Self-Serve Content Platform in 8 Weeks" (49 characters) and the
approved meta description (151 characters) stay accurate against the case page:
"went live", "self-serve", "brand-trained" and "eight weeks" all appear there. No
change needed on the evidence in this file. The working H1 stays provisional
until R2 runs. Casing: the site writes "hub4You" on the case page and the
hub4you page; the brief writes "hub4you". Follow the site.

### Outline mapped to the must-includes

1. **Hero and H1.** Working H1. One or two sentences stating the answer: the
   case page publishes a platform live in eight weeks and thousands of assets a
   week, and this page sets out what that deployment involved and what the
   figures do and do not tell a buyer.
2. **First H2, restating the query:** "What is a self-serve AI content platform
   for brands?" 40 to 60 words, naming hubStudio once. Draw on the hub4You page
   quote (studio builds it, the brand's team runs it). No figures.
3. **What the HiSense case study publishes.** The three first-party result
   quotes and the brief quote.
   **Deployment table (must-include 1).** Suggested columns: Element | What the
   case page publishes | What is production practice, not on the case page. Rows:
   timeline (eight weeks, start point not stated | agree the clock's start and
   the definition of live in writing); volume (1000s a week after launch | agree
   a counting rule: generations, approved assets or published assets); models
   (product-specific LoRA models per category | one adapter per product line on
   a base model, per the 2021 mechanism); brand and market (brand-trained,
   tuned to North American preferences | reference sets and preference inputs
   documented); agents and workflows (custom agents and workflows | workflow
   steps mapped to approval gates); users (internal teams and external agencies,
   self-serve | role-based access, see section 4); approval (not published |
   see governance table); provenance (not published | see section 6). Label the
   practice column plainly as production practice.
4. **What self-serve means for internal teams and outside agencies
   (must-include 2).** Case page quotes (the brief, the baseline of an agency
   briefed per campaign) plus hub4You page quotes (team at the controls,
   private model environment). Practice, labeled: agencies generate inside the
   brand's trained models instead of receiving a new brief each time; the brand
   keeps release approval; access is scoped by role. Link to the hub4you
   platform and, if wanted, the agencies solutions page.
5. **How brand models are kept accurate to real products (FAQ 4 and the
   approach cards).** Adapter quote, CVPR failure modes, ICLR automated-score
   quote. The point: per-category models are the mechanism, human review is the
   check, because automated similarity tracks human judgment only about half to
   three fifths as well as people agree with each other. Link to the training a
   brand model article. Never repeat "never an approximation".
6. **Governance and approval gates (must-include 3).** ISO/IEC 42001 quote and
   the four NIST quotes.
   **Governance gates table.** Suggested columns: Gate | What is checked | Who
   decides (practice) | Published anchor. Rows: training data intake (rights,
   consent, no unreleased products or third-party logos | brand legal and
   brand team | brief 29 extraction study and consent rows, via the training
   article); model acceptance per product line (a person compares output against
   real product photography | brand product owner | ICLR 2025 automated-score
   limit); deployment go or no-go (minimum thresholds agreed before launch |
   whoever holds release approval | NIST GV-1.3-002, MS-2.3-003); asset release
   (sign-off before anything publishes | brand owner, never the generating
   agency alone | practice, no standard names the approver); provenance and
   disclosure check at export (metadata survives export, synthetic performer
   disclosure where people are generated for New York ads | brand and agency
   ops | C2PA deployment guidance, New York S8420A); periodic review (who reviews
   provenance and incidents, how often | named owner | NIST GV-1.5-001, ISO/IEC
   42001 as the certifiable management system). Label everything outside the
   anchor column as practice.
7. **Provenance and labeling.** The two C2PA quotes, the Chinese Article 5
   quote as a field example only, the New York quote with its condition. Say
   this is production practice, not legal advice. Do not allocate the labeling
   duty.
8. **What the published figures measure and what they do not (must-include
   4).** A three-row table: Figure | What the case page says it is | What it
   does not tell you | What a buyer should ask for. Eight weeks: live and ready
   for retail season | when the clock started, what live meant, how many
   product lines were trained by then | the start date and the go-live
   definition. 1000s a week: brand assets produced after launch | a count,
   which weeks, whether generations or approved or published assets, how many
   teams and agencies | the counting rule and the weekly log. Day one: teams
   generating with no ramp-up | how many teams, what ramp-up means | the number
   of users active in week one. Close with the three to six week published
   training range, attributed, and the explicit line that the two ranges are
   not combined.
9. **FAQ, five questions from the brief.** Q1 from section 2. Q2 (how long to
   deploy): the one published figure here is eight weeks for this deployment,
   attributed, not a benchmark; the three to six week training range is a
   separate published range; no general benchmark is cited. Q3 (can agencies
   use it): yes on this deployment, per the case page's self-serve access for
   external agencies; approval stays with the brand as practice. Q4 (accuracy):
   section 5 in 40 to 70 words. Q5 (who approves): the case page does not say;
   in practice the brand holds release approval, and the NIST profile's
   suggested action puts test results in front of whoever holds that authority.
10. **CTA:** See hub4you.

### Must-includes that cannot be fully met

- **Slot requirement**, as above. Unmet.
- **SERP-derived bar, gap and H1 check**, R2 not run.
- **"Governance and approval gates" for HiSense specifically**: the case page
  publishes no gate, so the section is general production practice anchored to
  NIST and ISO, and must say the case page does not describe HiSense's approval
  process.

### Internal link targets, verified in `src/pages` on 2026-09-10

| Anchor | URL | Verified |
|---|---|---|
| HiSense case study | /work/hisense | `src/pages/work/[slug].astro` generates it from slug `hisense` in `src/data/case-studies.ts` line 382; live page fetched |
| hub4you platform (CTA) | /hub4you | `src/pages/hub4you.astro`; live page fetched |
| AI excellence page | /the-studio/ai-excellence | `src/pages/the-studio/ai-excellence.astro` |
| Training a brand model article | /resources/insights/training-a-brand-model-that-stays-on-brand | `src/pages/resources/insights/training-a-brand-model-that-stays-on-brand.astro` |
| Work index (cluster hub for Proof) | /work | `src/pages/work/index.astro` |
| Content Credentials article (optional) | /resources/insights/content-credentials-c2pa-in-production | exists |
| Disclosure audit trail article (optional) | /resources/insights/disclosure-audit-trail-per-asset | exists |
| Questions to ask an AI production partner (optional, carries the ISO/IEC 42001 line) | /resources/insights/questions-to-ask-ai-production-partner | exists |
| Agencies solutions page (optional, for the agency section) | /solutions/agencies | `src/pages/solutions/agencies.astro` |
| Brands solutions page (optional) | /solutions/brands | `src/pages/solutions/brands.astro` |
| Service page: AI image production | /solutions/ai-production/image | `src/pages/solutions/ai-production/image.astro` |
| Platform page (SPEC requires one; the case is North America, so the closest fit is ecommerce) | /solutions/platforms/shopify or /solutions/platforms/amazon | both exist. The case page names no platform, so the link must not imply HiSense uses either |

Publishing note: whichever category the article takes, check it against
`src/data/insight-placements.ts` so it lands on a layer, per the repo rule.

## R8. Reconciliation (filled after drafting)
