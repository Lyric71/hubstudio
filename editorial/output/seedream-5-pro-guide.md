---
title: Seedream 5.0 Pro Prompts for Product Images
slug: seedream-5-pro-guide
description: Prompt Seedream 5.0 Pro for product and campaign images: prompt structure, multi-image edits that keep the product, its 2K ceiling and limits.
excerpt: What ByteDance documents for Seedream 5.0 Pro, the prompt structure it rewards, multi-image product edits, and why 4K is a job for Seedream 4.5.
template: howto
---

<!-- HERO SECTION -->

# Seedream 5.0 prompts for product and campaign images

Seedream 5.0 Pro, ByteDance's newest image engine, rewards a plain, specific
brief and can merge several pictures into one scene. It also stops short of
4K, and that decides which Seedream you pick for a master file.

<!-- INTRODUCTION -->

## How do you write Seedream 5.0 prompts?

Describe the subject, what it is doing and where, then add style, color,
light and composition, in plain sentences. Say what the image is for. Put
every word you want rendered in double quotes. For an edit, name the change
and what must stay. In hubStudio, Seedream 5.0 Pro runs in the Image studio.

That advice comes from ByteDance, the engine's maker. This guide uses two
kinds of source only. One is ByteDance's own documentation: the Seed team's
pages in English, and the Chinese documentation on Volcano Engine, ByteDance's
cloud, which is where the hard limits live. We read all of it on October 21,
2026, and ran four test renders the same day to settle a question it raised.

<!-- SECTION: What it is -->

## What is Seedream 5.0 Pro, and what changed from 4.5?

ByteDance released Seedream 5.0 Pro on July 8, 2026, and calls it its
"multimodal image creation model." The launch post lists better image-text
alignment, structure, text rendering and aesthetics, plus four additions:
dense infographics, interactive editing, more realistic light and skin, and
native rendering in over ten languages besides Chinese and English.

> ByteDance says 5.0 Pro improves image-text alignment, structure, text
> rendering and aesthetics, and adds point and lasso editing, layer
> separation and multi-image fusion. It also says "there is still room to
> improve in finer-grained text rendering and pixel-level editing
> consistency."
> Source: ByteDance Seed, Seedream 5.0 Pro launch post, July 8, 2026, the maker's own claims and stated limitation.

The hard numbers sit in the API reference. They decide which engine gets the job.

| Capability              | Seedream 5.0 Pro                         | Seedream 4.5                       | In the hubStudio Image studio                   |
|-------------------------|------------------------------------------|------------------------------------|-------------------------------------------------|
| Output size             | 1K, 1.5K or 2K, up to 4,624,220 pixels   | 2K or 4K, up to 4,096 by 4,096     | 2K on 5.0 Pro; 4K on 4.5                         |
| Reference images        | Up to 10                                 | Up to 14                           | Up to 4 on either                               |
| Output format           | PNG or JPEG                              | JPEG                               | JPG on both                                     |
| Transparent background  | From one picture already transparent, PNG | Not offered                        | Not on Seedream; ChatGPT Image 2.5 engines      |
| Point, lasso, layers    | Yes                                      | No                                 | Not in the form                                 |
| A series of images      | Not yet                                  | Yes                                | One image per run                               |

> ByteDance's API sets Seedream 5.0 Pro's output between 921,600 and
> 4,624,220 pixels, in 1K, 1.5K or 2K tiers, and Seedream 4.5's between
> 3,686,400 and 16,777,216, which is 4096 by 4096.
> Source: ByteDance, Volcano Engine image generation API, updated October 14, 2026, the maker's own parameter reference.

> ByteDance's API takes up to 10 reference images on Seedream 5.0 Pro and up
> to 14 on Seedream 4.5; it returns PNG or JPEG on 5.0 Pro and JPEG only on
> 4.5.
> Source: ByteDance, Volcano Engine image generation API and tutorial, updated October 13 and 14, 2026, parameter reference and model table.

<!-- SECTION: The 4K question -->

## Can Seedream 5.0 Pro make a 4K image?

No. Its ceiling is about 4.6 megapixels, enough for a 2,048-pixel square. We
checked it on the same path the app uses to render.

> When we asked Seedream 5.0 Pro for a 4,096-pixel square on October 21,
> 2026, the engine refused: "image area must be at most 4624220 pixels." The
> same request on Seedream 4.5 came back 4,096 pixels square.
> Source: hubStudio test renders, four requests on the app's render path, October 21, 2026, dimensions read from the returned files.

