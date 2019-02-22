import React, {Component} from 'react';
import '../../file.css'
import FormUs from "./formUs";
import {connect} from 'react-redux';
import {addCity, deleteUser, editUser, modIdea, modTar} from "../../actions/actions";
import {token} from "../../index";
import {Link} from 'react-router-dom'
import axios from "axios";


class Fila extends Component {
    constructor(props) {
        super(props);


        this.state = {
            variable: []
        }


    }


    deleteC = (id,team) => {
        var config = {
            headers: {'Authorization': token}
        };
        axios.delete(`http://52.213.25.226:3030/user/${id}`, config)
            .then(res => {
                let arr = res.data.data;
                for (let index in arr) {
                    this.props.obj.push(index)
                }
                this.props.deleteUserS(id)

               let teams = this.props.team.find(item=> item &&  item.name === team )
                console.log('filaaaa133',teams)
               let result = teams && teams.users.filter(item => item && item._id !== id)
                console.log('filaaaa11',result)

                if(teams){
                    teams.users = result
                    console.log('filaaaa2',teams.users )
                this.props.addTeami(teams,teams._id)}

                let city = this.props.city.find(item=> item &&  item.name === team )
                let cityRes = city && city.users.filter(item => item && item._id !== id)
                console.log('result',cityRes)

                if(city){
                    city.users = cityRes
                    console.log('filacityaaa',city.users )
                    this.props.addCities(city,city._id)}


            })
            .catch(err => console.log('No ha funcionado delete', err));
    }





    render() {
        const user = this.props.obj.map((user) => {

                return (
                    <tr>
                        <td colSpan={"1"}><Link to={'/user/:id'}
                                                onClick={() => this.props.editUser(user._id)}>{user.name + ' ' + user.surname}</Link></td>
                        <td colSpan={"1"}>{user.email}</td>
                        <td colSpan={"1"}>{user.roleId}</td>
                        <td colSpan={"1"}>{user.telephone }</td>
                        <td width="1" height="50" >
                        <button  onClick={() => this.deleteC(user._id,user.telephone)} className="col-sm-5 text-center btn btn-dark">
                            <h5 className={'text-center'}>X</h5>
                        </button></td>
                    </tr>

                )
            }
        )


        return (


            <div>
                {console.log(this.props.obj)}
                <table className={"table table-hover table-dark mt-3"}>
                    <thead className={"thead-dark  table-hover text-left"}>
                    <tr className={"stc"}>
                        <td className={"ml-4"}><h4>Users</h4></td>
                        <td colSpan={"4"} className={""}></td>
                    </tr>
                    <tr >
                        <th width="250" height="39"> Name && Surname</th>
                        <th width="250" height="39"> Email</th>
                        <th width="250" height="39"> Role</th>
                        <th width="250" height="39"> Headquarter</th>
                    </tr>
                    {user}
                    </thead>
                </table>
                <FormUs/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.user,
        team: state.team,
        city: state.city

    }
}
const dispastchToProps = (dispatch, props) => {
    return {
        editUser: (id) => dispatch(editUser(id)),
        deleteUserS: (id) => dispatch(deleteUser(id)),
        modIdeas:(stado,id)=>dispatch(modIdea(stado,id)),
        addTeami:(stado,id)=> dispatch (modTar(stado,id)),
        addCities:(stado,id)=>dispatch(addCity(stado,id)),
    }
}

export default connect(mapStateToProps, dispastchToProps)(Fila);
