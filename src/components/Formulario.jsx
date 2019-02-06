import React, {Component} from 'react';
import '../forms.css';
import {connect} from "react-redux";
import {addCity} from "../actions/actions";
import uuid from "uuid";
import axios from "axios";


class Formulario extends Component {
    constructor() {
        super();
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDkyODEyMTAsImV4cCI6MTU0OTM2NzYxMCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiZjU2MDVjMDctNGRhZi00ODc0LWJkMWEtYjE2OTEyNGI0ZDQ1In0.eY76aAi8KU7yzDbBaGLhx5bDcoiAOz0WO5BczFTD2JI";
        const accessToken = JSON.stringify(token);
        localStorage.setItem('token', accessToken);

        this.state = {

            name: 'Madrid',
            address: '',
            telephone: '',

        };

    }



    regDatos = (e) => {

        e.preventDefault();
        this.setState({
            name: 'Madrid',
            address: '',
            telephone: '',
        });
    }

    introDatos = (event) =>
    {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });


    }
    createCity = (state) => {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDkzNzgxMDIsImV4cCI6MTU0OTQ2NDUwMiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiNWRkOTU3ODItNTRiNS00MjE2LWJhYzMtZWZmODM0ZDA1ZjM4In0.jyy_HiLNC97Vzxqtw-la_TjQfW0NAmFRC3qxTeRqbNo"
        var config = {
            headers: {'Authorization':  token}
        };
        axios.post('http://52.213.25.226:3030/city', state, config)
            .then(res => {
                var result=  console.log(res.data);
            })
            .catch(err => console.log('No ha funcionado', err));

    }

    render() {
        return (

            <div className={"mb-3"}>
                <nav className={"navbar navbar-dark mt-5"}>
                    <h2 className={"text-white"}>Add city</h2>
                </nav>
                <form className={"card-header"} onSubmit={this.regDatos}>
                    <div className={"divder"}>
                        <div>
                            <h3 className={"col text-left text-light mt-2"}> Location</h3>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h5 className={"col-sm-2 text-left text-light ml-3"}>City</h5>
                                <select                                         //CIUDAD
                                    name="name"
                                    className="col-sm-3 form-control "
                                    value={this.state.name}
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
                            <div className="form-group row">
                                <h6 className={"col-sm-2 text-left text-light ml-3"}>Country </h6>
                                <select                                         //PAIS
                                    name="pais"
                                    className="col-sm-3 form-control  "
                                    value={this.state.pais}
                                    onChange={this.introDatos}>
                                    <option>España</option>
                                    <option>Rusia</option>
                                    <option>Italia</option>
                                </select>
                            </div>
                            <div className="form-group text-left">
                                <h3 className={"col-sm-2 text-left text-light"}>Adress</h3>
                                <input
                                    className={"stilo ml-3 col-sm-5"}//DIRECCION
                                    type="text"
                                    name={"address"}
                                    value={this.state.address}
                                    placeholder={"Full Adress"}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className={"row form-group text-left"}>
                                <h5 className={"col-sm-1 text-light mt-2 ml-3"}>Phone:</h5>
                                <input                                             //TELEFONO
                                    type="text"
                                    className="texl-left col-sm-3 ml-5"
                                    value={this.state.telephone}
                                    name="telephone"
                                    onChange={this.introDatos}
                                    placeholder="Phone"/>
                            </div>
                        </div>
                        <div className={"divleft"}>
                            <h3 className={"col text-left text-light mt-2"}> Demium team</h3>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h5 className={"col-sm-2 text-left text-light ml-3"}>Team</h5>
                                <select                                         //CIUDAD
                                    name="title"
                                    className="col-sm-4 form-control "
                                    value={this.state.title}
                                    onChange={this.introDatos}>
                                    <option>Select members</option>
                                    <option>IP Manager</option>
                                    <option>Talent Manager</option>
                                </select>
                                <button className="col-sm-2 ml-4 btn btn-primary">
                                    <h6>Add</h6>
                                </button>
                                <button className="col-sm-2 ml-4 btn btn-danger">
                                    <h6>Remove</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button type="submit"  onClick={()=>{this.props.addCities(this.state)
                            this.createCity(this.state)
                        }}className="col-sm-2 ml-4 btn btn-primary">
                            <h5>Create</h5>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}
const dispastchToProps=(dispatch,props )=>{
    return{
        addCities:(stado)=>dispatch(addCity(stado)),

    }
}

export default connect(null,dispastchToProps)(Formulario);