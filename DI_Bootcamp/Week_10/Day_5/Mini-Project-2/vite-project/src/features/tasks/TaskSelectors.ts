import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectTaskById = (id: string) => createSelector(
    [selectTasks],
    tasks => tasks.find(task => task.id === id)
);
export const selectCompletedTasks = createSelector(
    [selectTasks],
    tasks => tasks.filter(task => task.completed)
);
