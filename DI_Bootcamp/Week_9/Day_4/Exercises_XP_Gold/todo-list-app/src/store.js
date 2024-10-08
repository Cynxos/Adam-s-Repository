import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import todoReducer from './features/todos/todoSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: [thunk],
});

export default store;
