// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import Navbar from "../components/MainNavbar";
// import { Link, useNavigate } from "react-router-dom";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const CartDetails = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartCounter = useSelector((state) => state.cart.cartCounter);
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
//   const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
//   const taxes = useSelector((state) => state.cart.taxes);
//   const grandTotal = useSelector((state) => state.cart.grandTotal);
//   const navigate = useNavigate();

//   const [showAddressModal, setShowAddressModal] = useState(false);
//   const [showNewAddressModal, setShowNewAddressModal] = useState(false);

//   const [newAddress, setNewAddress] = useState({
//     firstName: "",
//     lastName: "",
//     pincode: "",
//     city: "",
//     address: "",
//     state: "",
//     landmark: "",
//     phone: "",
//     email: "",
//     addressType: "Home"
//   });

//   const [savedAddresses, setSavedAddresses] = useState([
//     {
//       id: 1,
//       firstName: "Yathin",
//       lastName: "k",
//       address: "Gandasi , handpost , arasikere (td),hassan (D), Gandasi",
//       locality: "hobili",
//       city: "ARSIKERE",
//       pincode: "573119",
//       phone: "9353881553",
//       isDefault: true
//     }
//   ]);

//   const [selectedAddress, setSelectedAddress] = useState(null);

//   const formatPrice = (price) => `₹${price.toFixed(2)}`;

//   const handleProceedClick = (e) => {
//     e.preventDefault();
//     if (!grandTotal) return;
//     setShowAddressModal(true);
//   };

//   const handleNewAddressClick = () => {
//     setShowAddressModal(false);
//     setShowNewAddressModal(true);
//   };

//   const handleAddressChange = (e) => {
//     const { name, value } = e.target;
//     setNewAddress((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSaveAddress = () => {
//     if (
//       !newAddress.firstName ||
//       !newAddress.lastName ||
//       !newAddress.pincode ||
//       !newAddress.city ||
//       !newAddress.address ||
//       !newAddress.state ||
//       !newAddress.phone
//     ) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     const newSavedAddress = {
//       id: savedAddresses.length + 1,
//       ...newAddress,
//       isDefault: false
//     };

//     setSavedAddresses([...savedAddresses, newSavedAddress]);
//     setSelectedAddress(newSavedAddress.id);
//     setShowNewAddressModal(false);
//     setShowAddressModal(true);

//     setNewAddress({
//       firstName: "",
//       lastName: "",
//       pincode: "",
//       city: "",
//       address: "",
//       state: "",
//       landmark: "",
//       phone: "",
//       email: "",
//       addressType: "Home"
//     });
//   };

//   const handleSelectAddress = (addressId) => {
//     setSelectedAddress(addressId);
//   };

//   const handleCheckout = () => {
//     const address = savedAddresses.find(addr => addr.id === selectedAddress);
//     navigate('/PaymentPage', { state: { address } });
//   };

//   return (
//     <>
//       <div className="container bg-white mt-5">
//         <Navbar />

//         {cartItems.length ? (
//           <>
//             <h3 className="border-bottom py-2 mb-3 mt-5">Shopping Cart</h3>
//             <div className="row">
//               <div className="col-md-8 shadow">
//                 <div className="row border-bottom py-3">
//                   <div className="col-md-9">Item</div>
//                   <div className="col-md-1 text-end">Cost</div>
//                   <div className="col-md-1 text-end">Qty</div>
//                   <div className="col-md-1 text-end">Total</div>
//                 </div>

//                 {cartItems.map((item) => (
//                   <div className="row py-4 border-bottom" key={item.id || item._id}>
//                     <div className="col-md-9 d-flex">
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         style={{ width: "40px", height: "40px", objectFit: "cover" }}
//                         onError={(e) => (e.target.src = "/default-product.png")}
//                       />
//                       <h6 className="ps-3 mb-0 text-truncate">{item.title}</h6>
//                     </div>
//                     <div className="col-md-1 text-end">{formatPrice(item.price)}</div>
//                     <div className="col-md-1 text-end">{item.quantity}</div>
//                     <div className="col-md-1 text-end">
//                       {formatPrice(item.total_item_price)}
//                     </div>
//                   </div>
//                 ))}

