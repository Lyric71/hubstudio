#!/usr/bin/env bash
# Temporary batch script: generate all Shopify platform page images in parallel.
# 17 images, shopify-* naming, every frame shows a visible storefront/admin UI,
# team scenes use Chinese subjects in a lived-in Shanghai studio, on-screen work
# content in English (Shopify is a Western-market platform). Removed after use.
set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p scripts/.genlogs

GEN() {
  # $1 = out filename, $2 = aspect ratio, $3 = prompt
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "scripts/.genlogs/${1%.*}.log" 2>&1 &
}

# Hero
GEN "shopify-hero.jpg" "1:1" \
"A close editorial portrait of a hand holding a phone vertically in warm rim light, the phone screen filled with an online store product detail page, a large product photograph at the top, a product title and a price line beneath it, a row of small thumbnail images, and a wide rectangular add-to-cart button near the bottom of the interface, deep navy falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 85mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds, negative space top-right"

# Why shot
GEN "shopify-roots.jpg" "16:9" \
"A wide editorial photograph of two Chinese designers at a daylit table in a lived-in Shanghai creative studio, three open laptops lined up along the table, each screen showing a different online store interface, a product detail page with a large photo and an add-to-cart button, a collection page with a grid of product cards each showing a photo and a price, and a grid of advertising creative variants in mixed shapes, the desk cluttered with tea mugs, a boba cup, sticky notes and tangled cables, soft golden daylight from a tall window on the right, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Lane B: Product pages
GEN "shopify-product.jpg" "1:1" \
"A close editorial still of a phone held in both hands, the screen filled with an online store product detail page, a swipeable product image gallery at the top with a row of small thumbnail dots, the product title and price below, and a wide add-to-cart button fixed at the bottom of the storefront interface, soft north-facing daylight from camera-right, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain, negative space top-left"

# Lane C: Store content
GEN "shopify-store.jpg" "1:1" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen filled with an online store homepage, a full-width hero banner across the top, a grid of collection cards below it, and a small cart icon in the top navigation bar of the theme, a ceramic tea mug and a stack of sticky notes beside the laptop, soft window daylight from camera-left, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane D: Ad creative
GEN "shopify-ads.jpg" "1:1" \
"A close editorial still of a wide calibrated monitor on a lived-in Shanghai studio desk, the screen split between an online store product detail page on one side and a grid of paid advertising creative variants in vertical and square shapes on the other, the product price and add-to-cart button visible in the open page, a printed media plan annotated in pencil and a boba cup beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Partnership main and inset
GEN "shopify-hybrid-main.jpg" "1:1" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in Shanghai creative studio, the screen showing an online store product detail page beside a grid of paid advertising creative variants arranged in columns, the desk scattered with tea mugs, a boba cup, sticky notes and a printed brief, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the screen showing a single online store product page, a product image gallery, a price line, and a wide add-to-cart button at the bottom of the interface, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process steps
GEN "shopify-p1-brief.jpg" "4:3" \
"A Chinese creative director and a Chinese brand lead at a long table in a lived-in Shanghai studio, an open laptop between them showing an online store admin product list, a table of product rows each with a small thumbnail, printed product-page and collection-page screenshots spread across the table, tea mugs, sticky notes and a one-page brief, soft daylight from a tall window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-p2-direction.jpg" "4:3" \
"A storyboard wall in a lived-in Shanghai studio, three columns of frame sketches pinned in sequence, each column headed by a short printed paper label, each column anchored by a printed online store product-page phone mock with an image gallery and an add-to-cart button, a Chinese designer pinning a reference, sticky notes and a printed colour strip taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "shopify-p3-aigc.jpg" "4:3" \
"A Chinese retoucher at a calibrated workstation in a lived-in Shanghai studio, the main monitor showing a single online store product-page hero image, a side panel showing a grid of small catalog product thumbnails in an admin interface, hands on a graphics tablet, a tea mug and tangled cables on the desk, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "shopify-p4-launch.jpg" "4:3" \
"A Chinese merchandiser at a daylit desk in a lived-in Shanghai studio, a calibrated monitor showing a live online store collection page with a published grid of product cards each showing a photo and a price, a printed launch calendar annotated in pencil beside the keyboard, a boba cup and sticky notes on the desk, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-p5-adapt.jpg" "4:3" \
"A Chinese colorist at a calibrated grading suite in a lived-in Shanghai studio, the main reference monitor showing an online store product-page image paused on a styled product still with the storefront price and gallery thumbnails visible at the screen edges, waveform panels glowing on a smaller side monitor, a tea mug beside the grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

# Proof gallery samples
GEN "shopify-sample-pdp.jpg" "1:1" \
"A close editorial still of a vertical phone in soft window light, the screen filled with an online store product detail page, a large on-model product photograph, a product title and a price line, a row of small thumbnail images, and a wide add-to-cart button at the bottom of the storefront interface, set on a warm wood desk, 85mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-sample-video.jpg" "1:1" \
"A close cinematic still of a phone screen showing an online store product page with a product video playing in the gallery area, a horizontal play progress bar across the lower edge of the video, the product title, price and add-to-cart button visible below in the storefront interface, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, subtle film grain"

GEN "shopify-sample-collection.jpg" "1:1" \
"A close editorial still of an open laptop screen showing an online store collection page, a neat grid of product cards each with a product photo, a short name and a price, a column of filter controls down the left side, and a cart icon in the top navigation, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-sample-homepage.jpg" "1:1" \
"A close editorial still of a laptop screen showing an online store homepage, a full-width seasonal hero banner with a large lifestyle image, a featured product row of cards beneath it, and the theme navigation with a cart icon along the top, set on a warm oak desk, soft daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "shopify-sample-ad.jpg" "1:1" \
"A close editorial still of a desktop screen showing an online store product page open in one window with three vertical advertising creative variants lined up beside it, the storefront price and add-to-cart button visible in the open product page, set on a warm wood desk, soft daylight from camera-left, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

echo "All 17 Shopify generation jobs launched. Waiting on completion..."
wait
echo "Shopify batch done. Logs in scripts/.genlogs/"
