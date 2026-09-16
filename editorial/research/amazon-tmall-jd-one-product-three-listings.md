# Research: amazon-tmall-jd-one-product-three-listings

| Field | Value |
|---|---|
| Brief | 31 |
| Target query | amazon tmall jd product image requirements comparison |
| Gap statement (one sentence) | On five buyer phrasings in English and Chinese, 34 results answer Amazon's rules alone, compare the marketplaces as businesses, read "can I use Amazon images on Tmall" as an affiliate licensing question, or print an unsourced Chinese size table, and not one sets Amazon's own published rules beside counted Tmall and JD values or says which Amazon asset carries over and which has to be rebuilt. |
| Method | Amazon rows: primary readings of four Amazon Seller Central help articles (US store), rendered in a logged-out browser and captured, scoped to the article read. Tmall and JD rows: lifted from the brief 01, 02, 04, 10 and 28 research files with their pools, counts and confidence labels, never re-counted and never added across collections. Carry-over and capture plan: derived, inputs named. |
| Research time spent | About 100 minutes active: ten research and ledger files read in full; five SERP queries (four English, one Chinese; a sixth Chinese phrasing blocked by the session search budget); fifteen Amazon-owned surfaces attempted, eleven read with content including four help articles rendered and captured; three repo checks (link targets, first-party figures, ledger-flagged site copy) |
| Written | 2026-09-10 |

## Method statement, read this before using any cell below

**Amazon: primary, for the page read.** Four Amazon Seller Central help articles
were read on 2026-09-10. Each states "This article applies to selling in: United
States", so every Amazon row is scoped to the US store and to what that article
says. None of the four prints a publication or update date. Each is cited with
its read date, the way brief 08 cited the undated WeChat Channels help article.

How they were read matters, because it corrects the ledger. A plain HTTP fetch of
each help URL returns HTTP 200 and an application shell of 167,309 to 167,319
bytes carrying no article text (four URLs, plus the older `/gp/help/external/`
form of G1881, all shells). That is why the brief 27 do-not-publish row records
the Amazon image page as "behind seller login". It is not. Rendered in a
logged-out headless Chromium browser (Playwright, locale en-US, no cookies), each
article serves its full body text. Text and full-page screenshots were saved to
`research/amazon-tmall-jd-one-product-three-listings/` with the date in the
filename.

**Supporting Amazon-owned surfaces, dated, used for R6 and for context only.**
Where they differ from a help article, the help article wins: it is the rule
text, and these are Amazon's own restatements for sellers.

**Tmall and JD: no new research.** Every Tmall and JD value below is lifted from a
sibling research file with its count, pool, confidence label and scope. Nothing
is re-counted. Counts from different files are never added together.

| Key | Source | What it is | Status |
|---|---|---|---|
| A-IMG | sellercentral.amazon.com/help/hub/reference/external/G1881 "Product image guide" | Amazon help article, US | primary, scoped, undated, read 2026-09-10 |
| A-TECH | .../external/G9FUUH87RBNXGKB7 "Technical image file requirements" | Amazon help article, US | primary, scoped, undated, read 2026-09-10 |
| A-APLUS | .../external/GLG4RQK2Y2RJADU4 "A+ Content guide" | Amazon help article, US | primary, scoped, undated, read 2026-09-10 |
| A-VID | .../external/GWJRQF3C34G4PRA2 "Shoppable video guide" | Amazon help article, US | primary, scoped, undated, read 2026-09-10 |
| A-BLOG1 | sell.amazon.com/blog/product-photos | Amazon's seller blog, shows Dec 4, 2024 (schema datePublished 2024-12-05, dateModified 2025-10-03) | supporting, Amazon-owned |
| A-BLOG2 | sell.amazon.com/blog/amazon-product-video | Amazon's seller blog, May 12, 2025 | supporting, Amazon-owned |
| A-BLOG3 | sell.amazon.com/blog/a-plus-content-design-guide | Amazon's seller blog, Sep 24, 2025 | supporting, Amazon-owned |
| A-FORUM | sellercentral.amazon.com/seller-forums/discussions/t/0149bdb3-2056-42ce-b0bb-9eef94e3d2b8 | Post by an Amazon moderator, "Product Photography Standards: What's New in 2026", earliest thread timestamp 2026-02-03 | supporting, Amazon moderator restatement |
| A-PDF23 | m.media-amazon.com/.../Aplus_Content_Best_Practices-US.pdf | Amazon-hosted A+ guide, "Version 1.1, Last updated March 28, 2023" | supporting, dated, older |
| A-AU18 | m.media-amazon.com/images/G/01/rainier/help/Selling_on_Amazon_Quick_Start_Style_Guide_2018.pdf | Amazon-hosted quick-start style guide, 2018, Amazon Commercial Services Pty Ltd (Australia) | supporting, other marketplace, stale |
| A-TPL | m.media-amazon.com/.../Standard_A_Module_Templates.pdf | Amazon-hosted A+ standard module templates | no date and no marketplace printed; not citable for a number |
| T1 | `tmall-product-image-requirements.md` (brief 01) | 18 independent domains, 16 Chinese, 2 English | modal, collected 2026-09-10 |
| T2 | `tmall-white-background-image-rules.md` (brief 02) | 15-domain white-background pool; reused rows keep "of 18" | modal, collected 2026-09-10 |
| J | `jd-image-requirements-vs-tmall.md` (brief 04) | 24 pages, 23 Chinese; counts shown JD / Tmall | modal, collected 2026-09-10 |
| B10 | `one-shoot-six-platforms-china-variant-matrix.md` (brief 10) | Cell types, slot matrix and derived composition bands built on T1, T2, J and five other files | derived, 2026-09-10 |
| CP | `china-ecommerce-content-pack.md` (brief 28) | 8 Chinese production references, taxonomy only, numbers set aside | triangulated for the taxonomy |

**Amazon-owned surfaces that failed.** `www.amazon.com/gp/help/customer/display.html?nodeId=G1881`
returned HTTP 503. `gs.amazon.cn/zhishi/article-250913-1` (Amazon's Chinese seller
education site, tried first for R4) returned HTTP 200 with an empty body, twice.
`mai.amazon.cn/forums/t/topic/142` returned 302 to a seller support page and was
not followed. None of the three supplies a figure here.

**Rules that bind every cell.**

1. An Amazon row is primary for its help article and the US store only. It is
   never stretched to another Amazon store, and never to a category the article
   hands off to its own guide (clothing, multipacks).
2. A Tmall or JD row is a modal published value. It is never described as
   verified, official, required or read from a platform, and never attributed to
   a rule centre.
3. Pools are never mixed. "12 of 18 (T1)" stays 12 of 18 and names T1.
4. Every carry-over conclusion and the capture plan are derived. Each names its
   inputs. Where a derivation needs an assumption no source states, the
   assumption is printed.
5. Supporting Amazon surfaces never replace a help article. They appear in R6
   where they disagree with it, and nowhere else unless a row says so.

**The disclaimer, for the writer.** Tmall and JD rows open with the marketplace
form of the SPEC.md block, with NN written as separate collections (18, 15 and 24
sources, collected 10 September 2026), never summed. The readable-page paragraph
directly after it names the four Amazon help articles, says each applies to the US
store, and says Amazon rows are primary for that scope only. The block's claim that
"both platform rule centers gate their rule text" refers to Tmall and JD and stays
true; it does not need changing for Amazon.

## R2. SERP map

Result rows are classified from result titles, URLs and search-engine extracts
on 2026-09-10. Pages were not fetched unless stated: every result either answers
a single marketplace, answers a different question, or is already a counted and
quarantined domain in a sibling file. Ages are as shown in the title or URL.

A sixth phrasing, the Chinese form of the reuse question (romanized:
`Yamaxun de chanpin tupian keyi zhijie yong zai Tianmao Jingdong ma zhutu baidi
chicun butong`), could not run on 2026-09-10: the session's web search budget
was exhausted at that call. It ran on 2026-09-14, at the start of the drafting
run, and is recorded as Query 6 below. It changed no conclusion.

### Query 1, the primary query: `amazon tmall jd product image requirements comparison`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | eva.guru | Seller software vendor blog | Amazon image sizes and rules | No Tmall or JD value | 2026 |
| 2 | linkedin.com (pulse) | Personal article | Tmall and JD as business models set against Amazon | No image rule of any kind | Undated, older |
| 3 | bebolddigital.com | Agency blog | Amazon image requirements | Amazon only | 2026 |
| 4 | junglescout.com | Seller software vendor guide | Amazon image requirements | Amazon only | Undated |
| 5 | gotrellis.com | Software vendor blog | Amazon product images | Amazon only | Undated |
| 6 | ecfotos.com | Photo studio guide | Amazon image guide | Amazon only | 2025 |
| 7 | salesduo.com | Agency blog | Amazon image size guide | Amazon only | Undated |
| 8 | pixelpanda.ai | AI tool vendor blog | Amazon image requirements | Amazon only | 2026-03-16 |

Zero of eight carry a Tmall or JD image value. Seven answer Amazon alone. The
search engine's own summary says the results "don't contain a direct comparison".

### Query 2: `amazon vs tmall listing images`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | pattern.com | Agency blog | The two marketplaces compared as businesses | No image rule | Undated |
| 2 | scmp.com | News explainer | What Tmall is | No image rule | Older |
| 3 | freecodecamp.org | Developer tutorial | Scripting images for four marketplaces | Says Tmall encourages padding images with white stripes and a logo, the claim already failed in brief 01 against 11 of 18 sources | Undated |
| 4 | slashdot.org | Software comparison directory | "Amazon vs Tmall" as software | Off topic | 2026 |
| 5 | manypixels.co | Design subscription blog | Amazon listing image sizes | Amazon only | Undated |
| 6 | gobrandwoven.com | Agency resource | Amazon listing image practice | Amazon only, carries an unsourced conversion claim | Undated |
| 7 | forbes.com | Contributor column | Tmall platform strategy | No image rule | 2019-07-23 |

Zero of seven set the image rules side by side. The one page that describes a
Tmall image practice is the tutorial whose claim brief 01 already failed.

### Query 3: `can i use amazon product images on tmall`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | getlasso.co | Affiliate plugin vendor | Whether an affiliate may copy Amazon's own product images | The buyer's question: reusing a brand's own listing assets | Undated |
| 2 | getaawp.com | Affiliate plugin vendor | Same | Same | Undated |
| 3 | wise.com | Payments company blog | Same | Same | Undated |
| 4 | freecodecamp.org | Developer tutorial | As above | As above | Undated |
| 5 | wptasty.com | Blog plugin vendor | Amazon images on blogs | Same | Undated |
| 6 | azonpress.com | Affiliate plugin vendor | Same | Same | Undated |
| 7 | affpilot.com | AI writing tool vendor | Same | Same | Undated |

Six of seven read the query as an affiliate licensing question. None answers
whether a brand's own Amazon images, video or A+ modules carry over to a Tmall
listing. **This is the intent mismatch the page exists to fix.**

### Query 4: `jd vs amazon image size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sellercentral.amazon.com (seller forum thread) | Seller-written forum thread | "Optimal image size" for Amazon | Seller opinion, not an Amazon statement; no JD | Undated |
| 2 | influencermarketinghub.com | Marketing media guide | Amazon image sizes | Amazon only, 2024 | 2024 |
| 3 | salesduo.com | Agency blog | Amazon image size | Amazon only | Undated |
| 4 | squareshot.com | Photo studio guide | Amazon image dimensions | Amazon only | 2026 |
| 5 | searchxpro.com | Agency blog | Image size against resolution | Amazon only | Undated |
| 6 | lab916.com | Agency blog | Amazon image sizes | Amazon only | 2026 |
| 7 | educardz.com | SEO blog | Amazon listing images | Amazon only | Undated |

Zero of seven carry a JD value. The search engine drops "jd" entirely.

### Query 5, Chinese (romanized): `Yamaxun Tianmao Jingdong zhutu yaoqiu qubie baidi tu chicun duibi`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | blog.csdn.net | Developer blog | Taobao, Tmall and JD main and detail sizes | The 2018 ancestor post identified in brief 04; no Amazon | 2018 |
| 2 | zhihu.com (question page) | Question and answer | Which images an ecommerce designer makes, with sizes | Crowd answers, no counts, no source | Undated |
| 3 | secaiyun.com (2026-05-13) | Design vendor doc | Cross-platform size table | Already counted and quarantined in brief 04; its dated versions contradict each other | 2026-05 |
| 4 | chinalhcz.com | Design agency news page | Main image sizes by platform | Agency page, no source | 2023-07 (from URL) |
| 5 | mmker.cn | Design resource article | Tmall and JD design sizes | No source, no counts | Undated |

The search engine's Chinese summary attributes an Amazon main image of 500 by 500
pixels under 1MB, and six JD main images, to these pages. Neither was found on a
fetched page, both contradict readings logged elsewhere (Amazon's own blog gives
500 to 10,000 pixels on the longest side and states no file cap; JD's modal
maximum is 5 on 2 of 2 pages), and both go to "Do not publish".

