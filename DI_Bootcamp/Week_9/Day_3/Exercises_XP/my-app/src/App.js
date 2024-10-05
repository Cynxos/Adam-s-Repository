import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
