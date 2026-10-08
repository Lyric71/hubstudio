---
title: ChatGPT Image 2 Prompts for Product Images
slug: chatgpt-image-2-product-prompting-guide
description: OpenAI's documented specs for ChatGPT Image 2, a prompt formula for packshots, lifestyle shots and text on pack, six logged test runs and a QA list.
excerpt: What OpenAI documents for ChatGPT Image 2, what our six test runs showed, and the product prompts that hold up for packshots, scenes and labels.
template: howto
---

<!-- HERO SECTION -->

# ChatGPT Image 2 prompts for product images: a working guide

ChatGPT Image 2 follows a written product brief closely and sets short label
text cleanly. It still slips on small print, re-renders the whole frame on a
masked edit, and on October 8, 2026, it refused to return a transparent
background.

<!-- INTRODUCTION -->

## How do you write ChatGPT Image 2 prompts for product images?

Write the prompt like a shot list: what the image is for, the scene, the
product, every word on the pack in quotes, one light, the lens, then what must
not change. If the product already exists, start from its photo instead of
describing it. In hubStudio, ChatGPT Image 2 runs in the Image studio, and
Improve with AI rewrites your prompt for it.

What follows comes from two places only. One is OpenAI's own documentation
for the engine, read October 8, 2026. The other is six test runs we made the
same day for a fictional serum brand called Orren. Where the two disagree,
you'll see both.

<!-- SECTION: The specs -->

## What can ChatGPT Image 2 do, according to OpenAI?

ChatGPT Image 2 is the name the engine carries in hubStudio. OpenAI's API
calls it gpt-image-2, and its current snapshot is dated April 21, 2026. The
model page calls it a model "for fast, high-quality image generation and
editing," which is the maker's own claim. The limits below are what a
production team plans around.

| Capability             | What OpenAI documents                                                   | In the hubStudio Image studio                                | Source                              |
|------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------|-------------------------------------|
| Sizes                  | Edges in multiples of 16 px, long edge up to 3,840 px, ratio up to 3:1  | 1K, 2K or 4K (up to 3,840 px); Panorama 3:1 and Tall 1:3     | OpenAI guide; hubStudio help center |
| Reliable range         | Anything above 2,560 by 1,440 is "experimental"                         | The 4K setting sits in that band                             | OpenAI guide and prompting guide    |
| Quality                | Low, medium, high, or auto                                              | Low, Medium, High                                            | OpenAI guide; help center           |
| Images per request     | 1 to 10                                                                 | 1 to 10 per run                                              | OpenAI API reference; help center   |
| Reference images       | Up to 16 per edit, always read at high fidelity                         | Up to 4 per edit, resized to 1,536 px on the long side       | OpenAI API reference; help center   |
| Prompt length          | 32,000 characters                                                       | 4,000 characters                                             | OpenAI API reference; help center   |
| Mask                   | A file with an alpha channel, same size and format as the image, under 50 MB | An optional mask PNG on an edit                         | OpenAI guide; help center           |
| Transparent background | In preview; PNG or WebP only                                            | Background: Auto, Opaque or Transparent                      | OpenAI API reference; help center   |
| File formats           | PNG by default, JPEG, WebP, with compression for JPEG and WebP          | PNG, JPG, WebP, with File quality                            | OpenAI guide; help center           |
| Content filter         | Auto, or low for less restrictive filtering                             | Less strict content filter                                   | OpenAI guide; help center           |

> OpenAI documents gpt-image-2 sizes as any width and height in multiples of
> 16 pixels, up to 3,840 pixels on the long edge, a ratio no wider than 3:1
> and 655,360 to 8,294,400 pixels in total. It calls anything above 2,560 by
> 1,440 experimental, because "results can be more variable above this size."
> Source: OpenAI image generation guide and GPT Image prompting guide, read October 8, 2026, the maker's API documentation.

Two rows change how you work. The 4K setting is real, but it lives in the
band OpenAI calls experimental, so a 4K master gets inspected at full size
before anyone signs it off. And the engine reads every reference image at
high fidelity on its own: OpenAI's guide says there's no fidelity setting to
change on this model, so the detail you get back depends on the photo you
put in.

