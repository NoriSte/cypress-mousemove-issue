
const puppeteer = require('puppeteer');
const path = require('path');

describe('Puppeteer behaviour', () => {
  test('The button will be disabled as soon as you move the mouse', async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(`file:${path.join(__dirname, './index.html')}`);

    await page.click('#button');
    const result = await page.$eval('#button', e => e.getAttribute('disabled'));
    expect(result).toBe('true');

    await browser.close();
  }, 10000);
});
