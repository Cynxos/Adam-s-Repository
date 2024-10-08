import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import { selectProducts, selectCartItems, calculateTotalPrice } from '../redux/selectors';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(calculateTotalPrice);

  const handleAddToCart = useCallback((product) => {
    dispatch(addToCart(product));
  }, [dispatch]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default ShoppingCart;
