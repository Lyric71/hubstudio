#!/usr/bin/env bash
# Temporary batch script: generate all brand-website platform page images
# in parallel. 19 images, brand-website-* naming, every frame shows a visible
# company-website UI (homepage, about page, blog, search results, AI answer
# panel); team scenes use Chinese subjects in a lived-in Shanghai studio, all
# on-screen work content in English (Western market). Removed after use.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  # $1 = out filename, $2 = aspect ratio, $3 = prompt
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "/tmp/gen-${1%.*}.log" 2>&1 &
}

# Hero
GEN "brand-website-hero.jpg" "1:1" \
"A close editorial portrait of a hand holding a phone vertically in warm rim light, the phone screen filled with a company website homepage, a thin top navigation menu, a large headline, a short paragraph of body text and a wide call-to-action button beneath it, deep warm falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 50mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds, negative space top-right, all on-screen text in English"

# Why shot
GEN "brand-website-roots.jpg" "16:9" \
"A wide editorial photograph of two Chinese designers at a daylit table in a lived-in Shanghai creative studio, four open laptops lined up along the table, each screen showing a different company website page, a homepage with a top navigation menu and a headline, an about page with a portrait and columns of text, a blog index of article cards, and a search results page with an AI-generated answer panel at the top, the desk cluttered with tea mugs, a boba cup, sticky notes and tangled cables, all on-screen text in English, soft golden daylight from a tall window on the right, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Lane B: Core pages
GEN "brand-website-core.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen filled with a company website homepage, a thin top navigation menu, a large headline, a short intro paragraph, a wide call-to-action button and a band of three feature cards below, all on-screen text in English, a ceramic tea mug and a stack of sticky notes beside the laptop, soft north-facing daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Lane C: Offerings
GEN "brand-website-offerings.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a company website service page, a headline at the top, a block of explanatory paragraph text, a horizontal row of three short feature points with small icons, and a wide call-to-action button, all on-screen text in English, a boba cup and a printed page layout beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane D: Editorial
GEN "brand-website-editorial.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a company website blog index, a top navigation menu and a grid of article cards below, each card with a small thumbnail image, a headline and a short summary line, all on-screen text in English, a leather notebook and a tea mug beside the laptop, soft window daylight from camera-left, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

# Lane E: SEO content
GEN "brand-website-seo.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a Google-style search results page, a search box at the top and a vertical list of result entries below, each entry with a blue underlined link title and two grey lines of snippet text, all on-screen text in English, a printed keyword map annotated in pencil and a boba cup beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Lane F: GEO content
GEN "brand-website-geo.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a search results page with an AI-generated answer panel filling the top, a block of answer paragraph text inside the panel followed by a horizontal row of small rounded cited-source link chips, a thin list of plain search results below the panel, all on-screen text in English, a tea mug and sticky notes beside the laptop, soft daylight from a window on the right, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

echo "Wave 1 launched (7 jobs). Waiting..."
wait
echo "Wave 1 done."

# Partnership main and inset
GEN "brand-website-hybrid-main.jpg" "5:4" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in Shanghai creative studio, the screen showing a website content admin view, a grid of page preview cards for a homepage, several offering pages, blog articles and search-optimised guides, all on-screen text in English, the desk scattered with tea mugs, a boba cup, sticky notes and a printed brief, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the screen filled with a company website homepage, a thin top navigation menu, a large headline, a short paragraph and a wide call-to-action button, on-screen text in English, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process steps
GEN "brand-website-p1-brief.jpg" "4:3" \
"A Chinese creative director and a Chinese brand lead at a long table in a lived-in Shanghai studio, an open laptop between them showing a website sitemap diagram, a tree of connected page boxes, printed page layout sheets and sticky notes spread across the table, a one-page brief and tea mugs beside them, all on-screen and printed text in English, soft daylight from a tall window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-p2-direction.jpg" "4:3" \
"A storyboard wall in a lived-in Shanghai studio, five columns of page sketches pinned in sequence, each column headed by a short printed paper label, each column anchored by a printed mock of a website page, a homepage, a service page, a blog article, a search results list and an AI answer panel, sticky notes and a printed colour strip taped beside, all printed text in English, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "brand-website-p3-aigc.jpg" "4:3" \
"A Chinese editor at a calibrated workstation in a lived-in Shanghai studio, the main monitor showing a company website page draft open in a text editing view with paragraphs of body copy, a side panel showing a vertical list of generated page variation thumbnails, hands resting on the keyboard, a tea mug and tangled cables on the desk, all on-screen text in English, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "brand-website-p4-launch.jpg" "4:3" \
"A Chinese web producer at a daylit desk in a lived-in Shanghai studio, a calibrated monitor showing a content management system dashboard with a vertical list of website pages and a publish panel on the right, all on-screen text in English, a printed launch checklist annotated in pencil beside the keyboard, a boba cup and sticky notes on the desk, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-p5-adapt.jpg" "4:3" \
"A Chinese editor at a calibrated desk in a lived-in Shanghai studio, the main monitor showing a company website blog article open beside a small search-ranking line chart panel, a smaller side monitor showing an editorial calendar grid, all on-screen text in English, a tea mug and a printed content plan beside the keyboard, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

echo "Wave 2 launched (7 jobs). Waiting..."
wait
echo "Wave 2 done."

# Proof gallery samples
GEN "brand-website-sample-homepage.jpg" "1:1" \
"A close editorial still of an open laptop screen filled with a company website homepage, a thin top navigation menu, a large headline, a short paragraph, a wide call-to-action button and a band of three feature cards below, all on-screen text in English, set on a warm wood desk, soft daylight from camera-left, 50mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-sample-solution.jpg" "1:1" \
"A close editorial still of a laptop screen showing a company website solution page, a headline at the top, a block of explanatory paragraph text, a horizontal row of three short feature points with small icons, and a wide call-to-action button beneath, all on-screen text in English, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-sample-journal.jpg" "1:1" \
"A close editorial still of a laptop screen showing a company website blog article, a wide header image at the top, a large headline beneath it, a thin byline line, and a single centred column of body paragraph text, all on-screen text in English, set on a warm wood desk with a leather notebook, soft daylight from camera-left, 50mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-sample-guide.jpg" "1:1" \
"A close editorial still of a laptop screen showing a long-form guide page on a company website, a headline at the top, a table-of-contents list down the left side and a wide column of body text broken by subheadings on the right, all on-screen text in English, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "brand-website-sample-geo.jpg" "1:1" \
"A close cinematic still of a hand holding a phone vertically, the screen showing a search results page with an AI-generated answer panel, a paragraph of answer text inside the panel and a horizontal row of small rounded cited-source link chips beneath it, all on-screen text in English, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

echo "Wave 3 launched (5 jobs). Waiting..."
wait
echo "Brand-website batch done. Logs in /tmp/gen-brand-website-*.log"
