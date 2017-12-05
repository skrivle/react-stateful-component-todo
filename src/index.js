import React from 'react';
import ReactDOM from 'react-dom';
import {SideEffectProvider} from 'react-stateful-component';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SideEffectProvider><App /></SideEffectProvider>, document.getElementById('root'));
registerServiceWorker();
