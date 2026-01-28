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
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { useProfileStore } from '../../store/profile';
import Link from 'next/link';
export default function Header() {
     const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [Photo,SetPhoto] = useState('/customer3.webp');
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
        <FontAwesomeIcon aria-label='search' icon={faSearch} width={20} height={20} className='searchIcon' />
      </div>
      <div className='profileContainer' style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div className='profile' style={{ minWidth: 48, minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="/pages/settings" tabIndex={0} aria-label="Profile settings" style={{ display: 'inline-block', minWidth: 48, minHeight: 48 }}>
            <Image src={profile.src} alt="profile" width={40} height={40} priority sizes="40px" style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, maxWidth: 40, maxHeight: 40, borderRadius: '50%', objectFit: 'cover', aspectRatio: '1/1', display: 'block' }} />
          </Link>
        </div>
        <div>
          <Button
            aria-label='notification'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ minWidth: 48, minHeight: 48, padding: 8, borderRadius: 24 }}
            tabIndex={0}
          >
            <div>
              {activeNotifications.length > 0
                ? <NotificationsActiveIcon style={{ width: 24, height: 24 }} fontSize="large" />
                : <FontAwesomeIcon aria-label='notification' icon={faBell} width={24} height={24} />}
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