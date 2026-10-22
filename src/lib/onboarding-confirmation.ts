/**
 * The confirmation email sent right away when someone submits the onboarding
 * booking form (`/services/onboarding/book`, handled by `POST /api/onboarding`).
 *
 * Gives the sender the payment link in the currency of the page they used
 * (`ONBOARDING_PAY[locale]`), a summary of what they booked (company, preferred
 * date, session language), and what happens next. The copy never names the
 * payment provider.
 *
 * Built with the same email-safe layout as `src/lib/contact-followup.ts`
 * (tables, inline styles, VML rounded button for Outlook on Windows, explicit
 * light color scheme, and a plain-text alternative).
 */
import { pathIn, type Locale } from '../i18n/index';
import { ONBOARDING_PAY } from './onboarding';

const SITE = 'https://www.hubstudio.ai';

export type SessionLanguageCode = 'en' | 'fr' | 'zh';

export type OnboardingConfirmationInput = {
  firstName: string;
  company: string;
  date: string;
  sessionLanguage: SessionLanguageCode;
};

type Step = { when: string; text: string };

type Copy = {
  subject: string;
  preview: string;
  greeting: (name: string) => string;
  hello: [string, string];
  thanks: string;
  intro: string;
  payCta: string;
  alreadyPaid: string;
  summaryLabel: string;
  companyRow: string;
  dateRow: string;
  languageRow: string;
  includedRow: string;
  includedValue: string;
  languageNames: Record<SessionLanguageCode, string>;
  nextLabel: string;
  steps: Step[];
  questions: string;
  signOff: string;
  team: string;
  why: string;
};

