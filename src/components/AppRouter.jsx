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
                <h1 className={"text-white"}>Demium</h1>
                <div className={"col-md-4"}>
                <span className={"badge badge badge-light ml-0"}>
                     <NavLink activeClassName={"is-active"} to={"/cities"}>cities</NavLink>
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
            <Redirect to={'/404'}/>
        </Switch>
        <div className="footer text-left">
        <p className={"ml-5"}>(c) 2019 Demium, All rights reserved</p>
    </div>
</div>
</BrowserRouter>)
}
}
export default AppRouter;