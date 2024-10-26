import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../../model/ListItem';

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: []
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push(new Task(undefined, action.payload));
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        clearTasks: (state) => {
            state.tasks = [];
        }
    }
});

export const { addTask, removeTask, toggleTask, clearTasks } = taskSlice.actions;
export default taskSlice.reducer;
