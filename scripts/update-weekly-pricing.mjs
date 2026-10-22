/**
 * Weekly FX rate check & localized pricing updater for `/pricing` (`/fr/tarifs` & `/zh/pricing`).
 *
 *   npm run pricing:weekly-fx
 *   node scripts/update-weekly-pricing.mjs [--offline]
 *
 * What it does:
 * 1. Fetches live USD -> EUR and USD -> CNY reference rates from the European Central Bank
 *    (via https://api.frankfurter.app/latest?from=USD&to=EUR,CNY).
 * 2. Updates `src/data/social-fx.json` with the checked conversion rates and next weekly due date.
 * 3. Recomputes all localized social retainer, add-on, setup fee, and ad spend threshold prices
 *    in `src/i18n/dict/fr/pages/pricing.json` (EUR €) and `src/i18n/dict/zh/pages/pricing.json` (CNY ¥).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const FX_FILE = join(root, 'src', 'data', 'social-fx.json');
const FR_PRICING_FILE = join(root, 'src', 'i18n', 'dict', 'fr', 'pages', 'pricing.json');
const ZH_PRICING_FILE = join(root, 'src', 'i18n', 'dict', 'zh', 'pages', 'pricing.json');

const OFFLINE = process.argv.includes('--offline');
const FX_ENDPOINT = 'https://api.frankfurter.app/latest?from=USD&to=EUR,CNY';

function roundSocialAmount(raw) {
  if (raw >= 200) return Math.round(raw / 10) * 10;
  return Math.round(raw);
}

function convertUsd(usd, currency, rates) {
  if (currency === 'USD') return Math.round(usd);
  const rate = currency === 'EUR' ? rates.EUR : rates.CNY;
  return roundSocialAmount(usd * rate);
}

function formatAmount(amount, currency) {
  const n = Math.round(amount);
  if (currency === 'EUR') {
    const formatted = n.toLocaleString('fr-FR', { maximumFractionDigits: 0 }).replace(/\s/g, '\u00a0');
    return `${formatted}\u00a0€`;
  }
  if (currency === 'CNY') {
    const formatted = n.toLocaleString('en-US', { maximumFractionDigits: 0 });
    return `¥${formatted}`;
  }
  const formatted = n.toLocaleString('en-US', { maximumFractionDigits: 0 });
  return `$${formatted}`;
}

async function fetchLiveRates() {
  if (OFFLINE) return null;
  try {
    const res = await fetch(FX_ENDPOINT, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const eur = data?.rates?.EUR;
    const cny = data?.rates?.CNY;
    if (typeof eur !== 'number' || typeof cny !== 'number' || !(eur > 0) || !(cny > 0)) {
      return null;
    }
    return {
      EUR: eur,
      CNY: cny,
      fxDate: data.date ?? new Date().toISOString().slice(0, 10),
    };
  } catch {
    return null;
  }
}

const currentFx = JSON.parse(readFileSync(FX_FILE, 'utf8'));
const live = await fetchLiveRates();

const now = new Date();
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

const updatedFx = {
  base: 'USD',
  rates: {
    USD: 1,
    EUR: live ? live.EUR : currentFx.rates.EUR,
    CNY: live ? live.CNY : currentFx.rates.CNY,
  },
  fxDate: live ? live.fxDate : currentFx.fxDate,
  checkedAt: now.toISOString(),
  nextCheckDue: nextWeek.toISOString(),
  updateCadence: 'weekly',
  source: 'European Central Bank (ECB) via Frankfurter API',
};

writeFileSync(FX_FILE, JSON.stringify(updatedFx, null, 2) + '\n', 'utf8');

const rates = updatedFx.rates;
const eur = (usd) => formatAmount(convertUsd(usd, 'EUR', rates), 'EUR');
const cny = (usd) => formatAmount(convertUsd(usd, 'CNY', rates), 'CNY');

// Load dictionaries
const frDict = JSON.parse(readFileSync(FR_PRICING_FILE, 'utf8'));
const zhDict = JSON.parse(readFileSync(ZH_PRICING_FILE, 'utf8'));

// 1. Update all "$X,XXX/month" keys
const monthlyUsdAmounts = [
  1500, 1800, 2200, 2500, 2800, 3500, 3750, 4200, 4800, 5500, 6000, 6750, 6800, 7500,
];

for (const usd of monthlyUsdAmounts) {
  const key = `$${usd.toLocaleString('en-US')}/month`;
  if (key in frDict) {
    frDict[key] = `${eur(usd)}/mois`;
  }
  if (key in zhDict) {
    zhDict[key] = `${cny(usd)}/月`;
  }
}

// 2. Update contractNote strings (EUR in French, CNY in Chinese)
const contractNotesFr = {
  '3-month minimum commitment · USD, tax excluded · Ad spend billed directly by LinkedIn':
    'Engagement minimum de 3 mois · EUR hors taxes · Budget média facturé directement par LinkedIn',
  '3-month minimum commitment · USD, tax excluded · Covers Instagram &amp; Facebook together':
    'Engagement minimum de 3 mois · EUR hors taxes · Couvre Instagram et Facebook conjointement',
  '3-month minimum commitment · USD, tax excluded · Covers TikTok &amp; YouTube Shorts':
    'Engagement minimum de 3 mois · EUR hors taxes · Couvre TikTok et YouTube Shorts',
  '3-month minimum commitment · USD, tax excluded · Includes X Premium schedule charges':
    'Engagement minimum de 3 mois · EUR hors taxes · Frais de programmation X inclus',
  '6-month minimum commitment · USD, tax excluded · Bilingual account team in Shanghai, Paris &amp; Singapore':
    'Engagement minimum de 6 mois · EUR hors taxes · Équipe bilingue à Shanghai, Paris et Singapour',
};

const contractNotesZh = {
  '3-month minimum commitment · USD, tax excluded · Ad spend billed directly by LinkedIn':
    '3 个月起签 · 人民币（CNY）不含税报价 · 广告费由 LinkedIn 直接扣款',
  '3-month minimum commitment · USD, tax excluded · Covers Instagram &amp; Facebook together':
    '3 个月起签 · 人民币（CNY）不含税报价 · 同步覆盖 Instagram 与 Facebook',
  '3-month minimum commitment · USD, tax excluded · Covers TikTok &amp; YouTube Shorts':
    '3 个月起签 · 人民币（CNY）不含税报价 · 同步覆盖 TikTok 与 YouTube Shorts',
  '3-month minimum commitment · USD, tax excluded · Includes X Premium schedule charges':
    '3 个月起签 · 人民币（CNY）不含税报价 · 已包含 X 平台定时与自动发布费用',
  '6-month minimum commitment · USD, tax excluded · Bilingual account team in Shanghai, Paris &amp; Singapore':
    '6 个月起签 · 人民币（CNY）不含税报价 · 上海、巴黎与新加坡跨国双语团队服务',
};

Object.assign(frDict, contractNotesFr);
Object.assign(zhDict, contractNotesZh);

// 3. Update standalone Ads setup ($1,500) & ad spend threshold ($15,000) strings
const setupEur = eur(1500);
const setupCny = cny(1500);
const spendEur = eur(15000);
const spendCny = cny(15000);

const adsFr = {
  '3-month minimum contract · $1,500 one-time campaign setup · Ad spend paid directly to LinkedIn.':
    `Contrat de 3 mois minimum · ${setupEur} de mise en place initiale · Budget média réglé directement à LinkedIn.`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly in Meta Business Manager.':
    `Contrat de 3 mois minimum · ${setupEur} de mise en place initiale · Budget média facturé directement dans Meta Business Manager.`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly by TikTok / Google Ads.':
    `Contrat de 3 mois minimum · ${setupEur} de mise en place initiale · Budget média facturé directement par TikTok ou Google Ads.`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly by X.':
    `Contrat de 3 mois minimum · ${setupEur} de mise en place initiale · Budget média facturé directement par X.`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed separately.':
    `Contrat de 3 mois minimum · ${setupEur} de mise en place initiale · Budget média facturé séparément.`,
  'Monthly ad spend under $15,000':
    `Budget média mensuel inférieur à ${spendEur}`,
  'Monthly ad spend over $15,000':
    `Budget média mensuel supérieur à ${spendEur}`,
  'Prices in USD · Checked &amp; updated weekly':
    'Tarifs en EUR (€) · Taux de change vérifié et mis à jour chaque semaine',
};

const adsZh = {
  '3-month minimum contract · $1,500 one-time campaign setup · Ad spend paid directly to LinkedIn.':
    `3 个月起签 · ${setupCny} 一次性账户与活动搭建费 · 广告费直接支付给 LinkedIn。`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly in Meta Business Manager.':
    `3 个月起签 · ${setupCny} 一次性搭建费 · 广告费在 Meta Business Manager 中直接扣款。`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly by TikTok / Google Ads.':
    `3 个月起签 · ${setupCny} 一次性搭建费 · 广告费由 TikTok 或 Google Ads 直接扣款。`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed directly by X.':
    `3 个月起签 · ${setupCny} 一次性搭建费 · 广告费由 X 平台直接扣款。`,
  '3-month minimum contract · $1,500 one-time setup · Ad spend billed separately.':
    `3 个月起签 · ${setupCny} 一次性开户与搭建费 · 广告充值费用另计。`,
  'Monthly ad spend under $15,000':
    `月度广告预算低于 ${spendCny}`,
  'Monthly ad spend over $15,000':
    `月度广告预算高于 ${spendCny}`,
  'Prices in USD · Checked &amp; updated weekly':
    '人民币（CNY ¥）计价 · 汇率每周核验并更新',
};

Object.assign(frDict, adsFr);
Object.assign(zhDict, adsZh);

writeFileSync(FR_PRICING_FILE, JSON.stringify(frDict, null, 2) + '\n', 'utf8');
writeFileSync(ZH_PRICING_FILE, JSON.stringify(zhDict, null, 2) + '\n', 'utf8');

console.log(
  `✓ Weekly FX pricing updated (${live ? 'live ECB fetch' : 'cached snapshot'} as of ${updatedFx.fxDate}): 1 USD = ${rates.EUR} EUR | 1 USD = ${rates.CNY} CNY`,
);
