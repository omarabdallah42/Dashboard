"use client";

import React, { useState, useEffect } from "react";
import "./products.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBoxes, faBoxTissue, faPeopleCarryBox, faSearch } from "@fortawesome/free-solid-svg-icons";

import GeneralStatistics from "../statistics/GeneralStatistics";
import TopProducts from "./TopProducts";

import Image from "next/image";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import { Products } from "../../store/productsState";

const options = [
  "Edit",
  "Export",
  "Delete",
  "View",
];
const ITEM_HEIGHT = 48;

export default function ProductsTable() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { tableData } = Products();

  const [search, setSearch] = useState('');
  const [filterValue, setFilterValue] = useState('');
  
  const handleChange = (event) => {
    setFilterValue(event.target.value);
  };

  // تطبيق الفلتر على المنتجات
  let filtered = tableData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) 
  );

  if (filterValue === "lowest") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (filterValue === "highest") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (filterValue === "Newest") {
    filtered = [...filtered].sort((a, b) => new Date(b.time) - new Date(a.time)); 
  } else if (filterValue === "Oldest") {
    filtered = [...filtered].sort((a, b) => new Date(a.time) - new Date(b.time)); 
  } else if (filterValue === "Shoes") {
    filtered = filtered.filter((item) => item.category === "Shoes"); 
  } else if (filterValue === "Shirts") {
    filtered = filtered.filter((item) => item.category === "Shirts"); 
  } else if (filterValue === "Jackets") {
    filtered = filtered.filter((item) => item.category === "Jackets"); 
  }

  return (
    <div className='products'>
      <div className='Home-header'>
        <GeneralStatistics icon={faBoxes} title='Total Products' value='5000' data={[]} />
        <GeneralStatistics icon={faPeopleCarryBox} title='Completed Orders' value='3,234' data={[]} />
        <GeneralStatistics icon={faBoxTissue} title='Activated products' value='1,234' data={[]} />
        <GeneralStatistics icon={faBox} title='Inactive products' value='700' data={[]} />
      </div>

      <TopProducts />

      <div className='product-table'>
        <div className='table-header'>
          <h3>Products Table</h3>
          <div className='searchContainer'>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              placeholder='Search by Product Name...'
              className='search'
            />
            <FontAwesomeIcon icon={faSearch} className='searchIcon' />
          </div>

          <div className='table-icon'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='filter-label'>Filter</InputLabel>
                <Select
                    labelId='filter-label'
                    id='filter-select'
                    value={filterValue}
                    label='Filter by'
                    onChange={handleChange}
                >
                    <MenuItem value='Oldest'>The Oldest</MenuItem>
                    <MenuItem value='Newest'>The Newest</MenuItem>
                    <MenuItem value='highest'>The highest price</MenuItem>       
                    <MenuItem value='lowest'>The lowest price</MenuItem>
                    <MenuItem value='Shoes'>Shoes</MenuItem>
                    <MenuItem value='Shirts'>Shirts</MenuItem>
                    <MenuItem value='Jackets'>Jackets</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
          <div className="containerTable">

        <table className='table'>
          <thead>
            <tr>
              <th>Username</th>
              <th>User Photo</th>
              <th>Product</th>
              <th>Count</th>
              <th>Cost</th>
              <th>Product Title</th>
              <th>Category</th>
              <th>State</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => (
              <tr key={index}>
                <td><p>{item.user}</p></td>
                <td>
                    <div className='img'>
                      <Image src={item.usersrc} alt={`${item.user} photo`} width={40} height={40} />
                    </div>
                </td>
                <td className='productsContainer'>
                    <div className='img-product'>
                      <Image src={item.productSrc} alt={`${item.productTitle} image`} width={120} height={40} />
                    </div>
                </td>
                <td>{item.count}</td>
                <td>{item.price}$</td>
                <td><p>{item.title}</p></td>
                <td>{item.category}</td>
                <td>{item.state}</td>
                <td>{item.time}</td>
                <td id='more' style={{ width:'5px'}}> 
                   <IconButton aria-label='more' id='long-button' aria-expanded={open ? 'true' : undefined} aria-controls={open ? 'long-menu' : undefined} onClick={handleClick}>
                    <MoreVertIcon />
                   </IconButton>
                   <Menu
                     id='long-menu'
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{ 'aria-labelledby': 'long-button' }}
                     PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: '10ch' } }}>
                     {options.map((option) => (
                       <MenuItem key={option} onClick={handleClose}>
                         {option}
                       </MenuItem>
                     ))}
                   </Menu>
                 </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>

      </div>
    </div>
  );
};