<!-- SECTION: Documented limits -->

## What does OpenAI say the engine still gets wrong?

OpenAI publishes four limitations for its GPT Image models, and it's worth
reading them as a product team would.

> Complex prompts can take up to two minutes. The model "can still struggle
> with precise text placement and clarity," may drift on "recurring characters
> or brand elements across multiple generations," and may place elements
> imprecisely in "structured or layout-sensitive compositions."
> Source: OpenAI image generation guide, "Limitations," read October 8, 2026, the maker's own list.

Two of the four decide whether a product image ships. Text decides whether
the label survives. Consistency decides whether your fifth render still shows
the same bottle as your first. Both turned up in our runs.

<!-- SECTION: Test runs -->

## What happened when we ran it?

We ran six tests through OpenAI's Images API on October 8, 2026, all on
gpt-image-2 at high quality. The product was a 50 ml amber dropper bottle and
a white carton for the same fictional brand.

| Test                   | What we asked                                                        | What came back                                                              |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Packshot from text     | The bottle, two quoted label lines, one softbox, 85mm, an off-white sweep | Both label lines exact, one shadow, the product centered                  |
| Lifestyle from text    | The same bottle described in words, on a windowsill, with a hand     | A usable frame, but the label came back in a serif and the bottle reshaped |
| Text on pack           | A carton with three quoted front lines and a nine-name ingredient list | Front lines exact; two of the nine ingredient names misspelled            |
| Reference edit         | The packshot as Image 1, a new setting, a list of what to keep       | Label text and typeface held; the new light direction followed             |
| Transparent background | The bottle isolated, background set to transparent, PNG             | Refused, twice, under both model names                                     |
| Masked edit            | The lifestyle frame, a mask over a dish, linen in its place          | Dish replaced; the linen ran past the mask and the rest shifted slightly   |

> OpenAI lists transparent backgrounds on gpt-image-2 as a preview. Our
> direct API request for one was refused: "Transparent background is not
> supported for this model."
> Source: OpenAI API reference and prompting guide, read October 8, 2026; hubStudio test runs, two requests to the Images API, October 8, 2026.

> In our masked edit, 2.4 percent of the pixels outside the mask moved by more
> than 20 levels out of 255, and the new object ran past the mask edge.
> Source: hubStudio test run, one gpt-image-2 edit at high quality, October 8, 2026, measured by comparing the input and output files pixel by pixel.

The mask result is what OpenAI's guide predicts. It says masking on these
models "is entirely prompt-based" and that the model "may not follow its exact
shape with complete precision." So a mask tells the engine where to work. It
isn't a stencil.

The two bottle shots carry the real lesson. Don't describe your
product twice. Render or shoot one approved hero, then hand it back as the
reference for every other shot (in our run, the label survived the move to a
new set intact).

<!-- SECTION: The formula -->

## What's the prompt formula for a product shot?

OpenAI's prompting guide asks for the scene, the subject, the key details and
the constraints, in that order, plus what the image is for, with short
labeled lines once a prompt gets long. For product work we add two slots of
our own: the text, and what to keep.

```prompt
Use: where the image runs (product page, social post, banner)
Scene: surface, background, time of day
Subject: the product, its material and finish, which side faces the camera
Text: every word on the pack, in quotes, with typeface, size and placement
Light and camera: one light source and its side, lens, height, aperture, framing
Constraints: no props, no extra text, no watermark
Keep (edits only): what must not change, repeated on every follow-up
```

A few habits from the same guide do more than they look like. Write the word
"photorealistic": OpenAI says it helps "to strongly engage the model's
photorealistic mode." Put every word that should appear on the pack in quotes
or capitals, and spell an unusual brand name letter by letter.

