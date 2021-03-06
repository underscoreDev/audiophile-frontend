import Image from "next/image";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { CheckoutSchema } from "utils/yupSchema";
import { useAppSelector } from "redux/store/store";
import { Formik, Form, FormikHelpers, FastField } from "formik";
import { cartProductType, FormValuesProps } from "interfaces/interfaces";
import { getTotalPrice, grandTotal, shipping, vat } from "redux/reducers/cartReducer";
import cashOnDelivery from "assets/cart/cash on delivery.png";
import {
  checkoutContainer,
  gridContainerCss,
  backButtonCss,
  checkoutGridCss,
  summaryGridCss,
  formLabelCss,
  checkoutTextCss,
  textFieldCss,
  sectionTitleCss,
  paymentMethodCss,
  cashOnDeliveryCss,
  paymentContainerCss,
  methodCss,
} from "components/checkout/style";

const Checkout = () => {
  const router = useRouter();
  const vatPrice = useAppSelector(vat);
  const total = useAppSelector(getTotalPrice);
  const shippingPrice = useAppSelector(shipping);
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);
  const grandTotalPrice = useAppSelector(() => grandTotal(total, vatPrice, shippingPrice));

  const initialvalues: FormValuesProps = {
    fullName: "",
    email: "",
    phoneNumber: null,
    address: "",
    zipCode: null,
    city: "",
    country: "",
    paymentMethod: "cash",
    eMoneyNumber: null,
    eMoneyPin: null,
  };

  const handleSubmit = async (
    values: FormValuesProps,
    { setSubmitting }: FormikHelpers<FormValuesProps>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <Box css={checkoutContainer}>
      <Container maxWidth="lg" css={"padding:10rem 0"}>
        <Box css={"margin-bottom:5rem"}>
          <p onClick={() => router.back()} css={backButtonCss}>
            Go Back
          </p>
        </Box>

        <Formik
          initialValues={initialvalues}
          validationSchema={CheckoutSchema}
          onSubmit={handleSubmit}
          validateOnChange
        >
          {({ errors, touched, isSubmitting, values, handleChange }) => {
            return (
              <Form>
                <Box
                  display="grid"
                  css={gridContainerCss}
                  gridTemplateColumns="repeat(12,1fr)"
                  gap={4}
                >
                  <Box gridColumn="span 8" css={checkoutGridCss}>
                    <h1 css={checkoutTextCss}>CHECKOUT</h1>

                    <h2 css={sectionTitleCss}>Billing Details</h2>
                    <Box
                      css={`
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        margin-bottom: 3rem;
                      `}
                    >
                      <Box>
                        <label
                          css={formLabelCss(touched.fullName && Boolean(errors.fullName))}
                          htmlFor="fullName"
                        >
                          Full Name
                        </label>
                        <TextField
                          id="fullName"
                          css={textFieldCss}
                          name="fullName"
                          placeholder="Alexei Sanchez"
                          value={values.fullName}
                          onChange={handleChange}
                          error={touched.fullName && Boolean(errors.fullName)}
                          helperText={touched.fullName && errors.fullName}
                        />
                      </Box>
                      <Box>
                        {" "}
                        <label
                          css={formLabelCss(touched.email && Boolean(errors.email))}
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <TextField
                          id="email"
                          css={textFieldCss}
                          name="email"
                          label="Email"
                          value={values.email}
                          onChange={handleChange}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Box>
                      <Box>
                        <label
                          css={formLabelCss(touched.phoneNumber && Boolean(errors.phoneNumber))}
                          htmlFor="phoneNumber"
                        >
                          Phone Number
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="+234(90)1120-7786"
                          value={values.phoneNumber}
                          onChange={handleChange}
                        />
                      </Box>
                    </Box>

                    <h2 css={sectionTitleCss}>Shipping Info</h2>

                    <Box>
                      <label
                        css={formLabelCss(touched.address && Boolean(errors.address))}
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <TextField
                        fullWidth
                        css={textFieldCss}
                        id="address"
                        name="address"
                        placeholder="1137 Williams Avenue"
                        value={values.address}
                        onChange={handleChange}
                        error={touched.address && Boolean(errors.address)}
                        helperText={touched.address && errors.address}
                      />
                    </Box>

                    <Box
                      css={`
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        margin-bottom: 3rem;
                      `}
                    >
                      <Box>
                        <label
                          css={formLabelCss(touched.zipCode && Boolean(errors.zipCode))}
                          htmlFor="zipCode"
                        >
                          Zip Code
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="zipCode"
                          name="zipCode"
                          placeholder="10001"
                          value={values.zipCode}
                          onChange={handleChange}
                        />
                      </Box>

                      <Box>
                        <label
                          css={formLabelCss(touched.city && Boolean(errors.city))}
                          htmlFor="city"
                        >
                          City
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="city"
                          name="city"
                          placeholder="New York"
                          value={values.city}
                          onChange={handleChange}
                          error={touched.city && Boolean(errors.city)}
                          helperText={touched.city && errors.city}
                        />
                      </Box>

                      <Box>
                        <label
                          css={formLabelCss(touched.country && Boolean(errors.country))}
                          htmlFor="country"
                        >
                          Country
                        </label>
                        <TextField
                          css={textFieldCss}
                          id="country"
                          name="country"
                          placeholder="United States"
                          value={values.country}
                          onChange={handleChange}
                          error={touched.country && Boolean(errors.country)}
                          helperText={touched.country && errors.country}
                        />
                      </Box>
                    </Box>

                    <Box css={paymentContainerCss}>
                      <h2 css={sectionTitleCss}>Payment Details</h2>
                      <Box css={paymentMethodCss}>
                        <h3>Payment Method</h3>

                        <Box>
                          <Box css={methodCss(errors.paymentMethod && touched.paymentMethod)}>
                            <FastField
                              id="e-Money"
                              htmlFor="e-Money"
                              type="radio"
                              name="paymentMethod"
                              value="e-Money"
                            />
                            <label id="e-Money" htmlFor="e-Money">
                              e-Money
                            </label>
                          </Box>

                          <Box css={methodCss(errors.paymentMethod && touched.paymentMethod)}>
                            <FastField
                              id="cash"
                              htmlFor="cash"
                              type="radio"
                              name="paymentMethod"
                              value="cash"
                            />
                            <label id="cash" htmlFor="cash">
                              Cash on Delivery
                            </label>
                          </Box>
                        </Box>
                      </Box>

                      {values.paymentMethod === "cash" ? (
                        <Box css={cashOnDeliveryCss}>
                          <Image src={cashOnDelivery} alt="cashOnDelivery" />
                          <p>
                            The ???Cash on Delivery??? option enables you to pay in cash when our
                            delivery courier arrives at your residence. Just make sure your address
                            is correct so that your order will not be cancelled.
                          </p>
                        </Box>
                      ) : (
                        <Box
                          css={`
                            display: flex;
                            justify-content: space-between;
                            flex-wrap: wrap;
                            margin-top: 3rem;
                          `}
                        >
                          <Box>
                            <label
                              css={formLabelCss(
                                touched.eMoneyNumber && Boolean(errors.eMoneyNumber)
                              )}
                              htmlFor="eMoneyNumber"
                            >
                              e-Money Number
                            </label>
                            <TextField
                              css={textFieldCss}
                              id="eMoneyNumber"
                              name="eMoneyNumber"
                              placeholder="238521993"
                              value={values.eMoneyNumber}
                              onChange={handleChange}
                            />
                          </Box>
                          <Box>
                            <label
                              css={formLabelCss(touched.eMoneyPin && Boolean(errors.eMoneyPin))}
                              htmlFor="eMoneyPin"
                            >
                              e-Money Pin
                            </label>
                            <TextField
                              css={textFieldCss}
                              id="eMoneyPin"
                              name="eMoneyPin"
                              placeholder="7786"
                              value={values.eMoneyPin}
                              onChange={handleChange}
                            />
                          </Box>
                        </Box>
                      )}
                    </Box>
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
                      <button type="submit" disabled={isSubmitting}>
                        CONTINUE
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </Box>
  );
};

export default Checkout;
