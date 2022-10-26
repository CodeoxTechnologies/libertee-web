import React from "react";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <span>
                <Link>
                    <MenuOpenIcon /> Learn
                </Link>

            </span>
            <span>
                <Link>
                    <LocalMallIcon /> Buy
                </Link>

            </span>

        </div>
    )
}
export default Navigation