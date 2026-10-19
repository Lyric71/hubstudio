---
title: Shopify Product Image Sizes for 2026
slug: shopify-product-image-sizes
description: Shopify product image sizes, limits and formats for 2026, quoted from the Shopify Help Center, with what the theme decides about crop and ratio, dated.
excerpt: Prepare Shopify product images with verified upload limits, consistent crops, and a manual export workflow. Separate platform requirements from theme settings before making your batch.
template: spec
---

<!-- HERO SECTION -->

# Shopify product image sizes for 2026

A file can upload successfully and still lose the product’s handle in the
storefront crop. Check the size of the file and the shape of its display area.

Reviewed October 20, 2026.

<!-- INTRODUCTION -->

## What Shopify product image size should you use?

For square product images, start at 2048 x 2048 pixels, Shopify’s recommended
size. Keep files below 20 MB and check the crop in your theme before preparing
the batch. You can make and size the files in hubStudio, then download them
and upload them in Shopify’s admin.

| Item                 | Product-media specification               | Meaning for production                        | Source                                            |
| -------------------- | ----------------------------------------- | --------------------------------------------- | ------------------------------------------------- |
| Square image         | 2048 x 2048 px recommended                | A starting export size, not a mandatory shape | Product media types                               |
| Image ceiling        | 5000 x 5000 px, or 25 MP; below 20 MB     | Check dimensions and file weight separately   | Product media types                               |
| Shared image formats | JPEG, PNG, WebP, HEIC, GIF                | Listed on both product and Files pages        | Product media types; Uploading and managing files |
| Uploaded video       | Up to 10 minutes and 1 GB; MP4, MOV, WebM | Theme support also matters                    | Uploading and managing files                      |
| Product model        | Up to 500 MB; GLB or USDZ                 | Check the model in a supporting theme         | Product media types                               |

> For square images, Shopify says “a size of 2048 x 2048 px usually displays best.”
> Its product page gives the image and model limits above.
> Method: read the product-specific requirements, separately from theme rules.
> Source: Shopify Help Center, Product media types, undated, read October 20,
> 2026. https://help.shopify.com/en/manual/products/product-media/product-media-types

> The video and shared-format rows follow the admin upload requirements.
> Method: compared that table with the product-specific page. Source: Shopify
> Help Center, Uploading and managing files, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads

The Platform specs hub covers other destinations. These requirements apply
to Shopify product media; don’t treat them as a specification for every
channel where you sell.

<!-- SECTION: Limits and conflicting guidance -->

## Why do Shopify’s own image limits differ between pages?

The product-media page and the Files table agree on 25 MP. The theme-image
page has a 20 MP upload-limit section, while another passage on that page
mentions 25 MP. It also says product-image limits differ. That leaves a
documented spread of 20 to 25 MP across these contexts, not a reason to
replace the product-specific ceiling with the smaller number. The product
page says smaller than 20 MB; the Files page says a maximum of 20 MB.
Stay below that boundary to satisfy both wordings.

> The theme-image page contains both 20 MP and 25 MP guidance. Method:
> compare its upload-limit section with its compression section and the
> product-specific table. This is a documentation conflict, not a measured
> acceptance test. Source: Shopify Help Center, Uploading images, undated,
> read October 20, 2026.
> https://help.shopify.com/en/manual/online-store/images/theme-images

Before exporting the catalog, try a file in the intended upload location.
Record the upload location, exported dimensions, format, and file weight
alongside the result. If a large image is rejected, preserve the error text
and make a smaller export for that placement. Keep the original master.

The accepted-format lists need the same care. Product media types also names
TIFF, BMP, and SVG. Uploading images says TIFF and BMP convert on upload;
resizing or cropping SVG needs raster output. For a routine photo handoff,
use JPEG for a photographic export or PNG when you need transparency, then
inspect the uploaded result. This follows the practical format guidance in
Shopify’s Uploading images page. Product media types puts PNG first, then
JPEG, so don’t read either preference as an exclusive acceptance list.

<!-- SECTION: Aspect and display -->

## Who decides whether the image is cropped?

