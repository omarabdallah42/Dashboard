import React from 'react'
import './notification.css'
export default function Notification() {
  return (
    <div className='notification'>

        <h1>Notification</h1>
         <div className='notification-container'>
            <div className='notification-item'>
                <div className='notification-item-beo'>

                <h2>Allow Notifications In App</h2>
                <p>
                    These are notification Are pushed to your app, you can turn them off at any time
                </p>
                </div>
                <div className='notification-item-toggle'>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id='check'
                    />
                    <label className='button' for='check'></label>
                </div>
            </div>
               <div className='notification-item'>
                <div className='notification-item-beo'>

                <h2>Allow Notifications In App</h2>
                <p>
                    These are notification Are pushed to your app, you can turn them off at any time
                </p>
                </div>
                <div className='notification-item-toggle'>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id='check1'
                    />
                    <label className='button' for='check1'></label>
                </div>
            </div>
    <div className='notification-item'>
                <div className='notification-item-beo'>

                <h2>Allow Notifications In App</h2>
                <p>
                    These are notification Are pushed to your app, you can turn them off at any time
                </p>
                </div>
                <div className='notification-item-toggle'>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id='check2'
                    />
                    <label className='button' for='check2'></label>
                </div>
            </div>
         </div>
    </div>
  );
};
