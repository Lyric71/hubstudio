# Research: ai-white-background-packshot

| Field | Value |
|---|---|
| Brief | 51 (wave two, `editorial/scripts/wave2/51-ai-white-background-packshot.mjs`) |
| Target query | AI product photo white background |
| Gap statement (one sentence) | Every ranking page sells a background tool and restates Amazon secondhand; none puts Amazon's, Google's and Shopify's own main-image rules side by side, and several assert a Google white-background requirement that Google's Merchant Center page does not contain. |
| Research time spent | About 70 minutes |
| Written | 2026-10-08 |

## R2. SERP map

Query 1: `AI product photo white background` (primary)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | imagen-ai.com | Tool landing page | White background maker for RAW files | No marketplace rule | Undated |
| 2 | morphic.com (resources, nine locale copies) | Tool landing page | Generates a product photo from a text description, "without a physical sample" | No rule; generating a product that was never photographed collides with Amazon's "accurately represent" and Google's "exact item being sold" | Undated |
| 3 to 9 | morphic.com locale variants | Same page, other languages | Same | Same | Undated |

Nine of nine results are one tool vendor's landing page and its translations, plus one other tool.

Query 2: `how to make amazon main image white background with AI`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | aiarty.com | Tool vendor blog | Background removal steps | Amazon only, secondhand | Undated |
| 2 | dreamina.capcut.com | Tool vendor blog | An engine for Amazon-style white photos | Amazon only | 2026 |
| 3 | mida.so | Tool landing page | Upload, prompt "pure white background" | No rule source | Undated |
| 4 | pixmiller.com | Tool vendor blog | Amazon and eBay white photos | Secondhand values | Undated |
| 5 | weshop.ai | Tool landing page | Background remover for Amazon | No rule source | Undated |
| 6 | aiarty.com | Tool vendor guide | Amazon photography | Secondhand | Undated |
| 7 | erase.bg | Tool vendor blog | Amazon image requirements | Secondhand, restates fill as "at least 85%" | Undated |
| 8 | aiarty.com | Duplicate guide | Same | Same | Undated |
| 9 | jarvio.io | Software vendor blog | AI Amazon images | Amazon only | 2026 |

Query 3: `AI packshot generator white background ecommerce requirements Google Shopping`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | krea.ai | Tool node page | Packshot front generator | No rule | Undated |
| 2 | krea.ai | Tool node page | Same | Same | Undated |
| 3 | jasper.ai | Software agent page | Ecommerce packshot agent | No rule | Undated |
| 4 | dreamina.capcut.com | Tool vendor blog | ChatGPT engine for white shots | No Google rule read | 2026 |
| 5 | jasper.ai | Duplicate | Same | Same | Undated |
| 6 | imagine.art | Tool landing page | Packshot generator | No rule | Undated |
| 7 | mida.so | Tool landing page | Variant generator | No rule | Undated |
| 8 | weshop.ai | Tool vendor blog | Claims Google Shopping "often" requires white | Google's Merchant Center page sets no background color | Undated |
| 9 | webcatalog.io | App directory | A packshot app | Nothing | Undated |

Query 4: `white background product photo rejected Amazon main image AI generated allowed`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sellerlabs.com | Software vendor knowledge base | What AI images are allowed | Says the main image "must remain an actual photograph"; Amazon's page says "realistic, professional-quality image" | Undated |
| 2 | feedvisor.com | Software vendor academy | Product images | Secondhand | Undated |
| 3 to 5 | lovart.ai (three locales) | Tool vendor blog | Amazon AI white backgrounds | Secondhand | 2026 |
| 6 | blendnow.com | Tool vendor blog | 17 prompts for Amazon | Amazon only | 2026 |
| 7 | rangy.ai | Tool vendor blog | AI ecommerce photos | No rule source | Undated |
| 8 | jarvio.io | Software vendor blog | AI Amazon images | Amazon only | 2026 |
| 9 | rewarx.com | Vendor blog | Claims an "August 2026" Amazon AI ban on three patterns | Not on Amazon's product image guide read 2026-10-08 | 2026 |

**The bar:** pages run 800 to 2,000 words, one table at most, almost always Amazon only, values restated without a link to the rule page, a tool CTA. No page cites a date read.

**The gap, in one sentence:** No ranking page reads the three marketplaces' own help pages, sets their main-image rules in one table, or tells the reader that Google caps the fill at 90 percent, enforces 500 by 500 from January 31, 2027, and requires AI metadata, all of which change how an AI packshot is made and exported.

## R1 and R5. Claims table