Your file sets the available picture. The theme sets how that picture fits
its display area. Shopify’s media-editor guidance recommends matching aspect
ratios for images shown together. Its theme troubleshooting page gives the
same advice for collection images that don’t align.

| Decision             | Where to check it                        | What to approve                              |
| -------------------- | ---------------------------------------- | -------------------------------------------- |
| Upload acceptance    | Shopify product media requirements       | File type, pixels, file weight               |
| Product framing      | Your source image and export             | Whole product, truthful proportions          |
| Collection alignment | Main images across the collection        | Consistent width-to-height ratio             |
| Display crop         | Theme section and its available settings | Product remains visible on desktop and phone |
| Zoom behavior        | The active product template              | Useful detail in the actual storefront       |

Within a product set, a common ratio makes changes of view less distracting.
Treat that as a production choice. Shopify doesn’t require every image to
be square.

As a framing example, picture a tall bottle beside a wide serving bowl. A square canvas can hold
both, but their empty space will differ. Approve their apparent scale in
the collection grid before applying the same crop to the rest of the range.
The bowl may need more space around it than you expected.

> Matching aspect ratios helps collection images align. Resizing with the
> proportions unlocked can distort a product; crop to change the shape.
> Method: read Shopify’s editor instructions and collection troubleshooting.
> Source: Shopify Help Center, Using the media editor and Troubleshooting
> your online store theme, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/shopify-admin/productivity-tools/media-editor
> https://help.shopify.com/en/manual/online-store/themes/theme-support/troubleshooting

In the theme editor, inspect the affected section’s image settings. Their
names and availability depend on the theme and version. Check whether the
section can adapt to the image, or whether a supported focal point keeps
the important detail in frame.

Preview the product page and collection
separately. The collection card may hide an edge that the product page shows.

<!-- SECTION: Compression -->

## Should you compress every image to a fixed file weight?

No. Shopify’s photography guide suggests aiming at 200 KB or less. Its
theme-image guide says manual compression isn’t necessary and recommends
uploading the best quality available. The small-file suggestion is advice,
not the product upload ceiling.

> The photography guide’s 200 KB target is an optimization suggestion.
> Method: read the recommendation in its photography context, rather than
> treating it as an upload rule. Source: Shopify Help Center, Taking product
> photographs, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/products/product-media/product-photography
> The different best-quality upload advice appears in Uploading images,
> also read October 20, 2026.
> https://help.shopify.com/en/manual/online-store/images/theme-images

Stay inside the file-weight ceiling, then look closely at the export. If
compression makes a knit look waxy or erases an embossed mark, increase
quality and compare again. Lettering is worth checking at full size, even
when the rest of the picture looks fine in the collection grid.

Open the larger preview.

Shopify can deliver a different image format to a browser. That delivery
choice doesn’t mean every format it serves belongs on the upload list.

<!-- SECTION: Files and descriptions -->

## What should the filename and alt text say?

Use a unique, descriptive filename, for example linen-tote-natural-side.jpg.
Shopify warns against starting a filename with a period and against endings
reserved for image transformations. Avoid an underscore immediately before
dimensions in a filename. These naming rules help avoid unintended filename
changes.

For alt text, describe the visible product and view. In this case,
“Natural linen tote shown from the side with its outer pocket” tells the
reader something useful. A string of sales adjectives does not. Change the
description when the image shows a different detail rather than copying
the same text across the gallery.

> Use descriptive filenames and alt text that describes what the image
> shows. Method: read the Files naming guidance and Shopify’s SEO alt-text
> instructions. Source: Shopify Help Center, Uploading and managing files
> and Adding keywords for SEO, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads
> https://help.shopify.com/en/manual/promoting-marketing/seo/adding-keywords

<!-- SECTION: Video and models -->

## What changes when you add video or a model?

The video limits in the opening table apply to uploaded files. Shopify’s
product page gives a 4K maximum of 4096 x 2160 pixels; its Files page says
UHD and recommends 3840 x 2160. For a landscape handoff, use the documented
UHD recommendation unless your upload test establishes another accepted
export. Keep the source clip separately.

> The opening table uses the Files page’s uploaded-video limits. The export
> distinction above compares its UHD recommendation with the product page.
> Method: read both Help Center pages without merging their resolution wording.
> Source: Shopify Help Center, Product media types and Uploading and managing
> files, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/products/product-media/product-media-types
> https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads

