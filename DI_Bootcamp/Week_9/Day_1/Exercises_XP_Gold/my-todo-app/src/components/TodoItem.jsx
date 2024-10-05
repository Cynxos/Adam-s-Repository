import React from 'react';

const TodoItem = ({ todo, dispatch }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: { id: todo.id } })}>
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
