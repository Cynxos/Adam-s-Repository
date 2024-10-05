import React, { useState } from 'react';
import Calendar from './Calendar';
import TaskList from './TaskList';
import AddTask from './AddTask';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const App = () => {
  const [selectedDay, setSelectedDay] = useState('');

  return (
    <div>
      <Calendar onSelectDay={setSelectedDay} />
      <TaskList selectedDay={selectedDay} />
      <AddTask selectedDay={selectedDay} />
      <EditTask selectedDay={selectedDay} taskId={1} currentText="Sample Task" />
      <DeleteTask selectedDay={selectedDay} taskId={1} />
    </div>
  );
};

export default App;
