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
    paymentMethod: "",
  };

  const handleSubmit = async (
    values: FormValuesProps,
    { setSubmitting }: FormikHelpers<FormValuesProps>
  ) => {
    await sleep(5000);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <Box css={checkoutContainer}>
      <Container css={"padding:10rem 0"}>
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
          {({ errors, touched, isSubmitting, values, handleChange }) => (
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

                  <h2 css={sectionTitleCss} id="my-radio-group">
                    Payment Details
                  </h2>
                  <div role="group" aria-labelledby="my-radio-group">
                    <label>
                      <FastField type="radio" name="paymentMethod" value="One" />
                      One
                    </label>
                    <br />
                    <label>
                      <FastField type="radio" name="paymentMethod" value="Two" />
                      Two
                    </label>
                    {errors.paymentMethod && touched.paymentMethod ? (
                      <div>{errors.paymentMethod}</div>
                    ) : null}
                  </div>
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
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default Checkout;
