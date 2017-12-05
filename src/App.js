// @flow

import React from 'react';
import createStatefulComponent, {update} from 'react-stateful-component';

const App = createStatefulComponent(() => ({
    initialState: () => ({todos: []}),
    reducer: (state, action) => update.nothing(),
    render: ({state}) => (<div>todos!</div>)
}));

export default App;
