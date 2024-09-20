// deneme/page.js
import React from "react";

const DenemePage = async () => {
  try {
    const res = await fetch("https://zenmedya-new.vercel.app/api/yayinAkisi"); // Yerel geliştirme için
    if (!res.ok) {
      throw new Error("Veri alınamadı");
    }
    const yayinAkisi = await res.json();
  } catch {
    console.log(error);
  }
  return (
    <div>
      {/*   <h1>Yayın Akışı</h1>
      {Object.entries(yayinAkisi).map(([day, programs]) => (
        <div key={day} className="day-section">
          <h2>{day}</h2>
          <div className="program-list">
            {Array.isArray(programs) ? ( // programs bir dizi mi kontrol et
              programs.map((program, index) => (
                <div key={index} className="program-item">
                  {program.imgSrc && (
                    <img src={program.imgSrc} alt={program.title} />
                  )}
                  <h4>{program.title}</h4>
                  <p>{program.description}</p>
                </div>
              ))
            ) : (
              <p>No programs available for {day}</p> // Dizi değilse mesaj göster
            )}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default DenemePage;
