import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    // 1. Call backend to create PaymentIntent
    const { data: { clientSecret } } = await axios.post(
      "http://localhost:4500/api/create-payment-intent",
      { amount: 1000 } // $10.00 (in cents)
    );

    // 2. Confirm Payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) }
    });

    if (error) alert(error.message);
    else if (paymentIntent.status === "succeeded") alert("Payment successful!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>Pay</button>
    </form>
  );
};

export default CheckoutForm;