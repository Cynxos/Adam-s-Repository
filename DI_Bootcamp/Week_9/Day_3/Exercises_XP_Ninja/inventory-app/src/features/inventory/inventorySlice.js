import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: []
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find(product => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    }
  }
});

export const { addProduct, updateQuantity, removeProduct } = inventorySlice.actions;
export default inventorySlice.reducer;
