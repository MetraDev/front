import React, {Component} from 'react';
import '../forms.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {viewAdd} from "../actions/actions";
import uuid from "uuid";


class FormIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:uuid(),
            title: 'Madrid',
            pais: 'España',
            Demium: 'Demium team:',
            Description: 'Tigre! ¡Tigre!, fuego que ardes' +
                'En los bosques de la noche,' +
                '¿Qué mano inmortal, qué ojo' +
                'Pudo idear tu terrible simetría?' +
                '¿En qué distantes abismos, en qué cielos,' +
                'Ardió el fuego de tus ojos?' +
                '¿Con qué alas osó elevarse?' +
                '¿Y que mano osó tomar ese fuego?' +
                '¿Y que hombro y qué arte,' +
                'podrían retorcer la nervadura de tu corazón' +
                'Y cuando tu corazón comenzó a latir' +
                '¿Qué formidable mano, qué formidables pies?',
            tlf: '',
            Headquarter:'',
            ipman: "Virginia Sanchez",
            taman: "Javier Torregrosa"
        };

    }

    regDatos = (e) => {
        e.preventDefault();
        this.setState({
            id:uuid(),
            title: 'Madrid',
            pais: 'España',
            Description: 'Deeefault',
            Headquarter: 'Mad',
            Team: 'Bootcamp'
        });
    }

    introDatos = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value,
            Headquarter: 'Mad',
            Team: 'Bootcamp'
        });
    }

    render() {


    const data = this.props.obj.map((item)=>{
        return( <div className={"card-header"}>
            <nav className={"navbar navbar-dark mt-5"}>
                <h3 className={"text-white"}>Edit Idea</h3>
            </nav>
            <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                <div className={"divder"}>
                    <div>
                        <div className="form-group text-left">
                            <h4 className={"col-sm-2 text-left text-light mt-3"}>Nombre</h4>
                            <input
                                className={"stilo ml-3 col-sm-5"}//DIRECCION
                                type="text"

                                name={"Nombre"}
                                placeholder={item.Nombre}
                                onChange={this.introDatos}/>
                        </div>
                        <h4 className={"col text-left text-light mt-4"}> Business Model</h4>
                        <div className={"row form-group"}>
                        </div>
                        <div className={"form-group row"}>
                            <h6 className={"col-sm-2 text-left text-light ml-3"}>Type</h6>
                            <select
                                name="type"
                                className="col-sm-3 form-control bg-danger "
                                value={this.state.type}
                                onChange={this.introDatos}>
                                <option>{item.type}</option>
                                <option>App</option>
                                <option>Web</option>

                            </select>
                        </div>
                        <div className="form-group text-left">
                            <h4 className={"col-sm-2 text-left text-light mt-4"}>Descripción</h4>
                            <textarea
                                className={"stilos ml-3 col-xl"}
                                type="text"

                                name={"Description"}
                                placeholder={item.Description}
                                onChange={this.introDatos}/>
                        </div>
                        <div className={"text-left "}>
                            <h5 className={"bg-danger badge-pill text-center text-light col-sm-3"}>Not
                                Available</h5>
                        </div>
                        <div className={"form-group row ml-1 mt-3"}>
                            <h5 className={"text-left text-light col-sm-3"}>Headquarter</h5>
                            <label className={"text-left text-light col-sm-2 "}><b>{item.Headquarter}</b></label>
                        </div>
                        <div className={"form-group row ml-1"}>
                            <h5 className={"text-left text-light col-sm-3"}>Team name</h5>
                            <label className={"text-left text-light col-sm-3 "}><b>{item.Team}</b></label>
                        </div>
                        <div className={"form-group row ml-1"}>
                            <h5 className={"text-left text-light col-sm-3"}>Black date</h5>
                            <label className={"text-left text-light col-sm-2 "}><b>19/91/2019</b></label>
                        </div>
                    </div>
                </div>
                <div className={"text-right col-dm-2"}>
                    <button type="submit" className="col-sm-2 ml-4 btn btn-primary ">
                        <Link to={"/ideas"} > <h5 className={"text-light"}>Close</h5></Link>
                    </button>
                    <button type="submit" onClick={()=>{this.props.addView(this.state)}} className="col-sm-2 ml-4 btn btn-primary ">
                        <Link to={"/ideas"} > <h5 className={"text-light"}>Guardar</h5></Link>
                    </button>
                </div>
            </form>
        </div>)

    })
       return(<div>{data}</div>)

    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.viewIdea
    }
}
const dispastchToProps=(dispatch,props )=>{
    return{
        addView:(stado)=>dispatch(viewAdd(stado)),

    }
}
export default connect(mapStateToProps,dispastchToProps)(FormIdea);