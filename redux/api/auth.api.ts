import { createApi } from "@reduxjs/toolkit/query/react";
import { VerifyEmailProps } from "components/auth/verify-email";
import { CreateUserProps, LoginUserProps } from "interfaces/user.interface";
import { API_URL, axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: `${API_URL}/auth` }),

  endpoints: (builder) => ({
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
    }),

    verifyUserEmail: builder.mutation<void, VerifyEmailProps>({
      query: (token) => ({ url: `/verify-email/${token}`, method: "post" }),
    }),

    loginUser: builder.mutation<void, LoginUserProps>({
      query: (user) => ({ url: "/login", method: "post", data: user }),
    }),
  }),
});

export const { useSignupUserMutation, useVerifyUserEmailMutation } = authApi;
