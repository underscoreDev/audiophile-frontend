import { colors } from "utils/theme";
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
  <button css={buttonCss(variant)}>
    {text}
    {variant === "BORDERLESS_BLACK" ||
      (variant === "BORDERLESS_COLOURED" && (
        <svg className="arrow__Right" width="8" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.322 1l5 5-5 5"
            stroke={colors.colorDarkPink}
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      ))}
  </button>
);

export default Button;
