import { createSlice } from "@reduxjs/toolkit";
import { getLoggedInUser } from "redux/actions/authUser.actions";

export interface AuthUserState {
  data: {
    email: string;
    firstname: string;
    id: string;
    isEmailVerified: boolean;
    lastname: string;
    photo: string;
    role: string;
  } | null;
}

const initialState: AuthUserState = {
  data: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    getAuthUser: getLoggedInUser,
  },
});

export const { getAuthUser } = authReducer.actions;

export default authReducer.reducer;
