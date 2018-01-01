// @flow

import React from 'react';

export type Props<F: string> = {
    count: number,
    filters: Array<F>,
    currentFilter: F,
    showClearBtn: boolean,
    onClear: () => void,
    onFilter: (filter: F) => void
};

const Footer = <F: string>({
    count,
    showClearBtn,
    currentFilter,
    filters,
    onFilter,
    onClear
}: Props<F>) => (
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
