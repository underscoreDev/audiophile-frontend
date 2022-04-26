import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import router from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "components/buttons/button";
import Container from "@mui/material/Container";
import { useAppSelector } from "redux/store/store";
import { ProductsProps } from "interfaces/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import {
  gridContainerCss,
  gridItemImageCss,
  headerCarouselContainer,
  headerTextCss,
} from "components/carousel/style";

export function HeaderCarousel() {
  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const newProducts = products.filter((p: ProductsProps) => p.new === true);
  console.log(newProducts);
  return (
    <Box css={headerCarouselContainer}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {newProducts.map((product: ProductsProps) => (
          <SwiperSlide key={product.slug}>
            <Container>
              <Grid
                container
                spacing={4}
                direction="row"
                justifyContent="center"
                alignItems="center"
                css={gridContainerCss}
                style={{ marginTop: 0 }}
              >
                <Grid item lg={5} md={6} css={headerTextCss}>
                  <p>New product</p>
                  <h1>{product.name}</h1>
                  <h2>{product.description}</h2>
                  <span onClick={() => router.push(`/product/${product.slug}`)}>
                    <Button text="see product" variant="PINK_DARK" />
                  </span>
                </Grid>

                <Grid item lg={7} md={6} css={gridItemImageCss}>
                  <Image
                    width={550}
                    height={550}
                    src={product.image.desktop}
                    alt={`${product.name} image`}
                  />
                </Grid>
              </Grid>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
