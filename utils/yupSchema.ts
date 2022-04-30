import * as Yup from "yup";

export const CheckoutSchema = Yup.object().shape({
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
