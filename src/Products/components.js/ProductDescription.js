import React from "react";
import Rating from "@material-ui/lab/Rating";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import GroupedButtons from "./ButtonGroups";
import { useStateContext } from "../../utils/StateContext";
const ProductDescription = ({ product }) => {
  const { onAddToCart, qty } = useStateContext();
  return (
    <div className="product-detail-description">
      <div className="product-detail-description-top">
        <p className="product-detail-description-top-title">{product.name}</p>
      </div>
      <div className="product-detail-description-price">
        <p>
          <strong> Rs {product.price}/-</strong>
        </p>
      </div>
      <div className="product-detail-description-rating">
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
        <p className="product-detail-description-rating-count">143 Reviews </p>
      </div>
      <div className="product-detail-description-short">
        A sleek & discreet full-body massager with a pointed tip and powerful
        vibrations, to hit all your sweet spots. vibrating, ribbed massager for
        her ultimate pleasure. With 10 powerful speed settings, rabbit is a
        handy love-glove to satisfy all your desires.
      </div>
      <div className="product-detail-description-color">
        <p className="product-detail-description-color-title">Color : </p>
        <div className="product-detail-description-color-list">
          {[
            { color: "#FF005C", active: true },
            { color: "#5F0081", active: false },
            { color: "#0060D1", active: false },
          ].map((item, index) => (
            <FiberManualRecordRoundedIcon
              style={{ color: item.color }}
              className="product-detail-description-color-list-item"
            />
          ))}
        </div>
      </div>
      <div className="product-detail-description-quantity">
        <p className="product-detail-description-quantity-title">Quantity : </p>
        <div className="product-detail-description-quanrtity-counter">
          <GroupedButtons />
        </div>
      </div>
      <div className="add-to-cart">
        <button
          className="button-black button-big"
          onClick={() => onAddToCart(product, qty)}
        >
          Add to Cart{" "}
        </button>
        <button
          className="button-white button-big"
          onClick={() => onAddToCart(product, qty, true)}
        >
          Buy Now{" "}
        </button>
      </div>
    </div>
  );
};
export default ProductDescription;
