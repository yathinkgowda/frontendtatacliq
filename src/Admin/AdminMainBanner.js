import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminMainPage = () => {

  const navigate = useNavigate();
  // Navigation bar image URL
  const navImageUrl = 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Tata_Cliq_logo.svg/1000px-Tata_Cliq_logo.svg.png';
  
  // Background image URL for the main content
  const backgroundImageUrl = 'data:image/jpeg;base64,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'
  // Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  };

  const navBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: '15px 0',
    boxShadow: '0 2px 10px rgba(197, 184, 184, 0.1)',
  };

  const navImageStyle = {
    height: '50px',
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '10px',
    textAlign: 'center',
    width: '80%',
    maxWidth: '600px',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '30px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '1.1rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    color: 'white',
  };

  const addProductsButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#3498db',
  };

  const viewOrdersButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#e74c3c',
  };

  const handleAddProducts = () => {
    console.log('Add Products clicked');
    navigate('/Admin')
    // Add navigation or logic here
  };

  const handleViewOrders = () => {
    console.log('View Orders clicked');
    navigate('/AdminOrdersPage')
  };

  return (
    <div style={containerStyle}>
      {/* Navigation Bar */}
      <div style={navBarStyle}>
        <img 
          src={navImageUrl} 
          alt="Admin Logo" 
          style={navImageStyle} 
        />
      </div>

      {/* Main Content */}
      <div style={contentStyle}>
        <div style={overlayStyle}>
          <h1 style={titleStyle}>Admin Dashboard</h1>
          <div style={buttonContainerStyle}>
            <button
              style={addProductsButtonStyle}
              onClick={handleAddProducts}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Add Products
            </button>
            <button
              style={viewOrdersButtonStyle}
              onClick={handleViewOrders}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
            >
              View Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMainPage;










