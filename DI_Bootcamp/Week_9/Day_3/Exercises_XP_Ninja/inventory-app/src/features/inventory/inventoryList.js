import React from 'react';
import { useSelector } from 'react-redux';

const InventoryList = () => {
  const products = useSelector(state => state.inventory.products);

  return (
    <div>
      <h2>Inventory List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryList;
