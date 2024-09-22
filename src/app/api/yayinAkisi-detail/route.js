import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://tvplus.com.tr/canli-tv/yayin-akisi/";

// Verileri çekmek için bir fonksiyon
export async function GET() {
  try {
    // Axios ile sayfanın HTML içeriğini alıyoruz
    const { data } = await axios.get(url);

    // Cheerio ile HTML'i işliyoruz
    const $ = cheerio.load(data);

    // Verileri tutacağımız dizi
    let channels = [];

    // '.channel-list-item' sınıfındaki verileri seçiyoruz
    $(".channel-list-item").each((i, elem) => {
      const title = $(elem).find("a").attr("title"); // Kanal ismi
      const href = $(elem).find("a").attr("href"); // Yayın akışı linki
      const logo = $(elem).find("img").attr("src"); // Logo URL

      // Kanal bilgilerini bir obje olarak dizimize ekliyoruz
      channels.push({
        title,
        href: `https://tvplus.com.tr${href}`, // URL'i tam hale getiriyoruz
        logo,
      });
    });

    return new Response(JSON.stringify(channels), { status: 200 });
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
}
