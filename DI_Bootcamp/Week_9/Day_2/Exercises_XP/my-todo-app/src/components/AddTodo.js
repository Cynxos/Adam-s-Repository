import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = ({ categories, addTodo }) => {
  const [text, setText] = useState('');
  const [categoryId, setCategoryId] = useState('default');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(categoryId, {
      id: Date.now(),
      text,
      completed: false
    });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
        {Object.values(categories).map(category => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">Add Todo</button>
    </form>
  );
};

const mapStateToProps = state => ({
  categories: state.todos.categories
});

const mapDispatchToProps = {
  addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
