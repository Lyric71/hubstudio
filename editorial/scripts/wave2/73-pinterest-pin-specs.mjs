// editorial/scripts/wave2/73-pinterest-pin-specs.mjs
export default {
  id: "73",
  date: "2026-10-20",
  family: "spec",
  template: "spec",
  brief: true,
  status: "not_started",
  cluster: "Platform specs",
  contentType: "Spec page",
  readerStage: "practitioner",
  slug: "pinterest-pin-specs",
  h1: "Pinterest pin specs for 2026",
  query: "pinterest pin size",
  secondary: [
    "pinterest pin size 2026",
    "pinterest video pin specs",
    "pinterest carousel pin size",
    "pinterest ad specs",
  ],
  verdict:
    "UNCITED CONSENSUS. Scheduler and tool blogs agree on 1000 x 1500 at 2:3 and then invent named formats (long pins, infographic pins, idea pins) with sizes nobody sources; few link Pinterest's own Help Center or Business specs, and the retired formats are still listed as current.",
  words: 1400,
  angle:
    "Only what Pinterest itself publishes, in its Help Center and Business ads specs, dated, with retired formats flagged as retired. Then the plain production note: the hubStudio app makes and exports Pinterest files but does not publish to Pinterest, so you upload them yourself.",
  mustInclude: [
    "Spec table for standard pins: ratio, recommended size, file types, file size limit, from Pinterest's own pages",
    "Video pins, carousel pins and collections ads: ratio, length and file limits from Pinterest Business specs",
    "What Pinterest says happens to pins taller than its recommended ratio (truncation in feed), quoted",
    "Formats that are retired or renamed, flagged as such with the Pinterest page that says so",
    "A visible Reviewed date and a dated changelog block at the foot",
    "Plainly: hubStudio does not publish to Pinterest; the files are made and downloaded, then pinned by you",
    "Making the files in hubStudio: in the Image studio pick a portrait Shape; in the Image editor use Free crop and read the pixel size shown, then set the width in Save (PNG, JPG or WEBP); for video, the Video editor's Vertical 9:16 frame",
  ],
  doNot: [
    "Take any value from a third-party blog",
    "Claim hubStudio publishes or schedules to Pinterest, or has a Pinterest preset in the Image editor",
    "List invented pin types or sizes that Pinterest does not publish",
    "Print a hubStudio amount",
    "Name any competitor or tool",
    "Use an em dash",
  ],
  stats: [
    "Every ratio, size, file and length limit: Pinterest Help Center and Pinterest Business ad specs, dated, both check dates in the ledger",
    "hubStudio facts: create-an-image.md and assets-library.md in the help center",
  ],
  assets: [
    "Spec table: pin type, ratio, recommended pixels, file limits, source page",
    "Video and carousel table: ratio, length, file limits, source page",
    "Retired formats table: name, status, source",
    "Changelog block, dated, updated in place",
  ],
  links: [
    ["Image editor", "/app/image-tools"],
    ["Instagram post sizes for 2026", "/resources/insights/instagram-post-sizes-2026"],
    ["Social media design service", "/services/design/social-media"],
    ["Ecommerce design service", "/services/design/ecommerce"],
  ],
  seoTitle: "Pinterest Pin Specs for 2026",
  seoDesc:
    "Pinterest standard, video and carousel pin sizes, ratios and file limits for 2026, read from Pinterest's own Help Center and Business specs.",
  faqs: [
    "What size should a Pinterest pin be?",
    "What aspect ratio does Pinterest use?",
    "What happens if my pin is too tall?",
    "What are the Pinterest video pin specs?",
    "How many images can a Pinterest carousel have?",
    "Can I schedule Pinterest pins from hubStudio?",
  ],
  cta: "Create your account",
  notes:
    "Spec page: Pinterest Help Center and Pinterest Business only. Watch row due 2027-01-20. There is no Pinterest platform page on the site: link the service pages instead.",
};
