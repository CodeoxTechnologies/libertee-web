import React from "react";
import { Grid } from "@mui/material";
const Testimonial = () => {
    return (
        <div className="newsletter-container">
            <Grid conatiner>
                <Grid item md={12} xs={12} lg={12} sm={12}>
                    <div className="newsletter-heading">
                        <h4 align="center"><strong>Give us your testimonial</strong> </h4>
                        <p align="center">Ask your Questions</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container  align="center">
                <Grid item md={3} xs={3} lg={3} sm={3}>
                </Grid>
                <Grid item md={6} xs={6} lg={6} sm={6}>
                    <ul className="commitment-section-body-list">
                        <li className="commitment-section-body-list-item">We’re never be Obscene. We might try to be funny. But sexuality doesn’t
                            mean obscenity.
                        </li>
                        <li className="commitment-section-body-list-item">Every product is designed, packed and marketed to ensure it is
                            completely legal in India.
                        </li>
                    </ul>
                </Grid>
                <Grid item md={3} xs={3} lg={3} sm={3}>
                </Grid>
            </Grid>
            <Grid container align="center">
                <Grid item md={12} xs={12} sm={12} lg={12}>
                    <div className="newsletter-subscribe">
                        <button className="button-black" >Talk to Us</button>
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}
export default Testimonial;