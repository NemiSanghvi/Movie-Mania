import React, { useState, useRef, useEffect } from "react";
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    data: movieList,
    isLoading,
    error,
  } = useQuery<Movie[]>(["search", movieQuery], () => queryMovie(movieQuery), {
    enabled: !!movieQuery,
  });

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const handleMovieSelect = (movie: Movie) => {
    onSelectMovie(movie);
    onClose()
  };



  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-screen-lg w-full mx-auto">
        <div className="flex justify-center items-center p-4">
          <div className="p-5">
            <Search color="grey" size={36} />
          </div>
          <input
            ref={inputRef}
            className="text-[#e63946] bg-[#457b9d] font-bold text-3xl font-mono p-2 md:p-5 rounded-full w-full md:w-[50rem] items-center"
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
          <div className="bg-gray-400 p-4 md:p-8 overflow-hidden">
            <ul className="max-h-[70vh] overflow-auto">
              {movieList.map((movie) => (
                <li
                  key={movie.id}
                  className="p-2 md:p-5 cursor-pointer"
                  onClick={() => handleMovieSelect(movie)}
                >
                  <div className="flex flex-row items-center">
                    <div className="px-2 md:px-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}?api_key=${apiKey}`}
                        alt={`${movie.title} poster`}
                        className="w-15 h-20 object-fill rounded-md"
                      />
                    </div>
                    <div className="font-mono text-sm md:text-2xl flex-grow">
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
