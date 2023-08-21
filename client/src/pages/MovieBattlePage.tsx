import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../services/types";
import { getRandomMovies } from "../services/api";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MovieInfoButton from "../components/MovieInfoButton";
import LikeButton from "../components/LikeButton";
import BattlePageLoading from "../components/loadingStyles/BattlePageLoading";

const selectTwoRandomMovies = (movies: Movie[]) => {
  const randomIndices: number[] = [];

  while (randomIndices.length < 2 && movies.length > 0) {
    const randomIndex = Math.floor(Math.random() * movies.length);

    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  const randomMovies = randomIndices.map((index) => movies[index]);
  return randomMovies;
};

const MovieBattlePage = () => {
  const { isLoading, error, data } = useQuery<Movie[]>(
    ["movies"],
    getRandomMovies
  );
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      setSelectedMovies(selectTwoRandomMovies(data));
    }
  }, [isLoading, error, data]);

  const handlePreferedMovie = async (
    selectedMovie: Movie,
    otherMovie: Movie
  ) => {
    try {
      const response = await axios.post("http://localhost:3030/api/movie", {
        id: selectedMovie.id,
        otherMovieId: otherMovie.id,
      });

      if (response.status === 200) {
        console.log("Movie rank updated");
      } else {
        console.log("Error updating movie rank");
      }
    } catch (error) {
      console.error("Server error", error);
    }

    if (data) {
      setSelectedMovies(selectTwoRandomMovies(data));
    }
    // window.location.reload();
  };

  if (isLoading) {
    return <BattlePageLoading />;
  }

  if (error) {
    return <p>An error has occurred</p>;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-auto h-[44.6rem] bg-[#457b9d]">
      <div className="font-extrabold text-7xl mb-10 text-slate-300">
        Battle-Royal
      </div>
      <div className="flex flex-row justify-center items-center">
        {selectedMovies.length === 2 ? (
          <>
            <div className="flex flex-col">
              <div
                onClick={() =>
                  handlePreferedMovie(selectedMovies[0], selectedMovies[1])
                }
              >
                <MovieCard movie={selectedMovies[0]} />
              </div>
              <div className="flex justify-evenly p-4">
                <LikeButton movie={selectedMovies[0]} />
                <MovieInfoButton movie={selectedMovies[0]} />
              </div>
            </div>
            <span className="mx-4 font-extrabold text-700 text-4xl text-red-800">
              V/S
            </span>
            <div className="flex flex-col">
              <div
                onClick={() =>
                  handlePreferedMovie(selectedMovies[1], selectedMovies[0])
                }
              >
                <MovieCard movie={selectedMovies[1]} />
              </div>
              <div className="flex justify-evenly p-4">
                <LikeButton movie={selectedMovies[1]} />
                <MovieInfoButton movie={selectedMovies[1]} />
              </div>
            </div>
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default MovieBattlePage;
