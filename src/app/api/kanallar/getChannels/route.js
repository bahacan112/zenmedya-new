import { connectToRedis, quitConnection } from "@/lib/redis";
import { channelSchema } from "@/models/channel";
import { Repository } from "redis-om";

export async function GET() {
  try {
    // Redis bağlantısını aç
    const client = await connectToRedis();
    const channelRepository = new Repository(channelSchema, client);
    await channelRepository.createIndex();

    // Tüm kanalları getir
    const channels = await channelRepository.search().return.all();
    console.log("kanallar", channels);
    // Redis bağlantısını kapat

    // Kanalları JSON formatında döndür
    return new Response(JSON.stringify(channels), { status: 200 });
  } catch (error) {
    console.error("Kanalları alma hatası:", error);
    return new Response(
      JSON.stringify({ message: "Bir hata oluştu", error: error.message }),
      { status: 500 }
    );
  }
}
