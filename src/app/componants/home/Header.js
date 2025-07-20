'use client'
import React from 'react'
import Image from 'next/image'
import './Home.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import {useState,useEffect} from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useNotificationStore } from '../../store/notification '; // بدون مسافة
import MenuItem from '@mui/material/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faSearch } from '@fortawesome/free-solid-svg-icons';
import { useProfileStore } from '../../store/profile';
import Link from 'next/link';
export default function Header() {
     const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [Photo,SetPhoto] = useState('/customer3.jpeg');
 const { notification } = useNotificationStore();
const activeNotifications = notification.filter(n => n.message?.trim() !== '');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
    const { profile  } = useProfileStore();
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    SetPhoto(profile.src)
  },[profile.src])
  return (
    <div className='header'>
        <h3>Hi {profile.name} !</h3>
        <div className='searchContainer'>
        <input type="text" placeholder='Search...' className='search' />
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
            <div className='profileContainer'>
                <div className='profile'>
                    <Link href="/pages/settings"><Image src={profile.src} alt="profile" width={40} height={40} /></Link>
                  </div>
  <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div>
{
  activeNotifications.length > 0
    ? <NotificationsActiveIcon />
    : <FontAwesomeIcon icon={faBell} />
}    
  </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
     {activeNotifications.length === 0 ? (
        <MenuItem disabled>
          <div>
            <p>No notification yet</p>
          </div>
        </MenuItem>
      ) : (
        activeNotifications.map((e, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <div>
              <p>{e.message}</p>
            </div>
          </MenuItem>
        ))
      )}
      </Menu>
    </div>
            </div> 
    </div>
  ); 
};