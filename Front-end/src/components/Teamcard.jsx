import React, {Component} from 'react';
import '../taridea.css';
import {addCity, modTeam, showTeam, viewIdeass} from "../actions/actions";
import {connect} from "react-redux";
import {token} from "../index";
import axios from "axios";
import  {BrowserRouter, Switch, Router, Redirect,Link, NavLink} from 'react-router-dom'
import createStore from "redux";


class Teamcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variable:[],
            name:'',
            cityId:'',
            user:''
        }
    }


    componentDidMount() {

        var config = {
            headers: {'Authorization':  token}
        };
        axios.get('http://52.213.25.226:3030/team', config)
            .then(res => {
                this.setState({variable:res.data.data})
                /*store.dispatch({type: actionTypesUser.createUser,
                    data: res.data.data})*/
            })
            .catch(err => console.log('No ha funcionado users', err));


    }

    encontrarUs=(id,dos,indx)=>{
        var config = {
            headers: {'Authorization':  token}}

            if(id === undefined){
            console.log('el ide es undefined')
        }else

        axios.get(`http://52.213.25.226:3030/city/${id}`, config) // DESCARGAMOS DATOS DE LA CITY
            .then(res => {
                // si los el ide del team coincide con el de la ciudad/user
                           /* this.props.dis.filter(item =>{
                                item._id === res.data.users[0].id ?
                                    res.data.users[0].id= item.name : console.log('no son iguales')
                                // encontramos los nombres de los id en los usuarios
                                item._id === res.data.users[1].id ?
                                    res.data.users[1].id= item.name : console.log('no son iguales')
                            })*/
                    //this.props.modTeamm(res.data.name,res.data.users[0].id, res.data.users[1].id,dos)

                console.log('el objeto nom es'+  this.state.nombre)
            })
            .catch(err => console.log('No ha funcionado traer', err));
    }



    render() {
        const team = this.state.variable.map((idea) => {
            return (
                <div className={" col-md-4 mb-3"}>
                    <div className={"carder card  mt-4"}>
                        <div className={""}>
                            <div className={" card-header bg-primary text-left"}>
                                <h5 className={"text-danger"}>Real unicorn</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <div className={" form-group row"}>
                                <h6 className={"typeee text-left mt-3 ml-4"}>Idea</h6>
                                <h6 className={" text-left mt-3 ml-3"}>{idea.name}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb name text-left ml-4"}>City</h6>
                                <h6 className={" text-left ml-3"}>{idea.cityId}</h6>
                                {this.encontrarUs(idea.cityId,idea._id,1)}
                            </div>
                            <h5 className={"typeeeb text-left ml-2"}>Team memebers</h5>
                            <h6 className={" text-left ml-3"}>{idea.users[1].id}</h6>
                            <h6 className={" text-left ml-3"}>{idea.users[0].id}</h6>

                            <div className={"form-group"}>
                                <h5 className={"typeeeb text-left ml-2"}>Demium team</h5>
                                <h6 className={" text-left ml-3"}>{idea.users[1].id}</h6>
                                <h6 className={" text-left ml-3"}>{idea.users[0].id}</h6>
                            </div>
                            <p className={"text-right mr-3"}>
                                <Link  to={'/teamedit'}><button onClick={()=> this.props.showTeamm(idea)}> Edit</button></Link>

                            </p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={"container"}>
                <div className={"row mt-4"}>
                    {team}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        obj: state.team,
        dis:state.user
    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        modTeamm:(name,user1,user2,id)=>dispatch(modTeam(name,user1,user2,id)),
        showTeamm:(data) =>dispatch(showTeam(data))


    }
}
export default connect(mapStateToProps,dispastchToProps)(Teamcard);