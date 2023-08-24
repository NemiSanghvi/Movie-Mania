import { useQuery } from '@tanstack/react-query'
import { getBattles } from '../services/api'
import BattleCard from '../components/BattleCard';

const BattleArenaPage = () => {
  const { data: battles, isLoading, error } = useQuery(['battles'], () => getBattles())

  if (isLoading) return <div>Loading Battles</div>;

  if (error) return <div>Error occurred</div>;

  return (
    <div className='bg-[#457b9d] p-5'>
      {battles.length > 0 ? (
        battles.map((battle: any) => (
          <div key={battle.id}>
            {/* <MovieCard2 movieId={battle.movie1Id} />
            <MovieCard2 movieId={battle.movie2Id} /> */}
            <BattleCard movieId1={battle.movie1Id} movieId2={battle.movie2Id} battleID={battle.id} />
          </div>
        ))
      ) : (
        <p>No Battles exist! Create one</p>
      )}
    </div>
  );
};

export default BattleArenaPage;
