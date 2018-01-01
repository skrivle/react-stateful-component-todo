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

export type RequestEditAction = {
    type: 'REQUEST_EDIT',
    id: string
};

export type DiscardEditAction = {
    type: 'DISCARD_EDIT'
};

export type UpdateTodoValueAction = {
    type: 'UPDATE_TODO_VALUE',
    id: string,
    value: string
};

export type Action =
    | NewTodoInputAction
    | SubmitNewTodoAction
    | AddNewTodoAction
    | RemoveTodoAction
    | ToggleTodoAction
    | ToggleAllTodosAction
    | ClearCompletedTodosAction
    | RequestEditAction
    | DiscardEditAction
    | UpdateTodoValueAction;

export const newTodoInput = (value: string): NewTodoInputAction => ({
    type: 'UPDATE_NEW_TODO_INPUT',
    value
});

export const submitNewTodo = (): SubmitNewTodoAction => ({ type: 'SUBMIT_NEW_TODO' });

export const addNewTodo = (id: string): AddNewTodoAction => ({
    type: 'ADD_NEW_TODO',
    id
});

export const removeTodo = (id: string): RemoveTodoAction => ({
    type: 'REMOVE_TODO',
    id
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
    type: 'TOGGLE_TODO',
    id
});

export const toggleAllTodos = (): ToggleAllTodosAction => ({ type: 'TOGGLE_ALL_TODOS' });

export const clearCompletedTodos = (): ClearCompletedTodosAction => ({
    type: 'CLEAR_COMPLETED_TODOS'
});

export const requestEdit = (id: string): RequestEditAction => ({
    type: 'REQUEST_EDIT',
    id
});

export const discardEdit = (): DiscardEditAction => ({ type: 'DISCARD_EDIT' });

export const updateTodoValue = (id: string, value: string): UpdateTodoValueAction => ({
    type: 'UPDATE_TODO_VALUE',
    id,
    value
});
