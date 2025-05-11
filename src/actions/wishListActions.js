
export const addToWishlist = (item) =>({
  type: 'ADD_TO_WISHLIST',
  payload:item
});

export const removeFromCart = (item) =>({
  type:'REMOVE_FROM_CART',
  payload:item});

  export const incrementCartCounter = () =>({
      type : 'INCREMENT_CART_COUNTER',});
       
      export const decrementtCartCounter = ()=>({
          type: 'DECREMENT_CART_COUNTER',
      });
         
      
