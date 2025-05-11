import React, { useState } from 'react';

const CardPaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Example validation (you can improve this further)
    if (!cardNumber || !expiryDate || !cvv || !cardholderName) {
      alert('Please fill in all fields.');
      return;
    }
    // Proceed with form submission logic here (e.g., API call)
    alert('Payment information submitted!');
  };

  return (
    <form className="card-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cardholder Name"
        className="form-control my-2"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Card Number"
        className="form-control my-2"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        maxLength="19"
        required
      />
      <div className="d-flex gap-2">
        <input
          type="text"
          placeholder="MM/YY"
          className="form-control"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          maxLength="5"  // Format: MM/YY
          required
        />
        <input
          type="password"  // Mask CVV
          placeholder="CVV"
          className="form-control"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit Payment</button>
    </form>
  );
};

export default CardPaymentForm;
