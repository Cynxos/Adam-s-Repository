import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mountain">Mountain</Link></li>
        <li><Link to="/beaches">Beaches</Link></li>
        <li><Link to="/birds">Birds</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;