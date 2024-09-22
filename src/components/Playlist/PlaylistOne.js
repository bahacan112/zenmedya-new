import Link from "next/link";

import MovieListCard from "../Card/MovieListCard";

export default function PlaylistOne(props) {
  const playlistMoviesData = props.data;
  console.log(props);
  return (
    <div className="playlist-area container py-80">
      <div className="nav nav-tabs border-0 d-flex align-items-center justify-content-start gap-4 mb-4">
        <Link
          className="active hl-btn lh-1 gradient-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
          data-bs-toggle="tab"
          href="#home"
        >
          <span className="pt-1">movies list</span>
        </Link>
        <Link
          className="hl-btn lh-1 trans-btn fs-18 fw-bold flex-shrink-0 text-uppercase"
          data-bs-toggle="tab"
          href="#menu1"
        >
          <span className="pt-1">tv shows</span>
        </Link>
      </div>

      <div className="tab-content">
        <div className="tab-pane container active" id="home">
          <p className="description fs-20 fw-medium lh-1">
            TV kanalının Videoları
          </p>
          {playlistMoviesData && playlistMoviesData.length > 0 && (
            <div className="playlist mt-4">
              {playlistMoviesData.map((movie, index) => (
                <MovieListCard key={index} movie={movie} />
              ))}
            </div>
          )}
        </div>
        <div className="tab-pane container fade" id="menu1">
          <p className="description fs-20 fw-medium lh-1">
            Displaying all favorite tv shows
          </p>
          <div className="playlist mt-4">
            {/* {playlistTvShowsData && playlistTvShowsData.length > 0 && (
              <div className="playlist mt-4">
                {playlistTvShowsData.map((movie, index) => (
                  <MovieListCard key={index} movie={movie} />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
