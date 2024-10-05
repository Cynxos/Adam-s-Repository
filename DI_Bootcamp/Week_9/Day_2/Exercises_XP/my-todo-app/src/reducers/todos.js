import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_CATEGORY } from '../actions/actionTypes';

const initialState = {
  categories: {
    default: {
      id: 'default',
      name: 'Default',
      todos: []
    }
  }
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.categoryId]: {
            ...state.categories[action.payload.categoryId],
            todos: [...state.categories[action.payload.categoryId].todos, action.payload.todo]
          }
        }
      };
    case TOGGLE_TODO:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.categoryId]: {
            ...state.categories[action.payload.categoryId],
            todos: state.categories[action.payload.categoryId].todos.map(todo =>
              todo.id === action.payload.todoId ? { ...todo, completed: !todo.completed } : todo
            )
          }
        }
      };
    case REMOVE_TODO:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.categoryId]: {
            ...state.categories[action.payload.categoryId],
            todos: state.categories[action.payload.categoryId].todos.filter(todo => todo.id !== action.payload.todoId)
          }
        }
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.id]: action.payload
        }
      };
    default:
      return state;
  }
};

export default todosReducer;
