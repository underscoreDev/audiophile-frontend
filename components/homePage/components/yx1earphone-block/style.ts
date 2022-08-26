import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { h4 } from "utils/typography";

export const yx1Css = css`
  height: 100%;
  width: 100%;
`;

export const yx1DecsriptionCss = css`
  background-color: ${colors.colorDarkWhite};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10rem;

  h1 {
    ${h4}
    margin-bottom: 2rem;
  }
`;

export const yx1ImageCss = css`
  border-radius: 1rem;
`;
