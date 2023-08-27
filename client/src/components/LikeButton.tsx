import { MovieProp } from "../services/types";
import loveIconSvg from "../assets/love-svgrepo-com.svg";

const LikeButton: React.FC<MovieProp> = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className="w-8 h-8">
        <img src={loveIconSvg} alt="like" />
        
      </div>
    </>
  );
};
export default LikeButton;
