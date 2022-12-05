import React from "react";
import { useStateContext } from "../../utils/StateContext";
import { Grid, Box, Divider } from "@mui/material";
import {
  CartItem,
  CartHeading,
  GiftOption,
  DeliveryOption,
  PrivacyFeatures,
  CartTotal,
} from "../components";
import { Quiz } from "../../Products/components.js";
const Cart = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="cart-section">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <CartHeading />
        </Grid>
      </Grid>
      <div className="cart-products">
        <Grid container spacing={2}>
          <Grid item md={9} xs={12} lg={9} sm={12}>
            <Box className="cart-page-body">
              {cartItems.length &&
                cartItems.map((item) => <CartItem item={item} key={item.id} />)}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <GiftOption />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12} sm={12} lg={12}>
            <div className="divider"></div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <DeliveryOption />
          </Grid>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <PrivacyFeatures />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12} sm={12} lg={12}>
            <div className="divider"></div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={5} xs={12} sm={12} lg={5}></Grid>
          <Grid item md={7} xs={12} sm={12} lg={7}>
            <CartTotal />
          </Grid>
        </Grid>
      </div>
      <div className="divider"></div>
      <Quiz />
    </div>
  );
};

export default Cart;
