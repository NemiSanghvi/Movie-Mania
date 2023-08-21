import axios, { AxiosResponse } from "axios";
import { Movie, MovieDetails } from "./types";

const apiKey = import.meta.env.VITE_TMDB_API_KEY; // Replace with your actual TMDb API key

const getRandomMovies = async (): Promise<Movie[]> => {
  try {
    
    const response: AxiosResponse<{results: Movie[]}> = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching random movies:", error);
    throw error;
  }
};

const getMovieDetails = async(movie_id : number): Promise<MovieDetails[]> => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`)
    const movieDetails = response.data;
    return movieDetails;
  } catch (error) {
    console.error("Error Fetching Movie Details");
    throw error;
  }
}

const getMovieId = async() => {
  const response = await axios.get('http://localhost:3030/api/movie')

  const movieList = response.data;

  return movieList;
}

export { getRandomMovies, getMovieDetails, getMovieId };


