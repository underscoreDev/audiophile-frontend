import BestAudio from "components/bestAudio/bestAudio";
import CategoryGroup from "components/bestAudio/bestAudio";
import styled from "styled-components";
import SwiperjsCarousel from "components/carousel/swiperjsCarousel";
import { colors } from "utils/theme";
import Z9Speaker from "components/z9SPEAKER/z9Speaker";
import Zx7Speaker from "components/zX7SPEAKER/zx7Speaker";
import Yx1Earphone from "components/yx1Earphone/yx1Earphone";

const Home = () => {
  return (
    <HomeStyles>
      <SwiperjsCarousel />

      <div className="body">
        <div>
          <CategoryGroup />
        </div>
        <div className="component body__z9Speaker">
          <Z9Speaker />
        </div>
        <div className="component body__Zx7Speaker">
          <Zx7Speaker />
        </div>
        <div className="component body__bestGear">
          <Yx1Earphone />
        </div>
        <div className="component body__bestGear">
          <BestAudio />
        </div>
      </div>
    </HomeStyles>
  );
};

export default Home;

const HomeStyles = styled.div`
  background-color: ${colors.colorWhite};
  .body {
    width: 80vw;
    margin: 15rem auto;

    .component {
      margin-top: 20rem;
    }
  }
`;
