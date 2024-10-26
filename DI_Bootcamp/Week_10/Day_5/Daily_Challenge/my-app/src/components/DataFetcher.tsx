import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../features/dataSlice';
import { RootState, AppDispatch } from '../store';

const DataFetcher: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>Error: {data.error}</p>}
      {data.data && (
        <ul>
          {data.data.map((item) => (
            <li key={item.id}>{item.name}: {item.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
