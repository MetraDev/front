import React from 'react';
import {Component} from 'react'
import './App.css';
import {todo} from './todo.json';
import Tarjeta from './Tarjeta';

class  App extends Component{
    constructor(){
        super();
        this.state = {
            todo
        }
    }
    render() {

        return (
        <div className={"App"}>
            <nav className={"navbar navbar-dark"}>
                <a href="" className={"text-white"}>
                    <h1>Demium</h1>
                </a>
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
            <div className={"container"}>
                <div className={"row mt-4"}>
                    <Tarjeta/>
                </div>
            </div>


        </div>)
    }

}
export default App;