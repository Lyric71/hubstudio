/**
 * The follow-up email a person receives one hour after sending the contact
 * form: the app first (four features, one screenshot each, a sign-up button),
 * then the studio's quotation tool and its password, then an invitation to
 * reply with a few times for a call.
 *
 * Written in the language of the form that was sent (English, French or
 * Chinese). The copy of each language lives here, typed per locale, so a
 * missing translation fails `astro check` instead of reaching a French or
 * Chinese reader in English. Pictures (JPG screenshots, since Outlook shows
 * no WebP, and a PNG logo, since no mail client shows SVG) are built by
 * `scripts/build-email-shots.mjs`, the screenshots once per language.
 *
 * The markup is built for the mail clients people actually read in, Outlook
 * on Windows (Word's renderer) included: tables for layout, every style
 * inline, widths in attributes, VML buttons for Outlook, fluid widths so a
 * phone needs no media query, a hidden preview line, and a light color scheme
 * asked for explicitly. Outlook drops the rounded corners and nothing else.
 */
import { pathIn, type Locale } from '../i18n/index';
import { APP_SIGNUP } from './links';
import { calculatorPassword } from './pricing-gate';

const SITE = 'https://www.hubstudio.ai';

/** One app feature: a heading, a line of copy and its screenshot. */
type Feature = { shot: string; width: number; height: number; title: string; body: string; alt: string };

type Copy = {
  subject: string;
  /** The line a mail client shows next to the subject, before the email is opened. */
  preview: string;
  /** Greeting of the plain-text version. */
  greeting: (name: string) => string;
  /** Greeting of the HTML heading, around the name: [before, after]. */
  hello: [string, string];
  thanks: string;
  intro: string;
  cta: string;
  appLabel: string;
  features: Feature[];
  studioLabel: string;
  studio: string;
  studioCta: string;
  password: string;
  call: string;
  signOff: string;
  team: string;
  why: string;
};

/** Screenshot files in public/Images/email/ and their pixel size. */
const SHOTS = {
  generate: { shot: 'generate', width: 1152, height: 518 },
  edit: { shot: 'edit', width: 1200, height: 750 },
  campaigns: { shot: 'campaigns', width: 1200, height: 443 },
  publish: { shot: 'publish', width: 1144, height: 874 },
};

