import React from "react";
import { MovieProp } from "../services/types";

const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Replace with your actual TMDb API key


const MovieCard: React.FC<MovieProp> = ({ movie }) => {
  console.log(movie);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-60">
      <img
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}?api_key=${apiKey}`}
        alt={movie.title}
        className="w-full h-64 object-fill rounded-md mb-4"
      />

      <h1 className="text-xl font-semibold h-14 overflow-hidden mb-2 break-words">{movie.title}</h1>

      {/* <p className="text-gray-600 text-sm mb-1">Genre: {movie?.genres?.map(genre => genre.name).join(", ")}</p> */}
      <p className="text-gray-600 text-sm mb-1">Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
