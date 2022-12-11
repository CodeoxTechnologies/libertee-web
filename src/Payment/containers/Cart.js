import React from "react";
import { useEffect } from "react";
import { useStateContext } from "../../utils/StateContext";
import { Grid, Box, Divider } from "@mui/material";
import {
  CartItem,
  CartHeading,
  GiftOption,
  DeliveryOption,
  PrivacyFeatures,
  CartTotal,
  CartItemMobile,
} from "../components";
import { Quiz } from "../../Products/components.js";
const Cart = () => {
  const { cartItems } = useStateContext();
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    console.log("handleResize", window.innerWidth);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return (
    <div className="cart-section">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <CartHeading />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Grid item md={12} lg={12} xs={12} sm={12} className="cart-products">
            <Grid container spacing={2}>
              <Grid item md={12} xs={12} lg={12} sm={12}>
                <Box className="cart-page-body">
                  {cartItems.length
                    ? cartItems.map((item) =>
                        dimensions.width > 766 ? (
                          <CartItem item={item} key={item.id} />
                        ) : (
                          <CartItemMobile item={item} key={item.id} />
                        )
                      )
                    : null}
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} sm={12} lg={12}>
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
          </Grid>
        </Grid>
      </Grid>

      <div className="divider"></div>
      <Quiz />
    </div>
  );
};

export default Cart;
