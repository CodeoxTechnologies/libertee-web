import React from "react";
import logo from '../../assets/images/logo.png';
import libertee from '../../assets/images/libertee.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { UserSidebar } from "../../shared";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
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
                    <AddShoppingCartIcon className="shoppingcart" />
                    <UserSidebar />
                </div>
            </div>
        </div>
    )
}
export default Header