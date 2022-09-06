import { createApi } from "@reduxjs/toolkit/query/react";
import { CreateUserProps, LoginUserProps } from "interfaces/user.interface";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: `${process.env.API_URL}/auth` }),

  endpoints: (builder) => ({
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
    }),

    loginUser: builder.mutation<void, LoginUserProps>({
      query: (user) => ({ url: "/login", method: "post", data: user }),
    }),
  }),
});

export const { useSignupUserMutation } = authApi;
