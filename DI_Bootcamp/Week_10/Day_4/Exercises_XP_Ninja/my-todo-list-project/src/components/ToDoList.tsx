import React, { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../reducer';
import { State, Action, ToDo } from '../types';
import ToDoItem from './ToDoItem';

const ToDoList: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchTodos = async () => {
            dispatch({ type: 'FETCH_TODOS_START' });
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
                const result = await response.json();
                dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: result.map((todo: any) => ({
                    id: todo.id.toString(),
                    text: todo.title,
                    completed: todo.completed
                })) });
            } catch (error) {
                dispatch({ type: 'FETCH_TODOS_FAILURE', payload: 'Failed to fetch todos' });
            }
        };

        fetchTodos();
    }, []);

    const addTodo = (text: string) => {
        dispatch({ type: 'ADD_TODO', payload: text });
    };

    const toggleTodo = (id: string) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    const removeTodo = (id: string) => {
        dispatch({ type: 'REMOVE_TODO', payload: id });
    };

    return (
        <div>
            <h2>To-Do List</h2>
            {state.status === 'loading' && <p>Loading...</p>}
            {state.status === 'success' && (
                <div>
                    {state.todos.map(todo => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </div>
            )}
            <input
                type="text"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && e.currentTarget.value) {
                        addTodo(e.currentTarget.value);
                        e.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
};

export default ToDoList;
