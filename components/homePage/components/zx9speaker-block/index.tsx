import styled from "styled-components";
import { colors } from "utils/theme";
import patternCircles from "assets/home/desktop/pattern-circles.svg";
import Z9 from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import Image from "next/image";
import Button from "components/buttons";
import Router from "next/router";
import Box from "@mui/material/Box";
import { zx9speakerCss, slideImgCss, patternCss, slideCss,slideDescriptionCss } from "./style";
import Typography from "@mui/material/Typography";

const Z9Speaker = () => {
  return (
    <Box css={zx9speakerCss}>
      <Box css={patternCss}>
        <Image src={patternCircles} alt="pattern circles" />
      </Box>

      <Box css={slideCss}>
        <Box css={slideImgCss}>
          <Image width={550} height={600} src={Z9} alt="Z9Speaker" />
        </Box>

        <Box css={slideDescriptionCss}>
          <h1>
            ZX9 <br /> SPEAKER
          </h1>

          <Typography>
            Upgrade to premium speakers that are <br /> phenomenally built to deliver truly
            remarkable <br /> sound.
          </Typography>

          <span onClick={() => Router.push("/product/zx9-speaker")}>
            <Button text="see product" variant="BLACK" />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Z9Speaker;
