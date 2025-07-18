import React from 'react'
import './Enter.css'
export default function EnterWith({typeOf,typeOfLoggings}) {
  return (
    <div className='signinWith'>
      <button>{typeOf} {typeOfLoggings} with google 
        <img src='google.png'></img>
        </button>       
    </div>
  );
};