### Query 6, Chinese (romanized), run 2026-09-14: `Yamaxun de chanpin tupian keyi zhijie yong zai Tianmao Jingdong ma zhutu baidi chicun butong`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | canva.cn | Design tool vendor size page | Generic "main icon" sizes | No marketplace rule at all | Undated |
| 2 | hupun.com | ERP software vendor article | Amazon white-background main image rules | Amazon only, no Tmall or JD value, no source named | Undated |
| 3 | zhihu.com (question page) | Question and answer | Which images an ecommerce designer makes; the same page as Query 5 | Crowd answers, no counts | Undated |
| 4 | wearesellers.com | Cross-border seller community post | Amazon image tips from sellers | Seller opinion, Amazon only | Undated |
| 5 | tukeli.net | Cutout tool landing page | One-click white background for Taobao, Tmall, 1688 and Amazon | A tool page; no spec value | Undated |
| 6 | en.dtlgz.com | Image downloader tool article | Taobao, Tmall and JD image processing rules | No Amazon column, no source | 2024-03-04 (from URL) |
| 7 | chinalhcz.com | Design agency news page | Main image sizes by platform; the same page as Query 5 | No source | 2023-07 (from URL) |
| 8 | matting.deeplor.com | Cutout tool blog | How cross-border sellers make white-background images | Tool blog, Amazon-leaning, no China value | Undated |

Zero of eight set Amazon beside a Tmall or JD value, and zero answer whether a
brand's own Amazon set carries over. Six of eight are tool, software or agency
pages; two are community pages. The search engine's Chinese summary attributes
an Amazon main image "requirement" of 1000 by 1000 pixels, and repeats the 500
by 500 under 1MB figure from Query 5, to these pages. Neither is on Amazon's
help article (A-IMG: 500 to 10,000 on the longest side, no file cap), and both
go to "Do not publish". The gap statement and the H1 consequence are unchanged.

With Query 6 the audit stands at six queries and 42 results: 27 from companies
with a commercial interest in the answer, 0 from Amazon, Tmall or JD, 0 setting
an Amazon value beside a counted Tmall or JD value, 0 separating carry-over from
rebuild. The 34-result table below is the 2026-09-10 state and is kept as
written.

### Publisher types across the 34 results

| Publisher type | Results |
|---|---|
| Agency, studio or design subscription (never named on the page) | 11 |
| Software or tool vendor | 10 |
| Tutorial, community, Q and A or personal article | 7 |
| News, media or directory | 4 |
| Platform-hosted, seller-written forum thread | 1 |
| Other company blog | 1 |
| **Total** | **34** |

21 of 34 are published by a company with a commercial interest in the answer. 0
of 34 are an Amazon, Tmall or JD statement. 0 of 34 set an Amazon value beside a
counted Tmall or JD value. 0 of 34 separate an asset that carries over from one
that has to be rebuilt.

**The bar.** The English pages are single-marketplace Amazon guides, each built
on one requirements list or table, or pages answering another question (business
models, affiliate licensing). The Chinese pages are single size tables with no
source count and no Amazon column that survives a fetch. Page lengths were not
measured, because no page was fetched; the structure is read from the extracts.
The bar to beat inside the brief's 1,600 words: a side-by-side main image table
with a source or count in every cell, a carry-over table with a cell type per
marketplace, the A+ against detail page contrast, and a one-day capture plan. Two
tables clears the field. The carry-over table wins it, because no ranking page in
either language says what carries over.

**The gap, in one sentence:** see the header table.

**H1 consequence.** The English SERP answers "what are Amazon's rules" and misreads
"can I use Amazon images on Tmall" as a licensing question. The working H1, "Amazon,
Tmall, JD: one product, three listing builds", already names the thing the SERP
lacks. Keep it. The first screen must answer the reuse question directly: some
assets re-export, some re-crop, some rebuild.

## R1. What has to be true before looking anything up

Listed before any page was opened. Each resolves as holds, breaks or cut, in the
tables below.

1. Amazon publishes its image rules in public seller help pages. **Holds,
   primary.** Four help articles render in full for a logged-out browser. A plain
   fetch gets a shell, which is how the ledger came to record a login wall.
2. Amazon's main image background is pure white at RGB 255, 255, 255. **Holds,
   primary** (A-IMG).
3. Amazon sets a fill figure of 85 percent. **Holds, primary**: "Show the product
   as 85% of the image" (A-IMG). Supporting surfaces print 85 or more, 85 to 100,
   and 80 (R6).
4. Amazon sets a minimum size and a zoom size. **Holds, primary**: 500 to 10,000
   pixels on the longest side; 1,000 or more enables zoom (A-IMG).
5. Amazon requires a square main image. **Breaks.** No aspect ratio is stated for
   product images (A-IMG, A-TECH).
6. Amazon caps the number of listing images. **Breaks.** One compliant main image
   is required, six additional images and one video are recommended, and no
   maximum is stated (A-IMG).
7. Amazon caps listing image file weight. **Breaks.** No cap is stated. A-TECH asks
   for "minimal or no compression". (A+ images carry their own cap, under 2 MB.)
8. Amazon publishes product video specs. **Holds, primary** (A-VID).
9. Amazon's detail content, A+, is built from fixed modules with fixed image sizes.
   **Holds, primary** (A-APLUS).
10. Tmall and JD main image values exist as counted modal rows. **Holds** (T1, T2,
    J), modal, never primary.
11. The white image sits in the same slot on all three marketplaces. **Breaks.**
    Amazon's white main image is the first image (A-IMG). JD's white image is first
    and Tmall's fifth, on 5 of 5 pages per platform (J).
12. An Amazon main image re-exports as the Tmall and JD white-background image.
    **Holds as derived, with conditions.** It fails for adult clothing shot on a
    model, footwear shot at 45 degrees, and any frame with a shadow; the fill
    difference is contested.
13. Amazon additional images carry over to the Tmall and JD carousels. **Holds,
    derived, for clean photographs** (re-crop to square). **Breaks, derived, for
    slides built with text or composites** (T1 prohibition list, 11 of 18).
14. The Amazon video file re-exports to Tmall and JD. **Breaks, derived**: ratio,
    duration and file weight all differ.
15. A+ modules become the Tmall and JD detail page. **Breaks, derived.** The A+
    photography carries over as raw material. The page does not.
16. JD needs its own detail page build, separate from Tmall. **Breaks** (J: the
    width split is a sourcing artifact).
17. One capture day can serve all three builds. **Holds, derived.**
18. Amazon and China exports differ on compression. **Holds, derived** (A-TECH
    against T1 and J file weights).
19. hubStudio publishes a delivery figure with its method stated. **Breaks.** No
    delivery figure in the ledger carries a method. The 70/30 mix runs only under
    the first-party exception.
20. A measured benchmark exists for how much of an Amazon asset set is reusable on
    Tmall or JD. **Cut.** None of the 34 SERP results carries one, and no further
    search could run this session. Publish the absence, never a percentage.
21. Amazon has a disclosure rule for AI-generated people in listing images.
    **Holds, primary** (A-IMG). An adjacent point, not a must-include (see Notes for
    the writer).

## Amazon rows, primary for the page read

Every value below is quoted or closely rendered from the help article named, read
2026-09-10, US store. "Not stated" means the article was read in full and carries
no figure for it.

### Product images (A-IMG and A-TECH)

| Spec | Amazon value, as the article states it | Key | Confidence |
|---|---|---|---|
| Images required | "Every product requires at least one compliant main image." | A-IMG | primary |
| Images recommended | "at least six additional images and one video" | A-IMG | primary |
| Maximum image count | Not stated | A-IMG | absence, read in full |
| Display | Uploading does not guarantee display; Amazon "select[s] and arrange[s] images from multiple selling partners"; a selected image can take up to 24 hours to appear | A-IMG | primary |
| No compliant main image | "we may temporarily remove the product listing from search until a compliant main image is provided" | A-IMG | primary |
| Formats | JPEG (.jpg or .jpeg), TIFF (.tif or .tiff), PNG, non-animated GIF; JPEG recommended | A-IMG | primary |
| Formats refused | EPS, BMP, PDF, and application formats including PSD and Adobe Illustrator | A-TECH | primary |
| Pixel size | Minimum 500 and maximum 10,000 pixels on the longest side; below 500 cannot be uploaded; "Do not artificially enlarge small images" | A-IMG | primary |
| Zoom | "We recommend 1,000+ pixels"; "Images with 1,000+ pixels on the longest side enable the zoom function" | A-IMG | primary |
| Aspect ratio | Not stated | A-IMG | absence, read in full |
| File weight cap | Not stated | A-IMG, A-TECH | absence, read in full |
| Compression | "Submit images with minimal or no compression"; JPEG at the highest quality level; no compression on TIFF; remove all layers | A-TECH | primary |
| Color | RGB preferred; CMYK "Not preferred. Convert to RGB before uploading"; grayscale only for gray or silver metal products; do not rely on ICC profiles | A-IMG, A-TECH | primary |
| Resolution | "At least 72 dpi" | A-IMG | primary, not cleared (see Do not publish) |
| File naming | Product identifier + variant code + extension, example `B000123456.MAIN.jpg`; optional in the table, required for the bulk upload tool | A-IMG | primary |
| Image slots | MAIN (search, browse, first on the page); PT01 to PT99 additional angles, in use, details; SWCH swatch; PS01 to PS06 safety; TOPP, BOTT, LEFT, RGHT, FRNT, BACK, SIDE angles; INGR ingredients; EEGL energy guide; DTLS multipack | A-IMG | primary |

### MAIN image (A-IMG)

| Rule | As the article states it | Confidence |
|---|---|---|
| Realism | "Accurately represent the product as a realistic, professional-quality image", real scale, quantity and color | primary |
| Placeholders | None, including temporary ones | primary |
| Fill | "Show the product as 85% of the image." | primary. Area or linear share not defined |
| Whole product | "Show the entire product within the frame of the image. Do not cut off any part of the product." | primary |
| One view | "Only show the product once in the image", front only, not front and back | primary |
| Quantity | One unit plus accessories included with the product | primary |
| Background | "pure white background (RGB color values: 255, 255, 255)" | primary |
| Lifestyle main | Allowed for "a limited number of product types", with no text or extra logos, per a separate style guide | primary, scope not listed on this page |
| Packaging | Not shown, unless an important product feature | primary |
| Props | No accessories or props not included with the product | primary |
| Mannequins | "Don't show any part of a mannequin", clear, solid, flesh-toned, framework or on a hanger | primary |
| Footwear | "a single shoe, facing left, at a 45-degree angle" | primary, category rule |
| Clothing accessories, multipacks | Flat, without a model | primary, category rule |
| Adult clothing | On a model, standing | primary, category rule |
| Shadow | Not stated | absence, read in full |
| Text, logos, watermarks on MAIN | Not stated as a MAIN rule on this page; the lifestyle exception says "no text or extra logos" | partial. The Amazon moderator post (A-FORUM) states the ban directly |

### Every product image (A-IMG)

| Rule | As the article states it | Confidence |
|---|---|---|
| Accuracy | Accurately represent the product and match the product's title | primary |
| Claims | "No images of customer reviews, five-star imagery, claims (for example, free shipping), or selling partner-specific information" | primary |
| Text | "No text or pricing details (swatch image only)", read as a rule for swatch images; no general text ban on additional images is stated | primary, scoped to swatch |
| Amazon marks | No Amazon logos, trademarks or badges, or anything confusingly similar | primary |
| Children's form-fitting items | Lying flat, without models | primary |
| AI-generated people | Tag the image with `contains-synthetic-performer` in the dc:subject (XMP) field when it shows photorealistic people entirely generated by AI | primary |

### A+ Content (A-APLUS)

| Spec | As the article states it | Confidence |
|---|---|---|
| Who | Brand owners and authorized resellers; ASINs registered to the brand; brand name matching Brand Registry exactly | primary |
| Cost and Premium access | "no additional cost for basic and Premium features. There is no additional eligibility criteria for sellers to access Premium A+." | primary |
| Basic A+ | Product description section; image size 970 x 300; comparison chart yes; 5 modules on the detail page; 14 modules to choose from; no video or hotspot; no navigation carousel | primary |
| Premium A+ | Image size 1464 x 600; comparison chart yes; 7 modules; 19 to choose from; video and hotspot yes; navigation carousel yes | primary |
| Brand story | "From the brand" section; one module with up to 19 pre-formatted cards in a carousel; usable alongside Basic or Premium | primary |
| Files | .jpg, .bmp or .png; RGB only; "Under 2 MB per file"; minimum 72 dpi | primary (dpi not cleared) |
| Technical bans | No animated GIFs, HTML, CMYK, watermarks, QR codes, hyperlinks or external redirects | primary |
| Oversize images | Resized to the template maximum; can be cropped and scaled in the tool | primary |
| Not acceptable | Time-sensitive references; promotional language or pricing; competitor comparisons; external links or contact information; warranty and guarantee information; shipping details; QR codes or personal information; small unreadable text; images duplicated from the gallery; watermarks; animated images | primary |
| Acceptable, relevant | "Include unique content that doesn't duplicate the image gallery"; comparison charts for same-brand products; format content for mobile; alt-text for every image | primary |
| Review | Up to seven business days; published within 24 hours of approval; viewable only on language-specific pages | primary |
| Category limit | Not yet supported in Books, Music, Video or DVD | primary |

### Shoppable video (A-VID)

| Spec | As the article states it | Confidence |
|---|---|---|
| Format | MOV or MP4 | primary |
| Maximum size | 5 GB | primary |
| Resolution | Up to 1080p | primary |
| Aspect ratio | Horizontal 16 x 9; vertical 9 x 16 | primary |
| Duration | 1-12 minutes (stated twice on the page) | primary. Supporting blog advice differs (R6) |
| Thumbnail | JPEG, PNG, GIF or BMP, under 5 MB; 1920 x 1080 at 16:9 recommended on the Image Manager route | primary |
| Eligibility | Account active more than three months, brand-registered or not; ASINs created and listed | primary |
| Marketplace sharing | "US-Canada shared listings sync automatically, but no other marketplace sharing is supported", with an experimentation caveat | primary |
| Not allowed | External links; promotional calls to action; unauthorized music or artwork; visible third-party branding; misleading claims; low-quality content; external branding; promotional content | primary |
| Review | Initial review 1 to 7 business days; publication within three days of approval; longer around holiday seasons | primary |
| Image count interaction | "For softlines products: If your listing has six or more images, the video will be suppressed on the desktop view." | primary, softlines and desktop only |
| Sales uplift | "*23.8% increase in sales" from "Amazon internal historical data, January through June 2024" | not cleared (see Do not publish) |

