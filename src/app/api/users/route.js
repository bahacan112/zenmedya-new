import { NextResponse } from "next/server";
import { userSchema } from "@/models/Users";
import { connectToRedis, quitConnection } from "@/lib/redis";
import { Repository, redis, EntityId } from "redis-om";

export async function GET() {
  try {
    const client = await connectToRedis();
    const userRepository = client.fetchRepository(userSchema);
    await userRepository.createIndex();

    const sonuc = await userRepository.search().return.all();
    // Tüm kullanıcıları al
    return NextResponse.json(sonuc, { status: 200 });
  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json(
      { message: "Bir hata oluştu", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    // Redis bağlantısını kur ve kontrol et
    const client = await connectToRedis();
    const userRepository = new Repository(userSchema, client);

    try {
      const body = await request.json();
      let user = {
        artist: body.artist,
        title: body.title,
        year: body.year,
        tel: body.tel,
      };
      user = await userRepository.save(body.tel, user);
      console.log(user[EntityId]);
      return NextResponse.json({ message: "Başarılı" });
    } catch (error) {
      console.error("API Hatası:", error); // Detaylı hata loglama
      return NextResponse.json(
        { message: "Bir hata oluştu", error: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log("hata mEsajı", error);
  }
}
