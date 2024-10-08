import Link from "next/link";
import Image from "next/image";
import starIcon from "@/../public/assets/images/icons/card/star-stroke.svg";
import clockIcon from "@/../public/assets/images/icons/card/clock-stroke.svg";
import qualityIcon from "@/../public/assets/images/icons/card/4k-stroke.svg";

export default function MovieCard({ movie }) {
  return (
    <a href={movie.href} target="_blank">
      <div className="movie-card-small position-relative">
        {/* <!-- Card Thumbnail --> */}

        {movie.image && movie.image.url ? (
          <Image
            src={movie.image.url}
            alt="card-img"
            className="w-100"
            width={movie.image.width}
            height={movie.image.height}
          />
        ) : (
          <div className="placeholder-image">No Image Available</div>
        )}

        {/* <!-- Card Badge --> */}
        {movie.isRibbon && (
          <div className="movie-badge position-absolute">
            <span>{movie.count}</span>
          </div>
        )}
        {/* <!-- Play Button --> */}
        {/* <VideoOne src={movie.videoSrc} /> */}
        {/* <!-- Movie Details --> */}
        <div className="details position-absolute text-center">
          <h4 className="movie-name text-uppercase fw-normal">{movie.title}</h4>
          <ul className="movie-info">
            <li>
              <Image src={starIcon} alt="star" />
              <span>{movie.rating}</span>
            </li>
            <li>
              <Image src={clockIcon} alt="clock" />
              <span>{movie.duration}</span>
            </li>
            <li>
              <Image src={qualityIcon} alt="4k" />
              <span>{movie.quality} Quality</span>
            </li>
          </ul>
          {movie.categories && movie.categories.length > 0 && (
            <ul className="movie-type">
              {movie.categories.map((category, index) => (
                <li key={index}>
                  {category}
                  {index < movie.categories.length - 1 ? ", " : ""}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  );
}
