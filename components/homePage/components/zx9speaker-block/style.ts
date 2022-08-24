import { colors } from "utils/theme";
import { css } from "styled-components/macro";
import { body, h1 } from "utils/typography";

export const zx9speakerCss = css`
  width: 100%;
  height: 56rem;
  background-color: ${colors.colorDarkPink};
  border-radius: 0.8rem;
  overflow: hidden;

`;

export const patternCss = css`
  position: absolute;
  overflow: hidden;
  left: -2rem;
`;

export const slideCss = css`
  display: grid;
  grid-template-columns: 60% 1fr;
  justify-content: space-between;
  width: 100%;
`;

export const slideImgCss = css`
  position: relative;
  bottom: -16rem;
`;

export const slideDescriptionCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  top: 7rem;
  color: ${colors.colorWhite};

  p {
    ${body}
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  h1 {
    ${h1}
    left: 0;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
`;
