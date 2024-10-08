import { createSelector } from 'reselect';

const selectProducts = (state) => state.products;
const selectCartItems = (state) => state.cart;

const calculateTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, item) => total + item.price, 0)
);

export { selectProducts, selectCartItems, calculateTotalPrice };
