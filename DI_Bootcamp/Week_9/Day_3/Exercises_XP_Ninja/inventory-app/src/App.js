import React from 'react';
import InventoryList from './features/inventory/inventoryList';
import AddProduct from './features/inventory/AddProduct';
import UpdateQuantity from './features/inventory/UpdateQuantity';
import RemoveProduct from './features/inventory/RemoveProduct';

function App() {
  return (
    <div className="App">
      <h1>Inventory Management</h1>
      <AddProduct />
      <UpdateQuantity />
      <RemoveProduct />
      <InventoryList />
    </div>
  );
}

export default App;
