import { css } from "styled-components/macro";
import { h4 } from "utils/typography";

export const zx7SpeakerCss = css`
  position: relative;
  width: 100%;
  height: 31rem;
  border-radius: 0.8rem;
  overflow: hidden;
  border-radius: 0.8rem;
  margin-top: 10rem;
`;

export const zx7ImageCss = css`
  height: 100%;
  width: 100%;
`;

export const zx7DescriptionCss = css`
  position: relative;
  bottom: 25rem;
  left: 10rem;

  h1 {
    ${h4}
    z-index: 1000;
    margin-bottom: 2rem;
  }
`;
