import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
const el = await page.$('.feature--navy');
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(700);
await el.screenshot({ path: 'shot-training.png' });
console.log('captured training feature');
await browser.close();
