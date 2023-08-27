import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const BattlePageLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#457b9d]">
      <div className="font-extrabold text-7xl mb-10 text-slate-300">
        <Skeleton width={300} height={70} />
      </div>
      <div className="flex flex-row justify-center items-center">
        <div>
          <div>
            <Skeleton height={320} width={220} />
            <div className="flex justify-evenly p-4">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
        </div>
        <span className="mx-4 font-extrabold text--700 text-4xl">
          <Skeleton height={50} width={50}/>
        </span>
        <div>
          <div>
            <Skeleton height={320} width={220} />
            <div className="flex justify-evenly p-4">
              <Skeleton className="w-6 h-6" />
              <Skeleton className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePageLoading;
