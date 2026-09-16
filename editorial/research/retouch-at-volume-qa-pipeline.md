# Research: retouch-at-volume-qa-pipeline

| Field | Value |
|---|---|
| Brief | 47 |
| Target query | product photo retouching quality control process |
| Secondary queries | product image qa checklist; image retouching quality standards; batch retouching workflow ecommerce |
| Gap statement (one sentence) | Across 40 English results and 10 Chinese results on four buyer phrasings, not one page names the published acceptance-sampling standard or ties a sample size to batch size, and none names the color-encoding or viewing-condition standards, so "spot-checked" and "multi-stage QC" are left as unmeasured promises published by the sellers of the service. |
| Method | Sampling tables read from page images of an identical national adoption of ISO 2859-1 and compared with an intergovernmental guideline that extracts from it; ISO's own amendment and ISO 3664 text read from ISO preview files; ICC, IEC and ICC registry pages read directly; a US federal imaging guideline and a US national laboratory literature review read in full; marketplace rows reused from the brief 01 and 02 modal collections with their counts unchanged; ledger rows reused verbatim and re-read at source |
| Research time spent | About 95 minutes active, 14 English and Chinese queries (web search budget was exhausted at session start, so every SERP was read through result pages fetched directly), 6 standards documents read, 3 further standards confirmed by designation only |
| Written | 2026-09-10 |

## Session constraints, read first

1. **The web search tool was exhausted before this brief began** (200 of 200
   calls used by parallel agents). Every SERP below was read by fetching a
   search engine's result page directly: Brave for the four English queries and
   the Chinese query, Yahoo as a cross-check on the primary query and for
   locating standards documents. One engine's ordering is not Google's. The
   publisher-type pattern is the finding, not the exact rank.
2. **iso.org returned 403** to both automated fetch and a browser user agent on
   2026-09-10, for ISO 2859-1 and ISO 3664. No number below is attributed to
   iso.org. ISO's own text was read through two ISO preview files (the
   amendment to ISO 2859-1 and the opening clauses of ISO 3664), and the full
   ISO 2859-1 tables through the Bureau of Indian Standards' identical adoption.
3. **Table values were read from rendered page images, not from OCR text.** The
   OCR layer of the national adoption garbles the tables. Pages 19 and 20 of IS
   2500 (Part 1):2000 were rendered at 170 dpi and read cell by cell, arrows
   included. The same was done for pages 39 and 40 of the Codex sampling
   guideline and page 27 of the federal imaging guideline.
4. **EUR-Lex returned an empty body twice** (HTTP 202, 0 and 159 bytes). The EU
   pictorial representation row was therefore not re-read this session and is
   not cleared for this brief. It is also food-only in scope. See Do not publish.

## R4. Chinese-language web first

The China-related parts of this brief are the marketplace rejection reasons
and the Taobao AI fake-image rule. The marketplace rows are reused from the
brief 01 and brief 02 collections, which were gathered Chinese-language first.
New Chinese-language work this session:

1. Query run in Chinese before the English queries: dianshang xiutu zhijian
   liucheng biaozhun (ecommerce retouching, quality inspection, process,
   standard). Results in R2.
2. The Taobao rule source re-read in full in Chinese on 2026-09-10.
3. The Chinese national adoption of ISO 2859-1 (GB/T 2828.1-2012) located as a
   further table surface.

Chinese source and English rendering, side by side. Working document only:
no Han characters may travel from this table into a draft.

| Chinese text as published | English rendering | Where |
|---|---|---|
| 淘宝全平台启动AI假图治理 | Taobao launches platform-wide governance of AI fake images | Headline, Economic Information Daily (经济参考报), 2025-03-27, reporter Liu Chao |
| 3月27日，淘天集团宣布，从今天开始，淘宝正式全平台启动AI假图治理。 | On 27 March, Taotian Group announced that from today Taobao formally starts platform-wide governance of AI fake images. | Paragraph 1 |
| 据淘宝公众号，淘宝对AI假图的认定标准情形之一是商品品质失真或款式不符，比如利用AI等技术导致材质表现失真、纹理褶皱模糊、商品款式不相符。 | According to Taobao's official account, one situation under its criteria for AI fake images is distorted product quality or mismatched style, such as AI or similar technology distorting how the material renders, blurring texture and creases, or showing a style that does not match the product. | Paragraph 3 |
| 商品图片应以商品实拍图作为核心的效果，体现修饰行为应当适度，避免失真。严禁利用AI等技术合成方式，呈现显著失真的与实际不符的商品信息效果图。 | Product images should take real photographs of the product as the core, and retouching should be moderate and avoid distortion. Using AI or other synthesis to present effect images with markedly distorted product information that does not match reality is strictly prohibited. | Platform statement as reported |
| 一是商品效果失真或夸大效果展示。如利用AI等技术过度美化导致不能展示商品真实效果，如呈现动漫感、面部磨皮过度等。 | First, distorted or exaggerated product effects, such as over-beautification with AI that stops the image showing the real product, for example an anime look or excessive facial skin smoothing. | Additional situation 1 |
| 二是场景失真或不存在场景，进而导致商品展示失真。包括利用AI等技术产出畸形人体、违反物理规律的图片。 | Second, distorted or non-existent scenes that distort the product display, including deformed human bodies or images that break physical laws. | Additional situation 2 |
| 三是图片质量差，进而导致商品展示失真。包括利用AI等技术产出抠图白边、贴图感明显的图片。 | Third, poor image quality that distorts the product display, including white edges left by cutouts and an obvious pasted-on look. | Additional situation 3 |
| 抽检比例建议 10%-20% ；对于 100 个 SKU 以上的项目，我通常建议至少抽检 20% | Suggested spot-check ratio 10 to 20 percent; for projects above 100 SKUs "I usually recommend checking at least 20 percent" | psaiplugin.com, 2026-06-04, a plugin vendor's blog. Do not publish, see below |

