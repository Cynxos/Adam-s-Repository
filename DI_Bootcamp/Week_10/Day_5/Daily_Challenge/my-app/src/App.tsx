import React from 'react';
import DataFetcher from './components/DataFetcher';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Data Fetcher Example</h1>
        <DataFetcher />
      </div>
    </Provider>
  );
}

export default App;
