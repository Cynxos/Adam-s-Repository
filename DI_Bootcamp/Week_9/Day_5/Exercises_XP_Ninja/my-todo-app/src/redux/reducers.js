import { combineReducers } from 'redux';

const initialState = {
  todos: [],
  visibilityFilter: 'All',
};

const todos = (state = initialState.todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case 'REMOVE_TODO':
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

const visibilityFilter = (state = initialState.visibilityFilter, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  visibilityFilter,
});
