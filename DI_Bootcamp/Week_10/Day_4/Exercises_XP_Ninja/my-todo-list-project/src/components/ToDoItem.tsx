import React from 'react';
import { ToDo } from '../types';

interface ToDoItemProps {
    todo: ToDo;
    toggleTodo: (id: string) => void;
    removeTodo: (id: string) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
    );
};

export default ToDoItem;
