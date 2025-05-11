// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { addToCart } from '../actions/cartAction';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [mainImage, setMainImage] = useState('/placeholder-image.jpg');

//   useEffect(() => {
//     let isMounted = true; // To prevent state updates after component unmounts

//     const fetchProduct = async () => {
//       try {
//         // 1. Set loading state and clear previous errors
//         if (isMounted) {
//           setLoading(true);
//           setError(null);
//         }

//         // 2. Configure API request
//         const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4500';
//         const endpoint = `${API_URL}/auth/products/${id}`;
        
//         const response = await fetch(endpoint, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });

//         // 3. Handle response
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const contentType = response.headers.get('content-type');
//         if (!contentType || !contentType.includes('application/json')) {
//           throw new Error('Received non-JSON response');
//         }

//         const data = await response.json();

//         // 4. Validate data structure
//         if (!data || typeof data !== 'object' || !data.id) {
//           throw new Error('Invalid product data structure');
//         }

//         // 5. Update state if component is still mounted
//         if (isMounted) {
//           setProduct(data);
//           setMainImage(data.image || '/placeholder-image.jpg');
//         }
//       } catch (err) {
//         console.error('Product fetch error:', err);
//         if (isMounted) {
//           setError(err.message || 'Failed to load product details');
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchProduct();

//     // Cleanup function
//     return () => {
//       isMounted = false;
//     };
//   }, [id]);

//   const handleAddToCart = () => {
//     if (product) {
//       dispatch(addToCart(product));
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="container my-5">
//         <div className="d-flex justify-content-center">
//           <div className="spinner-border text-primary" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !product) {
//     return (
//       <div className="container my-5">
//         <div className="alert alert-danger">
//           <h4>Error Loading Product</h4>
//           <p>{error || 'Product not found'}</p>
//           <div className="d-flex gap-2">
//             <button 
//               className="btn btn-primary"
//               onClick={() => navigate(-1)}
//             >
//               Go Back
//             </button>
//             <button 
//               className="btn btn-secondary"
//               onClick={() => window.location.reload()}
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Success state
//   return (
//     <div className="container my-5">
//       <div className="row g-4 shadow p-4">
//         {/* Product Image Section */}
//         <div className="col-md-6 text-center">
//           <img
//             src={mainImage}
//             alt={product.title}
//             className="img-fluid rounded"
//             style={{ maxHeight: 400 }}
//             onError={(e) => {
//               e.target.src = '/placeholder-image.jpg';
//             }}
//           />
//           <div className="mt-3">
//             <img
//               src={product.image || '/placeholder-thumbnail.jpg'}
//               alt={`${product.title} thumbnail`}
//               className="img-thumbnail"
//               style={{ width: 80, cursor: 'pointer' }}
//               onClick={() => setMainImage(product.image || '/placeholder-image.jpg')}
//               onError={(e) => {
//                 e.target.src = '/placeholder-thumbnail.jpg';
//               }}
//             />
//           </div>
//         </div>

//         {/* Product Info Section */}
//         <div className="col-md-6">
//           <h2>{product.title || 'Untitled Product'}</h2>
//           <a href="#" className="d-block mb-2 text-decoration-none">Visit Store</a>

//           <div className="mb-3">
//             <span className="text-warning">
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star" />
//               <i className="fas fa-star-half-alt" />
//             </span>
//             <span className="ms-2">4.7 (21)</span>
//           </div>

//           <div className="mb-3">
//             <p className="mb-1 text-muted">
//               Old Price: <del>$257.00</del>
//             </p>
//             <p className="fw-bold text-success">
//               New Price: ${product.price || 'N/A'}
//             </p>
//           </div>

//           <div className="mb-3">
//             <h5>About this item:</h5>
//             <p>{product.description || 'No description available.'}</p>
//             <ul className="list-unstyled">
//               <li>Color: <strong>Black</strong></li>
//               <li>Available: <strong>In Stock</strong></li>
//               <li>Category: <strong>Shoes</strong></li>
//               <li>Shipping Area: <strong>Worldwide</strong></li>
//               <li>Shipping Fee: <strong>Free</strong></li>
//             </ul>
//           </div>

//           <div className="mb-3 d-flex align-items-center">
//             <input 
//               type="number" 
//               min="1" 
//               defaultValue="1" 
//               className="form-control me-2" 
//               style={{ width: 80 }} 
//             />
//             <button 
//               className="btn btn-primary me-2" 
//               onClick={handleAddToCart}
//               disabled={!product}
//             >
//               Add to Cart <i className="fas fa-shopping-cart ms-1" />
//             </button>
//             <button className="btn btn-outline-secondary">Compare</button>
//           </div>

//           <div>
//             <p>Share at:</p>
//             <div className="d-flex gap-3">
//               {['facebook', 'twitter', 'instagram', 'whatsapp', 'pinterest'].map((social) => (
//                 <a 
//                   key={social}
//                   href={`https://www.${social}.com`} 
//                   className="text-dark"
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                 >
//                   <i className={`fab fa-${social}`} />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './ProductDetails.css';

