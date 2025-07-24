"use client";
import { useState } from 'react';
import React from 'react'
import './users.css';
import Image from 'next/image';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GeneralStatistics from '../statistics/GeneralStatistics';
import { faUsers,faSearch,faSort,faStar, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const options = [
  'Edit',
  'Export',
  'Delete',
  ,'view'
];


export default function Orders() {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  const [search, SetSearch] = useState('');
  const [FilterValue, setFilterValue] = useState('');
  const tableData = [
    { src:"/customer.jpeg",  type:'Seller', user: "Sara", money: "500$", rate:4.1, state: "Expert", time: "2025:5:31" },
    { src:"/customer2.jpeg", type:'Customer',  user: "Ali", money: "300$",  rate:4.2, state: "VIP", time: "2025:6:01" },
    { src:"/customer3.jpeg", type:'Seller',  user: "Ahmed", money: "700$",  rate:3, state: "Top Rated", time: "2025:6:02" },
    { src:"/customer4.jpeg", type:'Customer',  user: "Omar", money: "200$", rate:4.8, state: "New User", time: "2025:6:03" },
    { src:"/customer.jpeg" , type:'Seller',  user: "Fatma", money: "600$", rate:4.4,state: "Rating", time: "2025:6:04" },
    { src:"/customer2.jpeg", type:'Customer',  user: "Abdullah", money: "400$", rate:4.5, state: "Average exchange", time: "2025:6:05" },
    { src:"/customer3.jpeg", type:'Seller', user: "Hassan", money: "800$",   rate:2,state: "Top Rated", time: "2025:6:06" },
    { src:"/customer4.jpeg", type:'Customer',  user: "Mohammed", money: "350$",  rate:5, state: "VIP", time: "2025:6:07" },
  ];

  let filteredData = tableData.filter(item =>
    item.user.toLowerCase().includes(search.toLowerCase())
  );
  if (FilterValue === 'Oldest') {
    filteredData = filteredData.slice().sort((a, b) => new Date(a.time) - new Date(b.time));
  } else if (FilterValue === 'Newest') {
    filteredData = filteredData.slice().sort((a, b) => new Date(b.time) - new Date(a.time));
  } else if (FilterValue === 'highest') {
    filteredData = filteredData.slice().sort((a, b) => parseFloat(b.money) - parseFloat(a.money));
  } else if (FilterValue === 'lowest') {
    filteredData = filteredData.slice().sort((a, b) => parseFloat(a.money) - parseFloat(b.money));
  } else if (FilterValue === 'Customer') {
    filteredData = filteredData.filter(item => item.type === 'Customer');
  } else if (FilterValue === 'Seller') {
    filteredData = filteredData.filter(item => item.type === 'Seller');
  }

  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };
const ITEM_HEIGHT = 48;

  let showData = null;
  if (filteredData.length === 0) {
    showData = (
      <tr>
        <td colSpan="8">
          <h2 className='Not-found'>Item Not Found Try to Search Another Item !</h2>
        </td>
      </tr>
    );
  } else {
    showData = filteredData.map((item, index) => (
      <tr key={index}>
        <td><p>{item.user}</p></td>
        <td>
          <div className="img">
            <Image src={item.src} alt={`${item.user} photo`} width={40} height={40} />
          </div>
        </td>
        <td>{item.money}</td>
        <td style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'6px'}}>{item.rate} <p><FontAwesomeIcon icon={faStar}/></p></td>
        <td>{item.type}</td>
        <td>{item.state}</td>
        <td>{item.time}</td>
        <td >
    <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            },
            list: {
              'aria-labelledby': 'long-button',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>        </td>
      </tr>
    ));
  }

  return (
    <div className='orders'>
      <div className='orders-header'>
        <GeneralStatistics
          Growth={20}
          data={[100, 120, 90, 150, 130, 170]} 
          icon={faUsers}
          title={"Total Users"}
          value={10000}
        />
        <GeneralStatistics
          Growth={70}
          data={[100, 40, 90, 150, 130, 170]} 
          icon={faUsers}
          title={"Sellers"}
          value={100}
        />
        <GeneralStatistics
          Growth={40}
          data={[100, 120, 90, 150, 100, 170]} 
          icon={faUsers}
          title={"Buyers"}
          value={100}
        />
        <GeneralStatistics
          Growth={-10}
          data={[100, 120, 90, 150, 130, 400]} 
          icon={faUsers}
          title={"Orders"}
          value={100}
        />
      </div>
      <div className="table-header">
        <h3>User Table</h3>
        <div className='searchContainer'>
          <input
            onKeyUp={(e) => SetSearch(e.target.value)}
            type="text"
            placeholder='Search Users...'
            className='search'
          />
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
        <div className="table-icon">
          <Box sx={{ minWidth: 120, backgroundColor:'#1d1b1b8e',color:'white',borderRadius:'10px'}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={FilterValue}
                label="Filter by"
                sx={{color:'white',
                  backgroundColor:'#1d1b1b8e',
                  border:'1px solid #ffffff1a',
                  borderRadius:'10px',
                  boxShadow: '0 0 50px rgba(255, 255, 255, 0.3)'
                }}
                onChange={handleChange}
              >
                <MenuItem value={'Oldest'}>The Oldest</MenuItem>
                <MenuItem value={'Newest'}>The Newest</MenuItem>
                <MenuItem value={'highest'}>The highest</MenuItem>
                <MenuItem value={'lowest'}>The lowest</MenuItem>
                <MenuItem value={'Customer'}>Customers</MenuItem>
                <MenuItem value={'Seller'}>Sellers</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className='table-container'>

      <table className="table">
          {showData.length > 0 &&  <thead>
        
          <tr>
            <th>UserName</th>
            <th>User Photo</th>
            <th>Exchange</th>
            <th>Rate</th>
            <th>Type</th>
            <th>State</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>}
       
        <tbody>
          {showData}
        </tbody>
      </table>
            </div>

    </div>
  );
}