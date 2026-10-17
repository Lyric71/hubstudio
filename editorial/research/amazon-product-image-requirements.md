# Research: amazon-product-image-requirements

| Field | Value |
|---|---|
| Brief | 77 (wave two, `editorial/scripts/wave2/77-amazon-product-image-requirements.mjs`) |
| Target query | amazon product image requirements |
| Gap statement (one sentence) | The ranking pages paraphrase Amazon without linking it, print numbers no Amazon page carries (2,000 pixels recommended, 1,600 for zoom, a 10 MB cap, sRGB, nine images, apparel mains on a ghost mannequin), and none quotes Amazon's own suppression table, the "we may also modify images" line added in autumn 2026, the contains-synthetic-performer tag, or the places where Amazon's own pages disagree with each other (85 or 80 percent fill, longest or shortest side, PNG listed or not). |
| Research time spent | about 70 minutes active: five SERP phrasings (four English, one Chinese), three ranking pages opened; 12 Amazon surfaces rendered or fetched (11 Seller Central help articles logged out, one in its Chinese locale, plus the 2018 Quick Start Style Guide PDF); one article failed to render; repo checks on the help center, the live site and the ledger |
| Written | 2026-10-17 |

Western marketplace: Amazon's Seller Central help articles for the US store
are readable without a login once rendered (a plain fetch returns only the
application shell, see the ledger rows from brief 31), so every number below
is primary, scoped to the US store. No deviation 7 disclaimer applies
(`editorial/CLAUDE.md`, Wave two). R4 (Chinese-language web first) does not
bind a US marketplace, but two Chinese checks were run because many sellers
reading this page work from China: one Chinese SERP phrasing, and Amazon's own
Chinese-locale render of the Product image guide, which carries the same
numbers and the same new "may modify" sentence as the English page.

**Method.** Each help article was rendered in headless Chromium (Playwright,
locale en-US, no cookies, viewport 1280 wide), waiting for the line "This
article applies to selling in" before reading `innerText`. The text was saved
with the URL and the render time in a header; long dashes become a spaced
hyphen on save (settled 2026-10-08). Full-page screenshots were taken of the
two pages that carry most of the article: the Product image guide and Image
suppression. The Quick Start Style Guide PDF was fetched with curl (HTTP 200,
Last-Modified 15 March 2018) and its text extracted with pdftotext. Captures:
`research/amazon-product-image-requirements/`, suffix `check1-2026-10-17`
(check 2 suffix `check2-2026-10-17`).

**Dates.** No Seller Central help article carries a publication or update
date. Each row is dated by the read, "page undated, read 17 October 2026",
the ledger's convention for Amazon. The Product image guide was also read by
this system on 10 September, 14 September and 8 October 2026 (ledger rows,
briefs 31 and 49); comparing the 14 September capture with today's gives the
one dated change in the changelog.

## R2. SERP map

Search run 2026-10-17 (US results). Page types by category, never by
company. Three pages opened in full; the rest assessed from title, snippet and
the search summary.

Query: amazon product image requirements

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | seller software blog | spec guide (opened) | 1,000 px minimum, 2,000+ recommended, 85 percent, RGB 255 | links no Amazon page; no category exceptions; no suppression table in Amazon's words; no AI-person tag | Aug 2025, titled 2026 |
| 2 | product research tool blog | spec guide | main and secondary rules | 2024 page; no Amazon links in snippet | 2024 |
| 3 | consumer testing tool blog | tips list | optimization tips | not a spec page | undated |
| 4 | marketplace agency blog | spec guide | main image basics | not opened | undated |
| 5 | AI cloud vendor blog | spec guide | "every seller must meet" list | not opened; vendor of the thing it advises | 2026 in title |
| 6 | Amazon agency blog | spec guide | specs "that convert" | conversion framing, not opened | 2026 in title |
| 7 | seller tool blog | size guide | dimensions | not opened | undated |
| 8 | image SEO tool blog | complete guide | main and secondary | not opened | undated |
| 9 | size tool blog | complete guide | sizes | not opened | 2026 in title |
| 10 | photo editor guide | size and background | "size, background and rules" | not opened | 2026 in title |

