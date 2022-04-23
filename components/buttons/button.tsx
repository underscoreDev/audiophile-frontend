import styled from "styled-components";
import { colors } from "utils/theme";

interface ButtonProps {
  text: string;
  variant:
    | "PINK_DARK"
    | "PINK_LIGHT"
    | "BLACK"
    | "BORDERED"
    | "BORDER-LESS_BLACK"
    | "BORDER-LESS_COLOURED";
}

const Button = ({ text, variant }: ButtonProps) => (
  <>
    <ButtonStyles text={text} variant={variant}>
      {text}
      {variant === "BORDER-LESS_BLACK" || variant === "BORDER-LESS_COLOURED" ? (
        <svg
          className="arrow__Right"
          width="8"
          height="12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.322 1l5 5-5 5"
            stroke={colors.colorDarkPink}
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        ""
      )}
    </ButtonStyles>
  </>
);

export default Button;

const ButtonStyles = styled.button<ButtonProps>`
  position: relative;
  outline: none;
  width: 16rem;
  height: 4.8rem;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  &:active,
  :focus {
    transform: translateY(-0.1rem);
  }

  &:hover {
    background-color: ${({ variant }) => {
      switch (variant) {
        case "PINK_DARK":
          return colors.colorLightPink;
        case "PINK_LIGHT":
          return colors.colorDarkPink;
        case "BLACK":
          return colors.colorLightBlack;
        case "BORDERED":
          return "transparent";
        case "BORDER-LESS_BLACK":
          return "transparent";
        case "BORDER-LESS_COLOURED":
          return "transparent";
        default:
          colors.colorBlack;
          break;
      }
    }};

    color: ${({ variant }) => {
      switch (variant) {
        case "PINK_DARK":
          return colors.colorWhite;
        case "PINK_LIGHT":
          return colors.colorWhite;
        case "BLACK":
          return colors.colorWhite;
        case "BORDERED":
          return colors.colorBlack;
        case "BORDER-LESS_BLACK":
          return colors.colorDarkPink;
        case "BORDER-LESS_COLOURED":
          return colors.colorBlack;
        default:
          colors.colorBlack;
          break;
      }
    }};
  }
  .arrow__Right {
    position: relative;
    margin-left: 1.2rem;
    top: 0.2rem;
  }
  border: ${({ variant }) => {
    switch (variant) {
      case "PINK_DARK":
        return "none";
      case "PINK_LIGHT":
        return "none";
      case "BLACK":
        return "none";
      case "BORDERED":
        return "1px solid black";
      case "BORDER-LESS_BLACK":
        return "none";
      case "BORDER-LESS_COLOURED":
        return "none";
      default:
        colors.colorBlack;
        break;
    }
  }};
  background-color: ${({ variant }) => {
    switch (variant) {
      case "PINK_DARK":
        return colors.colorDarkPink;
      case "PINK_LIGHT":
        return colors.colorLightPink;
      case "BLACK":
        return colors.colorBlack;
      case "BORDERED":
        return "transparent";
      case "BORDER-LESS_BLACK":
        return "transparent";
      case "BORDER-LESS_COLOURED":
        return "transparent";
      default:
        colors.colorBlack;
        break;
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case "PINK_DARK":
        return colors.colorWhite;
      case "PINK_LIGHT":
        return colors.colorWhite;
      case "BLACK":
        return colors.colorWhite;
      case "BORDERED":
        return colors.colorBlack;
      case "BORDER-LESS_BLACK":
        return colors.colorLightBlack;
      case "BORDER-LESS_COLOURED":
        return colors.colorDarkPink;
      default:
        colors.colorBlack;
        break;
    }
  }};
`;
