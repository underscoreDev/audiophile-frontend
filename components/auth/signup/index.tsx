import React from "react";
import Button from "components/buttons";
import { SignupSchema } from "utils/yupSchema";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { Formik, Form, FormikHelpers } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import OutlinedInput from "@mui/material/OutlinedInput";
import { signUpCss } from "components/auth/signup/style";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { formLabelCss, textFieldCss } from "components/checkout/style";

export interface SignupProps {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
}

const SignUp = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const [signupValues, setSignupValues] = React.useState<SignupProps>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    showPassword: false,
    showPasswordConfirm: false,
  });

  const handleClickShowPassword = () =>
    setSignupValues({
      ...signupValues,
      showPassword: !signupValues.showPassword,
    });

  const handleClickShowPasswordConfirm = () =>
    setSignupValues({
      ...signupValues,
      showPasswordConfirm: !signupValues.showPasswordConfirm,
    });

  const handleSubmit = async (
    values: SignupProps,
    { setSubmitting }: FormikHelpers<SignupProps>
  ) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <Container css={signUpCss}>
      <h1>Signup</h1>
      <Formik initialValues={signupValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <Grid container justifyContent="space-between">
              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.firstname && Boolean(errors.firstname))}
                  htmlFor="firstname"
                >
                  Firstname
                </InputLabel>
                <TextField
                  id="firstname"
                  css={textFieldCss}
                  name="firstname"
                  placeholder="Alexei Sanchez"
                  value={values.firstname}
                  onChange={handleChange}
                  error={touched.firstname && Boolean(errors.firstname)}
                  helperText={touched.firstname && errors.firstname}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.lastname && Boolean(errors.lastname))}
                  htmlFor="lastname"
                >
                  Lastname
                </InputLabel>
                <TextField
                  id="lastname"
                  css={textFieldCss}
                  name="lastname"
                  placeholder="Alexei Sanchez"
                  value={values.lastname}
                  onChange={handleChange}
                  error={touched.lastname && Boolean(errors.lastname)}
                  helperText={touched.lastname && errors.lastname}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.email && Boolean(errors.email))}
                  htmlFor="email"
                >
                  Email
                </InputLabel>
                <TextField
                  id="email"
                  css={textFieldCss}
                  name="email"
                  placeholder="email@gmail.com"
                  value={values.email.trim()}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.phone && Boolean(errors.phone))}
                  htmlFor="phone"
                >
                  Phone Number
                </InputLabel>
                <TextField
                  id="phone"
                  css={textFieldCss}
                  name="phone"
                  placeholder="+2348012345678"
                  value={values.phone.trim()}
                  onChange={handleChange}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.password && Boolean(errors.password))}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  css={textFieldCss}
                  name="password"
                  placeholder="Enter your password"
                  type={signupValues.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  error={touched.password && Boolean(errors.password)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={(evt: React.MouseEvent<HTMLButtonElement>) =>
                          evt.preventDefault()
                        }
                        edge="end"
                      >
                        {signupValues.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </Grid>

              <Grid xs={12} sm={5.5} sx={{ margin: "1rem 0" }}>
                <InputLabel
                  css={formLabelCss(touched.passwordConfirm && Boolean(errors.passwordConfirm))}
                  htmlFor="passwordConfirm"
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="passwordConfirm"
                  css={textFieldCss}
                  name="passwordConfirm"
                  placeholder="Confirm your password"
                  type={signupValues.showPasswordConfirm ? "text" : "passwordConfirm"}
                  value={values.passwordConfirm}
                  onChange={handleChange("passwordConfirm")}
                  error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password confirm visibility"
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={(evt: React.MouseEvent<HTMLButtonElement>) =>
                          evt.preventDefault()
                        }
                        edge="end"
                      >
                        {signupValues.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="PasswordConfirm"
                />
              </Grid>
            </Grid>

            <Button text="Sign up" type="submit" variant="PINK_DARK" />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default SignUp;
