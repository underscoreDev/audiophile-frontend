import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import BestAudio from "components/bestAudio";
import Container from "@mui/material/Container";
import { HeaderCarousel } from "components/homePage/components/carousel";
import CategoryGroup from "components/categoryGroup";
import Z9Speaker from "components/homePage/components/zx9speaker-block";
import Zx7Speaker from "components/homePage/components/zx7speaker-block";
import Yx1Earphone from "components/homePage/components/yx1earphone-block";

const Home = () => {
  useTitle("AUDIOPHILE | One Stop Audio Store");

  return (
    <Box>
      <HeaderCarousel />
      <Container maxWidth="lg">
        <CategoryGroup />
        <Z9Speaker />
        <Zx7Speaker />
        <Yx1Earphone />
        <Box css={"margin:20rem 0"}>
          <BestAudio />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
