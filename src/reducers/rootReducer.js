import {combineReducers}   from "@reduxjs/toolkit";
import  userReducer from "./userReducer";
import  wishlistReducer  from "./wishlistReducer";
import  cartReducer  from "./cartReducer"
import  currentProductReducer  from "./currentproductReducer"

const rootReducer = combineReducers({
    user:userReducer,
    wishlist:wishlistReducer,
    cart:cartReducer,
    currentProduct:currentProductReducer


})

export default rootReducer;