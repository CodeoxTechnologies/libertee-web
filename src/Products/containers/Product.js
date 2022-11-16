import React from "react";
import { Grid } from "@material-ui/core";
import {
  ProductAccordian,
  ProductDescription,
  ProductDetailCard,
  Sexologist,
  Quiz,
} from "../components.js";
import { productDetail, testimonialsList } from "../index.js";
import Testimonials from "../components.js/Testimonials.js";

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
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ padding: "20px 0px" }}
          >
            <ProductAccordian />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <Sexologist />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={12} lg={12} sm={12}>
            <Testimonials testimonialsList={testimonialsList} />
          </Grid>
        </Grid>
      </div>
      <div className="products-list-border"></div>
      <div>
        <Quiz />
      </div>
    </div>
  );
};
export default Product;
