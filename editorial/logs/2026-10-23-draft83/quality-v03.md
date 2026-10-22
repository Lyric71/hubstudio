---
title: Google Merchant Center Image Requirements 2026
slug: google-merchant-center-image-requirements
description: Google Shopping image rules per attribute: sizes, file caps, formats, what gets disapproved, the 500 px minimum from January 2027 and the AI image rule.
excerpt: Match each product image to its feed attribute, prepare for the new minimum size, and keep AI metadata through the final export for Merchant Center.
template: spec
---

<!-- HERO SECTION -->

# Google Shopping image requirements for 2026

Reviewed October 23, 2026. By Cyril Drouin.

Merchant Center checks the picture and the file behind its URL. The image
attribute determines which rules apply. Today’s minimum and the coming minimum
are different, and AI metadata must survive the export.

<!-- INTRODUCTION -->

## What are the Google Shopping image requirements?

Google Shopping image requirements cover the pictured product, file size, and
crawlable URL. Prepare main images at Google’s recommended 1500 x 1500 pixels
or above, keep AI metadata, and check the dated minimums below. Lifestyle
images have their own rules. hubStudio supplies image creation and export; you
submit the URLs through your Merchant Center data source.

### Main image: image_link

| Check | Specification | Source |
|---|---|---|
| Required image | Main view of the item being sold | Image link |
| Before January 31, 2027 | 100 x 100 px non-clothing; 250 x 250 px clothing | Image too small |
| From January 31, 2027 | 500 x 500 px for all products | Image too small |
| Recommended size | Around 1500 x 1500 px or above | Image link |
| Maximum | 64 megapixels; 16 MB | Image link |
| Formats | JPEG, WebP, PNG, GIF, BMP, TIFF | Image link |
| Background | Solid white or light neutral recommended; clear staged images also acceptable | Image best practices |

> Google recommends around 1500 x 1500 pixels or above for the main image.
> Its attribute table lists a ceiling of 64 megapixels and 16 MB. Method:
> direct reading of the published formatting specifications.
> Source: Google Merchant Center Help, Image link, undated, accessed October
> 23, 2026. https://support.google.com/merchants/answer/6324350?hl=en

Keep exports below both ceilings. The Image too big help page says “less
than” in its headline and “cannot be larger than” in its body. Avoid that
boundary when exporting.

Check both file weight and pixel count.

Source: Google Merchant Center Help, Image too big, undated, accessed October
23, 2026. https://support.google.com/merchants/answer/12473903?hl=en

<!-- SECTION: Minimum-size transition -->

## When does the new minimum image size apply?

Google’s attribute table already prints the incoming minimum. Its dedicated
Image too small page explains the transition:

> “Enforcement of the new requirements will begin January 31, 2027.” The new
> general minimum is 500 x 500 pixels. Until then, the stated floors remain
> 100 x 100 for non-clothing and 250 x 250 for clothing. Warnings began in
> July 2026. Method: read the dated transition notice alongside the temporary
> requirements on the same page.
> Source: Google Merchant Center Help, Image too small, undated, accessed
> October 23, 2026. https://support.google.com/merchants/answer/12159030?hl=en

The page gives an enforcement date but no dated announcement. For new main
images, use the incoming minimum as your production floor. YouTube Shopping ads
on TV already require 500 x 500 pixels. Lifestyle images have a higher
attribute-specific minimum, below.

A main image below the applicable minimum can cause product disapproval. Open
Products, then Needs attention, and use the upcoming-enforcement warnings to
find affected products. Check the file at the submitted URL: a small thumbnail
can fail even when a larger master exists elsewhere. Check that URL first; it
may save you an unnecessary render.

<!-- SECTION: Additional images -->

## What belongs in additional_image_link?

An additional image can show the reverse side. A close-up may explain a detail
that disappears in the main view; a wider shot can show the item in use. They
inherit the main image’s technical requirements, but Google permits staging and
views that show only part of the product. An image of one component can also
explain a bundle.

| Check | Specification | Source |
|---|---|---|
| Number | Up to 10 additional images; optional | Additional image link |
| Minimum | Main-image size requirements, including the dated transition above | Additional image link |
| Recommended size | 1500 x 1500 px or above | Additional image link |
| Maximum | Same as main: 64 MP and 16 MB | Additional image link; Image link |
| Formats | JPEG, WebP, PNG, GIF, BMP, TIFF | Additional image link |
| Background | Staging and product-in-use scenes allowed | Additional image link |

> Google allows up to 10 additional images and recommends 1500 x 1500 pixels
> or above. Method: read the attribute’s format table, notice, and exceptions
> together, including its rule for undersized additional images.
> Source: Google Merchant Center Help, Additional image link, undated,
> accessed October 23, 2026.
> https://support.google.com/merchants/answer/6324370?hl=en

