import React, {Component} from 'react';
import '../forms.css';
import {connect} from "react-redux";
import {addCity} from "../actions/actions";


class Formulario extends Component {
    constructor() {
        super();
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDkyODEyMTAsImV4cCI6MTU0OTM2NzYxMCwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiZjU2MDVjMDctNGRhZi00ODc0LWJkMWEtYjE2OTEyNGI0ZDQ1In0.eY76aAi8KU7yzDbBaGLhx5bDcoiAOz0WO5BczFTD2JI";
        const accessToken = JSON.stringify(token);
        localStorage.setItem('token', accessToken);
        this.state = {

            title: 'Madrid',
            pais: 'España',
            Demium: 'Demium team:',
            description: '',
            tlf: '',
            ipman: "Virginia Sanchez",
            taman: "Javier Torregrosa"
        };

    }



    regDatos = (e) => {

        e.preventDefault();

    }

    introDatos = (event) =>
    {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });


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
                                    name="title"
                                    className="col-sm-3 form-control "
                                    value={this.state.title}
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
                                    type="text" name={"description"}
                                    value={this.state.description}
                                    placeholder={"Full Adress"}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className={"row form-group text-left"}>
                                <h5 className={"col-sm-1 text-light mt-2 ml-3"}>Phone:</h5>
                                <input                                             //TELEFONO
                                    type="text"
                                    className="texl-left col-sm-3 ml-5"
                                    value={this.state.tlf}
                                    name="tlf"
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
                        <button type="submit"  onClick={()=>this.props.addCities(this.state)}className="col-sm-2 ml-4 btn btn-primary">
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