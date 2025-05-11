import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4500/orders').then(res => setOrders(res.data));
  }, []);

  return (
    <div className="mt-3">
      <h4>Order List</h4>
      <ul className="list-group">
        {orders.map(o => (
          <li key={o._id} className="list-group-item">
            {o.buyerName} ordered {o.quantity}x {o.productId?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