An additional image below the minimum won’t be shown, but it does not itself
disapprove the product. That exception is about size, not permission to add
promotional overlays.

<!-- SECTION: Lifestyle images -->

## How does lifestyle_image_link differ?

This optional attribute supplies a scene for free listings: the product in use,
staged in a room, or shown as part of a set. It is not a replacement for the
required main image.

| Check | Specification | Source |
|---|---|---|
| Number | Up to 5 lifestyle images | Lifestyle image link |
| Minimum | 600 x 600 px on the attribute-specific page | Lifestyle image link |
| Recommended size | Highest-resolution full-size image available, within the caps | Lifestyle image link |
| Maximum | 64 MP and 16 MB | Lifestyle image link |
| Formats | JPEG, WebP, PNG, GIF, BMP, TIFF | Lifestyle image link |
| Background | Real-world or staged context; no borders or padding | Lifestyle image link |

> The lifestyle attribute permits up to 5 images, requires at least 600 x 600
> pixels, and gives upper limits of 64 megapixels and 16 MB. Its aspect-ratio
> range is printed as “2:0 and 2:3”; the first value is unusable. Method:
> direct reading of the attribute page, with that defect left uncorrected.
> Source: Google Merchant Center Help, Lifestyle image link, undated,
> accessed October 23, 2026.
> https://support.google.com/merchants/answer/9103186?hl=en

Google’s general Image best practices page applies primary-image resolution
guidance to lifestyle images. The attribute page still requires 600 x 600.
Use the higher minimum. The malformed ratio has no verified correction;
check the intended crop in Merchant Center before preparing the full set.

Source for the general guidance: Google Merchant Center Help, Image best
practices, undated, accessed October 23, 2026.
https://support.google.com/merchants/answer/18353357?hl=en

<!-- SECTION: Disapprovals -->

## What gets a Merchant Center image rejected?

Read the issue named in Needs attention before changing the artwork. Google may
simply be unable to fetch the file.

| Problem | What to change | Google Help source |
|---|---|---|
| Added sale text, shipping claims, or a watermark | Supply a product image without the promotional layer | Text on image |
| A border, placeholder, or unrelated item in the main image | Show the actual item sold; keep unrelated props out of the main view | Image link |
| Wrong color or pattern | Match the pictured variant to the product and landing page | Clothing and accessories |
| Broken or blocked URL | Serve the actual supported image file at a public, crawlable URL | Product image status |
| File extension and format disagree | Fix the export and URL so they identify the same format | Product image status |

Branding that is part of the physical product differs from a logo added over
the photograph. Google permits the former. Its rules also contain specific
generic-image exceptions for hardware, vehicles and parts, and software; a
placeholder is not automatically acceptable for other categories. A set sold
together can appear together; unrelated products are the problem in a main
image. AI disclosure labels have a separate exception, explained below.

Sources: Google Merchant Center Help, Text on image and Image link, undated,
accessed October 23, 2026.
https://support.google.com/merchants/answer/12158684?hl=en
https://support.google.com/merchants/answer/6324350?hl=en

For URL failures, test the exact submitted address outside a signed-in session.
Confirm that Googlebot and Googlebot-Image can fetch it. Fixing the picture
won’t repair an inaccessible server path.

Source: Google Merchant Center Help, How to check and manage your product
image status, undated, accessed October 23, 2026.
https://support.google.com/merchants/answer/18353079?hl=en

<!-- SECTION: Framing and variants -->

## Do backgrounds, apparel, and variants need separate treatment?

A white background is recommended, not universally mandatory. Google’s Image
best practices page accepts staged images that clearly show the item. Its
clothing guide recommends showing clothing on a model, while shoes, bags, and
accessories appear alone in main images and on a model in additional views.

For a full-body clothing photo, keep the head and feet in frame.

> Google recommends a product filling 75 to 90 percent of the frame. This is
> framing guidance, not a published width-versus-area measurement formula.
> Method: read the recommendation in the Image best practices page.
> Source: Google Merchant Center Help, Image best practices, undated,
> accessed October 23, 2026.
> https://support.google.com/merchants/answer/18353357?hl=en

Check the variant, too. The clothing guide says both main and additional images
should show the variant being sold, with the correct option selected on the
destination page. Name the export for that variant and check it against the
selected option, especially when similar finishes share a folder.

Source: Google Merchant Center Help, Best practices for advertising clothing
and accessories, undated, accessed October 23, 2026.
https://support.google.com/merchants/answer/7348545?hl=en

