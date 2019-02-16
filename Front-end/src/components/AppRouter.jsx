import React from 'react';
import {Component} from 'react'
import  {BrowserRouter, Switch, Route, Redirect,Link, NavLink} from 'react-router-dom'
import ideas from '../pages/idea/ideas'
import team from '../pages/team/team'
import user from '../pages/user/user'
import cities from '../pages/cities/cities'
import '../App.css'
import ideapag from "../pages/idea/ideapag";
import teamcard from "../pages/team/teamCards";
import login from "../pages/login";
import cityId from "../pages/cities/cityId";
import editUser from "../pages/user/editUser";
import formteam from "../pages/team/formteam";


class AppRouter extends Component{
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    clickEx=()=>{
        localStorage.setItem('accesToken', 'null')

        this.setState({})

    }


    render(){
        return(

<BrowserRouter>
    <div className={"linea"} >
        <header>
            <nav className={"navbar navbar-dark"}>
             <Link to={"/login"}>   <h1 className={"text-white"}>Demium</h1></Link>
                <div className={"col-md-6 text-right"}>
                <span className={"badge badge badge-light col-sm-1"}>
                     <NavLink activeClassName={"is-active "} to={"/cities"}  >cities</NavLink>
                </span>
                    <span  className={"badge badge-light ml-3 col-sm-1 "}>
                      <Link to={"/user"}>user</Link>
                    </span>
                    <span className={"badge badge-light ml-3 col-sm-1"}>
                      <Link to={"/team"}>team</Link>
                    </span>
                    <span className={"badge badge-light ml-3 col-sm-1"}>
                       <Link to={"/ideas"}>ideas</Link>
                    </span>
                    <span className="text-right ">
                        <a href="location">
                        <Link to={"/login"} onClick={()=>this.clickEx()} className={' col-sm-1 badge badge-light text-light ml-3 bg-primary'}>Exit</Link></a>
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
            <Route path={'/teamedit'} component={team}  exact={true} />
            <Route path={'/city/:id'} component={cityId}  exact={true} />
            <Route path={'/user/:id'} component={editUser}  exact={true} />
            <Route path={'/formteam'} component={formteam}  exact={true} />
            <Redirect to={'/login'}/>
        </Switch>
        <div className=" footer footer-copyright text-center py-3 mt-4">© 2018 Copyright:Demium, All rights reserved</div>
</div>
</BrowserRouter>)
}
}


export default AppRouter;