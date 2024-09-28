import React, { useState } from 'react';
import { fetchImages } from '../api/pexels';

const Search = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  const handleSearch = async () => {
    const photos = await fetchImages(query);
    setImages(photos);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {images.map((image) => (
          <img key={image.id} src={image.src.medium} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default Search;
