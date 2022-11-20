import React from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

const ProductDetailCard = ({ product }) => {
  return (
    <Paper className="product-card" elevation={0} S>
      <div className="product-card-top" align="center">
        <p className="product-card-top-title">{product.name}</p>
        <p className="product-card-top-price">Rs {product.price}</p>
      </div>
      <div className="product-card-middle">
        <img src={product.image} alt="image" />
      </div>
      <div className="product-card-dot">
        <div className="product-card-dot-color">
          {product.color.map((color, index) => (
            <FiberManualRecordRoundedIcon style={{ color: color.color }} />
          ))}
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-card-features">
          {product.features.map((feature, index) => (
            <div className="product-card-feature-item">
              <img
                src={feature.image}
                className={`product-card-feature-item-icon${index}`}
                alt="feature"
              />
              <p className="product-card-feature-item-name">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Paper>
  );
};
export default ProductDetailCard;
