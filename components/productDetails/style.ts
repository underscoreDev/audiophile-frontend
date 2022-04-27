import { colors } from "utils/theme";
import { css } from "styled-components/macro";
import { body, h1, h3, h6, lightText } from "utils/typography";

export const productCss = css`
  position: relative;
  padding-top: 5rem;

  h5 {
    ${h3}
    text-transform: uppercase;
    margin: 0 auto;
    text-align: center;
    margin-top: 15rem;
  }
`;

export const goBackButton = css`
  ${body}
  cursor: pointer;
  margin: 0 0 5rem 0;
  z-index: 100;
`;

export const productImgContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0;
  height: 100%;
`;

export const productImageCss = css``;

export const productDescCss = css`
  width: 40%;
  h3 {
    ${lightText}
    margin-bottom: 2rem;
    text-transform: uppercase;
  }
  h1 {
    ${h1}
  }
  p {
    ${body}
    margin: 2rem 0;
  }

  h6 {
    ${h6}
    margin-bottom: 2rem;
  }
`;

export const featuresCss = css`
  margin: 15rem 0;

  h2 {
    ${h3}
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
  p {
    ${body}
    display: flex;
    span {
      margin-right: 3rem;
      color: ${colors.colorDarkPink};
      font-weight: 600;
    }
  }
`;

export const gridImageCss = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "img1 img3" "img2 img3";
  height: 59.2rem;
  grid-gap: 2rem;
  width: 100%;

  .img1 {
    border-radius: 1rem;
    grid-area: img3;
    background-color: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img2 {
    border-radius: 1rem;
    grid-area: img1;
    background-color: green;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .img3 {
    border-radius: 1rem;
    grid-area: img2;
    background-color: blue;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const suggestionProductCss = css`
  margin: 5rem 0 15rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
