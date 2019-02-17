import React, {Component} from 'react';
import '../../forms.css';
import {connect} from "react-redux";
import {addCity} from "../../actions/actions";
import axios from "axios";
import {token} from '../../index'
import {BrowserRouter, Switch, Route, Redirect, Link, NavLink} from 'react-router-dom'


class Cityid extends Component {
    constructor(props) {
        super(props);
        this.count =0;
        this.state = {
            name: '',
            address: '',
            telephone: '',
            users:[],
            nom1:[],
            nom2:''
        };




    }
    añadirUser = (nom) =>{
        this.state.nom2 = JSON.parse(nom)


        if (this.state.users.some(item => this.state.nom2.name === item.name ))
        {alert('ya hay un role ')
        } else {

            this.setState({users:[...this.state.users ,this.state.nom2]})

        }}



    remove = name => {
        this.setState({users:this.state.users.filter(item => item.name !== name)});
    };


    componentDidMount() {




        var config = {
            headers: {'Authorization':  token}
        };




        console.log('puffff', this.props.id)
        let obj = this.props.city.filter(city=> city._id === this.props.id[0])
        console.log('puffff', obj[0])
        this.setState(obj[0])
        }







    regDatos = (e) => {
        e.preventDefault()

        if(this.state.users == ''){
            alert('añade 2 usuarios')
        }

        this.setState({users:[{id:'5c5b3f1c818f2c243aea3d73'},{id:'5c5b3f1c818f2c243aea3d73'}]})
    }

    introDatos = (event) =>
    {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });



    }





    createCity = (state) => {

        var config = {
            headers: {'Authorization':  token}
        };


        axios.put(`http://52.213.25.226:3030/city/${this.props.id}`, state, config)
                .then(res => {

                    console.log('el estado', res.data)
                    this.props.addCities(res.data,this.props.id)


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
                                <select  required                                       //CIUDAD
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
                                    onChange={this.introDatos}
                                    required={true}>
                                    <option>España</option>
                                    <option>Rusia</option>
                                    <option>Italia</option>
                                </select>
                            </div>
                            <div className="form-group text-left">
                                <h3 className={"col-sm-2 text-left text-light"}>Address</h3>
                                <input
                                    className={"stilo ml-3 col-sm-5"}//DIRECCION
                                    type="text"
                                    name={"address"}
                                    value={this.state.address}
                                    placeholder={this.state.address}
                                    onChange={this.introDatos} required={true}/>
                            </div>
                            <div className={"row form-group text-left"}>
                                <h5 className={"col-sm-1 text-light mt-2 ml-3"}>Phone:</h5>
                                <input                                             //TELEFONO
                                    type="text"
                                    className="texl-left col-sm-3 ml-5"
                                    value={this.state.telephone}
                                    name="telephone"
                                    onChange={this.introDatos}
                                    placeholder={this.state.telephone} required={true}/>
                            </div>
                        </div>
                        <div className={"divleft"}>
                            <h3 className={"col text-left text-light mt-2"}> Demium team</h3>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h5 className={"col-sm-2 text-left text-light ml-3"}>Team</h5>
                                <select className={'select'} id={'select'}
                                        name={'nom2'}
                                        onChange={this.introDatos} >
                                    {this.props.user.map((usr) => {
                                        return (
                                            <option name={'nom2'} value={JSON.stringify(usr)}>{usr.name}</option>)})}
                                </select>
                                <button className="col-sm-2 ml-4 btn btn-primary"
                                        onClick={(e)=>{e.preventDefault()
                                            this.añadirUser(this.state.nom2)}}>
                                    <h6>Add</h6>
                                    {console.log('nom2' +this.state.nom2)}
                                    {console.log('stado' +this.state.users)}
                                </button>
                                <div>
                                    {this.state.users.map(added =>{return(
                                        <div>
                                            {added.name}
                                            <span onClick={() => this.remove(added.name)}>x</span>

                                        </div>)})}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button type="submit"  onClick={()=>{this.createCity(this.state)
                        }}className="col-sm-2 ml-4 btn btn-primary">
                            <Link to={`/cities`}>Save</Link>
                        </button>
                    </div>
                </form>
            </div>
            )}
    }

const mapStateToProps = (state ,props) => {
    return {
        id: state.movNom,
        user: state.user,
        city: state.city
    }

}

const dispastchToProps=(dispatch,props )=>{
    return{
        addCities:(stado,id)=>dispatch(addCity(stado,id)),


    }
}

export default connect(mapStateToProps,dispastchToProps)(Cityid);