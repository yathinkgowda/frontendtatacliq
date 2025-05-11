import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './OrderHistory.css';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = useSelector(state => state.auth.userId);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders/history', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  if (loading) return <div className="loading">Loading your orders...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <span>Order #{order._id.substring(0, 8)}</span>
                <span className={`status ${order.status}`}>{order.status}</span>
              </div>
              
              <div className="order-details">
                <div className="order-items">
                  {order.items.map(item => (
                    <div key={item.productId} className="order-item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>₹{item.price} x {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="order-summary">
                  <h4>Shipping Address</h4>
                  <p>{order.shippingAddress.street}</p>
                  <p>{order.shippingAddress.city}, {order.shippingAddress.state}</p>
                  <p>{order.shippingAddress.postalCode}</p>
                  
                  <div className="order-totals">
                    <p><strong>Total:</strong> ₹{order.grandTotal}</p>
                    <p>Payment Method: {order.paymentMethod.toUpperCase()}</p>
                    <p>Order Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;