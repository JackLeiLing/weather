import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  rootReducer  from './reducers';
import ReduxPromise from 'redux-promise';
const storeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={storeWithMiddleWare(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
