interface Genre {
  id: number;
  name: string
}

export interface Movie {
  id: number;
  title: string;
  // tagline: string;
  // genres: Genre[];
  release_date: string;
  poster_path: string;
}

export interface MovieProp {
  movie: Movie;
}

export interface MovieID {
  movie_id: number,
  rating: number
}

export interface MovieCardProp2 {
  movieId: number;
}

export interface MovieDetails {
  title: string;
  overview: string;
  genres: Genre[];
  poster_path: string
  backdrop_path: string;
}

export interface MovieDetailsPageType {
  backdrop_path: string;
  poster_path: string
  genres: Genre[];
  tagline: string;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  status: string;
  imdb_id: string;
}

export interface Battle {
  id:number;
  movie1Id: number;
  movie2Id: number
}