const COPY: Record<Locale, Copy> = {
  en: {
    subject: 'Your hubStudio onboarding booking — payment link inside',
    preview: 'Complete your booking by paying the 500 USD (250 USD goes into your team’s wallet).',
    greeting: (name) => `Hi ${name},`,
    hello: ['Hi ', ','],
    thanks: 'Your onboarding request is in. One step left to lock in your sessions.',
    intro:
      'To complete your booking, pay the 500 USD below by card or Alipay. Half of it (250 USD) goes straight into your team’s wallet in hubStudio, to spend on images and video.',
    payCta: 'Pay 500 USD',
    alreadyPaid:
      'Already paid on the confirmation page? You’re all set—no need to use the button above.',
    summaryLabel: 'Your booking',
    companyRow: 'Company',
    dateRow: 'Preferred date',
    languageRow: 'Sessions in',
    includedRow: 'Included',
    includedValue: 'At least 4 hours live + 3 months of free support',
    languageNames: {
      en: 'English',
      fr: 'French',
      zh: 'Chinese',
    },
    nextLabel: 'What happens next',
    steps: [
      {
        when: 'Within one business day',
        text: 'Once payment is in, we email you to confirm the first session and its hours, based on the date you picked.',
      },
      {
        when: 'Before the first session',
        text: 'Have the list of people to invite ready, and your client list if you make work for clients.',
      },
      {
        when: 'At least four hours, live',
        text: 'We set up your team with you—people and rights, limits, clients, connections, skills, and Validation—and train everyone who will use it.',
      },
    ],
    questions:
      'Need to adjust the date or have a question before paying? Just reply to this email.',
    signOff: 'Speak soon,',
    team: 'The hubStudio team',
    why: 'You’re receiving this email because you booked onboarding on hubstudio.ai.',
  },
  fr: {
    subject: 'Votre réservation de prise en main hubStudio — lien de paiement',
    preview:
      'Finalisez votre réservation en réglant les 500 € (dont 250 € reversés sur le solde de votre équipe).',
    greeting: (name) => `Bonjour ${name},`,
    hello: ['Bonjour ', ','],
    thanks:
      'Votre demande de prise en main nous est bien parvenue. Il ne reste plus qu’à régler pour confirmer vos séances.',
    intro:
      'Pour finaliser votre réservation, réglez les 500 € ci-dessous par carte bancaire. La moitié de ce montant (250 €) alimente directement le solde de votre équipe dans hubStudio, à dépenser en images et en vidéos.',
    payCta: 'Payer 500 €',
    alreadyPaid:
      'Vous avez déjà réglé sur la page de confirmation ? Tout est en ordre, ignorez simplement ce bouton.',
    summaryLabel: 'Votre réservation',
    companyRow: 'Entreprise',
    dateRow: 'Date souhaitée',
    languageRow: 'Langue des séances',
    includedRow: 'Inclus',
    includedValue: '4 heures au moins en direct + 3 mois d’assistance gratuite',
    languageNames: {
      en: 'Anglais',
      fr: 'Français',
      zh: 'Chinois',
    },
    nextLabel: 'La suite',
    steps: [
      {
        when: 'Sous un jour ouvré',
        text: 'Dès réception du règlement, nous vous écrivons pour confirmer la première séance et ses horaires, en partant de la date choisie.',
      },
      {
        when: 'Avant la première séance',
        text: 'Préparez la liste des personnes à inviter, ainsi que celle de vos clients si vous produisez pour leur compte.',
      },
      {
        when: 'Quatre heures au moins, en direct',
        text: 'Nous configurons votre équipe à vos côtés (membres et droits, limites, clients, connexions, compétences et Validation), puis nous formons chacun.',
      },
    ],
    questions:
      'Besoin d’ajuster la date ou de poser une question avant de régler ? Répondez simplement à cet e-mail.',
    signOff: 'À très vite,',
    team: 'L’équipe hubStudio',
    why: 'Vous recevez cet e-mail parce que vous avez réservé une prise en main sur hubstudio.ai.',
  },
  zh: {
    subject: '您的 hubStudio 上线引导预约确认（内附付款链接）',
    preview: '请完成 3,500 元付款以锁定辅导安排（其中 1,750 元将存入团队余额）。',
    greeting: (name) => `${name}，您好：`,
    hello: ['', '，您好'],
    thanks: '您的上线引导预约已收到，完成付款即可锁定辅导安排。',
    intro:
      '请通过下方按钮，以银行卡、支付宝或微信支付付清 3,500 元人民币。其中一半（1,750 元）将直接存入您团队在 hubStudio 的余额，可用于生成图片和视频。',
    payCta: '支付 3,500 元',
    alreadyPaid: '如果您已在预约后的确认页面完成付款，则无需重复操作，忽略上方按钮即可。',
    summaryLabel: '预约详情',
    companyRow: '公司名称',
    dateRow: '期望日期',
    languageRow: '辅导语言',
    includedRow: '服务内容',
    includedValue: '至少 4 小时实时辅导 + 3 个月免费答疑支持',
    languageNames: {
      en: '英语',
      fr: '法语',
      zh: '中文',
    },
    nextLabel: '后续流程',
    steps: [
      {
        when: '一个工作日内',
        text: '收到付款后，我们会根据您选定的日期发邮件确认首次辅导及具体时段。',
      },
      {
        when: '首次辅导之前',
        text: '请备好需要邀请的人员名单；若您为客户制作内容，客户名单也请一并备好。',
      },
      {
        when: '至少四小时，实时辅导',
        text: '我们与您一起把团队配置到位（成员与权限、限额、客户、连接、技能和审核），随后培训每一位成员。',
      },
    ],
    questions: '如需调整日期，或在付款前有任何疑问，直接回复本邮件即可。',
    signOff: '期待与您交流！',
    team: 'hubStudio 团队',
    why: '您收到这封邮件，是因为您在 hubstudio.ai 预约了上线引导。',
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

const WIDTH = 600;
const PAD = 40;

/** Escape a value before it lands in the email's HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * A button every client draws: a VML rounded rectangle for Outlook on
 * Windows, a padded link for everyone else.
 */
function button(href: string, labelText: string, bg: string, font: string, width = 240): string {
  const text = esc(labelText);
  return `<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${href}" style="height:50px;v-text-anchor:middle;width:${width}px;" arcsize="50%" stroke="f" fillcolor="${bg}">
<w:anchorlock/><center style="color:#ffffff;font-family:Arial,sans-serif;font-size:16px;font-weight:bold;">${text}</center>
</v:roundrect>
<![endif]--><!--[if !mso]><!-- --><a href="${href}" target="_blank" style="display:inline-block;background:${bg};color:#ffffff;font-family:${font};font-size:16px;font-weight:700;line-height:50px;text-align:center;text-decoration:none;padding:0 34px;border-radius:999px;mso-hide:all">${text}</a><!--<![endif]-->`;
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

/** Format an ISO `YYYY-MM-DD` date in the reader's language without timezone shift. */
function formatDate(isoDate: string, locale: Locale): string {
  const parsed = new Date(`${isoDate}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  const tag = locale === 'zh' ? 'zh-CN' : locale === 'fr' ? 'fr-FR' : 'en-US';
  try {
    return new Intl.DateTimeFormat(tag, { dateStyle: 'long', timeZone: 'UTC' }).format(parsed);
  } catch {
    return isoDate;
  }
}

/** Subject, HTML and plain-text versions of the onboarding booking confirmation. */
export function onboardingConfirmation(locale: Locale, input: OnboardingConfirmationInput) {
  const c = COPY[locale];
  const firstName = tidyName(input.firstName);
  const payUrl = ONBOARDING_PAY[locale];
  const home = SITE + (pathIn('/', locale) ?? '/');
  const formattedDate = formatDate(input.date, locale);
  const sessionLangName = c.languageNames[input.sessionLanguage] ?? input.sessionLanguage;

  const lang = locale === 'zh' ? 'zh-CN' : locale;
  const font =
    locale === 'zh'
      ? "'PingFang SC','Hiragino Sans GB','Microsoft YaHei',Arial,sans-serif"
      : "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
  const msoFont = locale === 'zh' ? "'Microsoft YaHei',Arial,sans-serif" : 'Arial,sans-serif';
  const text = (size: number, lineHeight: number, color: string) =>
    `font-family:${font};font-size:${size}px;line-height:${lineHeight}px;color:${color};mso-line-height-rule:exactly`;

  const summaryRows: [string, string][] = [
    [c.companyRow, input.company],
    [c.dateRow, formattedDate],
    [c.languageRow, sessionLangName],
    [c.includedRow, c.includedValue],
  ];

  const summaryHtml = summaryRows
    .map(
      ([k, v], i) => `
      <tr>
        <td style="padding:${i === 0 ? 0 : 10}px 16px 0 0;vertical-align:top;white-space:nowrap;${text(14, 21, C.muted)}">${esc(k)}</td>
        <td style="padding:${i === 0 ? 0 : 10}px 0 0;vertical-align:top;font-weight:700;${text(14, 21, C.ink)}">${esc(v)}</td>
      </tr>`,
    )
    .join('');

  const stepsHtml = c.steps
    .map(
      (s, i) => `
      <tr><td style="padding:${i === 0 ? 4 : 20}px 0 0">
        <p style="margin:0 0 4px;${text(12, 18, C.cta)};font-weight:700;letter-spacing:1px;text-transform:uppercase">${esc(s.when)}</p>
        <p style="margin:0;${text(15, 23, C.muted)}">${esc(s.text)}</p>
      </td></tr>`,
    )
    .join('');

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
          <!-- Payment CTA -->
          <tr><td class="px" style="padding:36px ${PAD}px 0">
            <p style="margin:0 0 26px;${text(17, 27, C.ink)}">${esc(c.intro)}</p>
            ${button(payUrl, c.payCta, C.cta, font)}
            <p style="margin:18px 0 0;${text(14, 21, C.muted)}">${esc(c.alreadyPaid)}</p>
          </td></tr>

          <!-- Booking summary box -->
          <tr><td class="px" style="padding:36px ${PAD}px 0">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="background:${C.tint};border-radius:14px;padding:24px 28px 26px">
                ${label(c.summaryLabel, font)}
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  ${summaryHtml}
                </table>
              </td></tr>
            </table>
          </td></tr>

          <!-- What happens next -->
          <tr><td class="px" style="padding:36px ${PAD}px 0">
            ${label(c.nextLabel, font)}
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${stepsHtml}
            </table>
          </td></tr>

          <tr><td class="px" style="padding:36px ${PAD}px 0">
            <div style="border-top:1px solid ${C.line};font-size:0;line-height:0">&nbsp;</div>
          </td></tr>

          <!-- Closing -->
          <tr><td class="px" style="padding:28px ${PAD}px 40px">
            <p style="margin:0 0 20px;${text(16, 25, C.ink)}">${esc(c.questions)}</p>
            <p style="margin:0;${text(16, 25, C.ink)}">${esc(c.signOff)}<br /><strong>${esc(c.team)}</strong></p>
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
    `${c.payCta}: ${payUrl}`,
    '',
    c.alreadyPaid,
    '',
    c.summaryLabel.toUpperCase(),
    ...summaryRows.map(([k, v]) => `- ${k}: ${v}`),
    '',
    c.nextLabel.toUpperCase(),
    ...c.steps.flatMap((s) => [`${s.when}: ${s.text}`, '']),
    c.questions,
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
