---
title: AI image with text: how to make it readable
slug: readable-text-in-ai-images
description: Text inside an AI image: when the engine can render it, when to add it in an editor, prompt blocks, a proofing checklist and what each maker documents.
excerpt: Engines can now letter a poster or a label. Here's when to let them, when to set the words yourself, and how to proof them.
template: howto
---

<!-- HERO SECTION -->

# How to make an AI image with text people can read

Today's image engines can letter a poster headline, a bottle label or a shop
sign. They still slip, mostly on spelling and small type, and their makers
say so. Render the words when they belong to the scene. Set them on top when
they have to be exact.

<!-- INTRODUCTION -->

## How do you make an AI image with text?

Put the exact words in quotes, describe the lettering and say where it sits.
Let the engine render text that lives in the scene: a sign, a label, a
concept headline. Set brand type, prices, legal lines and translations on top
afterwards. In hubStudio that means the image studio for the render and the
free Image editor for the words.

| The text is... | Render it in the image | Set it on top in the editor |
|---|---|---|
| Part of the scene: a storefront sign, a label on a curved bottle | Yes | No, flat type reads as pasted on |
| A concept headline for an internal review | Yes | Later, for the final file |
| The brand's own typeface or wordmark | No | Yes, place the real artwork |
| A price, a date, a percentage, a URL | No | Yes |
| Offer terms, a disclaimer, a trademark line | No | Yes, from the approved copy |
| Going out in several languages | Only with a native proof | Yes, one master, one layer per market |
| Likely to change next week | No | Yes |

A rendered word is part of the picture, so fixing one letter means a new
run. A word set on top stays editable until you save.

<!-- SECTION: What the makers document -->

## Which AI image generators document text rendering?

Not every engine claims it, and the ones that do also publish where it breaks.
This is what each maker says on its own pages, for the engines offered in the
app. It's the maker's word, not an independent test.

| Engine in the app | Maker | What the maker documents | The maker's own caveat |
|---|---|---|---|
| ChatGPT Image 2 | OpenAI | "Reliable text rendering with crisp lettering"; translating the text in an existing image | Can "still struggle with precise text placement and clarity" |
| Nano Banana 2 | Google | "Accurate, legible text"; translating and localizing text within an image | Best results in the languages Google lists |
| Nano Banana Pro | Google | Legible text, "a short tagline, or a long paragraph" | May struggle with "accurate spelling" and with grammar in translation |
| FLUX.1 Kontext Pro and Max | Black Forest Labs | Replacing text in "signs, posters, and labels" while keeping the styling | Recommends a newer model, with "better text editing," for new projects |
| FLUX Pro 1.1 and Ultra | Black Forest Labs | No text-rendering claim on the model page | None stated |
| Seedream 4.5 | ByteDance | Enhanced "typography and dense text rendering," readable small text for posters | None stated |
| Seedream 5.0 Pro | ByteDance | Text-rich images, native generation in over ten languages | "Room to improve in finer-grained text rendering" |

Sources: OpenAI prompting guide (April 21, 2026) and image generation guide;
Google's launch posts for Nano Banana 2 (February 26, 2026) and Nano Banana
Pro (November 20, 2025), its DeepMind model page and the Gemini API image
documentation; Black Forest Labs' Kontext and FLUX1.1 documentation;
ByteDance Seed's Seedream 4.5 page and Seedream 5.0 Pro launch post (July 8,
2026). Every page was read October 8, 2026.

Two of those caveats matter most for brand work. Proof anyway, whichever
engine you pick.

> OpenAI's image generation guide lists text among its GPT Image models'
> limitations: "Although significantly improved, the model can still struggle
> with precise text placement and clarity."
> Source: OpenAI image generation guide, read October 2026, the maker's
> stated limitations. https://developers.openai.com/api/docs/guides/image-generation

> Google's model page for Nano Banana Pro says it "can still struggle with
> small faces, accurate spelling, and fine details," and tells users to check
> every image they create, the text in it included, for accuracy.
> Source: Google DeepMind, Nano Banana Pro model page, read October 2026, the
> maker's stated limitations. https://deepmind.google/models/gemini-image/pro/

The engines page lists every engine offered in the app, by maker, and the
list grows as new ones ship. Two of the how-to guides go further on prompting
the Nano Banana engines.

<!-- SECTION: Prompting for exact text -->

## How do you prompt an AI image generator for exact words?

The makers agree on the method. Quote the words, describe the type in plain
language, and say where it goes.

> OpenAI's prompting guide for its image models: "Put literal text in quotes or
> ALL CAPS and specify typography details (font style, size, color, placement)
> as constraints." It adds that brand names and uncommon spellings should be
> spelled out letter by letter.
> Source: OpenAI, GPT Image prompting guide, April 2026, guidance drawn from
> the maker's alpha testing. https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide

Google's documentation gives the same advice in a template: name the text,
describe the font style, then the design. Black Forest Labs asks for quotation
marks around any text to be changed. The examples below follow that order
(they're starting points, so swap in your own product and words).

**Prompt example: a poster headline**

```prompt
Editorial poster for a spring linen collection, a folded linen shirt on a pale
oak table, soft window light from the left. Headline text, exact and verbatim,
no extra characters: "SLOW SUMMER". Typography: tall condensed serif, warm
off-white, set in the top third, left aligned, generous letter spacing. The
text appears once. No other words, no logos.
```

**Prompt example: a label that belongs to the scene**

```prompt
Close-up of an amber glass dropper bottle on wet slate, overcast daylight. The
paper label reads exactly "NORDA" on the first line and "Night serum, 30 ml"
on the second, in a clean geometric sans serif, black ink, centered, following
the curve of the bottle. Spell the brand: N-O-R-D-A.
```

**Prompt example: a clean plate for type you'll set yourself**

```prompt
Same linen shirt on the pale oak table, same light. Leave the top third of the
frame as plain, even, out-of-focus wall for a headline added later. No text,
no letters, no signage, no logos anywhere in the frame.
```

Two app features do part of this for you. The Catalog in Skills includes a
skill called Legible text inside an image, written for headlines, labels and
posters, and an Avoid list for hands, text artifacts and watermarks. Add them
to My skills and Improve with AI follows them each time it rewrites a prompt.
OpenAI's guide also recommends medium or high quality for small text, so pick
the quality before you run and read the price next to the button. A failed run
isn't charged.

<!-- SECTION: Overlay in the Image editor -->

## How do you add text to an AI image afterwards?

Open the render in the Image editor. It's free, runs in your browser and
opens from the image studio, History or the Assets Library.

- **Text panel.** Add text, then pick the font and size, bold, italic or
  underline, alignment, color and a highlight behind the words. A dark outline
  or a soft shadow keeps light words readable on a light picture.
- **Picture panel.** Place a logo from your computer or the library (a PNG
  with a transparent background works best), set its opacity and send it to
  one of nine positions. A light logo in a corner makes a watermark.
- **Social panel.** Frame the picture for Instagram, X or LinkedIn. Its checks
  flag words too small to read on a phone and anything you added that sits
  under the network's own buttons.

The editor sets type from its own font list. When the brand typeface has to be
exact, export the line from the brand's design file as a transparent PNG and
place it like a logo. That's also how an approved legal line goes on: as the
legal team's artwork, never retyped. The Image editor page shows every panel,
and the Assets Library page explains where the saved copy lands, next to the
original render.

<!-- SECTION: Localizing the text -->

## How do you translate the text inside an AI image?

There are two routes. Ask an engine to translate the words in place, or keep
one textless master and set each language on top.

The engine route is now documented. Google says Nano Banana 2 can "translate
and localize text within an image," and OpenAI's guide shows a translation
edit that keeps the typography, placement and spacing and changes only the
words. In the app that's the Edit an image job, with a prompt such as this.

**Prompt example: a translation edit**

```prompt
Replace "SLOW SUMMER" with "VERANO LENTO". Keep the same typeface, size,
color, letter spacing and position. Change nothing else in the image.
```

The same replace prompt fixes a single misspelled word in a render, without
starting over. Either way, a native speaker reads the result. Google is blunt
about why.

> Google's Nano Banana Pro model page says the model "is capable of generating
> and translating text in many languages, but it may struggle with grammar,
> spelling, cultural nuances, or idiomatic phrases."
> Source: Google DeepMind, Nano Banana Pro model page, read October 2026, the
> maker's stated limitations. https://deepmind.google/models/gemini-image/pro/

Language coverage differs by engine, too.

> Google's API documentation lists 15 languages "for best performance," among
> them EN, fr-FR, de-DE, es-MX, ja-JP and zh-CN. ByteDance says Seedream 5.0 Pro
> generates in over ten languages besides Chinese and English, and in the same
> post that "there is still room to improve in finer-grained text rendering."
> Source: Google Gemini API image generation documentation, last updated
> October 2026; ByteDance Seed launch post, July 2026. Both are the makers'
> own statements. https://ai.google.dev/gemini-api/docs/image-generation

Past two or three markets, the overlay route is easier to control. You keep
one approved master and save one copy per language, each with its own text
layer, so a typo in the German version never touches the French one.
A headline that has to be rewritten for a market, not translated, is
transcreation, and the transcreation article walks through that line.

<!-- SECTION: Proofing checklist -->

## What should you check before an AI image with text ships?

Read the file, not the prompt. Proof it against the approved copy deck at the
size it will run.

- [ ] Every word read letter by letter against the copy deck, brand names
  first.
- [ ] No extra characters, doubled words or stray lettering in the background.
- [ ] Even letter spacing and a steady baseline; no letters touching or
  drifting on a curved label.
- [ ] Accents, apostrophes and punctuation right for each language, read by a
  native speaker.
- [ ] Prices, dates, percentages, phone numbers and URLs matched to the source
  sheet.
- [ ] Legal lines, offer terms and trademark symbols placed from the approved
  artwork, never generated.
- [ ] The logo is the real file, not a rendered lookalike.
- [ ] Words readable on a phone and clear of the network's buttons.
- [ ] Sent through Validation to the person who signs off, with each version
  kept on one thread.

This checklist describes production practice, not legal advice. When a
campaign runs to dozens of formats and languages, the studio can make the set
for you through its ad creative design service.

<!-- SECTION: FAQ -->

## Questions about text in AI images

### Can AI image generators spell text correctly?

Often, yes. OpenAI, Google and ByteDance all document text rendering for
their current engines, and all three publish caveats: OpenAI on placement and
clarity, Google on spelling, ByteDance on finer-grained text. A quoted,
verbatim prompt gives the engine its best chance. Then a person proofs every
word before anything ships.

### Which AI image generator is best for text?

This guide doesn't rank them. What it can report is what each maker
documents: the ChatGPT Image, Nano Banana and Seedream engines all claim
legible text, and Seedream 5.0 Pro claims text-rich layouts. In hubStudio,
Reuse prompt puts a run back in the form, so you can try another engine and
keep the cleanest result.

### How do I get exact words into an AI image?

Put the words in quotation marks, ask for them verbatim with no extra
characters, describe the lettering in plain terms (condensed serif, bold sans
serif) and say where it sits. Spell a brand name letter by letter, and ask for
the text to appear once. Use medium or high quality when the type is small.

### Should I add text to an AI image afterwards instead?

Yes, when the words must be exact: brand type, prices, dates, legal lines and
anything you'll translate. Generate a clean plate with space left for the
headline, then set the words in an editor. Render the text in the image only
when it belongs to the scene, like a sign or a label.

### Can AI translate the text inside an image?

Some engines document it. Google says Nano Banana 2 translates and localizes
text within an image, and OpenAI's guide shows a translation edit that keeps
the layout. Google also warns its model may get grammar, spelling and idiom
wrong. Treat the result as a draft, and have a native speaker read it.

### Can I use my brand font in an AI image?

Not by rendering. The engines take a prompt and source pictures, not a font
file, so they draw letters in a style you describe. For exact brand type, set
the line in your own design file, export it as a transparent PNG and place it
on the picture in the Image editor, the same way you'd place a logo.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/howto-readable-text-in-ai-images.webp
- Reference:  /Images/howto-readable-text-in-ai-images.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph inside a small, lived-in Shanghai design
studio in late afternoon. A Chinese woman in her thirties, a print production
lead in a faded indigo work shirt with rolled sleeves, leans over a wide
wooden table and checks a large printed poster proof with a brass-rimmed
loupe pressed close to the paper. The poster lies flat under her hands, shot
from a high three-quarter angle so its lettering falls away in soft focus and
cannot be read; only the curve of large dark letterforms and a pale field of
paper show. A metal ruler, a red grease pencil, a curled second proof and a
chipped enamel mug of tea sit on the table, which carries pencil marks and
tape residue. One window on camera left throws warm, low, directional light
across the table, raking the paper grain and casting a single long shadow of
her hand and the loupe to the right. Behind her, out of focus, shelves of
binders and rolled paper tubes, a desk fan, a monitor turned away. Framed on
a 35mm prime at f/4, subject placed on the left third, generous dark negative
space on the right for a headline. Warm shadows, slightly desaturated
midtones, a gentle color-negative film grade with lifted blacks and fine
grain. Natural skin texture with visible pores and small asymmetries, a few
loose strands of hair, short unpolished nails. No legible text anywhere in the
frame, no logos, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (HowtoLayout)
FAQPage: yes, 6 questions
Breadcrumb: Home > Resources > How-to > How to make an AI image with text people can read
Author: Cyril Drouin
datePublished: 2026-10-08
-->

<!-- ASSET BRIEF
TABLES: Render or overlay decision table (seven rows, from the research
file's decision criteria); engine documentation table (seven rows, every cell
from the maker pages listed in research/readable-text-in-ai-images.md).
CHARTS: none.
SCREENSHOTS: none new. If a figure is wanted in the overlay section, reuse
the localized help capture /Images/help/image-editor-draw.webp (a caption on
a picture in the Image editor, Draw panel), with its .fr and .zh versions.
DOWNLOADS: none.
INTERNAL LINKS:
How-to guides -> /resources/how-to
engines page -> /app/engines
Image editor page -> /app/image-tools
Assets Library page -> /app/library
transcreation article -> /resources/insights/transcreation-as-a-production-line
ad creative design service -> /services/design/ad-creative
FIRST-PARTY FIGURES: none. App facts (Image editor panels, nine logo
positions, Skills Catalog names, failed runs not charged) come from
src/content/help/assets-library.md, src/content/help/skills.md,
src/content/help/create-an-image.md and hubstudio-positioning.md.
RESEARCH FILE: editorial/research/readable-text-in-ai-images.md
-->
