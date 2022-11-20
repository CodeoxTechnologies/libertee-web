import React from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

const ProductCard = ({ product }) => {
  return (
    <Paper
      className="product-card"
      elevation={0}
      onClick={() =>
        window.location.assign(`/libertee-web/product/${product.url}`)
      }
    >
      <div className="product-card-top">
        <p className="product-card-name">{product.name}</p>
        <p className="product-card-price">Rs {product.price}</p>
      </div>
      <div className="product-card-image">
        <img src={product.image} alt="product" />
      </div>
      <div className="product-card-dot">
        <div className="product-card-dot-color">
          {product.color.map((color, index) => (
            <FiberManualRecordRoundedIcon style={{ color: color.color }} />
          ))}
        </div>
      </div>
      <div className="product-card-button">
        <button className="button-black">Add to Cart</button>
      </div>
      <div className="product-card-bottom">
        <div className="product-card-features">
          {product.features.map((feature, index) => (
            <div className="product-card-feature">
              <img
                src={feature.image}
                className="product-card-feature-icon"
                alt="feature"
              />
              <p className="product-card-feature-name">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};
export default ProductCard;
