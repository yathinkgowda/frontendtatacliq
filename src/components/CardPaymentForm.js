import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const CardPaymentForm = ({ onSuccess, onError, clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,  // Use the clientSecret passed as prop
        {
          payment_method: {
            card: elements.getElement(CardElement),
          }
        }
      );

      if (error) {
        throw error;
      }

      if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch (error) {
      console.error('Payment error:', error);
      onError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="stripe-form">
      <div className="form-group">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
      </div>
      <button  type="submit" className="pay-button" disabled={!stripe}>
        Confirm Payment yatin
      </button>
    </form>
  );
};

export default CardPaymentForm;