import Image from "next/image";
import BestGear from "assets/shared/desktop/image-best-gear.jpg";
import Box from "@mui/material/Box";
import {
  bestAudioCss,
  bestAudioDescriptionCss,
  bestAudioImgCss,
} from "components/bestAudio/style";

const BestAudio = () => {
  return (
    <Box css={bestAudioCss}>
      <span css={bestAudioDescriptionCss}>
        <h1>
          Bringing you the <br /> <span>best</span> audio gear
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier{" "}
          <br />
          store for high end headphones, earphones, speakers, and audio <br />
          accessories. We have a large showroom and luxury <br /> demonstration
          rooms available for you to browse and <br /> experience a wide range
          of our products. Stop by our store to <br /> meet some of the
          fantastic people who make Audiophile the <br /> best place to buy your
          portable audio equipment.
        </p>
      </span>
      <span css={bestAudioImgCss}>
        <Image width={540} height={588} src={BestGear} alt="Best Gear Image" />
      </span>
    </Box>
  );
};

export default BestAudio;
