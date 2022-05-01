import * as Yup from "yup";

export const CheckoutSchema = Yup.object().shape({
  paymentMethod: Yup.string().required("A Option is required"),
  email: Yup.string().email("Wrong Format").required("Required"),
  fullName: Yup.string().min(3, "Name Too Short!").max(50, "Name Too Long!").required("Required"),

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
