import { State, Action } from './types';

export const initialState: State = {
    status: 'initial',
    todos: [],
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'FETCH_TODOS_START':
            return { ...state, status: 'loading' };
        case 'FETCH_TODOS_SUCCESS':
            return { ...state, status: 'success', todos: action.payload };
        case 'FETCH_TODOS_FAILURE':
            return { ...state, status: 'initial', error: action.payload };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: Date.now().toString(), text: action.payload, completed: false }],
            };
        case 'REMOVE_TODO':
            return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
        default:
            return state;
    }
}
