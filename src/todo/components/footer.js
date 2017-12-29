// @flow

import React from 'react';

export type Props = {
    count: number,
    filters: Array<string>,
    currentFilter: string,
    showClearBtn: boolean,
    onClear: () => void,
    onFilter: (filter: string) => void
};

const Footer = ({ count, showClearBtn, currentFilter, filters, onFilter, onClear }: Props) => (
    <footer className="footer">
        <span className="todo-count">
            <strong>{count}</strong> items left
        </span>
        <ul className="filters">
            <ul className="filters">
                {filters.map(filter => (
                    <li key={filter}>
                        <a
                            onClick={() => onFilter(filter)}
                            className={currentFilter === filter ? 'selected' : null}
                        >
                            {filter}
                        </a>
                    </li>
                ))}
            </ul>
        </ul>
        {showClearBtn && (
            <button onClick={onClear} className="clear-completed">
                Clear completed
            </button>
        )}
    </footer>
);

export default Footer;
