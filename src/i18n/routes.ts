/**
 * Every English page and its French address.
 *
 * English stays at the root, Chinese lives at /zh + the English path, French
 * at a native slug (lowercase, hyphens, accents stripped: the page keeps its
 * accents, only the URL drops them). A page missing here has no French or
 * Chinese version: `npm run i18n -- check` and the build fail on it, so a new
 * page (a new insight, a new help article) gets its line here in the same
 * change.
 *
 * Never change a French slug once it is live: add a 301 from the old one in
 * vercel.json instead.
 */
const ARTICLES: Record<string, string> = {
  'adobe-ai-mistake': 'l-erreur-d-adobe-sur-l-ia',
  'agency-white-label-question': 'agences-la-question-de-la-marque-blanche',
  'agentic-ai-creative-data': 'ia-agentique-et-donnees-creatives',
  'ai-avatars-brand-content': 'avatars-ia-et-contenu-de-marque',
  'ai-brand-ambassadors-what-you-sign': 'ambassadeurs-ia-ce-que-vous-signez',
  'ai-content-production-beyond-the-prompt': 'production-de-contenu-ia-au-dela-du-prompt',
  'ai-content-quality-argument-over': 'qualite-du-contenu-ia-le-debat-est-clos',
  'ai-search-content-systems': 'recherche-ia-et-systemes-de-contenu',
  'ai-sound-for-video': 'le-son-genere-par-ia-pour-la-video',
  'aigc-adoption-curve': 'la-courbe-d-adoption-de-l-aigc',
  'all-in-cost-of-ai-video': 'le-cout-complet-d-une-video-ia',
  'amazon-tmall-jd-one-product-three-listings': 'amazon-tmall-jd-un-produit-trois-fiches',
  'automation-platform-or-production-partner': 'plateforme-d-automatisation-ou-partenaire-de-production',
  'automotive-content-without-shipping-a-car': 'contenu-automobile-sans-expedier-de-voiture',
  'beauty-content-production-china': 'production-de-contenu-beaute-en-chine',
  'campaign-adaptation-cost-per-market': 'cout-d-adaptation-d-une-campagne-par-marche',
  'china-ai-labeling-rules-production-workflow': 'chine-regles-d-etiquetage-de-l-ia-et-production',
  'china-ecommerce-content-pack': 'le-kit-de-contenu-e-commerce-pour-la-chine',
  'china-or-india-for-creative-production': 'chine-ou-inde-pour-la-production-creative',
  'cloudflare-pay-per-crawl': 'cloudflare-et-le-paiement-a-l-exploration',
  'consumer-electronics-launch-content': 'contenu-de-lancement-en-electronique-grand-public',
  'content-credentials-c2pa-in-production': 'content-credentials-c2pa-en-production',
  'cost-to-localize-a-campaign-for-china': 'cout-de-localisation-d-une-campagne-pour-la-chine',
  'custom-aigc-workflows': 'flux-de-production-aigc-sur-mesure',
  'data-driven-aigc': 'aigc-guidee-par-les-donnees',
  'diffusion-models-explained': 'les-modeles-de-diffusion-expliques',
  'digital-humans-in-china': 'les-humains-numeriques-en-chine',
  'disclosure-audit-trail-per-asset': 'mention-ia-et-tracabilite-par-contenu',
  'douyin-ad-creative-specs-by-format': 'douyin-specifications-publicitaires-par-format',
  'douyin-video-specs-safe-zones': 'douyin-specifications-video-et-zones-de-securite',
  'geo-vs-seo': 'geo-ou-seo',
  'hisense-self-serve-content-platform': 'hisense-une-plateforme-de-contenu-en-libre-service',
  'how-many-variants-a-china-launch-needs': 'combien-de-declinaisons-pour-un-lancement-en-chine',
  'in-house-studio-vs-outsourced-production': 'studio-interne-ou-production-externalisee',
  'jd-image-requirements-vs-tmall': 'exigences-images-jd-face-a-tmall',
  'lip-sync-across-languages': 'synchronisation-labiale-d-une-langue-a-l-autre',
  'luxury-ai-content-systems': 'luxe-et-systemes-de-contenu-ia',
  'meta-tiktok-against-douyin-rednote': 'meta-et-tiktok-face-a-douyin-et-rednote',
  'offshore-creative-production-china': 'production-creative-delocalisee-en-chine',
  'one-shoot-six-platforms-china-variant-matrix': 'un-shooting-six-plateformes-la-matrice-chinoise',
  'procurement-guide-buying-ai-content-production': 'guide-achats-production-de-contenu-ia',
  'product-photography-cost-per-sku': 'cout-de-la-photo-produit-par-reference',
  'production-roster-review-questions': 'questions-pour-evaluer-vos-prestataires-de-production',
  'promptable-3d-content-operations': 'la-3d-pilotee-par-prompt-en-production',
  'questions-to-ask-ai-production-partner': 'questions-a-poser-a-un-partenaire-de-production-ia',
  'real-cost-of-brand-content-2026': 'le-vrai-cout-du-contenu-de-marque-en-2026',
  'rednote-note-cover-specs': 'rednote-specifications-des-couvertures-de-notes',
  'retouch-at-volume-qa-pipeline': 'retouche-en-volume-et-controle-qualite',
  'running-a-tmall-flagship-content': 'faire-vivre-le-contenu-d-un-flagship-tmall',
  'shoot-it-or-generate-it': 'shooter-ou-generer',
  'singles-day-618-production-calendar': 'singles-day-et-618-le-calendrier-de-production',
  'subscription-or-managed-production': 'abonnement-ou-production-geree',
  'the-2026-model-roster': 'les-modeles-ia-de-2026',
  'three-years-of-genai-ecommerce': 'trois-ans-d-ia-generative-dans-l-e-commerce',
  'tmall-flagship-store-decoration-specs': 'tmall-specifications-de-decoration-de-boutique',
  'tmall-product-image-requirements': 'tmall-exigences-pour-les-images-produit',
  'tmall-white-background-image-rules': 'tmall-regles-des-images-sur-fond-blanc',
  'training-a-brand-model-that-stays-on-brand': 'entrainer-un-modele-fidele-a-la-marque',
  'transcreation-as-a-production-line': 'la-transcreation-comme-chaine-de-production',
  'turnaround-days-not-weeks': 'des-delais-en-jours-pas-en-semaines',
  'veo-3-studio-review': 'veo-3-le-test-du-studio',
  'wechat-specs-articles-channels-mini-program': 'wechat-specifications-articles-channels-mini-programmes',
  'weibo-image-video-specs': 'weibo-specifications-image-et-video',
  'what-a-48-hour-binding-proposal-contains': 'ce-que-contient-une-proposition-ferme-en-48-heures',
  'what-a-finished-brand-asset-costs': 'ce-que-coute-un-contenu-de-marque-fini',
  'what-aigc-production-actually-is': 'ce-qu-est-vraiment-la-production-aigc',
  'where-language-ai-delivers': 'la-ou-l-ia-linguistique-tient-ses-promesses',
  'without-creatives-aigc-is-nothing': 'sans-creatifs-l-aigc-n-est-rien',
  'your-ai-content-is-about-to-introduce-itself': 'votre-contenu-ia-va-bientot-se-presenter',
};

