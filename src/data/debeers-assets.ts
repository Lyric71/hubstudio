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
  /** Alt text for the image (accessibility + when the file fails to load). */
  alt: string;
  /** Body description, one or more sentences. */
  description: string;
  /** Technical definition shown as a caption: format, pixel size, weight. */
  spec: string;
}

/**
 * Product KV assets — campaign key visuals rendered as a separate section at
 * the top of /debeers. Same schema as `debeersAssets`; kept in its own list so
 * the page can group them visually under their own heading.
 */
export const debeersProductKvs: DebeersAsset[] = [
  {
    id: 'ring-kv-v2-royal',
    title: 'Butterfly ring key visual, royal blue',
    image: '/debeers-full/Ring0622/ringKV-V2-1.jpg',
    full: '/debeers-full/Ring0622/ringKV-V2-1.jpg',
    alt: 'Two diamond butterfly rings on draped royal-blue leather, one with an open filigree wing set, the other a marquise-centred pavé wing engraved DE BEERS.',
    description:
      'Paired diamond butterfly rings staged on draped royal-blue leather. One ring shows the open filigree wing, the other the marquise-centred pavé wing engraved DE BEERS, lit to read as a cooler, brighter campaign frame.',
    spec: 'JPG · source',
  },
  {
    id: 'ring-kv-v2-navy',
    title: 'Butterfly ring key visual, deep navy',
    image: '/debeers-full/Ring0622/ringKV-V2-2.jpg',
    full: '/debeers-full/Ring0622/ringKV-V2-2.jpg',
    alt: 'Two diamond butterfly rings on draped deep-navy leather, one with an open filigree wing set, the other a marquise-centred pavé wing engraved DE BEERS.',
    description:
      'Companion framing of the paired diamond butterfly rings on draped deep-navy leather. The darker, moodier ground deepens the contrast and gives a richer, more dramatic alternate to the royal-blue key visual.',
    spec: 'JPG · source',
  },
  {
    id: 'ring-kv-hero',
    title: 'Ring key visual, hero',
    image: '/debeers-full/Ring%20kv/1.jpg',
    full: '/debeers-full/Ring%20kv/1.jpg',
    alt: 'Diamond ring product key visual, studio composition.',
    description:
      'Campaign key visual for the diamond ring, used as the hero composition across the layout system.',
    spec: 'JPG · source',
  },
  {
    id: 'ring-kv-alt',
    title: 'Ring key visual, alternate',
    image: '/debeers-full/Ring%20kv/2.jpg',
    full: '/debeers-full/Ring%20kv/2.jpg',
    alt: 'Diamond ring product key visual, alternate studio composition.',
    description:
      'Companion key visual for the diamond ring, a second framing of the campaign hero for layouts that need a different crop.',
    spec: 'JPG · source',
  },
];

