const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://bloomberght.com/yayin-akisi");

  const yayinAkisi = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll(".accordionItem"));
    return items.map((item) => ({
      time: item.querySelector(".time").innerText.trim(),
      imgSrc: item.querySelector("img").src,
      title: item.querySelector("h4").innerText.trim(),
      description: item.querySelector("p").innerHTML.trim(),
    }));
  });

  console.log(yayinAkisi);
  await browser.close();
})();
