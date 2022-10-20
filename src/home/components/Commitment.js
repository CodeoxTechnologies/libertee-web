import React from "react";
import women from '../../assets/images/women.png'
import { Grid } from "@mui/material";

const Commitment = () => {
    return (
        <div className="commitment-section">
            <h4 className="commitment-section-heading" ><strong>Our Commitment</strong></h4>
            <div className="commitment-section-body">
                <Grid container>
                    <Grid item xs={12} sm={9} md={9} lg={9}>
                        <ul className="commitment-section-body-list">
                            <li className="commitment-section-body-list-item item-1">We guarantee you your privacy  every step of the way.</li>
                            <li className="commitment-section-body-list-item item-2"><span>We’re never be Obscene</span>. We might try to be funny. But sexuality doesn’t
                                mean obscenity.
                            </li>
                            <li className="commitment-section-body-list-item item-3">Every product is designed, packed and marketed to ensure it is
                                completely legal in India.
                            </li>
                        </ul>
                        <div className="commitment-section-body-button">
                            <button className="button-black">Read More</button>
                        </div> 
                         <div className="commitment-section-body-image">
                            <img src={women} alt="women" />
                        </div> 
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Commitment;