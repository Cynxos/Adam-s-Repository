import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = ({ selectedDay }) => {
  const tasks = useSelector(state => state.tasks.tasks[selectedDay] || []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default TaskList;