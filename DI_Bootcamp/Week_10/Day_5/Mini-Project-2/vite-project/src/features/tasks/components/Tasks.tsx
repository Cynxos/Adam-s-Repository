import React from 'react';
import { useTasks } from '../TaskHooks';
import TaskItem from './TaskItem';

const Tasks: React.FC = () => {
    const { tasks, onAddTask, onRemoveTask, onToggleTask, onClearTasks } = useTasks();

    return (
        <div>
            <h2>Todo List</h2>
            <button onClick={() => onAddTask(`New Task ${Date.now()}`)}>Add Task</button>
            <button onClick={onClearTasks}>Clear All</button>
            <div>
                {tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={onToggleTask}
                        removeTask={onRemoveTask}
                    />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
