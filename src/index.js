import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';
import { Provider } from 'react-redux'
import store from './store/store'





ReactDOM.render(<Router>
    <Provider store={store}>
    <ReactRouter/>
    </Provider>
</Router>
    ,
    document.getElementById('root'));

