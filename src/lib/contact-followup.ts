/**
 * The follow-up email a person receives one hour after sending the contact
 * form: the app first (four features, one screenshot each, a sign-up button),
 * then the studio's quotation tool and its password, then an invitation to
 * reply with a few times for a call.
 *
 * Written in the language of the form that was sent (English, French or
 * Chinese). The copy of each language lives here, typed per locale, so a
 * missing translation fails `astro check` instead of reaching a French or
 * Chinese reader in English. Screenshots are JPG (Outlook shows no WebP),
 * built from the app captures by `scripts/build-email-shots.mjs`, one per
 * language.
 */
import { pathIn, type Locale } from '../i18n/index';
import { APP_SIGNUP } from './links';
import { calculatorPassword } from './pricing-gate';

const SITE = 'https://www.hubstudio.ai';

/** One app feature: a heading, a line of copy and its screenshot. */
type Feature = { shot: string; width: number; height: number; title: string; body: string; alt: string };

type Copy = {
  subject: string;
  greeting: (name: string) => string;
  thanks: string;
  intro: string;
  features: Feature[];
  cta: string;
  studio: string;
  password: string;
  call: string;
  signOff: string;
  team: string;
};

/** Screenshot files in public/Images/email/ and their pixel size (shown at half width). */
const SHOTS = {
  generate: { shot: 'generate', width: 1152, height: 518 },
  edit: { shot: 'edit', width: 1200, height: 750 },
  campaigns: { shot: 'campaigns', width: 1200, height: 443 },
  publish: { shot: 'publish', width: 1144, height: 874 },
};

const COPY: Record<Locale, Copy> = {
  en: {
    subject: 'Thanks for reaching out to hubStudio',
    greeting: (name) => `Hi ${name},`,
    thanks: 'Thank you for getting in touch. We’re glad you found us.',
    intro:
      'The best way to see what we can build together is to get your hands on it. Open an account on our app (it costs nothing to create one), top up your prepaid balance, and you’ll be generating your first images and videos within minutes. Here’s what’s waiting for you inside:',
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
    cta: 'Create your account',
    studio:
      'Looking for studio production as well (ongoing content, editing, campaigns)? Our quotation tool gives you a clear starting point:',
    password: 'Password:',
    call: 'We’d love to hear more about your project. Just reply with a few times that suit you over the coming days, and we’ll send over an invite.',
    signOff: 'Speak soon,',
    team: 'The hubStudio team',
  },
  fr: {
    subject: 'Merci d’avoir contacté hubStudio',
    greeting: (name) => `Bonjour ${name},`,
    thanks: 'Merci pour votre message. Nous sommes ravis que vous nous ayez trouvés.',
    intro:
      'Pour voir ce que nous pouvons construire ensemble, le plus simple reste de mettre la main à la pâte. Ouvrez un compte sur notre application (l’inscription ne coûte rien), rechargez votre solde prépayé, et vos premières images et vidéos sortiront en quelques minutes. Voici ce qui vous attend :',
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
    cta: 'Créer votre compte',
    studio:
      'Vous cherchez aussi une production confiée à notre studio (contenus réguliers, montage, campagnes) ? Notre outil de devis vous donne un premier repère :',
    password: 'Mot de passe :',
    call: 'Nous aimerions en savoir plus sur votre projet. Répondez simplement à ce message en nous proposant quelques créneaux dans les prochains jours, et nous vous enverrons une invitation.',
    signOff: 'À très vite,',
    team: 'L’équipe hubStudio',
  },
  zh: {
    subject: '感谢您联系 hubStudio',
    greeting: (name) => `${name}，您好：`,
    thanks: '感谢您与我们联系，很高兴您找到了我们。',
    intro:
      '想知道我们能一起做出什么，最好的办法是亲自上手。在我们的应用上创建账户（不收取任何费用），为预付余额充值，几分钟内就能生成您的第一批图片和视频。应用里为您准备了这些功能：',
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
    cta: '创建账户',
    studio: '如果您还需要我们的工作室为您制作内容（持续的内容产出、剪辑、营销活动），可以先用报价工具了解大致方案：',
    password: '访问密码：',
    call: '我们很想进一步了解您的项目。请直接回复本邮件，告诉我们未来几天您方便的几个时间段，我们会发送会议邀请。',
    signOff: '期待与您交流！',
    team: 'hubStudio 团队',
  },
};

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

const P = 'margin:0 0 16px;font-size:16px;line-height:1.6;color:#0a0a14';

/** Subject, HTML and plain-text versions of the follow-up, for one person. */
export function contactFollowUp(locale: Locale, firstName: string) {
  const c = COPY[locale];
  const calculator = SITE + (pathIn('/pricing/calculator', locale) ?? '/pricing/calculator');
  const password = calculatorPassword();
  const lang = locale === 'zh' ? 'zh-CN' : locale;
  const font =
    locale === 'zh'
      ? "'PingFang SC','Microsoft YaHei','Hiragino Sans GB',Arial,sans-serif"
      : 'Inter,Arial,Helvetica,sans-serif';

  const features = c.features
    .map(
      (f) => `
        <tr><td style="padding:16px 0 0">
          <h2 style="margin:0 0 6px;font-size:18px;line-height:1.35;color:#0a0a14">${esc(f.title)}</h2>
          <p style="${P};margin-bottom:12px">${esc(f.body)}</p>
          <img src="${shotUrl(f.shot, locale)}" width="600" height="${Math.round((f.height * 600) / f.width)}" alt="${esc(f.alt)}"
            style="display:block;width:100%;max-width:600px;height:auto;border:1px solid #e4e1db;border-radius:8px" />
        </td></tr>`,
    )
    .join('');

  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width,initial-scale=1" /><title>${esc(c.subject)}</title></head>
<body style="margin:0;padding:0;background:#f4f2ee">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2ee">
    <tr><td align="center" style="padding:24px 12px">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;font-family:${font}">
        <tr><td style="padding:0 0 8px">
          <p style="${P}">${esc(c.greeting(firstName))}</p>
          <p style="${P}">${esc(c.thanks)}</p>
          <p style="${P};margin-bottom:0">${esc(c.intro)}</p>
        </td></tr>
        ${features}
        <tr><td align="left" style="padding:28px 0 28px">
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td style="background:#e94e1b;border-radius:999px">
              <a href="${APP_SIGNUP}" style="display:inline-block;padding:14px 28px;font-size:16px;font-weight:600;color:#ffffff;text-decoration:none">${esc(c.cta)}</a>
            </td>
          </tr></table>
        </td></tr>
        <tr><td>
          <p style="${P};margin-bottom:6px">${esc(c.studio)}</p>
          <p style="${P};margin-bottom:4px"><a href="${calculator}" style="color:#d13f12">${calculator}</a></p>
          <p style="${P}">${esc(c.password)} <strong>${esc(password)}</strong></p>
          <p style="${P}">${esc(c.call)}</p>
          <p style="${P};margin-bottom:0">${esc(c.signOff)}<br />${esc(c.team)}</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  const text = [
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
  ].join('\n');

  return { subject: c.subject, html, text };
}
