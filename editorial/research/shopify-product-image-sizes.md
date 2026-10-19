# Research: shopify-product-image-sizes

| Field | Value |
|---|---|
| Brief | 80 |
| Target query | shopify product image size |
| Gap statement | A dated export sheet separating product upload limits, conflicts in theme documentation, and storefront crop decisions. |
| Research time spent | Started October 20, 2026, 00:31 Asia/Shanghai; capture timestamps and completion time recorded in the run log. |
| Written | 2026-10-20, before body drafting |

## R1. Claims mapped before search

Product image pixel, megapixel and file-size ceilings; square-size
recommendation; accepted upload formats versus browser delivery; video and
model constraints; aspect consistency; crop and zoom responsibility; alt text
and filenames; documented hubStudio creation, crop, save and manual upload.
This inventory was recorded in the shared run log before the first search.

## R2. SERP map

Four ten-result maps are in shopify-product-image-sizes/serp-map.md.
The retained map uses help.shopify.com only under the overriding exclusion
rule. It is a documentation discovery map, not an unfiltered rank report.
The bar is a practical 1,400-word guide, an early spec table, a responsibility
table, and actionable handling of source conflicts. No ranking-page length
was measured. No invented rank, age, or independent corroboration is claimed.

## R3 to R6. Source register and method

All external evidence is Shopify's own Help Center. Browser captures on
October 20 returned HTTP 200. Publication and revision dates are not displayed
and Last-Modified is absent. The date used in the article is explicitly the
date read, not a fabricated publication date. These are documented technical
requirements, not sampled research; sample size is not applicable. Shopify
publishes and funds its documentation. No market or performance claim is used.
R4 is not applicable: this article contains no China-specific claim.

| ID | Source URL | Date and method |
|---|---|---|
| S1 | https://help.shopify.com/en/manual/products/product-media/product-media-types | Read 2026-10-20; product-specific requirements transcribed and scoped |
| S2 | https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads | Read 2026-10-20; admin upload table checked against S1 |
| S3 | https://help.shopify.com/en/manual/online-store/images/theme-images | Read 2026-10-20; theme-specific language compared with S1 and S2 |
| S4 | https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords | Read 2026-10-20; alt-text guidance |
| S5 | https://help.shopify.com/en/manual/products/product-media/add-media | Read 2026-10-20; upload path and rejection diagnosis |
| S6 | https://help.shopify.com/en/manual/shopify-admin/productivity-tools/media-editor | Read 2026-10-20; aspect ratios, cropping and resizing |
| S7 | https://help.shopify.com/en/manual/products/product-media/product-photography | Read 2026-10-20; optional compression advice |
| S8 | https://help.shopify.com/en/manual/online-store/themes/theme-support/troubleshooting | Read 2026-10-20; collection grid alignment |
| H1 | https://www.hubstudio.ai/help/create-an-image | Repo src/content/help/create-an-image.md and hubstudio-positioning.md, checked 2026-10-20; feature documentation, not an engine performance test |
| H2 | https://www.hubstudio.ai/help/assets-library | Repo src/content/help/assets-library.md, updated 2026-10-16, checked 2026-10-20; controls and export behavior |

## R1 and R5. Claims table

Sample size: not applicable for every row. Method: reading primary documentation,
cross-checking scope, and retaining disagreements. Funding: source publisher;
hubStudio for H1/H2. All numeric claims are primary, not estimates.

| Claim | Source | Date | Confidence | Decision |
|---|---|---|---|---|
| Product/collection image ceiling 5000 x 5000 px or 25 MP; smaller than 20 MB | S1, S2 | Read 2026-10-20 | primary | Publish product scope; below 20 MB respects stricter wording |
| Square product recommendation 2048 x 2048 px | S1 | Read 2026-10-20 | primary | Recommendation, not mandate or minimum |
| Theme page says both 25 MP and a 20 MP upload limit; mentions different product limits | S3 versus S1/S2 | Read 2026-10-20 | primary | Publish 20 to 25 MP documentation spread with separate scopes, never a universal 20 MP product ceiling |
| Shared image upload list JPEG, PNG, WebP, HEIC, GIF; S1 additionally lists TIFF, BMP, SVG | S1, S2, S3 | Read 2026-10-20 | primary | Shared list first; extended types qualified; S3 says TIFF/BMP convert and SVG transformations need raster output |
| JPEG photo guidance versus PNG preference on product page | S1, S3 | Read 2026-10-20 | primary | Avoid universal best-format claim; choose and inspect a practical export |
| Video up to 10 minutes, 1 GB, MP4/MOV/WebM | S1, S2 | Read 2026-10-20 | primary | Publish uploaded-file scope |
| S1 video ceiling 4096 x 2160, while S2 says UHD and recommends 3840 x 2160 | S1, S2 | Read 2026-10-20 | primary | State both; choose UHD as a working export, not a newly invented ceiling |
| Models up to 500 MB, GLB/USDZ; optimization above 15 MB | S1 | Read 2026-10-20 | primary | Publish file ceiling and formats; cut optional optimization threshold to keep focus |
| Themes must support product video/models; capacity varies with plan | S1, S2 | Read 2026-10-20 | primary | Qualitative caveat; no plan counts or price table |
| Matching aspect ratios align collection main images; size alone does not ensure alignment | S6, S8 | Read 2026-10-20 | primary | Recommend consistent framing within product sets as editorial practice, not a Shopify mandate |
| Theme and section control image area/crop; available focal-point controls vary | S3 | Read 2026-10-20 | primary | Conditional controls, no named theme or universal toggle |
| Compress-to-200 KB advice differs from best-quality upload guidance | S7, S3 | Read 2026-10-20 | primary | Explain 200 KB as optional advice, not acceptance cap |
| Descriptive unique filenames; avoid underscore-before-dimensions and reserved ending words; no initial period | S2 | Read 2026-10-20 | primary | Publish qualitative filename guidance, no invented SEO ranking benefit |
| Alt text describes visible content, natural language and accessibility | S4 | Read 2026-10-20 | primary | Publish without numerical character target |
| Real file encoding can disagree with extension; oversized image may fail | S5 | Read 2026-10-20 | primary | Troubleshooting advice grounded in error guide |
| Up to 4K rendering depends on engine; Upscale & restore exists | H1 | Checked 2026-10-20 | primary | No guarantee that restoration recovers real product detail |
| Crop Square 1:1; PNG/JPG/WEBP save; 2048 px long-side shortcut only when source is larger; locked proportions | H2 | Updated 2026-10-16 | primary | Correct brief's missing condition at source |
| Image editor working size capped at 4096 px on long side | H2 | Updated 2026-10-16 | primary | Disclose if discussing preparation of larger masters |
| Manual download and Shopify admin upload; no Shopify connector in hubStudio | Positioning, H1/H2, S5 | Checked 2026-10-20 | primary | Publish manual handoff |
| Product integrity and batch spot-check advice | Editorial judgment based on workflow | 2026-10-20 | primary for underlying controls | Label recommendations, not measured results or platform rules |

