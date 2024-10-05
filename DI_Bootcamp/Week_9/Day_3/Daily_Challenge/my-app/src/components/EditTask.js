import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../store';

const EditTask = ({ selectedDay, taskId, currentText }) => {
  const [newText, setNewText] = useState(currentText);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    dispatch(editTask({ day: selectedDay, taskId, newText }));
  };

  return (
    <div>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button onClick={handleEditTask}>Edit Task</button>
    </div>
  );
};

export default EditTask;
