const API_URL = 'http://localhost:5005/api/orders';

export const createOrder = async (orderData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
  return await response.json();
};

export const getOrders = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const getOrderById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};