Primary pages read 2026-10-08 (check 1). Amazon pages rendered in a logged-out browser (a plain fetch returns the application shell, as logged under brief 31); text and full-page screenshots saved in `research/ai-white-background-packshot/`.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Every product requires at least one compliant main image; with no compliant main image Amazon "may temporarily remove the product listing from search" | sellercentral.amazon.com/help/hub/reference/external/G1881 | Page undated, read 2026-10-08, US store | n/a | Platform rule text | Amazon | primary |
| MAIN: "realistic, professional-quality image", accurate "real scale, quantity, and color"; no placeholders | same | same | n/a | Rule text | Amazon | primary |
| MAIN: "Show the product as 85% of the image"; entire product in frame; product shown once; one unit plus included accessories | same | same | n/a | Rule text | Amazon | primary |
| MAIN: "pure white background (RGB color values: 255, 255, 255)" | same | same | n/a | Rule text | Amazon | primary |
| MAIN: no packaging unless a product feature; no props not included; no part of a mannequin; footwear single shoe facing left at 45 degrees; adult clothing on a standing model; clothing accessories and multipacks flat | same | same | n/a | Rule text | Amazon | primary |
| All images: no reviews, five-star imagery, claims, seller information; no Amazon logos, trademarks or badges | same | same | n/a | Rule text | Amazon | primary |
| Files: JPEG, TIFF, PNG, non-animated GIF, JPEG recommended; 500 minimum to 10,000 maximum on the longest side; 1,000+ enables zoom; "Do not artificially enlarge small images"; RGB preferred | same | same | n/a | Rule text | Amazon | primary |
| Photorealistic, entirely AI-generated people: tag contains-synthetic-performer in dc:subject (XMP); not when the image "does not feature any people" | same | same | n/a | Rule text, no effective date on page | Amazon | primary |
| Amazon "may also modify images that you submit" | same | same | n/a | Rule text | Amazon | primary |
| Minimal or no compression; JPEG at highest quality, avoid repeated JPEG saves; CMYK convert to RGB; EPS, BMP, PDF and PSD refused | sellercentral.amazon.com/help/hub/reference/external/G9FUUH87RBNXGKB7 | Page undated, read 2026-10-08, US store | n/a | Rule text | Amazon | primary |
| image_link: at least 500 by 500; about 1500 by 1500 or above recommended; no image over 64 megapixels; no file over 16MB | support.google.com/merchants/answer/6324350 | Page undated, read 2026-10-08 | n/a | Platform rule text | Google | primary |
| image_link formats: JPEG and WebP recommended; PNG, GIF, BMP, TIFF accepted; extension must match format | same | same | n/a | Rule text | Google | primary |
| Disapproved: promotional overlays (calls to action, price, warranty, promotional adjectives, condition text, barcodes, watermarks, added logos); placeholders, mockups, illustrations; single-color image; border; products not sold together | same | same | n/a | Rule text | Google | primary |
| "takes up no less than 75%, but not more than 90%, of the full image" (best practice) | same | same | n/a | Rule text, filed under best practices | Google | primary |
| One variant per image; packaging must show multidimensional packaging, not just the front | same | same | n/a | Rule text | Google | primary |
| "All images created using generative AI must contain meta data indicating that the image was AI-generated"; do not remove IPTC DigitalSourceType; codes TrainedAlgorithmicMedia, CompositeSynthetic ("a composite that includes synthetic elements"), AlgorithmicMedia | same | same | n/a | Rule text | Google | primary |
| Google may test subtle cropping of the image | same | same | n/a | Rule text | Google | primary |
| The image_link page states no background color | same | same, read in full | n/a | Absence, page read in full | Google | primary, absence |
| Manufacturer Center (brand data, not merchant listings) recommends "a solid white or transparent background" as a best practice | support.google.com/manufacturers/answer/7494889 | Page undated, read 2026-10-08 | n/a | Rule text | Google | primary, scoped to Manufacturer Center |
| 500 by 500 for all products enforced from January 31, 2027; until then 100 by 100 non-clothing, 250 by 250 clothing; warnings since July 2026 | support.google.com/merchants/answer/12159030 | Page undated, read 2026-10-08 | n/a | Rule text | Google | primary |
| Shopify product images up to 5000 by 5000 px or 25 megapixels; under 20 MB; 2048 by 2048 "usually displays best" for square; PNG best, then JPEG; consistent aspect ratio for main images | help.shopify.com/en/manual/products/product-media/product-media-types | Page undated, read 2026-10-08 | n/a | Platform help text | Shopify | primary |
| Shopify states no background color rule on that page | same | same, read in full | n/a | Absence | Shopify | primary, absence |
| "The Google & YouTube channel automatically syncs your products and relevant information about your Shopify store with the Google Merchant Center" | help.shopify.com/en/manual/online-sales-channels/google/product-feed | Page undated, read 2026-10-08 | n/a | Platform help text | Shopify | primary |
| App: Image studio jobs Text to image, Edit an image (change a background, restyle a product shot), Upscale and restore; uploads resized to 1,536 px long side; ChatGPT Image engines: Background Auto, Opaque or Transparent, Transparent needs PNG or WebP; Resolution 1K, 2K, 4K up to 3840 px; 1 to 10 images a run; price shown before the run | src/content/help/create-an-image.md | updated 2026-10-08 | n/a | First-party help center | hubStudio | primary, first-party |
| Transparent background: OpenAI lists it as a preview on gpt-image-2 (ChatGPT Image 2) and documents it without the preview label on the GPT Image 2.5 models (ChatGPT Image 2.5 Flare and Sunburst); a direct API request for a transparent background on gpt-image-2 was refused on 2026-10-08 ("Transparent background is not supported for this model."). Added 2026-10-08 so this guide agrees with the ChatGPT Image 2 guide | research/chatgpt-image-2-product-prompting-guide.md (claims rows on transparency and the 2.5 models; test runs 5 and 5b), from developers.openai.com/api/reference/resources/images and developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | 2 requests | Maker documentation plus hubStudio's own API test | OpenAI; hubStudio (own test) | primary |
| App: E-commerce packshot is a Catalog skill that applies to Images and video and shapes Improve with AI; Add to my skills | src/content/help/skills.md | updated 2026-10-05 | n/a | First-party help center | hubStudio | primary, first-party |
| App: Image editor Crop formats include Square 1:1; Save as PNG, JPG ("transparent areas turn white") or WEBP, quality slider, size quick picks at 2048 px or 1080 px on the long side; edits at up to 4,096 px | src/content/help/assets-library.md | n/a | n/a | First-party help center | hubStudio | primary, first-party |
| App: Download clean copy removes metadata and AI-generation markers; Image anonymizer lists what a file carries, including tags AI engines write | src/content/help/create-an-image.md, assets-library.md | n/a | n/a | First-party help center | hubStudio | primary, first-party |
| Derived: one square master at 2048 by 2048, white 255, product at about 85 percent, JPEG at top quality, under 16 MB, clears every stated minimum and format list on all three pages | Derived from the rows above | 2026-10-08 | n/a | Arithmetic and overlap of stated rules | n/a | derived |

