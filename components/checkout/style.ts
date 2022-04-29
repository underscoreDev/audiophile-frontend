import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { body, h6 } from "utils/typography";

export const checkoutContainer = css`
  width: 100%;
  height: 140rem;
  background-color: #f2f2f2;
`;

export const backButtonCss = css`
  ${body}
  cursor: pointer;
  color: ${colors.colorLightPink};
  transition: 0.3s all;
  width: fit-content;
  &:hover {
    font-weight: 700;
  }
`;

export const checkoutGridCss = css`
  background-color: #fff;
  border-radius: 1rem;
  height: 112.6rem;
`;

export const summaryGridCss = css`
  background-color: #fff;
  border-radius: 1rem;
  height: 68rem;
  padding: 3rem;

  > h1 {
    margin-bottom: 3rem;
    ${h6}
  }
  .cart {
    &__filled {
      &--body {
        height: 30rem;
        overflow: auto;
        scrollbar-width: thin;
        scrollbar-color: ${colors.colorDarkPink};
        &::-webkit-scrollbar {
          width: 0.5rem;
        }
        &::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        &::-webkit-scrollbar-thumb {
          background: ${colors.colorDarkPink};
          border-radius: 6px;
          border: 3px solid ${colors.colorDarkPink};
        }
      }
    }
    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6.4rem;
      width: 100%;
      margin: 0 0 3rem 0;

      &--desc {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          margin-left: 2rem;
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2.5rem;
          }
          h2 {
            font-size: 1.4rem;
            font-weight: 700;
            line-height: 2.5rem;
            opacity: 0.6;
          }
        }
      }

      &--btn {
        margin-right: 2rem;
        h6 {
          ${body}
          opacity: 0.6;
        }
      }
    }

    &__total {
      margin-top: 3rem;
      .grandTotal {
        color: ${colors.colorDarkPink};
      }
      span {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 2rem 0;
        h2 {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 2.5rem;
        }
        h1 {
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 2.5rem;
        }
      }
      button {
        border: none;
        outline: none;
        background-color: ${colors.colorDarkPink};
        color: #fff;
        width: 100%;
        height: 4.8rem;
        cursor: pointer;
        transition: 0.5s all;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.8rem;
        text-align: center;
        letter-spacing: 1px;

        &:hover {
          background-color: ${colors.colorLightPink};
        }
      }
    }
  }
`;

export const gridContainerCss = css`
  /* background-color: red; */
`;
