import { PayloadAction } from "@reduxjs/toolkit";
import { CartState, cartProductType } from "interfaces/interfaces";
import { toast } from "react-toastify";

export const addToCart = (
  state: CartState,
  action: PayloadAction<cartProductType>
) => {
  state.cartProducts.push(action.payload);
};

export const removeItemFromCart = (
  state: CartState,
  action: PayloadAction<string>
) => {
  state.cartProducts.filter((p) => p.id !== action.payload);
};

export const clearCart = (state: CartState) => {
  state.cartProducts = [];
};

export const toggleCartOpening = (
  state: CartState,
  action: PayloadAction<boolean>
) => {
  state.isCartOpen = action.payload;
};

export const incrementQuantity = (
  state: CartState,
  action: PayloadAction<string>
) => {
  const itemIndex = state.cartProducts.findIndex(
    (cartProduct: cartProductType) => cartProduct.id === action.payload
  );

  if (state.cartProducts[itemIndex]) {
    state.cartProducts[itemIndex].quantity >= 1 &&
      (state.cartProducts[itemIndex].quantity += 1);
  } else {
    toast(<h3>Product isn't in Cart. Add Product to cart First</h3>, {
      theme: "dark",
      type: "error",
      position: "top-left",
      autoClose: 3000,
    });
  }
};

export const decrementQuantity = (
  state: CartState,
  action: PayloadAction<string>
) => {
  const itemIndex = state.cartProducts.findIndex(
    (cartProduct: cartProductType) => cartProduct.id === action.payload
  );

  if (state.cartProducts[itemIndex]) {
    state.cartProducts[itemIndex].quantity >= 1 &&
      (state.cartProducts[itemIndex].quantity -= 1);
  } else {
    toast(<h3>Product isn't in Cart. Add Product to cart First</h3>, {
      theme: "dark",
      type: "error",
      position: "top-left",
      autoClose: 3000,
    });
  }
};
