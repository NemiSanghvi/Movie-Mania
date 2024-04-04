import axios, { AxiosResponse } from "axios";
import { Movie, MovieDetails } from "./types";

const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Replace with your actual TMDb API key

const getRandomMovies = async (): Promise<Movie[]> => {
  try {
    const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching random movies:", error);
    throw error;
  }
};

const getMovieDetails = async (movie_id: number): Promise<MovieDetails[]> => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&append_to_response=videos,credits,images`
    );
    const movieDetails = response.data;
    return movieDetails;
  } catch (error) {
    console.error("Error Fetching Movie Details");
    throw error;
  }
};

const getMovieId = async () => {
  const response = await axios.get("https://mm-server-dd9o.onrender.com/api/movie");

  const movieList = response.data;

  return movieList;
};

const getBattles = async() => {
  const response = await axios.get("https://mm-server-dd9o.onrender.com/api/arena-battles");

  const battles = response.data;

  return battles;
} 


const queryMovie = async (movieQuery: string) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieQuery}`);
    const movieList = await response.data.results;
    return movieList;
  } catch (error) {
    console.log("Error Searching for Movies")
    throw error;
  }
};

export { getRandomMovies, getMovieDetails, getMovieId, queryMovie, getBattles };
