import React, {Component} from 'react';
import {todo} from '../todo.json';
import Formulario from './Formulario'
import '../taridea.css';

class Tarjeta extends Component {
    constructor() {
        super();


        this.state = {
            todo
        }


    }





    insertarForm = (todos) => {
        this.setState({
            todo: [...this.state.todo, todos]
        }, () => { const userJson = JSON.stringify(this.state)
            localStorage.setItem('users',userJson)})
    }

    render() {

        const todo = this.state.todo.map((todo) => {
            return (
                <div className={"col-md-4"}>
                    <div className={"carder card mt-4"}>
                        <div className={"bg-dark"}>
                            <div className={"card-header text-left"}>
                                <h5 className={"text-white"}>{todo.title}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <h5 className={"text-left text-primary ml-3 mt-2"}>{'Adress'}</h5>
                            <p className={"text-left ml-3"}>{todo.direccion}</p>
                            <p className={"text-left ml-3"}>{todo.description}</p>
                            <p className={"text-left ml-3"}>{'Phone: ' + todo.tlf}</p>
                            <p className={"text-left ml-3"}>{todo.Demium}</p>
                            <p className={"text-left ml-3"}>{todo.ipman}</p>
                            <p className={"text-left ml-3"}>{todo.taman}</p>
                            <p className={"text-right mr-3"}>
                            <span className={"text-rigth badge badge-primary mr-10"}>
                      <h5 className={"text-light"}>{'VIEW'}</h5>
                            </span></p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={"container"}>
                <div className={"row mt-4"}>
                    {todo}
                </div>
                <div className={" mt-4"}>
                    <Formulario insertAll={this.insertarForm}/>
                </div>
            </div>
        )
    }
}

export default Tarjeta;