### Supporting Amazon surfaces, what they add

| Key | What it says that matters here | Use |
|---|---|---|
| A-BLOG1 (Dec 2024) | "All images must be: 500 to 10,000 pixels on their longest side"; "We prefer images larger than 1,000 pixels on each side to allow for zoom"; "Have the product fill 85% or more of the frame"; "at least one image, and we recommend having at least six" | R6 only |
| A-BLOG2 (May 2025) | Formats .mov or .mp4, up to 1080p, 5 GB, "Between 1 and 12 minutes"; "You can add up to 4 shoppable videos to any ASIN"; "For shoppable videos to appear in the main media block of product detail pages, the product must have fewer than six images"; "Most successful videos are just 30 to 90 seconds long"; "use the same shoppable video across related product listings and across global Amazon stores" | R6 only |
| A-BLOG3 (Sep 2025) | "up to five Basic A+ Content modules per ASIN"; "up to seven modules per ASIN with Premium"; "Image sizes should be no larger than 2MB"; "Avoid embedding text in images so mobile customers can read all the details on smaller screens"; "if you meet eligibility criteria, you can also unlock Premium A+ Content" | R6 only |
| A-FORUM (Feb 2026) | Main image: "Pure white (RGB 255, 255, 255)"; "fill 85-100% of the image frame"; "Minimum 1000 pixels on the longest side for zoom functionality; optimal is 1600+ pixels"; "Avoid text, graphics, logos, watermarks, or promotional messaging on main images"; additional images may show the product in use, details, angles or cross-sections, "size comparisons or usage instructions" | R6; the only Amazon-owned text stating the MAIN text and logo ban directly |
| A-PDF23 (Mar 2023) | "five to seven different content modules"; A+ review "up to seven business days"; "limit the amount of text embedded in images"; "No guarantee/warranty info" | R6 only |
| A-AU18 (2018, Australia) | "have the product occupy at least 80 percent of the image area"; "at least 1,000 dpi" (a unit error) | R6 only, stale, other marketplace |

## Tmall and JD rows, lifted from the sibling files

Nothing below is re-counted. Each value keeps the count and pool its file gives
it. "T1 12 of 18" and "J 6 of 6" are two collections, never a sum.

### Main image set

| Spec | Tmall, modal value and count | JD, modal value and count | Confidence (Tmall / JD) |
|---|---|---|---|
| Ratio | 1:1 square, 12 of 18 (T1); J gives Tmall 7 of 7 | 1:1 square, 6 of 6 (J) | consensus / consensus |
| Working size or floor | 800 by 800, 14 of 18 (T1); J gives Tmall floor 8 of 9 | 800 by 800 floor, 9 of 10 (J) | consensus / consensus |
| Above the standard | 1000 by 1000 recommended, 5 of 18; 1440 upgrade (1440 square or 1440 by 1920), 3 of 18 (T1) | 1200 by 1200 recommended, 3 of 4 (J) | contested / contested |
| Maximum images | 5, 9 of 18 (T1); J gives Tmall 4 of 4 | 5, 2 of 2 (J) | consensus / contested (thin) |
| Formats | JPG 8 of 18, PNG 4 of 18 (T1) | JPG and PNG, GIF on some pages, 5 of 7 (J) | consensus for JPG / consensus |
| File weight | 3MB platform cap, 6 of 18; under 500KB as a load-speed recommendation, 3 of 18 (T1). J counts Tmall 500KB on 4 of 6 and 3MB on 2 of 6 as caps | 1MB on 4 of 6, 500KB on 2 of 6 (J) | T1 consensus for 3MB, J contested; see R6 / contested |
| Prohibited on main images | Watermarks, borders, splicing, promotional overlay text, QR codes, third-party logos, models in the white slot, 11 of 18 (T1) | Price, manufacturer name, third-party logo, unrelated text or graphics, 3 of 3; J says the two lists "cannot be called" against each other | consensus / contested |
| Overlay text area cap | No mode: 15 percent on 1, 30 percent on 1 (T1) | Not comparable (J) | contested |
| Category variation | Food: white second, legible label third; large appliances: white second, certification mark third, energy label fourth, 1 source each; about 70 categories moved to square-first from September 2024, about 10 held 3:4 (T1, 4 of 18 for existence) | None found (J) | contested per map |

### White-background image

| Spec | Tmall | JD | Confidence |
|---|---|---|---|
| Its own deliverable | 14 of 15 (T2) | Same file set (B10, J) | consensus |
| Slot | Fifth in general categories: 8 of 18 (T1), 10 of 15 (T2), 5 of 5 (J) | First, 5 of 5 (J) | consensus, the strongest cross-platform row (J) |
| Background | Pure white, RGB 255 255 255, 9 of 18 (T1); pure white in any form 8 of 15, printed triplet 3 of 15, all dated 2026 (T2) | Pure white; triplet printed on 2 of 5 JD pages (J) | consensus / contested |
| Tolerance | No mode; 255 255 255 is the only value no published reading rejects, derived (T2) | Not published (J) | contested; derived |
| Size | 800 by 800: 6 of 18 (T1), 7 of 15 (T2) | No separate row (J) | consensus |
| File weight | Under 300KB, 38KB floor on 3: 4 of 18 (T1); 38KB to 300KB on 3 of 15, originating once in 2017 (T2) | Not published (J) | contested, originates once |
| Fill | 70 to 80 percent, 4 of 18, band 60 to 80 (T1); two generations: "fill the frame, no white margin" on 5 of 15 dated 2017 to 2024, 70 to 80 on 3 of 15 dated 2026 (T2) | Not published, 0 of 24 (J) | contested / not published |
| Content bans | Text, watermark, logo or promotional overlay 9 of 15; model 7; shadow 6; splicing 6; hangers, mannequins and tags 5; border 2; any body part 1 (T2) | Not separately published (J) | consensus except border and body part |
| Composition | One subject 5 of 15; centered 5 of 15; front view 4 of 15; clean cutout edges 3 of 15; contact shadow tolerated on 2 of 15, contested (T2) | Not published | consensus, contact shadow contested |

### Listing video

| Spec | Tmall | JD | Confidence |
|---|---|---|---|
| Ratio | 1:1 on 3 of 18; 3:4 on 2, 9:16 on 1, 16:9 on 1 (T1) | 1:1 or 3:4, 3 of 4 (J) | consensus among the three / consensus |
| File weight | 50MB, 3 of 18 (T1) | 50MB, 2 of 3 (J) | consensus among the three / contested |
| Format | MP4, H.264 preferred, 3 of 18 (T1) | Not separately counted | consensus among the three |
| Duration | 9 to 30 seconds recommended, 2 of 18; a platform window given once as 5 seconds to 5 minutes (T1) | 15 to 60 seconds, 3 of 5 (J) | contested / contested |

### Detail page

| Spec | Tmall | JD | Confidence |
|---|---|---|---|
| Desktop width | 790, 5 of 18 (T1); J gives Tmall 4 of 6 | 790, 5 of 9, spread 647 to 1000 (J) | consensus (T1) / contested |
| Mobile width | 750, 5 of 18, a separately sliced deliverable (T1; CP taxonomy on 8 references) | 750, 4 of 6 (J) | consensus / contested |
| JD against Tmall | The width split is a sourcing artifact; pages publishing both mostly publish the same pair (J) | Same | contested, a correction rather than a figure |
| Slice caps | Height 1500 or 2000, 2 of 18 each; weight 200KB to 3MB (T1) | Height 1500, 3 of 4; weight 1MB, 2 of 4 (J) | contested |
| Image count | 10 to 15 slices, 2 of 18, phrased as advice (T1) | About 30, 2 of 2, phrased as advice (J) | contested |
| Taxonomy | Main set with a white image inside, long scrolling detail page, separate mobile detail page, size and specification chart, store decoration banners, short video (CP, 8 references) | Same taxonomy (CP) | triangulated for the taxonomy only |

### Access, carried from brief 28

Both platform rule centres served no rule text to an unauthenticated request on
2026-09-10: `rule.tmall.com/tdetail-11423.htm` redirected twice with no rule body;
`rule.jd.com/rule/ruleDetail.action` returned the rule-centre heading only, on two
rule ids. Primary observation, four requests, logged in the ledger. Not re-run.

## Carry-over analysis, derived

Every cell in this section is reasoning on the rows above. None is a platform
rule. Direction is Amazon outward, as the brief asks: a finished Amazon build, and
what each asset becomes on Tmall and on JD. Cell types are the ones brief 10
defined, reused unchanged:

| Cell type | Meaning |
|---|---|
| re-export | The same file, or a resize or recompression of it, goes to another slot unchanged in content; includes re-sequencing |
| re-crop | Geometry changes from an existing frame; no new capture |
| re-edit | Retouch, timeline or layout work on existing stills or footage (a shadow removal, a new cut, a page build) |
| new capture | Nothing in the Amazon build supplies it |

### The carry-over table

| Amazon asset | Becomes on Tmall | Tmall cell | Becomes on JD | JD cell |
|---|---|---|---|---|
| MAIN image, general merchandise, shadowless, front view | White-background image, fifth slot | re-export | White-background image, first slot | re-export (same file as Tmall) |
| MAIN image with a shadow | White-background image | re-edit | White-background image | re-export of the Tmall edit |
| MAIN image, adult clothing on a model | White-background image | new capture | White-background image | re-export of the Tmall capture |
| MAIN image, footwear at 45 degrees | White-background image | new capture | White-background image | re-export of the Tmall capture |
| Additional images, clean photographs (PT01 to PT99, angle codes) | Main images one to four | re-crop | Main images two to five | re-export (re-sequence of the Tmall set) |
| Additional images carrying text, callouts or composites | Carousel slots, or the detail page | re-edit | Carousel slots, or the detail page | re-edit, shared with Tmall |
| Ingredient, energy guide or safety images (INGR, EEGL, PS01 to PS06) | Category label slots, food and large appliances only | new capture | None found | none |
| Shoppable video | Listing video | re-edit | Listing video | re-export of the Tmall cut |
| A+ Content, Basic or Premium | Detail page, desktop and mobile | re-edit (page build) | Detail page | re-export of the Tmall build |
| Brand story carousel | Store decoration, a store-level asset | excluded | Store decoration | excluded |

### Inputs and reasoning, row by row

**MAIN image to the white-background image.** Amazon's MAIN rules (A-IMG): pure
white at RGB 255, 255, 255; the entire product; shown once; one unit; no props; no
mannequin. The most commonly published Tmall white-image rules (T2): pure white;
one subject, 5 of 15; front view, 4 of 15; centered, 5 of 15; no text, logo or
watermark, 9 of 15; no hangers, mannequins or tags, 5 of 15; no model, 7 of 15; no
shadow, 6 of 15. The two sets agree on ground, whole product, single view and no
mannequin. Amazon's page is silent on shadows and on models outside clothing, so a
shadowless, front-view Amazon MAIN satisfies both on the published record and moves
by export. Export changes: a square of at least 800 by 800 (T1 14 of 18; J 9 of 10),
JPG, and a weight under 300KB (T1 4 of 18, originating once per T2). JD takes the
same file in slot one (J 5 of 5).

Assumptions and open points, printed:

1. Amazon states no aspect ratio. If the MAIN is not square, making it square is a
   re-crop, or extending the white ground, and no source says whether an extended
   white ground reads as a border (T1 bars borders on its 11 of 18 list).
2. Fill does not match. Amazon says "85% of the image" (A-IMG). Tmall pages dated
   2026 give 70 to 80 percent (T2 3 of 15), older pages say fill the frame (T2 5 of
   15), JD publishes nothing (J 0 of 24). Whether an 85 percent frame is rejected on
   Tmall is not published. Contested, so the carry-over cell stays re-export, with an
   optional re-crop to widen the white margin.
3. Neither Amazon page defines fill as area or as width and height. The 2018
   Australian guide says "image area" (A-AU18). Any pixel arithmetic on fill needs an
   assumption no current page states, so none is given.

**Clothing and footwear break the export.** Amazon puts adult clothing "on a model"
and footwear as "a single shoe, facing left, at a 45-degree angle" (A-IMG). The
Tmall white image bars models (T2 7 of 15) and is most often published as a front
view (T2 4 of 15). Neither Amazon frame can become the Tmall white image, so it is a
new capture in those categories. Amazon's own flat, model-free rule for clothing
accessories and multipacks (A-IMG) sits closer to the Tmall rule and may export.

**Additional images.** Amazon states no general text ban for additional images; its
text rule is scoped to swatch images (A-IMG), and its moderator post invites size
comparisons and usage instructions (A-FORUM). Tmall's most commonly published main
image rules bar promotional overlay text and spliced composites (T1 11 of 18), and no
mode exists for how much text is tolerable (T1, 15 against 30 percent, one source
each). Clean photographs therefore move with a square crop (T1 1:1 on 12 of 18; J 6
of 6). Slides built with English callouts, badges or composites need a re-edit, and
their information often belongs on the detail page instead. JD's banned-content list
is contested (J 3 of 3) and cannot be compared line by line with Tmall's (J), so the
JD cell follows the Tmall edit rather than a JD-specific rule.

