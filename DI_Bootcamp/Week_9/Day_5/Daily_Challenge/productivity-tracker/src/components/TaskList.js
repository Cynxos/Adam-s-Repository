import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from '../features/tasks/tasksSlice';

const TaskList = ({ categoryId }) => {
  const tasks = useSelector(state => selectTasksByCategory(state, categoryId));

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};

export default TaskList;
