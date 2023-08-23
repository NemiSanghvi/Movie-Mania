import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBattles, getMovieDetails, getMovieId } from '../services/api'

const BattleArenaPage = () => {
  const { data: battles, isLoading, error } = useQuery(['battles'], () => getBattles())

  if (isLoading) return <div>Loading Battles</div>;

  if (error) return <div>Error occurred</div>;

  return (
    <div>
      {battles.length > 0 ? (
        battles.map((battle: any) => (
          <div key={battle.id}>
            <h3>Battle {battle.id}</h3>
            <p>Movie 1: {battle.movie1Id}</p>
            <p>Movie 2: {battle.movie2Id}</p>
            {/* <MovieInfo movieId={battle.movie1Id} />
            <MovieInfo movieId={battle.movie2Id} /> */}
          </div>
        ))
      ) : (
        <p>No Battles exist! Create one</p>
      )}
    </div>
  );
};

// const MovieInfo = ({ movieId }: { movieId: number }) => {
//   const { data: movie, isLoading, error } = useQuery(['movie', movieId], () =>
//     getMovieDetails(movieId)
//   );

//   if (isLoading) return <p>Loading Movie info...</p>;
//   if (error) return <p>Error fetching movie info</p>;

//   return (
//     <div>
//       <p>Movie ID: {movie.id}</p>
//       <p>Title: {movie.title}</p>
//       <p>Rating: {movie.rating}</p>
//       {/* Add more movie info fields here */}
//     </div>
//   );
// };

export default BattleArenaPage;