What the Chinese web gave that the English web did not: the only numeric
sampling rule in any result set (a vendor's 10 to 20 percent, no method), and
the only platform rule that names retouching behavior directly (moderate
retouching, no cutout white edges, no excessive skin smoothing).

## R1. What has to be true

Listed before looking anything up, then resolved.

| # | Claim the page needs | Resolution |
|---|---|---|
| 1 | A published acceptance-sampling standard for inspection by attributes exists, with a designation and edition | **Holds.** ISO 2859-1:1999, amended by ISO 2859-1:1999/Amd 1:2011. The amendment cover, read as an image, prints "First edition 1999-11-15" and "AMENDMENT 1 2011-06-15". Cite designation and dates; never an edition number (see R6) |
| 2 | Its sample size is set by lot size through code letters and inspection levels, not by a fixed percentage | **Holds.** Table 1 and clause 10.1, read verbatim |
| 3 | One inspection level is the default | **Holds.** "Unless otherwise specified, level II shall be used." |
| 4 | The standard gives acceptance and rejection numbers per code letter at a chosen AQL | **Holds.** Table 2-A, read from the page image |
| 5 | The standard warns that an AQL is not permission to ship defects | **Holds.** Clause 5 CAUTION, verbatim |
| 6 | The standard publishes a correct AQL for retouched images | **Breaks.** The AQL and inspection level are set by "the responsible authority". No published image AQL exists. The AQL choice on the page is production practice |
| 7 | The standard tells you what to do with a rejected batch | **Holds, narrowly.** Clause 7.2 leaves disposal to the responsible authority (scrapped, sorted, reworked, re-evaluated or held) and clause 7.4 bars resubmission until every item is re-examined and nonconforming items are removed, replaced or corrected. It does not prescribe 100 percent rework, so never write that it does |
| 8 | A published imaging guideline gives a batch inspection rule | **Holds.** US federal digitization guideline, third edition May 2023: at least 10 images or 10 percent of each batch, whichever is larger; above 1 percent defective, re-inspect the whole batch; a second person checks |
| 9 | The two published sampling approaches disagree | **Holds, derived.** Fixed 10 percent against a lot-size table. See R6 |
| 10 | The ICC profile specification has a current version | **Holds.** ICC.1:2022, profile version 4.4.0.0 |
| 11 | Embedded profiles are how color survives a hand-off | **Holds.** ICC's own profile-format introduction, verbatim; the photo trade coalition guideline says the same |
| 12 | sRGB is a published standard with defined reference conditions | **Holds.** IEC 61966-2-1:1999, edition 1.0, 1999-10-18; reference values read on the ICC's color encoding registry |
| 13 | A viewing-conditions standard for judging photographic images exists | **Holds for designation, edition, reference illuminant and condition names.** ISO 3664:2009, third edition, 2009-04-15, D50 reference. **Breaks for illuminance values:** clause 4.2 was not in the preview and only vendor pages print a lux figure. Cut the numbers |
| 14 | Review monitors should be hardware calibrated and profiled | **Holds.** Photo trade coalition guidelines v4.0 (2008) and the federal guideline ("profiled graphics workstation") |
| 15 | A trade or professional body publishes a retouch specification template for ecommerce | **Breaks.** None found. Two published guidelines supply fields (photo trade coalition, federal digitization). The template on the page is production practice and must be labeled so |
| 16 | Marketplaces publish reasons retouched product images fail, with counts | **Holds as modal, not primary.** Brief 01 and 02 collections, counts reused unchanged |
| 17 | Those reasons can be ranked by frequency | **Breaks.** 0 of 15 sources rank causes (brief 02) |
| 18 | Color inaccuracy appears in the counted marketplace collections | **Breaks.** No row in the brief 01 or 02 collections counts a color-accuracy prohibition. The Taobao rule covers distorted material rendering, which is the publishable form |
| 19 | Taobao published a rule against AI fake product images, with named failure categories | **Holds.** Re-read in Chinese 2026-09-10. Four situations as read. **Correction:** the article read this session says nothing about a detection model, so the "detection-model enforcement" phrase in the brief 27 cleared quote does not travel |
| 20 | Human visual inspection has measured error, fatigue and consistency limits | **Holds as adjacent evidence.** A US national laboratory review of 212 inspection studies, 2012. Manufacturing and security populations, not image retouching. Label every figure so |
| 21 | Two inspectors catch more than one | **Holds, with a limit.** Same review, reporting a 1986 study. The same review says re-inspection gives only a lower bound |
| 22 | Formal image-quality judging uses panels of a minimum size | **Holds, narrow scope.** ITU-R BT.500-15 (05/2023): at least 15 observers unless the method says otherwise. Television image assessment research, not production QC. Optional context only |
| 23 | A per-image retouch rate band exists as a category figure | **Holds.** Ledger row reused, both cards re-read 2026-09-10 |
| 24 | A published industry pass rate, defect rate or reject rate for retouched images exists | **Cut.** None found with a method, on either SERP |
| 25 | hubStudio's own pages describe a review process | **Holds, first-party, verbatim.** See first-party table. No rate, no approval figure |
| 26 | hubStudio's approval-rate improvement | **Cut, blocked.** The internal approval figure logged under hubStudio delivery figures is blocked in the ledger and is not reproduced in this file. A second approval stat labeled "First-review approval" sits on the ecommerce service page (line 67) and is blocked on the same grounds, as are the two other stats beside it (lines 68 and 69), none of which carries a method |

## R2. SERP map

Result pages fetched directly on 2026-09-10 (see session constraint 1). Ages
are the dates printed on the result or the page. Pages marked "read in full"
were fetched and checked for a named standard, a sampling rule, marketplace
rules, cited data and table count.

### Query 1 (primary): `product photo retouching quality control process`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | visualsclipping.com | Retouch vendor blog, read in full | A five-stage QC flow: brief review, retoucher assignment, in-progress spot checks, final QA, client revision loop | No standard named, no sampling rule ("500 images" appears only as an example), no data, 0 tables, about 2,300 words | 2026-04-16, updated 2026-07-01 |
| 2 | offshoreclipping.com | Clipping-path vendor blog | Stages from culling to a final QC check | No sampling rule, no standard | 2026-01-05 (Yahoo shows 2022-03-01) |
| 3 | studiometrodesk.com | Retouch vendor blog | QC "before delivery", generic | No method at all | 2025-01-05 |
| 4 | pixelretouching.com | Retouch vendor checklist, read in full | Checklist by stage; review against the physical product under D50 or D65 lighting; a Western marketplace's white and fill values; one table | No standard named (an "ISO-certified" badge only), no sampling rule, an unsourced claim that color discrepancies are a top-three return reason, about 4,700 words | 2026-06-28 |
| 5 | proshotmediagroup.com | Photography studio blog | Why retouching matters, retouch needs set at test shoot | No QC gate | 2025-12-20 |
| 6 | studiometrodesk.com | Retouch vendor service page | Specialist edit, peer review, senior final check | No pass rule, no sample | Undated |
| 7 | orbitclippingpath.com | Clipping-path vendor page | A definition of product retouching | No process | 2026-02-07 |
| 8 | vectorwiz.com | Vendor checklist | A checklist, QC handled by the vendor | No sampling | 2026-03-31 |
| 9 | picsretouch.com | Retouch vendor service page | "3-level quality checks" | Levels undefined | Undated |
| 10 | squareshot.com | Photography studio guide | Retouching guide, capture quality drives retouch | No QC gate | 2026-01-06 |

Positions 11 to 19 were also vendor pages (three more retouch or clipping
vendors, an editing vendor promising "a 3-step QA process", a checklist from a
retouch vendor, a studio). Yahoo cross-check, 7 results: 7 of 7 retouch vendors
or studios, 4 overlapping with Brave.

### Query 2: `product image qa checklist`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | optinexxa.wordpress.com | Self-published blog, affiliation unknown | Image quality checklist for stores and marketplaces | No standard, no sampling | 2026-08-08 |
| 2 | colorexpertsbd.com | Retouch vendor blog, read in full | A three-pass review (batch scan, 100 percent zoom pass, set consistency), a 0 to 2 score per category, sRGB for web | No sampling plan, no standard designation, vendor usage statistics with no method, 0 tables, about 5,000 words | 2026-01-19 |
| 3 | catalogcut.com | Background-removal tool guide, read in full | Twelve checks: edges, fine detail, transparent materials, reflections, product color, shadow, framing, background consistency, text and marks, actual-item accuracy, output specs, thumbnail readability | Sampling given only as "several representative images" then "spot-checking", no standard, 0 tables, about 1,300 words | 2026-03-01, reviewed 2026-08-08 |
| 4 | resources.turbosquid.com | 3D marketplace help page | Preview images required for a 3D model listing | Wrong intent | Undated |
| 5 | photoroom.com | Tool vendor blog | Automating image QC at enterprise scale | Seller of the automation, not read | About 2026-09 |
| 6 | ybug.io | Website QA tool blog | Ecommerce website testing | Wrong intent | 2026-07-05 |
| 7 | squareshot.com | Studio blog | Product image display tips | Not QC | 2026-04-10 |
| 8 | cherrydeck.com | Photographer platform blog | Beginner product photography checklist | Not QC | 2025-06-18 |
| 9 | business.trustedshops.com | Trust-badge vendor blog | Product image tips | Not QC | Undated |
| 10 | lost-pixel.com | Visual regression tool blog | Software QA checklists | Wrong intent | 2024-03-25 |

### Query 3: `image retouching quality standards`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | studiometrodesk.com | Retouch vendor blog | A high-end retouch evaluation checklist | No standard despite the query word | Undated |
| 2 | imagen-ai.com | AI editing tool vendor | Editing techniques in one desktop editor | Not a standard | 2025-09-10 |
| 3 | reddit.com/r/photography | Forum thread | Retoucher burnout | Not a standard | 2024-07-15 |
| 4 | reddit.com/r/photography | Forum thread | Where editors learned | Not a standard | 2024-11-02 |
| 5 | reddit.com/r/photography | Forum thread | Batch consistency matters more than single-image skill | Anecdote | 2024-05-28 |
| 6 | reddit.com/r/photography | Forum thread | A retoucher's career and per-image prices | Anecdote and prices, no method | 2023-09-21 |
| 7 | visualsclipping.com | Retouch vendor blog | Same page as query 1, result 1 | As above | 2026-04-16 |
| 8 | studiometrodesk.com | Retouch vendor blog | High-end retouch techniques | Not a standard | 2025-08-21 |
| 9 | retouchingacademy.com | Retouch training publisher | Editorial principle: do not detract from the original subject | No production QC | 2024-09-17 |
| 10 | lenflash.com | Retouch vendor blog | Best practices, a Western marketplace white value | No standard | Undated |

The query word "standards" returns 0 standards documents in 10.

### Query 4: `batch retouching workflow ecommerce`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | rewarx.com | AI tool vendor blog | An AI retouch workflow | No QC gate | 2026-06-27 |
| 2 | pathedits.com | Retouch vendor blog, read in full | Scaling: standardized color management, batch automation, human judgment; quotes the ICC on device profiles | No sampling rule, no standard designation, 0 tables, about 2,300 words | 2026-05-14 |
| 3 | reddit.com/r/retouching | Forum thread | A retouching look | Not ecommerce QC | 2025-09-01 |
| 4 | reddit.com/r/AskPhotography | Forum thread | Speeding up headshot retouching | Not ecommerce | 2021-01-31 |
| 5 | reddit.com/r/photography | Forum thread | Ecommerce retouch pricing variance | Anecdote, no method | 2023-10-20 |
| 6 | reddit.com/r/photography | Forum thread | General editing workflows | Not ecommerce QC | 2023-10-03 |
| 7 | photoroom.com | Tool vendor landing page | A batch editor | No QC | Undated |
| 8 | lenflash.com | Retouch vendor blog | Desktop batch actions | No QC | Undated |
| 9 | retouch4.me | Plugin vendor blog | AI batch editing | No QC | Undated |
| 10 | comfyui.org | AI workflow site | Automated retouch pipeline | No QC | 2026-06-25 |

### Chinese query (run first): dianshang xiutu zhijian liucheng biaozhun

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | psaiplugin.com | AI plugin vendor blog | A four-step manual second check after AI retouching | No standard | 2026-05-24 |
| 2 | psaiplugin.com | AI plugin vendor blog, read in full | Batch QC: spot-check 10 to 20 percent, at least 20 percent above 100 SKUs, full check for high-risk categories; one worked case of 120 SKUs | No standard, no method behind the ratio, rejection reasons are listing errors (size mixing, SKU mismatch, banned words) not retouch defects | 2026-06-04 |
| 3 | tudingai.cn | AI cutout tool vendor (quarantined in brief 02) | A retouch brief and acceptance form that varies by placement | No standard | 2026-05-27 |
| 4 | hqts-qai.com | Goods inspection company | Pricing for inspecting physical goods | Wrong intent: the word zhijian pulls in goods inspection | Undated |
| 5 | airmie.cn | Chinese photography studio | An eight-step shoot process ending in retouch and delivery | No QC gate | 2026-07-19 |
| 6 | fda-test.com | Test report agent | Accredited product test reports | Wrong intent | Undated |
| 7 | tudingai.cn | AI cutout tool vendor | Fine retouch workflow, keep product markings accurate | No standard | 2026-04-03 |
| 8 | aixqq.com | AI tool vendor | Cut a nine-step process to four, trial 10 to 20 images first | No QC sampling | 2026-05-17 |
| 9 | ssoocc.com | Test report agent | Product inspection reports | Wrong intent | Undated |
| 10 | ssoocc.com | Test report agent | Platform product inspection reports | Wrong intent | 2025-11-04 |

### Publisher-type counts

| Publisher type | Q1 | Q2 | Q3 | Q4 | English total | Chinese query |
|---|---|---|---|---|---|---|
| Seller of retouching, clipping, photography, editing tools or related software | 10 | 9 | 6 | 6 | 31 of 40 | 6 of 10 |
| Forum thread | 0 | 0 | 4 | 4 | 8 of 40 | 0 |
| Self-published, affiliation unknown | 0 | 1 | 0 | 0 | 1 of 40 | 0 |
| Goods inspection or test-report agent (off-intent) | 0 | 0 | 0 | 0 | 0 | 4 of 10 |
| Standards body, government, academic or trade body | 0 | 0 | 0 | 0 | 0 of 40 | 0 of 10 |

Of the five ranking pages read in full: 0 name ISO 2859-1, an AQL, ISO 3664 or
IEC 61966-2-1; 1 quotes the ICC; 1 recommends sRGB for web without the
designation; 1 mentions D50 or D65 review lighting; 0 state a sample size tied
to batch size; 4 of 5 carry no table. The only numeric sampling rule anywhere
in 50 results is a Chinese plugin vendor's 10 to 20 percent, with no method.

**The bar:** 1,300 to 5,000 words, 0 or 1 table, checklists with no pass rule
and no named standard. Depth is low, length is high. A 1,900-word page with a
gate table carrying a pass rule per gate, the standard's own sampling table
and a spec template clears the field on depth, and three tables beats every
ranking page on structure.

**The gap, in one sentence:** no ranking page tells a buyer how many images to
check in a batch of a given size, or which published standards sit behind
color and viewing decisions; every page says "QC" and none says how it is
measured.

**H1 consequence:** the working H1 "Retouch at volume: the QA pipeline, gate by
gate" holds. The sampling gate is the hard edge the SERP lacks, so it belongs
in the first screen under the answer, not deep in the page. No H1 change and no
meta change needed: the approved meta's "sampling plans from the published
standard" is accurate on this evidence.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified.
Unverified rows are cut and repeated under Do not publish.

### Acceptance sampling

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| ISO 2859-1:1999 is amended by ISO 2859-1:1999/Amd 1:2011, dated 2011-06-15, prepared by ISO/TC 69, Applications of statistical methods, SC 5, Acceptance sampling | https://cdn.standards.iteh.ai/samples/53053/59534b5a439d432589a171e856e95d20/ISO-2859-1-1999-Amd-1-2011.pdf | 2011-06-15, read 2026-09-10 | n/a | ISO's own amendment text, preview file hosted by a standards reseller. iso.org returned 403 | ISO | primary |
| Amd 1 changes the switching rule to normal-to-reduced: switching score at least 30 or, with the responsible authority's approval, the previous 10 lots accepted; it also updates references and two graph arrows in Table 9. It does not touch Table 1 or Table 2-A | Same | 2011-06-15 | n/a | Amendment read in full (two pages) | ISO | primary |
| IS 2500 (Part 1):2000 is "identical with ISO 2859-1:1999", adopted by the Bureau of Indian Standards "without deviations", published October 2000, third revision | https://archive.org/details/gov.in.is.2500.1.2000 (PDF download) | 2000-10, read 2026-09-10 | n/a | National foreword read | BIS | primary |
| Sample sizes are designated by code letters; Table 1 gives the code letter for the lot size and the inspection level (full level II column in the standards section below) | Same PDF, printed page 19, rendered to an image | 1999 text | n/a | Table read cell by cell | BIS reproducing ISO | primary, and triangulated for the level II sample size per lot band against the Codex guideline and GB/T 2828.1-2012 (see R6 for the one Codex boundary conflict) |
| "Unless otherwise specified, level II shall be used." Level I for less discrimination, level III for more; special levels S-1 to S-4 where small samples are necessary and larger sampling risks can be tolerated | Same PDF, clause 10.1 | 1999 text | n/a | Clause read | BIS reproducing ISO | primary |
| "The amount of information about the quality of a lot gained from examining samples drawn from the lot depends upon the absolute size of the samples, not upon the relative size of the sample to the lot size, provided the sample is small relative to the lot that is examined." | Same PDF, clause 10.1 | 1999 text | n/a | Clause read | BIS reproducing ISO | primary |
| Table 2-A single sampling plans for normal inspection: sample size by code letter A 2, B 3, C 5, D 8, E 13, F 20, G 32, H 50, J 80, K 125, L 200, M 315, N 500, P 800, Q 1,250, R 2,000; acceptance and rejection numbers per AQL (values in the standards section) | Same PDF, printed page 20, rendered to an image | 1999 text | n/a | Table read cell by cell, arrows followed | BIS reproducing ISO | primary; the non-arrow cells checked against the Codex table agree |
| Arrow rule: a down arrow means use the first plan below it, an up arrow the first plan above; "If sample size equals, or exceeds, lot size, carry out 100 % inspection." | Same PDF, Table 2-A legend | 1999 text | n/a | Legend read | BIS reproducing ISO | primary |
| "The designation of an AQL shall not imply that the supplier has the right knowingly to supply any nonconforming item." The AQL is a parameter of the scheme, not the process average, and the process average is expected to be better than the AQL | Same PDF, clause 5.1 | 1999 text | n/a | Clause read | BIS reproducing ISO | primary |
| Nonconformities are generally classified by seriousness, class A of highest concern and assigned a very small AQL, class B a larger one | Same PDF, clause 3.1.6, notes 2 and 4 | 1999 text | n/a | Clause read | BIS reproducing ISO | primary |
| Items for the sample "shall be drawn from the lot by simple random sampling"; stratified sampling proportional to sub-lot size where a lot has sub-lots | Same PDF, clause 8.1 | 1999 text | n/a | Clause read | BIS reproducing ISO | primary |
| The responsible authority decides how non-accepted lots are disposed of: scrapped, sorted, reworked, re-evaluated or held. A non-accepted lot is not resubmitted until all items are re-examined and the supplier is satisfied all nonconforming items were removed, replaced or corrected | Same PDF, clauses 7.2 and 7.4 | 1999 text | n/a | Clauses read | BIS reproducing ISO | primary |
| Normal inspection moves to tightened "as soon as two out of five (or fewer than five) consecutive lots have been non-acceptable on original inspection"; after 5 cumulative non-accepted lots on tightened inspection, acceptance procedures stop until the supplier acts | Same PDF, clauses 9.3.1 and 9.4 | 1999 text | n/a | Clauses read | BIS reproducing ISO | primary |
| An intergovernmental food sampling guideline extracts plans from ISO 2859-1 at AQL 0.65, 2.5 and 6.5 percent, but labels ISO's general levels I, II and III as "reduced, normal, tightened", keeps the code-letter sample size where ISO's arrows change it, and prints a 1,201 to 1,320 lot band where ISO prints 1,201 to 3,200 | https://www.fao.org/input/download/standards/10141/CXG_050e.pdf, pages 39 and 40 | CAC/GL 50-2004, read 2026-09-10 | n/a | Table 10 read from rendered images and compared cell by cell with ISO Table 2-A | FAO and WHO Codex Alimentarius Commission | primary as to what the guideline prints; a conflict, not a corroboration, for arrow cells |
| GB/T 2828.1-2012 is China's national adoption of ISO 2859-1:1999, marked "(ISO 2859-1:1999, IDT)", issued 2012-11-05, in force 2013-02-15, replacing GB/T 2828.1-2003, issued by the national quality inspection administration and the Standardization Administration of China. Its Table 1 columns S-2, S-3, S-4, I, II and III match IS 2500 row for row across all 15 lot bands (the lot-size and S-1 columns fell outside the rendered crop) | https://haorunhua.com/wp-content/uploads/GBT2828.1-2012... (scanned copy of the national standard hosted by a company; full URL in the Yahoo result log) | 2012-11-05, read 2026-09-10 | n/a | Cover and Table 1 read from rendered page images | SAC and the quality inspection administration; hosted copy | primary as to the printed cover and table; the host is not a standards body, so the adoption is cited to the standard number, never the host |

### Published imaging inspection guidance

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| US federal digitization guideline, third edition: "We recommend, at a minimum, 10 images or 10 % of each batch of digital images, whichever quantity is larger, should be inspected"; viewing at 100 percent magnification "on a profiled graphics workstation by a trained technician"; a thumbnail review of all images first | https://www.digitizationguidelines.gov/guidelines/FADGITechnicalGuidelinesforDigitizingCulturalHeritageMaterials_ThirdEdition_05092023.pdf, section 10.1 | 2023-05-09 | n/a | Interagency guideline, chapter 10 read in full | Federal Agencies Digital Guidelines Initiative, Still Image Working Group, editors from the Library of Congress and the National Archives | primary |
| Same guideline: "If more than 1% of the total number of images and associated metadata in a batch, based on the randomly selected sampling, are found to be defective ... the entire batch should be re-inspected"; below 1 percent, only the defective files are redone | Same, section 10.3 | 2023-05-09 | n/a | Same | Same | primary |
| Same guideline: "In most situations QC/QA are done in a 2-step process", technician checks during production "followed by a second check by another person"; the guidelines are "informative, not prescriptive" | Same, chapter 10 introduction and front matter | 2023-05-09 | n/a | Same | Same | primary |
| Same guideline, section 3.1 (rare and special bound volumes): average color accuracy, mean Delta E 2000 of all patches, at most 5, 3.5 and 2 at 2, 3 and 4 stars; 90th percentile at most 10, 7 and 4; white balance at most 6, 4 and 2 | Same, printed page 27, rendered to an image | 2023-05-09 | n/a | Table read from the image | Same | primary, scoped to camera capture of one material category, never an ecommerce tolerance |
| Photo industry coalition guidelines, version 4.0, "the industry consensus as of Sept 22, 2008": monitors "calibrated and profiled with a hardware device. Visual calibration is not adequate for professional image editing"; calibration ranges gamma 1.8 to 2.2, white point 5000K to 6500K, 80 to 140 cd/m2; working and output spaces "should be embedded and preserved when opening files" | http://www.updig.org/guidelines/uqg.html and http://www.updig.org/ | 2008-09-22 | n/a | Coalition guideline read | Coalition of 21 listed photography and picture-industry trade groups | primary, and 18 years old: always print the date |
| Same guidelines for image receivers: color profiles "should always be attached to the image when saving, and preserved when opening"; "It is impossible to interpret the color numbers in an image correctly and with certainty if the color space is not known"; delivered images should be free of sensor dust spots, scan lines, artifacts, banding, excessive grain, moire, chromatic aberrations and excessive noise | http://www.updig.org/guidelines/ir_icc_profiles.html; http://www.updig.org/guidelines/ir_file_quality.html | 2008 | n/a | Guideline pages read | Same coalition | primary, 2008 |
| ITU-R BT.500-15, in force, dated 05/2023: "Unless the chosen methodology states otherwise, at least 15 observers should be used"; observers screened for visual acuity and color vision before a session | https://www.itu.int/rec/R-REC-BT.500 and the in-force PDF | 2023-05 | n/a | Recommendation read at clause 2.5 | ITU Radiocommunication Sector | primary, scoped to subjective assessment of television images |

### Color management and viewing

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| The current ICC profile specification is ICC.1:2022, profile version 4.4.0.0, "Image technology colour management, Architecture, profile format, and data structure"; the ICC page says the specification was published as ISO 15076-1 | https://www.color.org/icc_specs2.xalter | Read 2026-09-10 | n/a | Consortium's own specifications page | International Color Consortium | primary |
| "The ICC specification defines the file format for profiles that connect between colour encodings" | Same | Read 2026-09-10 | n/a | Same | ICC | primary |
| "Embedded profiles allow users to transparently move color data between different computers, networks and even operating systems without having to worry if the necessary profiles are present on the destination systems." | https://www.color.org/getting-started/ (page title: Introduction to the ICC profile format) | Read 2026-09-10 | n/a | Consortium page | ICC | primary |
| IEC 61966-2-1:1999, Multimedia systems and equipment, Colour measurement and management, Part 2-1: Colour management, Default RGB colour space, sRGB; edition 1.0, published 1999-10-18, corrigendum of January 2014 incorporated, stability date 2040, 51 pages, IEC TC 100 | https://webstore.iec.ch/en/publication/6169 | 1999-10-18, read 2026-09-10 | n/a | Publisher's catalog record | IEC | primary |
| sRGB reference conditions, IEC 61966-2-1:1999 with Amendment 1: white point D65 (x 0.3127, y 0.3290), reference display luminance 80 cd/m2, ambient illuminance 64 lux, surround 4.1 cd/m2, image background 16 cd/m2 | https://registry.color.org/rgb-registry/srgb | Read 2026-09-10 | n/a | ICC color encoding registry entry | ICC | primary for the registry; triangulated with the IEC record for designation |
| ISO 3664:2009, Graphic technology and photography, Viewing conditions, third edition, 2009-04-15, prepared by ISO/TC 42 with ISO/TC 130, cancels and replaces ISO 3664:2000; reference illuminant CIE D50; two illumination levels, a high level for critical comparison (P1, T1) and a lower level for practical appraisal "including routine inspection" (P2); a clause for images on colour monitors; monitor conformance "does not ensure that the monitor will match the hardcopy without provision of a defined colour transformation ... or use of proper colour management" | https://cdn.standards.iteh.ai/samples/43234/d3de25012f6b433e886679d3a450499f/ISO-3664-2009.pdf | 2009-04-15, read 2026-09-10 | n/a | ISO's own foreword, introduction, scope and contents, preview file | ISO | primary for these elements; illuminance values not in the preview, cut |
| Whether ISO 3664:2009 and ISO 2859-1:1999 are still the current editions today | iso.org, 403 | 2026-09-10 | n/a | Catalog status not readable | n/a | unverified: print the designation and date only, never "current" |

### Human inspection limits (adjacent populations)

Every row: See, J. E., Visual Inspection: A Review of the Literature, SAND2012-8590,
Sandia National Laboratories, October 2012, sponsored by the US Department of
Energy's National Nuclear Security Administration. Method: review of 212
documents from the 1950s onward. URL: https://www.osti.gov/biblio/1055636 (full
text https://www.osti.gov/servlets/purl/1055636). Who paid: US government. The
populations are manufacturing, aviation and security inspection, never image
retouching.

| Claim | Original study as reported | Section, page | Sample size | Confidence |
|---|---|---|---|---|
| 80 inspectors on a self-paced task detected significantly fewer defects and committed more false alarms as the defect rate fell from 16 percent to 4, 1 and 0.25 percent | Harris, 1968 | 3.1.1, p. 28 | 80 inspectors | primary as to the review, single study |
| Doubling the normal inspection rate increased misses from 23 to 30 percent, though easy defects were not affected by speed | Schoonard, Gould and Miller, 1973 | 3.1.1 to 3.1.2, p. 29 | not stated in the review | primary as to the review, single study |
| Detection "could deteriorate up to 40% in 30 minutes" | Drury and Fox, 1975 | Vigilance section, p. 40 | not stated | primary as to the review, single study |
| Ten experienced inspectors, 30-minute periods, about one defect per hundred seals: a 27 percent decrement in hits from the first to the second 15-minute period | Fox, 1977 | p. 40 | 10 inspectors | primary as to the review, single study |
| Several non-aviation field studies found a decrement in hits of 13 to 45 percent associated with time on task | Drury and Watson, 2002 | p. 40 | several field studies, count not given | primary as to the review |
| Detection of solder defects by individual inspectors ranged from 43 to 100 percent, with no defect found by every inspector; 23 percent of decisions reversed when the same piston rings were submitted twice | McCornack, 1961 | 3.3, p. 41 | not stated | primary as to the review, 1961 |
| Two inspectors beat one in every arrangement tested except splitting the batch between them; the best detectability came when both inspected every item and both had to reject it | Drury, Karwan and Vanderwarker, 1986 | 3.1.8, p. 33 | not stated | primary as to the review, single study |
| Repeated independent inspections raised accuracy for critical defects up to six inspections, with little gain beyond | Harris, 1969 | 3.1.8, p. 33 | not stated | primary as to the review, single study |
| Re-inspection "provides a lower bound on inspection performance ... both inspectors may miss whole classes of defects" | The review's own assessment | 2.5.3, pp. 24 to 25 | n/a | primary |
| Simple visual aids (drawings with dimensions and tolerances) gave a 42 percent increase in detection for 27 experienced inspectors without a significant rise in time or cost | Chaney and Teel, 1967 | 3.1.9, p. 33 | 27 inspectors | primary as to the review, single study |
| Faster feedback from sample examiners to 100 percent inspectors cut missed defects by half, and the gain held four months later | Drury and Addison, 1973 | 3.4.4, p. 54 | one glass plant | primary as to the review, single study |

### Marketplace and platform rules

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Taobao's AI fake-image rule, four situations: distorted quality or mismatched style (material rendering, blurred texture and creases); distorted or exaggerated effects (over-beautification, anime look, excessive skin smoothing); distorted or non-existent scenes (deformed bodies, physics-breaking images); poor image quality (cutout white edges, obvious pasted look). Product images should rest on real photographs, retouching moderate, no distortion | http://jjckb.xinhuanet.com/20250327/db1aeefb30ba4603b6415560e604ed1e/c.html | 2025-03-27, re-read 2026-09-10 | n/a | Business press reporting the platform's official account announcement | Economic Information Daily, state news agency title | triangulated (ledger), re-read at source this session |
| Prohibited in Tmall's white-background slot: text, watermark, logo or promotional overlay 9 of 15; model 7; shadow 6; splicing 6; hangers, mannequins and tags 5; border 2; any body part 1; clean cutout edges stated by 3 of 15; no source ranks causes, 0 of 15 | research/tmall-white-background-image-rules.md; ledger block "Tmall white-background image, modal values" | Collected 2026-09-10 | 15 domains | Modal-value method, deviation 7 | Mixed vendors and seller-education pages, none named | modal, not primary; reused unchanged |
| Background described as pure white on 8 of 15; RGB 255 255 255 is the only background value no published reading rejects (derived) | Same | 2026-09-10 | 15 domains | Same | Same | modal, derived row labeled derived |
| Main image prohibitions: no watermark, border, splice, promotional overlay, QR code, third-party logo, or model in the white slot, 11 of 18 | research/tmall-product-image-requirements.md; ledger block brief 01 | 2026-09-10 | 18 domains | Same | Same | modal, not primary; reused unchanged |

### Cost, realism research and first party

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Ecommerce retouch per-image band roughly $0.25 to $1.20 by operation, one card adding about $95 a month. Re-read: $0.25 drop shadow, $0.39 clipping path and background removal, $0.69 retouching, $0.89 ghost mannequin, $1.19 masking; second card $0.95 an image plus $95 a month, 200 images a day | Two published pricing pages (ledger names them; never on the page) | Read 2026-09-10 | 2 cards | Published price lists read directly | Sellers | triangulated as a rate-card band, a market claim |
| An image-editing physical-realism benchmark of 900 cases across 8 sub-dimensions and 11 models: all open-source models score below 60 | https://arxiv.org/html/2510.17681v1 | 2025-10-20, re-read 2026-09-10 | 900 cases | Benchmark paper | Academic authors | single-source |
| Generated images "can be perceptually convincing without being physically plausible": 32 materials, 45, 35 and 40 observers in the first experiment's three image sets | https://pmc.ncbi.nlm.nih.gov/articles/PMC13001837/ | 2026-03-16, re-read 2026-09-10 | 120 observers in experiment 1 | Triplet similarity experiments | Academic | primary |
| hubStudio describes post-generation review, brand compliance review, human review at every stage and final QC before delivery (verbatim in the first-party table) | src/pages/solutions/ai-production/image.astro lines 135, 139, 147, 151 | Read 2026-09-10 | n/a | First-party site copy | hubStudio | first-party, published |
| hubStudio's ecommerce service includes three revision rounds | src/pages/services/design/ecommerce.astro lines 199 to 200 | Read 2026-09-10 | n/a | First-party site copy, policy | hubStudio | first-party policy |
| Search-results audit: 31 of 40 English results published by sellers of the service or its tools, 8 forums, 1 self-published, 0 standards, government, academic or trade-body pages; 0 of 5 pages read in full name the sampling standard or give a lot-size-based sample; the Chinese query returned 0 of 10 citing any standard | R2 above | 2026-09-10 | 50 results | Publisher type recorded per result | Own observation | primary observation, re-countable |

### First-party statements, verbatim

| File and line | Text as published | Use |
|---|---|---|
| src/pages/solutions/ai-production/image.astro:135 | "We mitigate this through careful training-data curation, deduplication, post-generation review and reverse image search before delivery." | Usable as what the site says, attributed to the page |
| src/pages/solutions/ai-production/image.astro:139 | "The process includes initial brand DNA analysis, human creative oversight during generation, brand compliance review and final QC before delivery." | Usable, attributed to the page |
| src/pages/solutions/ai-production/image.astro:147 | "We use prompt-engineering best practice, content filtering and human review at every stage. If something unsuitable slips through, we run rapid correction and regenerate at no additional cost. Revisions are unlimited until the brief is met." | Usable for the review statement. The "unlimited" revisions line conflicts with the ecommerce page; do not generalize either |
| src/pages/solutions/ai-production/image.astro:151 | "Humans drive every creative decision: concept development, prompt crafting, style direction, quality evaluation and final selection. Creative directors, not algorithms, decide what gets delivered." | Usable, attributed to the page |
| src/pages/services/design/ecommerce.astro:81 | "Hero shots that pass preflight." | Usable as a phrase only |
| src/pages/services/design/ecommerce.astro:141 | "Specs, encoding, slicing, A+ modules, all built into the brief from day one." | Usable: the spec is fixed in the brief, which supports the spec-first gate |
| src/pages/services/design/ecommerce.astro:199 to 200 | "How many rounds of revisions are included?" "Three. Most projects close inside two. Beyond round three we quote hourly, though it is rare on catalog work because the brand system gets locked in the brief." | "Three" is policy and usable. "Most projects close inside two" is a frequency claim with no count: cut. "we quote hourly" carries no figure and must not gain one |
| src/pages/services/design/ecommerce.astro:67 to 69 | Three "recent-project results" stats, the first labeled "First-review approval" | **Blocked.** An approval figure and two performance figures, none with a method. Not reproduced here |
| src/pages/solutions/ai-production/image.astro:36 | A per-traditional-image dollar range | **Blocked.** Ledger do-not-publish row, a price figure |

## Standards read, value by value

| Designation | Title | Edition and date | Where it was read | What was read |
|---|---|---|---|---|
| ISO 2859-1:1999 | Sampling procedures for inspection by attributes, Part 1: Sampling schemes indexed by acceptance quality limit (AQL) for lot-by-lot inspection | 1999; Amendment 1 dated 2011-06-15 | Full text through IS 2500 (Part 1):2000, identical adoption, BIS; amendment through ISO's own preview file | Clauses 3.1.6, 5.1, 7.2, 7.4, 8.1, 9.3.1, 9.4, 10.1; Table 1; Table 2-A |
| ISO 2859-1:1999/Amd 1:2011 | Amendment 1 | 2011-06-15 | ISO preview file | Full amendment |
| GB/T 2828.1-2012 | Chinese national adoption of ISO 2859-1:1999, marked IDT | Issued 2012-11-05, in force 2013-02-15 | Scanned copy, cover and Table 1 rendered | Cover marking; Table 1 columns S-2 to III, identical to IS 2500 |
| CAC/GL 50-2004 | Codex General Guidelines on Sampling | 2004 | fao.org PDF | Section 4.2, Table 10, compared with ISO |
| IEC 61966-2-1:1999 | Default RGB colour space, sRGB | Edition 1.0, 1999-10-18, corrigendum 2014 | IEC webstore record; ICC registry entry for reference conditions | Designation, dates, reference conditions |
| ICC.1:2022 | Image technology colour management, architecture, profile format and data structure | Profile version 4.4.0.0 | color.org | Designation, version, profile purpose, embedded profiles |
| ISO 3664:2009 | Graphic technology and photography, Viewing conditions | Third edition, 2009-04-15 | ISO's own preview file | Foreword, introduction, scope, contents. Clause 4 values not read |
| ITU-R BT.500-15 | Methodologies for the subjective assessment of the quality of television images | 05/2023, in force | itu.int | Clause 2.5 on observers |
| FADGI Technical Guidelines, Third Edition | Technical Guidelines for Digitizing Cultural Heritage Materials | May 2023 | digitizationguidelines.gov PDF | Chapter 10 in full, section 3.1 table |
| UPDIG v4.0 | Universal Photographic Digital Imaging Guidelines | 2008-09-22 | updig.org | Quick guide, image receivers ICC profile and file quality pages, coalition list |

### ISO 2859-1 Table 1, as printed (IS 2500 page 19)

Lot size against code letter. Every column read from the page image.

| Lot size | S-1 | S-2 | S-3 | S-4 | I | II | III |
|---|---|---|---|---|---|---|---|
| 2 to 8 | A | A | A | A | A | A | B |
| 9 to 15 | A | A | A | A | A | B | C |
| 16 to 25 | A | A | B | B | B | C | D |
| 26 to 50 | A | B | B | C | C | D | E |
| 51 to 90 | B | B | C | C | C | E | F |
| 91 to 150 | B | B | C | D | D | F | G |
| 151 to 280 | B | C | D | E | E | G | H |
| 281 to 500 | B | C | D | E | F | H | J |
| 501 to 1,200 | C | C | E | F | G | J | K |
| 1,201 to 3,200 | C | D | E | G | H | K | L |
| 3,201 to 10,000 | C | D | F | G | J | L | M |
| 10,001 to 35,000 | C | D | F | H | K | M | N |
| 35,001 to 150,000 | D | E | G | J | L | N | P |
| 150,001 to 500,000 | D | E | G | J | M | P | Q |
| 500,001 and over | D | E | H | K | N | Q | R |

### ISO 2859-1 Table 2-A, the rows a retouch batch uses (IS 2500 page 20)

Normal inspection, single sampling. Ac is the acceptance number, Re the
rejection number. Where the cell is an arrow, the plan it points to is given
and its sample size replaces the code letter's.

| Code letter | Sample size | AQL 0.65 | AQL 1.0 | AQL 1.5 | AQL 2.5 | AQL 4.0 | AQL 6.5 |
|---|---|---|---|---|---|---|---|
| C | 5 | down arrow | down arrow | down arrow | 0 1 | up arrow | down arrow |
| D | 8 | down arrow | down arrow | 0 1 | up arrow | down arrow | 1 2 |
| E | 13 | down arrow | 0 1 | up arrow | down arrow | 1 2 | 2 3 |
| F | 20 | 0 1 | up arrow | down arrow | 1 2 | 2 3 | 3 4 |
| G | 32 | up arrow | down arrow | 1 2 | 2 3 | 3 4 | 5 6 |
| H | 50 | down arrow | 1 2 | 2 3 | 3 4 | 5 6 | 7 8 |
| J | 80 | 1 2 | 2 3 | 3 4 | 5 6 | 7 8 | 10 11 |
| K | 125 | 2 3 | 3 4 | 5 6 | 7 8 | 10 11 | 14 15 |
| L | 200 | 3 4 | 5 6 | 7 8 | 10 11 | 14 15 | 21 22 |
| M | 315 | 5 6 | 7 8 | 10 11 | 14 15 | 21 22 | up arrow |
| N | 500 | 7 8 | 10 11 | 14 15 | 21 22 | up arrow | up arrow |

### The sampling plan table for the page, arrows resolved

General inspection level II, normal inspection, single sampling, from Tables 1
and 2-A above. Label on the page: "ISO 2859-1:1999 single sampling plans, normal
inspection, general inspection level II". Each cell reads sample size, then
accept on or fewer, reject on or more.

| Images in the batch | Code letter | AQL 1.0 | AQL 2.5 | AQL 4.0 |
|---|---|---|---|---|
| 26 to 50 | D | 13 checked, accept 0, reject 1 | 5 checked, accept 0, reject 1 | 13 checked, accept 1, reject 2 |
| 51 to 90 | E | 13 checked, accept 0, reject 1 | 20 checked, accept 1, reject 2 | 13 checked, accept 1, reject 2 |
| 91 to 150 | F | 13 checked, accept 0, reject 1 | 20 checked, accept 1, reject 2 | 20 checked, accept 2, reject 3 |
| 151 to 280 | G | 50 checked, accept 1, reject 2 | 32 checked, accept 2, reject 3 | 32 checked, accept 3, reject 4 |
| 281 to 500 | H | 50 checked, accept 1, reject 2 | 50 checked, accept 3, reject 4 | 50 checked, accept 5, reject 6 |
| 501 to 1,200 | J | 80 checked, accept 2, reject 3 | 80 checked, accept 5, reject 6 | 80 checked, accept 7, reject 8 |
| 1,201 to 3,200 | K | 125 checked, accept 3, reject 4 | 125 checked, accept 7, reject 8 | 125 checked, accept 10, reject 11 |
| 3,201 to 10,000 | L | 200 checked, accept 5, reject 6 | 200 checked, accept 10, reject 11 | 200 checked, accept 14, reject 15 |
| 10,001 to 35,000 | M | 315 checked, accept 7, reject 8 | 315 checked, accept 14, reject 15 | 315 checked, accept 21, reject 22 |

Arrow cells in this table, for the writer's check: D at 1.0 and 4.0 (down to
E), D at 2.5 (up to C), E at 2.5 (down to F), F at 1.0 (up to E), G at 1.0
(down to H). Every other cell is printed directly. AQL 1.0, 2.5 and 4.0 are
illustrative columns chosen for this page, not a recommendation from the
standard: the standard leaves the AQL to the responsible authority.

