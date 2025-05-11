// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Elements } from '@stripe/react-stripe-js';
// import stripePromise from '../stripe/stripeConfig';
// import CardPaymentForm from './CardPaymentForm';
// import UPIPaymentForm from './UPIPaymentForm';
// import './PaymentPage.css';

// const PaymentPage = () => {
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [paymentError, setPaymentError] = useState(null);
//   const [clientSecret, setClientSecret] = useState('');

//   // Pull cart values from Redux
//   const totalPrice = useSelector((state) => state.cart.totalPrice);
//   const deliveryCharges = useSelector((state) => state.cart.deliveryCharges);
//   const taxes = useSelector((state) => state.cart.taxes);
//   const grandTotal = useSelector((state) => state.cart.grandTotal);

//   const createPaymentIntent = async () => {
//     setIsLoading(true);
//     setPaymentError(null);

//     try {
//       const response = await fetch('http://localhost:4500/api/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: Math.round(grandTotal * 100), // Convert to cents/paisa
//           currency: 'inr',
//           payment_method_types: paymentMethod === 'upi' ? ['upi'] : ['card'],
//         }),
//       });

//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to create payment intent');
//       }
//       setClientSecret(data.clientSecret);
//     } catch (error) {
//       setIsLoading(false);
//       setPaymentError(error.message || 'Failed to initialize payment');
//     }
//   };

//   const handlePayment = async () => {
//     if (paymentMethod === 'cod') {
//       // Handle Cash on Delivery separately
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//         setPaymentSuccess(true);
//       }, 1000);
//       return;
//     }

//     await createPaymentIntent();
//     setIsLoading(false);
//   };

//   const paymentFormProps = {
//     onSuccess: () => setPaymentSuccess(true),
//     onError: (error) => setPaymentError(error),
//     clientSecret,
//     amount: grandTotal
//   };

//   return (
//     <div className="payment-container">
//       {paymentSuccess ? (
//         <div className="success-animation">
//           <div className="checkmark-circle">
//             <div className="background"></div>
//             <div className="checkmark">✔</div>
//           </div>
//           <h2>Payment Successful!</h2>
//           <h5>Thank you for your order</h5>
//         </div>
//       ) : (
//         <>
//           <h2 className="payment-title">Payment</h2>
//           <div className="payment-grid">
//             {/* Order Summary */}
//             <div className="payment-card">
//               <h3 className="payment-subtitle">Order Summary</h3>
//               <ul className="summary-list">
//                 <li><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></li>
//                 <li><span>Shipping</span><span>₹{deliveryCharges.toFixed(2)}</span></li>
//                 <li><span>Taxes</span><span>₹{taxes.toFixed(2)}</span></li>
//                 <li className="total"><span>Total</span><span>₹{grandTotal.toFixed(2)}</span></li>
//               </ul>
//             </div>

//             {/* Payment Options */}
//             <div className="payment-card">
//               <h3 className="payment-subtitle">Choose Payment Method</h3>
//               <div className="payment-options">
//                 {['card', 'upi', 'cod'].map((method) => (
//                   <label key={method} className={`payment-option ${paymentMethod === method ? 'selected' : ''}`}>
//                     <input
//                       type="radio"
//                       name="payment"
//                       value={method}
//                       checked={paymentMethod === method}
//                       onChange={() => {
//                         setPaymentMethod(method);
//                         setClientSecret(''); // Reset client secret when changing payment method
//                       }}
//                     />
//                     {method === 'card' && 'Credit / Debit Card'}
//                     {method === 'upi' && 'UPI (Google Pay / PhonePe)'}
//                     {method === 'cod' && 'Cash on Delivery'}
//                   </label>
//                 ))}
//               </div>

//               {/* Payment forms */}
//               {paymentMethod === 'card' && clientSecret && (
//                 <Elements stripe={stripePromise} options={{ clientSecret }}>
//                   <CardPaymentForm {...paymentFormProps} />
//                 </Elements>
//               )}

//               {paymentMethod === 'upi' && clientSecret && (
//                 <Elements stripe={stripePromise} options={{ clientSecret }}>
//                   <UPIPaymentForm {...paymentFormProps} />
//                 </Elements>
//               )}

//               {/* Loading and Error handling */}
//               {isLoading ? (
//                 <div className="loading-spinner">Processing...</div>
//               ) : (
//                 !clientSecret && paymentMethod !== 'cod' && (
//                   <button className="pay-button mt-3" onClick={handlePayment}>
//                     Initialize Payment
//                   </button>
//                 )
//               )}

//               {paymentMethod === 'cod' && !isLoading && !paymentSuccess && (
//                 <button className="pay-button mt-3" onClick={handlePayment}>
//                   Confirm Order
//                 </button>
//               )}

