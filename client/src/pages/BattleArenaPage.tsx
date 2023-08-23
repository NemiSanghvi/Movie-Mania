import { useQuery } from '@tanstack/react-query'
import { getBattles } from '../services/api'
import MovieCard2 from '../components/MovieCard2';
import BattleCard from '../components/BattleCard';

const BattleArenaPage = () => {
  const { data: battles, isLoading, error } = useQuery(['battles'], () => getBattles())

  if (isLoading) return <div>Loading Battles</div>;

  if (error) return <div>Error occurred</div>;

  return (
    <div>
      {battles.length > 0 ? (
        battles.map((battle: any) => (
          <div key={battle.id}>
            {/* <MovieCard2 movieId={battle.movie1Id} />
            <MovieCard2 movieId={battle.movie2Id} /> */}
            <BattleCard movieId1={battle.movie1Id} movieId2={battle.movie2Id} />
          </div>
        ))
      ) : (
        <p>No Battles exist! Create one</p>
      )}
    </div>
  );
};

export default BattleArenaPage;
