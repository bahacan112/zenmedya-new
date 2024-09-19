// app/api/yayinAkisi/route.js
import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.bloomberght.com/yayinakisi");

    const yayinAkisi = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll(".accordionItem"));
      return items.map((item) => ({
        time: item.querySelector(".time").innerText.trim(),
        imgSrc: item.querySelector("img").src,
        title: item.querySelector("h4").innerText.trim(),
        description: item.querySelector("p").innerHTML.trim(),
      }));
    });

    await browser.close();
    return new Response(JSON.stringify(yayinAkisi), { status: 200 });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return new Response(JSON.stringify({ error: "111Failed to fetch data" }), {
      status: 500,
    });
  }
}
