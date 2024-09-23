"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { channels } from "@/data/channels";
import YayinAkisiCard from "@/components/Card/YayinAkisiCard";

export default function CategoryList() {
  // Arama terimi için state
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Başlangıçta görünen kart sayısı

  // Arama terimi ile eşleşen kanalları filtreleme
  const filteredChannels = channels.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Daha fazla kart göstermek için fonksiyon
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Her tıklamada 6 kart daha ekle
  };

  return (
    <div className="container py-80">
      <h3 className="section-title lh-1 text-center mb-5">Yayın Akışları</h3>

      {/* Arama Kutusu */}
      <div className="mb-4 text-center">
        <input
          type="text"
          className="form-control w-max mx-auto mb-5"
          placeholder="Kanal Ara"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Arama terimini günceller
          style={{ height: "75px", fontSize: "1.25rem" }}
        />
      </div>

      {/* Filtrelenmiş kanallar */}
      {filteredChannels && filteredChannels.length > 0 ? (
        <div className="row mt-2 row-gap-4">
          {filteredChannels.slice(0, visibleCount).map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <YayinAkisiCard category={category} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">Aramanıza uygun kanal bulunamadı.</div>
      )}

      {/* Daha Fazla Butonu */}
      {visibleCount < filteredChannels.length && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleShowMore}>
            Daha Fazla Göster
          </button>
        </div>
      )}
    </div>
  );
}
