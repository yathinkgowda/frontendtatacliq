import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/MainNavbar'; 
import Productdetails from '../components/ProudctDetails'; 

function Details() {
  const product = useSelector((state) => state.currentProduct.product); 
  
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

      <div className="container">
        <Productdetails product={product} />
      </div>
    </>
  );
};

export default Details;
