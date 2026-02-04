import puppeteer from 'puppeteer';
import puppeteerCore from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export async function getBrowser() {
  const isDocker =
    process.env.DOCKER === 'true' ||
    process.env.NODE_ENV === 'PRODUCTION';

  if (isDocker) {
    return puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: (chromium as any).defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: (chromium as any).headless,
    });
  }

  // local dev
  return puppeteer.launch({
    headless: true,
  });
}
