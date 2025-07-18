"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import './orders.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GeneralStatistics from '../statistics/GeneralStatistics';
import { faUsers, faDollarSign, faSearch, faEllipsisV, faUserAlt, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const options = [
  'Edit',
  'Export',
  'Delete',
  ,'view'
];

const ITEM_HEIGHT = 48;
export default function Orders() {
   const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const tableData = [
  { src: "/customer.jpeg", count: 5, productSrc: '/pngwing.com (12).png', productTitle: 'Shoes', user: "Sara", money: 500, icon: faDollarSign, state: "In preparation", time: "2025-05-31", type: "Customer", category: "Fashion" },
  { src: "/customer2.jpeg", count: 3, productSrc: '/pngwing.com (13).png', productTitle: 'Shirt', user: "Ali", money: 300, icon: faUserAlt, state: "Completed", time: "2025-06-01", type: "Seller", category: "Clothes" },
  { src: "/customer3.jpeg", count: 2, productSrc: '/pngwing.com (14).png', productTitle: 'Shoes', user: "Ahmed", money: 700, icon: faMoneyCheck, state: "Under delivery", time: "2025-06-02", type: "Customer", category: "Fashion" },
  { src: "/customer4.jpeg", count: 4, productSrc: '/pngwing.com (15).png', productTitle: 'Jacket', user: "Omar", money: 200, icon: faUserAlt, state: "In preparation", time: "2025-06-03", type: "Seller", category: "Clothes" },
  { src: "/customer.jpeg", count: 5, productSrc: '/pngwing.com (12).png', productTitle: 'Shoes', user: "Fatma", money: 600, icon: faDollarSign, state: "Completed", time: "2025-06-04", type: "Customer", category: "Fashion" },
  { src: "/customer2.jpeg", count: 9, productSrc: '/pngwing.com (13).png', productTitle: 'Shirt', user: "Abdullah", money: 400, icon: faUserAlt, state: "In preparation", time: "2025-06-05", type: "Seller", category: "Clothes" },
  { src: "/customer3.jpeg", count: 10, productSrc: '/pngwing.com (14).png', productTitle: 'Shoes', user: "Hassan", money: 800, icon: faMoneyCheck, state: "Under delivery", time: "2025-06-06", type: "Customer", category: "Fashion" },
  { src: "/customer4.jpeg", count: 20, productSrc: '/pngwing.com (15).png', productTitle: 'Jacket', user: "Mohammed", money: 350, icon: faUserAlt, state: "Completed", time: "2025-06-07", type: "Seller", category: "Clothes" },
];
  const [FilterValue, SetFilterValue] = useState('');
  const [finalData, SetFinalData] = useState(tableData);
  const [search, SetSearch] = useState('');
  useEffect(() => {
    let filteredBy = tableData.filter(item =>
      item.productTitle.toLowerCase().includes(search.toLowerCase()) ||
      item.productTitle.toLowerCase().includes(search.toLowerCase())
    );
    if (FilterValue === 'lowest') {
      filteredBy.sort((a, b) => a.money - b.money);
    } else if (FilterValue === 'highest') {
      filteredBy.sort((a, b) => b.money - a.money);
    } else if (FilterValue === 'Newest') {
      filteredBy.sort((a, b) => new Date(b.time) - new Date(a.time));
    } else if (FilterValue === 'Oldest') {
      filteredBy.sort((a, b) => new Date(a.time) - new Date(b.time));
    } else if (FilterValue === 'Customer') {
      filteredBy = filteredBy.filter(item => item.type === 'Customer');
    } else if (FilterValue === 'Seller') {
      filteredBy = filteredBy.filter(item => item.type === 'Seller');
    };
    SetFinalData(filteredBy);
  }, [FilterValue, search]);
  const handleChange = (event) => {
    SetFilterValue(event.target.value);
  };
  const showData = finalData.map((item, index) => (
    <tr key={index}>
      <td><p >{item.user}</p></td>
      <td>
        <div className="img">
          <Image className="w-full h-[300px] object-contain" src={item.src} alt={item.user} width={80} height={80} />
        </div>
      </td>
      <td>
        <Image src={item.productSrc} alt={item.productTitle} width={80} height={80} style={{ objectFit: "contain" }} />
      </td>
      <td>{item.count}</td>
      <td>{item.money}$</td>
      <td>{item.productTitle}</td>
      <td>{item.category}</td>
      <td>
        <p className="">{item.state}</p>
      </td>
      <td>{item.time}</td>
      <td className="Icon">
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
  ));
  return (
    <div className='orders'>
      <div className='orders-header'>
        <GeneralStatistics Growth={20} data={[100, 120, 90, 150, 130, 170]} icon={faUsers} title={"Orders"} value={100} />
        <GeneralStatistics Growth={20} data={[100, 40, 90, 150, 130, 170]} icon={faUsers} title={"Orders"} value={100} />
        <GeneralStatistics Growth={20} data={[100, 120, 90, 150, 100, 170]} icon={faUsers} title={"Orders"} value={100} />
        <GeneralStatistics Growth={20} data={[100, 120, 90, 150, 130, 400]} icon={faUsers} title={"Orders"} value={100} />
      </div>
      <div className="table-header">
        <h3>Order Table</h3>
        <div className='searchContainer'>
          <input
            onChange={(e) => SetSearch(e.target.value)}
            type="text"
            placeholder='Search Orders...'
            className='search'
          />
          <FontAwesomeIcon icon={faSearch} className='searchIcon' />
        </div>
        <div className="table-icon">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={FilterValue}
                label="Filter by"
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#1d1b1b",
                  color: "#fff",
                  boxShadow: " 0 0 50px rgba(255, 255, 255, 0.1) ",                 
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
      <table className="table">
        <thead>
          <tr>
            <th>UserName</th>
            <th>User Photo</th>
            <th>Order</th>
            <th>Count</th>
            <th>Cost</th>
            <th>Product Title</th>
            <th>Category</th>
            <th>State</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showData}
        </tbody>
      </table>
    </div>
  );
}
