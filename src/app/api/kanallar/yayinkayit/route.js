import { connectToRedis, quitConnection } from "@/lib/redis";
import { channelSchema } from "@/models/channel";
import { Repository } from "redis-om";
import axios from "axios";
import * as cheerio from "cheerio";

const url = "https://tvplus.com.tr/canli-tv/yayin-akisi/";
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

export async function POST(req) {
  try {
    // Redis bağlantısını açıyoruz
    const client = await connectToRedis();
    const channelRepository = new Repository(channelSchema, client);

    // Her bir kanalı Redis'e kaydet
    for (const channel of channels) {
      await channelRepository.save(channel.title, channel);
    }

    // Redis bağlantısını kapatıyoruz

    return new Response(
      JSON.stringify({ message: "Kanallar başarıyla kaydedildi!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Veri kaydetme hatası:", error);
    return new Response(
      JSON.stringify({ message: "Bir hata oluştu", error: error.message }),
      { status: 500 }
    );
  }
}