## Cleared for use

Exact short quotation from S1: "a size of 2048 x 2048 px usually displays best"
(12 words). Other claims are paraphrased, scoped to their source, and dated
as read October 20, 2026. Use URLs after source names in blockquotes.

## Do not publish

- An unqualified universal 20 MP maximum for Shopify product images.
- A universal 200 KB acceptance cap, a minimum photo resolution, or a
  promised zoom threshold unsupported by the retained Help Center pages.
- A claim that all upload surfaces accept exactly the same image formats.
- A claim that uploading a larger image solves a mismatched theme crop.
- An automatic Shopify connection, or a universal 4K setting across engines.
- The brief's unconditional 2048 px shortcut; source documentation makes it
  available when the source is larger.
- A publication date for undated living Help Center documents.
- Any sales lift, SEO ranking guarantee, rates, or China-platform numbers.

## Screenshot inventory

Each basename below has a .png screenshot and a .txt text capture under
editorial/research/shopify-product-image-sizes/. Capture metadata, URLs,
HTTP responses and UTC timestamps are in capture-manifest.json. Local capture
date is October 20, 2026, in Asia/Shanghai. Captured text normalizes only em
dashes to spaced hyphens.

| Basename | What it shows | Captured | Source surface |
|---|---|---|---|
| product-media-types-2026-10-20 | Product limits, recommended square, video/models | 2026-10-20 | S1 |
| file-uploads-2026-10-20 | File constraints, UHD advice and naming | 2026-10-20 | S2 |
| theme-images-2026-10-20 | Conflicting MP text, crop and delivered formats | 2026-10-20 | S3 |
| adding-keywords-2026-10-20 | Alt-text instructions | 2026-10-20 | S4 |
| add-media-2026-10-20 | Upload path and failures | 2026-10-20 | S5 |
| media-editor-2026-10-20 | Ratio and crop controls | 2026-10-20 | S6 |
| product-photography-2026-10-20 | Optional compression advice | 2026-10-20 | S7 |
| theme-troubleshooting-2026-10-20 | Grid alignment | 2026-10-20 | S8 |

Existing app illustrations: public/Images/help/image-editor-crop.webp and
image-editor-save.webp, each with .fr.webp and .zh.webp counterparts verified
on disk. The crop capture shows Portrait 4:5, so its caption must identify
the panel and must not pretend it shows the article's square setting.

## R7. Gate decision

Research file exists before body copy. All retained factual claims have
primary evidence. Disagreements have explicit scopes. Current documentation
is dated by this verified capture, without inventing a publication date.
No existing Shopify numerical claim was found in the searched live articles
that contradicts these results. The source brief is amended before drafting.

## R8. Reconciliation

Iteration 8 completed October 20, 2026. All eight Shopify pages were fetched
again in a fresh browser session: HTTP 200 and byte-identical normalized
body text. See check2-manifest.json. The live hubStudio help URLs were also
re-fetched; local help remains the binding source for app controls.

Every article quantity maps to the pre-draft table: 2048 square recommendation
and shortcut, 5000 square/25 MP ceiling, 20 MB weight and 20 to 25 MP scope
conflict, JPEG/PNG/WebP/HEIC/GIF and qualified extra formats, 10 minutes and
1 GB video, 500 MB models, 4096 x 2160 versus 3840 x 2160 video, 200 KB
optional photo guidance, engine-dependent 4K, Square 1:1 and 4096 px editor
working size. Dates identify the review and article year, not study data.
No figure was added from memory. Optional model-optimization threshold,
plan capacities, alt-text length and zoom thresholds were cut before drafting.
