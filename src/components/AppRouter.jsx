import React from 'react';
import {Component} from 'react'
import  {BrowserRouter, Switch, Route, Redirect,Link, NavLink} from 'react-router-dom'
import ideas from '../pages/ideas'
import team from '../pages/team'
import user from '../pages/user'
import cities from '../pages/cities'
import '../App.css'
import ideapag from "../pages/ideapag";
import teamcard from "../pages/teamCards";
import login from "../pages/login";
import home from "../pages/home";
import axios from "axios";

class AppRouter extends Component{
    constructor() {
        super();
        this.state = {

        }

    }



    render(){
        return(

<BrowserRouter>
    <div className={"linea"}>
        <header>
            <nav className={"navbar navbar-dark"}>
             <Link to={"/"}>   <h1 className={"text-white"}>Demium</h1></Link>
                <div className={"col-md-4"}>
                <span className={"badge badge badge-light ml-0"}>
                     <NavLink activeClassName={"is-active"} to={"/cities"}  >cities</NavLink>
                </span>
                    <span className={"badge badge-light ml-5 "}>
                      <Link to={"/user"}>user</Link>
                    </span>
                    <span className={"badge badge-light ml-5 "}>
                      <Link to={"/team"}>team</Link>
                    </span>
                    <span className={"badge badge-light ml-5"}>
                       <Link to={"/ideas"}>ideas</Link>
                    </span>
                </div>
            </nav>
        </header>
        <Switch>
            <Route path={'/ideas'} component={ideas} exact={true}/>
            <Route path={'/user'} component={user} exact={true}/>
            <Route path={'/cities'} component={cities} exact={true}/>
            <Route path={'/team'} component={team} exact={true}/>
            <Route path={'/ideaspag'} component={ideapag} exact={true}/>
            <Route path={'/teamcard'} component={teamcard} exact={true}/>
            <Route path={'/'} component={login}  exact={true} />
            <Redirect to={'/404'}/>
        </Switch>
        <div className="footer text-left">
        <p className={"ml-5"}>(c) 2019 Demium, All rights reserved</p>
    </div>
</div>
</BrowserRouter>)
}
}
export const excute =(arry)=>{
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDk0NjQ1NDcsImV4cCI6MTU0OTU1MDk0NywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzliY2U4ZTUtYzE1Mi00ZmY2LWIwYWMtZWJhMWI5YzIwNjVlIn0.flTOmy-eaQC97_Wzw0SA6-aF-56DbNhoQSNb82kIuHg"

    var config = {
        headers: {'Authorization':  token}
    };
    axios.get('http://52.213.25.226:3030/city', config)
        .then(res => {
            let arr= res.data.data;
            console.log ('los DATOSSSS'+ arr)
            for (let index in arr){
                arry.push(arr[index])
            }
        })
        .catch(err => console.log('No ha funcionado', err));}


export default AppRouter;