When you feed it pictures, number them ("Image 1: product photo. Image 2:
style reference.") and say what moves where. Then change one thing per
follow-up. Warmer light first, a lower angle after that, with the keep list
repeated every time, because a long list of changes in one pass is hard to
debug when something drifts.

Quality is the other dial. OpenAI's guide suggests low quality for quick
drafts and a comparison of the higher settings for final assets. In hubStudio
each Quality option shows its own price before you pick it, so draft at low,
then finish at high.

<!-- SECTION: Prompt examples -->

## Prompt examples for product work

These are the prompts we ran.

### Packshot

```prompt
Photorealistic studio packshot for an ecommerce product page. Subject: a
50 ml frosted amber glass dropper bottle with a matte black cap, front label
facing the camera. Label text, exact and verbatim: "ORREN" in a thin geometric
sans-serif, all caps, centered; below it "NIGHT SERUM 50 ML" in small type.
Background: seamless warm off-white paper sweep. Lighting: one large softbox
from camera left, one soft shadow falling to the right. Camera: 85mm lens, eye
level, f/8, product centered and filling about 70 percent of the frame height.
Constraints: no props, no extra text, no watermark, no reflections other than
the softbox highlight.
```

Both label lines rendered exact, in the typeface we asked for.

### Lifestyle scene from your packshot

Run this as an edit, with the approved packshot as the first image.

```prompt
Image 1 is the product photo. Place the exact bottle from Image 1 on a wet
dark slate ledge beside a sprig of fresh rosemary, early-morning window light
from camera right, one shadow. Change only the setting and the light. Keep the
bottle shape, proportions, glass color, cap and label exactly as in Image 1,
including the label text "ORREN" and "NIGHT SERUM 50 ML" and their typeface.
Photorealistic, 85mm lens, f/4, bottle on the right third. No extra text, no
watermark.
```

The keep list did its job here. The same bottle described in words alone, in
a separate run, ended up with a different label typeface.

### Text on pack

```prompt
Photorealistic product photograph of a matte white folding carton for a face
cream, standing upright on a pale gray stone surface, front panel square to
the camera. Front panel text, exact and verbatim, in this order: headline
"ORREN" in a thin geometric sans-serif, all caps; under it "Barrier Repair
Cream"; under that "50 ml / 1.7 fl oz". Side panel, turned slightly toward
the camera, carries an ingredient list in 6 point type, exact and verbatim:
"Aqua, Glycerin, Squalane, Niacinamide, Ceramide NP, Panthenol, Tocopherol,
Sodium Hyaluronate, Phenoxyethanol." One softbox from the upper left, one
shadow. 85mm lens, f/8. No other text, no logos, no watermark.
```

Run as written, it gives you what we got: three exact front lines and an
ingredient list with two names spelled wrong. For a file that ships, keep the
quoted headline lines, drop the small print from the prompt, and set legal
copy in a layout tool where every letter is typed, not drawn.

<!-- SECTION: Other engines -->

## When should you pick another engine?

ChatGPT Image 2 is a strong default for written briefs and short pack copy.
Some jobs fit another engine in the app better. OpenAI itself now files
gpt-image-2 under "Earlier GPT Image models" and points new integrations to
its two GPT Image 2.5 models, which hubStudio also offers.

| The job                              | Engine to try in hubStudio          | Why                                                                              |
|--------------------------------------|-------------------------------------|----------------------------------------------------------------------------------|
| A cutout on a transparent background | ChatGPT Image 2.5 Flare or Sunburst | OpenAI documents transparency on both without the preview label                  |
| An edit where precision comes first  | ChatGPT Image 2.5 Sunburst          | OpenAI's advice: "Choose Sunburst for workflows where editing precision matters most" |
| Change one thing, keep the rest      | FLUX.1 Kontext Pro or Max           | They change exactly what you name and leave the rest alone                      |
| A quick edit of an existing photo    | Nano Banana 2                       | Fast and dependable on a photo you already have                                  |
| A 4K master or a 4K upscale          | Seedream 4.5 or 5.0 Pro             | They render natively up to 4K; ChatGPT Image 2 has no upscale job in the app     |

The engines page sorts every engine by maker, and Explore in the app has a
card for each. For Google's two image models, our Nano Banana prompting guide
covers the same ground. The 2026 model roster explains how we assign an
engine per asset type and test it against the physical product first.

<!-- SECTION: In the app -->

## How do you run it in hubStudio?

- **Open Image from the menu.** Pick Text to image, or Edit an image when you
  start from a product photo, then choose ChatGPT Image 2 under Engine.
- **Add your references.** An edit takes up to four PNG, JPEG or WebP files.
  The app resizes them to 1,536 pixels on the long side before sending.
- **Paste the prompt.** The box holds 4,000 characters. Improve with AI
  rewrites what you typed for the engine you picked. Skills you've added shape
  that rewrite, and the Catalog has E-commerce packshot, Lifestyle product
  scene and Legible text inside an image.
- **Set the options.** Quality, Resolution, Shape, Format, Background and
  Images per run, from 1 to 10. A mask goes in on an edit.
- **Check the price, then run.** The price shows next to the button before
  anything renders, and a failed run isn't charged. Each picture lands in
  History with its prompt and engine.

The app's create page walks through the whole studio.

<!-- SECTION: QA -->

## What should you check before a product image ships?

- **Label text.** Read it letter by letter at full size against the approved
  artwork, small print first.
- **The product itself.** Cap, shoulder, proportions and color, checked
  against the physical product or the reference photo.
- **The set.** Lay every render beside the hero. Drift shows up between
  frames, not inside one.
- **Light.** One source, and every shadow falling the same way.
- **Hands and contact.** Count the fingers. Then look hard at the spot where
  the product meets the surface, because that's where a render gives itself
  away.
- **Masked edits.** Compare everything outside the mask with the original. If
  it has to stay pixel-exact, paste the masked area back onto the original.
- **Transparency.** Open the file and confirm it has a real alpha channel
  before you build a layout on it.
- **4K files.** Inspect at 100 percent. That size is in OpenAI's experimental
  band.
- **Claims.** Anything printed on a pack must be a claim approved for that
  market, and only a person can sign that off.
- **Provenance.** Every file we got back carried C2PA Content Credentials
  naming gpt-image-2. OpenAI notes that editing, converting or sharing a file
  can remove that metadata, so decide your disclosure before export.

<!-- SECTION: FAQ -->

## FAQ

### Can ChatGPT Image 2 make a transparent background?

OpenAI lists transparent backgrounds on gpt-image-2 as a preview, PNG or WebP
only. When we asked its API for one on October 8, 2026, it refused with
"Transparent background is not supported for this model." For a cutout you
need now, use ChatGPT Image 2.5 Flare or Sunburst, where OpenAI documents it
without the preview label, and check the alpha channel of the file.

### How many reference images can ChatGPT Image 2 take?

OpenAI's edits endpoint accepts up to 16 input images for its GPT Image
models, and gpt-image-2 reads every one at high fidelity. In hubStudio's Image
studio, an edit on ChatGPT Image 2 takes up to four. Label them in the
prompt, "Image 1: product photo," and say what each one is for. A mask, if you
add one, applies to the first image.

### What is the maximum resolution of ChatGPT Image 2?

The long edge can reach 3,840 pixels, with up to 8,294,400 pixels in total
and a ratio no wider than 3:1. OpenAI treats anything above 2,560 by 1,440 as
experimental, because results vary more up there. In hubStudio that's the 4K
setting, so check a 4K render at full size before you approve it.

### Can ChatGPT Image 2 put readable text on a product label?

Short text, yes. In our test the headline, product name and volume came back
exact when quoted in the prompt. A nine-name ingredient list in small type
had two names misspelled, which fits OpenAI's own limitation on
text clarity. Quote the headlines and spell brand names out. Small legal copy
belongs in a layout tool.

### Does a mask keep the rest of the image unchanged?

Not exactly. OpenAI calls masking on these models prompt-based: the engine
uses the mask as guidance and may not follow its shape precisely. In our test
the new object ran past the mask edge, and pixels across the rest of the frame
shifted slightly. If the rest must stay identical, composite the masked area
back onto the original file.

### Should I use ChatGPT Image 2 or ChatGPT Image 2.5?

OpenAI now points new integrations to its GPT Image 2.5 models: Sunburst
"where editing precision matters most," Flare for "fast, high-quality everyday
image generation." Both add higher quality settings and support transparency
without the preview label. ChatGPT Image 2 still runs in hubStudio. Test your
own product on each before you settle a workflow.

### Do ChatGPT Image 2 images carry AI metadata?

Every file we got back on October 8, 2026 carried C2PA Content Credentials:
signed metadata naming gpt-image-2 and marking the picture as made by a
trained algorithm. OpenAI notes that editing, converting or sharing a file can
remove that metadata, so agree on your disclosure policy before files leave
the team.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
guide's featured image and OG image.

- Save to:    public/Images/howto-chatgpt-image-2-product-prompting-guide.webp
- Reference:  /Images/howto-chatgpt-image-2-product-prompting-guide.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph on a worn wooden worktable in a small, lived-in product studio in Shanghai, China, late afternoon. Three matte printed proofs of the same amber glass dropper bottle lie fanned across the table, each print subtly different from the others: in one the bottle is a little taller, in another its cream label sits slightly lower. A real amber glass dropper bottle with a blank cream paper label stands beside the prints for comparison. A young Chinese art director's hand, the sleeve of a washed charcoal cotton shirt pushed up, short unpainted nails, small natural creases at the knuckles, holds a red grease pencil and has just drawn a loose circle around the label on the middle print. Behind, out of focus: a gray metal shelf with tape rolls and folded cardboard boxes, a desk lamp switched off, a laptop with its lid half closed and its screen dark. One light source only: soft daylight from a tall window at camera left, raking across the prints and the bottle, the bottle casting one soft shadow to the right across the paper, the far side of the room falling into warm dim shadow. Shot on a full-frame camera with a 50mm prime lens at f/4 from a slightly high angle, the bottle and the hand on the right third, open tabletop and quiet negative space on the left for typography, cropped tight so the prints run out of frame at the bottom edge. Warm-shadow film grade in the spirit of Portra 400, slightly desaturated mid-tones, lifted black point, fine natural film grain across the whole image, gentle falloff at the edges. Honest textures: paper tooth, a faint fingerprint on the glass, pencil dust, a pale coffee ring on the wood. No readable text anywhere, labels blank, no logos, no watermark, no screens showing content.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (rendered by HowtoLayout; match what the layout emits)
FAQPage: yes, 7 questions
Breadcrumb: Home > How-to > ChatGPT Image 2 prompts for product images: a working guide
Author: Cyril Drouin
datePublished: 2026-10-08
Reviewed: 2026-10-08 (OpenAI documentation read and test runs made on this date; quarterly recheck in watch.csv)
-->

<!-- ASSET BRIEF
TABLES: (1) spec table, rows sizes, reliable range, quality, images per
  request, reference images, prompt length, mask, transparent background, file
  formats, content filter; columns capability, OpenAI documents, in the
  hubStudio Image studio, source; (2) test table, six runs from the research
  file; (3) engine choice table, five jobs, engines from the help center.
CHARTS: none.
SCREENSHOTS: reuse existing localized captures only: imageStudio and explore
  from src/data/app-shots.ts, placed in "How do you run it in hubStudio?" and
  "When should you pick another engine?". No new capture. Test outputs are not
  published (they stay in the drafting session's scratch folder).
DOWNLOADS: none.
INTERNAL LINKS:
  the engines page -> /app/engines

  our Nano Banana prompting guide -> /resources/how-to/nano-banana-prompting-guide
  the 2026 model roster -> /resources/insights/the-2026-model-roster
  the app's create page -> /app/create
FIRST-PARTY FIGURES: none. App facts come from the help center,
  src/content/help/create-an-image.md and skills.md, updated 2026-10-08.
RESEARCH FILE: editorial/research/chatgpt-image-2-product-prompting-guide.md
-->