const COPY: Record<Locale, Copy> = {
  en: {
    subject: 'Thanks for reaching out to hubStudio',
    preview: 'A look inside the hubStudio app, and how to set up a call with us.',
    greeting: (name) => `Hi ${name},`,
    hello: ['Hi ', ','],
    thanks: 'Thank you for getting in touch. We’re glad you found us.',
    intro:
      'The best way to see what we can build together is to get your hands on it. Open an account on our app (it costs nothing to create one), top up your prepaid balance, and you’ll be generating your first images and videos within minutes. Here’s what’s waiting for you inside:',
    cta: 'Create your account',
    appLabel: 'Inside the app',
    features: [
      {
        ...SHOTS.generate,
        title: 'Create images and videos with AI',
        body: 'Turn an idea into finished visuals in a few clicks, from product shots to short-form video.',
        alt: 'hubStudio Explore page: the image and video engines, with filters by kind, maker and use',
      },
      {
        ...SHOTS.edit,
        title: 'Refine every frame',
        body: 'Full image and video editors let you adjust, retouch and cut until every detail is right.',
        alt: 'hubStudio Image editor framing a product shot for an Instagram feed post',
      },
      {
        ...SHOTS.campaigns,
        title: 'Run your campaigns in one place',
        body: 'Gather the renders, edits, posts and brief of each launch under one name, so every project stays on track.',
        alt: 'hubStudio Campaigns page with the card of a product launch campaign',
      },
      {
        ...SHOTS.publish,
        title: 'Publish straight to your social channels',
        body: 'When the content is ready, send it live without leaving the app.',
        alt: 'Publishing an Instagram post from hubStudio, next to a preview of the post',
      },
    ],
    studioLabel: 'Studio production',
    studio:
      'Looking for studio production as well (ongoing content, editing, campaigns)? Our quotation tool gives you a clear starting point:',
    studioCta: 'Open the quotation tool',
    password: 'Password:',
    call: 'We’d love to hear more about your project. Just reply with a few times that suit you over the coming days, and we’ll send over an invite.',
    signOff: 'Speak soon,',
    team: 'The hubStudio team',
    why: 'You’re receiving this email because you contacted us through hubstudio.ai.',
  },
  fr: {
    subject: 'Merci d’avoir contacté hubStudio',
    preview: 'Un aperçu de l’application hubStudio, et comment convenir d’un rendez-vous avec nous.',
    greeting: (name) => `Bonjour ${name},`,
    hello: ['Bonjour ', ','],
    thanks: 'Merci pour votre message. Nous sommes ravis que vous nous ayez trouvés.',
    intro:
      'Pour voir ce que nous pouvons construire ensemble, le plus simple reste de mettre la main à la pâte. Ouvrez un compte sur notre application (l’inscription ne coûte rien), rechargez votre solde prépayé, et vos premières images et vidéos sortiront en quelques minutes. Voici ce qui vous attend :',
    cta: 'Créer votre compte',
    appLabel: 'Dans l’application',
    features: [
      {
        ...SHOTS.generate,
        title: 'Créez images et vidéos avec l’IA',
        body: 'Une idée devient un visuel fini en quelques clics, du packshot produit à la vidéo courte.',
        alt: 'La page Explorer de hubStudio : les moteurs d’image et de vidéo, filtrés par type, par éditeur et par usage',
      },
      {
        ...SHOTS.edit,
        title: 'Peaufinez chaque image',
        body: 'L’Éditeur d’images et l’Éditeur vidéo vous laissent ajuster, retoucher et couper jusqu’à ce que chaque détail tombe juste.',
        alt: 'L’Éditeur d’images de hubStudio cadre un packshot pour une publication Instagram',
      },
      {
        ...SHOTS.campaigns,
        title: 'Pilotez vos campagnes au même endroit',
        body: 'Rendus, montages, publications et brief de chaque lancement se retrouvent sous un même nom : chaque projet garde le cap.',
        alt: 'La page Campagnes de hubStudio, avec la fiche d’une campagne de lancement produit',
      },
      {
        ...SHOTS.publish,
        title: 'Publiez directement sur vos réseaux sociaux',
        body: 'Une fois le contenu prêt, mettez-le en ligne sans quitter l’application.',
        alt: 'Publication d’un post Instagram depuis hubStudio, à côté de son aperçu',
      },
    ],
    studioLabel: 'Côté studio',
    studio:
      'Vous cherchez aussi une production confiée à notre studio (contenus réguliers, montage, campagnes) ? Notre outil de devis vous donne un premier repère :',
    studioCta: 'Ouvrir l’outil de devis',
    password: 'Mot de passe :',
    call: 'Nous aimerions en savoir plus sur votre projet. Répondez simplement à ce message en nous proposant quelques créneaux dans les prochains jours, et nous vous enverrons une invitation.',
    signOff: 'À très vite,',
    team: 'L’équipe hubStudio',
    why: 'Vous recevez cet e-mail parce que vous nous avez écrit via hubstudio.ai.',
  },
  zh: {
    subject: '感谢您联系 hubStudio',
    preview: '带您快速了解 hubStudio 应用，并约个时间和我们聊聊。',
    greeting: (name) => `${name}，您好：`,
    hello: ['', '，您好'],
    thanks: '感谢您与我们联系，很高兴您找到了我们。',
    intro:
      '想知道我们能一起做出什么，最好的办法是亲自上手。在我们的应用上创建账户（不收取任何费用），为预付余额充值，几分钟内就能生成您的第一批图片和视频。应用里为您准备了这些功能：',
    cta: '创建账户',
    appLabel: '应用内功能',
    features: [
      {
        ...SHOTS.generate,
        title: '用 AI 生成图片和视频',
        body: '从产品图到短视频，点几下就能把创意变成成品。',
        alt: 'hubStudio 的“探索”页面：图片与视频引擎一览，可按类型、厂商和用途筛选',
      },
      {
        ...SHOTS.edit,
        title: '精修每一帧',
        body: '图片编辑器和视频编辑器功能完整，调色、修图、剪辑，直到每个细节都恰到好处。',
        alt: 'hubStudio 图片编辑器正在为 Instagram 帖子裁切产品图',
      },
      {
        ...SHOTS.campaigns,
        title: '营销活动集中管理',
        body: '每次新品发布的生成作品、剪辑成片、帖子和内容简报都归在同一个名称下，项目进度一目了然。',
        alt: 'hubStudio 营销活动页面，展示一次新品发布的营销活动卡片',
      },
      {
        ...SHOTS.publish,
        title: '一键发布到社交平台',
        body: '内容就绪后，无需离开应用即可发布上线。',
        alt: '在 hubStudio 中发布 Instagram 帖子，旁边是帖子预览',
      },
    ],
    studioLabel: '工作室制作',
    studio: '如果您还需要我们的工作室为您制作内容（持续的内容产出、剪辑、营销活动），可以先用报价工具了解大致方案：',
    studioCta: '打开报价工具',
    password: '访问密码：',
    call: '我们很想进一步了解您的项目。请直接回复本邮件，告诉我们未来几天您方便的几个时间段，我们会发送会议邀请。',
    signOff: '期待与您交流！',
    team: 'hubStudio 团队',
    why: '您收到这封邮件，是因为您通过 hubstudio.ai 联系了我们。',
  },
};

