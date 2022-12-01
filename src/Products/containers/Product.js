import React, { useEffect, useState } from "react";
import { Grid, Breadcrumbs, Typography, Link } from "@material-ui/core";
import {
  ProductAccordian,
  ProductDescription,
  ProductDetailCard,
  Sexologist,
  Quiz,
} from "../components.js";
import { productDetail, testimonialsList } from "../index.js";
import Testimonials from "../components.js/Testimonials.js";
import { useParams } from "react-router-dom";
import { getProductApi } from "../apiServices.js";

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductApi(slug, setProduct);
  }, []);
  console.log(product);
  const handleColorChange = (item) => {
    setProduct({
      ...product,
      color_ids: product.color_ids.map((color) =>
        color.name === item.name
          ? { ...color, color_active: true }
          : { ...color, color_active: false }
      ),
      selected_color: item.name,
    });
  };
  return (
    <div className="product-detail-section">
      <div className="product-detail-body">
        <Grid container spacing={0}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Breadcrumbs
              aria-label="breadcrumb"
              className="product-detail-breadcrumbs"
            >
              <Link underline="hover" href="/">
                Home
              </Link>
              <Link underline="hover" href="/products">
                Products
              </Link>
              <Typography color="text.primary">{product.name}</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <ProductDetailCard product={product} />
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <ProductDescription
              product={product}
              handleColorChange={handleColorChange}
            />
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
