import React from 'react';
import Topbar from '../topbar/topbar';
import Sidebar from '../sidebar/sidebar';
import "./underconstruction.css"

const UnderConstruction = () => {
  const containerStyle = {
    flex:10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',

  };

  const messageStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const subMessageStyle = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <>
   <Topbar></Topbar>
   <div className='underConstructions'>

   
   <Sidebar />
    <div style={containerStyle}>
    
  
      <h1 style={messageStyle}>🚧 This page is under construction 🚧</h1>
      <p style={subMessageStyle}>We are working hard to bring it to you soon!</p>
    </div>
    </div>
    </>
  );
};

export default UnderConstruction;
