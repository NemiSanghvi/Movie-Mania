import { BlueBg, Column, RedBg, SubText, Text, Title2, Title2SubText } from './styledComponents/HeroStyleComponents.tsx';



const HeroSection = () => {
  return (
    <>
      <BlueBg>
        <RedBg>
          {/* <EpicTitle>Epic</EpicTitle> */}
          <SubText>Movie Mania: Battles of Blockbusters</SubText>
        </RedBg>
      </BlueBg>
      <Text>
        <Column>
          <Title2>Welcome to the <span className='text-[#e63946]'><br />Movie Mania Arena</span></Title2>
          <Title2SubText>We don’t just rank movies, we make them fight for glory! Face off your favorite flicks and witness the cinematic battles unfold.</Title2SubText>
        </Column>
      </Text>
    </>
  );


};

export default HeroSection;
