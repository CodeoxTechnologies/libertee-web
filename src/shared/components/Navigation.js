import React from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Navigation = () => {
    return (
        <div className="navigation">
            <span>
                <MenuOpenIcon  /> Learn
            </span>
            <span>
                <LocalMallIcon  /> Buy
            </span>

        </div>
    )
}
export default Navigation