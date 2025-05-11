import React from 'react';
import ProductItem from './ProductItem';

function ProductSection({ Product }) {
  console.log("All products in ProductSection:", Product);

  return (
    <div className="container bg-white">
      <div className="row">
        {Product?.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
