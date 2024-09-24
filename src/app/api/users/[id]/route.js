import { NextResponse } from "next/server";
import { userSchema } from "@/models/Users";
import { connectToRedis, quitConnection } from "@/lib/redis";

export async function GET(request, { params }) {
  const { id } = params; // Kullanıcı ID'sini alın

  try {
    const client = await connectToRedis();
    const userRepository = client.fetchRepository(userSchema);
    await userRepository.createIndex();

    const sonuc = await userRepository
      .search()
      .where("tel")
      .equals(id)
      .return.all();
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
