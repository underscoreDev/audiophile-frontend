import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

const authApi = createApi({
  reducerPath: "authReducer",
  baseQuery: axiosBaseQuery({ baseUrl: "https://localhost:8998/api/v1/users" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({ query: () => ({ url: "/register", method: "post" }) }),
    verifyToken: builder.query({ query: () => ({ url: "/verify-token", method: "get" }) }),
  }),
});

export const { useVerifyTokenQuery, useRegisterUserMutation } = authApi;
