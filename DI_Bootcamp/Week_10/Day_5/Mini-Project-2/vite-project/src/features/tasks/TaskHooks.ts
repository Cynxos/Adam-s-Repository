import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { addTask, removeTask, toggleTask, clearTasks } from './TaskSlice';
import { selectTasks } from './TaskSelectors';

export const useTasks = () => {
    const dispatch: AppDispatch = useDispatch();
    const tasks = useSelector(selectTasks);

    const onAddTask = (text: string) => dispatch(addTask(text));
    const onRemoveTask = (id: string) => dispatch(removeTask(id));
    const onToggleTask = (id: string) => dispatch(toggleTask(id));
    const onClearTasks = () => dispatch(clearTasks());

    return {
        tasks,
        onAddTask,
        onRemoveTask,
        onToggleTask,
        onClearTasks
    };
};
