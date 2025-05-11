// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Order = ({ orders }) => {
//   const navigate = useNavigate();

//   const containerStyle = {
//     padding: '20px',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const headerStyle = {
//     textAlign: 'center',
//     marginBottom: '30px',
//     color: '#2c3e50',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   };

//   const backButtonStyle = {
//     padding: '8px 16px',
//     backgroundColor: '#3498db',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   };

//   const ordersContainerStyle = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
//     gap: '20px',
//   };

//   const orderCardStyle = {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
//     borderLeft: '4px solid #3498db',
//   };

//   const productItemStyle = {
//     margin: '8px 0',
//     padding: '8px',
//     backgroundColor: '#f8f9fa',
//     borderRadius: '4px',
//   };

//   const handleBack = () => {
//     navigate('/admin');
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={headerStyle}>
//         <h1>Order Details</h1>
//         <button style={backButtonStyle} onClick={handleBack}>Back to Dashboard</button>
//       </div>
      
//       {orders.length === 0 ? (
//         <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>No orders have been placed yet.</p>
//       ) : (
//         <div style={ordersContainerStyle}>
//           {orders.map((order) => (
//             <div key={order.id} style={orderCardStyle}>
//               <h3>Order #{order.id.toString().slice(-6)}</h3>
//               <p><strong>Customer:</strong> {order.customerName}</p>
//               <p><strong>Email:</strong> {order.customerEmail}</p>
//               <p><strong>Address:</strong> {order.shippingAddress}</p>
//               <p><strong>Total:</strong> ${order.totalAmount.toFixed(2)}</p>
              
//               <h4>Products:</h4>
//               <div>
//                 {order.products.map((product, index) => (
//                   <div key={index} style={productItemStyle}>
//                     <p><strong>{product.name}</strong></p>
//                     <p>Price: ${product.price.toFixed(2)}</p>
//                     <p>Quantity: {product.quantity || 1}</p>
//                   </div>
//                 ))}
//               </div>
              
//               <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Order;