//                 <div className="row py-3 pe-3">
//                   <div className="offset-md-9 col-md-1">
//                     <h5 className="text-end">Total</h5>
//                   </div>
//                   <div className="col-md-1 text-end">
//                     <h5>{cartCounter}</h5>
//                   </div>
//                   <div className="col-md-1 text-center">
//                     <h5>{formatPrice(totalPrice)}</h5>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-4">
//                 <div className="shadow p-3 ms-2 mt-2">
//                   <div className="d-flex justify-content-between mb-2">
//                     <p>Sub Total</p>
//                     <p>{formatPrice(totalPrice)}</p>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <p>Delivery Charges</p>
//                     <p>{formatPrice(deliveryCharges)}</p>
//                   </div>
//                   <div className="d-flex justify-content-between mb-2">
//                     <p>Taxes</p>
//                     <p>{formatPrice(taxes)}</p>
//                   </div>
//                   <div className="d-flex justify-content-between mb-3">
//                     <h5>Grand Total</h5>
//                     <h5>{formatPrice(grandTotal)}</h5>
//                   </div>
//                   <button
//                     className={`btn btn-success w-100 ${!grandTotal ? "disabled" : ""}`}
//                     onClick={handleProceedClick}
//                   >
//                     Proceed
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <h1 className="text-center mt-5 pt-5">No Items in Cart</h1>
//         )}
//       </div>

//       {/* Address Selection Modal */}
//       <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Select Delivery Address</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="mb-4">
//             <Form.Control type="text" placeholder="Type Pincode Here" className="mb-2" />
//             <Button variant="secondary">Submit</Button>
//           </div>

//           <h5>Saved Addresses</h5>
//           <Button variant="link" onClick={handleNewAddressClick} className="mb-3">
//             + Add New Address
//           </Button>

//           {savedAddresses.map(address => (
//             <div key={address.id} className="border p-3 mb-3">
//               <Form.Check 
//                 type="radio"
//                 id={`address-${address.id}`}
//                 name="addressSelection"
//                 label={`${address.firstName} ${address.lastName}`}
//                 checked={selectedAddress === address.id}
//                 onChange={() => handleSelectAddress(address.id)}
//                 className="mb-2"
//               />
//               <p className="mb-1">{address.address}</p>
//               <p className="mb-1">{address.locality}</p>
//               <p className="mb-1">{address.city}, {address.pincode}</p>
//               <p className="mb-0">Phone: {address.phone}</p>
//             </div>
//           ))}

//           <div className="border-top pt-3 mt-3">
//             <h6>Processing Fee</h6>
//             <p>₹499.99 ₹29.00</p>
//             <Button variant="link" size="sm">See how this is calculated</Button>
//             <Button variant="link" size="sm">Know More</Button>
//           </div>

//           <div className="mt-3">
//             <h6>Bag Subtotal</h6>
//             <p>{formatPrice(totalPrice)}</p>
//           </div>

//           <div className="mt-3">
//             <h6>Product Discount(s)</h6>
//             <p>- ₹2150.00</p>
//             <p>You will save ₹2150.00 on this order</p>
//           </div>

//           <div className="mt-3 border-top pt-3">
//             <h5>Total {formatPrice(grandTotal)}</h5>
//             <Button 
//               variant="primary" 
//               size="lg" 
//               className="w-100 mt-3"
//               onClick={handleCheckout}
//               disabled={!selectedAddress}
//             >
//               Checkout
//             </Button>
//           </div>

//           <div className="mt-3">
//             <Form.Check 
//               type="checkbox"
//               label="You have 1 item in your wishlist"
//               className="mb-2"
//             />
//             <Button variant="link" size="sm">See all</Button>
//           </div>

//           <div className="mt-3 small">
//             <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
//             <p className="mb-0">Need Help ? Contact Us | FAQ</p>
//           </div>
//         </Modal.Body>
//       </Modal>

//       {/* New Address Modal */}
//       <Modal show={showNewAddressModal} onHide={() => setShowNewAddressModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Add New Address</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             {[
//               { label: "First Name", name: "firstName" },
//               { label: "Last Name", name: "lastName" },
//               { label: "PIN code", name: "pincode" },
//               { label: "City/District", name: "city" },
//               { label: "State", name: "state" },
//               { label: "Landmark", name: "landmark" },
//               { label: "Phone/Mobile Number", name: "phone", type: "tel" },
//               { label: "Email", name: "email", type: "email" }
//             ].map(({ label, name, type = "text" }) => (
//               <Form.Group className="mb-3" key={name}>
//                 <Form.Label>{label} {["firstName", "lastName", "pincode", "city", "address", "state", "phone"].includes(name) && "(Required)*"}</Form.Label>
//                 <Form.Control
//                   type={type}
//                   name={name}
//                   value={newAddress[name]}
//                   onChange={handleAddressChange}
//                   required={["firstName", "lastName", "pincode", "city", "address", "state", "phone"].includes(name)}
//                 />
//               </Form.Group>
//             ))}
//             <Form.Group className="mb-3">
//               <Form.Label>
//                 Flat/House No., Area, Street, etc. (Required)*
//               </Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="address"
//                 value={newAddress.address}
//                 onChange={handleAddressChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3 d-flex">
//               <Form.Check 
//                 type="radio"
//                 id="home-address"
//                 name="addressType"
//                 label="Home"
//                 value="Home"
//                 checked={newAddress.addressType === "Home"}
//                 onChange={handleAddressChange}
//                 className="me-3"
//               />
//               <Form.Check 
//                 type="radio"
//                 id="office-address"
//                 name="addressType"
//                 label="Office"
//                 value="Office"
//                 checked={newAddress.addressType === "Office"}
//                 onChange={handleAddressChange}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowNewAddressModal(false)}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleSaveAddress}>
//             Save & Deliver Here
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default CartDetails;


























































