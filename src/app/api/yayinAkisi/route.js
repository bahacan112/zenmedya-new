import axios from "axios";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    const response = await axios.get("https://www.bloomberght.com/yayinakisi");

    // cheerio ile HTML içeriğini parse et
    const $ = cheerio.load(response.data);

    // Veri depolama yapısı (günlere göre)
    const yayinAkisi = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: [],
    };

    // Günlerin sıralı listesi
    const dayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    // Tüm günleri seç
    const days = $(".widget-accordion.type1");

    // Her gün için programları çek
    days.each((dayIndex, dayElement) => {
      const currentDay = dayNames[dayIndex];

      // O gün için tüm programları çek
      $(dayElement)
        .find(".accordionItem")
        .each((_, item) => {
          const imgSrc = $(item).find("img").attr("src") || "";
          const title = $(item).find("h4").text().trim() || "";
          const time = $(item).find(".time").text().trim() || "";
          const description = $(item).find("p").text().trim() || "";

          // Günü ve program detaylarını veriye ekle
          yayinAkisi[currentDay].push({ imgSrc, title, time, description });
        });
    });

    // Veriyi JSON olarak dön
    return new Response(JSON.stringify(yayinAkisi), { status: 200 });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
