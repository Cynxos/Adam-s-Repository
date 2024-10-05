import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

const Logout = ({ logout }) => {
  return (
    <button onClick={logout}>Logout</button>
  );
};

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Logout);
