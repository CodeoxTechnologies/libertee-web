import React from "react";
import { Grid } from "@mui/material";
const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <Grid conatiner>
                <Grid item md={12} xs={12} lg={12} sm={12}>
                    <div className="testimonial-heading">
                        <h4 align="center"><strong>Give us your testimonial</strong> </h4>
                        <p align="center" className="testimonial-question" >Ask your Questions</p>
                    </div>
                </Grid>
            </Grid>
            <Grid container  >
                <Grid item md={12} xs={12} lg={12} sm={12}>
                    <ul className="testimonial-section-body-list">
                        <li className="testimonial-section-body-list-item">Lorem ipsum dolor sit amet, consectetur
                            elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </li>
                        <li className="testimonial-section-body-list-item">Every product is designed, packed and marketed to ensure it is
                            completely legal in India.
                        </li>
                    </ul>
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