import axios from "axios";

export async function GET(req, { params }) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${params.channel_id}&part=snippet&order=date&maxResults=10`;
  try {
    const playlistResponse = await axios.get(playlistUrl);
    const playlistsData = playlistResponse.data;

    if (!playlistsData.items) {
      return new Response(
        JSON.stringify({ message: "Oynatma listesi bulunamadı." }),
        { status: 404 }
      );
    }
    let id = 3;
    console.log("items-list", playlistsData.items[0].id);

    // Listenin başına eleman ekleme
    /*     trendingOneMoviesData.items.unshift(manualMovie);
     */
    console.log(playlistsData.items);
    const trendingOneMoviesData = playlistsData.items.map((playlist) => ({
      image: playlist.snippet.thumbnails.high, // Resim verisi yoksa sabit resim kullan
      isRibbon: true, // Sabit değer
      count: id++, // Sabit değer
      videoSrc: "", // Sabit değer
      href: `https://www.youtube.com/watch?v=${playlist.id.videoId}`, // Dynamic href using videoId
      title: playlist.snippet.title, // API'den gelen 'name' değeri
      rating: "", // API'den gelen 'rating' değeri (boş olabilir)
      duration: "", // API'den gelen 'duration' değeri (boş olabilir)
      quality: "", // API'den gelen 'quality' değeri (boş olabilir)
      categories: [], // API'den gelen 'categories' dizisi
    }));
    const manualMovie = {
      image: {
        url: "https://i.ytimg.com/vi/0MUAGZstrUc/hqdefault.jpg",
        width: 320,
        height: 180,
      }, // Sabit bir resim
      isRibbon: true, // Sabit değer
      count: 1, // Sabit değer
      videoSrc: "", // Sabit değer
      href: "https://www.youtube.com/watch?v=0MUAGZstrUc", // Sabit bir video URL
      title: "Salim Yiğit | Ahu Orakçıoğlu | Sanayi ve Ticaret", // Manuel başlık
      rating: "5.0", // Manuel rating
      duration: "20min", // Manuel süre
      quality: "HD", // Manuel kalite
      categories: [], // Manuel kategoriler
    };
    const manualMovie2 = {
      image: {
        url: "https://i.ytimg.com/vi/aUFUXSXyYDM/hqdefault.jpg",
        width: 320,
        height: 180,
      }, // Sabit bir resim
      isRibbon: true, // Sabit değer
      count: 2, // Sabit değer
      videoSrc: "", // Sabit değer
      href: "https://www.youtube.com/watch?v=aUFUXSXyYDM", // Sabit bir video URL
      title:
        "Gün Ortası | Özarslan Tangün | Yasemin Mıstıkoğlu | Ahu Orakçıoğlu", // Manuel başlık
      rating: "5.0", // Manuel rating
      duration: "20min", // Manuel süre
      quality: "HD", // Manuel kalite
      categories: [], // Manuel kategoriler
    };

    trendingOneMoviesData.unshift(manualMovie2);
    trendingOneMoviesData.unshift(manualMovie);
    return new Response(JSON.stringify(trendingOneMoviesData), { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ message: "Error fetching data." }), {
      status: 500,
    });
  }
}
