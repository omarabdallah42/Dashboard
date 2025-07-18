import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './settings.css'
export default function buttonSettings({link,Title,onClick,isActive,icon}) {
  const ClassNameBtn = isActive ? 'isActive': 'nonActive' 
  return (
    <Link href={`${link}`}>
        <button onClick={onClick} className={ClassNameBtn}>
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon> <p>{Title}</p></button>
    </Link>
  );
};