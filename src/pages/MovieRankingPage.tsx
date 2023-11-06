import { useQuery } from "@tanstack/react-query";
import { getMovieId } from "../services/api";
import MovieCard2 from "../components/MovieCard2";
import { MovieID } from "../services/types";
import "../App.css";
import RankingPageLoading from "../components/loadingStyles/RankingPageLoading";
import { motion } from "framer-motion";
import ErrorIcon from "../assets/browser-error-404-icon.svg";

const MovieRankingPage = () => {
  const {
    data: movieList,
    isLoading: isLoadingMovieList,
    error: errorMovieList,
  } = useQuery(["movieList"], async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return getMovieId();
  });
  if (isLoadingMovieList) return <RankingPageLoading />;
  if (errorMovieList) return <p>Error fetching movie list</p>;

  return (
    <div className="bg-[#457b9d] p-8">
      <h2 className="flex justify-center items-center font-extrabold text-3xl sm:text-7xl font-epic text-[#e63946] p-5">
        Top Movies to Watch Right Now!!
      </h2>
      {movieList ? (
        movieList.map((movie: MovieID) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <MovieCard2 movieId={movie.movie_id} />
          </motion.div>
        ))
      ) : (
        <p className="w-20 h-20">
          <img src={ErrorIcon} alt="" />
          No movies found.
        </p>
      )}
    </div>
  );
};

export default MovieRankingPage;
