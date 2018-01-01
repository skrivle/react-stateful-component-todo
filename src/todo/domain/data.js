// @flow

export type Todo = {|
    id: string,
    isCompleted: boolean,
    value: string
|};

export type State = {
    todos: Array<Todo>,
    newTodoInput: string,
    editTodoId: ?string
};

export const initialState: State = {
    todos: [],
    newTodoInput: '',
    editTodoId: null
};

export type Filter = 'all' | 'active' | 'completed';

export const stringToFilter = (value: string): Filter =>
    value === 'all' || value === 'active' || value === 'completed' ? value : 'all';
