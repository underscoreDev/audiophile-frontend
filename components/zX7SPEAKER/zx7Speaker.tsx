import Image from "next/image";
import Router from "next/router";
import styled from "styled-components";
import Zx7Speak from "assets/home/desktop/image-speaker-zx7.jpg";
import { h4 } from "utils/typography";
import Button from "components/buttons/button";

const Zx7Speaker = () => {
  return (
    <Zx7SpeakerStyles>
      <div className="zx7__Image">
        <Image src={Zx7Speak} alt="Zx7Speak" />
      </div>

      <div className="zx7__text">
        <h1>ZX7 SPEAKER</h1>
        <span onClick={() => Router.push("/product/zx7-speaker")}>
          <Button text="see product" variant="BLACK" />
        </span>
      </div>
    </Zx7SpeakerStyles>
  );
};

export default Zx7Speaker;

const Zx7SpeakerStyles = styled.div`
  position: relative;
  width: 100%;
  height: 31rem;
  border-radius: 0.8rem;
  overflow: hidden;
  border-radius: 0.8rem;

  .zx7__Image {
    height: 100%;
    width: 100%;
  }

  .zx7__text {
    position: relative;
    bottom: 25rem;
    left: 10rem;

    h1 {
      z-index: 1000;
      ${h4}
      margin-bottom: 2rem;
    }
  }
`;
