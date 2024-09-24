import { Client } from "redis-om";

let client;

export async function connectToRedis() {
  try {
    if (!client) {
      client = new Client();
      await client.open(process.env.REDIS_URL);
      console.log("Redis bağlantısı başarılı.");
    } else if (!client.isOpen()) {
      // Eğer Redis istemcisi kapalıysa tekrar aç
      await client.open(process.env.REDIS_URL);
      console.log("Redis bağlantısı tekrar açıldı.");
    }
    return client;
  } catch (error) {
    console.error("Redis bağlantı hatası:", error.message);
    throw new Error("Redis bağlantısı kurulamadı.");
  }
}

export async function quitConnection() {
  try {
    if (client && client.isOpen()) {
      await client.close();
      console.log("Redis bağlantısı kapatıldı.");
    }
  } catch (error) {
    console.error("Redis bağlantısını kapatma hatası:", error.message);
    throw new Error("Redis bağlantısı kapatılamadı.");
  }
}
