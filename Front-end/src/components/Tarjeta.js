import React, {Component} from 'react';
import Formulario from './Formulario'
import '../taridea.css';
import {connect} from "react-redux";
import axios from "axios";
import {token} from '../index'
import {BrowserRouter, Switch, Route, Redirect, Link, NavLink} from 'react-router-dom'
import {deleteCity, addCity, modCity, sendID, addCities} from "../actions/actions";


class Tarjeta extends Component {
    constructor(props, envios, respu) {
        super(props);

        this.envios = 0;
        this.state = {
            variable: [],
            datos: []
        }


        console.log(this.props.obj)
    }

    componentDidMount() {
        var config = {
            headers: {'Authorization': token}
        };

        axios.get('http://52.213.25.226:3030/city', config)
            .then(res => {
                let cities = res.data.data
                this.props.addCities(cities)
            })
            .catch(err => console.log('No ha funcionado users', err))
        axios.get('http://52.213.25.226:3030/user', config)
            .then(res => {

            })
            .catch(err => console.log('No ha funcionado users', err))


    }



    insertarForm = (stado) => {
        let newVar = this.state.variable.map(item => {
            return [...item, stado]

        })
        this.setState({variable: newVar})
    }


    deleteC = (id) => {

        var config = {

            headers: {'Authorization': token}
        };
        axios.delete(`http://52.213.25.226:3030/city/${id}`, config)
            .then(res => {
                this.props.deleteCityy(id)
            })
            .catch(err => console.log('No ha funcionado delete', err));
    }



    encontrarUs = (id, dos) => { // id del usuario, id de la tarjeta
        var config = {
            headers: {'Authorization': token}
        }

        if (id[1] === undefined) {

            console.log('ouqhsaudhe', id)
        } else

            axios.get(`http://52.213.25.226:3030/user/${id[1].id}`, config) // DESCARGAMOS DATOS DEL USUARIO
                .then(res => {
                        // si los el ide del usuario coincide con el de la ciudad/user
                        for (let index in this.props.obj) {
                            if (this.props.obj[index]._id === dos) {           // si el id de la tarjeta(obj) es igual que el segundo parametro
                                this.props.modCityy(dos, res.data.name, 1)
                                //modificamos el cityuser por el nombre de user
                            }
                        }
                    }
                )
                .catch(err => console.log('No ha funcionado traer', err));


        if (id[0] === undefined) {

            console.log('ouqhsaudhe')
        } else

            axios.get(`http://52.213.25.226:3030/user/${id[0].id}`, config) // DESCARGAMOS DATOS DEL USUARIO
                .then(res => {
                        // si los el ide del usuario coincide con el de la ciudad/user
                        for (let index in this.props.obj) {
                            if (this.props.obj[index]._id === dos) {           // si el id de la tarjeta(obj) es igual que el segundo parametro
                                this.props.modCityy(dos, res.data.name, 0)
                                //modificamos el cityuser por el nombre de user

                            }
                        }
                    }
                )
                .catch(err => console.log('No ha funcionado traer', err));
    }


    render() {
        this.envios++
        const todo = this.props.obj.map((todo) => {
            return (

                <div className={"col-md-4"}>
                    {console.log('eltodooo' + todo)}
                    <div className={"carder card mt-4"}>

                        <div className={"bg-dark"}>
                            <div className={"card-header text-left"}>
                                <h5 className={"text-white"}>{todo.name}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <h5 className={"text-left text-primary ml-3 mt-2"}>{'Adress'}</h5>
                            <p className={"text-left ml-3"}>{todo.address}</p>
                            <p className={"text-left ml-3"}>{
                                this.envios < this.props.obj.length ?   // ejecutamos un metodo para sacar el monbre de los usuarios
                                    this.encontrarUs(todo.users, todo._id, 1)
                                    : console.log('no fun')}</p>
                            <p className={"text-left ml-3"}>{'Phone: ' + todo.telephone}</p>
                            <p className={"text-left ml-3"}></p>
                            <p className={"text-left ml-3"}>{todo.users[0].id || ''}</p>
                            <p className={"text-left ml-3"}>{todo.users[1].id || ''}</p>
                            <p className={"text-right mr-3"}>
                                <button className={"text-rigth badge badge-primary mr-10"} onClick={() => {
                                    this.deleteC(todo._id)
                                }}>
                                    <h5 className={"text-light"}>{'VIEW'}</h5>
                                </button>
                                <button className={"text-rigth badge badge-primary mr-10"}
                                        onClick={() => this.props.sendIds(todo._id)}>
                                    <Link to={`/city/${todo._id}`}>Edit</Link>
                                </button>
                            </p>

                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={"container"}>
                <div className={"row mt-4"}>
                    {console.log('fooorm' + this.props.obj)}
                    {todo}
                </div>
                <div className={"mb-6"}>
                    <Formulario insertAll={this.insertarForm}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.city
    }

}

const dispastchToProps = (dispatch, props) => {
    return {
        deleteCityy: (id) => dispatch(deleteCity(id)), // la primera son los props con los que se le llama y la segunda el metodo d Actions
        modCityy: (id, nom, indx) => {
            dispatch(modCity(id, nom, indx))
        },
        addCities: (cities) => dispatch(addCities(cities)),
        sendIds: (id) => dispatch(sendID(id)),
    }
}
export default connect(mapStateToProps, dispastchToProps)(Tarjeta);