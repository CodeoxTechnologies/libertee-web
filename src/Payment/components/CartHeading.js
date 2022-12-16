import React from "react";
import { Breadcrumbs, Typography, Grid, Link } from "@mui/material";
import { useStateContext } from "../../utils/StateContext";

const CartHeading = () => {
  const { setShowCart } = useStateContext();
  return (
    <div className="cart-top">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <Breadcrumbs aria-label="breadcrumb" className="">
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              href="#"
              onClick={() => setShowCart(true)}
              style={{
                textDecoration: "none",
                color: "#000",
                cursor: "pointer",
              }}
            >
              Cart
            </Link>
            <Typography color="primary">Information</Typography>
            <Typography color="text.primary">Payment</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <div className="cart-heading">
            <h2> Contact Information</h2>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartHeading;
