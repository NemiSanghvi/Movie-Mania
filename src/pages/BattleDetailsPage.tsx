import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { MovieDetailsPageType } from "../services/types";
import CommentSection from "../components/CommentSection";

interface BattleDetails {
  movie1Id: number;
  movie2Id: number;
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const BattleDetailsPage = () => {
  const { id } = useParams();
  const [battleDetails, setBattleDetails] = useState<BattleDetails | null>(
    null
  );
  const [movie1Details, setMovie1Details] = useState<MovieDetailsPageType | null>(
    null
  );
  const [movie2Details, setMovie2Details] = useState<MovieDetailsPageType | null>(
    null
  );


  let battle_id: number   = 0;


  if(id) {
    battle_id = parseInt(id);
  }


  const fetchMovieDetails = async (movieId: number) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  
  useEffect(() => {
    const battleInfo = async (battle_id: number) => {
      try {
        const response = await axios.get(
          `https://mm-server-dd9o.onrender.com/api/battle-details/${battle_id}`
        );
        const data = response.data;
        setBattleDetails(data.battleDetails);
        if (data.battleDetails) {
          const movie1 = await fetchMovieDetails(data.battleDetails.movie1Id);
          const movie2 = await fetchMovieDetails(data.battleDetails.movie2Id);
          setMovie1Details(movie1);
          setMovie2Details(movie2);
        }
      } catch (error) {
        console.error("Error fetching battle details:", error);
      }
    };
    if (id) {
      battleInfo(battle_id);
    }
  }, [id, battle_id]); 


  return (
    <div>
      {battleDetails && movie1Details && movie2Details ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.7 }}
          className="p-4"
        >
          <h2 className="text-2xl font-bold mb-4">Battle Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie1Details?.poster_path}`}
                alt={`${movie1Details?.title} Poster`}
                className="w-80 h-96 object-contain"
              />
              <div className="flex flex-col pl-4">
                <h3 className="text-lg font-semibold ">
                  {movie1Details.title}
                </h3>
                <p className="text-gray-600">{movie1Details.tagline}</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow flex flex-col sm:flex-row">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie2Details?.poster_path}`}
                alt={`${movie2Details?.title} Poster`}
                className="w-80 h-96 object-contain"
              />
              <div className="flex flex-col pl-4">
                <h3 className="text-lg font-semibold mb-2">
                  {movie2Details.title}
                </h3>
                <p className="text-gray-600">{movie2Details.tagline}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="text-center py-8">Loading...</div>
      )}

      <CommentSection />
    </div>
  );
};

export default BattleDetailsPage;
