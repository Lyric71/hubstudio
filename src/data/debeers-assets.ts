/**
 * DeBeers project assets (hidden review page at /debeers).
 *
 * Each entry is one asset shown on the review page: an image, a title, and a
 * description. Comments are NOT stored here, they live in Vercel KV and are
 * keyed by `id` (see src/lib/debeers.ts).
 *
 * To add an asset:
 *   1. Optimise the image (see the image rule in CLAUDE.md) and drop it in
 *      public/Images/debeers/  (heroes max 2000px / ~600 KB).
 *   2. Add a record below. `id` must be unique, lowercase, hyphen-separated:
 *      it is the storage key for that asset's comments, so never reuse or
 *      rename it once comments exist.
 */

export interface DebeersAsset {
  /** Unique, stable, lowercase-kebab. Also the KV key for this asset's comments. */
  id: string;
  /** Short asset title shown above the description. */
  title: string;
  /** Root-relative path under /Images/debeers/, e.g. '/Images/debeers/key-visual.jpg'. */
  image: string;
  /**
   * Optional full-resolution file for the enlarge (lightbox) view. The grid
   * thumbnail always uses `image` (optimized, <=2000px); when `full` is set the
   * enlarge view loads this larger file instead. Lives under /debeers-full/ so
   * the pre-commit image optimizer never downsizes it.
   */
  full?: string;
  /**
   * Optional untouched original for the Download button: the model's native
   * output before any optimization (typically the source PNG). When set, the
   * download serves this; otherwise it falls back to `full`, then `image`.
   * Also lives under /debeers-full/, out of the optimizer's reach.
   */
  original?: string;
  /** Alt text for the image (accessibility + when the file fails to load). */
  alt: string;
  /** Body description, one or more sentences. */
  description: string;
  /** Technical definition shown as a caption: format, pixel size, weight. */
  spec: string;
}