Confirm that the theme supports the media, and check the store’s remaining
capacity: video and model allowances depend on its plan. For a model, inspect
its materials and orientation in the storefront after upload.

<!-- SECTION: Preparation in hubStudio -->

## How do you prepare the image in hubStudio?

Once the destination and crop are settled, prepare the export.

Start with a clear photograph of the actual product. Use Edit an image for
an instructed change, or Upscale & restore for an older source. Image studio
supports renders up to 4K depending on the engine. Review the result against
the original, especially seams and fittings that the edit could have changed.

Open the result in the Image editor. In Crop, choose Square 1:1, position
the box, and apply the crop. In Save, choose PNG, JPG, or WEBP and set the
size. The 2048 px long-side shortcut appears when the source is larger;
the width and height remain proportional. A square crop gives a square
export. The editor works at a maximum long side of 4096 pixels, so keep
larger originals separately.

> Image studio offers up to 4K on supported engines. The Image editor has
> Square 1:1 cropping, a conditional 2048 px shortcut, and a 4096 px working
> limit. Method: checked against the documented controls, not an engine test.
> Source: hubStudio Help, Create an image and Assets Library and the tools,
> checked October 20, 2026.
> https://www.hubstudio.ai/help/create-an-image
> https://www.hubstudio.ai/help/assets-library

Save a copy in the Assets Library if you want the edited file kept there,
or use Download for a local export. Upload the result through the product’s
Media section in Shopify. hubStudio doesn’t connect or sync to Shopify.

If the upload fails, check the real file format as well as its extension.
Shopify’s Adding product media guide describes failures caused by a mismatch.
Renaming the extension isn’t a conversion.

> Upload product media from the product’s Media section; check format
> mismatches when a video lacks a working preview. Method: read the upload
> steps and troubleshooting entries. Source: Shopify Help Center, Adding
> product media, undated, read October 20, 2026.
> https://help.shopify.com/en/manual/products/product-media/add-media

The AI white-background packshot guide covers preparing the main shot.
Use Product photo to lifestyle image for supporting scenes. The Ecommerce
design service and Shopify platform page cover the broader production brief.

<!-- SECTION: Changelog -->

## What was reviewed for this edition?

October 20, 2026: checked product-media and Files requirements, compared
theme guidance, and retained the differences in megapixels, formats, and
video resolution. Checked the hubStudio export controls against its help
center. The source pages are living documents without displayed revision
dates; the date here records when they were read.

<!-- SECTION: FAQ -->

## Frequently asked questions

### What size should Shopify product images be?

For a square product image, start with Shopify’s recommended 2048 x 2048
pixels. Test the actual product page before making
the batch. If the product looks too small or loses an edge, review the
framing and theme crop before increasing resolution.

### What is the maximum image size on Shopify?

For product media, Shopify lists 5000 x 5000 pixels or 25 MP, below 20 MB.
Both limits matter: a compact file can still contain too many pixels.
Theme-image documentation has different wording, explained above. Keep a
master copy and test the intended upload surface before preparing large
exports for the whole catalog.

### Should Shopify product images be square?

Shopify’s size recommendation applies when you choose a square image; it
doesn’t require that shape. The object and its display area should guide the
ratio. Keep main images consistent across a collection, then check
whether secondary views need a different crop to show the detail clearly.

### What image formats does Shopify accept?

JPEG, PNG, WebP, HEIC, and GIF appear in both the Files and product-media
lists. Shopify’s product-media page also names additional formats, with
conversion and transformation qualifications elsewhere in its help center.
Transparency or animation can change how an image looks after upload, so
inspect the preview before approving the batch.

### Why are my Shopify product images cropped?

The image’s shape may differ from the area where the theme displays it.
Look at the affected section on desktop and on a phone.
If its settings offer no suitable adjustment, prepare a crop
that keeps the product inside its visible area without stretching it.

### Can I add video to a Shopify product page?

Yes, provided the theme supports product video. Uploaded files can run up
to 10 minutes and 1 GB; check the resolution distinction above. Test playback
after upload, including the opening frame. A file that transfers successfully
but has no working preview needs investigation before you use it across
the rest of the catalog.

