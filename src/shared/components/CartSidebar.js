import React from "react";
import { useStateContext } from "../../utils/StateContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonGroup, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { FiGift } from "react-icons/fi";

const Cart = () => {
  const {
    totalQuantities,
    setShowCart,
    showCart,
    cartItems,
    toggleCartitemQuantity,
    onRemoveFromCart,
    totalPrice,
  } = useStateContext();
  return (
    <div className="cart" style={{ maxHeight: "100vh" }}>
      <div className="cart-drawer">
        <Drawer
          open={showCart}
          anchor="right"
          onClose={() => setShowCart(false)}
        >
          <Box p={2} width={700}>
            <div className="cart-drawer-header">
              <div className="heading" onClick={() => setShowCart(false)}>
                <ArrowBackIosIcon />
                <p>Review your Cart ({totalQuantities})</p>
              </div>
            </div>
            <div
              className="cart-body"
              style={
                cartItems.length >= 5
                  ? { overflowY: "scroll", overflowX: "hidden" }
                  : {}
              }
            >
              {cartItems.length ? (
                cartItems.map((item) => (
                  <>
                    <div className="cart-item" key={item.id}>
                      <img
                        src={item.image_url}
                        alt="product"
                        className="cart-item-image"
                      />
                      <div className="cart-item-details-left">
                        <h4 className="cart-item-name">{item.name}</h4>
                        <h6 className="cart-item-price">Rs {item.price}</h6>
                      </div>
                      <div className="cart-item-details-right">
                        <div className="cart-item-quantity">
                          <ButtonGroup variant="contained">
                            <Button
                              className="group-button"
                              onClick={() =>
                                toggleCartitemQuantity(item, "dec")
                              }
                            >
                              -
                            </Button>
                            <Button className="group-button">
                              {item.quantity}
                            </Button>
                            <Button
                              className="group-button"
                              onClick={() =>
                                toggleCartitemQuantity(item, "inc")
                              }
                            >
                              +
                            </Button>
                          </ButtonGroup>
                        </div>
                        <div
                          className="cart-item-remove"
                          onClick={() => onRemoveFromCart(item)}
                        >
                          Remove
                        </div>
                      </div>
                    </div>
                  </>
                ))
              ) : (
                <div className="empty-cart">
                  <LocalMallIcon className="empty-cart-icon" />
                  <p className="empty-cart-text">Your cart is empty</p>
                  <Link
                    to="/products"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Button
                      className="empty-cart-button"
                      variant="contained"
                      onClick={() => setShowCart(false)}
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            {cartItems.length ? (
              <div className="cart-footer">
                <div className="cart-footer-subtotal">
                  <p className="cart-footer-left-heading">Subtotal</p>
                  <p className="cart-footer-right-text">Rs {totalPrice} /-</p>
                </div>
                <div className="gift-option">
                  <div className="gift-option-left">
                    <FiGift className="gift-icon" />
                    <p>Add a gift message or gift wrap</p>
                    <span> Add </span>
                  </div>
                </div>
                <div className="cart-footer-checkout">
                  <Button
                    className="cart-footer-checkout-button"
                    variant="contained"
                  >
                    Checkout
                  </Button>
                  <p>All prices incl. tax. Discounts applied at checkout.</p>
                  <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "#000" }}
                    onClick={() => setShowCart(false)}
                  >
                    <p>View Cart</p>
                  </Link>
                </div>
              </div>
            ) : null}
          </Box>
        </Drawer>
      </div>
    </div>
  );
};
export default Cart;
