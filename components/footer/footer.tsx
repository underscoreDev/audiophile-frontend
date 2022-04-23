import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "utils/theme";
import logo from "assets/shared/desktop/logo.svg";
import { body, boldText } from "utils/typography";
import facebookIcon from "assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "assets/shared/desktop/icon-twitter.svg";
const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer">
        <div className="footer__nav">
          <Image className="footer__nav--logo" src={logo} alt="footer logo" />

          <ul className="footer__nav--links">
            <Link href="/">Home</Link>
            <Link href="/category/headphones">Headphones</Link>
            <Link href="/category/speakers">Speakers</Link>
            <Link href="/category/earphones">Earphones</Link>
          </ul>
        </div>

        <div className="footer__description">
          <p className="footer__description--text">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team <br /> of music lovers and sound specialists
            who are devoted to helping you get the <br /> most out of personal
            audio. Come and visit our demo facility - we&apos;re open 7 <br />{" "}
            days a week.
          </p>
          <div className="footer__description--socialLinks">
            <span className="footer__description--socialLinks--link">
              <Image alt="footer social links" src={facebookIcon} />
            </span>
            <span className="footer__description--socialLinks--link">
              <Image alt="footer social links" src={instagramIcon} />
            </span>
            <span className="footer__description--socialLinks--link">
              <Image alt="footer social links" src={twitterIcon} />
            </span>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="footer__description--text">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;

const FooterStyles = styled.section`
  background-color: ${colors.colorBlack};
  height: 36.5rem;
  color: ${colors.colorLightWhite};
  padding: 0 10rem;

  &::before {
    content: "";
    width: 10.1rem;
    height: 0.4rem;
    background-color: ${colors.colorDarkPink};
    position: absolute;
  }

  .footer {
    &__nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 7rem;

      &--links {
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

    &__description {
      margin-top: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      &--text {
        ${body}
      }

      &--socialLinks {
        &--link {
          margin-right: 2rem;
        }
      }
    }

    &__copyright {
      margin-top: 5rem;
    }
  }
`;
