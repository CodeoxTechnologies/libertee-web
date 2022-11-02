import React, { useState } from 'react';
import { ProductList, ProductTriple,  } from '../components.js';
import { Grid } from '@material-ui/core';

const Products = () => {
    return (
        <div className='products-list-section'>
            <div className='products-list-body'>
                <div className='products-list-heading'>
                    <p>Vibrators & Massagers</p>
                </div>
                <Grid container spacing={2} >
                    <Grid item md={8}>
                        <ProductTriple />
                    </Grid>
                </Grid>
                <div className="products-list-border" ></div>
                <div className='product-list-swiper'>
                    <ProductList />
                </div>
            </div>

        </div>
    )
}
export default Products;