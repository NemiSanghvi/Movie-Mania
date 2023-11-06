import React from "react";

interface Actor {
  name: string;
  character: string;
  profile_path: string;
  // Add other properties as needed
}

interface CastCardProp {
  actor: Actor;
}
const CastCard: React.FC<CastCardProp> = ({ actor }) => {
  return (
    <>
      <div className="h-40 w-64 flex">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={`${actor.name} Poster`}
            className="w-28 h-40 rounded-full object-fit"
          />
        ) : (
          <img
            src="https://via.placeholder.com/150"
            className="w-28 h-40 rounded-full object-fit"
          />
        )}

        <div className="flex flex-col justify-centre ml-4 mt-2">
          <p className="text-gray-300 text-lg font-bold mb-2">
            {actor.character}
          </p>
          <p className="text-gray-500 text-base font-semibold">{actor.name}</p>
        </div>
      </div>
    </>
  );
};

export default CastCard;