## R6. Where sources conflict

### 1. The intergovernmental simplification against the standard's own table

The Codex sampling guideline (CAC/GL 50-2004, Table 10) says its plans are
"extracted from the Standard ISO 2859-1" and calls the table "a simplification".
Read cell by cell against Table 2-A, it departs from the standard in three ways.

| Point | ISO 2859-1 (IS 2500 and GB/T 2828.1 agree) | Codex Table 10 | Why they differ |
|---|---|---|---|
| Column labels | General inspection levels I, II, III. The standard says "The choice of inspection level is quite separate from these three severities of inspection" (normal, tightened, reduced) | Columns headed Reduced, Normal, Tightened carry the level I, II and III sample sizes (for 501 to 1,200 items: 13, 80, 125, which are code letters G, J, K) | Terminology borrowed from a Nordic food-analysis procedure (NMKL Procedure No. 12) the guideline cites; the section heading also cites the 1989 edition |
| Arrow cells | The arrow moves you to another plan and its sample size | Keeps the code letter's sample size and takes only the acceptance number. 26 to 50 items at AQL 2.5: ISO checks 5, accepts 0; Codex prints 8 and 0. 51 to 90 at 2.5: ISO checks 20, accepts 1; Codex 13 and 1. 151 to 280 at 0.65: ISO checks 20, accepts 0; Codex 32 and 0 | Simplification. The two agree on every non-arrow cell checked |
| Lot bands | 1,201 to 3,200 and 3,201 to 10,000 | 1,201 to 1,320 and 1,321 to 10,000 | Almost certainly a typographic error in the guideline, since its sample sizes follow ISO's bands |

