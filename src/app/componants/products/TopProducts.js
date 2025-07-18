"use client"
import React, { useState ,useEffect} from 'react'
import TopProductCard from './TopProductCard'
import './TopProductCard.css'
import ProductInfoDialog from './ProductInfo';
import Snackbar from '@mui/material/Snackbar';
import {Products} from '../../store/productsState'
export default function TopProducts() {
  const { products, ActiveAlert,SetActiveAlert} = Products();
  const [open, setOpen] = useState(false);
  const [ItemEdite,SetItemEdite]  = useState({
    src: '/pngwing.com (12).png',
    title: '',
    price: null,
    category: '',
    description: '',
  });
  return (
    <div className='TopProducts'>
        <Snackbar open={ActiveAlert.show} autoHideDuration={3000} hideDuration={3000} onClose={() => ActiveAlert.setShow(false)}
          message={ActiveAlert.message}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          key={ActiveAlert.message}/>
      {/* تمرر open و onClose بشكل صحيح */}
      <ProductInfoDialog typeEdite='add' ItemEdite={ItemEdite}  open={open} onClose={() => setOpen(false)}  />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Top Products</h2>
        <button  onClick={() => {setOpen(true)
        SetItemEdite({
          src: '/pngwing.com (12).png',
          title: '',
          price: null,
          category: '',
          description: '',
        })
        }}  className='buttonTable' >Add New Product</button>
      </div>
      <div className='TopProducts-Container'>
        {products.map((product, index) => (
          <TopProductCard  id={index} ItemEdite={product}  open={open} onClose={() => setOpen(false)}  key={index} {...product}  />
        ))}
      </div>
    </div>
  );
};