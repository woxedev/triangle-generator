import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import reducers from "./redux/reducers";
import {createStore} from "redux";
import {Provider} from "react-redux"
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}><App/></Provider>
    ,
    document.getElementById('root')
);