export const debeersAssets: DebeersAsset[] = [
  {
    id: 'bg-navy-leather',
    title: 'Background, navy pebbled leather',
    image: '/Images/debeers/bg-navy-leather.webp',
    full: '/debeers-full/bg-navy-leather.webp',
    original: '/debeers-full/bg-navy-leather.png',
    alt: 'Dark navy full-grain pebbled leather shot top-down, a soft overhead spotlight pooling at center and falling off into near-black corners.',
    description:
      'Top-down navy pebbled leather with a single overhead spotlight. The lit pool sits upper-center, grain dissolving into a dark corner vignette. Built for a centred hero crop with negative space around the subject.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bg-brushed-metal',
    title: 'Background, brushed metal',
    image: '/Images/debeers/bg-brushed-metal.webp',
    full: '/debeers-full/bg-brushed-metal.webp',
    original: '/debeers-full/bg-brushed-metal.png',
    alt: 'Vertical brushed blue-grey metal panel, satin finish, lit softly from the right with the brightest area in the upper-right.',
    description:
      'Vertical brushed blue-grey metal, satin and non-reflective. A soft light from the right ramps the panel dark-left to bright-right with the peak upper-right. The whole plane sits in gentle soft focus for a premium feel.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bg-royal-drape',
    title: 'Background, royal-blue drape',
    image: '/Images/debeers/bg-royal-drape.webp',
    full: '/debeers-full/bg-royal-drape.webp',
    original: '/debeers-full/bg-royal-drape.png',
    alt: 'Softly draped deep royal-blue textured surface seen from a low top-down angle, a diagonal light streak grazing a raised ridge from the upper-left.',
    description:
      'Draped royal-blue textured leather with a diagonal light streak from the upper-left grazing the raised ridge. Crests catch the light, valleys fall to deep navy. Cinematic gradient with room for type in the lower-right.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-garden-square',
    title: 'Bloomsbury, Georgian garden square',
    image: '/Images/debeers/bloomsbury-garden-square.webp',
    full: '/debeers-full/bloomsbury-garden-square.webp',
    original: '/debeers-full/bloomsbury-garden-square.png',
    alt: 'The model in her white silk shirt and diamond butterfly jewelry seated at an outdoor cafe table in a Bloomsbury garden square, cream Georgian stucco townhouses and leafy plane trees softly blurred behind her.',
    description:
      'The model placed in a Bloomsbury garden square, seated at an outdoor cafe table. Cream-painted Georgian stucco townhouses with white sash windows and black iron railings sit behind her, framed by soft green plane trees. Subject, jewelry, and lighting kept unchanged from the source.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-townhouse-balcony',
    title: 'Bloomsbury, townhouse balcony',
    image: '/Images/debeers/bloomsbury-townhouse-balcony.webp',
    full: '/debeers-full/bloomsbury-townhouse-balcony.webp',
    original: '/debeers-full/bloomsbury-townhouse-balcony.png',
    alt: 'The model on a wrought-iron Bloomsbury balcony at a small bistro table, pale Portland stone facade and the green canopy of garden-square trees behind her.',
    description:
      'The model on a wrought-iron Bloomsbury balcony, leaning at a small bistro table. A black iron balustrade, pale Portland stone facade, and the green canopy of the garden square sit behind her under soft diffused morning light.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-british-museum',
    title: 'Bloomsbury, British Museum colonnade',
    image: '/Images/debeers/bloomsbury-british-museum.webp',
    full: '/debeers-full/bloomsbury-british-museum.webp',
    original: '/debeers-full/bloomsbury-british-museum.png',
    alt: 'The model seated near the neoclassical colonnade of the British Museum in Bloomsbury, tall fluted limestone columns and pale stone steps softly blurred behind her.',
    description:
      'The model seated near the British Museum colonnade in Bloomsbury. Tall fluted limestone columns and pale stone steps fall into soft focus behind her, with a hint of green from nearby trees and gentle overcast light.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-cafe-terrace',
    title: 'Bloomsbury, cafe terrace',
    image: '/Images/debeers/bloomsbury-cafe-terrace.webp',
    full: '/debeers-full/bloomsbury-cafe-terrace.webp',
    original: '/debeers-full/bloomsbury-cafe-terrace.png',
    alt: 'The model at a marble bistro table on a Bloomsbury cafe terrace, a cream awning, potted bay trees, and pale stone paving softly blurred behind her.',
    description:
      'The model at a marble bistro table on a Bloomsbury cafe terrace. A cream awning, potted bay trees, and pale stone paving sit softly out of focus behind her, lit by gentle overcast daylight for an intimate editorial mood.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-russell-square',
    title: 'Bloomsbury, Russell Square bench',
    image: '/Images/debeers/bloomsbury-russell-square.webp',
    full: '/debeers-full/bloomsbury-russell-square.webp',
    original: '/debeers-full/bloomsbury-russell-square.png',
    alt: 'The model seated on a dark green park bench in Russell Square, Bloomsbury, lush plane trees and manicured lawns softly blurred behind her.',
    description:
      'The model seated on a dark green bench in Russell Square, Bloomsbury. Mature plane trees and manicured lawns blur softly behind her, dappled with gentle light under a warm overcast sky.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-pergola',
    title: 'Bloomsbury, garden square pergola',
    image: '/Images/debeers/bloomsbury-pergola.webp',
    full: '/debeers-full/bloomsbury-pergola.webp',
    original: '/debeers-full/bloomsbury-pergola.png',
    alt: 'The model seated beneath a white-painted garden pergola in a Bloomsbury square, climbing greenery and wisteria softly blurred behind her.',
    description:
      'The model seated beneath a white-painted garden pergola in a Bloomsbury square. Climbing greenery and wisteria, pale stone planters, and white timber framing surround her as warm daylight filters through the leaves.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-golden-hour',
    title: 'Bloomsbury, balcony at golden hour',
    image: '/Images/debeers/bloomsbury-golden-hour.webp',
    full: '/debeers-full/bloomsbury-golden-hour.webp',
    original: '/debeers-full/bloomsbury-golden-hour.png',
    alt: 'The model on a Bloomsbury townhouse balcony at golden hour, resting against a black iron railing with warm-lit pale stone facades glowing behind her.',
    description:
      'The model on a Bloomsbury townhouse balcony at golden hour, resting against a black iron railing. Warm-lit pale stone facades and soft tree silhouettes glow in low golden sunlight for a cinematic, warm editorial frame.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-hotel-steps',
    title: 'Bloomsbury, boutique hotel steps',
    image: '/Images/debeers/bloomsbury-hotel-steps.webp',
    full: '/debeers-full/bloomsbury-hotel-steps.webp',
    original: '/debeers-full/bloomsbury-hotel-steps.png',
    alt: 'The model seated on the pale stone entrance steps of an elegant Bloomsbury boutique hotel, white-painted columns and brass door fixtures softly blurred behind her.',
    description:
      'The model seated on the pale stone entrance steps of an elegant Bloomsbury boutique hotel. White-painted columns and a portico, brass door fixtures, and a stone urn of white flowers fall softly out of focus behind her.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-mews',
    title: 'Bloomsbury, cobbled mews',
    image: '/Images/debeers/bloomsbury-mews.webp',
    full: '/debeers-full/bloomsbury-mews.webp',
    original: '/debeers-full/bloomsbury-mews.png',
    alt: 'The model standing in a charming Bloomsbury mews, pale-painted mews houses in cream, grey, and sage set on light cobblestones softly blurred behind her.',
    description:
      'The model standing in a charming Bloomsbury mews. Pale-painted mews houses in cream, soft grey, and pastel sage line light cobblestones behind her, with climbing greenery and gentle overcast warmth.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
  {
    id: 'bloomsbury-conservatory',
    title: 'Bloomsbury, glass conservatory balcony',
    image: '/Images/debeers/bloomsbury-conservatory.webp',
    full: '/debeers-full/bloomsbury-conservatory.webp',
    original: '/debeers-full/bloomsbury-conservatory.png',
    alt: 'The model on a balcony beside a Bloomsbury glass conservatory, near a small white iron table, soft reflections in tall glass panes and lush potted greenery behind her.',
    description:
      'The model on a balcony beside a Bloomsbury glass conservatory, near a small white iron table. Soft reflections in tall glass panes, white-painted iron frames, and lush potted greenery sit behind her in bright, airy overcast light.',
    spec: 'WebP · 16:9 · click to view original quality',
  },
];
