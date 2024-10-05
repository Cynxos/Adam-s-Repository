import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasks[day]) {
        state.tasks[day] = [];
      }
      state.tasks[day].push(task);
    },
    editTask: (state, action) => {
      const { day, taskId, newText } = action.payload;
      const task = state.tasks[day].find(task => task.id === taskId);
      if (task) {
        task.text = newText;
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state.tasks[day] = state.tasks[day].filter(task => task.id !== taskId);
    }
  }
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});

export default store;
