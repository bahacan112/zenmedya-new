"use client";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import CategoryBrowseList from "@/components/Category/YayinAkislariDetay";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "../loading";

export default function YayinAkislari() {
  const [channelData, setChannelData] = useState([]);
  const [loading, setLoading] = useState(true); // Yükleme durumu için yeni bir state
  const { movie_id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/yayinAkisi-detail/${movie_id}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setChannelData(data);
      } catch (error) {
        console.error("Veri alırken hata oluştu:", error);
      } finally {
        setLoading(false); // Veri çekimi tamamlandığında yükleme durumunu kapat
      }
    };

    fetchData();
  }, [movie_id]);

  const breadcrumb = {
    title: movie_id.split("-")[0],
    links: [
      { name: "Home", href: "/" },
      { name: "Yayın Akışı", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      <main className="main">
        {loading ? (
          <Loading /> // Yükleme durumu
        ) : (
          <CategoryBrowseList channel_data={channelData} />
        )}
      </main>
      <FooterOne />
    </>
  );
}
