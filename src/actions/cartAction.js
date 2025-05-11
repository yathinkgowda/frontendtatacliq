export const addToCart = (item) => {
  // Check if the item is valid before dispatching
  if (!item || !item.id || typeof item.price !== 'number' || !item.image) {
    console.error('Invalid item:', item);
    return {
      type: 'ADD_TO_CART',
      payload: undefined, // Invalid payload, so it won't reach the reducer

      
    };
  }
  return {
    type: 'ADD_TO_CART',
    payload: item,
    
  };
  console.log(item,"itemitemitemitem")
};

export const removeFromCart = (item) => ({
  type: 'REMOVE_FROM_CART',
  payload: item,
});

export const incrementCartCounter = () => ({
  type: 'INCREMENT_CART_COUNTER',
});

export const decrementCartCounter = () => ({
  type: 'DECREMENT_CART_COUNTER',
});
