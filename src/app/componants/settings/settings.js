"use client";
import React from 'react'
import './settings.css';
import {useState,useEffect,useRef} from 'react';
import ProfileHeaderSettings from './Profile Header Settings';
import { useProfileStore } from '../../store/profile';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Products } from '../../store/productsState';
import TextField from '@mui/material/TextField';
import { useNotificationStore } from '../../store/notification ';
export default function Settings() {
  const {setNotification} = useNotificationStore()
  const {profile,setProfile} = useProfileStore();
  const { ActiveAlert, SetActiveAlert } = Products();
  const [isSave,SetIsSave] = useState(false);
  const [ProfileEdit,setProfileEdite] = useState({
    name:profile.name,
    role:profile.role,
    email:profile.email,
    phone : profile.phone
  })
  const [profileImg, setProfileImg] = useState('/customer3.jpeg');
const fileInputRef = useRef(null);
useEffect(() => {
  setProfile({
    ...profile,
    src:profileImg
  })
},[profileImg])
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
    message:`new update in your photo profile`
  })
  SetActiveAlert({
    type: 'success',
    show: true,
    message:`Profile photo  updated successfully`,
  })
};
  useEffect(() =>{
    if(profile.name === ProfileEdit.name && profile.role === ProfileEdit.role && profile.email === ProfileEdit.email && profile.phone === ProfileEdit.phone){ 
      SetIsSave(false);
    }else{
      SetIsSave(true);
    }
  },[ProfileEdit])
    return (
    <div className='settings-profile'>
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
<ProfileHeaderSettings 
  data={ProfileEdit} 
  originalProfile={profile} 
  IsSave={!isSave}
  type='Profile'
/>
       <div className='settings-profile-info'>
        <div>
   <div className='Input'>
             <p> Name</p>
        <Box
      sx={{ '& > :not(style)': { m: 1, height:"50px" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible"
          sx={{'& > :not(style)':{height:"100%",color:'white',borderRadius:"10px"}}}
          label="Name"
          inputProps={{ maxLength: 10 }}
          maxRows={4}
          onChange={(e) => setProfileEdite({...ProfileEdit,name:e.target.value})}
          value={ProfileEdit.name}
        />
        </Box>
        </div>
            <div className='Input'>
             <p>Role</p>
        <Box
      sx={{ '& > :not(style)': { m: 1, height:"50px" } }}
      noValidate
      autoComplete="off"
      
    >
      <TextField
          disabled
          id="outlined-multiline-flexible"
          sx={{'& > :not(style)':{height:"100%",color:'white',borderRadius:"10px"}}}
          label={ProfileEdit.role}
          maxRows={4}      
          />
        </Box>
        </div>      
        </div>
      <div>
    <div className='Input'>
             <p>Email</p>
        <Box
      sx={{ '& > :not(style)': { m: 1, height:"50px" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
          value={ProfileEdit.email}
          id="outlined-multiline-flexible"
          sx={{'& > :not(style)':{height:"100%",color:'white',borderRadius:"10px"}}}
          label="Email"
          maxRows={4}
          onChange={ (e) => setProfileEdite({...ProfileEdit,email:e.target.value})}
        />
        </Box>
        </div>    
           <div className='Input'>
             <p>Phone</p>
        <Box
      sx={{ '& > :not(style)': { m: 1, height:"50px" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible done"
          sx={{'& > :not(style)':{height:"100%",color:'white',borderRadius:"10px"}}}
          label="Phone"
          value={ProfileEdit.phone}
          onChange={(e) => setProfileEdite({...ProfileEdit,phone:e.target.value})}
          maxRows={4}
        />
        </Box>
        </div>
      </div>
       </div>
     </div>
  );
};