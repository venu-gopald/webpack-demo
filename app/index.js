import React from "react";
import ReactDOM from "react-dom";
import './main.css';
import Root from "./containers/Root";
import {configureStore} from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById("root")
);