Use the white background packshot guide for production. The Platform specs hub,
Amazon product image requirements, and Shopify product image sizes cover other
destinations. The Shopify platform page explains the store workflow; its image
settings do not replace Merchant Center’s feed rules.

<!-- SECTION: AI metadata -->

## Can AI-generated product images keep their required metadata?

Google allows AI-generated imagery subject to its image rules and requires
metadata identifying that origin. Preserve the embedded IPTC DigitalSourceType
property through export and delivery.

> “Don’t remove embedded metadata tags” is Google’s instruction for images
> created with generative AI. Method: direct reading of the additional-image
> attribute’s metadata rule, also present on the main and lifestyle pages.
> Source: Google Merchant Center Help, Additional image link, undated,
> accessed October 23, 2026.
> https://support.google.com/merchants/answer/6324370?hl=en

IPTC’s identifier `trainedAlgorithmicMedia` describes content created with a
trained generative model. `compositeSynthetic` describes a composite with
generative elements, such as a photographed product in an AI-made setting.
`algorithmicMedia` covers a different process: algorithmic creation without a
model trained on sampled content. Use the value that describes how the image
was made.

Source: IPTC NewsCodes, Digital Source Type vocabulary, checked October 23,
2026. https://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia
https://cv.iptc.org/newscodes/digitalsourcetype/compositeSynthetic
https://cv.iptc.org/newscodes/digitalsourcetype/algorithmicMedia

The Image studio supports output up to 4K, depending on the engine. Its
transparent-background option is limited to the ChatGPT Image 2.5 engines with
PNG or WebP. The free Image editor can crop the result. These are production
tools, not a Merchant Center connection.

> hubStudio’s help center documents output up to 4K and limits transparent
> output to its ChatGPT Image 2.5 engines in PNG or WebP. Method: checked
> against the current Image studio help and the binding product description.
> Source: hubStudio Help, Create an image, checked October 23, 2026.
> https://www.hubstudio.ai/help/create-an-image

Choose Download image for the original render.

Do not use Download clean copy or an Image anonymizer export for a feed: they
strip the embedded markers. Inspect the final file after any crop, conversion,
or compression; downloading the original is not proof that every required tag
is present. If tags are missing, correct the metadata before submission, then
inspect the file served at the final image URL. The eCommerce design service
covers work made with the studio team inside the app.

Source: hubStudio Help, Create an image and Assets Library and the tools,
checked October 23, 2026. https://www.hubstudio.ai/help/assets-library

<!-- SECTION: Automatic improvements -->

## Will automatic image improvements fix a disapproval?

They may fix an overlay. Google says automatic image improvements are off by
default; enable them under Products, Automations. Merchant Center then tries to
remove detected text, watermarks, or logos. Successful changes can replace the
image and restore approval. Inspect the result in Needs attention, where
affected products show the original and improved images.

Google also exempts AI disclosure labels from its overlay and watermark
prohibitions. Do not treat that exception as permission to add a sale badge, or
as a substitute for the embedded metadata rule. This is production practice,
not legal advice.

Source: Google Merchant Center Help, Allow Merchant Center to improve your
product images, undated, accessed October 23, 2026.
https://support.google.com/merchants/answer/12724659?hl=en

<!-- SECTION: FAQ -->

## FAQ

### What size should Google Shopping images be?

Use Google’s recommendation of around 1500 x 1500 pixels or above as the
starting point for main and additional images. Check both pixel count and file
weight before delivery. The minimum is a separate question: the table above
distinguishes the temporary floors, the incoming general floor, and the
lifestyle-specific requirement.

### Why was my Google Merchant Center image disapproved?

Read the issue in Products, Needs attention. It may concern promotional
overlays, an undersized image, the wrong product, or a file Google cannot
reach. Test the submitted URL before commissioning another image. If the
problem is an overlay, replace the image or review the result of automatic
image improvements.

### Can I use AI-generated images in Google Shopping?

Yes, if they meet the image rules and contain metadata identifying their AI
origin. Preserve the embedded DigitalSourceType property, and inspect the
delivered file after editing or conversion. Also compare the visible product
with the actual item: a correctly tagged image can still depict the wrong
color, shape, or variant.

### What is the minimum image size for Google Merchant Center in 2027?

The general minimum becomes 500 x 500 pixels on January 31, 2027. Prepare
replacement main images before that date. Do not apply that number to every
attribute without checking: the lifestyle page specifies a higher floor, and TV
Shopping ads already have their own requirement. The dated table above keeps
those cases separate.

### Do Google Shopping images need a white background?

Not universally. Google recommends solid white or light-neutral backgrounds for
main images and also accepts staged images that clearly show the product.
Lifestyle images serve a different purpose: context or use. Keep that
distinction when preparing the set, and don’t add promotional text simply
because an image has a lifestyle setting.

