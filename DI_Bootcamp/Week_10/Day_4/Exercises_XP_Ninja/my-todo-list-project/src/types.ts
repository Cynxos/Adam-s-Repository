export interface ToDo {
    id: string;
    text: string;
    completed: boolean;
}

export type State = {
    status: 'initial' | 'loading' | 'success';
    todos: ToDo[];
    error?: string;
};

export type Action =
    | { type: 'FETCH_TODOS_START' }
    | { type: 'FETCH_TODOS_SUCCESS'; payload: ToDo[] }
    | { type: 'FETCH_TODOS_FAILURE'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: string }
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'REMOVE_TODO'; payload: string };
