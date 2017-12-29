// @flow

export type Todo = {
    id: string,
    isCompleted: boolean,
    value: string
};

export type State = {
    todos: Array<Todo>,
    newTodoInput: string
};

export const initialState: State = {
    todos: [],
    newTodoInput: ''
};
