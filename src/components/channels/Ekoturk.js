"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Skeleton from "react-loading-skeleton"; // Import for skeleton loading
import MovieCard from "@/components/Card/MovieCardChannel";

export default function Ekoturk(params) {
  const [trendingOneMoviesData, setTrendingOneMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/youtube_channel/${params.channel_id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTrendingOneMoviesData(data);
      } catch (error) {
        console.error("Veri alırken hata oluştu:", error);
      } finally {
        setIsLoading(false); // Set loading to false after data fetch (or error)
      }
    };

    fetchData();
  }, []);

  const swiperOption = {
    speed: 9000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    centeredSlides: true,
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: "1.2",
      },
      576: {
        slidesPerView: "1.7",
        spaceBetween: 20,
      },
      992: {
        slidesPerView: "2.5",
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: "3.5",
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: "3.9",
        spaceBetween: 30,
      },
    },
  };

  return (
    <main className="main">
      <div className="trending pt-80">
        <div className="d-flex justify-content-center mb-40">
          <div className="section-header">
            <span>⚡</span>
            <h3 className="section-title lh-1 mt-2 mb-0">
              {params.channel_name} KONUKLARIMIZ
            </h3>
          </div>
        </div>
        {isLoading ? ( // Conditional rendering based on loading state
          <div className="swiper movie-card-slider-sm movie-card-slider-item-scroll">
            {[...Array(swiperOption.slidesPerView)].map((_, i) => (
              <SwiperSlide key={i}>
                <Skeleton height={250} />{" "}
                {/* Skeleton placeholder for each slide */}
              </SwiperSlide>
            ))}
          </div>
        ) : (
          trendingOneMoviesData &&
          trendingOneMoviesData.length > 0 && (
            <Swiper
              {...swiperOption}
              className="swiper movie-card-slider-sm movie-card-slider-item-scroll"
            >
              {trendingOneMoviesData.map((movie, index) => (
                <SwiperSlide key={index}>
                  <MovieCard movie={movie} />
                </SwiperSlide>
              ))}
            </Swiper>
          )
        )}
      </div>
    </main>
  );
}
