// @flow

import React from 'react';

export type Props = {
    id: string,
    value: string,
    isCompleted: boolean,
    onToggle: (id: string) => void,
    onRemove: (id: string) => void
};

const TodoItem = ({ value, id, isCompleted, onToggle, onRemove }: Props) => (
    <li className={isCompleted ? 'completed' : null}>
        <div className="view">
            <input
                checked={isCompleted}
                onChange={e => onToggle(id)}
                className="toggle"
                type="checkbox"
            />
            <label>{value}</label>
            <button className="destroy" onClick={() => onRemove(id)} />
        </div>
    </li>
);

export default TodoItem;
