// @flow

import type { Reduce } from 'react-stateful-component';
import uuid from 'uuid/v1';
import { arrayOf } from 'flow-validator';
import { addNewTodo, todosReceived, type Action } from './actions';
import { type Todo, TodoSchema } from './data';

const LOCAL_STORAGE_KEY = 'todos';

export const requestId = (reduce: Reduce<Action>) => {
    const id = uuid();
    reduce(addNewTodo(id));
};

export const persistTodos = (todos: Array<Todo>) => (reduce: Reduce<Action>) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

const TodoListSchema = arrayOf(TodoSchema);

export const getTodos = (reduce: Reduce<Action>) => {
    let todos;

    try {
        const result = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
        todos = TodoListSchema.parse(result);
    } catch (e) {
        todos = undefined;
    }

    if (todos) reduce(todosReceived(todos));
};
