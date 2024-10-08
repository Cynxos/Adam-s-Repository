import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  products: [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ],
  cart: []
};

const store = createStore(rootReducer, initialState);

export default store;
