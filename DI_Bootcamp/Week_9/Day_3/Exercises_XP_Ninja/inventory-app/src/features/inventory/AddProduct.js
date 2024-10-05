import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './inventorySlice';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addProduct({ id: Date.now(), name, quantity }));
    setName('');
    setQuantity(0);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        placeholder="Quantity"
      />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};

export default AddProduct;
