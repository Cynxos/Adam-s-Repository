import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

const TodoList = ({ categories, toggleTodo, removeTodo, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <p>Please log in to view your todos.</p>;
  }

  return (
    <div>
      {Object.values(categories).map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.todos.map(todo => (
              <li key={todo.id}>
                <span
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                  onClick={() => toggleTodo(category.id, todo.id)}
                >
                  {todo.text}
                </span>
                <button onClick={() => removeTodo(category.id, todo.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  categories: state.todos.categories,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = {
  toggleTodo,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
