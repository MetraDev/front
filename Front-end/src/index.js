import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./components/AppRouter";
import createStore from './Redux/create';
import {connect, Provider} from 'react-redux';
import axios from "axios";
import {actionTypesUser} from "./Redux/Reducers/user/usersReducer";
import {actionTypesTeam} from "./Redux/Reducers/team/teamReducer";
import {actionTypesIdeas} from "./Redux/Reducers/ideas/ideasReducer";

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
        console.log('stadoo city' , cities)

        const citiesWithUsers = cities.map(city => {
            city.users = city.users.map(user => user && users.find(el =>el && user.id || user._id === el._id ) );
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

                const citiesWithUsers = team.map(team => {
                    team.cityId= cities.find(el =>team.cityId && team.cityId === el._id )
                    return team
                })

                axios.get('http://52.213.25.226:3030/user',config)
                    .then(resuser => {
                        const users = resuser.data.data

                        const resultado = citiesWithUsers.map(teams => {
                            teams.users = teams.users.map(user => users.find(el => user.userId || user._id === el._id ) );
                            return teams
                        })
                        console.log('holaaaaa' ,resultado)


                        store.dispatch({
                            type: actionTypesTeam.addTeam,
                            data :resultado})


                    })
                    .catch(err=> console.log('No ha funcionado users', err))


            })
            .catch(err=> console.log('No ha funcionado users', err))
    })
    .catch(err=> console.log('No ha funcionado users', err))

//----------------------------------------------------------------------------------------------------------------------
//IDEAS
//----------------------------------------------------------------------------------------------------------------------




axios.get('http://52.213.25.226:3030/idea', config)
    .then(residea => {
        axios.get('http://52.213.25.226:3030/businessmodel',config)
            .then(resbusinessmodel => {
                const businessmodel = resbusinessmodel.data.data;
                const idea = residea.data.data;
                console.log('usersRaw.data.data'+businessmodel+'users'+idea)

                const ideasWithUsers = idea.map(idea => {
                    idea.businessModelId = businessmodel.find(el =>idea.businessModelId === el._id )
                    return idea
                })



               /* axios.get('http://52.213.25.226:3030/team',config)
                    .then(resteam => {
                        const teams = resteam.data.data

                        const result = ideasWithUsers.map(idea => {
                            idea.teamId = teams.find(el =>  idea.teamId === el._id  ) ;
                            return idea
                        })
                        console.log('holaaaaa' ,result)*/


                        store.dispatch({
                            type: actionTypesIdeas.viewAdd,
                            data: ideasWithUsers})


                   // })
                    //.catch(err=> console.log('No ha funcionado users', err))

            })
            .catch(err=> console.log('No ha funcionado users', err))
    })
    .catch(err=> console.log('No ha funcionado users', err))

/*axios.get('http://52.213.25.226:3030/idea', config)
    .then(res => {

        store.dispatch({type: '@ADD-->VIEW',
            data: res.data.data})
    })
    .catch(err => console.log('No ha funcionado users', err));*/




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
