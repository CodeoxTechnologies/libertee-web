import React from "react";
import logo from "../../assets/images/logo.png";
import libertee from "../../assets/images/libertee.png";
import Cart from "./CartSidebar";
import { UserSidebar } from "../../shared";
import { Link } from "react-router-dom";
import { useStateContext } from "../../utils/StateContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Header = () => {
  const { totalQuantities, showCart, setShowCart } = useStateContext();
  console.log(totalQuantities, "totalQuantities");
  return (
    <div className="header" style={showCart ? {} : { zIndex: "999" }}>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div>
        <div className="libertee">
          <Link to="/">
            <img src={libertee} alt="libertee" className="libertee-logo" />
          </Link>
          <p> You are in a good company</p>
        </div>
      </div>
      <div>
        <div className="navigation-icons">
          <div>
            <UserSidebar />
          </div>
          <div>
            <div className="nav-cart" onClick={() => setShowCart(true)}>
              <AddShoppingCartIcon />
              <span className="cart-quantity">
                (<strong>{totalQuantities}</strong>)
              </span>
            </div>
          </div>
        </div>
      </div>
      {showCart && <Cart />}
    </div>
  );
};
export default Header;
