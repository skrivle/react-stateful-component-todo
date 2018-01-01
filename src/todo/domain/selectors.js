// @flow

import { type State } from './data';

export const uncompletedTodos = ({ todos }: State): number =>
    todos.filter(todo => !todo.isCompleted).length;

export const allTodosCompleted = ({ todos }: State): boolean =>
    todos.length > 0 && todos.filter(todo => todo.isCompleted).length === todos.length;

export const hasCompletedTodos = ({ todos }: State): boolean =>
    todos.filter(todo => todo.isCompleted).length > 0;

export const filterTodos = ({ todos }: State, filter: string) => {
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.isCompleted);
        case 'active':
            return todos.filter(todo => !todo.isCompleted);
        case 'all':
        default:
            return todos;
    }
};

export const isEditing = (state: State, id: string): boolean => state.editTodoId === id;
