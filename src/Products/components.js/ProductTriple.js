import React, { Fragment } from "react";
import { Paper, Grid } from "@mui/material";
import tripleDildo from "../../assets/images/dildo.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ProductTriple = () => {
  return (
    <Fragment>
      <Grid container spacing={2} className="triple-dildo">
        <Grid item md={4}>
          <Paper elevation={0} className="triple-dildo-paper">
            <img src={tripleDildo} alt="tripledildo" />
          </Paper>
        </Grid>
        <Grid item md={8}>
          <div className="dildo-question">
            <p className="dildo-question-para">
              {" "}
              Which Product is right for you ?
            </p>
            <span>
              Learn more <ArrowForwardIosIcon />{" "}
            </span>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default ProductTriple;