/* ---------------- palette and type (the site's tokens, as email-safe hex) ---------------- */

const C = {
  page: '#f4f2ee',
  card: '#ffffff',
  navy: '#0e1f4e',
  navySoft: '#c9d0e6',
  ink: '#0a0a14',
  muted: '#55555f',
  faint: '#8a8a93',
  line: '#e4e1db',
  tint: '#f4f2ee',
  orange: '#e94e1b',
  cta: '#d13f12',
};

/** Width of the email, and of the content inside the card's side padding. */
const WIDTH = 600;
const PAD = 40;
const INNER = WIDTH - PAD * 2;
/** Screenshots sit in a tinted frame with this much padding. */
const FRAME = 8;
const SHOT_WIDTH = INNER - FRAME * 2;

/** Escape a value before it lands in the email's HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Address of a screenshot in the reader's language. */
function shotUrl(shot: string, locale: Locale): string {
  return `${SITE}/Images/email/${shot}${locale === 'en' ? '' : `.${locale}`}.jpg`;
}

/**
 * A button every client draws: a VML rounded rectangle for Outlook on
 * Windows, a padded link for everyone else. The label must fit `width` px.
 */
function button(href: string, label: string, bg: string, font: string, width = 260): string {
  const text = esc(label);
  return `<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:50px;v-text-anchor:middle;width:${width}px;" arcsize="50%" stroke="f" fillcolor="${bg}">
<w:anchorlock/><center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">${text}</center>
</v:roundrect>
<![endif]--><!--[if !mso]><!-- --><a href="${href}" target="_blank" style="display:inline-block;background:${bg};color:#ffffff;font-family:${font};font-size:16px;font-weight:700;line-height:50px;text-align:center;text-decoration:none;padding:0 32px;border-radius:999px;mso-hide:all">${text}</a><!--<![endif]-->`;
}

/** Small capital label above a section. */
function label(text: string, font: string): string {
  return `<p style="margin:0 0 14px;font-family:${font};font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.orange}">${esc(text)}</p>`;
}

