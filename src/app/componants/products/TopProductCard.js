"use client"
import React from 'react'
import './TopProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ProductInfoDialog from './ProductInfo';
import { useState } from 'react';
export default function TopProductCard({src,ItemEdite ,onClose,title, price, description, rating}) {
  const formattedRating = Number(rating).toFixed(1); // Format the rating to one decimal place
  const [open, setOpen] = useState(false);
  const [ItemEditeValue,SetItemEditeValue] = useState(ItemEdite)
  return (
    <div className='TopProductCard'>
        <div className='Edit'>
        <button onClick={() =>   setOpen(true)} className=''>Edit</button>
        <ProductInfoDialog typeEdite='edite' ItemEdite={ItemEditeValue}  onClose={() => {setOpen(false);}} open={open}/>
        </div>
        <div className="img-product-card">
        <img src={src} alt={title} />
        </div>
        <div className="product-info">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
      <p className="description">{description}</p>
      <div className="rating">
        <div>
            {Array.from({ length: Math.floor(rating) }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} />
            ))}
            {rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfStroke} />}
            {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} style={{ opacity: 0.5 }} />
            ))}
        </div>
        <p>{formattedRating} <FontAwesomeIcon icon={faStar} /></p>
      </div>
    </div>
  );
};