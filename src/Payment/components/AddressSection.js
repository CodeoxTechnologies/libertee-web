import React from "react";
import { Grid, TextField } from "@mui/material";
import CartHeading from "./CartHeading";
import { Link } from "react-router-dom";

const AddressSection = () => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <CartHeading />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <div className="">
            <p>
              Already have an account? <Link>Login</Link>{" "}
            </p>
            <TextField
              id="outlined-basic"
              label="Email Address or Phone Number"
              variant="outlined"
              fullWidth
              className="input-field"
            />
            <p></p>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <div className="cart-heading">
            <h2> Shipping Address</h2>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={12} sm={12} lg={12}>
          <TextField
            id="outlined-basic"
            label="Apartment, suite, etc. (optional)"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={4} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="State"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="PIN Code"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
            className="input-field"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddressSection;