//               {paymentError && <div className="error-message">{paymentError}</div>}
//             </div>
//           </div>
//         </>
//       )}
//     </div>  
//   );
// };

// export default PaymentPage;











import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../stripe/stripeConfig';
import CardPaymentForm from './CardPaymentForm';
import UPIPaymentForm from './UPIPaymentForm';
import './PaymentPage.css';

const PaymentPage = () => {
  const { state } = useLocation();
  const address = state?.address;
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  // Use either from location state or Redux
  const totalPrice = state?.totalPrice || useSelector((state) => state.cart.totalPrice);
  const deliveryCharges = state?.deliveryCharges || useSelector((state) => state.cart.deliveryCharges);
  const taxes = state?.taxes || useSelector((state) => state.cart.taxes);
  const grandTotal = state?.grandTotal || useSelector((state) => state.cart.grandTotal);

  const createPaymentIntent = async () => {
    setIsLoading(true);
    setPaymentError(null);

    try {
      const response = await fetch('http://localhost:4500/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(grandTotal * 100), // Convert to cents/paisa
          currency: 'inr',
          payment_method_types: paymentMethod === 'upi' ? ['upi'] : ['card'],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create payment intent');
      }
      setClientSecret(data.clientSecret);
    } catch (error) {
      setIsLoading(false);
      setPaymentError(error.message || 'Failed to initialize payment');
    }
  };

  const handlePayment = async () => {
    if (paymentMethod === 'cod') {
      // Handle Cash on Delivery separately
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setPaymentSuccess(true);
      }, 1000);
      return;
    }

    await createPaymentIntent();
    setIsLoading(false);
  };

  const paymentFormProps = {
    onSuccess: () => setPaymentSuccess(true),
    onError: (error) => setPaymentError(error),
    clientSecret,
    amount: grandTotal
  };

  return (
    <div className="payment-container">
      {paymentSuccess ? (
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="background"></div>
            <div className="checkmark">✔</div>
          </div>
          <h2>Payment Successful!</h2>
          <h5>Thank you for your order</h5>
          {address && (
            <div className="address-section">
              <h4>Your order will be delivered to:</h4>
              <p>
                {address.firstName} {address.lastName}<br />
                {address.address}<br />
                {address.city}, {address.state} - {address.pincode}<br />
                Phone: {address.phone}
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          <h2 className="payment-title">Payment</h2>
          <div className="payment-grid">
            {/* Order Summary */}
            <div className="payment-card">
              <h3 className="payment-subtitle">Order Summary</h3>
              
              {/* Delivery Address Section */}
              {address && (
                <div className="address-section">
                  <h4>Delivery Address</h4>
                  <p>
                    {address.firstName} {address.lastName}<br />
                    {address.address}<br />
                    {address.city}, {address.state} - {address.pincode}<br />
                    Phone: {address.phone}
                  </p>
                </div>
              )}
              
              <ul className="summary-list">
                <li><span>Subtotal</span><span>₹{totalPrice.toFixed(2)}</span></li>
                <li><span>Shipping</span><span>₹{deliveryCharges.toFixed(2)}</span></li>
                <li><span>Taxes</span><span>₹{taxes.toFixed(2)}</span></li>
                <li className="total"><span>Total</span><span>₹{grandTotal.toFixed(2)}</span></li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="payment-card">
              <h3 className="payment-subtitle">Choose Payment Method</h3>
              <div className="payment-options">
                {['card', 'upi', 'cod'].map((method) => (
                  <label key={method} className={`payment-option ${paymentMethod === method ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={() => {
                        setPaymentMethod(method);
                        setClientSecret(''); // Reset client secret when changing payment method
                      }}
                    />
                    {method === 'card' && 'Credit / Debit Card'}
                    {method === 'upi' && 'UPI (Google Pay / PhonePe)'}
                    {method === 'cod' && 'Cash on Delivery'}
                  </label>
                ))}
              </div>

              {/* Payment forms */}
              {paymentMethod === 'card' && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CardPaymentForm {...paymentFormProps} />
                </Elements>
              )}

              {paymentMethod === 'upi' && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <UPIPaymentForm {...paymentFormProps} />
                </Elements>
              )}

              {/* Loading and Error handling */}
              {isLoading ? (
                <div className="loading-spinner">Processing...</div>
              ) : (
                !clientSecret && paymentMethod !== 'cod' && (
                  <button className="pay-button mt-3" onClick={handlePayment}>
                    Initialize Payment
                  </button>
                )
              )}

              {paymentMethod === 'cod' && !isLoading && !paymentSuccess && (
                <button className="pay-button mt-3" onClick={handlePayment}>
                  Confirm Order
                </button>
              )}

              {paymentError && <div className="error-message">{paymentError}</div>}
            </div>
          </div>
        </>
      )}
    </div>  
  );
};

export default PaymentPage;