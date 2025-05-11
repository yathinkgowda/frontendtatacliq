import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './login.css';

function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:4500/auth/ResetPassword/${token}`, { newPassword });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to reset password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input 
        type="password" 
        placeholder="Enter new password" 
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)} 
        required 
      />
      <button type="submit">Change Password</button>
      <p>{message}</p>
    </form>
  );
}

export default ResetPassword;
