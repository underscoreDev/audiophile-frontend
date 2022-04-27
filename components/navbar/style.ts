import { colors } from "utils/theme";
import { boldText } from "utils/typography";
import { css } from "styled-components/macro";

export const navbarContainerCss = css`
  color: ${colors.colorWhite};
  background-color: ${colors.colorBlack};
  height: 9.7rem;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 9;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
`;

export const categoryNotActiveCss = css`
  opacity: 0;
  /* left: -100vw; */
  /* visibility: hidden; */
  transition: all 1s;
`;

export const cateoryGroupCss = css`
  transition: all 1s;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);

  width: 100%;
  /* left: 0; */
  /* visibility: visible; */
  opacity: 1;
  top: 10vh;
  padding: 10rem 0;
  position: absolute;
  .categoryGroupCss {
    margin: 0;
    @media (max-width: 375px) {
      margin-top: 4rem;
    }
  }
  .marginCss {
    margin: 10rem 0;

    @media (max-width: 375px) {
      margin: 15rem 0;
    }
  }
`;

export const navCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const navLinkCss = css`
  display: flex;
  justify-content: space-between;
  a {
    margin-right: 3rem;
    ${boldText}
    text-transform: uppercase;
    color: ${colors.colorWhite};
    transition: all 0.3s;
    &:hover {
      color: ${colors.colorDarkPink};
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const hamburgerCss = css`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const cartCss = css``;
