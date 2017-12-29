import React from 'react';
import ReactDOM from 'react-dom';
import { SideEffectProvider } from 'react-stateful-component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'todomvc-app-css/index.css';
import TodoApp from './todo';

const TodoAppWithFilters = ({ match: { params }, history }) => {
    const currentFilter: string = params.filter || 'all';
    const filter = (filter: string): void => {
        if (filter === currentFilter) return;
        history.push({ pathname: filter });
    };
    return <TodoApp filter={filter} currentFilter={currentFilter} />;
};

ReactDOM.render(
    <SideEffectProvider>
        <Router>
            <Route path="/:filter?" component={TodoAppWithFilters} />
        </Router>
    </SideEffectProvider>,
    document.getElementById('root')
);
