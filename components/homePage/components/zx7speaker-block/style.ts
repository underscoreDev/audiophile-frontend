import { h4 } from "utils/typography";
import { css } from "styled-components/macro";
import Zx7SpeakerImage from "components/homePage/components/zx7speaker-block/images/image-speaker-zx7.jpg";

export const zx7SpeakerCss = {
  backgroundImage: `url(${Zx7SpeakerImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "32rem",
  borderRadius: "0.8rem",
};

export const zx7ImageCss = css`
  height: 100%;
  width: 100%;
`;

export const zx7DescriptionCss = css`
  position: relative;
  left: 13rem;
  top: 10rem;

  @media (max-width: 768px) {
    left: 5rem;
  }
  @media (max-width: 425px) {
    left: 5rem;
    top: 5rem;
  }

  h1 {
    ${h4}
    z-index: 1000;
    margin-bottom: 2rem;
  }
`;