**Category label images.** Amazon gives ingredient (INGR), energy guide (EEGL) and
safety (PS01 to PS06) slots (A-IMG). Tmall category standards put a legible food
label third and, for large appliances, the certification mark third and the energy
label fourth (T1, 1 source each, contested). The label artwork a Chinese category
map asks for is not the US label, so this is new capture of the China-market label,
in those categories only. An assumption, printed: that the China-market pack carries
different label artwork; no source in this file states it.

**Video.** Amazon: MOV or MP4, up to 1080p, 5 GB, 16 x 9 or 9 x 16, 1 to 12 minutes
(A-VID). Tmall: 1:1 on 3 of 18, 50MB on 3 of 18, MP4 with H.264 on 3 of 18, 9 to 30
seconds recommended on 2 of 18 (T1). JD: 1:1 or 3:4 on 3 of 4, 15 to 60 seconds on 3
of 5, 50MB on 2 of 3 (J). Every axis differs: frame (no shared ratio), length (Amazon's
floor of one minute sits above Tmall's 9 to 30 second recommendation), weight (a 5 GB
ceiling against a 50MB mode). The Amazon file cannot re-export; a square cut of the
same footage can. The reverse also fails: a 20-second square China cut is below
Amazon's one-minute floor and outside its two ratios. Two cuts, one shoot.

**A+ Content against the China detail page.** A+ is a fixed-module system: Basic
allows 5 modules with 970 x 300 images, Premium 7 modules with 1464 x 600 images,
under 2 MB a file, text entered in fields, and images that must not duplicate the
gallery (A-APLUS). The China detail page is a long scrolling page built twice, 790
wide for desktop and 750 for mobile (T1 5 of 18 each; CP taxonomy), with no module
count published and slice counts phrased only as advice (T1 2 of 18; J 2 of 2). A+
images are banner-shaped: 970 x 300 is about 3.2 to 1 and 1464 x 600 about 2.4 to 1,
arithmetic on the A-APLUS figures. A 790-wide slice has no fixed ratio. The page is a
rebuild; the photography inside it is raw material, usually re-cropped. On the
published widths one China build serves Tmall and JD (J), confirmed in both seller
backends before re-use.

**Content rules that do not travel.** A+ bars pricing, promotional language,
shipping details, warranty and guarantee information, time-sensitive references and
competitor comparisons (A-APLUS). No sibling file counts a China detail page content
rule, so nothing may be said about whether those bans apply on Tmall or JD. The
detail page rebuild is argued on structure only.

**Brand story.** A carousel of up to 19 cards in the From the brand section
(A-APLUS). Its China counterpart is store decoration, which brief 28's taxonomy puts
at store level, not per SKU (CP). Excluded, as brief 10 excluded it.

### Export presets, derived

One master file, two export settings. Arithmetic on the rows above, not a rule.

| Setting | Amazon export | Tmall and JD export | Inputs |
|---|---|---|---|
| Format | JPEG, recommended | JPG | A-IMG; T1 8 of 18; J 5 of 7 |
| Color | RGB | Not published in the cluster | A-IMG, A-TECH |
| Compression | Minimal or none, JPEG at highest quality | Mains under 500KB, which sits inside T1's 3MB cap and 500KB recommendation and J's 500KB and 1MB JD spread; white image under 300KB | A-TECH; T1 6 of 18 and 3 of 18; J 2 of 6 and 4 of 6; T1 4 of 18 |
| Pixel size | 1,000 or more on the longest side for zoom, 10,000 maximum | Square, 800 by 800 or larger; 1440 only if the contested upgrade is wanted | A-IMG; T1 14 of 18 and 3 of 18; J 9 of 10 |
| Naming | Product identifier + variant code + extension, `ASIN.MAIN.jpg` style | No convention published | A-IMG; CP (naming is practice) |
| Detail slices | Not applicable; A+ images under 2 MB at the template size | 790 and 750 wide; no taller than 1500 pixels clears every published height cap (1500 or 2000, T1; 1500, J); on weight only 200KB clears every published figure (T1 spread 200KB to 3MB; J mode 1MB) | A-APLUS; T1 2 of 18 each; J 3 of 4 and 2 of 4 |

## One capture plan for three marketplaces, derived

A production plan built from the rows above. Not a platform requirement. Every
constraint names its input. Centered cuts are an assumption no source states,
carried from brief 10.

| Set-up | Feeds Amazon | Feeds Tmall and JD | Constraint carried, with inputs |
|---|---|---|---|
| White background, shadowless | MAIN image | White-background image (Tmall fifth, JD first) | Pure white, RGB 255 at export (A-IMG; T1 9 of 18; T2 derived 255). Whole product, shown once, one unit, no props, no mannequin (A-IMG). Front view, centered, one subject, no model, no shadow (T2 4, 5, 5, 7 and 6 of 15). Frame with white margin to spare, then crop twice: to 85 percent for Amazon (A-IMG) and looser for Tmall, where 2026 pages give 70 to 80 percent (T2 3 of 15, contested). Longest side of the square crop at least 1,000 pixels, which clears Amazon's zoom threshold (A-IMG) and the 800 floor (T1; J) |
| White background, category extra | Nothing extra | The white-background image for adult clothing (flat, no model) and footwear (front view) | Amazon MAIN puts adult clothing on a model and footwear at 45 degrees (A-IMG); Tmall bars models and favors front view (T2 7 and 4 of 15) |
| Styled and detail stills, text-free, square-safe | Additional images (PT01 to PT99, angle codes) | Main images one to four on Tmall, two to five on JD | Keep product and any later text inside a centered square: on a 1080 by 1440 still, the band from y 180 to 1260 (B10, derived). Capture no text; add Amazon callouts in edit only, because Tmall bars promotional overlay text (T1 11 of 18) and Amazon allows text beyond swatches (A-IMG) |
| A+ and detail page frames, not in the gallery | A+ module images, 970 x 300 Basic or 1464 x 600 Premium | Detail page slices, 790 desktop and 750 mobile, one build for both | A+ images must not duplicate the gallery (A-APLUS), so these are extra frames. Shoot with room on both axes: A+ crops are wide (about 3.2 to 1 and 2.4 to 1, arithmetic on A-APLUS), China slices are narrow and stacked (T1 5 of 18; J) |
| Video, one master | Shoppable video, 16 x 9 or 9 x 16, 1 to 12 minutes, up to 1080p, under 5 GB, MOV or MP4 (A-VID) | Listing video, a 1:1 cut, MP4 H.264, 50MB (T1 3 of 18; J 3 of 4 and 2 of 3) | Keep the product inside a centered square: on a 1920 by 1080 master, x 420 to 1500; on a 1080 by 1920 master, y 420 to 1500 (arithmetic, centering assumed). Plan two edits: one of at least one minute for Amazon, one of 15 to 30 seconds for China, the overlap of Tmall's 9 to 30 recommendation (T1 2 of 18) and JD's 15 to 60 window (J 3 of 5), both contested |
| Category label close-ups | INGR, EEGL, PS01 to PS06 where the category has them (A-IMG) | Food label image; appliance certification mark and energy label (T1, 1 source each) | Separate close-ups of each market's label artwork, in those categories only |

**The four core set-ups, derived:** white background, styled stills, A+ and detail
frames, video. Category extras are added only where the category asks for them.
Brief 10 derived four set-ups for six China platforms (3:4 still, 9:16 video, wide
landscape, white background); this plan differs because Amazon adds the A+ banner
frames and no China social slot needs the wide landscape here.

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified, plus
modal (a Tmall or JD count from a sibling file) and derived (reasoning on cited
rows). Unverified is cut. Market claims are cut.

### Amazon

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Four Seller Central help articles render full text to a logged-out browser; a plain fetch returns a 167,309 to 167,319 byte shell with no article text | sellercentral.amazon.com/help/hub/reference/external/G1881, /G9FUUH87RBNXGKB7, /GLG4RQK2Y2RJADU4, /GWJRQF3C34G4PRA2 | 2026-09-10 | 4 articles, 2 methods each | curl with response size recorded; headless Chromium render, text and full-page screenshot saved | nobody, own observation | primary |
| MAIN image: pure white, RGB 255, 255, 255 | .../G1881 | read 2026-09-10, page undated | n/a | Read in full, rendered | Amazon, its own rule text | primary, US store |
| MAIN image: "Show the product as 85% of the image" | .../G1881 | same | n/a | same | Amazon | primary, US store; area or linear share undefined |
| MAIN: entire product, shown once, one unit, no props, no mannequin, packaging only as a feature | .../G1881 | same | n/a | same | Amazon | primary, US store |
| MAIN by category: adult clothing on a standing model; footwear one shoe facing left at 45 degrees; accessories and multipacks flat, no model | .../G1881 | same | n/a | same | Amazon | primary, category-scoped |
| Files: JPEG, TIFF, PNG, non-animated GIF, JPEG recommended; 500 to 10,000 pixels on the longest side; 1,000 or more enables zoom; RGB preferred | .../G1881 | same | n/a | same | Amazon | primary, US store |
| One compliant main image required; six additional images and one video recommended; no maximum count, no aspect ratio, no file cap stated | .../G1881 | same | n/a | Read in full for the absences | Amazon | primary, including the absences |
| No customer reviews, five-star imagery, claims or selling partner information on any image; text and pricing rule scoped to swatch images; no Amazon marks or badges | .../G1881 | same | n/a | same | Amazon | primary |
| Images with photorealistic, fully AI-generated people carry the contains-synthetic-performer keyword in dc:subject (XMP) | .../G1881; video equivalent on .../GWJRQF3C34G4PRA2 and .../GLG4RQK2Y2RJADU4 | same | n/a | same | Amazon | primary, no effective date on the page |
| Minimal or no compression; JPEG at highest quality; no TIFF compression; remove layers; CMYK converted to RGB; EPS, BMP, PDF, PSD and Illustrator files refused | .../G9FUUH87RBNXGKB7 | same | n/a | same | Amazon | primary, US store |
| A+ Basic: 970 x 300 images, 5 modules, 14 to choose from, no video. Premium: 1464 x 600, 7 modules, 19 to choose from, video and hotspots. Brand story: up to 19 cards | .../GLG4RQK2Y2RJADU4 | same | n/a | same | Amazon | primary, US store |
| A+ files .jpg, .bmp or .png, RGB, under 2 MB; content and technical bans; no gallery duplicates; review up to seven business days; no added cost or eligibility for Premium | .../GLG4RQK2Y2RJADU4 | same | n/a | same | Amazon | primary, US store |
| Shoppable video: MOV or MP4, 5 GB, up to 1080p, 16 x 9 or 9 x 16, 1 to 12 minutes; thumbnail under 5 MB | .../GWJRQF3C34G4PRA2 | same | n/a | same | Amazon | primary, US store |
| Softlines listings with six or more images have the video suppressed on desktop | .../GWJRQF3C34G4PRA2 | same | n/a | same | Amazon | primary, softlines and desktop only |
| US-Canada shared listings sync video; no other marketplace sharing | .../GWJRQF3C34G4PRA2 | same | n/a | same | Amazon | primary |
| Moderator guidance: avoid text, graphics, logos, watermarks and promotional messaging on main images; fill 85 to 100 percent; 1,600 or more pixels optimal | sellercentral.amazon.com/seller-forums/discussions/t/0149bdb3-2056-42ce-b0bb-9eef94e3d2b8 | 2026-02 (thread timestamps from 2026-02-03) | 1 post | Read in full from the served page | Amazon, a moderator | single-source, Amazon-owned restatement |
| Fill "85% or more of the frame"; "we recommend having at least six" images | sell.amazon.com/blog/product-photos | 2024-12-04, modified 2025-10-03 | n/a | Read in full | Amazon | supporting, R6 |
| "have the product occupy at least 80 percent of the image area" | m.media-amazon.com/images/G/01/rainier/help/Selling_on_Amazon_Quick_Start_Style_Guide_2018.pdf | 2018 | n/a | PDF text extracted | Amazon's Australian business | supporting, stale, other store |
| Videos lift sales "23.8%" | .../GWJRQF3C34G4PRA2 | data January to June 2024 | not stated | "Amazon internal historical data" | Amazon, which sells the feature | market claim, cut |
| A+ can lift sales "up to 8%", Premium "up to 20%" | sell.amazon.com/blog/a-plus-content-design-guide; Aplus_Content_Best_Practices-US.pdf | 2025-09-24; 2023-03-28 | not stated | not stated | Amazon, which sells the feature | market claim, cut |

### Tmall and JD, lifted