**Resolution:** the page prints the standard's table from the standard text, and
never the Codex values. Two national adoptions agree with each other, and one
of them was read in full.

### 2. The edition number of ISO 2859-1:1999

ISO's own amendment cover prints "First edition 1999-11-15". The Indian
adoption's foreword describes an earlier ISO 2859-1:1989 that the 1999 text
revised, and the Codex guideline cites "ISO 2859-1 : 1989". The two are
reconcilable only with the ISO catalog record, which returned 403.
**Resolution:** cite "ISO 2859-1:1999, amended 2011". No edition number.

### 3. A fixed share of the batch against a table driven by batch size

The federal digitization guideline samples at least 10 images or 10 percent
of each batch. ISO 2859-1 samples by code letter and says information depends
on the absolute sample size. Arithmetic, shown:

| Images in the batch | Federal guideline minimum, max(10, 10 percent) | ISO 2859-1 level II sample |
|---|---|---|
| 50 | 10 | 8 (D) |
| 200 | 20 | 32 (G) |
| 500 | 50 | 50 (H) |
| 1,000 | 100 | 80 (J) |
| 3,000 | 300 | 125 (K) |
| 10,000 | 1,000 | 200 (L) |
| 30,000 | 3,000 | 315 (M) |

The two agree near 500 images and are five times apart at 10,000. The pass
rules differ too: the guideline re-inspects the batch above 1 percent defective
"based on the randomly selected sampling" (its wording leaves open whether the 1
percent is of the sample or the batch), while ISO accepts or rejects on the
Ac and Re numbers for the AQL the buyer picks. Why they differ: the guideline is
written for one-off cultural heritage digitization and calls itself informative;
the standard is built for continuing series of lots with switching rules.
**Resolution:** publish both, name both, and let the reader see the arithmetic.
Neither is "the industry standard" for ecommerce retouching.

