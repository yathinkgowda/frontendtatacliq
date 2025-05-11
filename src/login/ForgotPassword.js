import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4500/auth/ForgotPassword', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>
      <input 
        name="email" 
        type="email" 
        placeholder="Enter your registered email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <button type="submit">Send Reset Link</button>
      <p>{message}</p>
    </form>
  );
}

export default ForgotPassword;
