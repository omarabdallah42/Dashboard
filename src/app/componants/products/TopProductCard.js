"use client"
import React from 'react'
import './TopProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ProductInfoDialog from './ProductInfo';
import { useState } from 'react';
import Image from 'next/image';
export default function TopProductCard({src,ItemEdite ,title, price, description, rating}) {
  const formattedRating = Number(rating).toFixed(1); 
  const [open, setOpen] = useState(false);
  const [ItemEditeValue] = useState(ItemEdite)
  return (
    <div className='TopProductCard'>
        <div className='Edit'>
        <button onClick={() =>   setOpen(true)} className=''>Edit</button>
        <ProductInfoDialog typeEdite='edite' ItemEdite={ItemEditeValue}  onClose={() => {setOpen(false);}} open={open}/>
        </div>
        <div className="img-product-card">
        <Image loading='lazy'  width={100} height={100}  src={src} alt={title} />
        </div>
        <div className="product-info">
            <h3>{title}</h3>
            <p>${price}</p>
        </div>
      <p className="description">{description}</p>
      <div className="rating">
        <div>
            {Array.from({ length: Math.floor(rating) }, (_, index) => (
                <FontAwesomeIcon key={index} width={20} height={20} icon={faStar} />
            ))}
            {rating % 1 !== 0 && <FontAwesomeIcon width={20} height={20} icon={faStarHalfStroke} />}
            {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
                <FontAwesomeIcon key={index} width={20} height={20} icon={faStar} style={{ opacity: 0.5 }} />
            ))}
        </div>
        <p>{formattedRating} <FontAwesomeIcon width={20} height={20} icon={faStar} /></p>
      </div>
    </div>
  );
};