import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";
import { MovieDetails } from "../services/types";
import { Link } from "react-router-dom";

const BattleCard: React.FC<{ movieId1: number; movieId2: number }> = ({
  movieId1,
  movieId2,
}) => {
  const { data: movieData1, isLoading: isLoading1, error: error1 } = useQuery(
    ["movie", movieId1],
    () => getMovieDetails(movieId1)
  );
  const { data: movieData2, isLoading: isLoading2, error: error2 } = useQuery(
    ["movie", movieId2],
    () => getMovieDetails(movieId2)
  );

  if (isLoading1 || isLoading2)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );

  if (error1 || error2) return <p>Error fetching movie details</p>;

  const movie1Details = movieData1 as MovieDetails | undefined;
  const movie2Details = movieData2 as MovieDetails | undefined;

  return (
    <div className="bg-gray-900 rounded-md shadow-lg p-4 m-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie1Details?.poster_path}`}
            alt={`${movie1Details?.title} Poster`}
            className="w-24 h-32 object-cover rounded-md"
          />
          <div className="border-l-4 border-red-600 pl-4">
            <p className="font-bold text-xl text-white">{movie1Details?.title}</p>
            {/* <p className="text-gray-400">{movie1Details?.overview}</p> */}
          </div>
        </div>
        <div className="w-2 h-40 bg-gradient-to-b from-red-600 to-red-800 transform -skew-x-12"></div>
        <div className="flex items-center space-x-4">
          <div className="border-r-4 border-red-600 pr-4">
            <p className="font-bold text-xl text-white">{movie2Details?.title}</p>
            {/* <p className="text-gray-400">{movie2Details?.overview}</p> */}
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie2Details?.poster_path}`}
            alt={`${movie2Details?.title} Poster`}
            className="w-24 h-32 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-4">
        <Link
          to={`/battle/${movieId1}/${movieId2}`}
          className="text-red-600 hover:underline"
        >
          Join the Epic Battle! Express Your Opinion and see opinions of others.
        </Link>
      </div>
    </div>
  );
};

export default BattleCard;
