import React from 'react';
import {Component} from 'react';
import Tarjeta from './components/Tarjeta';
import FormIdea from "./components/FormIdea";
import TargetIdea from "./components/TargetIdea";
import User from "./components/User";
<<<<<<< HEAD
import FormUs from "./components/formUs";
import Fila from "./components/Fila";
import Team from "./components/Team";
import FormAll from "./components/FormAll";
=======
import Team from "./components/Team";
>>>>>>> redux



class App extends Component {
    constructor() {
        super();
        this.state = {
            url: '/',


        }
    }

    getPage=()=>{
        switch(this.state.url) {
    case '/ideas':
    return <TargetIdea />
    case '/cities':
    return <Tarjeta/>
    case '/user':
}}

    render() {

        return (
            <div className={"App"}>
                <nav className={"navbar navbar-dark"}>
                    <h1 className={"text-white"}>Demium</h1>
                    <div className={"col-md-4"}>
                <span className={"badge badge badge-light ml-0"}>
                     <a className={"team  mt-2"}href="#" onClick={()=>this.setState({url:'/team'})}>{'Team'}</a>
                </span>
                        <span className={"badge badge-light ml-5 "}>
                      <a className={"mt-2"}href="#" onClick={()=>this.setState({url:'/ideas'})}>{'Ideas'} </a>
                    </span>
                        <span className={"badge badge-light ml-5 "}>
                      <a className={"mt-2"}href="#" onClick={()=>this.setState({url:'/cities'})}>{'Cities'}</a>
                    </span>
                        <span className={"badge badge-light ml-5"}>
                      <a className={"mt-2"}href="#" onClick={()=>this.setState({url:'/user'})}>{'Users'}</a>
                    </span>
                    </div>
                </nav>
<<<<<<< HEAD
                <Tarjeta/>
                <div className="footer text-left ">
=======

                {this.getPage()}

                <div className="footer text-left">
>>>>>>> redux
                    <p className={"ml-5"}>(c) 2019 Demium, All rights reserved</p>
                </div>
            </div>)
    }
}

export default App;