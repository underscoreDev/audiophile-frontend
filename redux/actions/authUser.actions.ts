import { PayloadAction } from "@reduxjs/toolkit";
import { AuthUserState } from "redux/reducers/authUser.reducer";

export const getLoggedInUser = (state: AuthUserState, action: PayloadAction<{ data: any }>) => {
  state.user = action.payload.data;
};
