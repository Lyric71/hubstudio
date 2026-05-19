# HubStudio Website Image Style Guide

## Guiding principle

Every image on the site should feel like it was made by a real photographer with a real point of view, then finished in a real studio. Not "AI imagery." Authored work. The website is the proof of what we sell, so the visuals must clear the bar we hold our client deliverables to.

## Every asset carries a creative angle

Creative is the product. So nothing visual on the site is allowed to be merely functional or generic. This rule covers **every** asset, not just photography: SVG icons, illustrations, logos and marks, diagrams, backgrounds, textures, dividers, loaders, empty states, favicons, animation. If it renders on a page, it must have a deliberate creative point of view.

What "a creative angle" means in practice:

- **An idea, not a default.** Each asset expresses a specific concept, mood, or visual wit chosen for that context, never a stock or library default dropped in to fill space.
- **Authored, not assembled.** Even an icon set should read as designed by one hand for hubStudio, with consistent line weight, corner treatment, grid, and personality, not Material/Feather icons used raw.
- **SVG is design work, not plumbing.** Custom SVGs get the same intentionality as a hero photo: considered composition, motion where it earns attention, a reason to exist. Reject the generic.
- **It must defend the headline.** If a teammate asked "why this asset, why here," there is a one-sentence creative answer.

A purely decorative or off-the-shelf asset with no point of view does not ship. When the obvious choice is generic, redesign it or cut it.

## The overall aesthetic

Think *editorial campaign photography, 2024–2026 era*: the visual language of brands like Aesop, Jacquemus, Loewe, Bottega, Hermès, Camper, Arc'teryx. Confident, restrained, warm. Real light, real texture, real distance between camera and subject.

Avoid at all costs: the over-lit, over-saturated, hyper-symmetrical "AI generator default." No glossy plastic skin, no perfect bokeh halos, no impossible reflections, no busy maximalist compositions, no generic stock-photo smiling teams around a laptop.

## Photographic references to anchor each section

**Hero and brand-level imagery**: in the spirit of *Annie Leibovitz* for narrative authority, *Viviane Sassen* for color and shadow, and *Harley Weir* for editorial humanity. Single subjects, generous negative space, decisive light from one direction. The kind of image that earns the headline next to it.

**Case studies and client work**: *Steven Meisel* and *Mario Sorrenti* territory for fashion, *Carl Kleiner* and *Bobby Doherty* for product, *Maurizio Cattelan / Pierpaolo Ferrari (Toiletpaper)* when we want playful campaign energy. The fashion lookbook references we already have in deck (the puffer-vest sequence) sit perfectly in this lane.

**Process and "how we work" sections**: *Wolfgang Tillmans* and *Annie Collinge* for the documentary, in-studio feel. Hands on keyboards, GPU rigs glowing in a dim room, monitors with frames in progress. Shot like reportage, not corporate.

**Talent and team pages**: *Platon* for tight, character-rich portraits when we want gravitas, *Tyler Mitchell* when we want warmth and cultural specificity. Never the cliché "smiling consultant in a white shirt" stock look.

**eCommerce and lifestyle examples**: *Petra Collins* for soft daylight intimacy, *Charlie Engman* for slightly off-center modern still life, *Daniel Arnold* for street-level lifestyle realism.

**Abstract and concept imagery** (for AI capability sections): *Andreas Gursky* for scale, *Hiroshi Sugimoto* for stillness, *Wes Anderson*-coded symmetry only when the section calls for charm rather than seriousness.

## Technical look and feel

Shot on full-frame, prime lens vocabulary: 35mm for environmental, 50mm for portraits, 85mm for product hero, 24mm sparingly for architecture. Shallow but not extreme depth of field: f/2.8 to f/5.6 reads more credible than f/1.2 dreaminess.

Light is the single most important signal of "real." Use directional natural light (window light, golden hour, overcast diffusion) or a single strobe with a softbox. One light source casts one shadow. Avoid the AI tell of multiple competing light sources and glow-from-nowhere.

Color grading: warm shadows, slightly desaturated mid-tones, gentle film emulation (Portra 400, Kodak Gold, Fuji 400H as reference). Black point lifted slightly: pure black reads digital. Skin tones retain texture; pores, freckles, small asymmetries left intact.

Grain: subtle film grain across all hero images. This is the single most effective tactic for defeating AI-detection because it overlays a natural noise pattern the generators don't reproduce convincingly on their own.

## Composition rules

Compose for the rule of thirds, not dead center. Let subjects breathe: generous negative space on at least one side, designed to hold website typography. Crop tighter than feels comfortable; AI defaults toward "fits everything in the frame," real photographers cut into the subject.

Mix scales across the page. A wide environmental shot, then an intimate hand detail, then a portrait. Monotony of crop is what makes pages feel AI-generated even when individual images look fine.

## Subject matter direction by service vertical

For **Fashion and Beauty**: editorial lookbook energy. Single model, considered styling, architectural or natural backdrop. Reference the puffer-vest sequence already in our materials: clean, repeatable, on-figure, no fussy retouching.

For **eCommerce and Retail**: context over isolation. Product in a kitchen, on a desk, in a hand, in afternoon light. The Aesop bottle shot in dried wildflowers (already in our deck) is exactly the register.

For **Automotive and Industrial**: landscape-scale, cinematic. Single vehicle, vast environment, top-down or wide profile, dust and light doing the storytelling. The desert Porsche shot in our existing materials sets the bar.

For **Food and CPG**: *Carl Kleiner* clean geometry or *Bobby Doherty* playful pop, picked deliberately per brand. Hard light, real shadows, ingredients with imperfect surfaces.

For **Tech and B2B**: humans first, screens second. People making things in real workspaces. Avoid the floating-hologram-interface trope entirely.

## A short list of AI tells to strip out

Symmetrical faces with poreless skin. Hands with subtle anatomical drift. Identical reflections in both eyes. Background text that's almost-but-not-quite words. Perfectly aligned books on a shelf. Jewelry that melts into skin. Hair that has no flyaways. Identical bokeh circles. Watermark-like artifacts at edges. Plants with leaves that don't connect to stems.

Every image gets a final human pass to catch these before it goes live.

## Workflow for generating site images

Use a photographer reference and a specific real-world lighting condition to frame the brief in your head, then translate that into concrete descriptive language for the prompt you actually send. A prompt built from "single window light from camera left, warm slightly desaturated grade, mid-afternoon, shallow depth of field, fine grain" outperforms a vague "cinematic and moody."

**Never put a real person's name in a generation prompt (permanent).** The image model behind `scripts/generate-image.mjs` (gpt-image-2 via WaveSpeed) rejects prompts that name photographers, artists, directors, celebrities, or any real individual: it flags them as "potentially sensitive" and the job fails. The photographer names throughout this guide are internal art-direction shorthand only. When you write the literal prompt, convert every named reference into its concrete visual properties: lens, light direction and quality, color grade, grain, composition, distance, mood. Describe the look, never the name.

Generate, then take the best frame into postproduction the way a real photographer would: subtle dodge and burn, film grain pass, slight chromatic aberration at edges, color grade in Lightroom or Capture One presets. This postproduction stage is what closes the gap between "AI image" and "campaign image" and what makes detection tools unreliable against the final file.

Save final assets with realistic EXIF and natural filenames (camera model, date, frame number) rather than the generator's default string.
