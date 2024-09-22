import axios from "axios";
import * as cheerio from "cheerio";
let id = 0;
export async function GET() {
  try {
    const response = await axios.get("https://www.bloomberght.com/yayinakisi");

    // cheerio ile HTML içeriğini parse et
    const $ = cheerio.load(response.data);

    // Veri depolama yapısı (günlere göre)
    const yayinAkisi = {
      Pazartesi: [],
      Sali: [],
      Carsamba: [],
      Persembe: [],
      Cuma: [],
      Cumartesi: [],
      Pazar: [],
    };

    // Günlerin sıralı listesi
    const dayNames = [
      "Pazartesi",
      "Sali",
      "Carsamba",
      "Persembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
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
          id++;
          // Günü ve program detaylarını veriye ekle
          yayinAkisi[currentDay].push({
            id,
            imgSrc,
            title,
            time,
            description,
          });
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
