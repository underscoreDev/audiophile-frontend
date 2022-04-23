import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ProductsProps } from "interfaces/interfaces";
import styled from "styled-components";
import { colors } from "utils/theme";
import Button from "components/buttons/button";
import Router from "next/router";
import { body, h1, lightText } from "utils/typography";
import { useAppSelector } from "redux/store/store";

const SwiperjsCarousel = () => {
  const { products } = useAppSelector(({ productsReducer }) => productsReducer);

  const newProducts = products.filter((p: ProductsProps) => p.new);

  return (
    <SwiperjsCarouselStyles>
      <Swiper
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        className="mySwiper"
        loop={true}
      >
        {newProducts.map((product: ProductsProps) => (
          <SwiperSlide key={product.slug}>
            <div className="slide">
              <div className="slide__description">
                <p>New product</p>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <span onClick={() => Router.push(`/product/${product.slug}`)}>
                  <Button text="see product" variant="PINK_DARK" />
                </span>
              </div>

              <div className="slide__image">
                <span>
                  <Image
                    width={550}
                    height={550}
                    src={product.image.desktop}
                    alt={`${product.name} image`}
                  />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperjsCarouselStyles>
  );
};

export default SwiperjsCarousel;

const SwiperjsCarouselStyles = styled.div`
  color: #fff;
  height: 63.2rem;
  background-color: ${colors.colorBlack};

  .slide {
    display: grid;
    grid-template-columns: 40% 1fr;
    justify-content: space-between;
    width: 100%;

    &__description {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      top: 7rem;

      p {
        ${lightText}
        text-transform: uppercase;
        margin-bottom: 2rem;
      }
      h1 {
        ${h1}
        left: 0;
        margin-bottom: 3rem;
        text-transform: uppercase;
      }
      h2 {
        ${body}
        margin-bottom: 3rem;
      }

      span {
      }
    }

    &__image {
      display: flex;
      justify-content: end;
      align-items: flex-end;
      position: relative;
      top: 5rem;
    }
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: flex-end;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .mySwiper {
    width: 80vw;
    border-top: 0.1rem solid #5e5e5e;
  }
`;
