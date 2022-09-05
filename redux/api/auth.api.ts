import { createApi } from "@reduxjs/toolkit/query/react";
import { CreateUserProps } from "interfaces/user.interface";
import { REHYDRATE } from "redux-persist";
import { axiosBaseQuery } from "redux/api/axiosBaseQuery";

export const authApi = createApi({
  reducerPath: "authApi",

  tagTypes: ["Auth"],

  baseQuery: axiosBaseQuery({ baseUrl: "https://localhost:8998/api/v1/auth" }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    signupUser: builder.mutation<void, CreateUserProps>({
      query: (user) => ({ url: "/signup", method: "post", data: user }),
    }),
  }),
});

export const { useSignupUserMutation } = authApi;
