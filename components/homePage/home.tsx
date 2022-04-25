import BestAudio from "components/bestAudio";
import { HeaderCarousel } from "components/carousel";
import Z9Speaker from "components/z9SPEAKER/z9Speaker";
import Zx7Speaker from "components/zX7SPEAKER/zx7Speaker";
import Yx1Earphone from "components/yx1Earphone/yx1Earphone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CategoryGroup from "components/categoryType/categoryGroup";

const Home = () => {
  return (
    <Box>
      <HeaderCarousel />
      <Container>
        <CategoryGroup />
        <Z9Speaker />
        <Zx7Speaker />
        {/* <Yx1Earphone /> */}
        <BestAudio />
      </Container>
    </Box>
  );
};

export default Home;
