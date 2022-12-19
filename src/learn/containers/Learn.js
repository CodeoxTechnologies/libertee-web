import React from "react";
import { Grid, Paper } from "@material-ui/core";


const Learn = () => {
    return (
        <div className="learn-section" style={{ margin: '10px 30px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Paper className="learn-section__paper" align="center">
                        <h1>What is <strong>Libertee</strong></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecteturelit, sed do
                            eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
export default Learn