import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/TaskSlice';

const rootReducer = {
    tasks: taskReducer
};

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
