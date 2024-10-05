import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask, deleteTask } from './actions/actions';

const App = ({ tasks, addTask, editTask, deleteTask }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleAddTask = (task) => {
    addTask(selectedDate, task);
  };

  const handleEditTask = (taskId, updatedTask) => {
    editTask(selectedDate, taskId, updatedTask);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(selectedDate, taskId);
  };

  return (
    <div>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <button onClick={() => handleAddTask('New Task')}>Add Task</button>
      <ul>
        {(tasks[selectedDate] || []).map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index, 'Updated Task')}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask,
  editTask,
  deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
