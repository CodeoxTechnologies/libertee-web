import React from "react";
import { Breadcrumbs, Typography, Grid, Link } from "@mui/material";

const CartHeading = () => {
  return (
    <div className="cart-top">
      <Grid container spacing={2}>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <div className="cart-heading">
            <h2> Review Your Cart</h2>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <Breadcrumbs
            aria-label="breadcrumb"
            className="product-detail-breadcrumbs"
          >
            <Link underline="hover" href="/">
              Home
            </Link>
            <Typography color="text.primary">Cart</Typography>
          </Breadcrumbs>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartHeading;
