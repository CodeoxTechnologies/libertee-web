import React, { useState } from "react";
import { FiGift } from "react-icons/fi";
import { Grid, TextField, Checkbox } from "@mui/material";

const GiftOption = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div className="gift-option">
        <div className="gift-option-left">
          <FiGift className="gift-icon" />
          <p>Add a gift message or gift wrap</p>
          <span>
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          </span>
        </div>
      </div>
      {checked && (
        <div className="gift-form-container">
          <div className="gift-form">
            <Grid container spacing={2}>
              <Grid item md={6} xs={12} sm={12} lg={6}>
                <TextField
                  id="outlined-basic"
                  label="From"
                  variant="outlined"
                  fullWidth
                  className="gift-form-input"
                />
              </Grid>
              <Grid item md={6} xs={12} sm={12} lg={6}>
                <TextField
                  id="outlined-basic"
                  label="To"
                  variant="outlined"
                  fullWidth
                  className="gift-form-input"
                />
              </Grid>
              <Grid item md={12} xs={12} sm={12} lg={12}>
                <TextField
                  label="Gift Message"
                  variant="outlined"
                  fullWidth
                  value=""
                  multiline
                  row={4}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default GiftOption;
