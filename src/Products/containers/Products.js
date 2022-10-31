import React, { useState } from 'react';
import { ProductTriple } from '../components.js';
import { Grid } from '@mui/material';

const Products = () => {
    return (
        <div className='products-list-section'>
            <div className='products-list-body'>
                <div className='products-list-heading'>
                    <p>Vibrators & Massagers</p>
                </div>
                <Grid container spacing={2} >
                    <Grid item md={6}>
                        <ProductTriple />
                    </Grid>

                </Grid>
            </div>
        </div>
    )
}
export default Products;