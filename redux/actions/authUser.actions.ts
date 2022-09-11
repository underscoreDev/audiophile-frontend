import { PayloadAction } from "@reduxjs/toolkit";
import { AuthUserState } from "redux/reducers/authUser.reducer";

export const getLoggedInUser = (state: AuthUserState, action: PayloadAction<AuthUserState>) => {
  state.data = action.payload.data;
};
