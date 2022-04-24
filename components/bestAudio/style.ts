import { colors } from "utils/theme";
import { body, h2 } from "utils/typography";
import { css } from "styled-components/macro";

export const bestAudioCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const bestAudioDescriptionCss = css`
  h1 {
    text-transform: uppercase;
    margin-bottom: 5rem;
    ${h2}
    span {
      color: ${colors.colorDarkPink};
    }
  }
  p {
    ${body}
    color: ${colors.colorLightBlack};
  }
`;

export const bestAudioImgCss = css`
  width: 54rem;
  height: 58.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;
