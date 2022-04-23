import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Button from "components/buttons/button";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "redux/store/store";
import ProductPreview from "components/productPreview/productPreview";
import {
  addItemToCart,
  decreaseQuantity,
  increaseQuantity,
} from "redux/reducers/cartReducer";
import { cartProductType, ProductsProps } from "interfaces/interfaces";

const ProductDetail = () => {
  const router = useRouter();
  const routeName: string | undefined | string[] =
    router?.query?.productDetails;

  const [quantity, setQuantity] = useState(1);

  const { products } = useAppSelector(({ productsReducer }) => productsReducer);
  const { cartProducts } = useAppSelector(({ cartReducer }) => cartReducer);

  const currentProduct = products.find(
    (product: ProductsProps) =>
      product.slug === routeName || product.name === routeName
  );

  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts
          .map((product: cartProductType) => product.id)
          .includes(currentProduct.slug)
      ) {
        toast(<h1>{currentProduct?.name} is already in cart</h1>, {
          theme: "dark",
          type: "error",
          position: "top-left",
          autoClose: 3000,
        });
        return;
      }

      dispatch(
        addItemToCart({
          id: currentProduct.slug,
          quantity,
          product: currentProduct,
        })
      );

      toast(<h1>{currentProduct?.name} added to cart</h1>, {
        theme: "dark",
        type: "success",
        position: "top-left",
        autoClose: 3000,
      });
    }
  };

  const handleIncrement = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts
          .map((product: cartProductType) => product.id)
          .includes(currentProduct.slug) === false
      ) {
        return toast(
          <h3>Product isn&apos;t in Cart. Add Product to cart First</h3>,
          {
            theme: "dark",
            type: "error",
            position: "top-left",
            autoClose: 3000,
          }
        );
      }
      setQuantity(quantity + 1);
      dispatch(increaseQuantity(currentProduct?.slug));
    }
  };

  const handleDecrement = () => {
    if (currentProduct === undefined) {
      return;
    } else {
      if (
        cartProducts
          .map((product: cartProductType) => product.id)
          .includes(currentProduct.slug) === false
      ) {
        return toast(
          <h3>Product isn&apos;t in Cart. Add Product to cart First</h3>,
          {
            theme: "dark",
            type: "error",
            position: "top-left",
            autoClose: 3000,
          }
        );
      }
      setQuantity(quantity - 1);
      dispatch(decreaseQuantity(currentProduct?.slug));
    }
  };

  return (
    <div>
      <ToastContainer newestOnTop={true} />
      <Image
        priority={true}
        src={currentProduct?.image.desktop}
        alt={`${routeName} image`}
      />
      {currentProduct?.new && <h3>New Product</h3>}
      <h1>{currentProduct?.name}</h1>
      <p>{currentProduct?.description}</p>
      <h2>Features</h2>
      <p>{currentProduct?.features}</p>
      <p>${currentProduct?.price}</p>

      {currentProduct?.including.map(
        (p: { quantity: number; item: string }) => (
          <p key={p.item}>
            {p.quantity}X {p.item}
          </p>
        )
      )}

      <Image
        priority={true}
        src={currentProduct?.gallery.first.desktop}
        alt={`${routeName} image`}
      />
      <Image
        priority={true}
        src={currentProduct?.gallery.second.desktop}
        alt={`${routeName} image`}
      />
      <Image
        priority={true}
        src={currentProduct?.gallery.third.desktop}
        alt={`${routeName} image`}
      />
      <h1>You May Also Like</h1>
      {currentProduct?.others.map((product: ProductsProps) => (
        <div key={product.name}>
          <ProductPreview
            slug={product.slug}
            text={product.name}
            image={product.image.desktop}
          />
        </div>
      ))}

      <button disabled={quantity === 1} onClick={handleDecrement}>
        <h1>-</h1>
      </button>

      <h1>{quantity}</h1>

      <button onClick={handleIncrement}>
        <h1>+</h1>
      </button>

      <span onClick={addProductToCart}>
        <Button text="add to cart" variant="PINK_DARK" />
      </span>
    </div>
  );
};

export default ProductDetail;
