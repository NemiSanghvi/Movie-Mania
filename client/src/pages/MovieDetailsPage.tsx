import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../services/api";
import { MovieDetailsPageType } from "../services/types";

const MovieDetailsPage = () => {
  const { id } = useParams();
  if(!id) {
    return (
      <div>This movie doen't exist!</div>
    )
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
    <>
      <div
        className="absolute top-0 left-0 w-full h-full bg-slate-600 bg-opacity-60 backdrop-blur-lg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieData.backdrop_path})`,
          backgroundSize: "cover",
          filter: "blur(5px)",
        }}
      ></div>
      <div className="text-white">
        <div className="flex pl-20 pr-20 h-[21rem] relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={`${movieData.title} Poster`}
            className="w-60 h-[24rem] object-contain relative z-10 ml-[3rem]"
          />
          {/* <img
            src={`https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}`}
            alt={`${movieData.title} Backdrop`}
            className="w-full h-auto object-fit mt-2"
          /> */}
        </div>
        <div className="flex flex-col p-10 mx-16 bg-slate-700 bg-opacity-40 backdrop-blur-md">
          <h1 className="text-3xl font-semibold mb-2">{movieData.title}</h1>
          <span className="text-lg mb-2">{movieData?.tagline}</span>
          <p className="mb-1">
            {movieData?.runtime} mins |{" "}
            {movieData?.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="mb-2">Release Date: {movieData.release_date}</p>
          <p className="">{movieData.overview}</p>
          <div className="px-16">
            <a
              rel="noopener nonrefferer"
              target="_blank"
              href={`https://www.imdb.com/title/${movieData?.imdb_id}/`}
              className="block px-8 py-2 bg-yellow-500 rounded-full text-center mt-4 text-black"
            >
              For Additional Info, Check out IMDB
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
