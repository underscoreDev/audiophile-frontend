import { css } from "styled-components/macro";
import { colors } from "utils/theme";
import { boldText, body } from "utils/typography";

export const footerCss = css`
  background-color: ${colors.colorBlack};
  min-height: 36.5rem;
  height: 100%;
  color: ${colors.colorLightWhite};
  margin-top: 15rem;
  position: relative;
`;

export const footerContainerCss = css`
  padding: 5rem 0;

  &::before {
    content: "";
    width: 10.1rem;
    height: 0.4rem;
    background-color: ${colors.colorDarkPink};
    position: absolute;
    top: 0;
    @media (max-width: 598px) {
      left: 50%;
      transform: translate(-50%, 0);
    }
  }

  a,
  svg {
    ${boldText}
    color:#fafafa;
    transition: 0.3s ease-in;
    text-transform: uppercase;
    margin-left: 2rem;

    &:hover {
      color: ${colors.colorDarkPink};
      cursor: pointer;
    }
  }

  p {
    ${body}
  }

  @media (max-width: 870px) {
    br {
      display: none;
    }
  }
  @media (max-width: 598px) {
    text-align: center;
  }
`;
