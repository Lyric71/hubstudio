#!/usr/bin/env bash
# Temporary batch script: generate all LinkedIn platform page images in parallel.
# Removed after use; not committed.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "/tmp/gen-${1%.*}.log" 2>&1 &
}

GEN "li-hero.jpg" "1:1" \
"A close editorial portrait of a B2B executive in a charcoal merino crewneck seated at a daylit desk, hand resting near a notebook, soft window daylight from camera-left, navy bookshelf out of focus behind, 50mm prime, f/2.8, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds with the figure on the right, negative space top-left"

GEN "li-roots.jpg" "16:9" \
"A wide editorial photograph of a quiet daylit boardroom in late afternoon, two people at a long oak table reviewing a printed thought-leadership brief, soft window daylight from the right, navy linen chairs, a single ceramic carafe and two glasses on the table, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

GEN "li-thought.jpg" "5:4" \
"A close editorial still of an executive writing in a leather-bound notebook at a daylit oak desk, a printed long-form article draft and a black mechanical pencil beside the notebook, soft north-facing daylight from camera-left, no screen visible, 50mm prime, f/2.8, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-authority.jpg" "5:4" \
"A clean editorial portrait of a panel of three professional speakers seated on a low stage at a small daylit conference room, one mid-sentence, the other two listening, soft warm side light, deep navy backdrop behind, 35mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain, rule of thirds"

GEN "li-ads.jpg" "5:4" \
"A wide editorial still of a B2B media planner at a daylit studio desk reviewing a calibrated monitor showing a LinkedIn-style campaign dashboard with bar charts and tables, a printed media plan annotated in pencil beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, subtle film grain"

GEN "li-hybrid-main.jpg" "5:4" \
"A producer at a wide reference monitor reviewing a horizontal grid of B2B thought-leadership carousel posts side by side, each frame with clean editorial layout, soft daylight from an unseen window, neutral concrete studio with one potted plant and a printed brief on the desk, 35mm prime, f/4, warm shadow film grade, Portra 400, lifted blacks, subtle film grain"

GEN "li-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand on a charcoal merino sleeve resting beside a leather notebook on an oak desk, a black mechanical pencil aligned with the notebook spine, soft window daylight from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

GEN "li-p1-brief.jpg" "4:3" \
"A creative director and a B2B brand lead at a long oak studio table, soft daylight from a tall window on the right, the table covered in printed long-form article references and a single one-page brief in the middle, two pens and an open leather notebook, no laptops, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-p2-direction.jpg" "4:3" \
"A storyboard wall in a daylit studio, two columns of horizontal carousel frame sketches pinned in sequence, one column labelled Carousel in mono-spaced print, the other Video, a small printed colour strip taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "li-p3-aigc.jpg" "4:3" \
"A motion designer at a calibrated workstation in a daylit studio, the main reference monitor showing a single editorial B2B carousel frame, a side panel showing a grid of small generated variations, hands on a graphics tablet, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "li-p4-launch.jpg" "4:3" \
"A B2B media planner at a daylit studio desk reviewing a printed campaign calendar beside a calibrated monitor showing a LinkedIn-style analytics dashboard with bar charts, soft daylight from a window on the left, one ceramic cup of tea, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-p5-adapt.jpg" "4:3" \
"A colourist at a calibrated grading suite, the main reference monitor showing a warm editorial B2B video frame, waveform and vectorscope panels glowing on a smaller side monitor, hands on a precision grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

GEN "li-sample-arden.jpg" "1:1" \
"A close editorial portrait of a senior consultant in a charcoal blazer seated at a daylit oak desk, mid-sentence, soft window daylight from camera-left, navy bookshelf out of focus behind, 85mm prime, f/2.8, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-sample-brent.jpg" "1:1" \
"A clean editorial still of a printed annual report and a leather notebook stacked on a warm oak desk, a black pen resting on top, soft daylight from camera-left, deep negative space on the right, 50mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-sample-cardel.jpg" "1:1" \
"A close cinematic still of two professionals shaking hands across a daylit oak table, framed from the wrists to mid-chest, both in neutral merino knitwear, soft warm sidelight, 50mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-sample-doran.jpg" "1:1" \
"A clean editorial still of a calibrated monitor on a daylit oak desk displaying a B2B dashboard with bar charts and a single hero metric, framed slightly from above, a leather notebook and a black pen in the foreground, soft daylight from camera-left, 50mm prime, f/4, Kodak Gold grade, lifted blacks, subtle film grain"

GEN "li-sample-erith.jpg" "1:1" \
"A close editorial portrait of a senior B2B executive in a navy blazer leaning slightly forward at a daylit oak desk, listening intently, soft window daylight from camera-right, warm wood panelling out of focus behind, 85mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

echo "All 17 LinkedIn generation jobs launched. Waiting on completion..."
wait
echo "LinkedIn batch done. Logs in /tmp/gen-li-*.log"
