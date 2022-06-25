import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import thunk from 'react-thunk';

const store = createStore(reducers, compose(aaplyMiddleware(thunk)));

ReactDOM.render(<App />, document.getElementById('root'));
