import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./components/AppRouter";
import createStore from './Redux/create';

import { Provider } from 'react-redux';
import Tarjeta from "./components/Tarjeta";
import axios from "axios";

const store = createStore();




ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('root'));