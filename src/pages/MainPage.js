import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  
  // Background image URL
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '30px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    padding: '12px 30px',
    margin: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const adminButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  const handleUserLogin = () => navigate('/login');
  const handleAdminLogin = () => navigate('/AdminMainPage');

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <h1 style={titleStyle}>Welcome to Our Platform</h1>
        <button 
          style={loginButtonStyle}
          onClick={handleUserLogin}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          User Login
        </button>
        <button 
          style={adminButtonStyle}
          onClick={handleAdminLogin}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#d32f2f'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#f44336'}
        >
          Admin Login
        </button>
      </div>
    </div>
  );
};

export default MainPage;