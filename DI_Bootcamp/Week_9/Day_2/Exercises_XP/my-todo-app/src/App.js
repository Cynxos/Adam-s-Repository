import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import AddCategory from './components/AddCategory';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Todo List</h1>
      <Login />
      <Register />
      <Logout />
      <AddCategory />
      <AddTodo />
      <TodoList />
    </div>
  </Provider>
);

export default App;
