import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useAppSelector } from "redux/store/store";
import { cartProductType } from "interfaces/interfaces";
import { getTotalPrice, grandTotal, shipping, vat } from "redux/reducers/cartReducer";
import { useRouter } from "next/router";
import {
  checkoutContainer,
  gridContainerCss,
  backButtonCss,
  checkoutGridCss,
  summaryGridCss,
} from "components/checkout/style";
import { Formik, Form, Field, FormikHelpers, FastField } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";

interface FormValuesProps {
  fullName: string;
  email: string;
  phoneNumber: number;
  address: string;
  zipCode: number;
  city: string;
  country: string;
  paymentMethod: string;
}

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
    phoneNumber: 0,
    address: "",
    zipCode: 0,
    city: "",
    country: "",
    paymentMethod: "",
  };

  const SignupSchema = Yup.object().shape({
    paymentMethod: Yup.string().required("Required"),

    fullName: Yup.string().min(3, "Name Too Short!").max(50, "Name Too Long!").required("Required"),

    email: Yup.string().email("Wrong Format").required("Required"),

    phoneNumber: Yup.number()
      .min(5, "Number Too Short!")
      .max(14, "Number Too Long!")
      .required("This field is required"),

    zipCode: Yup.number()
      .min(1, "Number Too Short!")
      .max(7, "Number Too Long!")
      .required("This field is required"),

    address: Yup.string()
      .min(3, "Address Too Short!")
      .max(50, "Address Too Long!")
      .required("This field is required"),

    city: Yup.string()
      .min(3, "City Too Short!")
      .max(50, "City Too Long!")
      .required("This field is required"),

    country: Yup.string()
      .min(3, "Country Too Short!")
      .max(50, "Country Too Long!")
      .required("This field is required"),
  });

  const handleSubmit = async (
    values: FormValuesProps,
    { setSubmitting }: FormikHelpers<FormValuesProps>
  ) => {
    await sleep(5000);
    await alert(JSON.stringify(values, null, 2));
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
          validationSchema={SignupSchema}
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
                  <h1>CHECKOUT</h1>

                  <h2>Billing Details</h2>
                  <label htmlFor="email">Email</label>
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <label htmlFor="fullName">First Name</label>
                  <FastField id="fullName" name="fullName" placeholder="John" />
                  {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
                  <br />

                  <FastField name="email" type="email" />
                  {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  <br />
                  <div id="my-radio-group">paymentMethod</div>
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
