"use client"
import React from 'react'
import {SecuritySettings} from '../../../store/Security'
import { useState,useEffect } from 'react';
import { Products } from '../../../store/productsState';
import Snackbar from '@mui/material/Snackbar';
import { useNotificationStore } from '../../../store/notification ';
export default function Security() {
  const {setNotification} = useNotificationStore();
  const {Password,SetPassword} = SecuritySettings()
  const { ActiveAlert, SetActiveAlert } = Products();
  const [realPassword,SetRealPassword] = useState(Password.Password);
  const [passwordValue,SetPasswordValue] = useState(Password.Password);
    useEffect(() => {
      SetPasswordValue(Password.Password);
    }, [Password.Password]);
    return (
       <div className='settings-Content'>
           <Snackbar
                open={ActiveAlert.show}
                autoHideDuration={3000}
                onClose={() => SetActiveAlert({ ...ActiveAlert, show: false })}
                message={ActiveAlert.message}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key={ActiveAlert.message}
              />
      <div className='settings-Content-Header'>
        <h2>Security Settings</h2>
        <p>Manage your security settings to keep your account safe.</p>
      </div>
      <div className='settings-2fa'>
        <div>
          <h3>Two-Factor Authentication</h3>
          <p>Enable two-factor authentication for added security.</p>
        </div>
          <button className='enable-2fa'>Enable 2FA</button>
      </div>
      <div className='security-options'>
        <div className='securityUserId'>
          <h3>User ID</h3>
          <p><strong>5854545df87454</strong></p>
        </div>
        <div className='securityPassword'>
          <h3>Password</h3>
          <div>
          <input  
            onChange={(e) => {
              SetPasswordValue(e.target.value);
            }} 
            value={passwordValue} 
            type='text'
          />
          <button 
            onClick={() => {
              if(realPassword === passwordValue || !passwordValue.trim()){
                SetActiveAlert({ message: 'New password cannot be the same as the old one!', show: true });
                return;
              }else{
                setNotification({
                  message: 'New update in your password',
                })
 SetActiveAlert({ message: 'Password changed!', show: true });
              SetPassword({ Password: passwordValue });
              };
            }}
            className='change-password-btn'
          >
            Change Password
          </button>
          </div>
        </div>
      </div>
    </div>
    );
};