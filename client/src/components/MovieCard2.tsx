import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";
import { MovieCardProp2, MovieDetails } from "../services/types";
import { Link } from "react-router-dom";
import "../App.css";

const MovieCard2: React.FC<MovieCardProp2> = ({ movieId }) => {
  const { data, isLoading, error } = useQuery([movieId], () =>
    getMovieDetails(movieId)
  );
  const movieDetails = data as MovieDetails | undefined;

  // const redirectToMoviePage = (selectedMovieId : number) => {
  //   <Navigate to={`/movie/${selectedMovieId}`} replace={true} />
  //   // alert(selectedMovieId)
  // }

  if (isLoading)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  if (error) return <p>Error fetching movie details</p>;
  if (!movieDetails) return <p>Movie details not available</p>;

  // onClick={() => redirectToMoviePage(movieId)}
  return (
    <Link to={`/movie/${movieId}`}>
      <div className="flex bg-slate-700 bg-opacity-40 backdrop-blur-md border p-4 m-4">
        <img
          src={`https://image.tmdb.org/t/p/w300${movieDetails?.poster_path}`}
          alt={`${movieDetails?.title} Poster`}
          className="w-auto h-32 object-contain mr-4"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-white">{movieDetails?.title}</h2>
          <p className="mb-2 text-slate-300">{movieDetails?.overview}</p>
          <p className="text-gray-500">
            Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard2;
