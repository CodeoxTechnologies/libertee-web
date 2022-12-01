import React from "react";
import { useStateContext } from "../../utils/StateContext";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    <div className="cart-section">
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <div className="cart-top">
            <Grid container spacing={2}>
              <Grid item md={12} xs={12} sm={12} lg={12}>
                <div className="cart-heading">
                  <h2> Review Your Cart</h2>
                </div>
              </Grid>
              <Grid item md={12} xs={12} sm={12} lg={12}>
                <Breadcrumbs
                  aria-label="breadcrumb"
                  className="product-detail-breadcrumbs"
                >
                  <Link underline="hover" href="/">
                    Home
                  </Link>
                  <Typography color="text.primary">Cart</Typography>
                </Breadcrumbs>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <div className="cart-products">
        <Grid container spacing={2}>
          {/* <Grid item md={1} xs={1} lg={1} sm={1}></Grid> */}
          <Grid item md={9} xs={12} lg={9} sm={12}>
            <div className="cart-body">
              {cartItems.length &&
                cartItems.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-image-container">
                      <img
                        src={item.image[0]}
                        alt="product"
                        className="cart-item-image"
                      />
                    </div>
                    <div className="cart-item-details-left">
                      {item.selected_color && (
                        <div className="cart-item-color-container">
                          <div
                            className="cart-item-color"
                            style={{
                              backgroundColor: item.selected_color,
                              scale: "1.2",
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
                          orientation="vertical"
                          className="button-group"
                        >
                          <Button
                            className="group-button"
                            onClick={() => toggleCartitemQuantity(item, "inc")}
                          >
                            <ExpandLessIcon />
                          </Button>
                          <Button className="group-button">
                            {item.quantity}
                          </Button>
                          <Button
                            className="group-button"
                            onClick={() => toggleCartitemQuantity(item, "dec")}
                          >
                            <ExpandMoreIcon />
                          </Button>
                        </ButtonGroup>
                      </div>
                      <div className="cart-item-remove">
                        <p>Remove</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12} sm={12} lg={12}>
            <div className="border"></div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Cart;
