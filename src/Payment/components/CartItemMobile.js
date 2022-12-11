import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useStateContext } from "../../utils/StateContext";
const CartItemMobile = ({ item }) => {
  console.log(item);
  const { toggleCartitemQuantity, onRemoveFromCart } = useStateContext();
  return (
    <div className="cart-item-mobile">
      <div className="cart-item-mobile-image-container">
        <img src={item.image[0]} alt="product" className="cart-item-image" />
      </div>
      <div className="cart-item-mobile-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <h6 className="cart-item-price">Rs {item.price}</h6>
        <div className="cart-item-quantity">
          <ButtonGroup
            variant="contained"
            orientation="horizontal"
            className="button-group"
          >
            <Button
              className="group-button"
              onClick={() => toggleCartitemQuantity(item, "inc")}
            >
              -
            </Button>
            <Button className="group-button">{item.quantity}</Button>
            <Button
              className="group-button"
              onClick={() => toggleCartitemQuantity(item, "dec")}
            >
              +
            </Button>
          </ButtonGroup>
        </div>
        <div className="item-bottom-container">
          {item.selected_color ? (
            <div className="cart-item-color-container">
              <div
                className="cart-item-color"
                style={{
                  backgroundColor: item.selected_color,
                }}
              ></div>
            </div>
          ) : null}
          <div className="remove" onClick={() => onRemoveFromCart(item)}>
            <p>Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
