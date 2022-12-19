import React from "react";
import { Grid } from "@material-ui/core";
import { useStateContext } from "../../utils/StateContext";

const CartTotal = () => {
  const { totalPrice } = useStateContext();
  return (
    <div className="cart-total">
      <Grid container spacing={2} style={{ margin: "10px" }}>
        <Grid item md={7} lg={7} xs={6} sm={6}>
          <div className="coupon-input-container">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="coupon-input-field"
            />
          </div>
        </Grid>
        <Grid item md={5} lg={5} xs={5} sm={6}>
          <div className="coupon-button-container">
            <button className="coupon-button">Apply</button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "10px" }}>
        <Grid item md={7} lg={7} xs={6} sm={6}>
          <div className="cart-subtotal-container">
            <div className="cart-subtotal-heading">Sub Total:</div>
          </div>
        </Grid>
        <Grid item md={5} lg={5} xs={6} sm={6}>
          <div className="cart-subtotal-price-container">
            <div className="cart-subtotal-price">Rs {totalPrice}/-</div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "10px" }}>
        <Grid item md={7} lg={7} xs={6} sm={6}>
          <div className="cart-subtotal-container">
            <div className="cart-subtotal-heading">Shipping:</div>
          </div>
        </Grid>
        <Grid item md={5} lg={5} xs={6} sm={6}>
          <div className="cart-subtotal-price-container">
            <div className="cart-subtotal-price">Rs 40/-</div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "10px" }}>
        <Grid item md={7} lg={7} xs={6} sm={6}>
          <div className="cart-total-container">
            <div className="cart-total-heading">
              <strong>Total:</strong>
            </div>
          </div>
        </Grid>
        <Grid item md={5} lg={5} xs={6} sm={6}>
          <div className="cart-total-price-container">
            <div className="cart-total-price">Rs {totalPrice + 40}/-</div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ margin: "10px" }}>
        <Grid item md={7} lg={7} xs={12} sm={12}></Grid>
        <Grid item md={5} lg={5} xs={12} sm={12}>
          <div className="coupon-button-container">
            <button className="coupon-button">
              Continue Payment
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartTotal;
