import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./components/AppRouter";
import createStore from './Redux/create';
import {connect, Provider} from 'react-redux';
import axios from "axios";
import {actionTypesUser} from "./Redux/Reducers/user/usersReducer";
import {actionTypesTeam} from "./Redux/Reducers/team/teamReducer";

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
        if (token ==  res.data.accessToken){
            alert('tu sesiónn ha caducado')
        }


    })
    .catch(err=> console.log('No ha funcionado users', err))


export const token = localStorage.getItem('accesToken')

var config = {
    headers: {'Authorization':  token}
};

//----------------------------------------------------------------------------------------------------------------------
// CITIES
//----------------------------------------------------------------------------------------------------------------------



var config = {
    headers: {'Authorization':  token}
};




axios.get('http://52.213.25.226:3030/city', config)
    .then(rescity => {
        axios.get('http://52.213.25.226:3030/user',config)
    .then(resuser => {
        const cities = rescity.data.data;
        const users = resuser.data.data;

        const citiesWithUsers = cities.map(city => {
            city.users = city.users.map(user => users.find(el =>user.id||user._id === el._id ) );
            return city
        })
        console.log('cities index'+citiesWithUsers)
        store.dispatch({
            type: '@ADD_CITIES',
            data:citiesWithUsers
        })


        })
            .catch(err=> console.log('No ha funcionado users', err))
    })
    .catch(err=> console.log('No ha funcionado users', err))


/*axios.get('http://52.213.25.226:3030/city', config)
    .then(res => {

        store.dispatch({type: '@ADD_CITIES',
            data: res.data.data})
    })
    .catch(err=> console.log('No ha funcionado users', err))*/

//----------------------------------------------------------------------------------------------------------------------
//USERS
//----------------------------------------------------------------------------------------------------------------------


axios.get('http://52.213.25.226:3030/user', config)
    .then(res => {

        store.dispatch({type: actionTypesUser.createUser,
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));
//----------------------------------------------------------------------------------------------------------------------
//TEAMS
//----------------------------------------------------------------------------------------------------------------------

axios.get('http://52.213.25.226:3030/team', config)
    .then(resteam => {
        axios.get('http://52.213.25.226:3030/city',config)
            .then(rescity => {
                const cities = rescity.data.data;
                const team = resteam.data.data;
                console.log('usersRaw.data.data'+cities+'users'+team)
                const citiesWithUsers = team.map(team => {
                    team.cityId = cities.find(el =>team.cityId === el._id )
                    return team
                })

                store.dispatch({
                    type: actionTypesTeam.addTeam,
                    data :citiesWithUsers})


            })
            .catch(err=> console.log('No ha funcionado users', err))
    })
    .catch(err=> console.log('No ha funcionado users', err))





/*axios.get('http://52.213.25.226:3030/team', config)
    .then(res => {
        store.dispatch({type: actionTypesTeam.addTeam,
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));*/
//----------------------------------------------------------------------------------------------------------------------
//IDEAS
//----------------------------------------------------------------------------------------------------------------------

axios.get('http://52.213.25.226:3030/idea', config)
    .then(res => {

        store.dispatch({type: '@ADD-->VIEW',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));




//----------------------------------------------------------------------------------------------------------------------
                                            //ROLE
//----------------------------------------------------------------------------------------------------------------------


axios.get('http://52.213.25.226:3030/role', config)
    .then(res => {
        store.dispatch({type: '@LOAD-->rOle',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));




//----------------------------------------------------------------------------------------------------------------------
                                                //businessmodel
//----------------------------------------------------------------------------------------------------------------------

axios.get('http://52.213.25.226:3030/businessmodel', config)
    .then(res => {

        store.dispatch({type: '@LOAD-->business',
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
