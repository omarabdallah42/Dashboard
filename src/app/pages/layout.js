"use client";
import "./global.css";
import { faHomeAlt,faTable,faTruck,faBoxOpen,faDollarSign, faUsers, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import ButtonNavbar from "../buttonNavbar";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Header from "../componants/home/Header";

export default function RootLayout({ children }) {
 

  const [activeTab, setActiveTab] = useState('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="VictoryContainer">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          top: 20,
          left: 20,
          zIndex: 2000,
          display: { xs: 'block', sm: 'none' },
          background: 'transparent',
        }}
      >
        <MenuIcon sx={{ fontSize: 32, color: '#fff' }} />
      </IconButton>
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
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: 'block', sm: 'none' } }}
        PaperProps={{
          sx: {
            background: '#181717',
            color: '#fff',
            width: 220,
            paddingTop: 2,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <h2 style={{textAlign: 'center', color: '#fff', marginBottom: 30}}>Dashboard</h2>
          <div className="nav" style={{gap: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ButtonNavbar link={"/pages/home"}  isActive={activeTab === 'home'}
              onClick={() => {setActiveTab('home'); setDrawerOpen(false);}} title="Home" icon={faHomeAlt} />
            <ButtonNavbar link={"/pages/Revunes"}  isActive={activeTab === 'dollarsign'}
              onClick={() => {setActiveTab('dollarsign'); setDrawerOpen(false);}} title="Revenues" icon={faDollarSign} />
            <ButtonNavbar link={'/pages/Products'} isActive={activeTab === 'products'}
              onClick={() => {setActiveTab('products'); setDrawerOpen(false);}} title="Products" icon={faBoxOpen} />
            <ButtonNavbar link={'/pages/orders'} isActive={activeTab === 'orders'}
              onClick={() => {setActiveTab('orders'); setDrawerOpen(false);}} title="Orders" icon={faTruck} />
            <ButtonNavbar link={'/pages/users'} isActive={activeTab === 'users'}
              onClick={() => {setActiveTab('users'); setDrawerOpen(false);}} title="Users" icon={faUsers} />
            <ButtonNavbar link={'/pages/settings'} isActive={activeTab === 'settings'}
              onClick={() => {setActiveTab('settings'); setDrawerOpen(false);}} title="Settings" icon={faCog} />
            <ButtonNavbar  link={'/sign-In'} isActive={activeTab === 'logout'}
              onClick={() => {setActiveTab('logout'); setDrawerOpen(false);}} title="Logout" icon={faSignOutAlt} />
          </div>
        </Box>
      </Drawer>
      <div className="main-content">
        <Header/>
        {children}
      </div>
    </div>
  );
};