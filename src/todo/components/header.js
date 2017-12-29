// @flow

import React from 'react';

export type Props = {
    inputValue: string,
    onInputChange: (value: string) => void,
    onSubmit: () => void
};

const Header = ({ inputValue, onInputChange, onSubmit }: Props) => (
    <header className="header">
        <h1>Todos</h1>
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <input
                value={inputValue}
                onChange={e => onInputChange(e.target.value)}
                className="new-todo"
                placeholder="What needs to be done?"
            />
        </form>
    </header>
);

export default Header;
