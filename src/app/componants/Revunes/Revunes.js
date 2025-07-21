"use client";

import React from "react";
import './Revunes.css';
import StaticsVector from '../statistics/StaticsVector';
import { faBoxesPacking,faEllipsis, faDollarSign, faMoneyCheck, faPiggyBank, faReceipt, faUserAlt, faEllipsisV, faFilter, faSort, faSearch } from '@fortawesome/free-solid-svg-icons';
import RadarChart from '../statistics/RadarChart';
import { useState,useEffect } from "react";
import GeneralStatistics from '../statistics/GeneralStatistics';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Revunes() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

if (process.env.NODE_ENV === "development") {
  console.error = () => {};
}
  const options = [
  'Edit',
  'Export',
  'Delete',
  ,'view'
];  

 

const ITEM_HEIGHT = 48;
 const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [search,SetSearch] = useState('')
  const [FilterValue, SetFilterValue] = React.useState('');
  const [finalData,SetFinalData] = useState([])
  const handleChange = (event) => {
    SetFilterValue(event.target.value);
  };
  const tableData = [
    { src:"/customer.jpeg",type:'Seller' ,user: "Sara", money: 500, icon: faDollarSign, state: "Paid plan", time: "2024-5-8" },
    { src:"/customer2.jpeg",type:'Customer' ,user: "Ali", money: 300, icon: faUserAlt, state: "Returning User", time: "2025-6-1" },
    { src:"/customer3.jpeg",type:'Seller' ,user: "Ahmed", money: 700, icon: faMoneyCheck, state: "Free plan", time: "2025-6-2" },
    { src:"/customer4.jpeg",type:'Seller' ,user: "Omar", money: 200, icon: faUserAlt, state: "Returning User", time: "2025-6-3" },
    { src:"/customer.jpeg",type:'Customer' ,user: "Fatma", money: 600, icon: faDollarSign, state: "Paid plan plus", time: "2025-6-4" },
    { src:"/customer2.jpeg",type:'Seller' ,user: "Abdullah", money: 400, icon: faUserAlt, state: "Returning User", time: "2025-6-5" },
    { src:"/customer3.jpeg",type:'Seller' ,user: "Hassan", money: 800, icon: faMoneyCheck, state: "New User", time: "2023-6-6" },
    { src:"/customer4.jpeg",type:'Seller' ,user: "Mohammed", money: 350, icon: faUserAlt, state: "Returning User", time: "2023-6-7" },
  ];

  const radarLabels = ["Subscriptions", 'Sales', "purchases", "Advertisements", "User Support"];
   useEffect(() => {
  let filteredBy = tableData.filter(item =>
    item.user.toLowerCase().includes(search.toLowerCase())
  );

  if (FilterValue == 'lowest') {
    filteredBy.sort((a, b) => a.money - b.money);
  } else if (FilterValue == 'highest') {
    filteredBy.sort((a, b) => b.money - a.money);
  } else if (FilterValue == 'Newest') {
    filteredBy.sort((a, b) => new Date(b.time) - new Date(a.time));
  } else if (FilterValue == 'Oldest') {
    filteredBy.sort((a, b) => new Date(a.time) - new Date(b.time));
  }else if (FilterValue == 'Customer'){
    filteredBy = filteredBy.filter(item => item.type === 'Customer');
  }else if (FilterValue == 'Seller'){
    filteredBy = filteredBy.filter(item => item.type === 'Seller');
  }

  SetFinalData(filteredBy);
}, [FilterValue, search]);
  const showData = finalData.map((item, index) => {
    return(
    <tr key={index}>
       <td data-label="UserName"><p className="">{item.user}</p></td>

<td data-label="UserPhoto">
 <div className="img">
 <img
    src={item.src}
    alt="avatar"
  /> </div>
</td>
 <th data-label="type" style={{display:"flex",justifyContent:'center',alignItems:'center'}}>{item.type}</th>
      <td data-label="Cost">{item.money}$</td>
      <td data-label="state"> <p className="text-state">{item.state}</p></td>
      <td data-label="Time">{item.time}</td>
      <td data-label=" ">   
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
      </Menu>
  </td>
    </tr>
    )
  })
    if (!isClient) return <div>Loading...</div>;

  // Sort Data
  return (
    <div className='Revunes'>
      <div className='Revunes-header' style={{ display: "flex", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
        <GeneralStatistics 
          Growth={100} 
          data={[0, 100, 300, 600, 400, 1000]} 
          icon={faDollarSign} 
          title="Total Revenue" 
          value="$12,234,567" 
        />
        <GeneralStatistics 
          Growth={50} 
          data={[0, 100, 50, 400, 800, 1000]} 
          icon={faPiggyBank} 
          title="Net Profits" 
          value="$10,234,567" 
        />
        <GeneralStatistics 
          Growth={25} 
          data={[0, 200, 4000, 400, 800, 1000]} 
          icon={faReceipt} 
          title="Total Transactions" 
          value="1,234" 
        />
        <GeneralStatistics 
          Growth={30} 
          data={[0, 100, 50, 400, 300,800, 100,100]} 
          icon={faBoxesPacking} 
          title="Total Expenses" 
          value="$9,876,543" 
        />
      </div>
      <div className='Revunes-chart'>
        <div className='Revunes-chart-victory' >
          <div className='VictoryContainer-Revunes statics'>
        <h3 >Revenue Statistics</h3>
            <StaticsVector  typeBar={"$"} data={[0, 50000, 40000, 1000, 60000, 10000, 30000, 60000, 40000, 50000, 11000, 1000]} />
          </div>
          <div className='VictoryContainer-Revunes radar' >
        <h3 >Sources of income Statistics</h3>
            <RadarChart 
              
              data1={[0, 50, 100, 300, 600, 400, 1100, 100]} 
              data2={[0, 40, 50, 800, 120, 280, 480, 1080, 120]} 
              label={radarLabels} 
            />
          </div>
        </div>
      </div>
    
          <div className="">
             <div className="table-header">
      <h3 className="Rvuenes-table">Revenue Table</h3>
      <div className='searchContainer'>
        <input onChange={(e) => SetSearch(e.target.value)} type="text" placeholder='Search Users Transactions...' className='search' />
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
      <div className="table-icon">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel  id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={FilterValue}
          label="Filter by"
          onChange={handleChange}>
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
<div className="table">
  <thead>
    <tr>
      <th>UserName</th>
      <th>UserPhoto</th>
      <th>type</th>
      <th>Cost</th>
      <th>state</th>
      <th>Time</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {showData}
  </tbody>
</div>
    </div>
      </div>
  );
};