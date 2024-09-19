// app/deneme/page.js
import React from "react";

async function fetchYayinAkisi() {
  try {
    const response = await fetch(
      "https://zenmedya-new.vercel.app/api/yayinAkisi"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  } catch (error) {
    console.error("Veri alınırken bir hata oluştu:", error);
    return [];
  }
}

export default async function YayinAkisi() {
  const yayinAkisi = await fetchYayinAkisi();

  return (
    <div className="widget-accordion type1">
      {yayinAkisi.length === 0 ? (
        <div>Veri yüklenirken bir hata oluştu.</div>
      ) : (
        yayinAkisi.map((item, index) => (
          <div key={index} className="swiper-slide accordionItem">
            <div className="img">
              <img src={item.imgSrc} alt={item.title} />
            </div>
            <div className="time">{item.time}</div>
            <div className="content">
              <div className="detail">
                <h4>{item.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
