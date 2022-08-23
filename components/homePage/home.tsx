import Box from "@mui/material/Box";
import BestAudio from "components/bestAudio";
import Container from "@mui/material/Container";
import { HeaderCarousel } from "components/carousel";
import Z9Speaker from "components/z9SPEAKER/z9Speaker";
import Zx7Speaker from "components/zX7SPEAKER/zx7Speaker";
import Yx1Earphone from "components/yx1Earphone/yx1Earphone";
import CategoryGroup from "components/categoryType/categoryGroup";
import { useTitle } from "react-use";

const Home = () => {
  useTitle("AUDIOPHILE | HOME - Buy your Audio Gadgets");
  return (
    <Box>
      <HeaderCarousel />
      <Container  maxWidth="lg"> 
        <CategoryGroup />
        <Z9Speaker />
        <Zx7Speaker />
        <Yx1Earphone />
        <Box style={{ margin: "20rem 0" }}>
          <BestAudio />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
