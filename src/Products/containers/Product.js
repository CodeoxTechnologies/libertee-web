import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { ProductDescription, ProductDetailCard } from "../components.js";
import { productDetail } from "../index.js";

const Product = () => {
  return (
    <div className="product-detail-section">
      <div className="product-detail-body">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <ProductDetailCard product={productDetail} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <ProductDescription product={productDetail} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Product;
