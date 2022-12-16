import React from "react";
import GiftOption from "./GiftOption";
import DeliveryOption from "./DeliveryOption";
import PrivacyFeatures from "./PrivacyFeatures";
import CartItem from "./CartItem";
import CartItemMobile from "./CartItemMobile";
import CartTotal from "./CartTotal";
import { useStateContext } from "../../utils/StateContext";
import { Grid, Box } from "@mui/material";
import { useEffect } from "react";

const CartSection = () => {
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
          <Grid item md={12} xs={12} sm={12} lg={12}>
            <CartTotal />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CartSection;
