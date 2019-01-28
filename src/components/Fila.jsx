import React, {Component} from 'react';
import {user} from '../user.json';
import '../file.css'
import User from "./User";
import Formulario from "./Tarjeta";
import FormUs from "./formUs";
import {todo} from "../todo";

class Fila extends Component {
    constructor() {
        super();
        const pasEstado = localStorage.getItem('Usuario');

        this.state = pasEstado ? JSON.parse(pasEstado):{
            user
        }

    }

    insertarForm = (users) => {
        this.setState({
            user: [...this.state.user, users]
        },() => { const usuarioJson = JSON.stringify(this.state)
            localStorage.setItem('Usuario',usuarioJson)})
    }

    render() {
        const user = this.state.user.map((user) => {
                return (
                    <tr>
                        <td colSpan={"1"}>{user.name}</td>
                        <td colSpan={"1"}>{user.surname}</td>
                        <td colSpan={"1"}>{user.role}</td>
                        <td colSpan={"1"}>{user.headquarter}</td>
                    </tr>

                )
            }
        )
        return (
            <div>
                <table className={"table table-hover table-dark mt-3"}>
                    <thead className={"thead-dark  table-hover text-left"}>
                    <tr className={"stc"}>
                        <td className={"ml-4"}><h4>Users</h4></td>
                        <td colSpan={"4"} className={""}></td>
                    </tr>
                    <tr>
                        <th width="250" height="39"> Name</th>
                        <th width="250" height="39"> Surname</th>
                        <th width="250" height="39"> Role</th>
                        <th width="250" height="39"> Headquarter</th>
                    </tr>
                    {user}
                    </thead>
                </table>
                <FormUs insertAll={this.insertarForm} />
            </div>
        )
    }
}

export default Fila;