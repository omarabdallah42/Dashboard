"use client";
import "./global.css";
import { faHomeAlt,faTable,faTruck,faBoxOpen,faDollarSign, faUsers, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonNavbar from "../../../buttonNavbar";
import { useState } from "react";
import Header from "../componants/home/Header";

export default function RootLayout({ children }) {
  const [activeTab, setActiveTab] = useState('home');
  return (               
      <div className="VictoryContainer">
        <div className="fixedsidebar">
    <div className="container">
        <h2>Dashboard</h2>
        <div className="nav">
          <ButtonNavbar link={"/pages/home"}  isActive={activeTab === 'home'}
        onClick={() => setActiveTab('home')} title="Home" icon={faHomeAlt} />
          <ButtonNavbar link={"/pages/Revunes"}  isActive={activeTab === 'dollarsign'}
        onClick={() => setActiveTab('dollarsign')} title="Revenues" icon={faDollarSign} />
          <ButtonNavbar link={'/pages/Products'} isActive={activeTab === 'products'}
        onClick={() => setActiveTab('products')} title="Products" icon={faBoxOpen} />
          <ButtonNavbar link={'/pages/Calendar'}  isActive={activeTab === 'table'}
        onClick={() => setActiveTab('table')} title="Calendar" icon={faTable} />
          <ButtonNavbar link={'/pages/orders'} isActive={activeTab === 'orders'}
        onClick={() => setActiveTab('orders')} title="Orders" icon={faTruck} />
          <ButtonNavbar link={'/pages/users'} isActive={activeTab === 'users'}
        onClick={() => setActiveTab('users')} title="Users" icon={faUsers} />
        </div>
        <div className="settingsUsers">
          <ButtonNavbar link={'/pages/settings'} isActive={activeTab === 'settings'}
        onClick={() => setActiveTab('settings')} title="Settings" icon={faCog} />
          <ButtonNavbar  link={'/sign-In'} isActive={activeTab === 'logout'}
        onClick={() => setActiveTab('logout')} title="Logout" icon={faSignOutAlt} />

        </div>
        </div>
        </div>
    
        {/* Main content area */} 
        <div className="main-content">
          <Header/>
        {children}
        </div>
        </div>
  );
};