const HOWTOS: Record<string, string> = {
  'ai-search-content-systems-win': 'gagner-la-recherche-ia-avec-un-systeme-de-contenu',
  'nano-banana-pro-photo-editing': 'retouche-photo-avec-nano-banana-pro',
  'nano-banana-prompting-guide': 'guide-des-prompts-nano-banana',
  'notebooklm-decks-and-infographics': 'presentations-et-infographies-avec-notebooklm',
};

const HELP: Record<string, string> = {
  'account-and-sign-in': 'compte-et-connexion',
  'assets-library': 'bibliotheque-de-contenus',
  'balance-and-payments': 'solde-et-paiements',
  'client-space': 'espace-client',
  'create-a-video': 'creer-une-video',
  'create-an-image': 'creer-une-image',
  explore: 'explorer',
  facebook: 'facebook',
  'getting-started': 'premiers-pas',
  history: 'historique',
  instagram: 'instagram',
  linkedin: 'linkedin',
  partners: 'partenaires',
  'shorts-autopilot': 'pilote-automatique-de-shorts',
  skills: 'competences',
  tiktok: 'tiktok',
  troubleshooting: 'depannage',
  validation: 'validation',
  x: 'x',
  'your-team': 'votre-equipe',
  youtube: 'youtube',
};

const DESIGN: Record<string, string> = {
  'ad-creative': 'creations-publicitaires',
  'brand-identity': 'identite-de-marque',
  'concept-creation': 'creation-de-concepts',
  'creative-strategy': 'strategie-creative',
  'ebook-digital-reports': 'livres-blancs-et-rapports-numeriques',
  ecommerce: 'e-commerce',
  'email-design': 'design-d-e-mails',
  'illustration-design': 'illustration',
  'marketing-strategy': 'strategie-marketing',
  'motion-design': 'motion-design',
  'packaging-merch-design': 'packaging-et-objets-de-marque',
  'pitch-deck': 'pitch-deck',
  'presentation-design': 'design-de-presentations',
  'press-release': 'communiques-de-presse',
  'print-design': 'design-print',
  'short-video': 'videos-courtes',
  'social-media': 'reseaux-sociaux',
  storyboard: 'storyboard',
  'video-production': 'production-video',
  'website-design': 'design-de-sites-web',
};

const PLATFORMS: Record<string, string> = {
  amazon: 'amazon',
  'brand-website': 'site-de-marque',
  douyin: 'douyin',
  'ecommerce-website': 'site-e-commerce',
  jd: 'jd',
  linkedin: 'linkedin',
  meta: 'meta',
  rednote: 'rednote',
  shopify: 'shopify',
  tiktok: 'tiktok',
  tmall: 'tmall',
  wechat: 'wechat',
  weibo: 'weibo',
};

