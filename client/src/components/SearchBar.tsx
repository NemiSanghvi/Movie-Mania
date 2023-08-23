import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { queryMovie } from "../services/api";
import { Movie } from "../services/types";

interface SearchBarProps {
  onClose: () => void;
  onSelectMovie:  (movie : Movie ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose, onSelectMovie }) => {
  const [movieQuery, setMovieQuery] = useState("");
  const {
    data: movieList,
    isLoading,
    error,
  } = useQuery<Movie[]>(["search", movieQuery], () => queryMovie(movieQuery), {
    enabled: !!movieQuery,
  });

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const handleMovieSelect = (movie: Movie) => {
    onSelectMovie(movie);
    onClose()
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[60rem] justify-center">
        <div className="flex justify-center items-center p-8">
          <div className="p-5">
            <Search color="grey" size={36} />
          </div>
          <input
            className="text-[#e63946] bg-[#457b9d] font-bold text-3xl font-mono p-5 rounded-full w-[50rem] items-center md  :w-15"
            placeholder="Barbie"
            value={movieQuery}
            onChange={(e) => setMovieQuery(e.target.value)}
          />
        </div>
        {isLoading && !!movieQuery ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading movies.</div>
        ) : Array.isArray(movieList) && movieList.length > 0 ? (
          <div className="flex justify-center bg-gray-400 items-center">
            <ul className="h-96 overflow-auto">
              {movieList.map((movie) => (
                <li key={movie.id} className="p-5" onClick={() => handleMovieSelect(movie)}>
                  <div className="flex flex-row">
                    <div className="px-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}?api_key=${apiKey}`}
                        alt={`${movie.title} poster`}
                        className="w-15 h-20 object-fill rounded-md"
                      />
                    </div>
                    <div className="font-mono text-2xl items-center flex">
                      {movie.title}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : movieQuery ? (
          <div>No results found.</div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
