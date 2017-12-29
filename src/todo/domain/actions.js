// @flow

export type NewTodoInputAction = {
    type: 'UPDATE_NEW_TODO_INPUT',
    value: string
};

export type SubmitNewTodoAction = {
    type: 'SUBMIT_NEW_TODO'
};

export type AddNewTodoAction = {
    type: 'ADD_NEW_TODO',
    id: string
};

export type RemoveTodoAction = {
    type: 'REMOVE_TODO',
    id: string
};

export type ToggleTodoAction = {
    type: 'TOGGLE_TODO',
    id: string
};

export type ToggleAllTodosAction = {
    type: 'TOGGLE_ALL_TODOS'
};

export type ClearCompletedTodosAction = {
    type: 'CLEAR_COMPLETED_TODOS'
};

export type Action =
    | NewTodoInputAction
    | SubmitNewTodoAction
    | AddNewTodoAction
    | RemoveTodoAction
    | ToggleTodoAction
    | ToggleAllTodosAction
    | ClearCompletedTodosAction;

export const newTodoInput = (value: string) => ({
    type: 'UPDATE_NEW_TODO_INPUT',
    value
});

export const submitNewTodo = () => ({ type: 'SUBMIT_NEW_TODO' });

export const addNewTodo = (id: string) => ({
    type: 'ADD_NEW_TODO',
    id
});

export const removeTodo = (id: string) => ({
    type: 'REMOVE_TODO',
    id
});

export const toggleTodo = (id: string) => ({
    type: 'TOGGLE_TODO',
    id
});

export const toggleAllTodos = () => ({ type: 'TOGGLE_ALL_TODOS' });

export const clearCompletedTodos = () => ({ type: 'CLEAR_COMPLETED_TODOS' });
