import React, { useState } from "react";
import { Grid, Checkbox } from "@mui/material";
const NewsLetter = () => {
  const [sexEd, setsexEd] = useState(true);
  const [updates, setUpdates] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="newsletter-container">
      <Grid conatiner>
        <Grid item md={12} xs={12} lg={12} sm={12}>
          <div className="newsletter-heading">
            <h4 align="center">
              Never miss out on your <strong>sexual health!</strong>{" "}
            </h4>
            <p align="center">What should we send you?</p>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          <div className="newsletter-flex">
            <p>Newsletters on sexual health</p>

            <Checkbox
              checked={sexEd}
              onChange={(e) => setsexEd(e.target.checked)}
              value={sexEd}
              style={{ color: "rgb(0 0 0)" }}
            />
          </div>
        </Grid>
        <Grid item md={6} lg={6} sm={12} xs={12}>
          <div className="newsletter-flex">
            <p>Updates, offers and newsletters</p>
            <Checkbox
              checked={updates}
              onChange={(e) => setUpdates(e.target.checked)}
              value={updates}
              style={{ color: "rgb(0 0 0)" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} xs={12} sm={12} lg={12}>
          <div className="newsletter-subscribe">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button-black">submit</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default NewsLetter;
