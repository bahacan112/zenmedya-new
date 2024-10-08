import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import Ekoturk from "@/components/channels/Ekoturk";
import TrendingOne from "@/components/Trending/TrendingOne";
import LiveStreamingFeature from "@/components/Feature/LiveStreamingFeature";
import PopularOne from "@/components/Popular/PopularOne";
import CategoryOne from "@/components/Category/CategoryOne";
import WeeklyPopularOne from "@/components/Popular/WeeklyPopularOne";
import MovieSliderOne from "@/components/MovieSlider/MovieSliderOne";
import OurOriginalOne from "@/components/OurOriginal/OurOriginalOne";
import { Suspense } from "react";
import Loading from "./loading";
import KanalListesi from "@/app/(movies)/yayinakislari/page";
import YayinAkislari from "@/components/Category/YayinAkislari";
export default function Home() {
  return (
    <>
      <HeaderOne isHero={true} />

      <main className="main">
        <Ekoturk
          channel_id={process.env.EKOTURK_CHANNEL_ID}
          channel_name="Ekoturk"
        />
        <TrendingOne
          channel_id={process.env.BLOOMBERG_CHANNEL_ID}
          channel_name="Bloomberg HT"
        />

        <LiveStreamingFeature />

        <TrendingOne
          channel_id={process.env.CNBC_CHANNEL_ID}
          channel_name="CNBC"
        />

        {/*    <PopularOne />
        <CategoryOne /> */}
        {/*       <WeeklyPopularOne /> */}
        {/*  <MovieSliderOne /> */}
        {/*     <OurOriginalOne /> */}
        <YayinAkislari />
        <TrendingOne
          channel_id={process.env.EKOTURK_CHANNEL_ID}
          channel_name="EKOTURK"
        />
      </main>
      <FooterOne />
    </>
  );
}
