import React from "react";
import { useTitle } from "react-use";
import toast from "react-hot-toast";
import Button from "components/buttons";
import { VerificationCodeSchema } from "utils/yupSchema";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import { Formik, Form, FormikHelpers } from "formik";
import { signUpCss } from "components/auth/signup/style";
import { useVerifyUserEmailMutation } from "redux/api/auth.api";
import { formLabelCss, textFieldCss } from "components/checkout/style";
import { useRouter } from "next/router";

export interface VerifyEmailProps {
  emailToken: string;
}

const VerifyEmail = () => {
  useTitle("VERIFY-EMAIL | AUDIOPHILE");
  const [verifyUser, { isLoading, data }] = useVerifyUserEmailMutation();
  const router = useRouter();

  const [signupValues, setSignupValues] = React.useState<VerifyEmailProps>({ emailToken: "" });

  const handleSubmit = async (
    values: VerifyEmailProps,
    { setSubmitting }: FormikHelpers<VerifyEmailProps>
  ) => {
    try {
      await verifyUser({ emailToken: values.emailToken });
      console.log(data);
      toast.success("Signup Successful. Check Email to verify your Email");
      setSubmitting(false);
      router.push("/");
    } catch (error: any) {
      toast.error(`${error.data.message}`);

      setSubmitting(false);
    }
  };

  return (
    <Container css={signUpCss}>
      <h1>Verify Email</h1>
      <Formik
        initialValues={signupValues}
        validationSchema={VerificationCodeSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.emailToken && Boolean(errors.emailToken))}
                  htmlFor="emailToken"
                >
                  Input Email Verification Code
                </InputLabel>
                <TextField
                  id="emailToken"
                  css={textFieldCss}
                  name="emailToken"
                  placeholder="Alexei Sanchez"
                  value={values.emailToken.trim().slice(0, 6)}
                  onChange={handleChange}
                  error={touched.emailToken && Boolean(errors.emailToken)}
                  helperText={touched.emailToken && errors.emailToken}
                />
              </Grid>
            </Grid>

            <Button
              text={isSubmitting || isLoading ? "Verifying" : "Submit"}
              type="submit"
              disabled={isSubmitting || isLoading}
              variant={isSubmitting || isLoading ? "PINK_LIGHT" : "PINK_DARK"}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default VerifyEmail;
