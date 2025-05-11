const initialState = {
  wishlistItems: [],
  wishlistCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  taxes: 0,
  grandTotal: 0,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      if (!action.payload || typeof action.payload.price !== 'number') {
        console.warn('Invalid wishlist item:', action.payload);
        return state;
      }

      // Changed to check action.payload._id instead of action.payload.id
      const alreadyInWishlist = state.wishlistItems.some(
        item => item._id === action.payload._id || 
              (item.id && item.id === action.payload.id) // Backward compatibility
      );
      
      if (alreadyInWishlist) {
        return state;
      }

      const newWishlist = [...state.wishlistItems, action.payload];
      const newTotalPrice = state.totalPrice + action.payload.price;
      const newTaxes = newTotalPrice * 0.18;
      const newGrandTotal = newTotalPrice + state.deliveryCharges + newTaxes;

      return {
        ...state,
        wishlistItems: newWishlist,
        wishlistCounter: state.wishlistCounter + 1,
        totalPrice: newTotalPrice,
        taxes: newTaxes,
        grandTotal: newGrandTotal,
      };

    case 'REMOVE_FROM_WISHLIST':
      // Updated to check _id instead of id
      const itemExists = state.wishlistItems.find(
        item => item._id === action.payload._id || 
              (item.id && item.id === action.payload.id)
      );
      
      if (!itemExists) return state;

      const updatedWishlist = state.wishlistItems.filter(
        item => item._id !== action.payload._id &&
              (!item.id || item.id !== action.payload.id)
      );
      
      const updatedTotal = state.totalPrice - itemExists.price;
      const updatedTax = updatedTotal * 0.18;
      const updatedGrandTotal = updatedTotal + state.deliveryCharges + updatedTax;

      return {
        ...state,
        wishlistItems: updatedWishlist,
        wishlistCounter: state.wishlistCounter - 1,
        totalPrice: updatedTotal,
        taxes: updatedTax,
        grandTotal: updatedGrandTotal,
      };

    default:
      return state;
  }
};

export default wishlistReducer;