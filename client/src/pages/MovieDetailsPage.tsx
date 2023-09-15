import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";
import { MovieDetailsPageType } from "../services/types";
import YouTube from "react-youtube";
import CastCard from "../components/CastCard";
import { useState } from "react";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie_id = parseInt(id || "");
  const { data, isLoading, error } = useQuery([movie_id?.toString()], () =>
    getMovieDetails(movie_id)
  );

  const movieData = data as MovieDetailsPageType | undefined;

  const [displayCastCount, setDisplayCastCount] = useState(9);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error fetching movie details</p>
      </div>
    );
  }

  if (!movieData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Movie details not available</p>
      </div>
    );
  }

  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
    filter: "blur(7px)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    opacity: "0.5",
  };

  const movieTrailer = movieData?.videos?.results?.find(
    (video) => video.name === "Official Trailer"
  );

  const opts = {
    height: "200",
    width: "350",
  };

  const showMoreCast = () => {
    console.log("show more cast");
    console.log(displayCastCount);
    setDisplayCastCount(displayCastCount + 9);
  };

  return (
    <div className="relative bg-gray-900 text-white font-poppins">
      <div style={backgroundStyle}></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-4">
          <img
            src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
            alt={`${movieData.title} Poster`}
            className="w-56 h-auto lg:h-80 rounded-md shadow-lg mr-0 lg:mr-4"
          />
          {movieTrailer ? (
            <div className="py-4">
              <YouTube videoId={movieTrailer.key} opts={opts} />
            </div>
          ) : (
            <p className="text-gray-300">No official trailer available</p>
          )}
        </div>
        <div className="p-6">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}
            className="px-6 py-2 bg-gray-200 rounded-full text-center text-black text-lg text-bold block w-full lg:w-auto lg:inline-block"
          >
            For Additional Info, Check out IMDB
          </a>
        </div>
      </div>
      {/* Movie Details Section */}
      <div className="relative z-10 p-4 lg:p-6">
        <section className="mt-8">
          <div className="mt-4 lg:mt-0">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center lg:text-left">
              {movieData.title}
            </h1>
            <p className="text-lg text-gray-300 py-4 text-center lg:text-left">
              {movieData?.tagline}
            </p>
            <p className="text-gray-300 mb-2 text-center lg:text-left font-semibold text-lg">
              {movieData?.runtime} mins |{" "}
              {movieData?.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-xl p-4 sm:p-0">{movieData.overview}</p>
          </div>
        </section>
      </div>
      {/* Casts Section */}
      <section className="p-6">
        <h2 className="text-4xl font-bold text-gray-300 mb-4">Casts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {movieData.credits.cast.slice(0, displayCastCount).map((actor) => (
            <div key={actor.id} className="p-4">
              <CastCard actor={actor} />
            </div>
          ))}
        </div>
        {displayCastCount < movieData.credits.cast.length && (
          <button
            onClick={showMoreCast}
            type="button"
            className="mt-4 px-4 py-2 bg-yellow-500 rounded-full text-center text-black text-lg font-bold cursor-pointer"
          >
            Show More Cast Members
          </button>
        )}
      </section>
    </div>
  );
};

export default MovieDetailsPage;
