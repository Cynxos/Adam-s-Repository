import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskList from './components/TaskList';
import CategorySelector from './components/CategorySelector';
import './index.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Productivity Tracker</h1>
        <CategorySelector onSelect={setSelectedCategory} />
        {selectedCategory && <TaskList categoryId={selectedCategory} />}
      </div>
    </Provider>
  );
};

export default App;
