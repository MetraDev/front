import React, {Component} from 'react';
import '../file.css'
import FormUs from "./formUs";
import { connect } from 'react-redux';
import {deleteUser} from "../actions/actions";
import {token} from "../index";
import createStore from '../Redux/create';
import axios from "axios";
import {actionTypesUser} from "../Redux/Reducers/usersReducer";


class Fila extends Component {
    constructor(props) {
        super(props);


        this.state = {
            variable:[]
        }


    }

    componentDidMount() {
        const store = createStore();
        var config = {
            headers: {'Authorization':  token}
        };
        axios.get('http://52.213.25.226:3030/user', config)
            .then(res => {
                this.setState({variable:res.data.data})
                /*store.dispatch({type: actionTypesUser.createUser,
                    data: res.data.data})*/
            })
            .catch(err => console.log('No ha funcionado users', err));


    }

    deleteC = (id) => {
        var config = {
            headers: {'Authorization':  token}
        };
        axios.delete(`http://52.213.25.226:3030/user/${id}`, config)
            .then(res => {
               this.deleteTarjeta(id)
            })
            .catch(err => console.log('No ha funcionado delete', err));
    }
    deleteTarjeta =(ids)=>{

        let variab = this.state.variable.filter(id => {if(id._id !== ids){
            return id
        }})
        console.log('varibaleees' + variab)
        this.setState({variable:variab})}


    render() {
        const user = this.state.variable.map((user) => {
                return (
                    <tr>
                        <td colSpan={"1"} >{user.name}</td>
                        <td colSpan={"1"}>{user.surname}</td>
                        <td colSpan={"1"}>{user.email}</td>
                        <td colSpan={"1"}>{user.telephone}</td>
                        <button  onClick={()=> this.deleteC(user._id)}  className="col-sm-2 ml-4 btn btn-primary">
                            <h5>borrar</h5>
                        </button>
                    </tr>

                )
            }
        )
        this.componentDidMount()


        return (


            <div>
                {console.log(this.props.obj)}
                <table className={"table table-hover table-dark mt-3"}>
                    <thead className={"thead-dark  table-hover text-left"}>
                    <tr className={"stc"}>
                        <td className={"ml-4"}><h4>Users</h4></td>
                        <td colSpan={"4"} className={""}></td>
                    </tr>
                    <tr>
                        <th width="250" height="39"> Name</th>
                        <th width="250" height="39"> Surname</th>
                        <th width="250" height="39"> Role</th>
                        <th width="250" height="39"> Headquarter</th>
                    </tr>
                    {user}
                    </thead>
                </table>
                <FormUs  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.user
    }
}
const dispastchToProps=(dispatch,props )=>{
    return{
        deleteUsers:(id) => dispatch(deleteUser(id))
    }
}

export default connect(mapStateToProps,dispastchToProps)(Fila);
