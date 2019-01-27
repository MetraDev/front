
import React, {Component} from 'react';
import Fila from './Fila'




class User extends Component{
    constructor() {
        super();
        this.state = {
            name : '',
            surname : '',
            role : 'IP Manager',
            headquarter :'Madrid'
        };
    }



    introDatos = (event) => {
        const {value, name} = event.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }
    misDatos=()=>{
        return this.state;
    }
    regDatos = (e) => {
        e.preventDefault();
        this.misDatos()
        this.setState({
            title: 'Madrid',
            pais: 'España',
            description: '',
            tlf: ''
        });
    }



    render() {
        return(




                    <div className={"card-header"}>
                        <Fila insertDta={()=>this.setState(this.state)}/>
                        <nav className={"navbar navbar-dark mt-5"}>
                            <h2 className={"text-white"}>Add city</h2>
                        </nav>
                        <form className={"card-header bg-dark"} onSubmit={this.regDatos } >
                            <div className={"divder"}>
                                <div>
                                    <div className="form-group text-left">
                                        <h4 className={"col-sm-2 text-left text-light"}>Name</h4>
                                        <input
                                            className={"stilo ml-3 col-sm-5"}//DIRECCION
                                            type="text"
                                            name={"name"}
                                            value={this.state.name}
                                            placeholder={"name"}
                                            onChange={this.introDatos}/>
                                    </div>

                                    <div className="form-group text-left">
                                        <h4 className={"col-sm-2 text-left text-light"}>Surname</h4>
                                        <input
                                            className={"ml-3 col-sm-5"}//DIRECCION
                                            type="text"
                                            name={"surname"}
                                            value={this.state.surname }
                                            placeholder={"surname"}
                                            onChange={this.introDatos}/>
                                    </div>
                                    <div className={"row form-group text-left"}>
                                        <h4 className={"col-sm-1 text-light mt-2 ml-3"}>Email:</h4>
                                        <input                                             //TELEFONO
                                            type="text"
                                            className="texl-left col-sm-3 ml-5"

                                            name="tlf"
                                            onChange={this.introDatos}
                                            placeholder="email"/>
                                    </div>


                                    <div className={"row form-group text-left"}>
                                        <h4 className={"col-sm-1 text-light mt-2 ml-3"}>Phone:</h4>
                                        <input                                             //TELEFONO
                                            type="text"
                                            className="texl-left col-sm-3 ml-5"

                                            name="tlf"
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
                                        <select                                         //CIUDAD
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
                                            name="role"
                                            className="col-sm-3 mt-2 form-control  "
                                            value={this.state.role}
                                            onChange={this.introDatos}>
                                            <option>IP Manager</option>
                                            <option>Founder</option>
                                            <option>Talent Manager</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                            <div className={"text-right col-dm-2"}>
                                <button type="submit" className="col-sm-2 ml-4 btn btn-primary">
                                    <h5>Create</h5>
                                </button>
                            </div>
                        </form>
                        {console.log(this.state)}
                    </div>


        )
    }
}
export default User;