## Cleared for use

> Amazon's main image must sit on "a pure white background (RGB color values:
> 255, 255, 255)" and "Show the product as 85% of the image."
> Source: Amazon Seller Central, Product image guide, US store, page undated, read October 8, 2026.

> Google asks that the product take up "no less than 75%, but not more than
> 90%, of the full image," at 500 by 500 pixels or more, 1500 by 1500 recommended.
> Source: Google Merchant Center Help, Image link [image_link], page undated, read October 8, 2026.

> Google enforces 500 by 500 pixels for all products from January 31, 2027.
> Source: Google Merchant Center Help, How to fix: Image too small, read October 8, 2026.

> "All images created using generative AI must contain meta data indicating
> that the image was AI-generated."
> Source: Google Merchant Center Help, Image link [image_link], read October 8, 2026.

> Shopify product images can be up to 5000 by 5000 px or 25 megapixels, under
> 20 MB, and "for square product images, a size of 2048 x 2048 px usually displays best."
> Source: Shopify Help Center, Product media types, page undated, read October 8, 2026.

## Do not publish

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| The main image is the most rejected marketplace asset | Brief angle | No platform publishes rejection rates by image slot | 2026-10-08 |
| Google Shopping requires a white background | Tool vendor pages, SERP query 3 | Not on the Merchant Center image_link page; the white or transparent line is a Manufacturer Center best practice | 2026-10-08 |
| Amazon's main image "must remain an actual photograph" | Software vendor knowledge base, SERP query 4 | Amazon's wording is "realistic, professional-quality image" | 2026-10-08 |
| An "August 2026" Amazon ban on three AI image patterns | Vendor blog, SERP query 4 | Not on the product image guide read 2026-10-08 | 2026-10-08 |
| Amazon fill "at least 85%" | Tool vendor pages | Amazon writes "85% of the image"; how it is measured is not defined | 2026-10-08 |
| Google image size "up to 10MB", 800 by 800 recommended | Manufacturer Center page | Manufacturer Center values, not merchant listings; Merchant Center says 16MB and 1500 by 1500 | 2026-10-08 |
| Whether app renders carry IPTC DigitalSourceType after download or after an Image editor save | Not documented in the help center | Not verifiable from the help center; the piece tells the reader to check the file instead | 2026-10-08 |
| The exact pixel size of a 4K square from ChatGPT Image 2 | Help says "up to 3840 px" | Square output dimensions not stated | 2026-10-08 |
| What the E-commerce packshot skill's instructions say | App source, not in this repo | Help center names it only | 2026-10-08 |
| Amazon 2,000 pixels for zoom | hubStudio ecommerce design page | Amazon says 1,000 or more enables zoom (already logged, brief 31) | 2026-10-08 |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| amazon-product-image-guide-2026-10-08.png / .txt | Product image guide, full page and text | 2026-10-08 | Amazon Seller Central help, logged out, US |
| amazon-technical-image-file-requirements-2026-10-08.png / .txt | Technical image file requirements | 2026-10-08 | Amazon Seller Central help, logged out, US |
| google-merchant-center-image-link-2026-10-08.txt | Image link [image_link], text | 2026-10-08 | Google Merchant Center Help |
| google-merchant-center-image-too-small-2026-10-08.txt | How to fix: Image too small, text | 2026-10-08 | Google Merchant Center Help |
| google-manufacturer-center-image-link-2026-10-08.txt | Manufacturer Center image guideline, text | 2026-10-08 | Google Manufacturer Center Help |
| shopify-product-media-types-2026-10-08.png / .txt | Product media types | 2026-10-08 | Shopify Help Center |

