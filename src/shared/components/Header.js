import React from "react";
import logo from '../../assets/images/logo.png';
import libertee from '../../assets/images/libertee.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { UserSidebar } from "../../shared";

const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
                <div className="libertee">
                    <img src={libertee} alt="libertee" className="libertee-logo" />
                    <p> You are in a good company</p>
                </div>
            </div>
            <div>
                <div className="navigation-icons">
                    <AddShoppingCartIcon  className="shoppingcart" />
                    <UserSidebar />
                </div>
            </div>
        </div>
    )
}
export default Header