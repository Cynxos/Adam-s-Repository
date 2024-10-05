import React from 'react';
import { useSelector } from 'react-redux';

const AuthStatus = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default AuthStatus;
