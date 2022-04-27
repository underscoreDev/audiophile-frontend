import styled from "styled-components";
import Modal from "react-overlays/Modal";
import { colors } from "utils/theme";
import { body, h2, h6, lightText } from "utils/typography";

export const Backdrop = styled("div")`
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  transition: 1s all;
`;

export const RandomlyPositionedModal = styled(Modal)`
  transition: 1s all;
  position: fixed;
  z-index: 1040;
  right: 5rem;
  top: 10rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 40rem;
  min-height: 48.8rem;
  background-color: ${colors.colorWhite};
  border-radius: 0.5rem;
  right: 10rem;
  top: 12rem;
  padding: 3rem;
  border: none;
  outline: none;

  .cart {
    &__empty {
      position: relative;
      text-align: center;
      top: 10rem;
      color: ${colors.colorDarkPink};
      h1 {
        ${h2}
        margin-bottom: 2rem;
      }
    }
    &__filled {
      &--header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        h1 {
          ${h6}
        }
        button {
          border: none;
          outline: none;
          color: ${colors.colorDarkPink};
          background-color: transparent;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      &--body {
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
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
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #f5f5f5;
        height: 3.2rem;
        width: 9.6rem;
        /* right: 0; */

        h6 {
          font-size: 13px;
          font-weight: 700;
          line-height: 18px;
        }

        button {
          border: none;
          outline: none;
          background-color: transparent;
          font-size: 1.3rem;
          font-weight: 700;
          line-height: 1.8rem;
          cursor: pointer;
          &:hover {
            color: ${colors.colorDarkPink};
          }
        }
      }
    }

    &__total {
      margin-top: 3rem;
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
