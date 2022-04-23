import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "interfaces/interfaces";

import {
  removeItemFromCart,
  addToCart,
  clearCart,
  toggleCartOpening,
  incrementQuantity,
  decrementQuantity,
} from "redux/actions/actions";
import { RootState } from "redux/store/store";

const initialState: CartState = {
  cartProducts: [],
  isCartOpen: false,
  total: 0,
  shipping: 0,
  vat: 0,
  grandTotal: 0,
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addItemToCart: addToCart,
    removeFromCart: removeItemFromCart,
    clearCartItems: clearCart,
    toggleCart: toggleCartOpening,
    increaseQuantity: incrementQuantity,
    decreaseQuantity: decrementQuantity,
  },
});

export const {
  addItemToCart,
  removeFromCart,
  clearCartItems,
  toggleCart,
  increaseQuantity,
  decreaseQuantity,
} = cartReducer.actions;

export const getTotalPrice = (state: RootState) =>
  state.cartReducer.cartProducts.reduce(
    (acc, next) => (acc += next.quantity * next.product.price),
    0
  );

export default cartReducer.reducer;
