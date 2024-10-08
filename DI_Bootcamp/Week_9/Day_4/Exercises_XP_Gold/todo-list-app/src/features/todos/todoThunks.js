import { createAsyncThunk } from '@reduxjs/toolkit';
import { setTodos } from './todoSlice';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { dispatch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  dispatch(setTodos(data));
});

export const toggleTodo = (id) => {
  // function implementation
};

export const removeTodo = (id) => {
  // function implementation
};
