import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Empleo from './components/Empleo'
import AppRouter from "./components/AppRouter";
import Tarjeta from "./components/Tarjeta";



ReactDOM.render(<AppRouter/>, document.getElementById('root'));