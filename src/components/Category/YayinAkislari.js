"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { channels } from "@/data/channels";
import YayinAkisiCard from "@/components/Card/YayinAkisiCard";

export default function CategoryList() {
  // Arama terimi için state
  const [searchTerm, setSearchTerm] = useState("");

  // Arama terimi ile eşleşen kanalları filtreleme
  const filteredChannels = channels.filter((channel) =>
    channel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredChannels.map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
              <YayinAkisiCard category={category} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">Aramanıza uygun kanal bulunamadı.</div>
      )}
    </div>
  );
}
