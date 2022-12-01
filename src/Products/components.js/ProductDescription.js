import React from "react";
import Rating from "@material-ui/lab/Rating";
import GroupedButtons from "./ButtonGroups";
import { useStateContext } from "../../utils/StateContext";
const ProductDescription = ({ product, handleColorChange }) => {
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
      {product.color_ids && product.color_ids.length ? (
        <div className="product-detail-description-color">
          <p className="product-detail-description-color-title">Color : </p>
          <div className="product-detail-description-color-list">
            {product.color_ids.map((item, index) => (
              <div
                className="color"
                onClick={() => handleColorChange(item)}
                style={{
                  backgroundColor: item.name,
                  boxShadow: item.color_active
                    ? "0 0 8px 0 rgba(0, 0, 0, 0.6)"
                    : "",
                  scale: item.color_active ? "1.2" : "",
                }}
              ></div>
            ))}
          </div>
        </div>
      ) : null}

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
