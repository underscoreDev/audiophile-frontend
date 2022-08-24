import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import Cart from "components/cart/cart";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import logo from "assets/shared/desktop/logo.svg";
import { useAppSelector } from "redux/store/store";
import cart from "assets/shared/desktop/icon-cart.svg";
import Hamburger from "assets/shared/tablet/icon-hamburger.svg";
import { RandomlyPositionedModal, Backdrop } from "components/cart/style";
import CategoryGroup from "components/categoryGroup";
import {
  navCss,
  cartCss,
  navLinkCss,
  hamburgerCss,
  cateoryGroupCss,
  navbarContainerCss,
  categoryNotActiveCss,
} from "components/navbar/style";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavactive, setIsNavactive] = useState<boolean>(false);
  useEffect(() => window.addEventListener("scroll", handleScrolled), [scrolled]);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const handleScrolled = () => (window.scrollY > 100 ? setScrolled(true) : setScrolled(false));
  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  return (
    <Box css={"position: relative"}>
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

          <span onClick={() => setOpen(!open)}>
            {cartProducts.length > 0 && <p css={cartCss}>{cartProducts.length}</p>}
            <Image src={cart} alt="cart" />
          </span>
        </Container>
      </Box>

      <RandomlyPositionedModal
        show={open}
        onHide={() => setOpen(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <Cart setOpen={setOpen} />
      </RandomlyPositionedModal>
    </Box>
  );
};

export default Navbar;
