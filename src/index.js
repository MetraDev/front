import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./components/AppRouter";
import createStore from './Redux/create';
import {actionTypes} from './Redux/Reducers/cityReducer'
import { Provider } from 'react-redux';
import axios from "axios";
import {actionTypesUser} from "./Redux/Reducers/usersReducer";
import {actionTypesTeam} from "./Redux/Reducers/teamReducer";
import  {BrowserRouter,Route, Redirect,Link} from 'react-router-dom'
import Tarjeta from "./components/Tarjeta";

const store = createStore();
var log={
    "email": "sergiop.pias@gmail.com",
    "password": "porlamadre3",
    "strategy": "local",
}
//----------------------------------------------------------------------------------------------------------------------
                                                //AUTHENTICATION
//----------------------------------------------------------------------------------------------------------------------
axios.post('http://52.213.25.226:3030/authentication/', log)
    .then(res => {



        console.log('reeeees'+res.data.accessToken)
        localStorage.setItem('accesToken', res.data.accessToken)
    })
    .catch(err=> console.log('No ha funcionado users', err))


export const token = localStorage.getItem('accesToken')
//----------------------------------------------------------------------------------------------------------------------
                                                    // CITIES
//----------------------------------------------------------------------------------------------------------------------

var config = {
    headers: {'Authorization':  token}
};

axios.get('http://52.213.25.226:3030/city', config)
    .then(res => {
        let arr= res.data.data;
        store.dispatch({type: actionTypes.createCity,
            data: res.data.data})
    })
    .catch(err=> console.log('No ha funcionado users', err))

//----------------------------------------------------------------------------------------------------------------------
                                                    //USERS
//----------------------------------------------------------------------------------------------------------------------


axios.get('http://52.213.25.226:3030/user', config)
    .then(res => {
        let arr= res.data.data;
        store.dispatch({type: actionTypesUser.createUser,
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));
//----------------------------------------------------------------------------------------------------------------------
                                                    //TEAMS
//----------------------------------------------------------------------------------------------------------------------

axios.get('http://52.213.25.226:3030/team', config)
    .then(res => {
        let arr= res.data.data;
        store.dispatch({type: actionTypesTeam.addTeam,
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));

//----------------------------------------------------------------------------------------------------------------------
                                            //RENDER
//----------------------------------------------------------------------------------------------------------------------


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, document.getElementById('root'));