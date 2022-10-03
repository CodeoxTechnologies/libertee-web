import { Button, Grid } from "@mui/material";
import React from "react";
import spotlight from '../../assets/images/spotlight.png';

const SpotLight = () => {
    return (
        <div className="spotlight-section">
            <Grid container spacing={2} className="spotlight-top" >
                <Grid item md={6}>
                    <div className="spotlight-text">
                        <p>TODAY'S SPOTLIGHT</p>
                    </div>
                </Grid>
                <Grid item md={6} >
                    <div className="read-more-spotlight">
                        <button>Read more </button>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3} className="spotlight-bottom">
                <Grid item md={8} className="spotlight-bottom-content" >
                    <h4>Will i loose my hair if i do this ?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Grid>
            </Grid>
        </div>
    )
}
export default SpotLight;  