import { Grid } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import { isMobile } from "react-device-detect";

const SpotLight = ({ spotLight }) => {
  return (
    <Paper
      className="spotlight-section"
      style={{ backgroundImage: `url(${spotLight.image_url})` }}
    >
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
          <p className="spotlight-title">{spotLight.short_title}</p>
          <p className="spotlight-description">{spotLight.short_description}</p>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default SpotLight;
