import React from 'react';

const GenreSelector = ({ setGenre }) => {
  return (
    <div>
      <button onClick={() => setGenre('All')}>All</button>
      <button onClick={() => setGenre('Horror')}>Horror</button>
      <button onClick={() => setGenre('Fantasy')}>Fantasy</button>
      <button onClick={() => setGenre('Science Fiction')}>Science Fiction</button>
    </div>
  );
};

export default GenreSelector;
