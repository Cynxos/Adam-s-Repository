import React from 'react';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import AuthForm from './components/AuthForm';

const App = () => {
  return (
    <div className="app">
      <AuthForm />
      <ProductListing />
      <ShoppingCart />
    </div>
  );
};

export default App;
