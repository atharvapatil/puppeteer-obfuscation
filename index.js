const puppeteer = require('puppeteer');
var randomWords = require('random-words');
let googleThis = [];

myFakeSearch();

async function myFakeSearch() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50
  });

  googleThis = await randomWords(5);
  console.log(googleThis);

  for (i = 0; i < googleThis.length; i++) {

    const page = await browser.newPage();

    await page.setViewport({
      width: 1280,
      height: 720
    });

    await page.goto('https://www.google.com');
    await page.type('#main', googleThis[i]);
    await page.keyboard.press("Enter");
    // await page.waitFor('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r a');
    // await page.click('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a');


  }

}
