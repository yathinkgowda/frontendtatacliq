// import React from 'react';

// const AdminMainPage = () => {
//   // Navigation bar image URL
//   const navImageUrl = 'https://via.placeholder.com/150x50?text=Admin+Logo';
  
//   // Background image URL for the main content
//   const backgroundImageUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

//   // Styles
//   const containerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100vh',
//     width: '100vw',
//   };

//   const navBarStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#2c3e50',
//     padding: '15px 0',
//     boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
//   };

//   const navImageStyle = {
//     height: '50px',
//   };

//   const contentStyle = {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     padding: '20px',
//   };

//   const overlayStyle = {
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     padding: '40px',
//     borderRadius: '10px',
//     textAlign: 'center',
//     width: '80%',
//     maxWidth: '600px',
//   };

//   const titleStyle = {
//     color: 'white',
//     fontSize: '2rem',
//     marginBottom: '30px',
//     fontWeight: 'bold',
//   };

//   const buttonContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '20px',
//     width: '100%',
//   };

//   const buttonStyle = {
//     padding: '15px 30px',
//     fontSize: '1.1rem',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     transition: 'all 0.3s ease',
//     color: 'white',
//   };

//   const addProductsButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#3498db',
//   };

//   const viewOrdersButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: '#e74c3c',
//   };

//   const handleAddProducts = () => {
//     console.log('Add Products clicked');
//     // Add navigation or logic here
//   };

//   const handleViewOrders = () => {
//     console.log('View Orders clicked');
//     // Add navigation or logic here
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Navigation Bar */}
//       <div style={navBarStyle}>
//         <img 
//           src={navImageUrl} 
//           alt="Admin Logo" 
//           style={navImageStyle} 
//         />
//       </div>

//       {/* Main Content */}
//       <div style={contentStyle}>
//         <div style={overlayStyle}>
//           <h1 style={titleStyle}>Admin Dashboard</h1>
//           <div style={buttonContainerStyle}>
//             <button
//               style={addProductsButtonStyle}
//               onClick={handleAddProducts}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
//             >
//               Add Products
//             </button>
//             <button
//               style={viewOrdersButtonStyle}
//               onClick={handleViewOrders}
//               onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
//               onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
//             >
//               View Orders
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminMainPage;