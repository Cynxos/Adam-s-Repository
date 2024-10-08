import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';
import GenreSelector from './components/GenreSelector';
import './App.css';

const App = () => {
  const [genre, setGenre] = useState('All');

  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Inventory</h1>
        <GenreSelector setGenre={setGenre} />
        <BookList genre={genre} />
      </div>
    </Provider>
  );
};

export default App;
