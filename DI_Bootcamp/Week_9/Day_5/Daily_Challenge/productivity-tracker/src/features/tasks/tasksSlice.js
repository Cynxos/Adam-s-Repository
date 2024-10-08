import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, name: 'Complete Redux tutorial', categoryId: 1, progress: 50 },
    { id: 2, name: 'Write blog post', categoryId: 2, progress: 20 },
    { id: 3, name: 'Grocery shopping', categoryId: 3, progress: 0 },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, updates } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskProgress: (state, action) => {
      const { id, progress } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.progress = progress;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;
export const selectTasksByCategory = (state, category) => {
}