So keep Resolution on 2K when you run 5.0 Pro in hubStudio. A run that fails
isn't charged, but it costs you the wait. For a 4K master, or a 4K upscale of
an existing photo, switch the engine to Seedream 4.5.

Upscale & restore follows the same rule. Your source is resized to 1,536
pixels on the long side before it's sent, so on 5.0 Pro an upscale lands
inside that 2K ceiling. Run it on Seedream 4.5 when the file has to reach 4K.
And leave "4K" out of the prompt: ByteDance's API takes the output size as a
separate setting, and in the app that's the Resolution list.

<!-- SECTION: Prompt structure -->

## What prompt structure works for product images?

ByteDance's prompt guide for its Seedream family asks for concise natural
language: subject, action and environment first, then style, color, light and
composition. It says a short, precise prompt beats a pile of ornate
adjectives. For product work we split that into six slots. Text comes after.

| Slot       | What to write                                         | Example                                                    |
|------------|-------------------------------------------------------|------------------------------------------------------------|
| Use        | Where the image runs and what kind of image it is     | Hero image for a product page, square                      |
| Subject    | The product, its material and finish, which side shows | A frosted glass jar of face cream, matte white lid, label facing camera |
| Setting    | The surface, the background, the time of day          | On pale travertine, plain warm gray wall, early morning   |
| Light      | One source and its side                               | Soft window light from camera left, one shadow to the right |
| Camera     | Lens, height, framing                                 | 85mm, eye level, jar on the right third                    |
| Finish     | The grade and what to leave out                       | Natural color, fine grain, no props, no extra text         |

Text gets its own rule: the words go in double quotes. The guide's example
is a poster titled "Seedream 4.5," not a poster titled Seedream 4.5. Keep it
short. The maker still lists finer-grained text as a weak spot, so quote a
headline and leave the small print to a layout tool.

Two more habits come from the same guide. Name the use and the type of image
("a logo for a games company," not "an abstract picture of a dog"). And when
the look matters, use a precise style word or upload a reference picture
(a vague mood gives the engine nothing to hold).

<!-- SECTION: Multi-image edits -->

## How do you keep the product when you edit with several pictures?

Pick Edit an image and upload up to four source pictures: the product photo,
then a scene, a style reference or a second product. In the prompt, number
them and give each one a job. ByteDance's own example reads "Using the
material from Image 1 and the color swatch from Image 2, modify the sofa in
Image 3."

Then name what is fixed. ByteDance's guide wants the object you're changing
named outright (no "make it pink"), and it wants you to say that everything
else stays as it is. For a product that means the shape, the cap, the label text
in quotes and the color. Repeat that keep list on every follow-up run.

Three app details matter here. Your uploads are resized in the browser to
1,536 pixels on the long side, so send the sharpest photo you have. The shape
of the result follows the first picture, so lead with the one whose framing
you want. And ByteDance says the engine reads marks drawn on a picture, such
as colored frames that show where each element goes. The Image studio has no
lasso, but the free Image editor draws boxes and arrows: mark a copy there,
download it and upload the marked copy as a source.

The product photo to lifestyle image guide walks through the same edit with
several engines side by side.

<!-- SECTION: Prompt examples -->

## Prompt examples for product and campaign work

Run the first one as Text to image. The other two are edits. Set the shape
in the form; the scene goes first in the second prompt because the result
takes the shape of the first upload.

### Packshot

```prompt
Hero image for an ecommerce product page, square. A frosted glass jar of face
cream with a matte white lid, front label facing the camera, the label text
"LUMA" in a thin sans-serif and "NIGHT CREAM 50 ML" below it. The jar stands
on a pale travertine block against a plain warm gray wall. Soft window light
from camera left, one soft shadow falling to the right. 85mm lens at eye
level, the jar centered and filling most of the frame height. Natural color,
fine grain. No props, no other text, no watermark.
```

### Lifestyle scene from a product photo

```prompt
Image 1 is the setting. Image 2 is the product photo. Place the jar from
Image 2 on the bathroom shelf in Image 1, beside a folded linen towel, in
early-morning light from the window on the right. Change only what sits on
the shelf and the light. Keep the jar's shape, glass, lid, color and label
exactly as in Image 2, including the text "LUMA" and "NIGHT CREAM 50 ML".
Natural color, 50mm lens, jar on the left third. No other text.
```

### Campaign key visual with a headline

```prompt
A horizontal campaign key visual for a winter skincare launch, 16:9. Image 1
is the product photo: keep the jar exactly as it is, label included. Set it
in the lower right on a snow-dusted slate ledge, cold blue dusk outside a
window behind it, one warm light from the left on the jar. Leave the upper
left calm and dark for type. Headline in the upper left, in a clean bold
sans-serif, exactly: "Made for the long nights". No other words, no logo.
```

