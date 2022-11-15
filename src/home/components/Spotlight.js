import { Grid } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import { isMobile } from "react-device-detect";

const SpotLight = () => {
  return (
    <Paper className="spotlight-section">
      <Grid container spacing={2} className="spotlight-top">
        <Grid item md={6} xs={6} sm={6}>
          <div className="spotlight-text">
            <p>TODAY'S SPOTLIGHT</p>
          </div>
        </Grid>
        <Grid item md={6} xs={6} sm={6}>
          <div className="read-more-spotlight">
            <button
              className={
                isMobile
                  ? "button-white button-small"
                  : "button-white button-large"
              }
            >
              {" "}
              Read more{" "}
            </button>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="spotlight-bottom">
        <Grid item md={8} xs={10} sm={10} className="spotlight-bottom-content">
          <p className="spotlight-title">
            Will i loose my hair if i Masturbate ?
          </p>
          <p className="spotlight-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default SpotLight;