Query: amazon main image requirements white background

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | seller software blog | spec guide (Q1 #1) | RGB 255, 85 percent | as above | Aug 2025 |
| 2 | creative production blog | listing image guide | main and gallery | not opened | undated |
| 3 | product photo studio blog | dimensions guide | dimensions | not opened | 2026 in title |
| 4 | background removal tool blog | white background guide | RGB 255 "5-second fix" | tool pitch | 2026 in title |
| 5 | batch image tool blog | spec guide (opened) | 2,000 x 2,000, 10 MB, sRGB, nine images, apparel main "flat or on invisible/ghost mannequin" | links no Amazon page; the apparel line contradicts Amazon's clothing page (adult apparel on a standing model, no mannequin); no suppression table in Amazon's words | updated May 2026 |
| 6 | clipping service blog | spec guide | rules | not opened | 2026 in title |
| 7 | FBA agency blog | main image guide | thumbnail best practice | not opened | undated |
| 8 | seller marketplace blog | spec guide (syndicated copy of Q1 #1) | as Q1 #1 | as Q1 #1 | 2026 in title |
| 9 | education site blog | main image guide | basics | not opened | undated |

Query: amazon image size for zoom

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | AI photo tool blog | quick guide | 1,000 x 1,000 for zoom | square framing Amazon does not require | undated |
| 2 | seller tool blog | spec guide | zoom size | 2024 page | 2024 |
| 3 | seller tool blog | spec guide | sizes and rules | not opened | 2026 in title |
| 4 | UK agency blog | size and best practice | sizes | not opened | 2026 in title |
| 5 | seller tool blog (Q1 #7) | size guide | dimensions | not opened | undated |
| 6 | UK product photographer blog | full spec | sizes | not opened | 2026 in title |
| 7 | image compression tool page | spec page | sizes, upload tips | not opened | 2026 in title |
| 8 | image tool guide | pixels, formats, zoom | "1,600 px longest side or zoom is disabled" in the search summary | Amazon's guide says 1,000+ enables zoom | undated |
| 9 | ranking tool blog | size guide | 10 MB cap | no Amazon page carries a megabyte cap | 2026 in title |

Query: amazon product image rejected suppressed reasons

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | prep service blog | suppression fixes | main image fixes | not opened | undated |
| 2 | prep service blog | suppressed listing guide | where to look | not opened | undated |
| 3 | photo studio guide | spec guide | rules | not opened | 2026 in title |
| 4 | seller tool guide | "why rejected" | rejection reasons | not opened | undated |
| 5 | image SEO tool blog (Q1 #8) | complete guide | reasons | not opened | undated |
| 6 | data API vendor blog | spec guide | size, format | not opened | 2026 in title |
| 7 | AI tool blog | suppression explainer | reasons | not opened | undated |
| 8 | AI tool blog | "hidden listing errors" | reasons | not opened | undated |
| 9 | agency blog | specs and rejections | reasons | not opened | undated |

Query (Chinese): Amazon main image requirements 2026 (Chinese phrasing)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | seller ERP blog | size guide | main image size | not opened | 2026 |
| 2 | cross-border news portal | "2026 new main image rule" alert (opened) | claims Amazon now auto-replaces non-compliant mains after AI plus human review; 85 to 100 percent; 1,600 recommended | cites no Amazon page or notice; seller anecdotes only | 27 Feb 2026 |
| 3 | AI image tool blog | complete guide | requirements | not opened | 2026 |
| 4 | footwear trade platform | size explainer | sizes | not opened | 2026 |
| 5 | footwear trade platform | main and gallery explainer | rules | not opened | 2026 |
| 6 | spec directory | spec page | sizes | not opened | 2026 |
| 7 | size tool (Chinese locale of Q1 #9) | complete guide | sizes | not opened | 2026 |
| 8 | AI image tool blog | main image points to July 2026 | rules | not opened | Jul 2026 |
| 9 | image tool guide | requirements | sizes | not opened | 2026 |
| 10 | product photo studio | shooting standard | main, A+, video | not opened | 2026 |

**The bar.** The ranking pages run 1,200 to 3,000 words with one to three
tables; most put every number in one list and none separates main image,
additional images and category exceptions with Amazon's own wording. None
dates its read. None prints a changelog.

**The gap, in one sentence:** see the table at the top; the H1 answers it by
quoting Amazon's pages, dated, and printing where they disagree.

## R1 and R5. Claims table

Every Amazon row: page undated, read 17 October 2026, US store, Amazon's own
rule text (who paid: Amazon, publisher of its own rules; no sample, no study).
"Guide" = Product image guide G1881. Capture file in brackets.

| # | Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|---|
| C1 | Every product requires at least one compliant main image; Amazon recommends at least six additional images and one video | sellercentral.amazon.com/help/hub/reference/external/G1881 [amazon-product-image-guide] | read 2026-10-17 | n/a | rendered, read in full | Amazon | primary |
| C2 | Uploading does not guarantee display; Amazon selects and arranges images from multiple selling partners; up to 24 hours to appear | G1881; also GUGPCYWV2P8KVFUT, G17811 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C3 | New sentence: "We may also modify images that you submit to meet the product image requirements or enhance the customer experience." Absent from the 14 September 2026 capture; present in the English and Chinese-locale renders today | G1881 [amazon-product-image-guide; -zh-cn]; prior capture research/amazon-tmall-jd-one-product-three-listings/amazon-product-image-guide-2026-09-14.txt | added between 2026-09-14 and 2026-10-17 | n/a | diff of two captures of the same URL | Amazon | primary |
| C4 | Image suppression page: if images don't comply Amazon may suppress the listing from search until a compliant image is provided, or "Remove or modify non-compliant images (for example, removing a watermark)" | sellercentral.amazon.com/help/hub/reference/external/GT8RSE9S9NK4LP6Z [amazon-image-suppression] | read 2026-10-17 | n/a | rendered, screenshot | Amazon | primary |
| C5 | Files failing technical requirements cannot be uploaded; failing image requirements may be removed; with no compliant main image Amazon "may temporarily remove the product listing from search" | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C6 | Formats: JPEG (.jpg or .jpeg), TIFF (.tif or .tiff), PNG (.png), non-animated GIF (.gif); JPEG recommended | G1881; GUGPCYWV2P8KVFUT; G17811 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C7 | Size: minimum 500 pixels and maximum 10,000 pixels on the longest side; below 500 cannot be uploaded; "Do not artificially enlarge small images"; 1,000+ recommended, 1,000+ on the longest side enables zoom | G1881; G17811 repeats 500, 1,000 and 10,000 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C8 | Conflict inside Amazon: the older Product image error codes page says files "must be at least 500 pixels on the shortest side" and lists only .tif, .tiff, .jpg, .jpeg, .gif (no PNG) | sellercentral.amazon.com/help/hub/reference/external/G202131130 [amazon-image-error-codes] | read 2026-10-17 | n/a | rendered | Amazon | primary, published as a conflict |
| C9 | Color: RGB accepted; CMYK "Not preferred. Convert to RGB before uploading."; grayscale only for products that are gray or silver metal; do not rely on ICC profiles | sellercentral.amazon.com/help/hub/reference/external/G9FUUH87RBNXGKB7 [amazon-technical-image-file-requirements] | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C10 | Upload error table says a file must be "saved in a supported format (JPG, TIF, PNG, GIF) in RGB or CMYK color mode" | sellercentral.amazon.com/help/hub/reference/external/G17811 [amazon-image-upload-errors] | read 2026-10-17 | n/a | rendered | Amazon | primary; consistent with C9 (CMYK uploads, is not preferred) |
| C11 | Refused formats: EPS, BMP, PDF and application files such as PSD; minimal or no compression; JPEG at highest quality; no TIFF compression; remove layers | G9FUUH87RBNXGKB7 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C12 | File naming: product identifier + variant code + extension, e.g. B000123456.MAIN.jpg, separated by periods; spaces, dashes or extra characters prevent upload; identifier can be ASIN, UPC, ISBN, EAN, GTIN or JAN; naming listed as Optional | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C13 | Upload images: legacy naming (ID + variant + extension) or flexible naming (any name, assigned after upload); a file with an ID and no variant code is treated as the main image; up to 1,000 images and 1 GB per zip | sellercentral.amazon.com/help/hub/reference/external/GUGPCYWV2P8KVFUT [amazon-upload-images] | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C14 | Country-specific uploads: text on images must be in the country's official language or English; the set must include a MAIN or none of it is considered | GUGPCYWV2P8KVFUT | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C15 | MAIN: realistic, professional-quality; real scale, quantity and color; no placeholders; "Show the product as 85% of the image"; entire product; shown once; one unit plus included accessories; pure white background RGB 255, 255, 255; packaging only when an important feature; no props not included; no part of a mannequin; footwear a single shoe facing left at 45 degrees; clothing accessories and multipacks flat without a model; adult clothing on a standing model | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C16 | Lifestyle main image allowed in limited product types only: BED, BED_FRAME, MATTRESS, RUG, RUG_PAD, SOFA ("We continuously review these matters"); with no text or extra logos | sellercentral.amazon.com/help/hub/reference/external/G200270100 [amazon-style-guides]; G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C17 | All images: accurately represent the product; match the title; no nudity or sexually suggestive images; children's and baby undergarments, leotards, swimwear lying flat without models; no customer reviews, five-star imagery, claims or seller information; "No text or pricing details (swatch image only)"; no Amazon logos, trademarks or badges | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C18 | Image variant codes: MAIN; PS01 to PS06 safety and compliance; SWCH swatch; PT01 to PT99 additional angles, product in use, screenshots, accessories or product details; IN01 to IN99 interior (books); TOPP, BOTT, LEFT, RGHT, FRNT, BACK, SIDE angles; INGR ingredients; EEGL energy guide; DTLS multipack | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C19 | Clothing mains: on a model (except children's and baby undergarments, leotards, swimwear and similar; accessories never on models); pure white hex #FFFFFF or RGB 255-255-255; frontal view; whole product; "Minimum aspect ratio is close to 3:4 (width/height) and 85% of the total image area occupied"; every parent and child product needs a main | sellercentral.amazon.com/help/hub/reference/external/G200498950 [amazon-clothing-image-guidelines] | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C20 | Clothing, main and alternate: 1,000 pixels or larger in height or width to activate zoom; children's wear under 1,000 pixels prohibited; up to eight alternate images per parent or child SKU; prohibited on mains: sketches or drawings, borders, logos, watermarks, text, color blocks, inset images, multiple views or colorways, mannequin, hanger or holder, folded products, selfie, black and white, lying or kneeling, packaging, tags, distracting accessories | G200498950 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C21 | Multipacks: the main image must show the total quantity delivered and the product in its packaging; title states total quantity; no Amazon logos on a pack quantity sticker | sellercentral.amazon.com/help/hub/reference/external/G94GSFMC79RSLDBY [amazon-multipack-imaging] | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C22 | Suppression table, 14 reasons with the affected image: text, logo, graphics or watermarks; non-white background (not RGB 255 255 255); image missing; additional items; cropped product; in packaging or with brand or swing tags; propping; blurriness or pixelation (any image); product too small (any image); prurience (any image); multiple product images (main, Apparel); human model for a non-clothing product (main, Softlines such as Kids, Baby, Shoes, Luggage, Watch and Jewelry, except Adult Apparel); mannequin or hanger (main, Apparel or Accessories); model not standing (main, Apparel). Fix for each: submit a compliant image | GT8RSE9S9NK4LP6Z | read 2026-10-17 | n/a | rendered, screenshot | Amazon | primary |
| C23 | Where to look: the Fix tab in Manage Products for products removed from search; Submission status, report type Content compliance issues, for files that failed; replace a non-compliant main rather than delete it, with a new MAIN upload, up to 24 hours | GT8RSE9S9NK4LP6Z | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C24 | Upload errors with fixes: Bad ASIN or variant; Unsupported file suffix; corrupted or unexpected format; Image dimensions too small (under 500 on the longest side); Authoritative image already exists; Resubmission of previously accepted or rejected images (change the file: crop, resolution, re-export); identical ASIN and variant submitted; Image and title do not match (error 100239); Main image and product ID do not match (error 990003); same set as a previous submission may be detected as a duplicate | G17811 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C25 | Error codes page: product out of focus includes a digital image "resized (upward)"; product too small: "As a general rule, at least 85% of a product image should be taken up with the product itself"; not on white: "pure white (hex code #FFFFFF)" | G202131130 | read 2026-10-17 | n/a | rendered | Amazon | primary |
| C26 | AI-generated people: photorealistic AI-generated people must be tagged with the keyword contains-synthetic-performer in the XMP dc:subject field before upload; not for real people altered with AI tools, characters from expressive works, images with no people or non-photorealistic people; the how-to page says "Amazon requires selling partners to tag applicable media" and shows macOS Preview, Windows File Explorer (Tags field, not Subject) and exiftool | G1881; sellercentral.amazon.com/help/hub/reference/external/GFXHCHYZRGJRBZA5 [amazon-ai-person-tag] | read 2026-10-17 | n/a | rendered | Amazon | primary, no effective date on either page |
| C27 | Amazon's Quick Start Style Guide, still linked from the US Product page style guides page, says the product should "occupy at least 80 percent of the image area" and asks for "at least 1,000 dpi"; dated 2018, Amazon Commercial Services Pty Ltd (the Australian entity) | m.media-amazon.com/images/G/01/rainier/help/Selling_on_Amazon_Quick_Start_Style_Guide_2018.pdf [amazon-quick-start-style-guide-2018]; linked from G200270100 | 2018 (Last-Modified 15 Mar 2018), read 2026-10-17 | n/a | fetched, text extracted | Amazon | primary, older document, published as a conflict (80 against 85); the dpi line is cut (see Do not publish) |
| C28 | The guide prints "Resolution: At least 72 dpi" | G1881 | read 2026-10-17 | n/a | rendered | Amazon | primary but cut: the ledger cuts dpi from this cluster (meaningless for a fixed-pixel screen image) |
| H1 | Catalog skill "E-commerce packshot" and "Lifestyle product scene" for product pictures; skills that apply to images and video are read by Improve with AI | src/content/help/skills.md | synced 2026-10-16 | n/a | help center | hubStudio | primary (first party) |
| H2 | Improve with AI rewrites the prompt for the chosen engine; never changes settings; a small paid AI call; skills shape it | src/content/help/create-an-image.md | synced | n/a | help center | hubStudio | primary |
| H3 | ChatGPT Image engines: Resolution 1K, 2K or 4K (up to 3840 px); Background Auto, Opaque or Transparent, Transparent on the 2.5 engines only; formats PNG, JPG, WebP; 1 to 10 pictures a run | create-an-image.md | synced | n/a | help center | hubStudio | primary |
| H4 | Edit an image: rewrites uploaded pictures following an instruction (change a background, remove an object, restyle a product shot, merge references); sources PNG, JPEG or WebP | create-an-image.md | synced | n/a | help center | hubStudio | primary |
| H5 | Image editor (free): Crop formats include Square 1:1; Save as PNG, JPG (transparent areas turn white) or WEBP; Size by width and height with proportions locked, quick picks 100, 75, 50, 25 percent and 2048 px or 1080 px on the long side; pictures over 4,096 px on the long side are edited at 4,096 | src/content/help/assets-library.md | synced | n/a | help center | hubStudio | primary |
| H6 | Image editor and Validation are free to use; no claim that hubStudio uploads to Amazon | hubstudio-positioning.md | 2026-10-14 | n/a | binding positioning | hubStudio | primary |

## Cleared for use

> Amazon's main image must have "a pure white background (RGB color values:
> 255, 255, 255)" and should "Show the product as 85% of the image," whole,
> once and as one unit. Read from Amazon's own help article.
> Source: Amazon Seller Central, Product image guide, US store, page undated,
> read October 17, 2026. https://sellercentral.amazon.com/help/hub/reference/external/G1881

> Images must be 500 to 10,000 pixels on the longest side; "Images with 1,000+
> pixels on the longest side enable the zoom function." Read from Amazon's own
> help article.
> Source: Amazon Seller Central, Product image guide, US store, page undated,
> read October 17, 2026. https://sellercentral.amazon.com/help/hub/reference/external/G1881

> "We may also modify images that you submit to meet the product image
> requirements or enhance the customer experience." The sentence was not on
> the page on September 14, 2026; it was there on October 17, in English and
> in the page's Chinese version.
> Source: Amazon Seller Central, Product image guide, US store, two captures
> compared, September 14 and October 17, 2026.

> Amazon's clothing page asks for a main image with a "Minimum aspect ratio
> ... close to 3:4 (width/height) and 85% of the total image area occupied,"
> on a model, on pure white.
> Source: Amazon Seller Central, Image guidelines for clothing, US store,
> page undated, read October 17, 2026.
> https://sellercentral.amazon.com/help/hub/reference/external/G200498950

> Amazon lets a lifestyle picture be the main image in six product types only:
> BED, BED_FRAME, MATTRESS, RUG, RUG_PAD and SOFA.
> Source: Amazon Seller Central, Product page style guides, US store, page
> undated, read October 17, 2026.
> https://sellercentral.amazon.com/help/hub/reference/external/G200270100

> Photorealistic people generated entirely by AI must be tagged with the
> keyword contains-synthetic-performer in the image's XMP dc:subject field
> before upload.
> Source: Amazon Seller Central, Product image guide and "How to tag media that
> contains an AI-generated person," US store, pages undated, read October 17,
> 2026. https://sellercentral.amazon.com/help/hub/reference/external/GFXHCHYZRGJRBZA5

## Do not publish

| Item | Where it came from | Why it fails |
|---|---|---|
| 2,000 x 2,000 recommended, 1,600 px "or zoom is disabled", 2,000 to 2,500 "sweet spot" | ranking pages in all five SERPs | On no Amazon page read; Amazon says 1,000+ enables zoom |
| 10 MB file size cap | ranking pages (zoom and white-background queries) | No Amazon image help article read gives a megabyte cap for listing images (A+ has its own 2 MB line, a different surface); same finding as brief 31 |
| sRGB color profile | ranking pages | Amazon says RGB and warns against relying on ICC profiles; "sRGB" is not its wording |
| Nine images per listing, seven shown on desktop | ranking pages | Not on any Amazon page read; Amazon recommends at least six additional images and a video; the clothing page allows up to eight alternates per SKU |
| Apparel main "flat or on an invisible or ghost mannequin" | a ranking page (updated May 2026) | Contradicted by Amazon's clothing page and suppression table: adult apparel on a standing model, no mannequin, hanger or holder |
| "2026 new rule: non-compliant mains are now automatically replaced after AI and human review" | Chinese cross-border news portal, 27 Feb 2026 | Cites no Amazon notice; Amazon's own wording is the "may modify" sentence (C3) and the suppression page's "Remove or modify" line (C4), which is what the page prints |
| 72 dpi; 1,000 dpi | G1881; the 2018 Quick Start PDF | dpi is meaningless for a fixed-pixel screen image (ledger, brief 31); the PDF's "1,000 dpi" is a different, older and obviously mis-stated figure |
| Infographics and size charts as Amazon image types | brief 77 as first written | No Amazon help page read lists them; the brief is amended to Amazon's variant code names |
| Multiple product views article (G4VZLFFU7KJP7PBH) | linked from G1881 | Rendered empty twice ("Loading"); nothing from it is used |
| Conversion lifts from images, video or A+ | ranking pages; Amazon blog figures logged by brief 31 | No sample or method; seller of the feature (ledger do-not-publish rows) |
| hubStudio uploads to Amazon or connects to Seller Central | brief "Do not" | Not an app fact |
| ChatGPT Image 2 transparent background | brief 77 as first written | create-an-image.md: Transparent is on the 2.5 engines only; and Amazon's main needs pure white |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| amazon-product-image-guide-check1-2026-10-17.txt, amazon-product-image-guide-2026-10-17.png | Product image guide, full text and full-page screenshot | 2026-10-17 12:32 and 12:38 (UTC+8) | G1881, logged-out Chromium |
| amazon-product-image-guide-zh-cn-check1-2026-10-17.txt | Same article in Amazon's Chinese locale: same numbers, same new sentence | 2026-10-17 | G1881?mons_sel_locale=zh_CN |
| amazon-technical-image-file-requirements-check1-2026-10-17.txt | Technical image file requirements | 2026-10-17 | G9FUUH87RBNXGKB7 |
| amazon-image-suppression-check1-2026-10-17.txt, amazon-image-suppression-2026-10-17.png | Image suppression, with the 14-row table | 2026-10-17 | GT8RSE9S9NK4LP6Z |
| amazon-image-upload-errors-check1-2026-10-17.txt | Image upload errors and display issues | 2026-10-17 | G17811 |
| amazon-image-error-codes-check1-2026-10-17.txt | Product image error codes (older page, the conflicts) | 2026-10-17 | G202131130 |
| amazon-upload-images-check1-2026-10-17.txt | Upload images (naming, zip limits, country sets) | 2026-10-17 | GUGPCYWV2P8KVFUT |
| amazon-ai-person-tag-check1-2026-10-17.txt | How to tag media that contains an AI-generated person | 2026-10-17 | GFXHCHYZRGJRBZA5 |
| amazon-clothing-image-guidelines-check1-2026-10-17.txt | Image guidelines for clothing | 2026-10-17 | G200498950 |
| amazon-multipack-imaging-check1-2026-10-17.txt | Multipack imaging standards | 2026-10-17 | G94GSFMC79RSLDBY |
| amazon-style-guides-check1-2026-10-17.txt | Product page style guides (the six lifestyle-main types) | 2026-10-17 | G200270100 |
| amazon-quick-start-style-guide-2018-check1-2026-10-17.txt | 2018 Quick Start Style Guide, text | 2026-10-17 | m.media-amazon.com PDF |

## R8. Reconciliation (filled after drafting)

Run 2026-10-17 after iteration 8, again after the quality pass. Check 2: the
ten cited help articles were rendered again the same day (captures suffix
`check2-2026-10-17`), each body text identical to check 1, and the PDF
re-fetched byte-identical (38,059 bytes). All 28 quoted strings were found in
the check 2 text by a script.

| Number or claim in the draft | Claims row | Result |
|---|---|---|
| Pure white RGB 255, 255, 255; hex #FFFFFF | C15, C19, C25 | matches |
| 85 percent of the image; 85 percent of the total image area (clothing); 100 by 100 in 500 by 500 example | C15, C19, C25 | matches |
| 80 percent, 2018 Quick Start Style Guide, Australian entity | C27 | matches |
| 500 to 10,000 pixels, longest side; 1,000+ for zoom; do not enlarge | C7 | matches |
| 500 on the shortest side; no PNG in the error codes list | C8 | matches, published as a conflict |
| JPEG, TIFF, PNG, non-animated GIF; JPEG recommended | C6 | matches |
| EPS, BMP, PDF, PSD refused; compression; layers | C11 | matches |
| RGB; CMYK "Not preferred"; grayscale for gray or silver metal | C9, C10 | matches |
| B000123456.MAIN.jpg; ID types; periods; ID without variant code becomes main; flexible naming; naming marked optional | C12, C13 | matches |
| 1,000 images and 1 GB per zip | C13 | matches |
| One compliant main; six additional and one video recommended | C1 | matches |
| Up to 24 hours | C2, C23 | matches |
| Main image rules table (whole, once, one unit, realism, placeholders, packaging, props, mannequin) | C15 | matches |
| Six lifestyle-main product types | C16 | matches |
| Variant codes table | C18 | matches |
| All-image bans; "No text or pricing details (swatch image only)" | C17 | matches |
| Country-specific text: official language or English | C14 | matches |
| contains-synthetic-performer in XMP dc:subject | C26 | matches |
| Category table (clothing, 3:4, up to eight alternates, children's wear under 1,000 px, footwear 45 degrees, multipacks in packaging) | C15, C19, C20, C21 | matches |
| 14 suppression reasons and scopes; "11 of 14 apply to the main image alone" | C22 | matches; the 11 is counted from C22 (rows whose affected image is a main image only), a derived count |
| Fix tab, Submission status, Content compliance issues | C23 | matches |
| Error 990003; resubmission error | C24 | matches |
| "We may also modify images..." absent 14 Sep, present 17 Oct | C3, C4 | matches |
| Size guides print 2,000 px, 1,600 px zoom, 10 MB; none on Amazon's pages | R2 rows; Do not publish | matches, stated as absent from Amazon, no source named |
| 4K up to 3840 px; Opaque; Transparent on 2.5 engines only; Edit an image; E-commerce packshot; Improve with AI; Image editor free, Square 1:1, JPG or PNG at a chosen size, 4,096 px | H1 to H6 | matches |
| No upload to Seller Central from hubStudio | H6, brief | matches (stated as a limit, not a feature) |

Removed during drafting because they were not in this file: a derived "about
92 percent of width and height" reading of the 85 percent area rule (cut, the
pages give no such conversion); "older" as a description of the error codes
page (cut, the page is undated); "in any setting" for additional images (cut,
Amazon names product in use, not settings); "less than most sellers assume"
(cut, no source).

Live article corrected because this piece contradicted it: the AI
white-background packshot how-to said in its FAQ that neither platform says
how the fill is measured; Amazon's clothing page (C19) counts the total image
area for clothing. The FAQ answer now says neither main image rule says, and
names the clothing page's area rule; English page, French and Chinese
dictionaries, its draft in `output/`, and `dateModifiedISO` 2026-10-17 in
`src/data/howtos.ts`. Its body paragraph ("Neither page says...") refers to
the two main image pages and stays accurate.
