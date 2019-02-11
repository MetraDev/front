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
    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render(){
        return(

<BrowserRouter>
    <div className={"linea"}>
        <header>
            <nav className={"navbar navbar-dark"}>
             <Link to={"/LOGIN"}>   <h1 className={"text-white"}>Demium</h1></Link>
                <div className={"col-md-4"}>
                <span className={"badge badge badge-light "}>
                     <NavLink activeClassName={"is-active "} to={"/cities"}  >cities</NavLink>
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
            <Route path={'/team'} component={teamcard} exact={true}/>
            <Route path={'/ideaspag'} component={ideapag} exact={true}/>
            <Route path={'/teamcard'} component={teamcard} exact={true}/>
            <Route path={'/login'} component={login}  exact={true} />
            <Redirect to={'/login'}/>
        </Switch>
        <div className=" footer footer-copyright text-center py-3 mt-4">© 2018 Copyright:Demium, All rights reserved</div>
</div>
</BrowserRouter>)
}
}


export default AppRouter;