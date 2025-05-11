import React from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';

const UPIPaymentForm = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmUpiPayment(
      elements.getElement('upi').clientSecret, {
        payment_method: {
          upi: {
            flow: 'redirect',
            vpa: 'customer@vpa', // This should be collected from user input
          },
        },
      }
    );

    if (error) {
      console.error(error);
    } else {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-group">
        <label htmlFor="upi-id">UPI ID</label>
        <input
          type="text"
          id="upi-id"
          placeholder="yourname@upi"
          required
        />
      </div>
      <button type="submit" className="pay-button">
        Pay via UPI
      </button>
    </form>
  );
};

export default UPIPaymentForm;