## R4. Chinese-language search

Not applicable: the piece publishes no China value. Tmall and JD appear only as
pointers to the existing insights, whose research files carry the Chinese
sources.

## R8. Reconciliation (filled after drafting)

Check 2 ran 2026-10-08 in iteration 8, after drafting: G1881 re-rendered in a
logged-out browser, the three Google pages and the Shopify media page
re-fetched, the Shopify Google channel page re-read. Every quoted string below
was searched for in the re-fetched text and found.

| Number or quote in the draft | Claims table row | Check 2 |
|---|---|---|
| "may temporarily remove the product listing from search" | Amazon, compliant main image | found |
| "won't appear on Google surfaces"; image_link "Required for each product" | Google image requirements (added at R8: the page marks image_link as required for each product, additional and lifestyle images as separate optional attributes) | found |
| Pure white RGB 255, 255, 255; "Show the product as 85% of the image"; whole, once, one unit | Amazon MAIN rows | found |
| 500 px longest side, 10,000 maximum, 1,000+ zoom, JPEG recommended, TIFF, PNG, non-animated GIF | Amazon files row | found |
| "realistic, professional-quality image"; "real scale, quantity, and color"; placeholders | Amazon MAIN row | found |
| "Do not artificially enlarge small images" | Amazon files row | found |
| contains-synthetic-performer, photorealistic people made entirely by AI | Amazon AI row | found |
| 75 to 90 percent; 500 by 500; 1500 by 1500; 64 megapixels; 16MB | Google image_link rows | found |
| JPEG and WebP recommended; PNG, GIF, BMP, TIFF | Google formats row | found |
| Banned list incl. mockups, borders, barcodes; logos "added in post-production" allowed when a physical part of the product | Google disapproval row (wording "added in post-production" confirmed at R8) | found |
| "may test subtle cropping" | Google cropping row | found |
| AI metadata sentence; IPTC DigitalSourceType; "a composite that includes synthetic elements" | Google AI row | found |
| "a solid white or transparent background" on Manufacturer Center | Manufacturer Center row | found |
| January 31, 2027; 100 by 100; 250 by 250; warnings | Google Image too small row | found |
| 5000 by 5000 px or 25 megapixels; under 20 MB; "2048 x 2048 px usually displays best"; PNG best then JPEG; consistent aspect ratio | Shopify row | found |
| "automatically syncs your products" | Shopify Google channel row | found |
| 1,536 px upload resize; Background Auto, Opaque, Transparent; 4K; images per run; price before the run; failed run not charged | App rows, help center and positioning file | first-party, read 2026-10-08 |
| Transparent cutout on ChatGPT Image 2.5 Flare or Sunburst; transparency on ChatGPT Image 2 listed as a preview (step list and FAQ, changed 2026-10-08 after the drafts were set side by side) | Transparent background row (from the ChatGPT Image 2 guide's research) | primary, read 2026-10-08 |
| Crop Square; JPG turns transparent areas white; 2048 px quick pick; Download clean copy; Image anonymizer listing | App rows, help center | first-party, read 2026-10-08 |
| 2048 x 2048, about 85 percent, JPEG, under 16 MB master | Derived row | derived, labeled on the page as our reading |

Removed or rewritten during drafting because they were not in this file:
"most AI packshots slip" (a frequency claim, rewritten without it); "only the
render costs anything" (wrong: Improve with AI is a paid call, corrected);
"Shopify rarely stands alone" (frequency claim, rewritten); "engines like to
improve what they see, and labels suffer first" (unsourced generalization,
cut); a line that guides commonly call white a Google requirement (alludes to
other publishers, cut).
