import { createSlice } from '@reduxjs/toolkit';
import { ageUpAsync, ageDownAsync } from './ageThunks';

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age += action.payload;
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
