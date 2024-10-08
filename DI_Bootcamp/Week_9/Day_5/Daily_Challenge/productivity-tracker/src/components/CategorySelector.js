import { createSelector } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';

export const selectTasksByCategory = createSelector(
  [state => state.tasks.tasks, (state, categoryId) => categoryId],
  (tasks, categoryId) => tasks.filter(task => task.categoryId === categoryId)
);

export const selectCompletedTasks = createSelector(
  [state => state.tasks.tasks],
  tasks => tasks.filter(task => task.progress === 100).length
);

export const selectCategoryById = createSelector(
  [state => state.categories.categories, (state, categoryId) => categoryId],
  (categories, categoryId) => categories.find(category => category.id === categoryId)
);

const CategorySelector = ({ onSelect }) => {
  const categories = useSelector(state => state.categories.categories);

  return (
    <select onChange={e => onSelect(e.target.value)}>
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default CategorySelector;