export const debeersAssets: DebeersAsset[] = [
  {
    id: 'bg-navy-leather',
    title: 'Background, navy pebbled leather',
    image: '/Images/debeers/bg-navy-leather.webp',
    full: '/debeers-full/bg-navy-leather.webp',
    alt: 'Dark navy full-grain pebbled leather shot top-down, a soft overhead spotlight pooling at center and falling off into near-black corners.',
    description:
      'Top-down navy pebbled leather with a single overhead spotlight. The lit pool sits upper-center, grain dissolving into a dark corner vignette. Built for a centred hero crop with negative space around the subject.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bg-brushed-metal',
    title: 'Background, brushed metal',
    image: '/Images/debeers/bg-brushed-metal.webp',
    full: '/debeers-full/bg-brushed-metal.webp',
    alt: 'Vertical brushed blue-grey metal panel, satin finish, lit softly from the right with the brightest area in the upper-right.',
    description:
      'Vertical brushed blue-grey metal, satin and non-reflective. A soft light from the right ramps the panel dark-left to bright-right with the peak upper-right. The whole plane sits in gentle soft focus for a premium feel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bg-royal-drape',
    title: 'Background, royal-blue drape',
    image: '/Images/debeers/bg-royal-drape.webp',
    full: '/debeers-full/bg-royal-drape.webp',
    alt: 'Softly draped deep royal-blue textured surface seen from a low top-down angle, a diagonal light streak grazing a raised ridge from the upper-left.',
    description:
      'Draped royal-blue textured leather with a diagonal light streak from the upper-left grazing the raised ridge. Crests catch the light, valleys fall to deep navy. Cinematic gradient with room for type in the lower-right.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-garden-square',
    title: 'Bloomsbury, Georgian garden square',
    image: '/Images/debeers/bloomsbury-garden-square.webp',
    full: '/debeers-full/bloomsbury-garden-square.webp',
    alt: 'The model in her white silk shirt and diamond butterfly jewelry seated at an outdoor cafe table in a Bloomsbury garden square, cream Georgian stucco townhouses and leafy plane trees softly blurred behind her.',
    description:
      'The model placed in a Bloomsbury garden square, seated at an outdoor cafe table. Cream-painted Georgian stucco townhouses with white sash windows and black iron railings sit behind her, framed by soft green plane trees. The black panel from the source is replaced by a pale stone tabletop.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-townhouse-balcony',
    title: 'Bloomsbury, townhouse balcony',
    image: '/Images/debeers/bloomsbury-townhouse-balcony.webp',
    full: '/debeers-full/bloomsbury-townhouse-balcony.webp',
    alt: 'The model at a small bistro table on a wrought-iron Bloomsbury balcony terrace, pale Portland stone facade and the green canopy of garden-square trees behind her.',
    description:
      'The model at a bistro table on a wrought-iron Bloomsbury balcony terrace. A black iron balustrade, pale Portland stone facade, and the green canopy of the garden square sit behind her under soft diffused morning light. A pale stone tabletop replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-british-museum',
    title: 'Bloomsbury, British Museum colonnade',
    image: '/Images/debeers/bloomsbury-british-museum.webp',
    full: '/debeers-full/bloomsbury-british-museum.webp',
    alt: 'The model seated near the neoclassical colonnade of the British Museum in Bloomsbury, tall fluted limestone columns and pale stone steps softly blurred behind her.',
    description:
      'The model seated near the British Museum colonnade in Bloomsbury. Tall fluted limestone columns and pale stone steps fall into soft focus behind her, with a hint of green from nearby trees and gentle overcast light. A pale stone balustrade replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-cafe-terrace',
    title: 'Bloomsbury, cafe terrace',
    image: '/Images/debeers/bloomsbury-cafe-terrace.webp',
    full: '/debeers-full/bloomsbury-cafe-terrace.webp',
    alt: 'The model at a marble bistro table on a Bloomsbury cafe terrace, a cream awning, potted bay trees, and pale stone paving softly blurred behind her.',
    description:
      'The model at a marble bistro table on a Bloomsbury cafe terrace. A cream awning, potted bay trees, and pale stone paving sit softly out of focus behind her, lit by gentle overcast daylight for an intimate editorial mood. The pale marble top replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-russell-square',
    title: 'Bloomsbury, Russell Square bench',
    image: '/Images/debeers/bloomsbury-russell-square.webp',
    full: '/debeers-full/bloomsbury-russell-square.webp',
    alt: 'The model seated on a pale wooden park bench in Russell Square, Bloomsbury, lush plane trees and manicured lawns softly blurred behind her.',
    description:
      'The model seated on the pale wooden rail of a bench in Russell Square, Bloomsbury. Mature plane trees and manicured lawns blur softly behind her, dappled with gentle light under a warm overcast sky. The light bench surface replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-pergola',
    title: 'Bloomsbury, garden square pergola',
    image: '/Images/debeers/bloomsbury-pergola.webp',
    full: '/debeers-full/bloomsbury-pergola.webp',
    alt: 'The model seated at a pale table beneath a white-painted garden pergola in a Bloomsbury square, climbing greenery and wisteria softly blurred behind her.',
    description:
      'The model at a pale table beneath a white-painted garden pergola in a Bloomsbury square. Climbing greenery and wisteria, pale stone planters, and white timber framing surround her as warm daylight filters through the leaves. A pale tabletop replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-golden-hour',
    title: 'Bloomsbury, balcony at golden hour',
    image: '/Images/debeers/bloomsbury-golden-hour.webp',
    full: '/debeers-full/bloomsbury-golden-hour.webp',
    alt: 'The model on a Bloomsbury townhouse balcony at golden hour, a pale ledge under her arm and warm-lit pale stone facades glowing behind her.',
    description:
      'The model on a Bloomsbury townhouse balcony at golden hour. Warm-lit pale stone facades and soft tree silhouettes glow in low golden sunlight for a cinematic, warm editorial frame. A warm-lit pale ledge replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-hotel-steps',
    title: 'Bloomsbury, boutique hotel steps',
    image: '/Images/debeers/bloomsbury-hotel-steps.webp',
    full: '/debeers-full/bloomsbury-hotel-steps.webp',
    alt: 'The model seated on the pale stone entrance steps of an elegant Bloomsbury boutique hotel, white-painted columns and brass door fixtures softly blurred behind her.',
    description:
      'The model seated on the pale stone entrance steps of an elegant Bloomsbury boutique hotel. White-painted columns and a portico, brass door fixtures, and a stone urn of white flowers fall softly out of focus behind her. A pale stone step replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-mews',
    title: 'Bloomsbury, cobbled mews',
    image: '/Images/debeers/bloomsbury-mews.webp',
    full: '/debeers-full/bloomsbury-mews.webp',
    alt: 'The model leaning on a pale ledge in a charming Bloomsbury mews, pale-painted mews houses in cream, grey, and sage set on light cobblestones softly blurred behind her.',
    description:
      'The model leaning on a pale ledge in a charming Bloomsbury mews. Pale-painted mews houses in cream, soft grey, and pastel sage line light cobblestones behind her, with climbing greenery and gentle overcast warmth. The pale ledge replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-conservatory',
    title: 'Bloomsbury, glass conservatory balcony',
    image: '/Images/debeers/bloomsbury-conservatory.webp',
    full: '/debeers-full/bloomsbury-conservatory.webp',
    alt: 'The model on a balcony beside a Bloomsbury glass conservatory, near a small white iron table, soft reflections in tall glass panes and lush potted greenery behind her.',
    description:
      'The model on a balcony beside a Bloomsbury glass conservatory, near a small white iron table. Soft reflections in tall glass panes, white-painted iron frames, and lush potted greenery sit behind her in bright, airy overcast light. A pale ledge replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-bedford-square',
    title: 'Bloomsbury, Bedford Square facade',
    image: '/Images/debeers/bloomsbury-bedford-square.webp',
    full: '/debeers-full/bloomsbury-bedford-square.webp',
    alt: 'The model in her white silk shirt and diamond butterfly jewelry in front of a Bedford Square Georgian terrace, brown London stock brick, white sash windows, a white Coade-stone doorcase and black iron railings behind her.',
    description:
      'The model set against a Bedford Square Georgian terrace, the definitive Bloomsbury streetscape. Brown London stock brick, white sash windows, a black front door under a white Coade-stone Doric doorcase, and black area railings sit behind her. The black panel from the source is replaced by a pale stone gatepost.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-british-museum-portico',
    title: 'Bloomsbury, British Museum portico',
    image: '/Images/debeers/bloomsbury-british-museum-portico.webp',
    full: '/debeers-full/bloomsbury-british-museum-portico.webp',
    alt: 'The model in front of the British Museum south portico in Bloomsbury, tall fluted Ionic limestone columns and the sculpted pediment rising behind her, pale stone steps below.',
    description:
      'The model before the British Museum main entrance, the Greek Revival south portico with its row of fluted Ionic limestone columns and sculpted pediment rising behind her. She rests on a pale stone balustrade in place of the source black panel, under soft overcast light.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-senate-house',
    title: 'Bloomsbury, Senate House tower',
    image: '/Images/debeers/bloomsbury-senate-house.webp',
    full: '/debeers-full/bloomsbury-senate-house.webp',
    alt: 'The model on Malet Street with the Art Deco Senate House rising behind her, its stepped Portland-stone tower and tall vertical window bays softly blurred.',
    description:
      'The model on Malet Street with the monumental Art Deco Senate House behind her, its stepped Portland-stone tower and tall vertical bays instantly placing the scene as Bloomsbury. A pale stone ledge replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-lambs-conduit',
    title: "Bloomsbury, Lamb's Conduit Street",
    image: '/Images/debeers/bloomsbury-lambs-conduit.webp',
    full: '/debeers-full/bloomsbury-lambs-conduit.webp',
    alt: "The model on Lamb's Conduit Street in Bloomsbury, a sage-green hand-painted independent shopfront with gilded lettering and an awning softly blurred behind her.",
    description:
      "The model on Lamb's Conduit Street, the pedestrianised Bloomsbury lane, set against a heritage independent shopfront, a sage-green timber fascia with gilded lettering, paned windows and an awning, painted stucco and buff stock brick beyond. A pale painted windowsill replaces the source black panel.",
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-hotel-russell',
    title: 'Bloomsbury, Russell Square and Hotel Russell',
    image: '/Images/debeers/bloomsbury-hotel-russell.webp',
    full: '/debeers-full/bloomsbury-hotel-russell.webp',
    alt: 'The model at the edge of Russell Square gardens, mature plane trees and the ornate terracotta-and-cream Victorian Gothic facade of Hotel Russell softly blurred behind her.',
    description:
      "The model at the edge of Russell Square gardens, the square's signature view behind her: tall plane trees and the ornate terracotta-and-cream Victorian Gothic facade of Hotel Russell with its turreted roofline. She sits on a pale stone rim in place of the source black panel.",
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-gordon-square',
    title: 'Bloomsbury, Gordon Square railings',
    image: '/Images/debeers/bloomsbury-gordon-square.webp',
    full: '/debeers-full/bloomsbury-gordon-square.webp',
    alt: 'The model beside the black iron garden railings of Gordon Square, a buff stock-brick Georgian terrace with a round blue heritage plaque and garden greenery behind her.',
    description:
      'The model beside the wrought-iron garden railings of Gordon Square, heart of the Bloomsbury Group. A buff stock-brick Georgian terrace, a round blue heritage plaque, and garden greenery sit behind her, with a pale stone gatepost replacing the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-georgian-doorway',
    title: 'Bloomsbury, Georgian doorway',
    image: '/Images/debeers/bloomsbury-georgian-doorway.webp',
    full: '/debeers-full/bloomsbury-georgian-doorway.webp',
    alt: 'The model in front of a classic Bloomsbury Georgian doorway, a glossy black six-panel door with fanlight, white Doric pilasters and a Coade-stone doorcase filling the frame behind her.',
    description:
      'The model framed by an elegant Bloomsbury Georgian doorway, a glossy black six-panel door with a fanlight, white Doric pilasters and a Coade-stone doorcase, brass furniture and a house number. A pale stone threshold replaces the source black panel; only the door stays black.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-brunswick-centre',
    title: 'Bloomsbury, Brunswick Centre',
    image: '/Images/debeers/bloomsbury-brunswick-centre.webp',
    full: '/debeers-full/bloomsbury-brunswick-centre.webp',
    alt: 'The model at the Brunswick Centre in Bloomsbury, cream-painted modernist concrete terraces rising in stepped tiers softly blurred behind her.',
    description:
      'The model at the Brunswick Centre, the cream-painted modernist landmark of Bloomsbury, its stepped ziggurat terraces and rhythmic glazing rising behind her. A pale concrete ledge replaces the source black panel, a contemporary counterpoint to the Georgian squares.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-bedford-place',
    title: 'Bloomsbury, Bedford Place terrace',
    image: '/Images/debeers/bloomsbury-bedford-place.webp',
    full: '/debeers-full/bloomsbury-bedford-place.webp',
    alt: 'The model on Bedford Place, a long uniform Georgian terrace receding diagonally behind her, white sash windows, white stucco, black railings and lampposts softly blurred.',
    description:
      'The model on Bedford Place, a long Bloomsbury Georgian terrace receding diagonally behind her: repeating white sash windows, white stucco over buff stock brick, black railings, white doorcases and matching lampposts. A pale stone sill replaces the source black panel.',
    spec: 'WebP · 16:9',
  },
  {
    id: 'bloomsbury-st-georges',
    title: "Bloomsbury, St George's portico",
    image: '/Images/debeers/bloomsbury-st-georges.webp',
    full: '/debeers-full/bloomsbury-st-georges.webp',
    alt: "The model in front of St George's Bloomsbury, Hawksmoor's church, tall fluted Corinthian limestone columns and the stepped pyramid tower rising behind her.",
    description:
      "The model before St George's Bloomsbury, Hawksmoor's church on Bloomsbury Way, its classical portico of fluted Corinthian limestone columns and distinctive stepped pyramid tower rising behind her. A pale stone plinth replaces the source black panel.",
    spec: 'WebP · 16:9',
  },
];
