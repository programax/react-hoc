import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux';
import App from './app';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
