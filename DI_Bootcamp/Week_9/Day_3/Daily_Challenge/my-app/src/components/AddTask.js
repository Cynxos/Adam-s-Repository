import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const AddTask = ({ selectedDay }) => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const task = { id: Date.now(), text: taskText };
    dispatch(addTask({ day: selectedDay, task }));
    setTaskText('');
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;