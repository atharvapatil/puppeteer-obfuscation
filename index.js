const puppeteer = require('puppeteer');
let myArray = ["rené favaloro","2019 年参議院議員通常選挙","apollo 11 space mission","rené favaloro","نتيجة الثانوية العامة ٢٠١٩","apollo 11 missão espacial","tyler skaggs cause of death","り地域","rené favaloro","santino william legan","نتائج السادس الاعدادي 2019 الدور الاول","apollo 11’in görevi","rené gerónimo","京アニ火災","ตรวจหวย15กรกฎาคม 2562","gilroy garlic festival shooting","garlic festival shooting","storm area 51","apollo 11 space mission","storm area 51 event","apollo-11-mission","how many days since june 12 1829","ตรวจหวย1กรกฎาคม2562","rené favaloro","ap grama sachivalayam notification","area 51 raid","nascar daytona july 2019","миссия аполлон ‑11","kyoto animation fire","京アニ犯人","京都アニメーション犯人","misi ruang angkasa apollo 11","mission apollo 11","vô địch bóng đá nữ thế giới 2019","木津いぶき","santino legan","misión espacial del apolo 11","רנה פבלורו","gramasachivalayam.ap.gov.in","kurbanbayrami tarihi 2019 ayın kaçında","thor love and thunder","misty loman","belle delphine bath water","belle delphine store","super 30 movie review","tyler skaggs death","rené favaloro","epfo admit card 2019 download","về nhà đi con tập 70","christopher cukor","rené favaloro","judgemental hai kya review","apollo 11 space mission","area 51 facebook event","fgts ativo vai liberar 2019","how did cameron boyce die","area 51 event","về nhà đi con tập 71","ice bae","apollo 11 space mission","اليوم السابع نتيجة الثانوية العامة 2019","fußball-weltmeisterschaft der frauen 2019 – finale","ice cream licker","realme 3i","kurbanbayrami tarihi 2019 ne zaman kaç gün","rené favaloro","về nhà đi con tập 72","sứ mệnh tàu apollo 11","bianca devins","british open leaderboard 2019","หนังใหม่ปี2019เต็มเรื่อง","rené favaloro","về nhà đi con tập 75","misja kosmiczna apollo 11","về nhà đi con tập 66","ポケモン自己分析","diva da oakley","apollo 11 space mission","rené favaloro","reemplacamiento 2019 edomex gob mx en linea gratis","宮下日向太","belle delphine bathwater","миссия аполлон ‑11","brandon theesfeld","về nhà đi con tập 73","rené gerónimo","نتائج البكالوريا2019","cameron boyce death","吉本会見","京アニ 犯人","kurbanbayrami tarihi 2019 takvimi","参議院議員選挙 2019 候補者","về nhà đi con tập 65","goodtwitter","india bangladesh match 2019","pybs sonuçları 2019 meb","ภารกิจ อะพอลโล 11","xxi indo xxi 2019 terbaru", "fußball-weltmeisterschaft der frauen 2019 – finale"];

async function program() {
  // launch puppeteer
  const browser = await puppeteer.launch({headless: false, slowMo: 20});

  for (i = 0; i < myArray.length; i++) {

  // create a page
  const page = await browser.newPage();

  await page.setViewport({width: 1280, height: 720});

    await page.goto('https://www.google.com');
    await page.type('#main', myArray[i]);
    await page.keyboard.press("Enter");
    await page.waitFor('#rso > div > div > div:nth-child(1) > div > div > div.r a');
  // click the link for the first video appear.
    await page.click('#rso > div > div > div:nth-child(1) > div > div > div.r a');

}

}

program();