The only other numeric rule found, a Chinese plugin vendor's 10 to 20 percent,
has no method and is not published.

### 4. The Taobao rule as read today against the brief 27 cleared quote

The brief 27 quote says the platform "became the first" to publish such a rule
and refers to "its detection-model enforcement". The article re-read in full in
Chinese on 2026-09-10 contains neither a "first" claim nor any mention of a
detection model. The four situations themselves match. **Resolution:** the
cleared quote below drops both phrases. The ledger row gets a correction note.

### 5. Revision policy on two first-party pages

The ecommerce design page says three revision rounds are included; the AI image
production page says "Revisions are unlimited until the brief is met." Different
services, different pages. **Resolution:** the site wins page by page. Do not
state a single hubStudio revision policy in this article.

### 6. D65 on the screen, D50 at the viewing booth

The sRGB reference display white is D65 (ICC registry reading of IEC
61966-2-1). ISO 3664:2009 uses D50 as its reference illuminant for prints,
proofs and transparencies, and the photo trade coalition guidelines (2008) say
a 5000K or D50 source "is necessary to visually match monitor to print", while
recommending 6500K as a general monitor setting. Not a contradiction: the two
standards serve different comparisons. **Resolution:** the page may say screen
delivery follows the sRGB encoding and physical-sample comparison follows ISO
3664's D50 viewing, without numeric lux values, and must not present either
white point as a retouch QC requirement.

### 7. Shadow in the white-background slot

Six of fifteen sources prohibit shadows; two, both 2026 tool vendors and one
self-contradicting, tolerate a contact shadow (brief 02). **Resolution:** the
spec template says no shadow in the white-background slot as the modal reading,
never that a contact shadow is allowed.

### 8. Two inspectors against the limits of re-inspection

The inspection review reports two inspectors outperforming one, and also warns
that re-inspection gives only a lower bound because both inspectors can miss
whole classes of defects. **Resolution:** publish both halves together. A
second checker is supported; a second checker as a guarantee is not.

## Cleared for use

Ready to paste, American English, no Han characters, no vendor, studio or
platform-competitor names. Standards bodies, the ICC, a federal initiative, a
national laboratory, a newspaper and platforms are named where the attribution
needs them. Every quote below is followed by its Source line.

### Sampling

**1. Sample size follows batch size, not a percentage.**

> The published standard for sampling inspection by attributes, ISO 2859-1:1999
> as amended in 2011, sets how many items to check from the size of the batch,
> through a table of code letters, and uses general inspection level II unless
> something else is specified. Its reasoning: what a sample tells you depends on
> how many items you check, not on what share of the batch they are.
> Source: ISO 2859-1:1999 with Amendment 1:2011, September 2026, clause 10.1 and Table 1 read in the Bureau of Indian Standards' identical adoption IS 2500 (Part 1):2000, with the same code letters printed in China's identical adoption GB/T 2828.1-2012.

**2. The plan, in the standard's numbers.**

> At general inspection level II and normal inspection, ISO 2859-1 checks 80
> images from a batch of 501 to 1,200. At an acceptance quality limit of 2.5
> percent, the batch is accepted with 5 or fewer nonconforming images and
> rejected at 6. A batch of 3,201 to 10,000 takes a sample of 200, accepted on
> 10 and rejected on 11.
> Source: ISO 2859-1:1999, Tables 1 and 2-A, single sampling plans for normal inspection, September 2026, read from page images of the identical national adoption IS 2500 (Part 1):2000.

**3. What an AQL is not.**

> The standard is blunt about the acceptance quality limit: "The designation of
> an AQL shall not imply that the supplier has the right knowingly to supply any
> nonconforming item."
> Source: ISO 2859-1:1999, clause 5.1, September 2026, quoted verbatim from the identical national adoption IS 2500 (Part 1):2000.

**4. The buyer sets the limit, and decides what happens to a failed batch.**

> ISO 2859-1 does not choose the quality limit for you. The inspection level and
> the acceptance quality limit are set by the responsible authority, and so is
> what happens to a rejected batch: scrapped, sorted, reworked, re-evaluated or
> held. A rejected batch comes back for inspection only after every item has
> been re-examined and the nonconforming ones removed, replaced or corrected.
> Source: ISO 2859-1:1999, clauses 7.2, 7.4 and 10.1, September 2026, standard text read in the identical national adoption IS 2500 (Part 1):2000.

**5. The standard tightens itself.**

> Normal inspection switches to tightened inspection as soon as two of five or
> fewer consecutive batches are rejected on first inspection. After five
> rejected batches under tightened inspection, acceptance sampling stops until
> the supplier has acted to improve quality and the responsible authority agrees
> the action is likely to work.
> Source: ISO 2859-1:1999, clauses 9.3.1 and 9.4, September 2026, standard text read in the identical national adoption IS 2500 (Part 1):2000.

**6. A random sample, and graded defects.**

> The sample is drawn "by simple random sampling", in proportion to size where a
> batch is made of distinct sub-batches. Defects are graded: the most serious
> class gets a very small acceptance quality limit, less serious classes larger
> ones.
> Source: ISO 2859-1:1999, clauses 8.1 and 3.1.6, September 2026, standard text read in the identical national adoption IS 2500 (Part 1):2000.

**7. A published imaging rule that samples by share.**

> A US federal imaging guideline recommends inspecting at least 10 images or 10
> percent of each batch, whichever is larger, at 100 percent magnification on a
> profiled workstation, with a second person checking after the technician. If
> more than 1 percent of the batch is found defective in that random sample, the
> whole batch is re-inspected.
> Source: Federal Agencies Digital Guidelines Initiative, Technical Guidelines for Digitizing Cultural Heritage Materials, third edition, May 2023, chapter 10, an interagency guideline for cultural heritage digitization that describes itself as informative, not prescriptive.

**8. Where the two approaches part ways.**

> The two published approaches agree on small batches and split on large ones.
> For 500 images, the federal guideline's 10 percent and ISO 2859-1's level II
> both mean checking 50. For 10,000 images, the guideline calls for at least
> 1,000 and the standard for 200.
> Source: arithmetic on the federal digitization guideline's 10 percent rule, May 2023, and ISO 2859-1:1999 Table 1 at general inspection level II, September 2026, each step shown in the research file.

### Color and viewing

**9. Profiles travel with the file.**

> The International Color Consortium's current profile specification is
> ICC.1:2022, profile version 4.4.0.0. In the consortium's words, "Embedded
> profiles allow users to transparently move color data between different
> computers, networks and even operating systems without having to worry if the
> necessary profiles are present on the destination systems."
> Source: International Color Consortium, specifications page and introduction to the ICC profile format, September 2026, the standards body's own published pages read directly.

**10. sRGB is a standard, with a reference screen.**

> sRGB is a published standard, IEC 61966-2-1, first issued in October 1999. It
> defines a reference display with a D65 white at 80 candelas per square meter,
> viewed in 64 lux of ambient light.
> Source: IEC catalog record for IEC 61966-2-1:1999, edition 1.0, and the International Color Consortium's color encoding registry entry for sRGB, September 2026, both read directly.

**11. Viewing conditions for judging images.**

> ISO 3664:2009, now in its third edition, sets viewing conditions for judging
> prints, transparencies and images on monitors. It uses CIE illuminant D50 as
> its reference and specifies two light levels, a higher one for critical
> comparison and a lower one for practical appraisal, including routine
> inspection. It also warns that meeting its monitor conditions does not make a
> screen match a print without proper color management.
> Source: ISO 3664:2009, Graphic technology and photography, Viewing conditions, April 2009, foreword, introduction and scope read in ISO's own preview text in September 2026.

**12. Calibrate with an instrument, and keep the profile.**

> Photography's trade coalition guidelines say monitors used for image editing
> should be "calibrated and profiled with a hardware device", because "visual
> calibration is not adequate for professional image editing", and that color
> profiles "should always be attached to the image when saving, and preserved
> when opening."
> Source: Universal Photographic Digital Imaging Guidelines, version 4.0, September 2008, the consensus of a coalition of 21 photography and picture-industry trade groups, read September 2026.

### Human inspection

Every quote in this group describes manufacturing, aviation or security
inspection. The page must say so in the sentence before or after.

**13. Rare defects are easy to miss.**

> In one experiment with 80 inspectors, detection fell and false alarms rose as
> defects became rarer, with the defect rate stepped down from 16 percent to 4,
> 1 and 0.25 percent.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting a 1968 experiment in industrial inspection, not image retouching.

**14. Accuracy decays with time on task.**

> Field studies outside aviation found hit rates falling 13 to 45 percent with
> time on task. In one study, ten experienced inspectors lost 27 percent of
> their hits between the first and second 15 minutes of a 30-minute session.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting field studies summarized in 2002 and a 1977 study of industrial inspection, not image retouching.

**15. The same inspector disagrees with themselves.**

> In one study, 23 percent of accept or reject decisions reversed when the same
> parts were inspected a second time. In another, detection of solder defects
> ranged from 43 to 100 percent across individual inspectors, and no defect was
> found by all of them.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting 1961 studies of industrial inspection, not image retouching.

**16. Speed costs misses.**

