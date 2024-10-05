import React, { useReducer } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './styles/App.css';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload.text }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <TodoInput dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default App;
