// app/api/yayinAkisi/route.js
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET() {
  try {
    const response = await axios.get("https://www.bloomberght.com/yayinakisi");
    const $ = cheerio.load(response.data);

    const yayinAkisi = $(".accordionItem")
      .map((index, item) => ({
        time: $(item).find(".time").text().trim(),
        imgSrc: $(item).find("img").attr("src"),
        title: $(item).find("h4").text().trim(),
        description: $(item).find("p").html().trim(),
      }))
      .get();

    return new Response(JSON.stringify(yayinAkisi), { status: 200 });
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
