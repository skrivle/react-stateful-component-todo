// @flow

import React, { type ComponentType } from 'react';
import createStatefulComponent from 'react-stateful-component';
import { initialState, actions, reducer, selectors, type Filter } from '../domain';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import TodoItem from '../components/todo-item';
import TodoList from '../components/todo-list';
import Footer from '../components/footer';
import Credits from '../components/credits';

export type Props = {
    currentFilter: Filter,
    filter: (filter: Filter) => void
};

const TodoApp: ComponentType<Props> = createStatefulComponent(() => ({
    displayName: 'TodoApp',
    initialState: () => initialState,
    reducer,
    render: ({ state, reduce, props }) => {
        const todos = selectors
            .filterTodos(state, props.currentFilter)
            .map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    value={todo.value}
                    isCompleted={todo.isCompleted}
                    onToggle={id => reduce(actions.toggleTodo(id))}
                    onRemove={id => reduce(actions.removeTodo(id))}
                />
            ));

        return (
            <div>
                <Wrapper>
                    <Header
                        onInputChange={value => reduce(actions.newTodoInput(value))}
                        inputValue={state.newTodoInput}
                        onSubmit={() => reduce(actions.submitNewTodo())}
                    />
                    <TodoList
                        isToggleAllChecked={selectors.allTodosCompleted(state)}
                        onToggleAll={() => reduce(actions.toggleAllTodos())}
                    >
                        {todos}
                    </TodoList>
                    {state.todos.length > 0 && (
                        <Footer
                            onFilter={filter => props.filter(filter)}
                            currentFilter={props.currentFilter}
                            filters={['all', 'active', 'completed']}
                            onClear={() => reduce(actions.clearCompletedTodos())}
                            showClearBtn={selectors.hasCompletedTodos(state)}
                            count={selectors.uncompletedTodos(state)}
                        />
                    )}
                </Wrapper>
                <Credits />
            </div>
        );
    }
}));

export default TodoApp;
