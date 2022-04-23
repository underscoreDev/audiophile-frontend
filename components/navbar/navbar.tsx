import styled from "styled-components";
import { colors } from "utils/theme";
import { useState, useEffect } from "react";
import logo from "assets/shared/desktop/logo.svg";
import cart from "assets/shared/desktop/icon-cart.svg";
import Image from "next/image";
import { boldText } from "utils/typography";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "redux/store/store";
import Cart from "components/cart/cart";
import { toggleCart } from "redux/reducers/cartReducer";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const [scrolled, setScrolled] = useState(false);

  const handleScrolled = () =>
    window.scrollY > 100 ? setScrolled(true) : setScrolled(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);
  }, [scrolled]);

  const { cartProducts, isCartOpen } = useAppSelector(
    ({ cartReducer }) => cartReducer
  );

  return (
    <>
      <NavbarStyles
        style={{
          position: scrolled ? "fixed" : "relative",
        }}
      >
        <div className="nav">
          <Image className="nav__logo" src={logo} alt="nav logo" />

          <ul className="nav__links">
            <Link href="/">Home</Link>
            <Link href="/category/headphones">Headphones</Link>
            <Link href="/category/speakers">Speakers</Link>
            <Link href="/category/earphones">Earphones</Link>
          </ul>

          <span
            className="cart"
            onClick={() => dispatch(toggleCart(!isCartOpen))}
          >
            <p>{cartProducts.length > 0 && cartProducts.length}</p>
            <Image src={cart} alt="cart" />
          </span>
        </div>
      </NavbarStyles>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Navbar;

const NavbarStyles = styled.nav`
  background-color: ${colors.colorBlack};
  height: 9.7rem;
  width: 100%;
  padding: 10px;
  color: ${colors.colorWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 9;

  .cart {
    cursor: pointer;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &__logo {
    }

    &__links {
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
    }
  }
`;
