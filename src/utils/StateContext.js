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

  const [qty, setQty] = useState(localQty ? localQty : 1);
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
  // increment from product page
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  // decrement from product page
  const decQty = () => {
    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };
  // Add to cart
  const onAddToCart = (product, quantity, buyNow) => {
    debugger;
    // check if product already exists in cart
    const checkProductInCart = cartItems.find((item) => item.id === product.id);
    console.log("product", product);
    console.log("checkProductInCart", checkProductInCart);
    setTotalPrice(totalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      // if product already exists in cart
      const udatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
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
      // add new product to cart
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: quantity },
      ]);
    }
    enqueueSnackbar(`${quantity} ${product.name} added to cart`, {
      variant: "success",
      anchorOrigin: { vertical: "top", horizontal: "center" },
    });
    if (buyNow) {
      // if buy now button is clicked
      setShowCart(true);
    }
  };
  // Remove from cart
  const onRemoveFromCart = (product) => {
    // check if product already exists in cart
    foundProduct = cartItems.find((item) => item.id === product.id);
    index = cartItems.indexOf(foundProduct);
    setTotalPrice(totalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    // remove product from cart
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item !== product)
    );
  };
  const toggleCartitemQuantity = (product, type) => {
    // check if product already exists in cart
    foundProduct = cartItems.find((item) => item.id === product.id);
    index = cartItems.indexOf(foundProduct);
    if (type === "inc") {
      // increase quantity
      setCartItems((prevCartItems) =>
        prevCartItems.map((item, i) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setTotalPrice(totalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else {
      // decrease quantity
      if (foundProduct.quantity > 1) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item, i) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
        setTotalPrice(totalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
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
        onRemoveFromCart,
        toggleCartitemQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
