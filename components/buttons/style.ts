import { ButtonProps } from "@mui/material";
import { css } from "styled-components/macro";
import { colors } from "utils/theme";

export const buttonCss = (
  text: string,
  variant:
    | "PINK_DARK"
    | "PINK_LIGHT"
    | "BLACK"
    | "BORDERED"
    | "BORDERLESS_BLACK"
    | "BORDERLESS_COLOURED"
) => css`
  position: relative;
  outline: none;
  width: fit-content;
  padding: 2rem 3rem;
  min-height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:active,
  &:focus {
    transform: translateY(-0.2rem);
  }

  &:hover {
    /* color: ${({ variant }) => {
      switch (variant) {
        case "PINK_DARK":
          return colors.colorWhite;
        case "PINK_LIGHT":
          return colors.colorWhite;
        case "BLACK":
          return colors.colorWhite;
        case "BORDERED":
          return colors.colorBlack;
        case "BORDERLESS_BLACK":
          return colors.colorDarkPink;
        case "BORDERLESS_COLOURED":
          return colors.colorBlack;
        default:
          colors.colorBlack;
          break;
      }
    }}; */
  }
`;
