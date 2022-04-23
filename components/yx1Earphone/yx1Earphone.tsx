import styled from "styled-components";
import Image from "next/image";
import yx1 from "assets/home/desktop/image-earphones-yx1.jpg";
import Button from "components/buttons/button";
import Router from "next/router";
import { h4 } from "utils/typography";
import { colors } from "utils/theme";

const Yx1Earphone = () => {
  return (
    <Yx1EarphoneStyles>
      <div>
        <Image src={yx1} alt="YX1 earphones" />
      </div>

      <div className="yx1__text">
        <h1>YX1 EARPHONES</h1>
        <span onClick={() => Router.push("/product/yx1-earphones")}>
          <Button text="see product" variant="BORDERED" />
        </span>
      </div>
    </Yx1EarphoneStyles>
  );
};

export default Yx1Earphone;

const Yx1EarphoneStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 3rem;
  justify-content: space-between;

  .yx1__text {
    background-color: ${colors.colorDarkWhite};
    border-radius: 0.8rem;
    padding-left: 10rem;
    padding-top: 10rem;
    h1 {
      ${h4}
      margin-bottom: 2rem;
    }
  }
`;
