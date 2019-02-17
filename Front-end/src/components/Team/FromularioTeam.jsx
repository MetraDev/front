import React, {Component} from 'react';
import '../../team.css'
import {fromTeam} from "../../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import {token} from '../../index'
import axios from "axios";

class FormTeam extends Component {
    constructor(props) {
        super(props);


        this.state={

            name:'',
            cityId:'',
            usersN:[],
            users:[{id:'5c582ffc818f2c243aea3ce4'},{id:'5c5b3e76818f2c243aea3d70'}],

        }

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



    createTEAMS=(stado)=>{
        var config = {

            headers: {'Authorization':  token}}
        console.log('el estado'+this.state)

        axios.post(`http://52.213.25.226:3030/team/`, this.state, config) // DESCARGAMOS DATOS DEL USUARIO
            .then(res => {
                    // si los el ide del usuario coincide con el de la ciudad/user

                    console.log('puuuut' + res.data)
                    this.props.fromTeams(this.state)
                }
            )
            .catch(err => console.log('No ha funcionado el put', err));
    }


    render() {
        return (
            <div className={"card-header text-light"}>
                <nav className={"navbar navbar-dark mt-3"}>
                    <h2 className={"text-white"}>Edit team</h2>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    { console.log(this.props.obj)}
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Idea </h4>
                        <p className={"text-light "}>Plese select the idea that the team will be developing</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2 text-left "}>Selected idea</h6>
                        <select required className={"col-sm-2 form-control text-left "}
                                name={"name"}
                                value={this.state.name}
                                onChange={this.introDatos}>
                            <option>Saas</option>
                            <option>Ideas</option>
                            <option>Unicorn</option>
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Headquarter </h4>
                        <p className={"text-light "}>Plese select the headquarter where the team is located</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={" col-sm-2 text-left"}>Selected city</h6>
                        <select required className={"col-sm-2 form-control text-left "}
                                name={"cityId"}
                                value={this.state.cityId}
                                onChange={this.introDatos}>
                            <option>Madrid</option>
                            <option>Bilbao</option>
                            <option>Valencia</option>
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Team members </h4>
                        <p className={"text-light "}>Plese select the team members and choose their roles </p>
                    </div>
                    <h5 className={"colores text-left"}>Selceted members </h5>
                    <div className={"form-group row"}>
                        <p  className={"col-sm-2  text-left"}>{this.state.ceo}</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.state.titleceo}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(1)}>Edit</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2 text-left"}>{this.state.cto}</p>
                        <h5 className={"col-sm-2 text-primary text-left"}>{this.state.titlecto}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(2)}>Edit</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2  text-left"}>{this.state.cmo}</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.state.titlecmo}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(3)}>Edit</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Demium Team</h4>
                        <p className={"text-light "}>Plese select the team members and choose their roles </p>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2 text-left"}></p>
                        <h5 className={"col-sm-2 text-primary text-left"}>{this.user1}</h5>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2  text-left"}></p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.user2}</h5>
                    </div>
                    <div className={"text-right"}>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=>this.createTEAMS(this.state)}>
                            <Link to={"/teamcard"}><h5 className={'text-light'}>Save</h5></Link>
                        </button>
                        <button className={"col-sm-2 ml-4 btn  btn-danger text-light"}><Link to={"/teamcard"}><h5 className={'text-light'}>Cancel</h5></Link></button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.teamShow,

    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        fromTeams:(state)=> dispatch (fromTeam(state)),

    }
}

export default connect(mapStateToProps,dispastchToProps)(FormTeam);