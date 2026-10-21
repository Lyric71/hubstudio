---
title: How to Localize One Visual for Several Markets
slug: localize-visual-for-markets
description: Localize one visual for several markets: a clean master, text as an editable layer or rendered in, casting and setting per market, legal lines checked.
excerpt: Build the master without words, add each market's text as a layer you can fix, and change the scene only where a market needs it.
template: howto
---

<!-- HERO SECTION -->

# How to localize one visual for several markets

The words are the hard part of localizing a visual. A headline baked into
the picture has to be rebuilt for every language, and translated copy
usually needs more room than the English box it replaces. Plan for both
before the first render.

<!-- INTRODUCTION -->

## How do you localize images for different markets?

Make one clean master with no words in it and room left for the longest
language. Add each market's text as an editable layer, render text into the
picture only when it belongs to the scene, and change casting or setting only
where a market needs it. In hubStudio, that's the image studio, the free Image
editor and Campaigns.

The first decision is where the words live.

| Question | Text on top, as an overlay | Text rendered in the image |
|---|---|---|
| What fixing one word costs | Nothing: edit the layer and save again | A new run, then a fresh proof |
| How exact the words are | Exactly what you typed | What the engine drew; read every character |
| Several languages | One master, one copy per language | One run or one edit per language |
| Brand type, prices, legal lines | Yes, set from approved copy | No |
| Where it wins | Headlines, offers, anything a reviewer may change | A sign, a label or packaging that sits inside the scene |

Past two or three markets, the overlay route is easier to control. The
rendered route earns its place when flat type would look pasted on.

<!-- SECTION: The master -->

## What goes into a master you can localize?

Everything that stays the same in every market, and nothing that doesn't.
The product, the light, the framing and the mood are shared. Words are not.
Whether people and places travel depends on the market.

Leave room for the text. Translated copy usually needs more space than the
English it came from: plan the headline area for French or German, not for
English. Chinese needs the opposite caution. It often takes fewer characters,
but each one is taller and more detailed, so it needs height and a size large
enough to read. Don't shrink the box because the line got shorter.

> The W3C's internationalization guidance says text translated from English
> or Chinese "will typically be longer in the translation than the original,"
> and that Chinese, Japanese and Korean often need more height than Latin type
> even when they use fewer characters.
> Source: W3C Internationalization, "Text size in translation," updated
> February 2016, standards-body guidance. https://www.w3.org/International/articles/article-text-size

The same page puts the layout rule plainly.

> "Be especially careful about fitting text snugly into graphic designs.
> Separate presentation and content, so that font sizes, line heights, etc.
> can be easily adapted for translated text."
> Source: W3C Internationalization, "Text size in translation," updated
> February 2016, standards-body guidance. https://www.w3.org/International/articles/article-text-size

In the image studio, render the master with the Text to image job, or with
Edit an image when you start from your own product photo. Ask for empty space
by name.

**Prompt example: a textless master**

```prompt
A ceramic pour-over coffee set on a pale limestone counter, morning window
light from the left, one soft shadow falling right. Keep the product sharp
and centered on the lower right third. Leave the upper left half as calm,
even, out-of-focus wall for a headline added later, with room for two lines.
No text, no letters, no signage, no logos anywhere in the frame.
```

The price shows before every run, and a failed run isn't charged.

<!-- SECTION: What changes per market -->

## What should change in a visual from one market to the next?

Start from what stays. Sort every element before anything is rendered, and
keep the list with the brief.

| Element | Keep or change | How |
|---|---|---|
| Product | Keep | Never regenerated per market; it stays from the master |
| Light, framing, palette | Keep | Shared by every version |
| Headline and offer copy | Change | Overlay layer per language, from the approved copy deck |
| Legal line or required label | Change where a market requires it | Overlay from the legal team's approved wording |
| Casting | Change only if the market needs it | Edit an image with source pictures |
| Setting and props | Change only if the market needs it | Edit an image, product kept |
| Text inside the scene (a sign, a label) | Change per language | Rendered in, then proofed by a native reader |

Write the reason next to every "change." When nobody can give one, the
element stays as it is in the master.

