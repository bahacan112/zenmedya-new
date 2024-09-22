"use client";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PlaylistOne from "@/components/Playlist/PlaylistOne";
import { useState, useEffect } from "react";

export default function Playlist(playlist_link) {
  const [trendingOneMoviesData, setTrendingOneMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/youtube_playlist/${playlist_link.params.channel}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrendingOneMoviesData(data);
      } catch (error) {
        console.error("Veri alırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);
  console.log(trendingOneMoviesData);

  const breadcrumb = {
    title: "Playlist",
    links: [
      { name: "Home", href: "/" },
      { name: "Playlist", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <PlaylistOne data={trendingOneMoviesData} />
      </main>
      {/* <!-- End Main --> */}

      <FooterOne />
    </>
  );
}
