import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
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
                        <p className="sidebar-item" ><Link to="/profile" onClick={() => setSidebar(false)} >Profile</Link></p>
                        <p className="sidebar-item"><Link >My Orders</Link></p>
                        <p className="sidebar-item"><Link>Track</Link></p>
                        <p className="sidebar-item"><Link>Referral</Link></p>
                    </div>

                </Box>
            </Drawer>
        </>
    )
}
export default UserSidebar;