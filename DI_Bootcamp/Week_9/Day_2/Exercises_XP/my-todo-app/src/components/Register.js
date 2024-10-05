import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerSuccess } from '../actions/authActions';

const Register = ({ registerSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const user = { email };
    const token = 'fake-jwt-token';
    registerSuccess(user, token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

const mapDispatchToProps = {
  registerSuccess
};

export default connect(null, mapDispatchToProps)(Register);