import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/MainNavbar";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CartDetails = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCounter = useSelector((state) => state.cart.cartCounter);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
  const taxes = useSelector((state) => state.cart.taxes);
  const grandTotal = useSelector((state) => state.cart.grandTotal);
  const navigate = useNavigate();

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showNewAddressModal, setShowNewAddressModal] = useState(false);

  const [newAddress, setNewAddress] = useState({
    firstName: "",
    lastName: "",
    pincode: "",
    city: "",
    address: "",
    state: "",
    landmark: "",
    phone: "",
    email: "",
    addressType: "Home"
  });

  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      firstName: "Yathin",
      lastName: "k",
      address: "Gandasi , handpost , arasikere (td),hassan (D), Gandasi",
      locality: "hobili",
      city: "ARSIKERE",
      pincode: "573119",
      phone: "9353881553",
      isDefault: true
    }
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const formatPrice = (price) => `₹${price.toFixed(2)}`;

  const handleProceedClick = (e) => {
    e.preventDefault();
    if (!grandTotal) return;
    setShowAddressModal(true);
  };

  const handleNewAddressClick = () => {
    setShowAddressModal(false);
    setShowNewAddressModal(true);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveAddress = () => {
    if (
      !newAddress.firstName ||
      !newAddress.lastName ||
      !newAddress.pincode ||
      !newAddress.city ||
      !newAddress.address ||
      !newAddress.state ||
      !newAddress.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const newSavedAddress = {
      id: savedAddresses.length + 1,
      ...newAddress,
      isDefault: false
    };

    setSavedAddresses([...savedAddresses, newSavedAddress]);
    setSelectedAddress(newSavedAddress.id);
    setShowNewAddressModal(false);
    setShowAddressModal(true);

    setNewAddress({
      firstName: "",
      lastName: "",
      pincode: "",
      city: "",
      address: "",
      state: "",
      landmark: "",
      phone: "",
      email: "",
      addressType: "Home"
    });
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddress(addressId);
  };

  const handleCheckout = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }
    
    const address = savedAddresses.find(addr => addr.id === selectedAddress);
    navigate('/PaymentPage', { 
      state: { 
        address,
        cartItems,
        totalPrice,
        deliveryCharges,
        taxes,
        grandTotal
      } 
    });
  };

  return (
    <>
      <div className="container bg-white mt-5">
        <Navbar />

        {cartItems.length ? (
          <>
            <h3 className="border-bottom py-2 mb-3 mt-5">Shopping Cart</h3>
            <div className="row">
              <div className="col-md-8 shadow">
                <div className="row border-bottom py-3">
                  <div className="col-md-9">Item</div>
                  <div className="col-md-1 text-end">Cost</div>
                  <div className="col-md-1 text-end">Qty</div>
                  <div className="col-md-1 text-end">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div className="row py-4 border-bottom" key={item.id || item._id}>
                    <div className="col-md-9 d-flex">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        onError={(e) => (e.target.src = "/default-product.png")}
                      />
                      <h6 className="ps-3 mb-0 text-truncate">{item.title}</h6>
                    </div>
                    <div className="col-md-1 text-end">{formatPrice(item.price)}</div>
                    <div className="col-md-1 text-end">{item.quantity}</div>
                    <div className="col-md-1 text-end">
                      {formatPrice(item.total_item_price)}
                    </div>
                  </div>
                ))}

                <div className="row py-3 pe-3">
                  <div className="offset-md-9 col-md-1">
                    <h5 className="text-end">Total</h5>
                  </div>
                  <div className="col-md-1 text-end">
                    <h5>{cartCounter}</h5>
                  </div>
                  <div className="col-md-1 text-center">
                    <h5>{formatPrice(totalPrice)}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow p-3 ms-2 mt-2">
                  <div className="d-flex justify-content-between mb-2">
                    <p>Sub Total</p>
                    <p>{formatPrice(totalPrice)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p>Delivery Charges</p>
                    <p>{formatPrice(deliveryCharges)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p>Taxes</p>
                    <p>{formatPrice(taxes)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5>Grand Total</h5>
                    <h5>{formatPrice(grandTotal)}</h5>
                  </div>
                  <button
                    className={`btn btn-success w-100 ${!grandTotal ? "disabled" : ""}`}
                    onClick={handleProceedClick}
                  >
                    Proceed
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-center mt-5 pt-5">No Items in Cart</h1>
        )}
      </div>

      {/* Address Selection Modal */}
      <Modal show={showAddressModal} onHide={() => setShowAddressModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Select Delivery Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <Form.Control type="text" placeholder="Type Pincode Here" className="mb-2" />
            <Button variant="secondary">Submit</Button>
          </div>

          <h5>Saved Addresses</h5>
          <Button variant="link" onClick={handleNewAddressClick} className="mb-3">
            + Add New Address
          </Button>

          {savedAddresses.map(address => (
            <div key={address.id} className="border p-3 mb-3">
              <Form.Check 
                type="radio"
                id={`address-${address.id}`}
                name="addressSelection"
                label={`${address.firstName} ${address.lastName}`}
                checked={selectedAddress === address.id}
                onChange={() => handleSelectAddress(address.id)}
                className="mb-2"
              />
              <p className="mb-1">{address.address}</p>
              <p className="mb-1">{address.locality}</p>
              <p className="mb-1">{address.city}, {address.pincode}</p>
              <p className="mb-0">Phone: {address.phone}</p>
            </div>
          ))}

          <div className="border-top pt-3 mt-3">
            <h6>Processing Fee</h6>
            <p>₹499.99 ₹29.00</p>
            <Button variant="link" size="sm">See how this is calculated</Button>
            <Button variant="link" size="sm">Know More</Button>
          </div>

          <div className="mt-3">
            <h6>Bag Subtotal</h6>
            <p>{formatPrice(totalPrice)}</p>
          </div>

          <div className="mt-3">
            <h6>Product Discount(s)</h6>
            <p>- ₹2150.00</p>
            <p>You will save ₹2150.00 on this order</p>
          </div>

          <div className="mt-3 border-top pt-3">
            <h5>Total {formatPrice(grandTotal)}</h5>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-100 mt-3"
              onClick={handleCheckout}
              disabled={!selectedAddress}
            >
              Checkout
            </Button>
          </div>

          <div className="mt-3">
            <Form.Check 
              type="checkbox"
              label="You have 1 item in your wishlist"
              className="mb-2"
            />
            <Button variant="link" size="sm">See all</Button>
          </div>

          <div className="mt-3 small">
            <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
            <p className="mb-0">Need Help ? Contact Us | FAQ</p>
          </div>
        </Modal.Body>
      </Modal>

      {/* New Address Modal */}
      <Modal show={showNewAddressModal} onHide={() => setShowNewAddressModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "PIN code", name: "pincode" },
              { label: "City/District", name: "city" },
              { label: "State", name: "state" },
              { label: "Landmark", name: "landmark" },
              { label: "Phone/Mobile Number", name: "phone", type: "tel" },
              { label: "Email", name: "email", type: "email" }
            ].map(({ label, name, type = "text" }) => (
              <Form.Group className="mb-3" key={name}>
                <Form.Label>{label} {["firstName", "lastName", "pincode", "city", "address", "state", "phone"].includes(name) && "(Required)*"}</Form.Label>
                <Form.Control
                  type={type}
                  name={name}
                  value={newAddress[name]}
                  onChange={handleAddressChange}
                  required={["firstName", "lastName", "pincode", "city", "address", "state", "phone"].includes(name)}
                />
              </Form.Group>
            ))}
            <Form.Group className="mb-3">
              <Form.Label>
                Flat/House No., Area, Street, etc. (Required)*
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={newAddress.address}
                onChange={handleAddressChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 d-flex">
              <Form.Check 
                type="radio"
                id="home-address"
                name="addressType"
                label="Home"
                value="Home"
                checked={newAddress.addressType === "Home"}
                onChange={handleAddressChange}
                className="me-3"
              />
              <Form.Check 
                type="radio"
                id="office-address"
                name="addressType"
                label="Office"
                value="Office"
                checked={newAddress.addressType === "Office"}
                onChange={handleAddressChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowNewAddressModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveAddress}>
            Save & Deliver Here
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartDetails;