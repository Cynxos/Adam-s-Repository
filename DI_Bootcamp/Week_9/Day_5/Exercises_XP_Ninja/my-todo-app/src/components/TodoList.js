import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectFilteredTodosCount } from '../redux/selectors';
import { toggleTodo, removeTodo } from '../redux/actions';
import './styles.css';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const count = useSelector(selectFilteredTodosCount);
  const dispatch = useDispatch();

  const handleToggle = useCallback((index) => {
    dispatch(toggleTodo(index));
  }, [dispatch]);

  const handleRemove = useCallback((index) => {
    dispatch(removeTodo(index));
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggle(index)}>{todo.text}</span>
            <button onClick={() => handleRemove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Count: {count}</p>
    </div>
  );
};

export default TodoList;
