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
          <span>
            <MenuOpenIcon className="menu-icon" />
          </span>
          <span>
            Learn
          </span>

        </Link>
      </span>
      <span className="navigation-item">

        <Link to="/products">
          <span>
            <LocalMallIcon className="menu-icon" />
          </span>
          <span>
            Buy
          </span>

        </Link>
      </span>
    </div>
  );
};
export default withRouter(Navigation);
