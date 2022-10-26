import { Avatar, Grid } from "@mui/material";
import React from "react";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-content">
                <Avatar src="" alt="s" className="profile-content-avatar" />
                <p className="value"><a>Change</a></p>
                <p className="profile-content-name"><strong>Olivia</strong> Thompson</p>
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={0} sm={0} lg={4} ></Grid>
                    <Grid item md={4} xs={12} sm={12} lg={4}>
                        <div className="profile-list" >
                            <div className="profile-list-comp border-white">
                                <div>
                                    <p className="label">Email</p>
                                    <p className="value">olivia23@gmail.com</p>
                                </div>
                            </div>
                            <div className="profile-list-comp">
                                <div>
                                    <p className="label">Password</p>
                                    <p className="value">**********</p>
                                </div>
                                <div>
                                    <a className="value">Change</a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={0} sm={0} lg={4} ></Grid>
                </Grid>
            </div>



        </div>
    )
}
export default Profile;