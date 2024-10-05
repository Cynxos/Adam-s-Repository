import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions/todoActions';

const AddCategory = ({ addCategory }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({
      id: Date.now().toString(),
      name,
      todos: []
    });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

const mapDispatchToProps = {
  addCategory
};

export default connect(null, mapDispatchToProps)(AddCategory);
