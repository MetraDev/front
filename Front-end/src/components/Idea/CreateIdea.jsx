import React, {Component} from 'react';
import '../../forms.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {modIdea, viewAdd,createIdea} from "../../actions/actions";
import uuid from "uuid";
import {token} from "../../index";
import axios from "axios";


class CreateIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'idea sin mas',
            businessModelId: '',
            description:'',
            teamId: '',
        };

    }

    createIdea = (state) => {

        var config = {
            headers: {'Authorization':  token}
        };
        console.log('el estado', state )

        axios.post(`http://52.213.25.226:3030/idea`, state, config)
            .then(res => {

                res.data.businessModelId = this.state.businessModelId
                res.data.teamId = this.state.teamId

                console.log('el estado', res.data)
                this.props.crearIdeas(res.data)


            })
            .catch(err => console.log('No ha funcionado', err),
                this.setState({err:true})

            );

    }



    regDatos = (e) => {
        e.preventDefault();

    }

    introDatos = (event) => {
        const {value, name} = event.target;
        if(name == 'businessModelId'){
            console.log('target value' ,event.target.value)

            let bussines = JSON.parse(event.target.value)
            console.log('target value' ,bussines)
            this.setState({
                businessModelId: bussines,
            });

        }else
            this.setState({
                [name]: value,
            });
    }

    render() {
        if (this.state.err === true){

        return(<h1 className={'bg-danger text-dark'}>

            ERROR DE CARGA , VUELVA A INTENTARLO MAS TARDE


        </h1>)
    }else



            return( <div className={"card-header"}>
                <nav className={"navbar navbar-dark mt-5"}>
                    {console.log('edit idea' , this.state.name)}
                    <h3 className={"text-white"}>Edit Idea</h3>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    <div className={"divder"}>
                        <div>
                            <div className="form-group text-left">
                                <h4 className={"col-sm-2 text-left text-light mt-3"}>Nombre</h4>
                                <input required
                                       className={"stilo ml-3 col-sm-5"}//DIRECCION
                                       type="text"

                                       name={"name"}
                                       placeholder={''}
                                       onChange={this.introDatos}/>
                            </div>
                            <h4 className={"col text-left text-light mt-4"}> Business Model</h4>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"col-sm-2 text-left text-light ml-3"}>Type</h6>
                                <select className={'select'} id={'select'}
                                        name={'businessModelId'}
                                        onChange={this.introDatos} >
                                    {this.props.businessModel.map((business) => {
                                        return (
                                            <option name={'nom2'} value={JSON.stringify(business)}>{business.name}</option>)})}
                                </select>
                            </div>
                            <div className="form-group text-left">
                                <h4 className={"col-sm-2 text-left text-light mt-4"}>Descripción</h4>
                                <textarea
                                    className={"stilos ml-3 col-xl"}
                                    type="text"
                                    value={this.state.description}
                                    name={"description"}
                                    placeholder={''}
                                    onChange={this.introDatos}/>
                            </div>
                            <div className={"text-left "}>
                                <h5 className={"bg-danger badge-pill text-center text-light col-sm-3"}>Not
                                    Available</h5>
                            </div>
                            <div className={"form-group row ml-1 mt-3"}>
                                <h5 className={"text-left text-light col-sm-3"}>Headquarter</h5>
                                <label className={"text-left text-light col-sm-2 "}><b></b></label>
                            </div>
                            <div className={"form-group row ml-1"}>
                                <h5 className={"text-left text-light col-sm-3"}>Team name</h5>
                                <label className={"text-left text-light col-sm-3 "}><b></b></label>
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
                        <button type="submit" onClick={()=>{this.createIdea(this.state)}} className="col-sm-2 ml-4 btn btn-primary ">
                            <Link to={"/ideas"} > <h5 className={"text-light"}>Guardar</h5></Link>
                        </button>
                    </div>
                </form>
            </div>)




    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.viewIdea,
        businessModel: state.business
    }
}
const dispastchToProps=(dispatch,props )=>{
    return{
        crearIdeas:(stado)=>dispatch(createIdea(stado)),

    }
}
export default connect(mapStateToProps,dispastchToProps)(CreateIdea);