/** Case studies and team pages keep their slug: a brand or a person's name. */
const WORK = [
  'iflytek-anypin', 'noyz-mylk-de-parfum', 'mexicash', 'elizabeth-gage', 'hisense',
  'diy-european-retailer', 'camper', 'age20', 'global-fashion-brand', 'shiseido-rq-pyology',
  '1834-gin', 'linfuseur', 'premium-suv',
];
const TEAM = [
  'cyril-drouin', 'echo-peng', 'liyan-ye', 'marcus-sullivan', 'lea-moreau', 'james-whitmore',
  'diego-martinez', 'nina-hoffmann', 'erik-lindstrom', 'wei-lin-tan', 'sofia-andersen',
  'jason-liu', 'aisha-rahman', 'sophie-brennan', 'maya-patel', 'nara-suwan', 'olivier-dubois',
  'isabella-rossi', 'finn-korhonen',
];

export const FR_PATHS: Record<string, string> = {
  '/': '/fr',
  '/about': '/fr/a-propos',
  '/about/team': '/fr/a-propos/equipe',
  ...Object.fromEntries(TEAM.map((s) => [`/about/team/${s}`, `/fr/a-propos/equipe/${s}`])),
  '/app': '/fr/application',
  '/app/create': '/fr/application/creer',
  '/app/engines': '/fr/application/moteurs',
  '/app/image-tools': '/fr/application/outils-image',
  '/app/library': '/fr/application/bibliotheque',
  '/app/publish': '/fr/application/publier',
  '/app/review': '/fr/application/validation',
  '/app/video-tools': '/fr/application/outils-video',
  '/contact': '/fr/contact',
  '/cookies': '/fr/cookies',
  '/debeers': '/fr/debeers',
  '/help': '/fr/aide',
  ...Object.fromEntries(Object.entries(HELP).map(([en, fr]) => [`/help/${en}`, `/fr/aide/${fr}`])),
  '/llm-info': '/fr/informations-pour-les-llm',
  '/partners': '/fr/partenaires',
  '/pricing': '/fr/tarifs',
  '/pricing/calculator': '/fr/tarifs/calculateur',
  '/pricing/calculator/settings': '/fr/tarifs/calculateur/reglages',
  '/privacy': '/fr/confidentialite',
  '/resources': '/fr/ressources',
  '/resources/copyright-and-ai': '/fr/ressources/droit-d-auteur-et-ia',
  '/resources/glossary': '/fr/ressources/glossaire',
  '/resources/how-to': '/fr/ressources/guides-pratiques',
  ...Object.fromEntries(
    Object.entries(HOWTOS).map(([en, fr]) => [`/resources/how-to/${en}`, `/fr/ressources/guides-pratiques/${fr}`]),
  ),
  '/resources/insights': '/fr/ressources/analyses',
  ...Object.fromEntries(
    Object.entries(ARTICLES).map(([en, fr]) => [`/resources/insights/${en}`, `/fr/ressources/analyses/${fr}`]),
  ),
  '/resources/production-cost': '/fr/ressources/cout-de-production',
  ...Object.fromEntries(
    Object.entries(DESIGN).map(([en, fr]) => [`/services/design/${en}`, `/fr/services/design/${fr}`]),
  ),
  '/solutions': '/fr/solutions',
  '/solutions/agencies': '/fr/solutions/agences',
  '/solutions/ai-production/content': '/fr/solutions/production-ia/contenu',
  '/solutions/ai-production/image': '/fr/solutions/production-ia/image',
  '/solutions/ai-production/video': '/fr/solutions/production-ia/video',
  '/solutions/brands': '/fr/solutions/marques',
  '/solutions/consulting': '/fr/solutions/conseil',
  '/solutions/manufacturers': '/fr/solutions/fabricants',
  ...Object.fromEntries(
    Object.entries(PLATFORMS).map(([en, fr]) => [`/solutions/platforms/${en}`, `/fr/solutions/plateformes/${fr}`]),
  ),
  '/solutions/retailers': '/fr/solutions/distributeurs',
  '/solutions/training': '/fr/solutions/formation',
  '/sonepar': '/fr/sonepar',
  '/studio': '/fr/studio',
  '/studio/ai-excellence': '/fr/studio/excellence-ia',
  '/studio/with-the-app': '/fr/studio/avec-l-application',
  '/terms': '/fr/conditions',
  '/thank-you': '/fr/merci',
  '/work': '/fr/realisations',
  ...Object.fromEntries(WORK.map((s) => [`/work/${s}`, `/fr/realisations/${s}`])),
};

/**
 * Pages rendered on demand (`prerender = false`). Their French and Chinese
 * routes are the small files under src/pages/fr and src/pages/zh, because the
 * catch-all route that serves every other translation is prerendered.
 */
export const ON_DEMAND = new Set(['/debeers', '/sonepar', '/pricing/calculator', '/pricing/calculator/settings']);
