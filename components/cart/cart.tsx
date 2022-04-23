import React from "react";
import styled from "styled-components";
import { colors } from "utils/theme";
import { useAppSelector } from "redux/store/store";
import Image from "next/image";
import Button from "components/buttons/button";
import { useAppDispatch } from "redux/store/store";
import { cartProductType } from "interfaces/interfaces";
import {
  decreaseQuantity,
  increaseQuantity,
  clearCartItems,
  getTotalPrice,
} from "redux/reducers/cartReducer";

const Cart = () => {
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  const total = useAppSelector(getTotalPrice);

  const dispatch = useAppDispatch();
  return (
    <CartStyles>
      {cartProducts.length === 0 ? (
        <h1>Your cart is Empty, Continue Shopping</h1>
      ) : (
        <>
          <div className="cart__header">
            <h1>Cart ({cartProducts.length})</h1>
            <button onClick={() => dispatch(clearCartItems())}>
              Remove all
            </button>
          </div>
          <>
            {cartProducts.map((product: cartProductType) => (
              <div key={product.id} className="cart__items">
                <Image
                  width={60}
                  height={50}
                  src={product.product.image.desktop}
                  alt={`${product.id} image`}
                />
                <h1>{product.product.name}</h1>
                <h2>${product.product.price}</h2>
                <button
                  disabled={product.quantity === 1}
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  <h1>-</h1>
                </button>

                <h1>{product.quantity}</h1>

                <button onClick={() => dispatch(increaseQuantity(product.id))}>
                  <h1>+</h1>
                </button>
              </div>
            ))}
          </>
          <h1>TOTAL - {total}</h1>
          <Button text={"CHECKOUT"} variant={"PINK_DARK"} />
        </>
      )}
    </CartStyles>
  );
};

export default Cart;

const CartStyles = styled.div`
  width: 37.7rem;
  height: 48.8rem;
  background-color: ${colors.colorWhite};
  position: absolute;
  z-index: 100;
  right: 5rem;
  top: 10rem;
  padding: 3rem 1rem;

  .cart {
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
    }
    &__items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
  }
`;
