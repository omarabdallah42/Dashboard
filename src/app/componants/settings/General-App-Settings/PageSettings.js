"use client"
import React, { useState, useEffect,useRef } from 'react'
import ProfileHeaderSettings from '../Profile Header Settings'
import '../settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as fauser } from '@fortawesome/free-solid-svg-icons'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { WebsiteState } from '../../../store/WebsiteState.js'
import { useNotificationStore } from '../../../store/notification ';
import { Products } from '../../../store/productsState';
import Snackbar from '@mui/material/Snackbar';
export default function PageSettings() {
    const {setNotification} = useNotificationStore()
    const { ActiveAlert, SetActiveAlert } = Products();
  
  const { Website,About,setAbout } = WebsiteState();
  const [isSave, SetIsSave] = useState(false);
  const [profileImg, setProfileImg] = useState('/customer3.jpeg');
  const [websiteInfo, SetWebsitInfo] = useState({
    domainName: Website.domain,
    role: Website.role,
    email: Website.SupportEmail,
    phone: Website.SupportPhone
  });
  const fileInputRef = useRef(null);
  
  const handleImgClick = () => {
  if(fileInputRef.current) fileInputRef.current.click();
};
const handleFileChange = (e) => {
  const file = e.target.files[0];
  if(file) {
    const reader = new FileReader();
    reader.onload = (ev) => setProfileImg(ev.target.result);
    reader.readAsDataURL(file);
  }
  setNotification({
    message:`new update in your Website profile`
  })
  SetActiveAlert({
    type: 'success',
    show: true,
    message:`Website photo  updated successfully`,
  })
};
  useEffect(() => {
    if (
      Website.domain === websiteInfo.domainName &&
      Website.role === websiteInfo.role &&
      Website.SupportEmail === websiteInfo.email &&
      Website.SupportPhone === websiteInfo.phone
    ) {
      SetIsSave(false);
    } else {
      SetIsSave(true);
    }
  }, [websiteInfo, Website]);

  return (
    <div className='settings-profile' >
       <div className='settings-profile-img' style={{ position:'relative' }}>
   <div className='settings-profile-img' style={{position:'relative'}} onClick={handleImgClick}>
  <img src={profileImg} alt='Profile' className='img' style={{cursor:'pointer'}} />
  <input
    type='file'
    accept='image/*'
    style={{display:'none'}}
    ref={fileInputRef}
    onChange={handleFileChange}
  />
</div>
    </div>
       <Snackbar
                open={ActiveAlert.show}
                autoHideDuration={3000}
                onClose={() => SetActiveAlert({ ...ActiveAlert, show: false })}
                message={ActiveAlert.message}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key={ActiveAlert.message}
              />
      <ProfileHeaderSettings IsSave={!isSave} data={websiteInfo} type="Website" />
      <div className='settings-profile-info'>
        <div>
          <div className='Input'>
            <p>Domain Name</p>
            <Box sx={{ '& > :not(style)': { m: 1, height: "50px", width: '25ch' } }}>
              <TextField
                id="outlined-domain"
                label="Domain"
                inputProps={{ maxLength: 20 }}
                sx={{ '& > :not(style)': { height: "100%", color: 'white', borderRadius: "10px" } }}
                value={websiteInfo.domainName}
                onChange={(e) => SetWebsitInfo({ ...websiteInfo, domainName: e.target.value })}
              />
            </Box>
          </div>
          <div className='Input'>
            <p>Role</p>
            <Box sx={{ '& > :not(style)': { m: 1, height: "50px", width: '25ch' } }}>
              <TextField
                disabled
                id="outlined-role"
                label={websiteInfo.role}
                sx={{ '& > :not(style)': { height: "100%", color: 'white', borderRadius: "10px" } }}
              />
            </Box>
          </div>
        </div>
        <div>
          <div className='Input'>
            <p>Support Email</p>
            <Box sx={{ '& > :not(style)': { m: 1, height: "50px", width: '25ch' } }}>
              <TextField
                id="outlined-email"
                label="Email"
                sx={{ '& > :not(style)': { height: "100%", color: 'white', borderRadius: "10px" } }}
                value={websiteInfo.email}
                onChange={(e) => SetWebsitInfo({ ...websiteInfo, email: e.target.value })}
              />
            </Box>
          </div>
          <div className='Input'>
            <p>Support Phone</p>
            <Box sx={{ '& > :not(style)': { m: 1, height: "50px", width: '25ch' } }}>
              <TextField
                id="outlined-phone"
                label="Phone"
                sx={{ '& > :not(style)': { height: "100%", color: 'white', borderRadius: "10px" } }}
                value={websiteInfo.phone}
                onChange={(e) => SetWebsitInfo({ ...websiteInfo, phone: e.target.value })}
              />
            </Box>
          </div>
        </div>
      </div>
      <div className='AboutWebisite'>
        <h2>About Website</h2>
        <textarea 
          value={About}
          onChange={(e) => setAbout(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
