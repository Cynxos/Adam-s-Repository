import React, { useEffect, useState } from 'react';
import { fetchImages } from '../api/pexels';

const Mountain = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const photos = await fetchImages('mountain');
      setImages(photos);
    };
    getImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.src.medium} alt={image.alt} />
      ))}
    </div>
  );
};

export default Mountain;
