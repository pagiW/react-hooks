import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App.jsx';
import initialState from './initialState';
import reducer from './reducer';

const store = createStore(reducer, initialState);

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));