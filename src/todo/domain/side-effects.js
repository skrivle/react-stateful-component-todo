// @flow

import type { Reduce } from 'react-stateful-component';
import uuid from 'uuid/v1';
import { addNewTodo, type Action } from './actions';

export const requestId = (reduce: Reduce<Action>) => {
    const id = uuid();
    reduce(addNewTodo(id));
};
