import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './store/reducers'

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


let middleware = applyMiddleware(promise, thunk);
const store = createStore(rootReducer, middleware)

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter>

    <App />
    </BrowserRouter>
    </Provider>,
      document.getElementById("root")
);

