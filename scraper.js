import puppeteer from 'puppeteer';
import fs from 'fs';

async function scrapeMDN() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://developer.mozilla.org/en-US/docs/Web');

    // Scrape the title
    const title = await page.evaluate(() => document.querySelector("#content > article > header > h1").innerText);

    // Scrape the first paragraph
    const firstParagraph = await page.evaluate(() => document.querySelector('#content > article > div').innerText);

    // Print the title and the first paragraph
    console.log('Title:', title);
    console.log('First paragraph:', firstParagraph);

    // Save the title and the first paragraph to a JSON file
    fs.writeFileSync('scrapedData.json', JSON.stringify({ H1: title, firstParagraph }));

    await browser.close();
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

export { scrapeMDN };