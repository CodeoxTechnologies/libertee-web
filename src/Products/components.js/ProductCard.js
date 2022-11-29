import React from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import waterProof from "../../assets/images/water.png";
import soundWave from "../../assets/images/sound-wave.png";
import medical from "../../assets/images/medical.png";
import { useStateContext } from "../../utils/StateContext";

const ProductCard = ({ product }) => {
  const { onAddToCart } = useStateContext();
  return (
    <Paper
      className="product-card"
      elevation={0}
      // onClick={() => window.location.assign(`/product/${product.slug}`)}
    >
      <div
        className="product-card-top"
        onClick={() => window.location.assign(`/product/${product.slug}`)}
      >
        <p className="product-card-name">{product.name}</p>
        <p className="product-card-price">Rs {product.price}</p>
      </div>
      <div
        className="product-card-image"
        onClick={() => window.location.assign(`/product/${product.slug}`)}
      >
        <img src={product.image && product.image[0]} alt="product" />
      </div>
      {/* <div className="product-card-dot">
        <div className="product-card-dot-color">
          {[
            { color: "#FF005C", active: true },
            { color: "#5F0081", active: false },
            { color: "#0060D1", active: false },
          ].map((color, index) => (
            <FiberManualRecordRoundedIcon style={{ color: color.color }} />
          ))}
        </div>
      </div> */}
      <div className="product-card-button">
        <button
          className="button-black"
          onClick={() => onAddToCart(product, 1)}
        >
          Add to Cart
        </button>
      </div>
      <div
        className="product-card-bottom"
        onClick={() => window.location.assign(`/product/${product.slug}`)}
      >
        <div className="product-card-features">
          {[
            { name: "Waterproof", image: waterProof },
            { name: "5 patterns 5 intensities", image: soundWave },
            { name: "medical grade silicone", image: medical },
          ].map((feature, index) => (
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
