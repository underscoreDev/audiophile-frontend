import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "redux/reducers/cartReducer";
import productsReducer from "redux/reducers/productsReducer";

const rootReducers = combineReducers({
  cartReducer,
  productsReducer,
});

export default rootReducers;
