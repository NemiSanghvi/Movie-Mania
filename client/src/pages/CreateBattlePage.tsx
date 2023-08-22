import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { Search } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { queryMovie } from "../services/api";
import { Movie } from "../services/types";

const CreateBattlePage = () => {
  const [movieQuery, setMovieQuery] = useState("");
  const {
    data: movieList,
    isLoading,
    error,
  } = useQuery<Movie[]>(["search", movieQuery], () => queryMovie(movieQuery), {
    enabled: !!movieQuery,
  });

  return (
    <div>
      <div className="bg-red-600">
        <div className="flex justify-center items-center p-8">
          <div className="p-5">
            <Search color="grey" size={36} />
          </div>
          <input
            className="text-[#e63946] bg-[#457b9d] font-bold text-3xl font-mono p-5 rounded-full w-[50rem] items-center"
            placeholder="Barbie"
            value={movieQuery}
            onChange={(e) => setMovieQuery(e.target.value)}
          />
        </div>
        {isLoading && !!movieQuery? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : Array.isArray(movieList) && movieList.length > 0 ? (
          <div className="flex justify-center bg-green-600 items-center">
            <ul>
              {movieList.map((movie) => (
                <li key={movie.id} className="p-5">{movie.title}</li>
              ))}
            </ul>
          </div>
        ) : movieQuery ?(
          <div>No results found.</div>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-row justify-center">
        <div>Card 1</div>
        <span>VS</span>
        <div>Card 2</div>
      </div>
    </div>
  );
};

export default CreateBattlePage;
