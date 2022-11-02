import React from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';

const ProductCard = ({ product }) => {
    return (
        <Paper className="product-card" elevation={0} >
            <div className="product-card-top">
                <p className="product-card-name">{product.name}</p>
                <p className="product-card-price">Rs {product.price}</p>
            </div>
            <div className="product-card-image">
                <img src={product.image} alt="product" />
            </div>
            <div className="product-card-dot">
                <div className="product-card-dot-color">
                    {
                        product.color.map((color, index) => 
                            <FiberManualRecordRoundedIcon style={{ color: color.color }} />
                        )
                    }
                </div>
            </div>
            <div className="product-card-button">
                <button className="button-black">Add to Cart</button>
            </div>

        </Paper>
    )
}
export default ProductCard;