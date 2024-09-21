import axios from "axios";

export async function GET(req, { params }) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${params.channel_id}&maxResults=10&key=${apiKey}`;

  try {
    const playlistResponse = await axios.get(playlistUrl);
    const playlistsData = playlistResponse.data;

    if (!playlistsData.items) {
      return new Response(
        JSON.stringify({ message: "Oynatma listesi bulunamadı." }),
        { status: 404 }
      );
    }
    let id = 1;
    const trendingOneMoviesData = playlistsData.items.map((playlist) => ({
      image: playlist.snippet.thumbnails.standard, // Resim verisi yoksa sabit resim kullan
      isRibbon: true, // Sabit değer
      count: id++, // Sabit değer
      videoSrc: "", // Sabit değer
      href: `https://www.youtube.com/playlist?list=${playlist.id}`, // Sabit değer
      title: playlist.snippet.title, // API'den gelen 'name' değeri
      rating: "", // API'den gelen 'rating' değeri (boş olabilir)
      duration: "", // API'den gelen 'duration' değeri (boş olabilir)
      quality: "", // API'den gelen 'quality' değeri (boş olabilir)
      categories: [playlist.snippet.description], // API'den gelen 'categories' dizisi
    }));

    return new Response(JSON.stringify(trendingOneMoviesData), { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return new Response(JSON.stringify({ message: "Error fetching data." }), {
      status: 500,
    });
  }
}
