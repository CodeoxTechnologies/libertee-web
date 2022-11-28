import React, { createContext, useContext, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { getLocalStorageInfo } from ".";
const Context = createContext();
const localcartItems = getLocalStorageInfo("cartItems");
const localTotalPrice = getLocalStorageInfo("totalPrice");
const localTotalQuantities = getLocalStorageInfo("totalQuantities");
const localQty = getLocalStorageInfo("qty");
export const StateContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localcartItems ? localcartItems : []
  );

  const [totalPrice, setTotalPrice] = useState(
    localTotalPrice ? localTotalPrice : 0
  );

  const [totalQuantities, setTotalQuantities] = useState(
    localTotalQuantities ? localTotalQuantities : 0
  );

  const [qty, setQty] = useState(localQty ? localQty : 0);
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
    debugger;

    const checkProductInCart = cartItems.find(
      (item) => item.product_id === product.product_id
    );
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const udatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.product_id === product.product_id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        } else {
          return cartProduct;
        }
      });
      setCartItems(udatedCartItems);
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: quantity },
      ]);
    }
    enqueueSnackbar(`${quantity} ${product.name} added to cart`, {
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
    // localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    // localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
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
