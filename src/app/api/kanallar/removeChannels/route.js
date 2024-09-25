import { NextResponse } from "next/server";
import { connectToRedis } from "@/lib/redis";
import { EntityId, Repository } from "redis-om";
import { channelSchema } from "@/models/channel"; // channelSchema modelinizi uygun bir şekilde içe aktarın

export async function DELETE() {
  try {
    // Redis bağlantısını aç
    const client = await connectToRedis();
    const channelRepository = new Repository(channelSchema, client);

    // Tüm kayıtları sil
    const allchannels = await channelRepository.search().return.all(); // Tüm albümleri al
    const deletePromises = allchannels.map((channel) =>
      channelRepository.remove(channel[EntityId])
    ); // Silme işlemleri için bir dizi oluştur

    await Promise.all(deletePromises); // Tüm silme işlemlerini gerçekleştir

    // Başarılı silme durumunda yanıt döndür
    return NextResponse.json(
      { message: "Tüm albümler başarıyla silindi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Silme hatası:", error);
    return NextResponse.json(
      { error: "Tüm albümler silinemedi." },
      { status: 500 }
    );
  }
}
