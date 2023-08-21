import { useQuery } from "@tanstack/react-query";
import { getMovieId } from "../services/api";
import MovieCard2 from "../components/MovieCard2";
import { MovieID } from "../services/types";
import '../App.css'
import RankingPageLoading from "../components/loadingStyles/RankingPageLoading";

const MovieRankingPage = () => {
  const { data: movieList, isLoading: isLoadingMovieList, error: errorMovieList } = useQuery(
    ["movieList"],
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return getMovieId(); 
    }
  );
  if (isLoadingMovieList)  return (
    <RankingPageLoading />
  );
  if (errorMovieList) return <p>Error fetching movie list</p>;

  return (
    <div className="bg-slate-800 p-8">
      <h2 className="flex justify-center items-center font-bold text-6xl font-satoshi">Top Movies to Watch Right Now!!</h2>
      {movieList ? (
        movieList.map((movie: MovieID) => (
          <MovieCard2 movieId={movie.movie_id}/>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};



export default MovieRankingPage;
