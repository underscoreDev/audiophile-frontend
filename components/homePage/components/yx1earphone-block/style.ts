import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { h4 } from "utils/typography";

export const yx1Css = css`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 3rem;
  justify-content: space-between;
  margin-top: 10rem;
`;

export const yx1DecsriptionCss = css`
  background-color: ${colors.colorDarkWhite};
  border-radius: 0.8rem;
  padding-left: 10rem;
  padding-top: 10rem;
  h1 {
    ${h4}
    margin-bottom: 2rem;
  }
`;

export const yx1ImageCss = css`
  border-radius: 1rem;
`;