Check the headline letter by letter before anyone signs it off. Anything
longer than one line belongs in layout.

<!-- SECTION: 4.5 or 5.0 Pro -->

## Seedream 4.5 or 5.0 Pro: when is the older engine enough?

Often. ByteDance says 4.5 "strictly preserves the details of the reference
images" and keeps facial features, lighting and color tone, and it's the only
Seedream in the app that reaches 4K.

| The job                                   | Engine          | Why                                                         |
|-------------------------------------------|-----------------|-------------------------------------------------------------|
| A 4K master or a 4K upscale               | Seedream 4.5    | It renders natively up to 4K; 5.0 Pro stops near 4.6 MP     |
| A dense layout, an infographic, a poster  | Seedream 5.0 Pro | The maker built it for text-rich, dense layouts            |
| A headline in French, Spanish or Arabic   | Seedream 5.0 Pro | Native rendering in over ten languages, per the maker      |
| A product edit from up to four photos     | Either          | Both take four sources in the app                           |
| A cutout on a transparent background      | ChatGPT Image 2.5 Flare or Sunburst | Seedream returns JPG in the app        |

The engines page lists every engine by maker. For the transparent cutout,
the ChatGPT Image 2 product prompting guide covers OpenAI's engines, and the
Nano Banana prompting guide covers Google's.

<!-- SECTION: In the app -->

## How do you run Seedream 5.0 Pro in hubStudio?

![The image studio: the Image and Video switch in the dark band, the engine and its price with the three jobs, the prompt box on the left and the empty results panel on the right](/Images/help/create-an-image-studio.webp "The Image studio, where you pick the job and the engine.")

- **Open Image from the menu.** Pick Text to image, Edit an image, or Upscale
  & restore, then choose Seedream 5.0 Pro under Engine.
- **Add your sources.** An edit takes up to four PNG, JPEG or WebP files; an
  upscale takes one.
- **Write the prompt.** The box holds 4,000 characters. Improve with AI
  rewrites what you typed for the engine you chose, and the Catalog skills
  E-commerce packshot, Lifestyle product scene and Legible text inside an
  image shape that rewrite.
- **Set Resolution to 2K and pick a shape.** The file comes back as a JPG.
- **Check the price, then run.** The price shows before anything renders, and
  a failed run isn't charged. Every picture lands in History with its prompt
  and engine, so a good result can be run again.

If you'd rather have our studio make the pictures, the AI image production
page explains how that works.

<!-- SECTION: QA -->

## What should you check before a Seedream image ships?

| Check          | What to look for                                                        |
|----------------|-------------------------------------------------------------------------|
| Label and type | Every quoted word, letter by letter, at full size                       |
| The product    | Shape, cap, proportions and color against the real item or the photo    |
| The keep list  | Run two against run one: nothing on the product should have moved       |
| Light          | One source, every shadow falling the same way                           |
| Contact        | Where the product meets the surface, which is where renders give way    |
| Size           | Open the file: 5.0 Pro tops out near 4.6 megapixels, 4.5 reaches 4K     |
| Format         | A JPG has no alpha channel, so plan the background before the layout    |
| Claims         | Anything printed on the pack is approved for that market by a person    |

<!-- SECTION: FAQ -->

## FAQ

### How do I write prompts for Seedream 5.0?

Write plain sentences, not keyword strings. ByteDance's guide asks for the
subject, the action and the environment, then style, color, light and
composition, and it says to state what the image is for. Put any text you
want rendered in double quotes. For an edit, name the object, the change and
everything that must stay as it is.

### What is the difference between Seedream 4.5 and 5.0 Pro?

5.0 Pro, released July 8, 2026, adds point and lasso editing, layer
separation, denser text layouts and over ten rendering languages, per
ByteDance. 4.5 reaches 4K, while 5.0 Pro stops at about 4.6 megapixels. The
maker's API takes 14 reference images on 4.5 and 10 on 5.0 Pro. In
hubStudio, both take four and return JPG.

### Can Seedream edit my product photo?

Yes. In hubStudio, pick Edit an image, upload the product photo first, and
write the change plus a keep list: shape, color, lid, label text in quotes.
ByteDance says 4.5 strictly preserves reference details and that 5.0 Pro
fuses several references into one scene. It also says pixel-level editing
consistency still has room to improve, so compare every result with the
original.

### How many reference images can Seedream use?

