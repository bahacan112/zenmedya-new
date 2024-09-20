import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.bloomberght.com/yayinakisi");

    const yayinAkisi = await page.evaluate(() => {
      const data = {
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
        Sunday: [],
      };

      const days = Array.from(
        document.querySelectorAll(".widget-accordion.type1")
      );
      days.forEach((day, dayIndex) => {
        const dayNames = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        const currentDay = dayNames[dayIndex];

        const items = Array.from(day.querySelectorAll(".accordionItem"));
        items.forEach((item) => {
          const imgSrc = item.querySelector("img")
            ? item.querySelector("img").src
            : "";
          const title = item.querySelector("h4")
            ? item.querySelector("h4").innerText.trim()
            : "";
          const time = item.querySelector(".time")
            ? item.querySelector(".time").innerHTML.trim()
            : "";
          const description = item.querySelector("p")
            ? item.querySelector("p").innerHTML.trim()
            : "";

          data[currentDay].push({ imgSrc, title, time, description });
        });
      });

      return data;
    });

    await browser.close();
    return new Response(JSON.stringify(yayinAkisi), { status: 200 });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
