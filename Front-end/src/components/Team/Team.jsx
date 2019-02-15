import React, {Component} from 'react';
import '../../team.css'
import {addTeam, modTar} from "../../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import {token} from '../../index'
import axios from "axios";

class Team extends Component {
    constructor(props) {
        super(props);

        this.user1= this.props.obj.users[0].id ||''
        this.user2= this.props.obj.users[1].id ||''
        this.state={

            name:this.props.obj.name,
            cityId:this.props.obj.cityId,
            usersN:[],
            users:[{id:this.user1},{id:this.user2}],

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

    put=(id)=>{
        var config = {

            headers: {'Authorization':  token}}
            console.log('el estado'+this.state)

        axios.put(`http://52.213.25.226:3030/team/${id}`, this.state, config) // DESCARGAMOS DATOS DEL USUARIO
            .then(res => {
                    // si los el ide del usuario coincide con el de la ciudad/user

                    console.log('puuuut' + res.data._id)
                this.props.addTeami(res.data,res.data._id)
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
                    <div className={"form-group row text-left"}>
                        <h6 className={" col-sm-2"}>Selected idea</h6>
                        <p className={"text-primary col-sm-2"}>{this.props.obj.name}</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2 text-left "}>Change idea</h6>
                        <select className={"col-sm-2 form-control text-left "}
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
                    <div className={"form-group row text-left"}>
                        <h6 className={"col-sm-2"}>Selected city</h6>
                        <p className={"col-sm-2 text-light"}>{this.props.obj.cityId}</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={" col-sm-2 text-left"}>Change city</h6>
                        <select className={"col-sm-2 form-control text-left "}
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
                        <button id={1} className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(1)}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2 text-left"}>{this.state.cto}</p>
                        <h5 className={"col-sm-2 text-primary text-left"}>{this.state.titlecto}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(2)}>Edit</button>
                        <button className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(2)}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2  text-left"}>{this.state.cmo}</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.state.titlecmo}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(3)}>Edit</button>
                        <button  className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(3)}>Remove</button>
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
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=>this.put(this.props.obj._id)}>
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
        addTeami:(stado,id)=> dispatch (modTar(stado,id)),

    }
}

export default connect(mapStateToProps,dispastchToProps)(Team);