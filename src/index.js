import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from './store/reducers';
import Layout from './components/layout/Layout';

import './style/app.scss'
const loggerMiddleware = createLogger()
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Provider>
        )
    }
}

let Application = document.getElementById("app");

render(<Index />, Application);