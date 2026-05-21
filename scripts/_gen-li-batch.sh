#!/usr/bin/env bash
# Temporary batch script: generate all LinkedIn platform page images in parallel.
# Rebuilt for the template-compliant /solutions/platforms/linkedin page: 18
# images, linkedin-* naming, every frame shows a visible LinkedIn UI, team
# scenes use Chinese subjects in a lived-in Shanghai studio. Removed after use.
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
GEN "linkedin-hero.jpg" "1:1" \
"A close editorial portrait of a hand holding a phone vertically in warm rim light, the phone screen filled with a LinkedIn feed post, a white card layout with a circular profile photo and name block at the top, a wide editorial image in the middle, and a horizontal reaction bar of small icons with a comment and repost row beneath, deep navy falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 50mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds, negative space top-right"

# Why shot
GEN "linkedin-roots.jpg" "16:9" \
"A wide editorial photograph of two Chinese designers at a daylit table in a lived-in Shanghai creative studio, four open laptops lined up along the table, each screen showing a different LinkedIn interface, a white card feed, a swipeable document carousel with page-dot indicators, a Campaign Manager dashboard of tables and bar charts, and a personal profile page, the desk cluttered with tea mugs, a boba cup, sticky notes and tangled cables, soft golden daylight from a tall window on the right, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Lane B: Content
GEN "linkedin-content.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen filled with a LinkedIn company-page feed, a vertical white-card layout with a circular logo avatar and a wide editorial brand image, a horizontal reaction-and-comment bar beneath, a thin left navigation rail of small icons down the side, a ceramic tea mug and a stack of sticky notes beside the laptop, soft north-facing daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Lane C: Ad creative
GEN "linkedin-ads.jpg" "5:4" \
"A close editorial still of a wide calibrated monitor on a lived-in Shanghai studio desk showing a LinkedIn Campaign Manager creative library, a grid of small ad preview cards in mixed shapes, single-image, multi-card carousel and video thumbnails, a left filter panel and a top toolbar, a printed media plan annotated in pencil and a boba cup beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane D: Thought leadership
GEN "linkedin-thought.jpg" "5:4" \
"A close editorial still of a phone propped on a lived-in Shanghai studio desk, the screen showing a LinkedIn personal profile feed, a large circular profile photo and a banner strip at the top, a long-form text post below, and a reaction count with a comment thread beneath it, a leather notebook and a tea mug beside the phone, soft window daylight from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

# Lane E: Avatar
GEN "linkedin-avatar.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a LinkedIn native video post, a presenter in business knitwear framed to camera inside a white feed card, a video scrubber bar along the bottom of the clip and a reaction-and-comment bar beneath the post, sticky notes and tangled cables around the laptop, warm daylight from a window on the right, 50mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

# Partnership main and inset
GEN "linkedin-hybrid-main.jpg" "5:4" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in Shanghai creative studio, the screen showing a LinkedIn Campaign Manager creative library, columns of small post and ad preview cards arranged in a grid, the desk scattered with tea mugs, a boba cup, sticky notes and a printed brief, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the screen showing a single LinkedIn feed post, a white card with a circular profile avatar, a wide image, and a horizontal reaction-and-comment bar at the bottom, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process steps
GEN "linkedin-p1-brief.jpg" "4:3" \
"A Chinese creative director and a Chinese brand lead at a long table in a lived-in Shanghai studio, an open laptop between them showing a LinkedIn Campaign Manager dashboard of tables and bar charts, printed LinkedIn feed posts and document carousel pages spread across the table, tea mugs, sticky notes and a one-page brief, soft daylight from a tall window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-p2-direction.jpg" "4:3" \
"A storyboard wall in a lived-in Shanghai studio, four columns of frame sketches pinned in sequence, each column headed by a short printed paper label, each column anchored by a printed LinkedIn feed post mock with a white card layout and a horizontal reaction bar, sticky notes and a printed colour strip taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "linkedin-p3-aigc.jpg" "4:3" \
"A Chinese motion designer at a calibrated workstation in a lived-in Shanghai studio, the main monitor showing a single LinkedIn document carousel page, a side panel showing a grid of small generated variation thumbnails, hands on a graphics tablet, a tea mug and tangled cables on the desk, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "linkedin-p4-launch.jpg" "4:3" \
"A Chinese media buyer at a daylit desk in a lived-in Shanghai studio, a calibrated monitor showing a LinkedIn Campaign Manager campaign dashboard with bar charts and a table of live placements, a printed campaign calendar annotated in pencil beside the keyboard, a boba cup and sticky notes on the desk, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-p5-adapt.jpg" "4:3" \
"A Chinese editor at a calibrated grading suite in a lived-in Shanghai studio, the main reference monitor showing a LinkedIn native video post paused on a presenter frame with the white feed-card interface and reaction bar visible at the screen edges, waveform panels glowing on a smaller side monitor, a tea mug beside the grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

# Proof gallery samples
GEN "linkedin-sample-feed.jpg" "1:1" \
"A close editorial still of an open laptop screen filled with a single LinkedIn feed post, a white card with a circular profile avatar and name block at the top, a wide editorial brand photograph in the middle, and a horizontal row of small reaction icons with comment and repost actions beneath, set on a warm wood desk, soft daylight from camera-left, 50mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-sample-sponsored.jpg" "1:1" \
"A close editorial still of a laptop screen showing a LinkedIn Campaign Manager ad preview panel, a single-image Sponsored Content ad inside a white feed card, a small grey Promoted label under the advertiser name and a rectangular call-to-action button at the lower edge of the card, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-sample-carousel.jpg" "1:1" \
"A close cinematic still of a hand holding a phone vertically, the screen showing a LinkedIn document carousel paused mid-swipe, a bordered editorial page filling the card with a row of small page-dot indicators and left-and-right swipe arrows along the lower edge, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, subtle film grain"

GEN "linkedin-sample-leader.jpg" "1:1" \
"A close editorial still of a phone screen showing a LinkedIn feed post boosted as a Thought Leader Ad, a large circular profile photo and a person name block at the top, a small grey Promoted-by label beneath, a long-form text post below, and a reaction-and-comment bar at the bottom, set on a warm oak desk with a leather notebook, soft daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "linkedin-sample-avatar.jpg" "1:1" \
"A close editorial still of a laptop screen showing a LinkedIn native video post, a presenter in business knitwear speaking to camera inside a white feed card, a thin video scrubber bar across the bottom of the clip and a horizontal reaction-and-comment bar beneath the post, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

echo "All 18 LinkedIn generation jobs launched. Waiting on completion..."
wait
echo "LinkedIn batch done. Logs in /tmp/gen-linkedin-*.log"
