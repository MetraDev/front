import React, {Component} from 'react';
import '../../taridea.css';
import {addTeam, delTeam, modTeam, showTeam} from "../../actions/actions";
import {connect} from "react-redux";
import {token} from "../../index";
import axios from "axios";
import  {Link} from 'react-router-dom'



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


   /* componentWillMount() {
        console.log('this.props.team' , this.props.team)
        console.log('this.props.team' , this.props.user)

        const teams = this.props.team;
        const users = this.props.user;

        const citiesWithUsers = teams.map(teams => {
            teams.users = teams.users.map(user => users.find(el => user.userId  === el._id ) );
            return teams
        })
        console.log('cities index'+citiesWithUsers)
        this.props.addteams(citiesWithUsers)




    }*/


    deleteC = (id) => {

        var config = {

            headers: {'Authorization': token}
        };
        axios.delete(`http://52.213.25.226:3030/team/${id}`, config)
            .then(res => {
                this.props.delTeams(id)
            })
            .catch(err => console.log('No ha funcionado delete', err));
    }



    render() {
        const team = this.props.team.map((team) => {
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
                                <h6 className={" text-left mt-3 ml-3"}>{team.name || ''}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb name text-left ml-4"}>City</h6>
                                <h6 className={" text-left ml-3"}>{team.cityId.name}</h6>

                            </div>
                            <h5 className={"typeeeb text-left ml-2"}>Team members</h5>
                            <p > {team.users.map(usuario =>{return(
                                <p className={"text-left ml-3 "}>
                                    {usuario.name} {usuario.roleId}
                                </p>)})}</p>
                            <div className={"form-group"}>
                                <h5 className={"typeeeb text-left ml-2"}>Demium team</h5>
                                <p > {team.cityId.users.map(usuario =>{return(
                                    <p className={"text-left ml-3 "}>
                                        {usuario.name} {usuario.roleId}
                                    </p>)})}</p>
                            </div>
                            <p className={" row-right text-right mr-3"}>
                                <Link  to={'/teamedit'}><button onClick={()=> this.props.showTeamm(team)}> Edit</button></Link>
                            </p>
                            <p className={" row-right text-right mr-3"}>
                               <button onClick={()=> this.deleteC(team._id)}> Delete</button>
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
                <button className={'bg-primary text-light'}><Link to={'/formteam'}> <h1>Add</h1></Link></button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        team: state.team,
        user: state.user
    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        modTeamm:(name,user1,user2,id)=>dispatch(modTeam(name,user1,user2,id)),
        showTeamm:(data) =>dispatch(showTeam(data)),
        delTeams:(id) =>dispatch(delTeam(id)),
        addteams:(stado) =>dispatch(addTeam(stado)),


    }
}
export default connect(mapStateToProps,dispastchToProps)(Teamcard);