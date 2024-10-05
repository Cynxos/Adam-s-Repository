import { combineReducers } from 'redux';
import todosReducer from './todos';
import authReducer from './auth';

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer
});

export default rootReducer;
