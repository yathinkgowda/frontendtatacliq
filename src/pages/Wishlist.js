import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/MainNavbar";
import { addToCart } from "../actions/cartAction"; // ✅ Make sure this path is correct
import { useNavigate } from 'react-router-dom'; 



const Wishlist = () => {
  const wishlistItems = useSelector((state) => state?.wishlist?.wishlistItems);
  const dispatch = useDispatch();
  const [wishlistItem, setWishlistItem] = useState([]);
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return `RS. ${price.toFixed(2)}`;
  };

  useEffect(() => {
    setWishlistItem(wishlistItems);
  }, [wishlistItems]);

  const handleClickRemove = (itemId) => {
    const updatedItems = wishlistItem?.filter((item) => item.id !== itemId);
    setWishlistItem(updatedItems);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate('/cart');
  };

  return (
    <div className="container bg-white mt-5">
      <Navbar />

      {wishlistItem?.length ? (
        <>
          <h3 className="border-bottom py-2 mb-3 mt-5">My Wishlist</h3>
          <div className="row">
            <div className="col-md-12 shadow">
              <div className="row border-bottom py-3 fw-bold">
                <div className="col-md-8">Item</div>
                <div className="col-md-2 text-end">Price</div>
                <div className="col-md-2 text-end">Action</div>
              </div>

              {wishlistItem?.map((item) => (
                <div
                  className="row py-4 border-bottom align-items-center"
                  key={item.id}
                >
                  <div className="col-md-8 d-flex">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <h6 className="ps-3 mb-0">{item.title}</h6>
                  </div>
                  <div className="col-md-2 text-end">
                    {formatPrice(item.price)}
                  </div>
                  <div className="col-md-2 text-end">
                    <button
                      className="btn btn-sm btn-danger me-2"
                      onClick={() => handleClickRemove(item.id)}
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-center mt-5 pt-5">Your Wishlist is Empty</h1>
      )}
    </div>
  );
};

export default Wishlist;