| Claim | Source | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Both platform rule centres serve no rule text to an unauthenticated request | rule.tmall.com, rulechannel.tmall.com, rule.jd.com (brief 28) | 2026-09-10 | 4 requests | Direct fetch, redirect chain recorded | nobody | primary |
| Main image 1:1 at 800 by 800 on both | T1 (12 and 14 of 18); J (6 of 6, 9 of 10) | 2026-09-10 | 18 domains; 24 pages | Modal count, per file | vendors on their own pages | modal, consensus |
| White image first on JD, fifth on Tmall | J (5 of 5 per platform); T1 (8 of 18); T2 (10 of 15) | 2026-09-10 | per file | Modal count | vendors | modal, consensus |
| White image rules: own deliverable, pure white, no model, no shadow, front view, centered, one subject | T2 (14, 8, 7, 6, 4, 5, 5 of 15) | 2026-09-10 | 15 domains | Modal count | vendors | modal, consensus |
| White image fill 70 to 80 percent on 2026 pages, fill the frame on older pages; JD none | T2 (3 and 5 of 15); T1 (4 of 18); J (0 of 24) | 2026-09-10 | per file | Modal count, grouped by date | vendors | modal, contested |
| Main image prohibition list | T1 (11 of 18) | 2026-09-10 | 18 domains | Modal count | vendors | modal, consensus |
| Main image weights: Tmall 3MB cap and 500KB recommendation; JD 1MB and 500KB | T1 (6 and 3 of 18); J (4 and 2 of 6; Tmall 4 and 2 of 6) | 2026-09-10 | per file | Modal count | vendors | modal, contested, files read the Tmall figure differently (R6) |
| Listing video: Tmall 1:1, 50MB, MP4 H.264, 9 to 30 s; JD 1:1 or 3:4, 15 to 60 s, 50MB | T1 (3, 3, 3, 2 of 18); J (3 of 4, 3 of 5, 2 of 3) | 2026-09-10 | per file | Modal count | vendors | modal, mixed per row |
| Detail page 790 desktop, 750 mobile; the JD against Tmall split is a sourcing artifact | T1 (5 of 18 each); J (5 of 9, 4 of 6) | 2026-09-10 | per file | Modal count | vendors | modal, consensus (T1) and contested (J) |
| Listing taxonomy: main set with white image, long detail page, mobile detail page, spec chart, store banners, short video | CP (8 references) | 2026-09-10 | 8 | Deliverable lists compared, numbers set aside | vendors | triangulated, taxonomy only |

### Derived and observed

| Claim | Source | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Every carry-over cell and the export presets | This file's carry-over section | 2026-09-10 | n/a | Reasoning on the rows named per cell | nobody | derived |
| The one-day capture plan, four core set-ups | This file's capture plan | 2026-09-10 | n/a | Reasoning on the rows named per set-up | nobody | derived |
| 42 results, 27 commercial, 0 setting Amazon beside counted Tmall and JD values, 0 separating carry-over from rebuild; 16 of 29 English results answer Amazon alone | This file's R2 | 2026-09-10, extended 2026-09-14 | 42 results, 6 queries | Classified from titles, URLs and extracts | nobody | primary observation |
| hubStudio's ecommerce catalogs run about 70 percent generated, 30 percent shot | src/pages/services/design/ecommerce.astro, line 81 | read 2026-09-10 | not stated | First-party site copy | hubStudio | first-party exception only |
| hubStudio's ecommerce page gives Amazon mains "at 2,000 pixels for zoom" and Amazon video "fifteen to thirty seconds" | src/pages/services/design/ecommerce.astro, lines 97 and 82 | read 2026-09-10 | n/a | First-party site copy, ledger-flagged | hubStudio | unverified, and conflicts with A-IMG and A-VID; cut |
| Platform pages publish "48h brief to first cut" and "50+" (Amazon, JD) or "60+" (Tmall) variants per concept | src/pages/solutions/platforms/amazon.astro, jd.astro, tmall.astro, lines 28 to 29 | read 2026-09-10 | not stated | First-party counters | hubStudio | not a ledger delivery figure, no method; cut |

## R6. Where sources conflict

| Question | The spread | Why they differ | What the page uses |
|---|---|---|---|
| Amazon fill | "85% of the image" (A-IMG, undated); "85% or more of the frame" (A-BLOG1, Dec 2024); "85-100%" (A-FORUM, Feb 2026); "at least 80 percent of the image area" (A-AU18, 2018) | Three restatements for sellers and one older guide for another store. Only the 2018 guide says area | A-IMG's 85 percent, US store. The spread only if the page discusses fill in depth |
| Amazon minimum size | 500 minimum, 1,000 or more enables zoom, longest side (A-IMG); "Minimum 1000 pixels on the longest side for zoom" (A-FORUM); "larger than 1,000 pixels on each side" (A-BLOG1) | The forum folds the zoom threshold into a minimum; the blog says each side, the rule text says longest side | A-IMG |
| Amazon recommended image count | Six additional images plus one video (A-IMG); "at least six" in total (A-BLOG1) | Wording. On A-IMG's words the recommendation is seven images counting the main one, arithmetic | A-IMG's wording, "one main image plus six additional" |
| Amazon video length | 1 to 12 minutes, stated twice (A-VID) and in A-BLOG2; the same blog says "Most successful videos are just 30 to 90 seconds long" and cites examples under 35 seconds | Advice and examples sit below the stated floor on Amazon's own blog. Unresolved on Amazon's pages | A-VID's 1 to 12 minutes, with no claim that a shorter video is rejected |
| Video and image count | Softlines only, desktop only, six or more images suppress the video (A-VID); any product, main media block, fewer than six images (A-BLOG2) | Different scope | A-VID's scope |
| Video across Amazon stores | US-Canada sync only, no other sharing (A-VID); usable "across global Amazon stores" (A-BLOG2) | Direct conflict | Neither, not needed |
| Premium A+ eligibility | "no additional eligibility criteria" (A-APLUS); "If you meet eligibility criteria, you can also unlock Premium" (A-BLOG3, Sep 2025) | Direct conflict, the help page undated | A-APLUS, as rule text, or leave eligibility out |
| Text in A+ images | Readable text required, small unreadable text refused (A-APLUS); "Avoid embedding text in images" (A-BLOG3); "limit the amount of text embedded in images" (A-PDF23) | Advice gets stronger on the blog than on the rule text | A-APLUS. Never write that A+ bans text in images |
| BMP | Accepted for A+ images (A-APLUS); refused for product images (A-TECH) | Different asset types, not a conflict | Note for export presets |
| Tmall main image weight | T1: 3MB is the cap (6 of 18), 500KB a load-speed recommendation (3 of 18). J: Tmall 500KB on 4 of 6 and 3MB on 2 of 6, both counted as caps; the ledger still carries both readings | Different pools and a different reading of what 500KB is | Neither as settled. The derived export point, under 500KB clears every figure in both files |
| Tmall white image weight | Under 300KB on 4 of 18 (T1); the same figure traced to one 2017 origin (T2) | Restatement counted as agreement in the wider pool | Under 300KB as an export setting, never as corroborated |
| hubStudio site copy against Amazon | "2,000 pixels for zoom" and "fifteen to thirty seconds for Amazon" (ecommerce page) against 1,000+ enables zoom and 1 to 12 minutes (A-IMG, A-VID) | Site copy predates or ignores the help articles | Amazon's articles. The site copy is logged for the site backlog and never quoted |
| Ledger against today's read | Brief 27 recorded Amazon's image page as behind a seller login | The page renders client-side; a plain fetch sees only the shell | Today's render. Ledger note proposed below |

## Cleared for use

American English. Each blockquote is followed by its Source line carrying a
dated read and a one-sentence method. No studio, agency, subscription, creative
platform or software vendor is named or described. Platforms are named. No Han
characters. Research filenames in Source lines are renamed to their collection on
the page, as brief 10 did in its R8.

**The readable Amazon pages.**

> Amazon publishes its listing rules in public Seller Central help articles, and
> each of the four read for this page says it applies to selling in the United
> States. None prints a date. Every Amazon figure on this page is read from those
> articles and applies to the US store only.
> Source: Amazon Seller Central help, Product image guide, Technical image file requirements, A+ Content guide and Shoppable video guide, read 10 September 2026, pages undated. Primary readings of Amazon's own help articles, rendered in a logged-out browser and captured, scoped to the US store.

**Amazon's main image.**

> Amazon's main image rules are specific. The background must be pure white, RGB
> 255, 255, 255. The product should take up 85 percent of the image, appear whole,
> appear once and appear as a single unit, with no props that are not included and
> no part of a mannequin. Files run from 500 to 10,000 pixels on the longest side,
> and 1,000 pixels or more turns on zoom.
> Source: Amazon Seller Central help, Product image guide, US store, read 10 September 2026, page undated. https://sellercentral.amazon.com/help/hub/reference/external/G1881 A primary reading of Amazon's help article, scoped to the US store.

**What Amazon does not set.**

> Amazon's image guide sets no aspect ratio, no file size cap and no maximum number
> of listing images. It requires one compliant main image, recommends six additional
> images and one video, and asks for files saved with minimal or no compression.
> Source: Amazon Seller Central help, Product image guide and Technical image file requirements, US store, read 10 September 2026, pages undated. https://sellercentral.amazon.com/help/hub/reference/external/G1881 Primary readings, each article read in full for the figures it does not carry.

**Amazon's category rules.**

> Amazon's main image rules change by category in ways that matter for a second
> marketplace. Adult clothing goes on a standing model. Footwear is a single shoe
> facing left at a 45-degree angle. Clothing accessories and multipacks lie flat,
> with no model.
> Source: Amazon Seller Central help, Product image guide, US store, read 10 September 2026, page undated. https://sellercentral.amazon.com/help/hub/reference/external/G1881 A primary reading of Amazon's help article, scoped to the US store and the categories it names.

**A+ Content, the modules.**

> Amazon's A+ Content is a module system. Basic A+ allows five modules on a detail
> page, with images at 970 by 300 pixels. Premium A+ allows seven, with images at
> 1464 by 600, and adds video and hotspots. Image files must be JPG, BMP or PNG in
> RGB and under 2 MB, and A+ images are not supposed to duplicate the image gallery.
> Source: Amazon Seller Central help, A+ Content guide, US store, read 10 September 2026, page undated. https://sellercentral.amazon.com/help/hub/reference/external/GLG4RQK2Y2RJADU4 A primary reading of Amazon's help article, scoped to the US store.

**A+ Content, the content rules.**

> A+ Content carries its own content rules. Amazon's guide rules out pricing and
> promotional language, shipping details, warranty and guarantee information,
> time-sensitive references, external links, QR codes, watermarks and animated
> images. Review can take up to seven business days.
> Source: Amazon Seller Central help, A+ Content guide, US store, read 10 September 2026, page undated. https://sellercentral.amazon.com/help/hub/reference/external/GLG4RQK2Y2RJADU4 A primary reading of Amazon's help article, scoped to the US store.

**Amazon video.**

> Amazon's shoppable video guide sets its own frame and length. Files are MOV or
> MP4, up to 1080p and 5 GB, framed 16:9 or 9:16, and run 1 to 12 minutes. For
> softlines products, a listing with six or more images has its video suppressed on
> desktop.
> Source: Amazon Seller Central help, Shoppable video guide, US store, read 10 September 2026, page undated. https://sellercentral.amazon.com/help/hub/reference/external/GWJRQF3C34G4PRA2 A primary reading of Amazon's help article, scoped to the US store.

**Why the Tmall and JD numbers cannot be checked, reused verbatim from brief 01.**

> The two platform rule centres a buyer would check are published at public web
> addresses and serve no rule text without a seller session. On 10 September
> 2026 the Tmall rule centre redirected twice and returned no rule body, and
> two different JD merchant rule pages returned the rule-centre heading and
> nothing else.
> Source: direct unauthenticated fetches of rule.tmall.com and rule.jd.com, 10 September 2026, four requests across two platforms, redirect chain and response body recorded.

