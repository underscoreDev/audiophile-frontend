import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { h6 } from "utils/typography";

export const categoryGroupCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 0;
  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 20rem 0;
  }
`;

export const categoryTypeCss = css`
  position: relative;
  height: 16.5rem;
  width: 35rem;
  background-color: ${colors.colorDarkWhite};
  box-shadow: 0rem 0.3rem 0rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  display: flex;
  align-items: end;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 20rem;
    width: 40rem;
  }
`;

export const categoryIconCss = css`
  position: absolute;
  top: -7rem;
  @media (max-width: 375px) {
    top: -10rem;
  }
  @media (max-width: 350px) {
    top: -13rem;
  }
`;

export const categorydescCss = css`
  padding-bottom: 1rem;
  h1 {
    ${h6}
  }
`;

export const marginCss = css`
  margin: 15rem 0;
`;