// const ProductDetails = ({ product }) => {
//   // Default product data if none is passed
//   const defaultProduct = {
//     name: 'Product Name',
//     currentPrice: 39.00,
//     originalPrice: 29.00,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//     size: 'S',
//     color: 'Blue',
//     imageUrl: 'https://via.placeholder.com/500x500'
//   };

//   // Use passed product or default
//   const productData = product || defaultProduct;
  
//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleAddToCart = () => {
//     alert(`Added ${quantity} ${productData.name} to cart!`);
//     // Here you would typically dispatch an action to add to cart
//   };

//   return (
//     <div className="pd-wrap">
//       <div className="container">
//         <div className="heading-section">
//           <h2>{productData.name}</h2>
//         </div>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="product-image-container">
//               <img 
//                 src={productData.imageUrl} 
//                 alt={productData.name} 
//                 className="img-fluid product-image" 
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="product-dtl">
//               <div className="product-info">
//                 <div className="product-name">{productData.name}</div>
//                 <div className="product-price-discount">
//                   {productData.originalPrice && (
//                     <span className="original-price">${productData.originalPrice.toFixed(2)}</span>
//                   )}
//                   <span className="current-price">${productData.currentPrice.toFixed(2)}</span>
//                 </div>
//               </div>
//               <p className="product-description">
//                 {productData.description}
//               </p>
              
//               <div className="product-options">
//                 <table className="table">
//                   <tbody>
//                     <tr>
//                       <td><strong>Size</strong></td>
//                       <td>{productData.size}</td>
//                     </tr>
//                     <tr>
//                       <td><strong>Color</strong></td>
//                       <td>{productData.color}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
              
//               <div className="product-count">
//                 <label htmlFor="quantity">Quantity</label>
//                 <div className="quantity-selector">
//                   <button 
//                     className="qtyminus btn btn-outline-secondary" 
//                     onClick={handleDecrease}
//                     aria-label="Decrease quantity"
//                   >
//                     -
//                   </button>
//                   <input 
//                     type="text" 
//                     name="quantity" 
//                     value={quantity} 
//                     className="qty form-control" 
//                     readOnly 
//                     aria-label="Current quantity"
//                   />
//                   <button 
//                     className="qtyplus btn btn-outline-secondary" 
//                     onClick={handleIncrease}
//                     aria-label="Increase quantity"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button 
//                   className="btn btn-dark add-to-cart-btn mt-3" 
//                   onClick={handleAddToCart}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Add this import
import { useDispatch } from 'react-redux';  // Add this import for dispatch
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { addToCart } from '../actions/cartAction';

const ProductDetails = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.image);
  const navigate = useNavigate();  // This is now correctly initialized
  const dispatch = useDispatch();  // Initialize dispatch for Redux actions
 console.log(product,"productproductproduct")
 
  const handleAddToCart = () => {
    console.log('Adding product to cart:', product);  // Log to see if the product is passed
    dispatch(addToCart(product));
    navigate('/cart');  // Navigate to the cart page after adding the product
      // Add product to the cart
  };
  

  return (
    <div className="container my-5">
      <div className="row g-4 shadow p-4">
        {/* Left: Image */}
        <div className="col-md-6 text-center">
          <img
            src={mainImage}
            alt="Main"
            className="img-fluid rounded"
            style={{ maxHeight: 400 }}
          />
          <div className="mt-3">
            <img
              src={product?.image}
              alt="Thumbnail"
              className="img-thumbnail"
              style={{ width: 80, cursor: 'pointer' }}
              onClick={() => setMainImage(product?.image)}
            />
          </div>
        </div>

        {/* Right: Content */}
        {console.log(product,"kkkkkkkkkkkkkkkkk")}
        <div className="col-md-6">
          <h2>{product?.name}</h2>
          <a href="#" className="d-block mb-2 text-decoration-none">Visit Store</a>

          <div className="mb-3">
            <span className="text-warning">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </span>
            <span className="ms-2">4.7 (21)</span>
          </div>

          <div className="mb-3">
            <p className="mb-1 text-muted">
              Old Price: <del>$650.00</del>
            </p>
            <p className="fw-bold text-success">
              New Price: ${product?.price}
            </p>
          </div>

          <div className="mb-3">
            <h5>About this item:</h5>
            <p>{product?.description || 'High-quality Nike shoes with premium design.'}</p>
            <ul className="list-unstyled">
              <li>Color: <strong>Black</strong></li>
              <li>Available: <strong>In Stock</strong></li>
              <li>Category: <strong>Shoes</strong></li>
              <li>Shipping Area: <strong>Worldwide</strong></li>
              <li>Shipping Fee: <strong>Free</strong></li>
            </ul>
          </div>

          <div className="mb-3 d-flex align-items-center">
            <input type="number" min="1" defaultValue="1" className="form-control me-2" style={{ width: 80 }} />
            <button className="btn btn-primary me-2" onClick={handleAddToCart}>
              Add to Cart <i className="fas fa-shopping-cart ms-1" />
            </button>
            <button className="btn btn-outline-secondary">Compare</button>
          </div>

          <div>
            <p>Share at:</p>
            <a href="https://www.facebook.com" className="me-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com" className="me-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.instagram.com" className="me-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://wa.me" className="me-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" />
            </a>
            <a href="https://www.pinterest.com" className="me-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};



export default ProductDetails;