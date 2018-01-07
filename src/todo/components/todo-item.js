// @flow

import React from 'react';
import classNames from 'classnames';

const ESCAPE = 27;
const ENTER = 13;

export type Props = {
    id: string,
    value: string,
    isCompleted: boolean,
    isEditting: boolean,
    onEditRequest: (id: string) => void,
    onToggle: (id: string) => void,
    onRemove: (id: string) => void,
    onSubmit: (id: string, value: string) => void,
    onCancel: (id: string) => void
};

const TodoItem = ({
    value,
    id,
    isCompleted,
    isEditting,
    onEditRequest,
    onToggle,
    onRemove,
    onSubmit,
    onCancel
}: Props) => {
    const className = classNames({
        completed: isCompleted,
        editing: isEditting
    });

    return (
        <li className={className}>
            <div className="view">
                <input
                    checked={isCompleted}
                    onChange={e => onToggle(id)}
                    className="toggle"
                    type="checkbox"
                />
                <label onDoubleClick={() => onEditRequest(id)}>{value}</label>
                <button className="destroy" onClick={() => onRemove(id)} />
            </div>
            {isEditting && (
                <input
                    className="edit"
                    defaultValue={value}
                    autoFocus={true}
                    onKeyDown={e => {
                        if (e.which === ESCAPE) {
                            onCancel(id);
                            return;
                        }

                        if (e.which === ENTER) {
                            onSubmit(id, e.target.value);
                            return;
                        }
                    }}
                    onFocus={moveCaretToEnd}
                    onBlur={e => onSubmit(id, e.target.value)}
                />
            )}
        </li>
    );
};

export default TodoItem;

function moveCaretToEnd(e) {
    const temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
}
