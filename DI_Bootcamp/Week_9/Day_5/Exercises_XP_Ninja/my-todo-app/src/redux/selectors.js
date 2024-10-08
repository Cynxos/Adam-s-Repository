import { createSelector } from 'reselect';

const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

export const selectTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case 'Active':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);

export const selectVisibilityFilter = createSelector(
  [getVisibilityFilter],
  (filter) => filter
);

export const selectFilteredTodosCount = createSelector(
  [selectTodos],
  (todos) => todos.length
);
