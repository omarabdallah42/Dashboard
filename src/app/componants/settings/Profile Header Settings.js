"use client"
import React from 'react'

import './settings.css';
import Snackbar from '@mui/material/Snackbar';
import { useProfileStore } from '../../store/profile';
import { Products } from '../../store/productsState';
import { WebsiteState } from '../../store/WebsiteState';
import {useNotificationStore} from '../../store/notification '; 

export default function ProfileHeaderSettings({ IsSave, data, type }) {
  const { setProfile } = useProfileStore();
  const { SetWebsite } = WebsiteState();
  const {setNotification} = useNotificationStore();
  const { ActiveAlert, SetActiveAlert } = Products();
  const handleSave = () => {
    if (type === 'Profile') {
      if (!data.name || !data.email || !data.phone) {
        SetActiveAlert({
          message: 'All fields are required!',
          show: true,
        });
      } else {
        setProfile(data);
        SetActiveAlert({
          message: 'Profile saved!',
          show: true,
        });
        setNotification({
          message: 'New update in your Website',
        })
      };
    } else if (type === 'Website') {
      if (!data.domainName || !data.email || !data.phone) {
        SetActiveAlert({
          message: 'All fields are required!',
          show: true,
        });
      } else {
        SetWebsite({
          domain: data.domainName,
          role: data.role,
          SupportEmail: data.email,
          SupportPhone: data.phone,
        });
        SetActiveAlert({
          message: 'Website Settings saved!',
          show: true,
          
        });
          setNotification({
          message: 'New update in your profile',
        });
      };
    };
  };

  return (
    <div className='Theme-Settings-buttons'>
      <Snackbar
        open={ActiveAlert.show}
        autoHideDuration={3000}
        onClose={() => SetActiveAlert({ ...ActiveAlert, show: false })}
        message={ActiveAlert.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key={ActiveAlert.message}
      />
      <div className='Settings-buttons'>
        <button
          style={IsSave ? { background: '#444' } : { background: '#3366ff' }}
          disabled={IsSave}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};