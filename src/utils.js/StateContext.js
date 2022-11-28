import React, { createContext, useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
const Context = createContext();
const localcartItems = localStorage.getItem("cartItems");
console.log(localcartItems, "localcartItems");

// const localTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
// const localTotalQuantities = JSON.parse(
//   localStorage.getItem("totalQunatities")
// );
// const localQty = localStorage.getItem() JSON.parse(localStorage.getItem("qty"));
export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localcartItems ? JSON.parse(localcartItems) : []
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  let foundProduct;
  let index;
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
      localStorage.setItem("qty", JSON.stringify(qty));
    }
  }, [cartItems, totalPrice, totalQuantities, qty]);
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  const onAddToCart = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const udatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
      });
      setCartItems(udatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: quantity },
      ]);
    }
    enqueueSnackbar(`${qty} ${product.name} added to cart`, {
      variant: "error",
      anchorOrigin: { vertical: "top", horizontal: "right" },
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        setShowCart,
        incQty,
        decQty,
        onAddToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
