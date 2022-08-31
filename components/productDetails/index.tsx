import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BestAudio from "components/bestAudio";
import { showToast } from "utils/toast";
import Button from "components/buttons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Container from "@mui/material/Container";
import Image, { StaticImageData } from "next/image";
import { addItemToCart } from "redux/reducers/cartReducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import ProductPreview from "components/productPreview/productPreview";
import { cartProductType, CurrentProductProps, ProductsProps } from "interfaces/interfaces";
import CategoryGroup from "components/categoryGroup";
import {
  productCss,
  goBackButton,
  productDescCss,
  featuresCss,
  gridImageCss,
  suggestionProductCss,
} from "components/productDetails/style";
import { color } from "@mui/system";

const ProductDetail = () => {
  const router = useRouter();
  useTitle(`${router.query.productDetails} | PRODUCT`);
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const routeName: string | undefined | string[] = router?.query?.productDetails;
  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const currentProduct = products.find(
    (product: ProductsProps) => product.slug === routeName || product.name === routeName
  );

  useEffect(() => setQuantity(quantity), [router, quantity]);

  const addProductToCart = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts.map((product: cartProductType) => product.id).includes(currentProduct.slug)
      ) {
        showToast({
          message: <h2>{currentProduct?.name} is already in cart</h2>,
          type: "error",
        });
        return;
      } else {
        dispatch(
          addItemToCart({
            id: currentProduct.slug,
            quantity,
            product: currentProduct,
          })
        );
        showToast({ message: <h2>{currentProduct?.name} added to cart</h2>, type: "success" });
      }
    }
  };

  return (
    <Container sx={{ maxWidth: { xs: "lg", xl: "xl" } }} css={productCss}>
      <ToastContainer newestOnTop={true} />

      <h1 onClick={() => router.back()} css={goBackButton}>
        Go Back
      </h1>

      <Grid container justifyContent={"space-between"} alignItems="center">
        <Grid xs={12} sm={5} md={6}>
          <Image
            priority={true}
            src={currentProduct?.categoryImage.desktop}
            alt={`${routeName} image`}
            width={540}
            height={560}
            css={"border-radius:1rem"}
          />
        </Grid>

        <Grid
          xs={12}
          sm={7}
          md={6}
          sx={{ paddingLeft: { xs: 0, sm: "3rem" }, marginTop: { xs: "5rem", sm: 0 } }}
          css={productDescCss}
        >
          {currentProduct?.new && <h3>New Product</h3>}
          <h1>{currentProduct?.name}</h1>
          <p>{currentProduct?.description}</p>
          <h6>${currentProduct?.price}</h6>

          <span onClick={addProductToCart}>
            <Button text="add to cart" variant="PINK_DARK" />
          </span>
        </Grid>
      </Grid>

      <Box css={featuresCss}>
        <Grid container alignItems="flex-start" justifyContent={"space-between"}>
          <Grid xs={12} sm={7} md={6}>
            <h2>Features</h2>
            <p>{currentProduct?.features}</p>
          </Grid>

          <Grid
            xs={12}
            sm={5}
            md={6}
            sx={{ paddingLeft: { xs: 0, sm: "5rem" }, marginTop: { xs: "5rem", sm: 0 } }}
          >
            <h2>In the Box</h2>
            {currentProduct?.including.map((p: { quantity: number; item: string }) => (
              <p key={p.item}>
                <span>{p.quantity}X</span> {p.item}
              </p>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box
        display="grid"
        gap={2}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gridTemplateRows={"repeat(2, 1fr)"}
        justifyContent="space-between"
      >
        <Box gridColumn={"1/2"} gridRow={"1/2"}>
          <Image
            priority={true}
            src={currentProduct?.gallery.second.desktop}
            alt={`${routeName} image`}
          />
        </Box>

        <Box gridColumn={"2/-1"} gridRow={"1/-1"}>
          <Image
            priority={true}
            style={{ height: "100%" }}
            src={currentProduct?.gallery.third.desktop}
            alt={`${routeName} image`}
          />
        </Box>

        <Box gridColumn={"1/2"} gridRow={"2/-1"}>
          <Image
            priority={true}
            src={currentProduct?.gallery.first.desktop}
            alt={`${routeName} image`}
          />
        </Box>
      </Box>

      <h5>You May Also Like</h5>

      {/* <Box css={suggestionProductCss}>
        {currentProduct?.others.map((product: CurrentProductProps) => (
          <Box key={product.name}>
            <ProductPreview slug={product.slug} text={product.name} image={product.image.desktop} />
          </Box>
        ))}
      </Box> */}

      <Box css={"margin:15rem 0"}>
        <CategoryGroup />
      </Box>
      <BestAudio />
    </Container>
  );
};

export default ProductDetail;