### What is a lifestyle image in Merchant Center?

It shows the product in a setting or in use and is submitted through the
optional lifestyle_image_link attribute for free listings. It does not replace
the main image. The attribute’s own page sets a higher minimum resolution than
the general incoming rule and prohibits borders, padding, promotional elements,
and other text.

<!-- SECTION: Changelog -->

## What changed in this review?

October 23, 2026: checked the main, additional, and lifestyle attributes;
separated current minima from the January enforcement date; documented the
lifestyle-page conflict; and checked metadata preservation and automatic image
improvements against their source pages.

<!-- CTA -->

Prepare the product views in the Image studio, then check the exported files
against the attribute they will serve.

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate with generate-image-openai, gpt-image-2, high quality; inspect before
converting to WebP. This is an editorial illustration, not a compliant feed
example or a screenshot of Merchant Center.

- Save to: public/Images/insight-google-merchant-center-image-requirements.webp
- Reference: /Images/insight-google-merchant-center-image-requirements.webp
- Format: WebP, landscape 3:2, below 250 KB, maximum width 2000 px
- Alt: A sage-green enamel kettle on a white paper sweep beside a worn studio worktable, with a hand adjusting the paper edge.
- Creative angle: The edge of a paper sweep makes the choice between an isolated product view and its working context visible in one ordinary scene.

IMAGE PROMPT (use verbatim):

A candid documentary photograph of an ordinary product photography setup in a small lived-in Changsha creative studio, landscape 3:2. One unbranded sage-green enamel kettle with a simple dark handle stands on a slightly creased white paper sweep at the right third of a scuffed wooden worktable. The curved white paper ends visibly near the front of the table, revealing worn wood and a small loose piece of masking tape, so the picture quietly shows the boundary between an isolated product view and its everyday surroundings. At the far right edge only the naturally positioned forearm and hand of a Chinese studio assistant in a faded navy cotton sleeve enters, loosely pinching the outer paper edge rather than posing or touching the kettle. Believable anatomy and grip, normal skin texture and small wrinkles, plausible kettle construction, a single spout and a single handle. The subject appears once only. Left side has breathing space and soft empty wall, with one incidental out-of-focus folded cloth near the back. Uneven natural window light from camera left, one coherent shadow, no studio glow or perfect reflections. Observational waist-height framing on a full-frame 50mm prime lens at f/5.6, slightly off-center spontaneous composition, warm subdued colors, lifted black point, fine film grain and realistic surface texture. Keep the paper creases, worn tabletop and incidental clutter physically plausible. No showroom cleanliness, flawless symmetry, coordinated styling, polished advertising mood, beauty retouching, artificial bokeh halos, distorted fingers, melted objects, text, letters, logos, watermarks, screens, diagrams or infographics. No real person is referenced.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 6 questions
Breadcrumb: Home > Insights > Google Shopping image requirements for 2026
Author: Cyril Drouin
Author URL: /about/team/cyril-drouin
datePublished: 2026-10-23
Publication note: Authorized publish step sets the actual publication date.
Reviewed: 2026-10-23
-->

<!-- ASSET BRIEF
TABLES: Main image requirements; additional image requirements; lifestyle
requirements; issue-to-remedy table. Each uses three columns and primary
Google source labels. Preserve the distinction between current and future
minimums and the lifestyle-specific minimum.
DATED BOX: January 31, 2027 general minimum, with the existing source quote.
CHANGELOG: Keep the dated review paragraph and update this URL in place.
CHARTS: None; no measured performance dataset is claimed.
SCREENSHOTS: No app UI is shown. Five real Google Help captures are evidence
in the research directory, not public illustrations. No reconstructed backend.
DOWNLOADS: None.
VIDEO: Hero-only under settled fallback 12; no showcase clip is represented.
INTERNAL LINKS:
  Platform specs -> /resources/specs
  Amazon product image requirements -> /resources/insights/amazon-product-image-requirements
  Shopify product image sizes -> /resources/insights/shopify-product-image-sizes
  white background packshot guide -> /resources/how-to/ai-white-background-packshot
  Shopify platform page -> /solutions/platforms/shopify
  eCommerce design service -> /services/design/ecommerce
  Image studio -> /app/create
  Cyril Drouin -> /about/team/cyril-drouin
CTA DESTINATION: APP_SIGNUP from src/lib/links.ts.
FIRST-PARTY FIGURES: Up to 4K and the ChatGPT Image 2.5 transparent-background
restriction from /help/create-an-image; engine-dependent, no performance or rate.
CATEGORY: Platform specs.
RESEARCH FILE: editorial/research/google-merchant-center-image-requirements.md
-->
