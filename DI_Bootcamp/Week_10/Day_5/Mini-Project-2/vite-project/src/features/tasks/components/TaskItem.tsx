import React from 'react';
import { Task } from '../../../model/ListItem';

interface TaskItemProps {
    task: Task;
    toggleTask: (id: string) => void;
    removeTask: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, toggleTask, removeTask }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>X</button>
        </div>
    );
};

export default TaskItem;
