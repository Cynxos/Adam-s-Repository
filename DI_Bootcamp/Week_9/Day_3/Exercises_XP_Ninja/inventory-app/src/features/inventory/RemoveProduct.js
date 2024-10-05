import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from './inventorySlice';

const RemoveProduct = () => {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(removeProduct(id));
    setId('');
  };

  return (
    <div>
      <h2>Remove Product</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Product ID"
      />
      <button onClick={handleSubmit}>Remove Product</button>
    </div>
  );
};

export default RemoveProduct;
