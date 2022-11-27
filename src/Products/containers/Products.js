import React, { useState, useEffect } from "react";
import { ProductList, ProductTriple, Quiz } from "../components.js";
import { Grid } from "@material-ui/core";
import { getProductsApi } from "../apiServices.js";

const Products = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    getProductsApi(setProducts);
  }, []);
  console.log(products, "products");
  return (
    <div className="products-list-section">
      <div className="products-list-body">
        <div className="products-list-heading">
          <p>Vibrators & Massagers</p>
        </div>
        <Grid container>
          <Grid item md={8} xs={12} sm={12} lg={8}>
            <ProductTriple />
          </Grid>
        </Grid>
        <div className="products-list-border"></div>
        <div className="product-list-swiper">
          <ProductList products={products} />
        </div>
        <div className="products-list-border"></div>
        <Quiz />
      </div>
    </div>
  );
};
export default Products;
