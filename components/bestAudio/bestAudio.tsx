import Image from "next/image";
import styled from "styled-components";
import BestGear from "assets/shared/desktop/image-best-gear.jpg";
import { colors } from "utils/theme";
import { body, h2 } from "utils/typography";

const BestAudio = () => {
  return (
    <BEstAudioStyles>
      <div className="bestAudio">
        <span className="bestAudio__description">
          <h1>
            Bringing you the <br /> <span>best</span> audio gear
          </h1>
          <p>
            Located at the heart of New York City, Audiophile is the premier{" "}
            <br />
            store for high end headphones, earphones, speakers, and audio <br />
            accessories. We have a large showroom and luxury <br />{" "}
            demonstration rooms available for you to browse and <br />{" "}
            experience a wide range of our products. Stop by our store to <br />{" "}
            meet some of the fantastic people who make Audiophile the <br />{" "}
            best place to buy your portable audio equipment.
          </p>
        </span>
        <span className="bestAudio__img">
          <Image
            width={540}
            height={588}
            src={BestGear}
            alt="Best Gear Image"
          />
        </span>
      </div>
    </BEstAudioStyles>
  );
};

export default BestAudio;

const BEstAudioStyles = styled.section`
  .bestAudio {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    &__description {
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
    }

    &__img {
      width: 54rem;
      height: 58.8rem;
      border-radius: 0.8rem;
      overflow: hidden;
    }
  }
`;
