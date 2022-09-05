import { authApi } from "redux/api/auth.api";
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "redux/reducers/cartReducer";
import productsReducer from "redux/reducers/productsReducer";

const rootReducers = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  cartReducer,
  productsReducer,
});

export default rootReducers;
