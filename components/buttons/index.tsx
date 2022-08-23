import { buttonCss } from "components/buttons/style";

interface ButtonProps {
  text: string;
  variant:
    | "PINK_DARK"
    | "PINK_LIGHT"
    | "BLACK"
    | "BORDERED"
    | "BORDERLESS_BLACK"
    | "BORDERLESS_COLOURED";
}

const Button = ({ text, variant }: ButtonProps) => (
  <button css={buttonCss(text, variant)}>
    {text}
    {variant === "BORDERLESS_BLACK" || variant === "BORDERLESS_COLOURED" ? (
      <svg className="arrow__Right" width="8" height="12" xmlns="http://www.w3.org/2000/svg">
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
  </button>
);

export default Button;

const ButtonStyles = styled.button<ButtonProps>`
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
      case "BORDERLESS_BLACK":
        return "none";
      case "BORDERLESS_COLOURED":
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
      case "BORDERLESS_BLACK":
        return "transparent";
      case "BORDERLESS_COLOURED":
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
      case "BORDERLESS_BLACK":
        return colors.colorLightBlack;
      case "BORDERLESS_COLOURED":
        return colors.colorDarkPink;
      default:
        colors.colorBlack;
        break;
    }
  }};
`;
