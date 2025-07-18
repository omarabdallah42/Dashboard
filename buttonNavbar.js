
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

// تأكد إن اسم الكمبوننت يبدأ بحرف كابتل
export default function ButtonNavbar({link, title, icon, isActive, onClick }) {
  const buttonClass = isActive ? "buttonNavbar-active" : "buttonNavbar";

  return (
    <Link href={`${link}`} >
      <button className={buttonClass} onClick={onClick}>
        <FontAwesomeIcon icon={icon} className="icon" />
        <span className="title">{title}</span>
      </button>
    </Link>
  );
};