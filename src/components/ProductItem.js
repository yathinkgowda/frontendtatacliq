import React from 'react';
import IconList from './IconList';

const ProductItem = ({ product }) => {
  return (
    <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
      <div className="product"> 
        <img src={product.image} alt={product.name} />
        <IconList product={product} />
      </div>
      <div className="tag bg-red">sale</div>
      <div className="title pt-4 pb-1">{product.name}</div>
      <div className="d-flex align-content-center justify-content-center">
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
        <span className="fas fa-star"></span>
      </div>
      <div className="price">RS. {product.price}</div>
      <div className="product-details mt-2">
        <p><strong></strong> {product.category}</p>
        <p><strong></strong> {product.brand}</p>
        <p><strong></strong> {product.description}</p>
      </div>
    </div>
  );
};

export default ProductItem;