/**
 * A first name as a greeting should print it: "suraj" or "SURAJ" becomes
 * "Suraj". A name typed in mixed case ("McDonald", "Anne-Sophie") is kept as
 * typed; scripts without case (Chinese) pass through unchanged.
 */
function tidyName(name: string): string {
  if (name !== name.toLowerCase() && name !== name.toUpperCase()) return name;
  return name
    .split(/([\s-]+)/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

/** Subject, HTML and plain-text versions of the follow-up, for one person. */
export function contactFollowUp(locale: Locale, typedName: string) {
  const c = COPY[locale];
  const firstName = tidyName(typedName);
  const home = SITE + (pathIn('/', locale) ?? '/');
  const calculator = SITE + (pathIn('/pricing/calculator', locale) ?? '/pricing/calculator');
  const password = calculatorPassword();
  const lang = locale === 'zh' ? 'zh-CN' : locale;
  const font =
    locale === 'zh'
      ? "'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif"
      : "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  /** Outlook on Windows ignores a font stack it cannot resolve and falls back to Times. */
  const msoFont = locale === 'zh' ? "'Microsoft YaHei',Arial,sans-serif" : 'Arial,sans-serif';
  const text = (size: number, lineHeight: number, color: string) =>
    `font-family:${font};font-size:${size}px;line-height:${lineHeight}px;color:${color};mso-line-height-rule:exactly`;

  const features = c.features
    .map((f, i) => {
      const height = Math.round((f.height * SHOT_WIDTH) / f.width);
      return `
          <tr><td class="px" style="padding:${i === 0 ? 0 : 36}px ${PAD}px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="background:${C.tint};border-radius:14px;padding:${FRAME}px">
                <img src="${shotUrl(f.shot, locale)}" width="${SHOT_WIDTH}" height="${height}" alt="${esc(f.alt)}" border="0"
                  style="display:block;width:100%;max-width:${SHOT_WIDTH}px;height:auto;border:0;border-radius:8px;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;${text(13, 18, C.muted)}" />
              </td></tr>
            </table>
            <h2 style="margin:20px 0 6px;${text(20, 27, C.ink)};font-weight:700">${esc(f.title)}</h2>
            <p style="margin:0;${text(16, 25, C.muted)}">${esc(f.body)}</p>
          </td></tr>`;
    })
    .join('');

  // Padding after the preview line keeps the body's first words out of the inbox preview.
  const previewPad = '&#847;&zwnj;&nbsp;'.repeat(60);

  const html = `<!doctype html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="x-apple-disable-message-reformatting" />
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
<meta name="color-scheme" content="light" />
<meta name="supported-color-schemes" content="light" />
<title>${esc(c.subject)}</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<style>body,table,td,p,a,h1,h2,span{font-family:${msoFont} !important;}</style>
<![endif]-->
<style>
  :root { color-scheme: light; supported-color-schemes: light; }
  body { margin:0 !important; padding:0 !important; width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
  img { -ms-interpolation-mode:bicubic; }
  a[x-apple-data-detectors] { color:inherit !important; text-decoration:none !important; }
  u + #body a { color:inherit; text-decoration:none; }
  @media screen and (max-width:620px) {
    .px { padding-left:22px !important; padding-right:22px !important; }
    .hero { font-size:30px !important; line-height:36px !important; }
    .gutter { padding-left:10px !important; padding-right:10px !important; }
  }
</style>
</head>
<body id="body" style="margin:0;padding:0;background:${C.page};word-spacing:normal">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:${C.page}">${esc(c.preview)}${previewPad}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page}">
  <tr><td align="center" class="gutter" style="padding:32px 16px">
    <!--[if mso]><table role="presentation" width="${WIDTH}" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
    <table role="presentation" width="${WIDTH}" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:${WIDTH}px">

      <!-- Header: logo, greeting -->
      <tr><td class="px" style="background:${C.navy};border-radius:18px 18px 0 0;padding:32px ${PAD}px 40px">
        <a href="${home}" target="_blank" style="text-decoration:none"><img src="${SITE}/Images/email/logo.png" width="126" height="36" alt="hubStudio" border="0" style="display:block;width:126px;height:36px;border:0;outline:none;${text(18, 36, '#ffffff')};font-weight:700" /></a>
        <h1 class="hero" style="margin:40px 0 12px;${text(36, 42, '#ffffff')};font-weight:700">${esc(c.hello[0])}<span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-weight:400;color:${C.orange}">${esc(firstName)}</span>${esc(c.hello[1])}</h1>
        <p style="margin:0;${text(17, 27, C.navySoft)}">${esc(c.thanks)}</p>
      </td></tr>

      <!-- Body card -->
      <tr><td style="background:${C.card};border-radius:0 0 18px 18px">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr><td class="px" style="padding:36px ${PAD}px 0">
            <p style="margin:0 0 28px;${text(17, 27, C.ink)}">${esc(c.intro)}</p>
            ${button(APP_SIGNUP, c.cta, C.cta, font)}
          </td></tr>

          <tr><td class="px" style="padding:44px ${PAD}px 0">
            <div style="border-top:1px solid ${C.line};font-size:0;line-height:0">&nbsp;</div>
          </td></tr>
          <tr><td class="px" style="padding:36px ${PAD}px 6px">${label(c.appLabel, font)}</td></tr>
          ${features}

          <tr><td class="px" style="padding:36px ${PAD}px 0">
            ${button(APP_SIGNUP, c.cta, C.cta, font)}
          </td></tr>

          <!-- Studio -->
          <tr><td class="px" style="padding:44px ${PAD}px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="background:${C.tint};border-radius:14px;padding:28px 28px 30px">
                ${label(c.studioLabel, font)}
                <p style="margin:0 0 20px;${text(16, 25, C.ink)}">${esc(c.studio)}</p>
                ${button(calculator, c.studioCta, C.navy, font, 280)}
                <p style="margin:18px 0 0;${text(15, 22, C.muted)}">${esc(c.password)}&nbsp;<span style="font-family:Consolas,Menlo,'Courier New',monospace;font-size:15px;font-weight:700;color:${C.ink};background:#ffffff;border:1px solid ${C.line};border-radius:6px;padding:2px 8px">${esc(password)}</span></p>
              </td></tr>
            </table>
          </td></tr>

          <!-- Closing -->
          <tr><td class="px" style="padding:36px ${PAD}px 40px">
            <p style="margin:0 0 20px;${text(17, 27, C.ink)}">${esc(c.call)}</p>
            <p style="margin:0;${text(17, 27, C.ink)}">${esc(c.signOff)}<br /><strong>${esc(c.team)}</strong></p>
          </td></tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td class="px" align="center" style="padding:24px ${PAD}px 8px">
        <p style="margin:0 0 6px;${text(13, 19, C.faint)}">${esc(c.why)}</p>
        <p style="margin:0;${text(13, 19, C.faint)}"><a href="${home}" target="_blank" style="color:${C.muted};text-decoration:underline">www.hubstudio.ai</a></p>
      </td></tr>

    </table>
    <!--[if mso]></td></tr></table><![endif]-->
  </td></tr>
</table>
</body>
</html>`;

  const plain = [
    c.greeting(firstName),
    '',
    c.thanks,
    '',
    c.intro,
    '',
    ...c.features.flatMap((f) => [f.title, f.body, '']),
    c.cta,
    APP_SIGNUP,
    '',
    c.studio,
    calculator,
    `${c.password} ${password}`,
    '',
    c.call,
    '',
    c.signOff,
    c.team,
    '',
    '--',
    c.why,
    home,
  ].join('\n');

  return { subject: c.subject, html, text: plain };
}
