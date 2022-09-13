import { PayloadAction } from "@reduxjs/toolkit";
import { CartState, cartProductType } from "interfaces/interfaces";

export const addToCart = (state: CartState, action: PayloadAction<cartProductType>) => {
  state.cartProducts.push(action.payload);
};

export const removeItemFromCart = (state: CartState, action: PayloadAction<string>) => {
  state.cartProducts = state.cartProducts.filter((p) => p.id !== action.payload);
};

export const clearCart = (state: CartState) => {
  state.cartProducts = [];
};

export const incrementQuantity = (state: CartState, action: PayloadAction<string>) => {
  const itemIndex = state.cartProducts.findIndex(
    (cartProduct: cartProductType) => cartProduct.id === action.payload
  );

  if (state.cartProducts[itemIndex]) {
    state.cartProducts[itemIndex].quantity >= 1 && (state.cartProducts[itemIndex].quantity += 1);
  } else {
    showToast({
      message: <h2>Product isn&apos;t in Cart. Add Product to cart First</h2>,
      type: "error",
    });
    toast;
  }
};

export const decrementQuantity = (state: CartState, action: PayloadAction<string>) => {
  const itemIndex = state.cartProducts.findIndex(
    (cartProduct: cartProductType) => cartProduct.id === action.payload
  );

  if (state.cartProducts[itemIndex]) {
    state.cartProducts[itemIndex].quantity >= 1 && (state.cartProducts[itemIndex].quantity -= 1);
  } else {
    showToast({
      message: <h2>Product isn&apos;t in Cart. Add Product to cart First</h2>,
      type: "error",
    });
  }
};
