import axios from "axios";
import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

const url = "https://tvplus.com.tr/canli-tv/yayin-akisi/";
const saveDirectory = "./public/assets/images/channel/logolar/"; // Kayıt edilecek klasör

// Klasörün var olup olmadığını kontrol et, yoksa oluştur
if (!fs.existsSync(saveDirectory)) {
  fs.mkdirSync(saveDirectory, { recursive: true });
}

async function downloadImage(imageUrl, imagePath) {
  const writer = fs.createWriteStream(imagePath);

  const response = await axios({
    url: imageUrl,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

// Named export for GET method
export async function GET(req) {
  try {
    // Sayfa HTML'ini alıyoruz
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    let channels = [];

    // 'channel-list-item' sınıfındaki her öğeyi dolaşıyoruz
    $(".channel-list-item").each((i, elem) => {
      const title = $(elem).find("a").attr("title"); // Kanal ismi
      const logoUrl = $(elem).find("img").attr("src"); // Logo URL

      if (logoUrl) {
        // URL'den alt özelliği alıyoruz (son segment)
        const fileName = logoUrl.split("/").pop(); // URL'nin sonundaki dosya adı
        const logoPath = path.join(saveDirectory, fileName); // Logo'nun kaydedileceği yol

        channels.push({
          title,
          logoUrl,
          logoPath,
        });
      }
    });

    // Logoları kaydetme işlemi
    for (const channel of channels) {
      console.log(`İndiriliyor: ${channel.logoUrl}`);
      await downloadImage(channel.logoUrl, channel.logoPath);
      console.log(`${channel.logoUrl} logosu kaydedildi.`);
    }

    return new Response(
      JSON.stringify({ message: "Tüm logolar başarıyla indirildi." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Hata oluştu:", error);
    return new Response(
      JSON.stringify({ error: "Veri çekme sırasında hata oluştu." }),
      { status: 500 }
    );
  }
}
