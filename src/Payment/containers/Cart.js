import React from "react";
import { useEffect } from "react";
import { useStateContext } from "../../utils/StateContext";
import { Grid, Box, Divider } from "@mui/material";
import { AddressSection, CartHeading, CartSection } from "../components";
import { Quiz } from "../../Products/components.js";
const Cart = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="cart-section">
      <Grid container spacing={4}>
        <AddressSection />
        <CartSection />
      </Grid>

      <div className="divider"></div>
      <Quiz />
    </div>
  );
};

export default Cart;
