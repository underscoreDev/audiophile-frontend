import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useAppSelector } from "redux/store/store";
import { cartProductType } from "interfaces/interfaces";
import { getTotalPrice, grandTotal, shipping, vat } from "redux/reducers/cartReducer";
import {
  checkoutContainer,
  gridContainerCss,
  backButtonCss,
  checkoutGridCss,
  summaryGridCss,
} from "components/checkout/style";

const Checkout = () => {
  const total = useAppSelector(getTotalPrice);
  const vatPrice = useAppSelector(vat);
  const shippingPrice = useAppSelector(shipping);
  const grandTotalPrice = useAppSelector(() => grandTotal(total, vatPrice, shippingPrice));
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  return (
    <Box css={checkoutContainer}>
      <Container css={"padding:10rem 0"}>
        <Box css={"margin-bottom:5rem"}>
          <p css={backButtonCss}>Go Back</p>
        </Box>

        <Box display="grid" css={gridContainerCss} gridTemplateColumns="repeat(12,1fr)" gap={4}>
          <Box gridColumn="span 8" css={checkoutGridCss}>
            <h1>greg</h1>
          </Box>

          <Box gridColumn="span 4" css={summaryGridCss}>
            <h1>SUMMARY</h1>

            <Box className="cart__filled--body">
              {cartProducts.map((product: cartProductType) => (
                <Box key={product.id} className="cart__items">
                  <Box className="cart__items--desc">
                    <Image
                      width={64}
                      height={64}
                      src={product.product.categoryImage.desktop}
                      alt={`${product.id} image`}
                      css={"border-radius:1rem"}
                    />
                    <span>
                      <h1>{product.product.name}</h1>
                      <h2>${product.product.price}</h2>
                    </span>
                  </Box>

                  <Box className="cart__items--btn">
                    <h6> x{product.quantity}</h6>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box className="cart__total">
              <span>
                <h2>TOTAL </h2>
                <h1>$ {total}</h1>
              </span>
              <span>
                <h2>SHIPPING </h2>
                <h1>$ {shippingPrice}</h1>
              </span>
              <span>
                <h2>VAT (INCLUDED) </h2>
                <h1>$ {vatPrice}</h1>
              </span>
              <span>
                <h2>GRAND TOTAL </h2>
                <h1 className="grandTotal">$ {grandTotalPrice}</h1>
              </span>
              <button>CONTINUE</button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Checkout;
