import React from "react";
import { withRouter } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <span className="navigation-item">
        <Link to="/learn">
          <MenuOpenIcon className="menu-icon" /> Learn
        </Link>
      </span>
      <span>
        <Link to="/products">
          <LocalMallIcon /> Buy
        </Link>
      </span>
    </div>
  );
};
export default withRouter(Navigation);
