import React from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Navigation = () => {
    return (
        <div className="navigation">
            <span>
                <MenuOpenIcon fontSize="large" /> Learn
            </span>
            <span>
                <LocalMallIcon fontSize="large" /> Buy
            </span>

        </div>
    )
}
export default Navigation