import { createApi } from "@reduxjs/toolkit/query/react";
import { CreateUserProps } from "interfaces/user.interface";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: "http://127.0.0.1:9898/api/v1/auth" }),

  endpoints: (builder) => ({
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
    }),
  }),
});

export const { useSignupUserMutation } = authApi;
