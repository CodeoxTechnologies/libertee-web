import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStateContext } from "../../utils/StateContext";

const CartItem = ({ item }) => {
  const { toggleCartitemQuantity, onRemoveFromCart } = useStateContext();
  return (
    <div className="cart-item" key={item.id}>
      <div className="cart-image-container">
        <img src={item.image[0]} alt="product" className="cart-item-image" />
      </div>
      <div className="cart-item-details-left">
        {item.selected_color && (
          <div className="cart-item-color-container">
            <div
              className="cart-item-color"
              style={{
                backgroundColor: item.selected_color,
                scale: "1.1",
              }}
            ></div>
          </div>
        )}

        <h2 className="cart-item-name">{item.name}</h2>
        <h6 className="cart-item-price">Rs {item.price}</h6>
      </div>
      <div className="cart-item-details-right">
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
              <ExpandLessIcon />
            </Button>
            <Button className="group-button">{item.quantity}</Button>
            <Button
              className="group-button"
              onClick={() => toggleCartitemQuantity(item, "dec")}
            >
              <ExpandMoreIcon />
            </Button>
          </ButtonGroup>
        </div>
        <div
          className="cart-item-remove"
          onClick={() => onRemoveFromCart(item)}
        >
          <p>Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
