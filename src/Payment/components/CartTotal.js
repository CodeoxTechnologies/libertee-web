import React from "react";
import { Grid } from "@material-ui/core";

const CartTotal = () => {
  return (
    <div className="cart-total">
      <div className="coupon-container"></div>
      <Grid container spacing={2}>
        <Grid item md={7} lg={7}>
          <div className="coupon-input-container">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="coupon-input-field"
            />
          </div>
        </Grid>
        <Grid item md={5} lg={5}>
          <div className="coupon-button-container">
            <button className="coupon-button">Apply</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartTotal;
