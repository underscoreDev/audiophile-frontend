import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { colors } from "utils/theme";
import Cart from "components/cart/cart";
import { useRouter } from "next/router";
import { boldText } from "utils/typography";
import { useState, useEffect } from "react";
import { css } from "styled-components/macro";
import Container from "@mui/material/Container";
import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import { toggleCart } from "redux/reducers/cartReducer";
import Hamburger from "assets/shared/tablet/icon-hamburger.svg";
import CategoryGroup from "components/categoryType/categoryGroup";
import { useAppSelector, useAppDispatch } from "redux/store/store";

const navbarContainerCss = css`
  color: ${colors.colorWhite};
  background-color: ${colors.colorBlack};
  height: 9.7rem;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 9;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);
`;

const categoryNotActiveCss = css`
  opacity: 0;
  /* left: -100vw; */
  /* visibility: hidden; */
  transition: all 1s;
`;

const cateoryGroupCss = css`
  transition: all 1s;
  z-index: 20;
  background-color: #ffffff;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.5);

  width: 100%;
  /* left: 0; */
  /* visibility: visible; */
  opacity: 1;
  top: 10vh;
  padding: 10rem 0;
  position: absolute;
  .categoryGroupCss {
    margin: 0;
    @media (max-width: 375px) {
      margin-top: 4rem;
    }
  }
  .marginCss {
    margin: 10rem 0;

    @media (max-width: 375px) {
      margin: 15rem 0;
    }
  }
`;

export const navCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const navLinkCss = css`
  display: flex;
  justify-content: space-between;
  a {
    margin-right: 3rem;
    ${boldText}
    text-transform: uppercase;
    color: ${colors.colorWhite};
    transition: all 0.3s;
    &:hover {
      color: ${colors.colorDarkPink};
    }
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const hamburgerCss = css`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

export const cartCss = css``;

const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [isNavactive, setIsNavactive] = useState<boolean>(false);
  useEffect(() => window.addEventListener("scroll", handleScrolled), [scrolled]);
  const { cartProducts, isCartOpen } = useAppSelector(({ cartReducer }) => cartReducer);
  const handleScrolled = () => (window.scrollY > 100 ? setScrolled(true) : setScrolled(false));

  return (
    <Box
      css={`
        position: relative;
        transition: all 1s;
      `}
    >
      {isNavactive && (
        <Box css={isNavactive ? cateoryGroupCss : categoryNotActiveCss}>
          <CategoryGroup />
        </Box>
      )}

      <Box css={navbarContainerCss} style={{ position: scrolled ? "fixed" : "relative" }}>
        <Container style={{ display: "flex" }} css={navCss}>
          <Box css={hamburgerCss} onClick={() => setIsNavactive(!isNavactive)}>
            <Image src={Hamburger} alt="Hamburger Menu" />
          </Box>

          <Box>
            <Image src={logo} alt="nav logo" />
          </Box>

          <ul css={navLinkCss}>
            <Link href="/">
              <a style={{ color: router.pathname == "/" ? "#D87D4A" : "#fff" }}>Home</a>
            </Link>

            <Link href="/category/headphones">
              <a style={{ color: router.query?.category == "headphones" ? "#D87D4A" : "#fff" }}>
                Headphones
              </a>
            </Link>

            <Link href="/category/speakers">
              <a style={{ color: router.query?.category == "speakers" ? "#D87D4A" : "#fff" }}>
                speakers
              </a>
            </Link>

            <Link href="/category/earphones">
              <a style={{ color: router.query?.category == "earphones" ? "#D87D4A" : "#fff" }}>
                earphones
              </a>
            </Link>
          </ul>

          <span
            css={cartCss}
            onClick={() => {
              dispatch(toggleCart(!isCartOpen));
              !isCartOpen && window.scroll(0, 0);
            }}
          >
            <p>{cartProducts.length > 0 && cartProducts.length}</p>
            <Image src={cart} alt="cart" />
          </span>
        </Container>
      </Box>
      {isCartOpen && <Cart />}
    </Box>
  );
};

export default Navbar;