<!-- CTA -->

Make a product image and check the exported file in your storefront.

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate with the generate-image-openai skill; the final image is the hero
and OG asset at publication.

- Save to: public/Images/insight-shopify-product-image-sizes.webp
- Reference: /Images/insight-shopify-product-image-sizes.webp
- Format: .webp, landscape 3:2, below 250 KB, maximum 2000 px wide
- Alt: A blue enamel mug beside a square photo proof on a worn packing table.
- Creative angle: the real product beside a tighter paper crop makes the
  difference between the file and its framing visible without a diagram.

IMAGE PROMPT (use verbatim):

A candid documentary photograph of an ordinary product-photo checking moment on a used packing table in a small working studio in Changsha, China. A plain dark blue enamel camping mug with a few small scuffs sits on the right third of the table, its entire curved handle visible. Beside it lies a slightly curled square photographic print of that same blue mug on an off-white background, with the photographed handle close to the print edge. A partly used roll of brown packing tape, an unmarked folded cardboard box cut off by the far edge of the frame, and a scrap of creased paper sit casually nearby. The placement feels incidental, not styled into a perfect arrangement; the desk has scratches and a faint old cup ring. No people. One real window to camera left supplies slightly uneven afternoon light and physically consistent soft shadows to the right. Plausible 50 mm lens perspective, f/5.6, natural depth without artificial bokeh, mildly warm shadows, restrained saturation, a slightly lifted black point and fine photographic grain. Leave quiet worn tabletop space on the left. Landscape 3:2 framing, ordinary tactile materials and small believable imperfections, no glossy advertising finish, no flawless symmetry, no immaculate interior, no surreal geometry, no impossible reflections, no duplicated handles, no rendering artifacts. No text, letters, digits, logos, watermark, screen interface, diagram or infographic anywhere.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 6 questions
Breadcrumb: Home > Resources > Insights > Shopify product image sizes for 2026
Author: Cyril Drouin
Author URL: /about/team/cyril-drouin
datePublished: assigned from the actual publication date in step 4
Reviewed: 2026-10-20
-->

<!-- ASSET BRIEF
TABLES: Product-media export sheet with a source column; responsibility table
separating upload acceptance, framing, alignment, crop and zoom review.
CHARTS: None. The requirements are categorical, not measured performance.
SCREENSHOTS: Reuse the existing Image editor Crop and Save panels alongside
the hubStudio workflow. No Shopify backend screenshot is reconstructed.
Crop EN: /Images/help/image-editor-crop.webp
Crop FR: /Images/help/image-editor-crop.fr.webp
Crop ZH: /Images/help/image-editor-crop.zh.webp
Crop caption: The Crop panel controls framing; this existing capture shows
Portrait selected. Choose Square for the square export described here.
Save EN: /Images/help/image-editor-save.webp
Save FR: /Images/help/image-editor-save.fr.webp
Save ZH: /Images/help/image-editor-save.zh.webp
Save caption: The Save the picture panel controls output format and size.
This existing capture shows a portrait edit, not the square export in this
guide. Download your finished file for manual upload to Shopify.
All six files verified on disk. Use the matching locale at publication.
DOWNLOADS: None; the visible tables are the reusable export reference.
INTERNAL LINKS:
Platform specs hub -> /resources/specs
Ecommerce design service -> /services/design/ecommerce
Shopify platform page -> /solutions/platforms/shopify
AI white-background packshot -> /resources/how-to/ai-white-background-packshot
Product photo to lifestyle image -> /resources/how-to/product-photo-to-lifestyle-image
FIRST-PARTY FIGURES: Engine-dependent 4K from /help/create-an-image; Square
1:1, conditional 2048 px export shortcut, and 4096 px editor long-side limit
from /help/assets-library, checked October 20, 2026.
RESEARCH FILE: editorial/research/shopify-product-image-sizes.md
MAINTENANCE: Reviewed date and changelog stay visible. Quarterly recheck is
recorded in editorial/watch.csv for January 20, 2027.
SHOWCASE: Hero and existing localized app captures are the selected assets.
-->
