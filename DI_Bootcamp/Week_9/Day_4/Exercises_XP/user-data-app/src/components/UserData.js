import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/userSlice';
import './UserData.css';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="user-data">
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      )}
    </div>
  );
};

export default UserData;
