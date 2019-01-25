import React, {Component} from 'react';
import './forms.css';

class Formulario extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Madrid',
            pais: 'España',
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

            <div className={"container"}>
                <form className={"card-header text-left"} onSubmit={this.regDatos}>
                    <h2 className={"text-light"}> Add city</h2>
                    <div>
                        <h4 className={"text-light"}> Location</h4>
                    </div>
                    <div className={"form-group row "}>
                        <h6 className={"text-light ml-3"}>Country </h6>
                        <div className="form-group ml-4 ">
                            <select                                         //PAIS
                                name="pais"
                                className="form-control "
                                value={this.state.pais}
                                onChange={this.introDatos}>
                                <option>España</option>
                                <option>Rusia</option>
                                <option>Italia</option>
                            </select>
                        </div>
                    </div>
                    <div className={"form-group row"}>
                        <h6 className={"text-light ml-3"}>City</h6>
                        <div className=" ml-5 ">
                            <select                                         //CIUDAD
                                name="title"
                                className="form-control "
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
                    </div>
                    <div className="stilo">
                        <h5 className={"text-light"}>Adress</h5>
                        <input                                             //DIRECCION
                            type="text" name={"description"}
                            value={this.state.description}
                            placeholder={"Full Adress"}
                            onChange={this.introDatos}/>
                    </div>
                    <div className={"form-group row mt-3"}>
                        <h5 className={"text-light mt-2 ml-3"}>Phone:</h5>
                        <input                                             //TELEFONO
                            type="text"
                            className="ml-3"
                            value={this.state.tlf}
                            name="tlf"
                            onChange={this.introDatos}
                            placeholder="Phone"/>
                        <div className={"row justify-content-between"}>
                            <div className=" ">
                            <button type="submit" className=" btn btn-primary ml-4">
                                <h4>Create</h4>
                            </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
    }

}

export default Formulario;