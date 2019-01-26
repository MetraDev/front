import React from 'react';
import {Component} from 'react'
import './App.css';
import Tarjeta from './Tarjeta';
import Formulario from "./Formulario";

class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (
            <div className={"App"}>
                <nav className={"navbar navbar-dark"}>
                    <h1 className={"text-white"}>Demium</h1>
                    <div className={"col-md-4"}>
                <span className={"badge ml-0"}>
                      <h6 className={"mt-2"}>{'Team'}</h6>
                    </span>
                        <span className={"badge ml-5 "}>
                      <h6 className={"mt-2"}>{'Ideas'}</h6>
                    </span>
                        <span className={"badge badge-light ml-5 "}>
                      <h6 className={"mt-2"}>{'Cities'}</h6>
                    </span>
                        <span className={"badge ml-5"}>
                      <h6 className={"mt-2"}>{'Users'}</h6>
                    </span>
                    </div>
                </nav>
                <div>
                    <Tarjeta/>
                </div>
            </div>)
    }
}

export default App;