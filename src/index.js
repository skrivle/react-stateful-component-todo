// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { SideEffectProvider } from 'react-stateful-component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'todomvc-app-css/index.css';
import TodoApp, { stringToFilter } from './todo';

const TodoAppWithFilters = ({ match: { params }, history }) => {
    const currentFilter = params.filter || '';
    const filter = filter => {
        if (filter === currentFilter) return;
        history.push({ pathname: filter });
    };
    return <TodoApp filter={filter} currentFilter={stringToFilter(currentFilter)} />;
};

const App = () => (
    <SideEffectProvider>
        <Router>
            <Route path="/:filter?" render={TodoAppWithFilters} />
        </Router>
    </SideEffectProvider>
);

const init = () => {
    const root = document.getElementById('root');

    if (!root) return;

    ReactDOM.render(<App />, root);
};

init();
