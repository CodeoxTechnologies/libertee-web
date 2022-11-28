import React from "react";
import { useStateContext } from "../../utils/StateContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ButtonGroup, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import prodImg from "../../assets/images/Tracys-Dog-22.jpg";

const Cart = () => {
  const {
    totalQuantities,
    setShowCart,
    showCart,
    cartItems,
    toggleCartitemQuantity,
    onRemove,
  } = useStateContext();
  return (
    <div className="cart">
      <div className="cart-drawer">
        <Drawer
          open={showCart}
          anchor="right"
          onClose={() => setShowCart(false)}
        >
          <Box p={2} width={500}>
            <div className="cart-drawer-header">
              <div className="heading">
                <ArrowBackIosIcon />
                <p>Review your Cart ({totalQuantities})</p>
              </div>
            </div>
            <div className="cart-body">
              {cartItems.length ? (
                cartItems.map((item) => (
                  <div className="cart-item">
                    <div className="cart-item-image">
                      <img src={prodImg} alt="product" />
                    </div>
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">Rs {item.price}</p>
                      <div className="cart-item-quantity">
                        <ButtonGroup>
                          <Button>-</Button>
                          <Button>{item.quantity}</Button>
                          <Button>+</Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-cart">
                  <LocalMallIcon className="empty-cart-icon" />
                  <p className="empty-cart-text">Your cart is empty</p>
                  <Link to="/products" style={{ textDecoration: "none" }}>
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
          </Box>
        </Drawer>
      </div>
    </div>
  );
};
export default Cart;
