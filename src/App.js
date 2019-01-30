import React from 'react';
import {Component} from 'react'
import './App.css';
import Tarjeta from './components/Tarjeta';
import FormIdea from "./components/FormIdea";
import TargetIdea from "./components/TargetIdea";
import User from "./components/User";
import Team from "./components/Team";



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
                return <User/>
            case '/team':
                return <Team/>

            case '/App':
            default:
                return <FormIdea/>
        }
    }



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

                {this.getPage()}

                <div className="footer text-left">
                    <p className={"ml-5"}>(c) 2019 Demium, All rights reserved</p>
                </div>
            </div>)
    }
}

export default App;