import HeroSlideImageOne from "@/../public/assets/images/hero/hero-slide-1.webp";
import HeroSlideImageTwo from "@/../public/assets/images/hero/hero-slide-2.webp";

import HeroCardSlideImageOne from "@/../public/assets/images/hero/1.webp";
import HeroCardSlideImageTwo from "@/../public/assets/images/hero/2.webp";
import HeroCardSlideImageThree from "@/../public/assets/images/hero/3.webp";

import HeroTwoSlideBgImage from "@/../public/assets/images/hero/home_two-hero-bg.webp";
import HeroTwoSlideImageOne from "@/../public/assets/images/hero/ht-banner-img-1.webp";

const heroOneData = {
  slides: [
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "Web Sitesi Tasarım",
      description:
        "Hedef Kitlenize uygun şık tasarımlar, İnternet Reklamcılığı ile nokta atışı müşterilerinize ulaşın",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },

    /*   {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageTwo,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "The Dark Beauty",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "ENIGM OF SHADOWS",
      description:
        "Enjoy your favorite moves, tv show, sports, news, Live event and entertainment streaming now!",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    }, */
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageOne,
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      title: "Bilboard Reklam",
      description: "Avrupa'da ve Afrika'da geniş kitlelere ulaşın",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      image: HeroSlideImageTwo,
      rating: "4 Milyon İzlenme",
      duration: "25-30 dakika",
      quality: "1080p",
      title: "TV de Markanızı Tanıtın!",
      description: "TV Canlı Yayınlara konukluğu,Alt Bant Reklam, Spot Reklam ",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
  ],
  cardSlides: [
    {
      image: HeroCardSlideImageOne,
      title: "Canlı Yayın Konukluğu",
      description: "Bloomberg HT,CNN Türk, Ekotürk, A Haber",
    },
    {
      image: HeroCardSlideImageTwo,
      title: "The Dark Night",
      description: "Action Movies",
    },
    {
      image: HeroCardSlideImageThree,
      title: "ENIGMA OF SHADOWS",
      description: "Action Movies",
    },
  ],
};

const heroTwoData = {
  slides: [
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "THE LORD OF THE RING",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "Ark man of earth",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
    {
      videoSrc: "assets/video/video.mp4",
      bgImage: HeroTwoSlideBgImage,
      image: HeroTwoSlideImageOne,
      title: "Guardians of Galaxy",
      description: "The Lord of the rings is a trilogy of epic fantasy",
      rating: "4.9",
      duration: "02h 30m",
      quality: "4k",
      btnOneText: "Teklif Alın",
      btnTwoText: "Bize Ulaşın",
    },
  ],
};

const heroThreeData = {
  title: "The monkey king",
  review: "4.9",
  duration: "02h 30m",
  quality: "4k",
  downloadBtnText: "Download Now",
  addToListBtnText: "Add to List",
};

export { heroOneData, heroTwoData, heroThreeData };
