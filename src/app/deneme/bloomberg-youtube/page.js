"use client";
import { useState, useEffect } from "react";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch("/api/bloomberg-youtube");
        if (response.ok) {
          const data = await response.json();
          setPlaylists(data || []); // items array mi kontrol ediliyor.
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (err) {
        setError("Veri alınırken bir hata oluştu.");
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h1>YouTube Oynatma Listeleri</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {Array.isArray(playlists) && playlists.length > 0 ? (
            playlists.map((playlist) => (
              <li key={playlist.id}>
                <h3>{playlist.snippet.title}</h3>
                <p>{playlist.snippet.description}</p>
                {playlist.snippet.thumbnails && (
                  <img
                    src={playlist.snippet.thumbnails.default}
                    alt={playlist.snippet.title}
                  />
                )}
              </li>
            ))
          ) : (
            <p>Oynatma listesi bulunamadı.</p>
          )}
        </ul>
      )}
    </div>
  );
}
