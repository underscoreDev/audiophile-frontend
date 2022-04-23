import styled from "styled-components";
import { colors } from "utils/theme";
import patternCircles from "assets/home/desktop/pattern-circles.svg";
import Z9 from "assets/shared/desktop/image-category-thumbnail-speakers.png";
import Image from "next/image";
import Button from "components/buttons/button";
import Router from "next/router";
import { h1 } from "utils/typography";
import { body } from "utils/typography";

const Z9Speaker = () => {
  return (
    <div>
      <Z9SpeakerStyles>
        <div className="pattern">
          <Image src={patternCircles} alt="pattern circles" />
        </div>
        <div className="slide">
          <div className="slide__image">
            <Image width={550} height={600} src={Z9} alt="Z9Speaker" />
          </div>

          <div className="slide__description">
            <h1>
              ZX9 <br /> SPEAKER
            </h1>
            <p>
              Upgrade to premium speakers that are <br /> phenomenally built to
              deliver truly remarkable <br /> sound.
            </p>
            <span onClick={() => Router.push("/product/zx9-speaker")}>
              <Button text="see product" variant="BLACK" />
            </span>
          </div>
        </div>
      </Z9SpeakerStyles>
    </div>
  );
};

export default Z9Speaker;

const Z9SpeakerStyles = styled.div`
  width: 100%;
  height: 56rem;
  background-color: ${colors.colorDarkPink};
  border-radius: 0.8rem;
  overflow: hidden;

  .pattern {
    position: absolute;
    overflow: hidden;
    left: -2rem;
  }

  .slide {
    display: grid;
    grid-template-columns: 60% 1fr;
    justify-content: space-between;
    width: 100%;

    &__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      top: 7rem;
      color: ${colors.colorWhite};

      p {
        ${body}
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
      h1 {
        ${h1}
        left: 0;
        margin-bottom: 3rem;
        text-transform: uppercase;
      }
    }

    &__image {
      position: relative;
      bottom: -16rem;
    }
  }
`;
