// @flow

import React, { type Element } from 'react';
import TodoItem from './todo-item';

export type Props = {
    isToggleAllChecked: boolean,
    onToggleAll: () => void,
    children: Array<Element<typeof TodoItem>>
};

const TodoList = ({ children, isToggleAllChecked, onToggleAll }: Props) => (
    <section className="main">
        <input
            id="toggle-all"
            checked={isToggleAllChecked}
            onChange={onToggleAll}
            className="toggle-all"
            type="checkbox"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">{children}</ul>
    </section>
);

export default TodoList;