(American spelling on the page: "centers", "center", as brief 02's R8 did.)

**One square set serves both China marketplaces, reused verbatim from brief 10.**

> On the published record, Tmall and JD main images match. The most commonly
> published Tmall main image is a 1:1 square at 800 by 800 pixels, on 12 of 18
> sources for the ratio and 14 of 18 for the size. For JD, 6 of 6 pages give 1:1
> and 9 of 10 give an 800 by 800 floor. What changes is order: every page that
> names a slot puts the white-background image fifth on Tmall and first on JD.
> Source: tmall-product-image-requirements.md (18 domains) and jd-image-requirements-vs-tmall.md (24 pages; slot row 5 of 5 per platform), both collected 10 September 2026. Modal values with counts kept per collection, not primary readings.

**The white-background image as its own deliverable, reused verbatim from brief 02.**

> Tmall's white-background image is published as a deliverable in its own
> right, not as a styled main image dropped onto white. Fourteen of fifteen
> Chinese-language sources that address it give it a rule set separate from the
> other main images. Ten of fifteen place it in the fifth slot in general
> categories, as do eight of eighteen sources in a wider Tmall image collection.
> Source: fifteen independent published sources on the white-background image, fourteen Chinese-language and one English-language, collected 10 September 2026, counted by domain, with a separate eighteen-source Tmall image collection from the same date. Modal values with their agreement counts, not a reading from the platform.

**What the white-background image forbids, reused verbatim from brief 02.**

> The prohibitions are the most consistent part of the published record. Nine
> of fifteen sources rule out text, watermarks, logos and promotional overlay.
> Seven rule out a model, six rule out shadows, six rule out spliced composites,
> and five rule out hangers, mannequins and tags. One extends the model ban to
> any body part at all, hands, feet, legs or a head.
> Source: fifteen independent published sources, Chinese-language first, collected 10 September 2026, counted by domain for each prohibited element. Modal positions with their agreement counts, not a reading from the platform.

**The Tmall main image prohibition list, reused verbatim from brief 01.**

> Eleven of eighteen sources publish the same prohibition list for main images:
> no watermarks, no borders, no spliced composites, no promotional overlay
> text, no QR codes, no third-party logos, and no model or body part in the
> white-background slot. They do not agree on how much overlay text is
> tolerable elsewhere, where the published caps sit at 15 percent and 30
> percent of frame area on one source each.
> Source: eighteen independent published specifications collected 10 September 2026, Chinese-language first, counted by domain. Modal position with its agreement count, not a reading from the platform.

**JD does not need its own detail page, reused verbatim from brief 04.**

> The detail-page width difference between the two platforms may not exist.
> Across the pages that publish a JD desktop detail width, the figure appears
> as 647, 750, 790, 990 and 1000 pixels. The most common is 790, carried by
> five of nine. The most common Tmall desktop figure is also 790, and the pages
> that publish both platforms usually publish the same pair for both, 790
> desktop and 750 mobile.
> Source: 9 published pages carrying a JD detail width and 6 carrying a Tmall detail width, Chinese-language, collected 10 September 2026, values counted rather than averaged. Modal value, not a primary reading.

**Tmall and JD listing video, lifted with counts.**

> The most commonly published Tmall listing video is a 1:1 square MP4 of up to
> 50MB, on 3 of 18 sources, the three that address video at all. JD pages give
> 1:1 or 3:4 on 3 of 4, and a 15 to 60 second window on 3 of 5. Tmall's most
> published length is a 9 to 30 second recommendation, on 2 of 18.
> Source: tmall-product-image-requirements.md (18 domains) and jd-image-requirements-vs-tmall.md (24 pages), both collected 10 September 2026. Modal values with counts kept per collection, not primary readings.

**Derived: the white image carries over, with conditions.**

> An Amazon main image and the Tmall and JD white-background image are close to
> the same picture, but they do not sit in the same place. Amazon's pure white main
> image comes first on the listing. JD's white image is its first carousel image and
> Tmall's is its fifth, on 5 of 5 pages per platform. Amazon and the most commonly
> published Tmall rules agree on a white ground, the whole product, one view and no
> mannequin. Tmall's rules also bar shadows, on 6 of 15 sources, and models, on 7 of
> 15. Amazon's guide does not mention shadows and mentions models only for clothing.
> A shadowless, front-view Amazon main image can be re-exported to both. One with a
> shadow needs a retouch.
> Source: derived 10 September 2026 from Amazon's Product image guide (US store, primary reading), tmall-white-background-image-rules.md (15 domains) and jd-image-requirements-vs-tmall.md (24 pages; slot row 5 of 5 per platform), China figures collected 10 September 2026. Counts kept per collection; the re-export conclusion is reasoning, not a platform rule.

**Derived: clothing and footwear need their own white frame.**

> Two Amazon categories cannot reuse their main image as the China white-background
> image. Amazon puts adult clothing on a standing model and shows footwear as one
> shoe at a 45-degree angle. The most commonly published Tmall white-background
> rules bar models, on 7 of 15 sources, and call for a front view, on 4 of 15. Those
> products need a separate white-background frame on the shoot day.
> Source: derived 10 September 2026 from Amazon's Product image guide (US store, primary reading) and tmall-white-background-image-rules.md (15 domains, collected 10 September 2026). Modal Tmall values with counts; the separate-frame conclusion is reasoning, not a platform rule.

**Derived: fill pulls the builds apart.**

> Fill is the main image number that pulls the builds apart. Amazon's guide says
> the product should take up 85 percent of the image. Tmall white-background
> guidance published in 2026 gives 70 to 80 percent, on 3 of 15 sources, while pages
> dated 2017 to 2024 say fill the frame, on 5 of 15. JD pages publish no fill figure,
> 0 of 24. Framing with white to spare and cropping tighter for Amazon keeps both
> readings available from one frame.
> Source: derived 10 September 2026 from Amazon's Product image guide (US store, primary reading), tmall-white-background-image-rules.md (15 domains) and jd-image-requirements-vs-tmall.md (24 pages), China figures collected 10 September 2026. Contested on the Tmall side; a framing practice drawn from the spread, not a platform rule.

**Derived: additional images.**

> Amazon leaves its additional images more room than Tmall does. Amazon's guide
> scopes its text rule to swatch images, and an Amazon moderator's 2026 guidance
> invites size comparisons and usage instructions. Tmall's most commonly published
> main image rules, on 11 of 18 sources, bar watermarks, borders, spliced composites,
> promotional overlay text, QR codes and third-party logos. Clean photographs move
> to Tmall with a square crop. Slides built on text and composites need a re-edit
> first.
> Source: derived 10 September 2026 from Amazon's Product image guide (US store, primary reading), an Amazon moderator's seller forum post (February 2026, scoped to that post) and tmall-product-image-requirements.md (18 domains, prohibition list on 11 of 18, collected 10 September 2026). The re-edit conclusion is reasoning, not a platform rule.

**Derived: one export setting for the China main images.**

> One export setting clears every published Tmall and JD main image weight. The
> most commonly published figures run from a 3MB Tmall cap down to a 500KB Tmall
> recommendation, and JD pages give 500KB or 1MB. A main image under 500KB sits
> inside all of them. Amazon asks for the opposite at upload: files saved with
> minimal or no compression.
> Source: derived 10 September 2026 from Amazon's Technical image file requirements help article (US store, primary reading), tmall-product-image-requirements.md (3MB cap on 6 of 18, 500KB recommendation on 3 of 18) and jd-image-requirements-vs-tmall.md (JD 1MB on 4 of 6 and 500KB on 2 of 6; Tmall 500KB on 4 of 6 and 3MB on 2 of 6), China figures collected 10 September 2026. Arithmetic on published figures, counts kept per collection, not a platform rule.

**Derived: video shares footage, not a file.**

> The Amazon video and the Tmall and JD video share footage, not a file. Amazon's
> guide asks for 16:9 or 9:16 at 1 to 12 minutes and up to 5 GB. The most commonly
> published Tmall listing video is a 1:1 square under 50MB, on 3 of 18 sources, and
> JD pages give 1:1 or 3:4, on 3 of 4. A square cut of 15 to 30 seconds sits inside
> Tmall's most published recommendation and JD's most published window, and below
> Amazon's one-minute floor. One shoot, two edits.
> Source: derived 10 September 2026 from Amazon's Shoppable video guide (US store, primary reading), tmall-product-image-requirements.md (1:1 and 50MB on 3 of 18; 9 to 30 seconds on 2 of 18, contested) and jd-image-requirements-vs-tmall.md (1:1 or 3:4 on 3 of 4; 15 to 60 seconds on 3 of 5, contested), China figures collected 10 September 2026. The window is arithmetic on contested inputs, not a platform rule.

**Derived: A+ against the China detail page.**

> An A+ build does not re-export to Tmall or JD as a page. Amazon's guide caps it
> at five modules with 970 by 300 pixel images, or seven with 1464 by 600 on Premium.
> The most commonly published Tmall detail page is a long scrolling page built
> twice, 790 pixels wide for desktop and 750 for mobile, on 5 of 18 sources each,
> and JD's published widths show no real difference from Tmall's. The A+ photography
> carries over as raw material. The page is rebuilt, once, for both China
> marketplaces.
> Source: derived 10 September 2026 from Amazon's A+ Content guide (US store, primary reading), tmall-product-image-requirements.md (18 domains), jd-image-requirements-vs-tmall.md (24 pages; JD desktop 790 on 5 of 9, the split called a sourcing artifact) and china-ecommerce-content-pack.md (8 production references, taxonomy only), China figures collected 10 September 2026. Counts kept per collection; the rebuild conclusion is reasoning, not a platform rule, and one build should be confirmed in both seller backends.

**Derived: the capture plan.**

> One shoot day can feed all three listings from four set-ups. A shadowless
> white-background set-up gives Amazon's main image and the Tmall and JD
> white-background image. Text-free styled stills, framed so a centered square
> survives, give Amazon's additional images and both China carousels. A separate
> set of frames feeds the A+ modules and the China detail page, because Amazon does
> not want A+ to duplicate the gallery. One video master gives the Amazon edit and a
> square China cut. Clothing, footwear and labeled categories add their own frames.
> Source: derived 10 September 2026 from Amazon's Product image guide, A+ Content guide and Shoppable video guide (US store, primary readings) and tmall-product-image-requirements.md, tmall-white-background-image-rules.md, jd-image-requirements-vs-tmall.md and one-shoot-six-platforms-china-variant-matrix.md (collected 10 September 2026). A production plan built from published figures, not a platform requirement.

**The absence.**

> Six buyer searches in English and Chinese returned 42 results, and none set
> Amazon's image rules beside counted Tmall and JD values or said which assets
> carry over. Sixteen of the 29 English results answered for Amazon alone. The
> English search for using Amazon images on Tmall returned pages about whether
> affiliates may copy Amazon's own product photos.
> Source: six queries run 10 and 14 September 2026, four English and two Chinese, every result classified by page type and by what it answered. Stated as an absence, with the search dates.

**hubStudio's published mix, first-party exception only.**

> hubStudio publishes that most of its ecommerce catalogs run about 70 percent
> generated and 30 percent shot.
> Source: hubStudio's ecommerce design service page (src/pages/services/design/ecommerce.astro), read 10 September 2026. A published first-party delivery mix run under the 2026-09-09 first-party exception, attributed to that page, not a measurement with a stated sample or period.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any Tmall or JD value described as verified, official, required, confirmed or read from a platform** | Every Tmall and JD row is a modal count from a sibling file (deviation 7) |
| **Any Amazon value applied beyond the US store, or to a category the article hands to another guide** | Each help article says it applies to selling in the United States. Clothing and multipack detail sits in guides not read here |
| **"Amazon's help pages are behind a login", or any wording implying Amazon rows are unverified** | They render for a logged-out browser. The brief 27 ledger row was a fetch artifact |
| **Any carry-over cell, export preset, duration window or capture set-up presented as a platform rule** | Derived. Label it derived in the blockquote, the body copy and any table caption |
| **Counts added across collections** ("26 sources say 1:1") | Pools overlap and use different units |
| **Amazon "72 dpi"** (A-IMG, A-APLUS) | Printed by Amazon, but dpi is meaningless for a screen image at a fixed pixel size; the cluster cuts dpi everywhere for the same reason (Tmall, RedNote) |
| **The 23.8 percent video sales lift** | "Amazon internal historical data, January through June 2024": no sample, no method, published by the seller of the feature. R5 market claim |
| **A+ sales lifts of "up to 8%" and "up to 20%", or "potentially increase sales by 8%"** | Same failure, A-BLOG3 and A-PDF23 |
| **Any pixel arithmetic on Amazon's 85 percent fill** | Neither current Amazon page says whether fill is area or width and height |
| **"Tmall rejects an 85 percent fill"**, or any rejection claim on fill | Not published anywhere in the cluster |
| **An extended white canvas described as acceptable on Tmall** | Tmall bars borders (T1 11 of 18); no source says whether white padding counts |
| **Any China detail page content ban mirroring A+** (no pricing, warranty or shipping) | No sibling file counts a China detail page content rule |
| **A reuse percentage, time saving or cost saving from cross-marketplace reuse** | None found on 34 results; no further search was possible. Publish the absence |
| **The Amazon synthetic-performer rule with a "July 2026" effective date** | The rule text was read at source on 2026-09-10; no date is on the page |
| **The Tmall file cap, Tmall fill ratio or JD detail split as settled; any JD fill ratio; a Tmall Global delta** | Carried hard blocks from T1, T2 and J |
| **The Amazon, Tmall and title-length figures on hubStudio's ecommerce design service page** ("2,000 pixels for zoom", "fifteen to thirty seconds for Amazon", "800 by 800 mains, 750 by 1,000 verticals, white slot under 300 kilobytes", "Titles inside 200 characters") | Ledger-flagged, and two now conflict with Amazon's own help articles. Reference the page by name only. Logged for the site backlog |
| **hubStudio platform page counters** ("48h brief to first cut", "50+" or "60+" variants per concept) | First-party, but not ledger delivery figures, no method, and 50 against 60 across three pages |
| **hubStudio ecommerce page lead times** (about two weeks, three to four weeks, four to six weeks) | First-party, not a ledger delivery figure, no method. A candidate for the ledger's delivery table |
| **Allocation of AI-labeling duties between brand, agency and tool** | Ledger hard block 2, if the writer touches disclosure |
| **Any hubStudio rate, per-asset price or monthly figure** | Standing rule |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| Amazon images capped at 10MB; 2000 by 2000 recommended; "7 or more images: 1 main, 3 lifestyle, 2 detail, 1 comparison"; photos lift conversion "up to 30%" | Search extracts from vendor and agency pages on queries 1 and 4 | None appears on Amazon's help articles; the conversion figure has no study |
| Amazon main image 500 by 500 under 1MB; JD needs six main images; Tmall 750 by 1000 and 800 by 1200 image types | The Chinese search summary on query 5 | Uncounted summary claims; the Amazon figure contradicts A-IMG, the JD figure contradicts J's modal 5 |
| Amazon main image "required" at 1000 by 1000 pixels | The Chinese search summary on query 6, 2026-09-14 | Uncounted summary claim; A-IMG gives 500 to 10,000 on the longest side with 1,000 or more enabling zoom, and states no square requirement |
| A+ per-module image sizes (300 by 300, 200 by 200, 150 by 300, 400 by 400, 350 by 175, 135 by 135) | Amazon-hosted A+ standard module template PDF | No date and no marketplace printed. A source with no date is not a source |
| A+ images of 970 by 600 | Seller forum threads and a search summary | Seller-written, contradicted by A-APLUS (970 x 300, 1464 x 600) |
| Amazon video usable "across global Amazon stores" | A-BLOG2, May 2025 | Contradicted by A-VID (US-Canada sync only) |
| Premium A+ gated by "eligibility criteria" | A-BLOG3, Sep 2025 | Contradicted by A-APLUS |
| "Optimal is 1600+ pixels" as an Amazon rule | A-FORUM | A moderator's advice, absent from A-IMG |
| "At least 1,000 dpi" and "at least 80 percent" | A-AU18, 2018, Australia | Unit error, eight years old, another store |
| Tmall encourages padding images with white stripes and a logo | A developer tutorial ranking on query 2 | Failed in brief 01 against 11 of 18 sources; do not repeat it and do not correct it by name |
| Whether a brand may reuse Amazon images on Tmall under Amazon's licence terms | Affiliate plugin pages on query 3 | Answers the affiliate question, not a brand reusing its own assets |

### Quarantined domains

Sibling quarantine lists stand. These surfaced in this brief's SERP map. None may
be named, linked, described or alluded to on the page.

| Domain | What it published | Why quarantined |
|---|---|---|
| bebolddigital.com, ecfotos.com, salesduo.com, pattern.com, manypixels.co, gobrandwoven.com, squareshot.com, searchxpro.com, lab916.com, chinalhcz.com | Amazon image guides, marketplace comparisons, a Chinese size page | Agencies, studios and a design subscription. Standing rule |
| eva.guru, junglescout.com, gotrellis.com, pixelpanda.ai, getlasso.co, getaawp.com, wptasty.com, azonpress.com, affpilot.com, secaiyun.com | Amazon guides, affiliate image licensing, a Chinese size table | Software and tool vendors; secaiyun.com already quarantined in J |
| linkedin.com (pulse article), freecodecamp.org, blog.csdn.net, zhihu.com, mmker.cn, educardz.com | Personal article, tutorial, community and SEO pages | Self-published; the tutorial and the 2018 CSDN post already failed in siblings |
| scmp.com, forbes.com, slashdot.org, influencermarketinghub.com | News, a contributor column, a software directory, a media guide | No image rule, or Amazon only |
| wise.com | Affiliate image licensing | Off question |
| canva.cn, hupun.com, tukeli.net, en.dtlgz.com, matting.deeplor.com | Size pages, an Amazon white-image article, cutout and downloader tool pages (query 6, 2026-09-14) | Software and tool vendors. Standing rule |
| wearesellers.com | Seller community post on Amazon images (query 6, 2026-09-14) | Self-published seller opinion |
| sellercentral.amazon.com seller forum threads other than the moderator post | Seller opinion on sizes and A+ | Seller-written; Amazon is named as the platform, the threads are not cited |

## Screenshot inventory

Eight files captured for this brief. Saved to
`research/amazon-tmall-jd-one-product-three-listings/`. Captured in a logged-out
headless Chromium browser (Playwright), viewport 1280 wide, locale en-US, no
cookies. Screenshots total about 3.1 MB.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| amazon-help-product-image-guide-2026-09-10.png and .txt | Full Product image guide: "applies to selling in: United States", MAIN rules, specification table, variant codes, AI-generated people tag | 2026-09-10T08:47:40Z | sellercentral.amazon.com/help/hub/reference/external/G1881 |
| amazon-help-technical-image-file-requirements-2026-09-10.png and .txt | Color mode table, refused formats, compression guidance | 2026-09-10T08:47:49Z | .../external/G9FUUH87RBNXGKB7 |
| amazon-help-a-plus-content-guide-2026-09-10.png and .txt | Basic against Premium table (970 x 300, 1464 x 600, 5 and 7 modules), technical requirements, acceptable and not acceptable lists | 2026-09-10T08:47:58Z | .../external/GLG4RQK2Y2RJADU4 |
| amazon-help-shoppable-video-guide-2026-09-10.png and .txt | Video file requirements (16 x 9, 9 x 16, 1-12 minutes, 5 GB), softlines six-image suppression, review times | 2026-09-10T08:48:07Z | .../external/GWJRQF3C34G4PRA2 |
| amazon-product-image-guide-2026-09-14.txt, amazon-technical-image-file-requirements-2026-09-14.txt, amazon-a-plus-content-guide-2026-09-14.txt, amazon-shoppable-video-guide-2026-09-14.txt | Source check 2: the four help articles re-rendered at draft time, body text only, every quoted string confirmed present | 2026-09-14 | The four help URLs above, logged-out headless Chromium |
| amazon-forum-moderator-post-2026-09-14.txt | Source check 2 on A-FORUM: RGB 255, 255, 255; 85-100%; 1000 pixels; watermarks, all present | 2026-09-14 | sellercentral.amazon.com/seller-forums/discussions/t/0149bdb3-2056-42ce-b0bb-9eef94e3d2b8 |

Not captured, and worth taking. None needs a seller login except the last two.

| File | What it shows | Rows it upgrades | Source surface |
|---|---|---|---|
| amazon-listing-media-block-YYYY-MM-DD.png | One live US listing showing MAIN on white, the additional image strip and where the video sits | How the recommended six plus one video renders | amazon.com, no login |
| tmall-jd-carousel-same-set-YYYY-MM-DD.png | The same square set and white image live on a Tmall and a JD listing | The fifth against first slot (J), inherited from brief 10's inventory | Live Tmall and JD apps, no login |
| amazon-a-plus-and-tmall-detail-mobile-YYYY-MM-DD.png | An A+ section and a Tmall mobile detail page for comparable products, side by side on one phone | The A+ against detail page contrast as rendered | Live apps, no login |
| qianniu-and-jingmai-image-panels-YYYY-MM-DD.png | Both China seller backends' image and video upload panels | Every modal Tmall and JD row | Seller sessions required |
| qianniu-and-jingmai-detail-editors-YYYY-MM-DD.png | Both detail editors | Whether one China detail build serves both | Seller sessions required |

## Ledger rows to append

Proposed block for `sources/verified-sources.md`, in its table format. The
orchestrator appends; this file does not edit the ledger.

### Amazon listing rules and three-marketplace carry-over (added 2026-09-10, brief 31)

Amazon rows are primary readings of Seller Central help articles for the US
store, rendered in a logged-out browser and captured to
`research/amazon-tmall-jd-one-product-three-listings/`. No Tmall or JD value is
new: every China figure used by brief 31 is already logged under briefs 01, 02,
04, 10 and 28 and is not re-counted. **This block corrects two brief 27 rows** (see
the notes after the table).

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Four Seller Central help articles serve full text to a logged-out browser; a plain HTTP fetch returns a 167,309 to 167,319 byte application shell with no article text | "direct fetches and a logged-out browser render of four Amazon Seller Central help articles, 10 September 2026, response size and body text recorded" | sellercentral.amazon.com/help/hub/reference/external/G1881, G9FUUH87RBNXGKB7, GLG4RQK2Y2RJADU4, GWJRQF3C34G4PRA2 | 2026-09-10 | primary, an observation about access | 2026-09-10 | 2026-09-14 | 31 |
| MAIN image: pure white RGB 255, 255, 255; "Show the product as 85% of the image"; entire product; shown once; one unit; no props not included; no part of a mannequin; packaging only as a feature | "Amazon's Seller Central Product image guide, US store, read 10 September 2026, page undated" | .../external/G1881 | read 2026-09-10 | primary, US store | 2026-09-10 | 2026-09-14 | 31 |
| Product image files: JPEG, TIFF, PNG or non-animated GIF, JPEG recommended; 500 to 10,000 pixels on the longest side; 1,000 or more enables zoom; RGB preferred; one compliant main image required, six additional images and one video recommended; no aspect ratio, file cap or maximum count stated | Same attribution | .../external/G1881 | read 2026-09-10 | primary, US store, absences read in full | 2026-09-10 | 2026-09-14 | 31 |
| MAIN by category: adult clothing on a standing model; footwear a single shoe facing left at 45 degrees; clothing accessories and multipacks flat without a model | Same attribution | .../external/G1881 | read 2026-09-10 | primary, category-scoped | 2026-09-10 | 2026-09-14 | 31 |
| All product images: no customer reviews, five-star imagery, claims or selling partner information; text and pricing rule scoped to swatch images; no Amazon logos, trademarks or badges; photorealistic fully AI-generated people tagged contains-synthetic-performer in dc:subject (XMP) | Same attribution | .../external/G1881 | read 2026-09-10 | primary, no effective date on the page | 2026-09-10 | 2026-09-14 | 27, 31 |
| Minimal or no compression; JPEG at highest quality; no TIFF compression; remove layers; CMYK converted to RGB; EPS, BMP, PDF and application files such as PSD refused | "Amazon's Seller Central Technical image file requirements, US store, read 10 September 2026, page undated" | .../external/G9FUUH87RBNXGKB7 | read 2026-09-10 | primary, US store | 2026-09-10 | 2026-09-14 | 31 |
| A+ Basic: 970 x 300 images, 5 modules, 14 to choose from, no video. Premium: 1464 x 600, 7 modules, 19 to choose from, video, hotspots, carousel. Brand story up to 19 cards. Files .jpg, .bmp, .png, RGB, under 2 MB. No GIFs, HTML, CMYK, watermarks, QR codes or hyperlinks. Not acceptable: pricing or promotional language, time-sensitive references, warranty and guarantee information, shipping details, external links or contact information, gallery duplicates. Review up to seven business days. No added cost or eligibility for Premium | "Amazon's Seller Central A+ Content guide, US store, read 10 September 2026, page undated" | .../external/GLG4RQK2Y2RJADU4 | read 2026-09-10 | primary, US store | 2026-09-10 | 2026-09-14 | 31 |
| Shoppable video: MOV or MP4; 5 GB; up to 1080p; 16 x 9 or 9 x 16; 1 to 12 minutes; thumbnail JPEG, PNG, GIF or BMP under 5 MB; account active more than three months; softlines listings with six or more images have the video suppressed on desktop; US-Canada shared listings sync, no other marketplace sharing; review 1 to 7 business days | "Amazon's Seller Central Shoppable video guide, US store, read 10 September 2026, page undated" | .../external/GWJRQF3C34G4PRA2 | read 2026-09-10 | primary, US store | 2026-09-10 | 2026-09-14 | 31 |
| Amazon fill restated as "85% or more of the frame" (Dec 2024), "85-100%" (Feb 2026, moderator) and "at least 80 percent of the image area" (2018, Australia) | "Amazon-owned seller surfaces, dated as shown, read 10 September 2026, spread reported against the help article" | sell.amazon.com/blog/product-photos; sellercentral.amazon.com/seller-forums/discussions/t/0149bdb3-2056-42ce-b0bb-9eef94e3d2b8; m.media-amazon.com/images/G/01/rainier/help/Selling_on_Amazon_Quick_Start_Style_Guide_2018.pdf | 2018 to 2026 | supporting, for the conflict only | 2026-09-10 | 2026-09-14 | 31 |
| Derived carry-over: a shadowless, front-view Amazon MAIN re-exports as the Tmall and JD white-background image; adult clothing and footwear need a new white frame; clean additional images re-crop to the China carousels; text and composite slides re-edit; video needs two edits from one footage, the China cut at 15 to 30 seconds; A+ is rebuilt as one China detail page for both marketplaces; China mains exported under 500KB clear every published weight | "derived from Amazon's Seller Central help articles (US store) and the Tmall, JD and variant collections, 10 September 2026, reasoning not a platform rule" | research/amazon-tmall-jd-one-product-three-listings.md | 2026-09-10 | derived | 2026-09-10 | 2026-09-14 | 31 |
| One capture day, four core set-ups: shadowless white background, text-free square-safe stills, A+ and detail page frames kept out of the gallery, one video master; category extras for clothing, footwear and labels | Same derived attribution | Same file | 2026-09-10 | derived | 2026-09-10 | 2026-09-14 | 31 |
| Search-results audit: six buyer phrasings (four English, two Chinese), 42 results, 27 from companies with a commercial interest, 0 setting Amazon beside counted Tmall and JD values, 0 separating carry-over from rebuild; 16 of 29 English results answer Amazon alone; the English reuse phrasing returns affiliate licensing pages | "search-results audit run 10 and 14 September 2026 across six buyer phrasings, publisher type recorded for every result, no domain named" | R2 in the research file | 2026-09-10, extended 2026-09-14 | primary observation, re-countable | 2026-09-10 | 2026-09-14 | 31 |

**Corrections to existing rows.**

1. Do-not-publish row "Amazon main image spec: professional photograph, no mockups,
   RGB 255, 85 percent fill" (brief 27): the reason "primary page is behind seller
   login" no longer holds. RGB 255 and 85 percent are now primary (G1881). "No
   mockups" is still not Amazon's wording: the guide says "realistic,
   professional-quality image" and "No placeholders".
2. Do-not-publish row "Amazon contains-synthetic-performer metadata rule, July 2026"
   (brief 27): the rule text is now read at source (G1881, GWJRQF3C34G4PRA2,
   GLG4RQK2Y2RJADU4). The July 2026 date is still unverified; no date is on the pages.
3. Section "Platform specs already on the site": the Amazon "RGB 255" figure now
   matches G1881. "2,000px" does not appear on any Amazon page read (1,000 or more
   enables zoom). The ecommerce page's "fifteen to thirty seconds for Amazon" video
   line conflicts with G1881's companion video guide (1 to 12 minutes).
4. Brief 28's failed-bar row "Amazon image counts and A+ module counts": A+ module
   counts are now primary (GLG4RQK2Y2RJADU4); Amazon publishes a recommended image
   count and no maximum (G1881).

### Do not publish, added from brief 31

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| Videos lift sales 23.8 percent | Amazon's Shoppable video guide, "Amazon internal historical data, January through June 2024" | No sample, no method, published by the seller of the feature | 2026-09-10 |
| A+ lifts sales up to 8 percent, Premium up to 20 percent | Amazon's A+ design guide blog (Sep 2025) and A+ best practices PDF (Mar 2023) | Same failure | 2026-09-10 |
| Amazon 72 dpi | Amazon's Product image guide and A+ Content guide | Printed by Amazon, meaningless for a fixed-pixel screen image; the cluster cuts dpi everywhere | 2026-09-10 |
| Amazon 10MB image cap, 2000 by 2000 recommended, a seven-image recipe, a 30 percent conversion lift | Search extracts from vendor and agency pages, brief 31 | Absent from Amazon's help articles; no study behind the conversion figure | 2026-09-10 |
| Amazon main image 500 by 500 under 1MB; JD six main images | A Chinese search summary, brief 31 | Uncounted, contradicted by G1881 and by J's modal 5 | 2026-09-10 |
| A+ per-module sizes from Amazon's standard module template PDF; A+ images at 970 by 600 | Undated Amazon-hosted PDF; seller forum threads | No date or marketplace printed; seller-written and contradicted by the A+ Content guide | 2026-09-10 |
| Amazon video usable across global Amazon stores; Premium A+ gated by eligibility criteria | Amazon seller blog posts, May and September 2025 | Contradicted by the help articles | 2026-09-10 |
| hubStudio ecommerce page "2,000 pixels for zoom" and "fifteen to thirty seconds for Amazon" | hubStudio site copy | Conflict with Amazon's help articles; site backlog item, never quoted | 2026-09-10 |
| hubStudio platform page counters "48h brief to first cut", "50+" and "60+" variants per concept | hubStudio site copy, Amazon, JD and Tmall platform pages | Not ledger delivery figures, no method, inconsistent across pages | 2026-09-10 |
| Any cross-marketplace reuse percentage or saving | Brief 31 SERP | None published on 34 results | 2026-09-10 |

## Notes for the writer

**Outline, mapped to the brief's must-includes, about 1,600 words.**

| Section | Carries | Cleared quotes used |
|---|---|---|
| H1, kept: "Amazon, Tmall, JD: one product, three listing builds" | The target query in the buyer's words | none |
| Opening answer, 40 to 60 words, naming hubStudio once | Some assets re-export, some re-crop, the video and the detail page are rebuilt, one shoot feeds all three | none; body text only |
| How to read these numbers | SPEC.md disclaimer, marketplace form, NN written as three collections of 18, 15 and 24 sources collected 10 September 2026, never summed; then the readable-page paragraph below | The readable Amazon pages; the rule centres |
| Main image rules side by side (**must-include 1**) | Table, rows Background, Fill, Size, Count, Format, Video; columns Spec, Amazon, Tmall, JD (four columns). Counts in the Tmall and JD cells | Amazon's main image; What Amazon does not set; One square set; Tmall and JD listing video; Amazon video |
| Does the Amazon main image work on Tmall and JD | The white image, the slot difference, the conditions, clothing and footwear, fill | White-background image as its own deliverable; What it forbids; Derived white image; Derived clothing and footwear; Derived fill |
| What carries over (**must-include 2**) | Carry-over table: Amazon asset, Tmall, JD, with the cell type inside each cell (three or four columns) | Derived additional images; Derived export setting; Derived video |
| A+ against the Tmall and JD detail page (**must-include 3**) | Module system against long-scroll page built twice; one China build | A+ modules; A+ content rules; JD detail width; Derived A+ |
| One capture plan (**must-include 4**) | Capture plan table: set-up, Amazon, Tmall and JD, constraint (four columns) | Derived capture plan; optionally hubStudio's published mix |
| FAQ, the brief's five questions | Can I use Amazon images on Tmall (derived white image plus additional images); difference between Amazon and Tmall main images (main image quotes); does JD accept the same images as Tmall (one square set); is A+ the same as a Tmall detail page (derived A+); how do I shoot one product for all three (derived capture plan) | as listed |
| CTA | "Plan a three-marketplace build" | none |

**The readable-page paragraph, ready to paste after the disclaimer block.** Every
fact in it is in the claims table.

> Amazon is the exception. Its Seller Central help center serves its rules to
> logged-out readers, and four articles were read on 10 September 2026: the Product
> image guide, Technical image file requirements, the A+ Content guide and the
> Shoppable video guide. Each says it applies to selling in the United States, and
> none prints a date. Amazon rows on this page are primary readings for the US store
> only.

(Written as body copy, not a statistics blockquote; the Source line is optional
here because the paragraph restates the first cleared quote.)

**Must-includes that cannot be met.** None. All four are met from cleared rows.

**The slot requirement cannot be met.** The brief asks for "one number from
hubStudio's delivery record with its method stated". No delivery figure in the
ledger carries a method. The 70/30 mix may run only under the first-party exception,
attributed to the ecommerce design service page, with its missing sample and period
in the Source line. Note the gap in the run log.

**H1, title and meta.** No change needed. The meta ("which images carry over, which
need rebuilding, and one capture plan that serves all three marketplaces") is
accurate on this evidence. The brief's "Confidence handling" line assumed readable
Amazon help pages, and that holds.

**Traps.**

1. Write "Amazon's guide says the product should take up 85 percent of the image",
   never "at least 85 percent", which is the blog's wording, not the rule text.
2. Never write that Amazon bans text on additional images. Its text rule is scoped to
   swatch images.
3. Never write that A+ bans text in images. The rule text refuses small, unreadable
   text; only the blog says to avoid it.
4. The 15 to 30 second China cut is arithmetic on contested inputs. Say so.
5. The six-image video suppression is softlines and desktop only.
6. The ecommerce design service page contradicts Amazon on zoom size and video length.
   Do not correct it in the article and do not quote it. It is a site backlog item.
7. Romanize any Chinese term (deviation 6). No Han characters anywhere on the page.
8. Say "one China detail page for both marketplaces, confirmed in both seller
   backends", never "JD and Tmall use the same detail page".

**Optional, if length allows.** Amazon asks for a contains-synthetic-performer
metadata tag on images of fully AI-generated people (G1881). China's labeling
measures require an explicit label and an implicit metadata label (ledger, CAC
Measures row). A generated image headed for all three builds therefore carries two
different disclosure treatments. If used, attribute both, and keep ledger hard block
2: write "generally treated as" for who carries the duty.

**Internal link targets, verified in `src/pages`.**

| Target | Path in the repo | Use |
|---|---|---|
| Amazon platform page | src/pages/solutions/platforms/amazon.astro | Brief link, plain-text name |
| Tmall platform page | src/pages/solutions/platforms/tmall.astro | Brief link |
| JD platform page | src/pages/solutions/platforms/jd.astro | Brief link |
| Ecommerce design service page | src/pages/services/design/ecommerce.astro | Brief link, service page; name only, no figures lifted |
| Tmall product image requirements | src/pages/resources/insights/tmall-product-image-requirements.astro | Cluster link for the Tmall rows |
| Tmall white-background image rules | src/pages/resources/insights/tmall-white-background-image-rules.astro | Cluster link for the white image section |
| JD image requirements against Tmall | src/pages/resources/insights/jd-image-requirements-vs-tmall.astro | Cluster link for the JD rows and the one-build point |
| One shoot, six platforms | src/pages/resources/insights/one-shoot-six-platforms-china-variant-matrix.astro | Cluster link for the capture plan and cell types |
| China ecommerce content pack | src/pages/resources/insights/china-ecommerce-content-pack.astro | Cluster link for the listing taxonomy |
| Product photography cost per SKU | src/pages/resources/insights/product-photography-cost-per-sku.astro | Optional, next to the capture plan; lift no figure from it |

**Distribution.** File under the same category as the sibling spec articles
(Platform specs), which reaches the ecommerce and social media design service page
insights layers and the home page. Check the category against
`src/data/insight-placements.ts` at publish.

## R8. Reconciliation (filled after drafting)

Done 2026-09-14 against `output/amazon-tmall-jd-one-product-three-listings.md`
after createarticle iteration 8. Every numeric token in the body (frontmatter
and HTML comments excluded) was extracted by script and checked against the
tables above.

**Source check 2, 2026-09-14.** The four Seller Central help articles and the
moderator forum post were re-rendered in a logged-out headless Chromium browser
and the body text saved to `research/amazon-tmall-jd-one-product-three-listings/`
with the date in the filename. Every string quoted on the page was present:
"255, 255, 255", "Show the product as 85% of the image", "10,000 pixels",
"1,000+ pixels", "six additional images", "45-degree",
"contains-synthetic-performer", "minimal or no compression", "970", "1464",
"2 MB", "seven business days", "no additional eligibility", "5 GB", "1080p",
"12 minutes", "9 x 16", "six or more images", "US-Canada", and on the forum post
"85-100%", "1000 pixels", "watermarks". A-BLOG1 was re-fetched the same day and
still reads "85% or more of the frame", "500 to 10,000 pixels on their longest
side", "at least six", dated Dec 4, 2024. Both rule centers were re-fetched:
rule.tmall.com/tdetail-11423.htm still redirects twice to rulechannel.tmall.com
and returns no rule body (1,768 bytes); rule.jd.com/rule/ruleDetail.action still
returns 1,393 bytes carrying the heading only. The Tmall and JD counts on the
page are lifted from the sibling files and were not re-counted, per the method
statement; each was checked against its ledger block (briefs 01, 02, 04, 10)
and matched.

**Every number on the page, where it comes from.**

| On the page | Claims row |
|---|---|
| Three collections of 18, 15 and 24 sources; 10 September 2026; reviewed 14 September 2026 | Method statement; T1, T2, J; this reconciliation |
| Four help articles read 10 September and again 14 September, US store, undated | Amazon claims rows 1 to 2; check 2 above |
| Rule centers: redirected twice, no rule body; two JD rule ids, heading only; four requests | Tmall and JD claims row 1 (brief 28) |
| RGB 255, 255, 255; 85 percent; 500 to 10,000; 1,000 or more for zoom; no ratio, no file cap, no maximum; one main required, six additional and one video recommended; JPEG, TIFF, PNG, non-animated GIF; minimal or no compression | Amazon claims rows 2, 3, 6, 7, 10 |
| Tmall pure white RGB 255, 9 of 18; JD triplet on 2 of 5 | White-background image table, Background row |
| Tmall fill 70 to 80 on 3 of 15 (2026), fill the frame on 5 of 15 (2017 to 2024); JD 0 of 24 | White-background image table, Fill row |
| Tmall 1:1 on 12 of 18, 800 by 800 on 14 of 18; JD 1:1 on 6 of 6, 800 floor on 9 of 10 | Main image set table, Ratio and Working size rows |
| 5 maximum, 9 of 18; JD 5, 2 of 2 | Main image set table, Maximum images row |
| JPG 8 of 18; 3MB on 6 of 18; under 500KB on 3 of 18; JD JPG and PNG 5 of 7; 1MB on 4 of 6; 500KB on 2 of 6 | Main image set table, Formats and File weight rows |
| Tmall video 1:1 MP4 under 50MB on 3 of 18, 9 to 30 seconds on 2 of 18; JD 1:1 or 3:4 on 3 of 4, 15 to 60 on 3 of 5, 50MB on 2 of 3; Amazon MOV or MP4, 16:9 or 9:16, 1080p, 5 GB, 1 to 12 minutes | Listing video table; Amazon claims row 11 |
| White image fifth on Tmall, first on JD, 5 of 5 per platform | White-background image table, Slot row |
| Shadows barred on 6 of 15, models on 7 of 15, front view on 4 of 15 | White-background image table, Content bans and Composition rows |
| Adult clothing on a model; footwear one shoe at 45 degrees | Amazon claims row 5 |
| Prohibition list on 11 of 18 | Main image set table, Prohibited row |
| Moderator guidance, February 2026, size comparisons and usage instructions | Amazon claims row 14 |
| Under 500KB clears every published weight | Export presets, Compression row |
| 15 to 30 second China cut, below a one-minute floor | Carry-over analysis, Video paragraph |
| A+ Basic 5 modules at 970 by 300; Premium 7 at 1464 by 600; JPG, BMP, PNG, RGB, under 2 MB; no gallery duplicates; A+ content bans | Amazon claims rows 9 and 10 |
| 3.2 to 1 and 2.4 to 1 | Carry-over analysis, A+ paragraph (arithmetic) |
| Tmall detail 790 desktop and 750 mobile, 5 of 18 each; JD 790 on 5 of 9, the split a sourcing artifact | Detail page table |
| Main images one to four on Tmall, two to five on JD | Carry-over table, Additional images row |
| 1,000 pixels or more clears the zoom threshold and the 800 floor | Capture plan, first row |
| 70 percent generated, 30 percent shot | Derived and observed table, hubStudio row (first-party exception) |

**Changes from the cleared quotes.** Source lines were shortened to one sentence
each, keeping every date, count, scope and label. Research filenames were
renamed to their collection on the page ("the Tmall white-background
collection"), as brief 10 did. The "one square set" quote was not used as a
blockquote; its counts appear in the side-by-side table and the slot row in the
derived white-image quote. The "What the white-background image forbids", "The
Tmall main image prohibition list", "JD does not need its own detail page",
"Tmall and JD listing video" and "The absence" quotes were not used, for
length; their figures reach the page only through the table or not at all. The
readable-page paragraph gained "and read again on 14 September" after check 2.

**Removed or never written.** No reuse percentage, no rejection claim on fill,
no pixel arithmetic on 85 percent, no dpi, no sales lift, no A+ text ban, no
Amazon text ban on additional images, no China detail page content ban, no
figure from hubStudio's ecommerce design service page other than the 70/30
mix, no hubStudio rate. Nothing in the draft is absent from this file.

**Spelling on the page.** "centers", "center" (American), where this file
writes "centres".
