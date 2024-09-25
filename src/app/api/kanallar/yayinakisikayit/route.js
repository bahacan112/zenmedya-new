import axios from "axios";
import * as cheerio from "cheerio";
import { programSchema } from "@/models/programs"; // Program modelini import edin
import { connectToRedis, quitConnection } from "@/lib/redis";
import { Repository } from "redis-om";

export async function GET() {
  const client = await connectToRedis();

  // Kanalları almak için fonksiyon
  const channels = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/kanallar/getChannels"
      );
      // Kanallardan sadece URL'leri alıyoruz
      const channelsData = await response.json();
      const list = [];
      channelsData.forEach((channel) => {
        list.push(channel.href);
      });
      return list; // URL listesini döndürüyoruz
    } catch (error) {
      console.error("Error fetching channels:", error);
      throw error; // Hata durumunda hatayı tekrar fırlatıyoruz
    }
  };

  try {
    const channelUrls = await channels(); // URL listesini al
    // URL'ler üzerinde döngü yaparak her birinin içeriğini çekiyoruz
    const results = await Promise.all(
      channelUrls.map(async (channel) => {
        const url = channel;
        if (!url) {
          return { error: "URL parametresi eksik.", status: 400 };
        }

        try {
          // HTML'yi çek
          const { data } = await axios.get(url);

          // Cheerio ile HTML'yi ayrıştır
          const $ = cheerio.load(data);

          // __NEXT_DATA__ script tag'ini bul ve içeriğini al
          const nextDataScript = $("#__NEXT_DATA__").html();

          if (!nextDataScript) {
            return { error: "__NEXT_DATA__ bulunamadı.", status: 404 };
          }

          // JSON verisine dönüştür
          const nextData = JSON.parse(nextDataScript);
          const programRepository = new Repository(programSchema, client);

          // Yayın programlarını çek
          const programs = nextData.props.pageProps.allPlaybillList;
          for (const dayPrograms of programs) {
            for (const program of dayPrograms) {
              // Program verilerini Redis'e kaydet
              const newProgram = {
                ...program,
                day: new Date(program.starttime).toLocaleDateString("tr-TR", {
                  timeZone: "UTC",
                }), // Günü tarih formatında ekle
              };

              await programRepository.save(newProgram); // Veriyi Redis'e kaydet
            }
          }

          return { message: "Programs saved successfully", status: 201 };
        } catch (error) {
          console.error("Error saving programs:", error);
          return { message: "Error saving programs", status: 500, error };
        }
      })
    );

    // Tüm sonuçları geri döndür
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ message: "Error fetching data" }), {
      status: 500,
    });
  }
}
