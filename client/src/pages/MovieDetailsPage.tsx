import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";
import { MovieDetailsPageType } from "../services/types";

const MovieDetailsPage = () => {
  const { id } = useParams();
  if (!id) {
    return <div>This movie doesn't exist!</div>;
  }
  const movie_id = parseInt(id);
  const { data, isLoading, error } = useQuery([movie_id?.toString()], () =>
    getMovieDetails(movie_id)
  );

  const movieData = data as MovieDetailsPageType | undefined;

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

  return (
    <div className="bg-gray-900 text-white">
      <div
        className="h-[300px] lg:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
        }}
      ></div>
      <div className="p-4 lg:p-12">
        <div className="flex items-center mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={`${movieData.title} Poster`}
            className="w-28 h-auto rounded-md shadow-lg mr-4"
          />
          <div>
            <h1 className="text-2xl lg:text-4xl font-semibold mb-2">{movieData.title}</h1>
            <p className="text-sm text-gray-300">{movieData?.tagline}</p>
          </div>
        </div>
        <p className="text-gray-300 mb-2">
          {movieData?.runtime} mins |{" "}
          {movieData?.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p className="text-sm">{movieData.overview}</p>
        <div className="mt-6">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}
            className="px-6 py-2 bg-yellow-500 rounded-full text-center text-black text-sm"
          >
            For Additional Info, Check out IMDB
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
