import movieBg from '../assets/moviebg.jpg';
import {
  BackgroundImg,
  HypeConatainer,
  Title,
} from "./styledComponents/HypeStyleComponent";

const Hype = () => {
  return (
    <>
      <HypeConatainer>
        <Title>Unleash your movie madness.</Title>
        <BackgroundImg><img src={movieBg} /></BackgroundImg>
      </HypeConatainer>
    </>
  );
};

export default Hype;
