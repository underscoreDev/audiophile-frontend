import Box from "@mui/material/Box";
import { useTitle } from "react-use";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BestAudio from "components/bestAudio";
import Button from "components/buttons/button";
import "react-toastify/dist/ReactToastify.css";
import Container from "@mui/material/Container";
import Image, { StaticImageData } from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { addItemToCart } from "redux/reducers/cartReducer";
import CategoryGroup from "components/categoryType/categoryGroup";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import ProductPreview from "components/productPreview/productPreview";
import { cartProductType, ProductsProps } from "interfaces/interfaces";
import {
  productCss,
  goBackButton,
  productImgContainer,
  productDescCss,
  productImageCss,
  featuresCss,
  gridImageCss,
  suggestionProductCss,
} from "components/productDetails/style";

interface CurrentProductProps {
  slug: string;
  name: string;
  image: {
    mobile: StaticImageData | any | string;
    tablet: StaticImageData | any | string;
    desktop: StaticImageData | any | string;
  };
}
const ProductDetail = () => {
  const router = useRouter();
  useTitle(`Product | ${router.query.productDetails}`);
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
        toast(<h1>{currentProduct?.name} is already in cart</h1>, {
          theme: "dark",
          type: "error",
          position: "top-left",
          autoClose: 3000,
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
        toast(<h1>{currentProduct?.name} added to cart</h1>, {
          theme: "dark",
          type: "success",
          position: "top-left",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <Container css={productCss}>
      <ToastContainer newestOnTop={true} />

      <h1 onClick={() => router.back()} css={goBackButton}>
        Go Back
      </h1>

      <Grid container spacing={12} justifyContent={"space-between"} css={productImgContainer}>
        <Grid item xs={7} css={productImageCss}>
          <Image
            priority={true}
            src={currentProduct?.categoryImage.desktop}
            alt={`${routeName} image`}
            width={540}
            height={560}
          />
        </Grid>

        <Grid item xs={5} css={productDescCss}>
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
        <Grid container spacing={12} justifyContent={"space-between"}>
          <Grid item xs={7}>
            <h2>Features</h2>
            <p>{currentProduct?.features}</p>
          </Grid>

          <Grid item xs={5}>
            <h2>In the Box</h2>
            {currentProduct?.including.map((p: { quantity: number; item: string }) => (
              <p key={p.item}>
                <span>{p.quantity}X</span> {p.item}
              </p>
            ))}
          </Grid>
        </Grid>
      </Box>

      <Box css={gridImageCss}>
        <Image
          className="img3"
          priority={true}
          src={currentProduct?.gallery.second.desktop}
          alt={`${routeName} image`}
        />
        <Image
          className="img1"
          priority={true}
          src={currentProduct?.gallery.third.desktop}
          alt={`${routeName} image`}
        />
        <Image
          className="img2"
          priority={true}
          src={currentProduct?.gallery.first.desktop}
          alt={`${routeName} image`}
        />
      </Box>

      <h5>You May Also Like</h5>

      <Box css={suggestionProductCss}>
        {currentProduct?.others.map((product: CurrentProductProps) => (
          <Box key={product.name}>
            <ProductPreview slug={product.slug} text={product.name} image={product.image.desktop} />
          </Box>
        ))}
      </Box>

      <Box css={"margin-bottom:15rem"}>
        <CategoryGroup />
        <BestAudio />
      </Box>
    </Container>
  );
};

export default ProductDetail;
