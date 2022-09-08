import { createApi } from "@reduxjs/toolkit/query/react";
import { VerifyEmailProps } from "components/auth/verify-email";
import { API_URL, axiosBaseQuery } from "redux/api/axiosBaseQuery";
import {
  CreateUserProps,
  LoginUserProps,
  EmailProps,
  ResetPasswordProps,
} from "interfaces/user.interface";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: `${API_URL}/auth` }),

  endpoints: (builder) => ({
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
    }),

    verifyUserEmail: builder.mutation<any, VerifyEmailProps>({
      query: (token) => ({ url: `/verify-email/${token.emailToken}`, method: "post" }),
    }),

    resendEmailToken: builder.mutation<any, EmailProps>({
      query: (email) => ({
        url: "/resend-email-confirmation-code",
        method: "post",
        data: email,
      }),
    }),

    loginUser: builder.mutation<any, LoginUserProps>({
      query: (user) => ({ url: "/login", method: "post", data: user }),
    }),

    logoutUser: builder.query<any, void>({
      query: () => ({ url: "/logout", method: "get" }),
    }),

    forgotPassword: builder.mutation<any, EmailProps>({
      query: (email) => ({ method: "patch", url: "/forgot-password", data: email }),
    }),

    resendForgotPasswordCode: builder.mutation<any, EmailProps>({
      query: (email) => ({ method: "patch", url: "/resend-forgot-password-code", data: email }),
    }),

    resetPassword: builder.mutation<any, ResetPasswordProps>({
      query: (data) => ({ method: "post", url: "/reset-password", data }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useVerifyUserEmailMutation,
  useForgotPasswordMutation,
  useLoginUserMutation,
  useLogoutUserQuery,
  useResendEmailTokenMutation,
  useResendForgotPasswordCodeMutation,
  useResetPasswordMutation,
} = authApi;
