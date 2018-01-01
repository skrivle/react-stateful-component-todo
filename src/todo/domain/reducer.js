// @flow

import { update } from 'react-stateful-component';
import { type State, type Todo } from './data';
import { type Action } from './actions';
import { allTodosCompleted } from './selectors';
import { requestId } from './side-effects';

export default (state: State, action: Action): update.Update<State, Action> => {
    switch (action.type) {
        case 'UPDATE_NEW_TODO_INPUT':
            return updateNewTodoInput(state, action);
        case 'SUBMIT_NEW_TODO':
            return submitNewTodo(state, action);
        case 'ADD_NEW_TODO':
            return addNewTodo(state, action);
        case 'REMOVE_TODO':
            return removeTodo(state, action);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action);
        case 'TOGGLE_ALL_TODOS':
            return toggleAllTodos(state, action);
        case 'CLEAR_COMPLETED_TODOS':
            return clearCompletedTodos(state, action);
        case 'REQUEST_EDIT':
            return requestEdit(state, action);
        case 'DISCARD_EDIT':
            return discardEdit(state, action);
        case 'UPDATE_TODO_VALUE':
            return updateTodoValue(state, action);
        default:
            return update.nothing();
    }
};

function updateNewTodoInput(state, action) {
    return update.state({ ...state, newTodoInput: action.value });
}

function submitNewTodo(state, action) {
    if (state.newTodoInput.trim() === '') return update.nothing();

    return update.sideEffect(requestId);
}

function addNewTodo(state, action) {
    const newTodo: Todo = {
        id: action.id,
        value: state.newTodoInput.trim(),
        isCompleted: false
    };

    return update.state({
        ...state,
        newTodoInput: '',
        todos: state.todos.concat(newTodo)
    });
}

function removeTodo(state, action) {
    return update.state({
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
    });
}

function toggleTodo(state, action) {
    return update.state({
        ...state,
        todos: state.todos.map(
            todo =>
                todo.id === action.id
                    ? {
                          ...todo,
                          isCompleted: !todo.isCompleted
                      }
                    : todo
        )
    });
}

function toggleAllTodos(state, action) {
    const areAllTodosCompleted = allTodosCompleted(state);

    return update.state({
        ...state,
        todos: state.todos.map(todo => ({
            ...todo,
            isCompleted: areAllTodosCompleted ? false : true
        }))
    });
}

function clearCompletedTodos(state, action) {
    return update.state({
        ...state,
        todos: state.todos.filter(todo => !todo.isCompleted)
    });
}

function requestEdit(state, action) {
    return update.state({
        ...state,
        editTodoId: action.id
    });
}

function discardEdit(state, action) {
    return update.state({ ...state, editTodoId: null });
}

function updateTodoValue(state, action) {
    return update.state({
        ...state,
        editTodoId: null,
        todos: state.todos.map(
            todo =>
                todo.id === action.id
                    ? {
                          ...todo,
                          value: action.value
                      }
                    : todo
        )
    });
}