> Doubling the pace of inspection raised misses from 23 to 30 percent in one
> study, though the easiest defects were caught at any speed.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting a 1973 study of integrated circuit chip inspection, not image retouching.

**17. Two inspectors, with a caveat.**

> Two inspectors beat one in every arrangement tested except splitting the
> batch between them, and detection was best when both inspected every item and
> both had to reject it. The same review warns that re-inspection only gives a
> lower bound on performance, because both inspectors can miss whole classes of
> defects.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting a 1986 study of industrial inspection plus the review's own assessment, not image retouching.

**18. Simple aids and fast feedback work.**

> Drawings of the part with its tolerances raised defect detection by 42 percent
> for 27 experienced inspectors, without a significant rise in time or cost.
> Faster feedback from sample checkers cut missed defects by half at one glass
> plant, and the gain held four months later.
> Source: a US national laboratory review of 212 published visual inspection studies, October 2012, reporting studies from 1967 and 1973 in industrial inspection, not image retouching.

### Marketplace rules

A page carrying any of quotes 20 to 23 publishes modal China platform values
and needs the disclaimer block from `SPEC.md`, marketplace form, with NN = 15
and DATE = 10 September 2026. See Notes for the writer.

**19. The platform rule that names retouching.**

> Taobao's rule against AI fake product images, announced in March 2025, says
> product images should rest on real photographs of the product and that
> retouching should be moderate and avoid distortion. It names four failures:
> material or style that does not match the product, over-beautified effects
> such as excessive skin smoothing, distorted or impossible scenes, and poor
> image quality such as white edges left by a cutout or an obvious pasted-on
> look.
> Source: Economic Information Daily, 27 March 2025, business press reporting the platform's own announcement on its official account, re-read in Chinese in September 2026.

**20. What the white-background slot forbids.** Reused verbatim, block 6 of
`tmall-white-background-image-rules.md`.

> The prohibitions are the most consistent part of the published record. Nine
> of fifteen sources rule out text, watermarks, logos and promotional overlay.
> Seven rule out a model, six rule out shadows, six rule out spliced composites,
> and five rule out hangers, mannequins and tags. One extends the model ban to
> any body part at all, hands, feet, legs or a head.
> Source: fifteen independent published sources, Chinese-language first, collected 10 September 2026, counted by domain for each prohibited element. Modal positions with their agreement counts, not a reading from the platform.

**21. The contact shadow is contested.** Reused verbatim, block 7.

> Whether a faint shadow directly under the product survives is not settled.
> Six of fifteen sources prohibit shadows with no exception. Two, both published
> in 2026, describe a light contact shadow as tolerated, and one of those two
> says the opposite on another of its own pages. Reflections and glare are
> named as prohibited on one source only.
> Source: fifteen independent published sources, Chinese-language, collected 10 September 2026, counted by domain with self-contradicting publishers noted. Contested modal position, not a reading from the platform.

**22. The background value no reading rejects.** Reused verbatim, block 4.

> RGB 255 255 255 is the only background value that no published reading
> rejects. A background at 252 passes the one published tolerance and fails the
> one published zero-tolerance reading. Clipping the background to pure 255 is
> therefore the one choice the published record does not contradict. That is a
> conclusion drawn from the spread, not a platform rule.
> Source: derived from the published tolerance positions, fifteen independent sources collected 10 September 2026, reasoning stated openly and resting on modal values rather than primary readings.

**23. Failure causes, unranked.** Reused verbatim, block 11.

> No published source ranks why white-background images fail. Three of fifteen
> describe causes, as an unranked list: a background that is not pure white, a
> shadow, a model, text or a logo, a product too small in the frame, a
> duplicated product, and rough cutout edges. None says how often any of them
> occurs.
> Source: fifteen independent published sources, Chinese-language, collected 10 September 2026. Stated as an unranked list with its count, not as a platform rejection taxonomy.

### Cost, realism and the search landscape

**24. The retouch rate band.** Reused verbatim from the ledger citation, both
cards re-read 2026-09-10.

> Published ecommerce retouch cards put the floor between roughly $0.25 and
> $1.20 an image by operation, with one card adding a fixed platform fee of
> about $95 a month on top.
> Source: published pricing pages in this category, September 2026, two independent cards read directly and compared, no vendor named.

**25. Convincing is not the same as correct.**

> Generated images can be perceptually convincing without being physically
> plausible, a vision-science study found after 32 materials were judged in
> triplet similarity tasks by 45, 35 and 40 observers across three image sets.
> Source: Journal of Vision 26(3):7, March 2026, peer-reviewed perception experiments, re-read September 2026.

**26. Editing models still break physics.**

> In an image-editing benchmark of 900 cases across 8 physical-realism
> sub-dimensions, every open-source model among the 11 tested scored below 60.
> Source: an image editing physical-realism benchmark, October 2025, a single academic preprint re-read September 2026.

**27. What the search results offer.**

> Across four buyer searches for retouching quality control, 31 of the top 40
> results were published by companies selling retouching, photography or editing
> tools, and none by a standards body, government agency or trade body. None of
> the five ranking pages read in full named the sampling standard or tied a
> sample size to batch size.
> Source: search-results audit run 10 September 2026 across four English buyer phrasings, publisher type recorded for every result, no domain named.

## Do not publish

### Hard blocks for this brief

| Item | Reason |
|---|---|
| **The internal approval figure logged under hubStudio delivery figures, in any form** | Blocked in the ledger and in the brief. Not reproduced in this file |
| **The three stats on the ecommerce design page (lines 67 to 69), including "First-review approval"** | No method, no sample, no period. Same grounds as the block above |
| **Any hubStudio rate, monthly figure, hourly figure or per-image price**, including the per-traditional-image range on the AI image page | Standing rule and ledger row |
| **"Most projects close inside two" revision rounds** | A frequency claim with no count, on the ecommerce page |
| **A single hubStudio revision policy** | Three rounds on one service page, unlimited on another |
| **The gate design, the owners or the practice pass rules presented as an industry standard** | Brief. Only the sampling plan, the color encoding, the profile format and the viewing conditions have a standard behind them. Everything else is production practice and must be labeled so |
| **An AQL value presented as the standard's recommendation for images** | ISO 2859-1 leaves the AQL to the responsible authority. The page's AQL columns are illustrative |
| **"ISO 2859-1 requires 100 percent rework of a rejected batch"** | Clause 7.2 lists several dispositions and leaves the choice to the responsible authority |
| **The Codex Table 10 values as ISO 2859-1 plans** | Mislabeled levels, arrow cells not followed, one wrong lot band. See R6 |
| **An edition number for ISO 2859-1:1999** | Printed "First edition" on ISO's amendment cover against a 1989 predecessor named elsewhere. Catalog unreachable |
| **"Current edition" for ISO 2859-1 or ISO 3664** | iso.org returned 403; status not read |
| **ISO 3664 illuminance values** (2,000 lux and 500 lux and similar) | Clause 4.2 was not in the preview. Only print-industry vendor pages carry the numbers |
| **The federal guideline's Delta E tolerances as ecommerce color tolerances** | They grade camera capture of rare and special bound volumes, one material table only |
| **Any Delta E pass threshold for retouched product images presented as a standard** | None found |
| **sRGB reference display conditions (D65, 80 cd/m2, 64 lux) presented as a required review setup** | They define the encoding's reference, not a QC workstation rule |
| **The photo trade coalition's 2008 calibration ranges without the date** | Eighteen years old |
| **"Detection-model enforcement" or "the first marketplace" for the Taobao rule** | Neither is in the source article as re-read 2026-09-10 |
| **The shopper review quoted in the Taobao article** (a dress that did not match its images) | One anonymous review inside a news report. Anecdote, not evidence of a rule or a rate |
| **A frequency ranking of rejection reasons, or "the top reasons"** | 0 of 15 sources rank them |
| **Color inaccuracy as a counted marketplace rejection reason** | No counted row in the brief 01 or 02 collections. Use the Taobao rule's distorted-material wording instead |
| **A real or reconstructed rejection notice** | None obtained |
| **Any industry QC pass rate, first-pass yield, reject rate or defect rate for retouched images** | None found with a method on either SERP |
| **The inspection-research figures presented as image-retouching or image-review figures** | Manufacturing, aviation and security populations |
| **ITU-R BT.500's 15-observer panel as a production QC requirement** | Scoped to subjective assessment of television images |
| **The EU pictorial representation row (Regulation 1169/2011)** | EUR-Lex returned an empty body twice this session, so check 2 failed; the instrument is food-only in any case |
| **The general marketplace seller image guideline row (May 2026)** | Not re-read this session. Reuse only after a check 2 |
| **The brief 27 Journal of Vision quote's "because ... cannot be tied back to physical parameters" clause** | Not re-verified this session. Use quote 25, which was |
| **The Tmall figures on hubStudio's own ecommerce design service page** | Ledger-flagged for backend re-verification |
| **A plus-or-minus-3 white tolerance or a contact shadow as allowed** | Brief 02 hard blocks |

### Failed the bar

| Claim | Where it came from | Why it was cut |
|---|---|---|
| Spot-check 10 to 20 percent, at least 20 percent above 100 SKUs, full check for high-risk categories | A Chinese AI plugin vendor's blog, 2026-06-04 | No method, no source, seller of the tool. The ratio also ignores batch size, which the standard says is the wrong basis |
| "Product color discrepancies are among the top three reasons for online returns" | A retouch vendor checklist, 2026-06-28 | "Studies consistently show" with no study named |
| 8.8 billion images processed, 89 million hours saved, 64 percent of professionals saying clients noticed no difference | A retouch vendor blog relaying an AI editing tool's own figures, 2026-01-19 | Tool vendor's user statistics, no method, no sample frame |
| Market growth projections for AI photo editors | Same blog | No publisher, no method |
| A Western marketplace's 85 percent fill and 1,000 pixel minimum | Retouch vendor pages | Not China, secondary restatements of a platform spec |
| 2,000 lux plus or minus 500 lux for critical viewing | Print vendor and lighting vendor pages | The standard's clause was not read; vendor restatement only |
| "3-step", "3-level" and "5-stage" QC as a market norm | Vendor service pages | Undefined stages, self-description by sellers |
| Per-image prices in forum threads | Photography forums, 2023 | Anecdote, no method |
| Codex Table 10 as a shortcut table | CAC/GL 50-2004 | See R6 |

### Quarantined domains

None of these may be named, linked, described or alluded to on the page.

| Domain | What it contributed | Why quarantined |
|---|---|---|
| visualsclipping.com, offshoreclipping.com, studiometrodesk.com, pixelretouching.com, orbitclippingpath.com, vectorwiz.com, picsretouch.com, clippingworld.com, imageretouchinglab.com, cutoutpartner.com, photoeditingservicesco.com, pixofix.com, lenflash.com, welpix.com, retouchinglabs.com, pixelshouters.com, colorexpertsbd.com, pathedits.com | Retouch process pages, checklists, one rate card | Retouching and clipping-path vendors: competitors under the standing rule |
| proshotmediagroup.com, squareshot.com, airmie.cn | Studio guides and a shoot process | Photography studios: competitors |
| pixelz.com | The second retouch rate card | Editing vendor. The band is cited by category only |
| catalogcut.com, photoroom.com, imagen-ai.com, rewarx.com, retouch4.me, comfyui.org, psaiplugin.com, tudingai.cn, aixqq.com | Tool checklists, batch editors, a vendor sampling ratio | Tool vendors selling the fix |
| optinexxa.wordpress.com | A checklist | Unknown affiliation |
| retouchingacademy.com | Editorial retouch principles | Training seller |
| resources.turbosquid.com, ybug.io, lost-pixel.com, cherrydeck.com, business.trustedshops.com | Off-intent checklists | Wrong intent, sellers |
| hqts-qai.com, fda-test.com, ssoocc.com | Goods inspection and test reports | Wrong intent |
| reddit.com | Forum threads | Anecdote |
| zxcprint.com, just-normlicht.com, digitalprepress.com, babelcolor.com | ISO 3664 restatements with lux values | Vendors restating a standard |
| chinesestandard.net, chinastandards.net, scribd.com, doc88.com, img.antpedia.com, haorunhua.com | Standard copies and listings | Resellers and hosts. haorunhua.com hosted the scan read for GB/T 2828.1; cite the standard number only |
| cdn.standards.iteh.ai | ISO's own preview text for the amendment and ISO 3664 | A reseller host. Attribute the text to ISO, never to the host |

## Screenshot inventory

