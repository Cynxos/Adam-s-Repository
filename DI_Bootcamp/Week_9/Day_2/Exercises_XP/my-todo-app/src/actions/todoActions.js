import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_CATEGORY } from './actionTypes';

export const addTodo = (categoryId, todo) => ({
  type: ADD_TODO,
  payload: { categoryId, todo }
});

export const toggleTodo = (categoryId, todoId) => ({
  type: TOGGLE_TODO,
  payload: { categoryId, todoId }
});

export const removeTodo = (categoryId, todoId) => ({
  type: REMOVE_TODO,
  payload: { categoryId, todoId }
});

export const addCategory = (category) => ({
  type: ADD_CATEGORY,
  payload: category
});
