import * as React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import SearchBox from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/search-box/searchbox.js';
import { CiLight } from "react-icons/ci";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';

import { IoIosNotifications } from "react-icons/io";
// import { MyContext } from '../../pages/HomePage/Home';
const DashBoardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [OpenDrop, setOpenDrop] = React.useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openMyNotify = Boolean(OpenDrop);

//  const context = useContext(MyContext);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNotify = () => {
    setOpenDrop(true);
  };

  const handleCloseNotify = () => {
    setOpenDrop(false);
  };
 


  return (

    <>
      <header className='d-flex align-items-center header-file' >
        <div className='container-fluid w-100'>
          <div className=' d-flex align-items-center w-100'>
            <div className='col-sm-2 part1'>
              <Link to={'/'}><img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1722363255/gramin_hd_hx1rkg.png' className='header-logo' /></Link>

            </div>

            <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
              <Button className='rounded-circle'><MdMenuOpen /></Button>
              <SearchBox />
            </div>

            <div className='col-sm-7 d-flex align-items-center justify-content-end part3'>

              <Button className='rounded-circle'><CiLight /></Button>

              <div className='dropdown-wrapper position-relative'>

                <Button className='rounded-circle' onClick={handleOpenNotify}><IoIosNotifications />


                  <Menu
                    anchorEl={OpenDrop}
                    id="notification"
                    className="notification dropdown-list"
                    open={openMyNotify}
                    onClose={handleCloseNotify}
                    onClick={handleCloseNotify}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >

                    <div className='head'>
                      <h4>My Notifications</h4>
                    </div>
                    <Divider className='mb-1' />
<div className='scroll'>
  
<MenuItem onClick={handleCloseNotify}>
                      <div className='d-flex'>
                      <div>
                      <div className='userimg'>
                          <span className='rounded-circle'>
                            <img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1717853771/pritam_yf87za.jpg' />
                          </span>
                        </div>
                      </div>

                        <div className='dropdown-info'>
                          <h4><span><b>Joe </b>has recently used <b>AI Symptopm Checker</b></span></h4>
                          <p className='text-time'>few seconds ago</p>
                        </div>
                      </div>

                    </MenuItem>
                    
                    <MenuItem onClick={handleCloseNotify}>
                      <div className='d-flex'>
                      <div>
                      <div className='userimg'>
                          <span className='rounded-circle'>
                            <img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1717853771/pritam_yf87za.jpg' />
                          </span>
                        </div>
                      </div>

                        <div className='dropdown-info'>
                          <h4><span><b>Joe </b>has recently used <b>AI Symptopm Checker</b></span></h4>
                          <p className='text-time'>few seconds ago</p>
                        </div>
                      </div>

                    </MenuItem>
                    
                    <MenuItem onClick={handleCloseNotify}>
                      <div className='d-flex'>
                      <div>
                      <div className='userimg'>
                          <span className='rounded-circle'>
                            <img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1717853771/pritam_yf87za.jpg' />
                          </span>
                        </div>
                      </div>

                        <div className='dropdown-info'>
                          <h4><span><b>Joe </b>has recently used <b>AI Symptopm Checker</b></span></h4>
                          <p className='text-time'>few seconds ago</p>
                        </div>
                      </div>

                    </MenuItem>
                    
</div>

<div className='btnn'>
<Button className=' btn-blue w-100'>View all Notifications</Button>
</div>


                  </Menu>


                </Button>
              </div>


              <div className='myacc-wrapper'>
                <Button className='myacc d-flex align-items-center' onClick={handleClick}>

                  <div className='userimg'>
                    <span className='rounded-circle'>
                      <img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1717853771/pritam_yf87za.jpg' />
                    </span>
                  </div>
                  <div className='user-info'>
                    <h4>Username</h4>
                    <p className='mb-0'>@username</p>
                  </div>



                </Button>


                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&::before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >


                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>


              </div>

            </div>
          </div>
        </div>
      </header>

    </>



  )
}

export default DashBoardHeader