import React, {Component} from 'react';
import './forms.css';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Madrid',
            pais: 'España',
            Demium:'Demium team:',
            description: '',
            tlf: '',
            ipman:"Virginia Sanchez",
            taman:"Javier Torregrosa"
        };

    }

    regDatos = (e) => {
        e.preventDefault();
        this.props.insertAll(this.state);
        this.setState({
            title: 'Madrid',
            pais: 'España',
            description: '',
            tlf: ''
        });
    }

    introDatos = (event) => {
        const {value, name} = event.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (

            <div><nav className={"navbar navbar-dark mt-5"}>
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
                                <button  className="col-sm-2 ml-4 btn btn-primary">
                                <h6>Add</h6>
                            </button>
                                <button className="col-sm-2 ml-4 btn btn-danger">
                                    <h6>Remove</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button type="submit" className="col-sm-2 ml-4 btn btn-primary">
                            <h5>Create</h5>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario;