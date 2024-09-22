// next.config.js dosyanızda aşağıdaki ayarı unutmayın
// experimental: { appDir: true }

import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(req, { params }) {
  console.log(params);
  const url = `https://tvplus.com.tr/canli-tv/yayin-akisi/${params.channel_id}`;
  console.log("url sonucu: ", url);
  if (!url) {
    return new Response(JSON.stringify({ error: "URL parametresi eksik." }), {
      status: 400,
    });
  }

  try {
    // HTML'yi çek
    const { data } = await axios.get(url);

    // Cheerio ile HTML'yi ayrıştır
    const $ = cheerio.load(data);

    // __NEXT_DATA__ script tag'ini bul ve içeriğini al
    const nextDataScript = $("#__NEXT_DATA__").html();

    if (!nextDataScript) {
      return new Response(
        JSON.stringify({ error: "__NEXT_DATA__ bulunamadı." }),
        {
          status: 404,
        }
      );
    }

    // JSON verisine dönüştür
    const nextData = JSON.parse(nextDataScript);

    // footerData kısmını çek
    const kanalYayinAkisi = nextData.props.pageProps.allPlaybillList;

    return new Response(JSON.stringify({ kanalYayinAkisi }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Hata:", error);
    return new Response(
      JSON.stringify({ error: "Veri çekilirken hata oluştu." }),
      {
        status: 500,
      }
    );
  }
}
