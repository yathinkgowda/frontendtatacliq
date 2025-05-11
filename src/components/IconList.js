import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction.js';
import { addToWishlist } from '../actions/wishListActions.js';
import setCurrentProduct from '../actions/setCurrentProduct';

function IconList({ product }) {
  const dispatch = useDispatch();

  const handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product));
  };

  const handleShoppingBagClick = () => {
    console.log('Product being added to cart:', product);
    dispatch(addToCart(product));
    
    alert('Product added to cart');
  };

  const handleHeartClick = () => {
    dispatch(addToWishlist(product));
    
    alert('Product added to wishlist');
  };

  return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
      <Link onClick={handleCurrentProduct} to={`/details`}>
        <li className="icon" aria-label="View Product Details">
          <span className="fas fa-expand-arrows-alt"></span>
        </li>
      </Link>

      <li className="icon mx-3" onClick={handleHeartClick} aria-label="Add to Wishlist">
        <span className="far fa-heart"></span>
      </li>

      <li className="icon" onClick={handleShoppingBagClick} aria-label="Add to Cart">
        <span className="fas fa-shopping-bag"></span>
      </li>
    </ul>
  );
}

export default IconList;