Nothing was captured to `research/retouch-at-volume-qa-pipeline/`. No platform
spec in this brief rests on a new capture: the marketplace rows are reused modal
values. Page renders made during reading (IS 2500 pages 19 and 20, Codex pages
39 and 40, federal guideline page 27, the ISO amendment cover, the GB/T 2828.1
cover and Table 1) sit in the session scratchpad and are not committed.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| is2500-part1-table1-2026-09-10.png | Table 1, sample size code letters | not yet (render exists in scratchpad only) | archive.org copy of IS 2500 (Part 1):2000, printed page 19 |
| is2500-part1-table2a-2026-09-10.png | Table 2-A, single sampling, normal inspection | not yet (render exists in scratchpad only) | Same, printed page 20 |
| codex-cacgl50-table10-2026-09-10.png | The simplified table and its level labels | not yet | fao.org PDF, pages 39 and 40 |
| gbt2828-1-2012-cover-table1-2026-09-10.png | IDT marking and Table 1 | not yet | Hosted scan |
| fadgi-ch10-sampling-2026-09-10.png | The 10 images or 10 percent rule and the 1 percent re-inspection rule | not yet | digitizationguidelines.gov PDF, pages 105 to 109 |
| taobao-ai-fake-image-announcement-YYYY-MM-DD.png | The platform's own March 2025 announcement | not yet | Taobao official account; would upgrade quote 19 from press-reported to primary |
| iso-catalog-2859-1-and-3664-YYYY-MM-DD.png | Edition and status | not yet, iso.org returned 403 | iso.org catalog |
| marketplace-rejection-notice-YYYY-MM-DD.png | A real rejection for a retouch defect | not yet. Nothing may stand in for it | Seller backend |

## Ledger rows to append

Append under a new block in `sources/verified-sources.md`:
"## Retouch QA: sampling, color and inspection standards (added 2026-09-10, brief 47)".

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| ISO 2859-1:1999, amended by ISO 2859-1:1999/Amd 1:2011 dated 2011-06-15, prepared by ISO/TC 69/SC 5; the amendment changes the normal-to-reduced switching condition (switching score at least 30, or the previous 10 lots accepted with approval) and references, not Tables 1 or 2-A. The amendment cover prints "First edition 1999-11-15"; cite no edition number | "ISO 2859-1:1999, amended 2011, by designation and date" | ISO's own amendment text, preview file at cdn.standards.iteh.ai/samples/53053/...; iso.org 403 | 2011-06-15 | primary | 2026-09-10 | | 47 |
| IS 2500 (Part 1):2000 is identical with ISO 2859-1:1999, adopted by the Bureau of Indian Standards without deviations, October 2000; GB/T 2828.1-2012 is marked (ISO 2859-1:1999, IDT), issued 2012-11-05, in force 2013-02-15 | "the standard's identical national adoptions in India (October 2000) and China (November 2012)" | archive.org/details/gov.in.is.2500.1.2000; hosted scan of GB/T 2828.1-2012 | 2000-10; 2012-11-05 | primary | 2026-09-10 | | 47 |
| ISO 2859-1 Table 1, general inspection level II: 2 to 8 A; 9 to 15 B; 16 to 25 C; 26 to 50 D; 51 to 90 E; 91 to 150 F; 151 to 280 G; 281 to 500 H; 501 to 1,200 J; 1,201 to 3,200 K; 3,201 to 10,000 L; 10,001 to 35,000 M; 35,001 to 150,000 N; 150,001 to 500,000 P; 500,001 and over Q | "ISO 2859-1:1999, Table 1, general inspection level II" | IS 2500 page 19 read from an image; GB/T 2828.1-2012 Table 1 read from an image, identical | 1999 | triangulated across two national adoptions | 2026-09-10 | | 47 |
| ISO 2859-1 Table 2-A sample sizes: A 2, B 3, C 5, D 8, E 13, F 20, G 32, H 50, J 80, K 125, L 200, M 315, N 500, P 800, Q 1,250, R 2,000. Level II, normal, single sampling, arrows resolved, sample then Ac/Re: 26 to 50: 13 0/1 at AQL 1.0, 5 0/1 at 2.5, 13 1/2 at 4.0; 51 to 90: 13 0/1, 20 1/2, 13 1/2; 91 to 150: 13 0/1, 20 1/2, 20 2/3; 151 to 280: 50 1/2, 32 2/3, 32 3/4; 281 to 500: 50 1/2, 50 3/4, 50 5/6; 501 to 1,200: 80 2/3, 80 5/6, 80 7/8; 1,201 to 3,200: 125 3/4, 125 7/8, 125 10/11; 3,201 to 10,000: 200 5/6, 200 10/11, 200 14/15; 10,001 to 35,000: 315 7/8, 315 14/15, 315 21/22 | "ISO 2859-1:1999, single sampling plans for normal inspection, general inspection level II" | IS 2500 page 20 read from an image | 1999 | primary; non-arrow cells agree with CAC/GL 50-2004 Table 10 | 2026-09-10 | | 47 |
| ISO 2859-1 clause text: level II is used unless otherwise specified; information depends on absolute sample size, not the sample's share of the lot; inspection level is separate from normal, tightened and reduced severity; an AQL does not permit knowingly supplying nonconforming items; simple random sampling; defect classes with a smaller AQL for class A; disposal of non-accepted lots decided by the responsible authority; no resubmission until all items re-examined; tightened after two of five or fewer consecutive rejections; discontinuation after five rejections on tightened | "ISO 2859-1:1999, by clause number" | IS 2500 (Part 1):2000, clauses 3.1.6, 5.1, 7.2, 7.4, 8.1, 9.3.1, 9.4, 10.1 | 1999 | primary | 2026-09-10 | | 47 |
| Federal Agencies Digital Guidelines Initiative technical guidelines, third edition, May 2023: inspect at least 10 images or 10 percent of each batch, whichever is larger, at 100 percent magnification on a profiled workstation; two-step QC with a second person; above 1 percent defective in the random sample, re-inspect the whole batch; guidelines "informative, not prescriptive" | "US federal digitization guideline, third edition, May 2023", scope stated: cultural heritage digitization | digitizationguidelines.gov/guidelines/FADGITechnicalGuidelinesforDigitizingCulturalHeritageMaterials_ThirdEdition_05092023.pdf, chapter 10 | 2023-05-09 | primary | 2026-09-10 | | 47 |
| Same guideline, section 3.1 (rare and special bound volumes): mean Delta E 2000 at most 5, 3.5, 2 and 90th percentile at most 10, 7, 4 at 2, 3 and 4 stars; white balance at most 6, 4, 2 | "the same guideline, one material table, capture accuracy", never an ecommerce tolerance | Same PDF, printed page 27 | 2023-05-09 | primary, scoped | 2026-09-10 | | 47 |
| Derived: the guideline's minimum against ISO 2859-1 level II: 50 images 10 against 8; 200 20 against 32; 500 50 against 50; 1,000 100 against 80; 3,000 300 against 125; 10,000 1,000 against 200; 30,000 3,000 against 315 | "arithmetic on the federal guideline's rule and ISO 2859-1 Table 1, shown" | The two rows above | 2026-09-10 | derived | 2026-09-10 | | 47 |
| ICC.1:2022, profile version 4.4.0.0, published as ISO 15076-1 per the ICC; "Embedded profiles allow users to transparently move color data between different computers, networks and even operating systems without having to worry if the necessary profiles are present on the destination systems." | "International Color Consortium, specifications page and introduction to the ICC profile format, read September 2026" | color.org/icc_specs2.xalter; color.org/getting-started/ | read 2026-09-10 | primary | 2026-09-10 | | 47 |
| IEC 61966-2-1:1999, sRGB, edition 1.0, published 1999-10-18, corrigendum January 2014, stability date 2040; reference conditions with Amendment 1: D65 white (x 0.3127, y 0.3290), display 80 cd/m2, ambient 64 lux, surround 4.1 cd/m2, background 16 cd/m2 | "IEC 61966-2-1:1999, by designation, and the ICC's sRGB registry entry" | webstore.iec.ch/en/publication/6169; registry.color.org/rgb-registry/srgb | 1999-10-18 | primary | 2026-09-10 | | 47 |
| ISO 3664:2009, third edition, 2009-04-15, ISO/TC 42 with TC 130, replaces ISO 3664:2000; D50 reference; high level for critical comparison (P1, T1), lower level for practical appraisal including routine inspection (P2); monitor clause; monitor conformance does not ensure a match to hardcopy without color management. Illuminance values NOT read | "ISO 3664:2009, by designation and date" | ISO's own preview text at cdn.standards.iteh.ai/samples/43234/...; iso.org 403 | 2009-04-15 | primary for the elements listed | 2026-09-10 | | 47 |
| Universal Photographic Digital Imaging Guidelines v4.0, consensus as of 22 September 2008, a coalition of 21 listed trade groups: monitors calibrated and profiled with a hardware device, visual calibration inadequate; gamma 1.8 to 2.2, white point 5000K to 6500K, 80 to 140 cd/m2; profiles embedded and preserved; delivered images free of dust spots, scan lines, artifacts, banding, excessive grain, moire, chromatic aberrations and excessive noise | "photography's trade coalition guidelines, version 4.0, September 2008", always dated | updig.org, uqg.html, ir_icc_profiles.html, ir_file_quality.html, ph_trade_groups.html | 2008-09-22 | primary, aged | 2026-09-10 | | 47 |
| ITU-R BT.500-15 (05/2023), in force: at least 15 observers unless the method states otherwise; observers screened for normal or corrected-to-normal visual acuity | "Recommendation ITU-R BT.500-15, May 2023", scope: subjective assessment of television images | itu.int/rec/R-REC-BT.500 and the in-force PDF, clause 2.5 | 2023-05 | primary, scoped | 2026-09-10 | | 47 |
| Inspection review figures: 80 inspectors, detection down and false alarms up as defect rate fell from 16 to 4, 1 and 0.25 percent (1968); doubling inspection rate raised misses 23 to 30 percent (1973); detection down up to 40 percent in 30 minutes (1975); 27 percent drop in hits between first and second 15 minutes, 10 inspectors (1977); 13 to 45 percent decrement with time on task across field studies (2002); solder defect detection 43 to 100 percent by inspector and 23 percent of decisions reversed on re-inspection (1961); two inspectors beat one except when splitting the batch (1986); accuracy up to six independent inspections (1969); visual aids plus 42 percent detection, 27 inspectors (1967); faster feedback halved misses (1973); re-inspection only a lower bound | "a US national laboratory review of 212 published visual inspection studies, October 2012", each with the year of the underlying study and "industrial inspection, not image retouching" | osti.gov/biblio/1055636, SAND2012-8590, sections 2.5.3, 3.1.1, 3.1.8, 3.1.9, 3.3, 3.4.4 and the vigilance section | 2012-10-01 | primary as to the review, single study per figure | 2026-09-10 | | 47 |
| CAC/GL 50-2004 Table 10 labels ISO general levels I, II, III as "Reduced, Normal, Tightened", keeps code-letter sample sizes in arrow cells, and prints 1,201 to 1,320 for ISO's 1,201 to 3,200 | "the Codex sampling guideline, 2004, compared cell by cell with ISO 2859-1", as a conflict observation only | fao.org/input/download/standards/10141/CXG_050e.pdf, pages 39 and 40 | 2004 | primary as an observation | 2026-09-10 | | 47 |
| Search-results audit: four English buyer phrasings on retouch QC, 40 results: 31 sellers of retouching, photography or editing tools, 8 forum threads, 1 self-published, 0 standards, government, academic or trade-body pages; 0 of 5 pages read in full name the sampling standard or tie sample size to batch size; one Chinese phrasing, 10 results, 0 citing any standard, 4 off-intent goods inspection | "search-results audit run 10 September 2026 across four buyer phrasings, publisher type recorded for every result, no domain named" | R2 in research/retouch-at-volume-qa-pipeline.md | 2026-09-10 | primary observation | 2026-09-10 | | 47 |

**Updates to existing rows.**

