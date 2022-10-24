import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';

const UserSidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    return (
        <>
            <PersonIcon className="person" onClick={() => setSidebar(true)} />
            <Drawer
                open={sidebar}
                anchor="right"
                onClose={() => setSidebar(false)}
            >
                <Box p={2} width="250px" >
                    <div className='close-icon'>
                        <CloseIcon color="primary" onClick={() => setSidebar(false)} />
                    </div>
                    <div >
                        <p className="sidebar-item">Profile</p>
                        <p className="sidebar-item">My Orders</p>
                        <p className="sidebar-item">Track</p>
                        <p className="sidebar-item">Referral</p>
                    </div>

                </Box>
            </Drawer>
        </>
    )
}
export default UserSidebar;