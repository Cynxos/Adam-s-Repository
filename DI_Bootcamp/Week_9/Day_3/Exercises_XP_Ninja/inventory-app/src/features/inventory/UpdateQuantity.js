import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity } from './inventorySlice';

const UpdateQuantity = () => {
  const [id, setId] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateQuantity({ id, quantity }));
    setId('');
    setQuantity(0);
  };

  return (
    <div>
      <h2>Update Quantity</h2>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Product ID"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Quantity"
      />
      <button onClick={handleSubmit}>Update Quantity</button>
    </div>
  );
};

export default UpdateQuantity;