| Existing row | Update |
|---|---|
| Ecommerce retouch per-image floor around $1, band roughly $0.25 to $1.20 by operation | Check 2: 2026-09-10. Both cards re-read, values unchanged ($0.25, $0.39, $0.69, $0.89, $1.19; $0.95 plus $95 a month). Add 47 to Used in |
| Taobao AI fake-image governance rule | Check 2: 2026-09-10 at the same URL. Correction note: the article names four situations (distorted quality or mismatched style; distorted or exaggerated effects, including excessive skin smoothing; distorted or non-existent scenes; poor image quality, including cutout white edges and a pasted-on look) plus the instruction that retouching be moderate and avoid distortion. It does NOT mention a detection model and does NOT say the platform was the first. The brief 27 cleared quote's "first" and "detection-model enforcement" phrases must not be reused. Add 47 to Used in |
| Journal of Vision 26(3):7 | Check 2: 2026-09-10, 32 materials and 45, 35, 40 observers confirmed. The "because ... physical parameters" clause in the brief 27 quote was not re-verified. Add 47 |
| Image-editing physical-realism benchmark, October 2025 | Check 2: 2026-09-10, 900 cases, 8 sub-dimensions, 11 models, all open-source below 60 confirmed. Add 47 |
| Regulation (EU) No 1169/2011 | Check 2 attempted 2026-09-10 and failed: EUR-Lex returned an empty body twice. Not used in 47 |

### Do not publish, added from brief 47

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| A spot-check ratio of 10 to 20 percent, at least 20 percent above 100 SKUs | Chinese AI plugin vendor blog, 2026-06-04 | No method, seller of the tool, and a share-of-batch rule the standard's own reasoning rejects | 2026-09-10 |
| Color discrepancies as a top-three reason for online returns | Retouch vendor checklist, 2026-06-28 | "Studies show" with no study | 2026-09-10 |
| AI editing usage statistics (8.8 billion images, 89 million hours, 64 percent of professionals) | Retouch vendor blog relaying a tool vendor, 2026-01-19 | Tool vendor's own user figures, no method | 2026-09-10 |
| ISO 3664 illuminance values such as 2,000 lux | Print and lighting vendor pages | Clause not read at source; vendor restatement | 2026-09-10 |
| An edition number or "current" status for ISO 2859-1:1999 or ISO 3664:2009 | Catalog status | iso.org 403; ISO's amendment cover prints "First edition" against a named 1989 predecessor | 2026-09-10 |
| CAC/GL 50-2004 Table 10 as the ISO 2859-1 plan table | Codex guideline | Mislabeled levels, unresolved arrows, a wrong lot band | 2026-09-10 |
| An AQL for retouched images presented as the standard's value | Brief 47 angle | The standard leaves AQL to the responsible authority | 2026-09-10 |
| The federal guideline's Delta E tolerances as ecommerce color tolerances | FADGI section 3.1 | One material category of cultural heritage capture | 2026-09-10 |
| Any industry retouch QC pass rate, reject rate or first-pass yield | Sought on both SERPs | None published with a method | 2026-09-10 |
| The three stats on the ecommerce design page (first-review approval and two performance figures) | hubStudio site copy, ecommerce.astro lines 67 to 69 | No method; the first is an approval figure blocked on the same grounds as the delivery-figure approval row | 2026-09-10 |
| "Most projects close inside two" revision rounds | hubStudio site copy, ecommerce.astro line 200 | Frequency claim with no count | 2026-09-10 |
| "The first marketplace" and "detection-model enforcement" for the Taobao AI fake-image rule | Brief 27 cleared quote | Not in the source article as re-read 2026-09-10 | 2026-09-10 |
| Inspection-research figures as image-review figures | Brief 47 angle | Manufacturing, aviation and security populations only | 2026-09-10 |

## Notes for the writer

### Outline mapped to the brief's must-includes

| Section (one question per H2) | What goes in it | Must-include served | Cleared quotes |
|---|---|---|---|
| Hero and answer | The pipeline is a set of gates, and the sampling gate uses the published standard, not a gut percentage. First H2 restates the query; 40 to 60 word answer naming hubStudio once | Sets up all five | 1 |
| How the disclaimer block applies | Required only if the marketplace section prints modal Tmall values (quotes 20 to 23). Marketplace form from `SPEC.md`, NN = 15, DATE = 10 September 2026, placed directly after the opening answer and before the first table that carries a platform value. If the writer keeps platform values out of the gate table and the spec template, the block still goes after the opening answer because quotes 20 to 23 carry modal counts | Rule compliance | none |
| What are the gates in a retouch QA pipeline? | The gate table below. Say in the sentence above it which gates rest on a standard and which are production practice | Gate table | 7, 9, 10, 11, 12 |
| How many images should you check in a batch? | The sampling plan table from the standards section, labeled as the standard's, with the AQL columns described as illustrative; the AQL caution; the buyer picks the AQL; random sampling; switching rules in one paragraph; the federal guideline's 10 percent rule and the arithmetic comparison | Sampling plan table | 1 to 8 |
| Why a second checker, and why not a tired one? | Human inspection limits, labeled as industrial inspection research; two inspectors with the lower-bound caveat | Supports the gate table | 13 to 18 |
| What goes in a retouch spec? | The template below, labeled production practice; the trade coalition and federal guidelines as the published anchors for its cleanup and file fields | Retouch spec template | 12, 19, 22 |
| How do you keep color consistent across thousands of images? | Embedded profiles, sRGB for screen delivery, ISO 3664 viewing when comparing against a physical sample; no lux numbers | Supports the gate table | 9, 10, 11, 12 |
| Why do marketplaces reject retouched product images? | Prohibitions with counts, the contested contact shadow, the 255 reasoning, the unranked causes, then the Taobao AI fake-image rule and its retouching language | Marketplace rejection reasons and the Taobao rule | 19 to 23, 25, 26 |
| What does retouching cost at volume? | The category band, as a category figure, never a hubStudio price | Retouch rate band | 24 |
| FAQ (5) | Brief's five questions, 40 to 70 words each | All | See below |
| CTA | Run a retouch pilot | | |

FAQ sources: (1) thousands of images, gate table plus quotes 1, 2 and 7;
(2) sample size, quotes 1, 2 and 8, and say the answer depends on batch size;
(3) spec, the template; (4) cost, quote 24 only; (5) rejections, quotes 19, 20
and 23.

Quote 27 (the SERP audit) is optional. If used, it goes in the body, not the
answer block.

### Draft gate table (five columns, practice labeled)

| Gate | Check | Standard or tool | Pass rule | Owner |
|---|---|---|---|---|
| Ingest | Files open; format, pixel size, bit depth; profile embedded; names | ICC.1:2022 profiles; trade coalition guidelines (2008); federal guideline file checks (2023) | Every file passes before retouch starts (production practice) | Production operations (production practice) |
| Spec lock | Retouch spec agreed per channel and slot | No published standard: production practice | No batch starts unsigned (production practice) | Producer and client (production practice) |
| Color-managed retouch | Instrument-calibrated, profiled monitor; profile kept; sRGB for screen delivery | IEC 61966-2-1; ICC.1:2022; ISO 3664:2009 for physical-sample comparison | Calibration logged per session (production practice) | Retoucher (production practice) |
| Self-check and second check | Retoucher checks every image, a second person checks the batch | Federal guideline two-step QC (2023); industrial inspection research | Second person signs (production practice) | Retoucher, then QC lead (production practice) |
| Sampling inspection | Random sample, nonconforming images counted by defect class | ISO 2859-1:1999, Tables 1 and 2-A, level II | Accept at Ac or fewer, reject at Re or more; rejected batch re-examined in full before resubmission (clauses 7.2, 7.4) | QC lead; AQL set by the responsible authority, in practice the client |
| Marketplace compliance | Slot prohibitions, white value, AI fake-image categories | Modal published values (15 sources, September 2026); Taobao rule (March 2025) | Zero prohibited elements in the slot (production practice) | Marketplace operator (production practice) |
| Final approval | Delivered batch against the spec | Production practice | Signed against the spec | Client |

### Draft retouch spec template (production practice)

| Field | What to specify | Where the rule comes from |
|---|---|---|
| Asset and slot | SKU, channel, slot (main, white-background, detail, campaign) | Production practice |
| Output | Pixel size, format, file weight cap, bit depth, color space with embedded profile | Platform values with their counts; IEC 61966-2-1; ICC.1:2022 |
| Background | Value for the white-background slot (RGB 255 255 255, the only value no published reading rejects); shadow treatment (none in the white slot, modal) | Brief 02 modal values, derived row |
| Cutout | Clean edges, no white fringe, no pasted-on look | Brief 02 (3 of 15); Taobao rule |
| Color | Approved reference (physical sample or master), how it is compared, under what viewing condition | ISO 3664:2009; production practice for tolerance |
| Cleanup | Dust, scratches, lint, seams, sensor spots, banding, moire, noise | Trade coalition guidelines (2008); federal guideline defect list (2023) |
| Product truth | No change to shape, material, texture, color, markings or on-pack text | Taobao rule; production practice |
| Retouch limits | Moderate beautification; no excessive skin smoothing on models | Taobao rule |
| Prohibited elements | Text, watermark, logo, overlay, model, splice, border, hanger per slot | Brief 01 (11 of 18) and brief 02 counts |
| Defect classes and AQL | Class A (product truth, prohibited element), class B (cosmetic), AQL per class | ISO 2859-1 clause 3.1.6 for classes; AQL values are the client's choice |
| Metadata and naming | File name pattern, embedded rights metadata, AI label where an image is generated | Trade coalition guidelines (IPTC fields); CAC labeling measures, ledger row |
| Sign-off | Who approves at which gate | Production practice |

### Must-includes that cannot be fully met, and why

1. **Retouch spec template:** met, but no trade or professional body publishes an
   ecommerce retouch specification. It must carry the label "production
   practice" on the page.
2. **Marketplace rejection reasons:** met as prohibitions and described causes
   with counts. They cannot be ranked (0 of 15), no rejection notice exists, and
   color inaccuracy has no counted row.
3. **Sampling plan table:** met from the standard text through two identical
   national adoptions. The AQL cannot come from the standard, so the page's AQL
   columns must be described as illustrative.
4. **Viewing conditions:** the standard is cited by designation, edition and
   structure only. No lux values.

### H1, title and meta

No change. H1 "Retouch at volume: the QA pipeline, gate by gate" holds; title
"Retouch at Volume: The QA Pipeline" (34 characters) and the approved meta (140
characters) are accurate on this evidence. The meta's "rejection rules" is
supportable only as prohibitions and the Taobao rule, which the page carries.

### Internal link targets, verified to exist in `src/pages`

| Anchor text (plain in body) | URL | File |
|---|---|---|
| ecommerce design service | /services/design/ecommerce | src/pages/services/design/ecommerce.astro |
| AI image production | /solutions/ai-production/image | src/pages/solutions/ai-production/image.astro |
| Tmall white-background image rules | /resources/insights/tmall-white-background-image-rules | src/pages/resources/insights/tmall-white-background-image-rules.astro |
| training a brand model that stays on brand | /resources/insights/training-a-brand-model-that-stays-on-brand | src/pages/resources/insights/training-a-brand-model-that-stays-on-brand.astro |
| Tmall platform page | /solutions/platforms/tmall | src/pages/solutions/platforms/tmall.astro |
| JD platform page | /solutions/platforms/jd | src/pages/solutions/platforms/jd.astro |
| product photography cost per SKU | /resources/insights/product-photography-cost-per-sku | src/pages/resources/insights/product-photography-cost-per-sku.astro |
| Tmall product image requirements | /resources/insights/tmall-product-image-requirements | src/pages/resources/insights/tmall-product-image-requirements.astro |
| shoot it or generate it | /resources/insights/shoot-it-or-generate-it | src/pages/resources/insights/shoot-it-or-generate-it.astro |

No Operations cluster hub page exists in `src/pages`. SPEC wants a cluster hub
link: use the insights index (/resources/insights, src/pages/resources/insights/index.astro)
or flag the gap to the orchestrator. At publish, check this article's category
against `src/data/insight-placements.ts`: the ecommerce design and AI image
pages are the natural layers.

### Traps

- Say "the standard's table" and name it; never "industry standard QC".
- Every inspection-research figure needs "in industrial inspection" or
  equivalent in the same or adjacent sentence.
- The Taobao quote carries no "first" and no "detection model".
- The first-party review language (post-generation review, brand compliance
  review, final QC before delivery, human review at every stage) may be
  described as what the AI image production page says. It carries no rate and
  no approval figure, and it must not be turned into a "why work with us"
  paragraph.
- Search the finished draft for `$`: the only permitted hit is quote 24.
- Search the finished draft for Han characters and for U+2014.

## R8. Reconciliation (filled after drafting)
