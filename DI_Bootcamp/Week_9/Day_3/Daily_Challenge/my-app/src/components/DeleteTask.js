import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store';

const DeleteTask = ({ selectedDay, taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask({ day: selectedDay, taskId }));
  };

  return (
    <button onClick={handleDeleteTask}>Delete Task</button>
  );
};

export default DeleteTask;
