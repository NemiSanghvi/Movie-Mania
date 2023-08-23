import {
  Button1,
  Button2,
  ButtonDiv,
  CallToAction,
  Wrapper2,
  Font,
  Title,
  Title2,
  Wrapper,
  Font2,
  InfoColumn,
  InfoRow1,
  InfoRow2,
  InfoSubRow,
  InfoSubRowsColumn,
} from "./styledComponents/ContextBodyStyleComponents";
import { Link } from "react-router-dom";

const ContextBody = () => {
  return (
    <>
      <CallToAction>
        <Wrapper>
          <Title className="">Are you ready to rumble?</Title>
          <ButtonDiv>
            <Link to={"/battle-ground"}>
              <Button1>
                <Font className="text-white">Start the Battle!</Font>
              </Button1>
            </Link>
            <Button2>
              <Font className="text-black">Learn More</Font>
            </Button2>
          </ButtonDiv>
        </Wrapper>
      </CallToAction>
      <Wrapper2>
        <Title2 className="">Hollywood's Greatest Face-offs</Title2>
        <InfoColumn>
          <InfoRow1>
            <Font2>
              Discover the ultimate match-ups that have occurred within our
              legendary ranking system.
            </Font2>
          </InfoRow1>
          <InfoRow2>
            <InfoSubRow>
              <InfoSubRowsColumn>
                <Font2>Titanic vs Avatar</Font2>
                <Font2>92%</Font2>
              </InfoSubRowsColumn>
              <InfoSubRowsColumn>
                <Font2>The Dark Knight vs Interception</Font2>
                <Font2>80%</Font2>
              </InfoSubRowsColumn>
              <InfoSubRowsColumn>
                <Font2>Oppenhiemer vs Barbie</Font2>
                <Font2>67%</Font2>
              </InfoSubRowsColumn>
            </InfoSubRow>
          </InfoRow2>
        </InfoColumn>
      </Wrapper2>
    </>
  );
};

export default ContextBody;
