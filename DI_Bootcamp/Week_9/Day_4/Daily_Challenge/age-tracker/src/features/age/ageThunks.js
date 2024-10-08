import { createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk(
  'age/ageUp',
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 1;
  }
);

export const ageDownAsync = createAsyncThunk(
  'age/ageDown',
  async (_, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return -1;
  }
);
