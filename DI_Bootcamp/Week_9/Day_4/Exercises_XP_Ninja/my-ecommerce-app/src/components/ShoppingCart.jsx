import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="shopping-cart">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <h4>{item.name}</h4>
          <button onClick={() => dispatch(removeItem(item))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
