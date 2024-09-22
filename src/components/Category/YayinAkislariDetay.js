import { useState } from "react";
import MovieCategoryListCard from "../Card/MovieCategoryListCard";
import { format, addDays } from "date-fns";

export default function CategoryBrowseList({ channel_data }) {
  const movies = channel_data?.kanalYayinAkisi || [];

  const [activeTab, setActiveTab] = useState(0); // İlk tab aktif (0. gün)
  const getDaysNamesArray = () => {
    // Bugünün tarihini al
    const today = new Date();
    // Dünün tarihini hesapla
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Gün isimleri
    const dayNames = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];

    // Günler dizisini oluştur
    const daysArray = Array.from({ length: 6 }, (_, index) => {
      const dayDate = addDays(yesterday, index);
      return dayNames[dayDate.getDay()]; // Günün ismini al
    });

    return daysArray;
  };
  const days = getDaysNamesArray();

  return (
    <div className="category-list-area container py-80">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {days.map((day, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link ${index === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {day}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content" id="myTabContent">
        {days.map((day, index) => (
          <div
            key={index}
            className={`tab-pane fade ${
              index === activeTab ? "show active" : ""
            }`}
          >
            {/* Her güne ait filmler */}
            {movies[index] && movies[index].length > 0 ? (
              movies[index].map((movie, movieIndex) => (
                <div key={movie.id} className="movie-item my-3">
                  <MovieCategoryListCard data={movie} />
                </div>
              ))
            ) : (
              <p>Bu gün için yayın akışı bulunmamaktadır.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
