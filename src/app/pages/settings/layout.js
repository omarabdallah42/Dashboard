"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../componants/settings/settings.css';
import ButtonSettings from '../../componants/settings/buttonSettings';
import { useState } from 'react';
import { faCog,faUserCog, faBell, faWrench, faUserShield } from '@fortawesome/free-solid-svg-icons';
export default function Layout({children}) {
  const [activeBtn,SetActiveBtn] = useState('user')
  return (
    <div className='settings'>
        <div className='settings-Overlay'>
            <div className='settings-Overlay-Icon'>

            <h2> <FontAwesomeIcon icon={faCog} /> Settings</h2>
            <p>Manage your account and application settings here.</p>
            </div>
            <div className='settings-Overlay-Sidebar'>
                <ul>
                    <li><ButtonSettings
                       Title={'Profile Settings'} icon={faUserCog} link={'/pages/settings'}
                        isActive={activeBtn === 'user'}
                       onClick={
                        () =>{
                        SetActiveBtn('user')
                        }
                      }
                    ></ButtonSettings></li>
                   <li>
                    <ButtonSettings
                       Title={'General Settings'} icon={faWrench} link={'/pages/settings/General-App-Settings'}
                        isActive={activeBtn === 'General'}
                       onClick={() =>{
                            SetActiveBtn('General');
                       }             
                      }
                    /></li>
                       <li><ButtonSettings
                       Title={'Security Settings'} icon={faUserShield} link={'/pages/settings/Security'}
                        isActive={activeBtn === 'Security'}
                       onClick={() =>{
                          SetActiveBtn('Security')
                       }}
                    /></li>                    
                    <li><ButtonSettings
                       Title={'Notification Settings'} icon={faBell} link={'/pages/settings/notification'}
                        isActive={activeBtn === 'notification'}
                       onClick={
                        () =>{
                        SetActiveBtn('notification')
                        }
                      }
                    ></ButtonSettings></li>   
                </ul>
            </div>
        </div>
        <div className='settings-Content'>
        {children}
        </div>
    </div>
  );
};