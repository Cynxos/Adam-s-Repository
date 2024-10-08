import { ADD_TO_CART } from './actions';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;
