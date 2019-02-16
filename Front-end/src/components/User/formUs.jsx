import React, {Component} from 'react';
import {connect} from "react-redux";
import { tareaSi } from '../../actions/actions';
import axios from "axios";
import {token} from "../..";


class FormUs extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            surname: '',
            email: '',
            telephone: '',
            roleId:'',
            nom1:[],
        };
    }

    regDatos = (e) => {
        e.preventDefault();

    }

    introDatos = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {


        var config = {
            headers: {'Authorization': token}
        };




                /*
                store.dispatch({type: actionTypes.createCity,
                    data: res.data.data})*/

    }

    createUser = (state) => {



        console.log('create', state)

        var config = {
            headers: {'Authorization':  token}
        };


            axios.post('http://52.213.25.226:3030/user', state, config)
                .then(res => {
                    console.log('' , state)

                    this.props.tareaSino(state)
                })
                .catch(err => console.log('No ha funcionado', err));

    }


    render() {
        return (
            <div className={""}>
                <nav className={"navbar navbar-dark mt-3"}>
                    <h2 className={"text-white"}>Add user</h2>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    <div className={"divder"}>
                        <div>
                            <div className="form-group text-left">
                                <h4 className={"col-sm-2 text-left text-light"}>Name</h4>
                                <input required
                                    className={"stilo ml-3 col-sm-5"}//DIRECCION
                                    type="text"
                                    name={"name"}
                                    value={this.state.name}
                                    placeholder={"name"}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className="form-group text-left">
                                <h4 className={"col-sm-2 text-left text-light"}>Surname</h4>
                                <input required
                                    className={"ml-3 col-sm-5"}//DIRECCION
                                    type="text"
                                    name={"surname"}
                                    value={this.state.surname}
                                    placeholder={"surname"}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className={"row form-group text-left"}>
                                <h4 className={"col-sm-1 text-light mt-2 ml-3"}>Email:</h4>
                                <input                                             //TELEFONO
                                    type="text"
                                    className="texl-left col-sm-3 ml-5"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.introDatos}
                                    placeholder="email"/>
                            </div>
                            <div className={"row form-group text-left"}>
                                <h4 className={"col-sm-1 text-light mt-2 ml-3"}>Phone:</h4>
                                <input
                                    required  //TELEFONO
                                    type="telephone"
                                    className="texl-left col-sm-3 ml-5"
                                    value={this.state.telephone}
                                    name="telephone"
                                    onChange={this.introDatos}
                                    placeholder="Phone"/>
                            </div>
                        </div>
                        <div className={"divleft"}>
                            <h4 className={"col text-left text-light mt-2"}> Headquarter</h4>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h5 className={"col-sm-2 text-left text-light ml-3"}>City</h5>
                                <select required                                        //CIUDAD
                                    name="headquarter"
                                    className="col-sm-3 form-control "
                                    value={this.state.headquarter}
                                    onChange={this.introDatos}>
                                    <option>Madrid</option>
                                    <option>Valencia</option>
                                    <option>Barcelona</option>
                                    <option>Zaragoza</option>
                                    <option>Bilbao</option>
                                    <option>Roma</option>
                                    <option>Moscu</option>
                                </select>
                            </div>
                            <h4 className={"col text-left text-light mt-2"}>Role</h4>
                            <div className="form-group row">
                                <h6 className={"col-sm-2 text-left text-light mt-3 ml-3"}>Type </h6>

                                <select                                         //PAIS
                                    name="roleId"
                                    className="col-sm-3 mt-2 form-control  "
                                    value={this.state.roleId}
                                    onChange={this.introDatos}>
                                    {this.props.role.map((usr) => {
                                        return (
                                            <option   >{usr.name}</option>)})}

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button type="submit" onClick={()=>
                            this.createUser(this.state)}  className="col-sm-2 ml-4 btn btn-primary">
                            <h5 className={'text-light'}>Create</h5>
                        </button>
                    </div>
                </form>
                {console.log('ojooo' +this.state.name)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        role: state.role
    }

}


const dispastchToProps=(dispatch,props )=>{
    return{
        tareaSino:(stado)=>dispatch(tareaSi(stado)),

    }
}


export default connect( mapStateToProps,dispastchToProps)(FormUs);