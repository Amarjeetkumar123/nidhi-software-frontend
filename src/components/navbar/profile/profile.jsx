import "./profile.scss";
import React, { useContext, useState } from 'react';
import { IconButton, Menu, MenuItem, Divider, Avatar } from '@mui/material';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { MdOutlineManageAccounts } from "react-icons/md";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { AuthContext } from "../../../context/AuthContext";

const ProfilePopover = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { logout } = useContext(AuthContext);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        const clientId = localStorage.getItem("clientId");
        logout({ "client_id": clientId });
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = open ? 'profile-popover' : undefined;

    return (
        <div>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={id}
                aria-haspopup="true"
                onClick={handleClick}
            >
                {/* <Avatar className="avatar">A</Avatar> */}
                <Avatar
                    src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    alt="User Profile"
                    className="avatar"
                />
            </IconButton>
            <Menu
                id={id}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: 150,
                        maxWidth: '100%',
                    },
                }}
            >
                <MenuItem onClick={handleClose} >
                    <div className='profile-menu-item'>
                        <AccountCircleOutlinedIcon className="profile-icon" />
                        <span className='menu-item-text'>Profile</span>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className='profile-menu-item'>
                        <MdOutlineManageAccounts className="profile-icon" />
                        <span className='menu-item-text'>Settings</span>
                    </div>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                    <div className='profile-menu-item'>
                        <ExitToAppIcon className="profile-icon" />
                        <span className='menu-logout'>Logout</span>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default ProfilePopover;