<!-- SECTION: Overlay route -->

## How do you add each market's text as a layer you can edit?

Open the master in the Image editor. It's free and runs in your browser;
you can open it from the image studio, History or the Assets Library.

- Click Add text, or double-click the picture where the line should go, then
  type the first market's copy.
- Pick the font and size, then bold, italic or underline and the alignment.
- Set the color. A dark outline or a soft shadow keeps light words readable
  on a light picture; a highlight behind the words works on a busy one.
- Place the brand logo from the Picture panel, in one of nine positions.
- Open Save, type a name that says the market (for example, "spring master
  FR 4x5"), and pick Save a copy in the Assets Library. The master stays as
  it was.
- Go back to the master and repeat for the next language.

![The Image editor with a caption reading New season and a red arrow on the picture, the Draw panel open on the selected arrow](/Images/help/image-editor-draw.webp "A caption stays a separate piece, movable and editable, until you save.")

Each caption stays a separate piece until you save, so you can move it,
restyle it or rewrite it, with up to 60 steps of undo. Before saving a copy
meant for a network, the Social panel checks whether the words are large
enough to read on a phone and whether anything sits under the network's
buttons.

![The Save the picture panel: name, format, quality, size, then Save a copy in the Assets Library, Save as a new version and Download](/Images/help/image-editor-save.webp "Name each copy for its market, then save it next to the master.")

Brand typefaces need one workaround. The editor sets type from its own font
list, so when a line must sit in the exact brand font, export it from the
design file as a transparent PNG and place it like a logo. The readable text
guide, one of the how-to guides, covers that method in more detail. For ads on
Facebook and Instagram, the Meta platform page covers production in the
formats Meta serves.

<!-- SECTION: Rendered route -->

## When should the text be rendered into the image?

When the words belong to the scene. A shop sign, a bottle label or a printed
bag looks real when the engine draws it with the light and the surface, and
pasted on when it's typed over the top. The help center notes that the ChatGPT
Image engines in the app write legible text inside the picture.

Two app features help. In Skills, the Catalog holds a skill called Legible
text inside an image, plus an Avoid list for hands, text artifacts and
watermarks. Add them to My skills and Improve with AI follows them each time
it rewrites a prompt.

Some engines can also translate words already in a picture. Their makers say
where that goes wrong.

> Google says Nano Banana 2 can "translate and localize text within an
> image." Its model page for Nano Banana Pro adds that the model "may struggle
> with grammar, spelling, cultural nuances, or idiomatic phrases."
> Source: Google launch post, February 26, 2026, and Google DeepMind model
> page, read October 2026, the maker's own claim and caveat.
> https://deepmind.google/models/gemini-image/pro/

> OpenAI's image generation guide says its GPT Image models "can still
> struggle with precise text placement and clarity."
> Source: OpenAI image generation guide, read October 2026, the maker's
> stated limitations. https://developers.openai.com/api/docs/guides/image-generation

So treat a rendered translation as a draft. Run it with the Edit an image job
and a prompt that changes the words and nothing else.

**Prompt example: a label translated in place**

```prompt
Replace the label text "Morning Blend" with "Mélange du matin". Keep the same
typeface style, size, color, curve and position on the bag. Change nothing
else in the image.
```

Then a native speaker reads every character at the size the picture will
run: accents, apostrophes, line breaks. One wrong letter means another run.

<!-- SECTION: Casting and setting -->

## How do you change the person or the setting and keep the product?

Use Edit an image, not a new render. Upload the master as the first source
picture, add reference pictures for the person or the place (up to four
sources, depending on the engine), and describe only the change.

**Prompt example: a setting changed for one market**

```prompt
Keep the coffee set exactly as it is in the first image: same shape, glaze,
color, size and position. Replace the limestone counter and wall with a
narrow wooden kitchen counter by a tiled wall, as in the second image. Keep
the morning light from the left and the empty upper left area. No text.
```

On the ChatGPT Image engines, an optional mask goes further: its transparent
areas mark what may change in the first image, and everything else stays as
it is. The Precise image edits skill in the Catalog shapes that kind of
instruction. For a person who must look the same across a series, the
consistent character guide shows the method and its limits.

Check the product after every edit, against the master, at full size.

> OpenAI's guide also says its GPT Image models "may occasionally struggle to
> maintain visual consistency for recurring characters or brand elements
> across multiple generations."
> Source: OpenAI image generation guide, read October 2026, the maker's
> stated limitations. https://developers.openai.com/api/docs/guides/image-generation

<!-- SECTION: Legal lines -->

## Which legal lines change from one market to another?

Language rules, retouching labels and the wording of a price claim all vary
by country, and they touch the layout. France is the clearest case for the
text layer.

> France's 1994 language law makes French obligatory in written, spoken and
> audiovisual advertising, and where a translation runs beside it, the French
> must be "aussi lisible, audible ou intelligible" as the foreign text.
> Source: French Law 94-665 of August 4, 1994, Articles 2 and 4, statute text
> on Legifrance, read October 10, 2026.

That's a sizing decision as much as a legal one. Design the French layer at
the same weight as the English, not as a small line underneath.

The article on localizing one campaign for Europe sets out what France,
Germany, Spain and Italy each ask of a campaign, from the retouched-photo
label to the 30-day prior price on a discount. Headlines that need rewriting
rather than translating belong to transcreation, which has its own article.
This guide describes production practice, not legal advice.

<!-- SECTION: Organize and approve -->

## How do you keep every market's version organized and approved?

Put the whole launch in one campaign. In the app, a campaign keeps one
launch's files under one name and an optional brief. It points at files in
the Assets Library and copies nothing, so the master and every market's copy
sit side by side. Pick the campaign under Campaign in the image studio before
you render, and every picture from that page joins it. The library's
Campaign filter then shows the whole set.

![A campaign's page: the band with All campaigns, Add assets and Delete the campaign, the name and the brief, the tiles by type, the Name and brief card, and In this campaign with four assets](/Images/help/campaigns-page.webp "One campaign holds the master and every market's version.")

Send each market's version to that market's reviewer through Validation: a
teammate, or one of the client's people when the work is made for a client.
They validate it or send it back with a comment, and every version stays on
one thread. The app runs in
English, French and Chinese, and each person picks their own, so the
reviewer in Paris or Shanghai can work in their language. Prompts and files
stay in the language they were written in.

Campaigns, Validation and the Image editor cost nothing to use. When a
launch runs to dozens of formats and languages, the studio can make the set
with you through its ad creative design service.

<!-- SECTION: Fonts -->

## Will your font show accents and Chinese characters?

Check before you save, every time. A font that lacks a character shows a
small empty box in its place, nicknamed tofu. The project behind Google's
Noto fonts took its name from the fix: "no more tofu."

- Type a test line with the accents each market uses: é, è, ç and à for
  French; ä, ö, ü and ß for German; ñ and the opening question mark for
  Spanish.
- For Chinese, type a full headline, not one character, and look for empty
  boxes anywhere in the line.
- Check the line at the size it will run on a phone.
- If the font fails, set the line in a font that covers the script, or place
  it as artwork exported from the design file.

<!-- SECTION: Checklist -->

## What should you check before a localized version ships?

Run this on every market's file, not just the first one.

- [ ] Product identical to the master: shape, color, label, proportions.
- [ ] Every word matches the approved copy deck for that market.
- [ ] Accents, punctuation and characters render in the chosen font.
- [ ] Rendered text read character by character by a native speaker.
- [ ] Text clear of the network's buttons and readable on a phone.
- [ ] Required legal line or label present, from the approved wording.
- [ ] File named for its market and filed in the launch's campaign.
- [ ] Sent through Validation to that market's reviewer.

<!-- SECTION: FAQ -->

## Questions about localizing images for different markets

### How do I localize an image for different countries?

Start from one master with no words in it and room for the longest
language. Add each market's headline and legal line as an editable text
layer, saved as a separate copy per market. Change the person or the setting
only where a market needs it, with an edit that keeps the product. Then send
each version to a reviewer in that market.

### Should I put text in the image or add it on top?

Add it on top when the words must be exact or may change: headlines, offers,
prices, legal lines, anything translated. Fixing a layer costs nothing.
Render it into the image when the text belongs to the scene, such as a sign
or a label, and proof every character, because a correction means a new run.

### Can AI translate the text inside an image?

Some engines can. Google says Nano Banana 2 can translate and localize text
within an image, and its page for Nano Banana Pro warns the model may
struggle with grammar, spelling, cultural nuance and idiom. Use the result as
a draft. A native speaker reads it at full size before it goes anywhere.

### What should change in a visual from one market to another?

The words always change: headline, offer and any required legal line.
Casting, setting and props change only when there's a reason you can write
down for that market. The product, the light and the framing stay the same
in every version.

### How do I keep localized versions organized?

Name every copy for its market when you save it, and file the master and all
versions in one campaign. In hubStudio a campaign points at Assets Library
files without copying them, and the library filters by campaign. Each
market's version then goes to its reviewer through Validation, with every
version kept on one thread.

### Do fonts support accents and Chinese characters?

Not all of them. A font missing a character shows a small empty box where
the letter should be. Type a test line with every accent the market uses,
and a full Chinese headline, then check it at the size it will run. If the
font fails, use one that covers the script, or place the line as artwork
exported from your design file.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/howto-localize-visual-for-markets.webp
- Reference:  /Images/howto-localize-visual-for-markets.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph in a small, lived-in Hong Kong design studio
on an overcast late morning. A tight crop on a worn cork pinboard where three
identical small matte photographic prints hang side by side, each showing the
same pale ceramic coffee pot on a stone counter. Across the top of each print
a strip of blank paper is taped down, each strip a different muted color:
ochre, sage green and pale blue, with nothing written on any of them. A young
Chinese designer's hand and forearm enter from the right edge of the frame,
the cuff of a creased oatmeal linen shirt rolled once, short unpolished nails,
pressing a brass pin into the corner of the third print. The cork carries old
pin holes, curled masking tape and faint pencil marks. Soft diffused light
from a single window on camera right falls across the board and throws one
gentle shadow of the hand to the left. Out of focus at the far left, a stack
of paper swatches on a cluttered desk and a switched-off metal lamp. Framed on
a 50mm prime at f/4, the prints and the hand on the right third, calm empty
cork on the left two thirds for a headline. Warm shadows, slightly
desaturated midtones, a gentle color-negative film grade with lifted blacks
and fine grain. Natural skin texture with visible creases at the knuckles. No
legible text, no letters, no logos and no watermark anywhere in the frame.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (HowtoLayout)
FAQPage: yes, 6 questions
Breadcrumb: Home > Resources > How-to > How to localize one visual for several markets
Author: Cyril Drouin
datePublished: 2026-10-22
-->

<!-- ASSET BRIEF
TABLES: Overlay versus rendered decision table (five rows, from the research
file's app facts A1 to A8 and the maker caveats C7 and C8); per-market change
list table (seven rows: product, light and framing, headline, legal line,
casting, setting, text inside the scene).
CHARTS: none.
SCREENSHOTS: none new. Existing localized help captures placed in the body:
/Images/help/image-editor-draw.webp, /Images/help/image-editor-save.webp and
/Images/help/campaigns-page.webp, each with its .fr.webp and .zh.webp listed
in src/i18n/localized-images.json.
DOWNLOADS: none.
INTERNAL LINKS:
how-to guides -> /resources/how-to
readable text guide -> /resources/how-to/readable-text-in-ai-images
consistent character guide -> /resources/how-to/consistent-character-ai-images-video
article on localizing one campaign for Europe -> /resources/insights/europe-campaign-localization
transcreation, which has its own article -> /resources/insights/transcreation-as-a-production-line
Meta platform page -> /solutions/platforms/meta
ad creative design service -> /services/design/ad-creative
Campaigns -> /app/campaigns
Image editor -> /app/image-tools
FIRST-PARTY FIGURES: none. App facts come from hubstudio-positioning.md and
src/content/help/ (create-an-image.md, assets-library.md, skills.md,
campaigns.md, validation.md), listed A1 to A14 in the research file.
RESEARCH FILE: editorial/research/localize-visual-for-markets.md
-->
