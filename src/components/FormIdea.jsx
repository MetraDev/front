import React, {Component} from 'react';
import '../forms.css';

class FormIdea extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Madrid',
            pais: 'España',
            Demium: 'Demium team:',
            description: 'Tigre! ¡Tigre!, fuego que ardes' +
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
            ipman: "Virginia Sanchez",
            taman: "Javier Torregrosa"
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

            <div className={"card-header"}>
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
                                    placeholder={"Spuer App"}
                                    onChange={this.introDatos}/>
                            </div>
                            <h4 className={"col text-left text-light mt-4"}> Business Model</h4>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"col-sm-2 text-left text-light ml-3"}>Type</h6>
                                <select
                                    name="title"
                                    className="col-sm-3 form-control bg-danger "

                                    onChange={this.introDatos}>
                                    <option>App</option>
                                    <option>Web</option>
                                </select>
                            </div>
                            <div className="form-group text-left">
                                <h4 className={"col-sm-2 text-left text-light mt-4"}>Descripción</h4>
                                <textarea
                                    className={"stilos ml-3 col-xl"}
                                    type="text"
                                    value={this.state.description}
                                    name={"description"}
                                    placeholder={"Spuer App"}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className={"text-left "}>
                                <h5 className={"bg-danger badge-pill text-center text-light col-sm-3"}>Not
                                    Available</h5>
                            </div>
                            <div className={"form-group row ml-1 mt-3"}>
                                <h5 className={"text-left text-light col-sm-3"}>Headquarter</h5>
                                <label className={"text-left text-dark col-sm-2 "}><b>Madrid</b></label>
                            </div>
                            <div className={"form-group row ml-1"}>
                                <h5 className={"text-left text-light col-sm-3"}>Team name</h5>
                                <label className={"text-left text-dark col-sm-3 "}><b>Real Unicorn</b></label>
                            </div>
                            <div className={"form-group row ml-1"}>
                                <h5 className={"text-left text-light col-sm-3"}>Black date</h5>
                                <label className={"text-left text-dark col-sm-2 "}><b>19/91/2019</b></label>
                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button type="submit" className="col-sm-2 ml-4 btn btn-primary">
                            <h5>Close</h5>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormIdea;