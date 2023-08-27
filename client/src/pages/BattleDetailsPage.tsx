import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react"; // Import useState

interface BattleDetails {
  movie1Id: number
  movie2Id: number
}
const BattleDetailsPage = () => {
  const { id } = useParams();
  const [battleDetails, setBattleDetails] = useState<BattleDetails | null>(null); // State for battle details

  if (!id) {
    return (
      <div>This battle doesn't exist!</div>
    );
  }

  const battle_id = parseInt(id);
  const battleInfo = async (battle_id : number) => {
    try {
      const response = await axios.get(
        `http://localhost:3030/api/battle-details/${battle_id}`
      );
      const data = response.data;
      setBattleDetails(data.battleDetails); // Update state with battle details
    } catch (error) {
      console.error("Error fetching battle details:", error);
    }
  };

  return (
    <div>
      <p onClick={() => battleInfo(battle_id)}>Click this {id}</p>
      {battleDetails ? (
        <div>
          <h2>Battle Details</h2>
          <p>Movie 1 ID: {battleDetails.movie1Id}</p>
          {/* Display more battle details */}
        </div>
      ) : <>no movies</>}
    </div>
  );
};

export default BattleDetailsPage;