ByteDance's API accepts up to 10 reference images on Seedream 5.0 Pro and up
to 14 on Seedream 4.5. The hubStudio Image studio takes up to four source
pictures per edit on either engine, resized to 1,536 pixels on the long
side. Number them in the prompt, "Image 1 is the product photo," and give
each one a job.

### Can Seedream render text inside an image?

Short text, yes. ByteDance's guide says to put the words in double quotes,
and the maker built 5.0 Pro for text-rich layouts in over ten languages. It
also says finer-grained text rendering still has room to improve. Keep
headlines short and read them letter by letter, and set small legal copy in
a layout tool.

### Can Seedream make an image with a transparent background?

Not in hubStudio, where both Seedream engines return JPG. ByteDance's own
API has a transparent mode on 5.0 Pro, but it needs one input that already
has an alpha channel and returns PNG. For a cutout in the app, use ChatGPT
Image 2.5 Flare or Sunburst with PNG or WebP, then confirm the file really
has transparency.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
guide's featured image and OG image.

- Save to:    public/Images/howto-seedream-5-pro-guide.webp
- Reference:  /Images/howto-seedream-5-pro-guide.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph inside a small, lived-in retouching studio in Changsha, China, late afternoon. On a worn cork wall, a large matte print of a frosted glass face-cream jar with a matte white lid is pinned up beside a much smaller proof print of the very same jar, the two prints showing the same picture at two sizes, both jar labels plain and blank. A young Chinese retoucher's hand, the cuff of a faded olive cotton overshirt rolled back, short unpainted nails, a small ink smudge on one knuckle, holds a brass-rimmed magnifying loupe flat against the edge of the lid on the large print. Below the prints, on a narrow wooden ledge, stands the real frosted glass jar with its blank label, next to a roll of masking tape and two loose pushpins. Behind, out of focus: a gray steel shelf with folded seamless paper rolls, a desk lamp switched off, a monitor turned away from camera with its screen dark. One light source only: soft daylight from a tall window at camera right, raking across the cork and the paper so the print surface shows its slight waves, the jar casting one soft shadow to the left along the ledge, the far corner of the room falling into warm dim shadow. Shot on a full-frame camera with a 50mm prime lens at f/4 from slightly below eye level, the hand, the loupe and the jar on the right third, quiet open cork and wall on the left for typography, cropped tight so the large print runs out of frame at the top. Warm-shadow film grade in the spirit of Portra 400, slightly desaturated mid-tones, lifted black point, fine natural film grain across the whole image, gentle falloff at the edges. Honest textures: cork crumbs, paper tooth, a faint fingerprint on the glass jar, pinholes in the cork. No readable text anywhere, labels blank, no logos, no watermark, no screens showing content.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (rendered by HowtoLayout; match what the layout emits)
FAQPage: yes, 6 questions
Breadcrumb: Home > How-to > Seedream 5.0 prompts for product and campaign images
Author: Cyril Drouin
datePublished: 2026-10-28
Reviewed: 2026-10-21 (ByteDance documentation read and test renders made on this date; quarterly recheck in watch.csv)
-->

<!-- ASSET BRIEF
TABLES: (1) capability table, rows output size, reference images, output
  format, transparent background, point lasso and layers, a series of
  images; columns Seedream 5.0 Pro and 4.5 from ByteDance's Volcano Engine
  API and tutorial, and the hubStudio Image studio from the help center and
  the October 21 test renders; (2) prompt structure table, six slots;
  (3) engine choice table, five jobs; (4) QA table, eight checks.
CHARTS: none.
SCREENSHOTS: reuse the existing localized help capture
  /Images/help/create-an-image-studio.webp (help center, captured
  2026-10-08), placed in "How do you run Seedream 5.0 Pro in hubStudio?".
  No new capture. Test renders are not published.
DOWNLOADS: none.
INTERNAL LINKS:
  The engines page -> /app/engines
  the ChatGPT Image 2 product prompting guide -> /resources/how-to/chatgpt-image-2-product-prompting-guide
  The product photo to lifestyle image guide -> /resources/how-to/product-photo-to-lifestyle-image
  Nano Banana prompting guide -> /resources/how-to/nano-banana-prompting-guide
  AI image production page -> /solutions/ai-production/image
FIRST-PARTY FIGURES: none from the delivery ledger. App facts come from the
  help center, src/content/help/create-an-image.md (updated 2026-10-12) and
  skills.md; the 4K refusal and the returned sizes come from hubStudio's own
  test renders of October 21, 2026, logged in the research file.
RESEARCH FILE: editorial/research/seedream-5-pro-guide.md
-->
