import React, {Component} from 'react';
import '../forms.css';
import {connect} from "react-redux";
import {addCity} from "../actions/actions";
import createStore from '../Redux/create';
import axios from "axios";
import {token} from '../index'

import Spinner from "./Spinner";
import uuid from 'uuid'



class Formulario extends Component {
    constructor(props) {
        super(props);
        this.count =0;
        this.state = {

            name: 'Madrid',
            address: '',
            telephone: '',
            users:[],
            nom1:[],
            nom2:[]
        };




    }

    prev =(e)=>{
        e.preventDefault()
    }


    regDatos = (e) => {


        console.log('preubaaaa'+ this.state.users)

        if(this.state.users == ''){
           alert('añade 2 usuarios')
        }

        this.setState({


            nom1:[],
            nom2:[]

        });
    }

    introDatos = (event) =>
    {
        const {value, name} = event.target;

        this.setState({
            [name]: value
        });



    }



    add =(nombre)=>{


        var select = document.getElementById('select');
        select.addEventListener('change',
            function(){
                var selectedOption = this.options[select.selectedIndex];
                //e.unshift(selectedOption.value)
                nombre.unshift(selectedOption.value)
                console.log(selectedOption.value + ': ' + selectedOption.text);
            });

    }
    add1 =(nombre)=>{

        var select = document.getElementById('select1');
        select.addEventListener('change',
            function(){
                var selectedOption = this.options[select.selectedIndex];
              // e.unshift(selectedOption.value)
                nombre.unshift(selectedOption.value)
                console.log(selectedOption.value + ': ' + selectedOption.text);
            });

    }

    añadir=()=>{
        if(this.state.nom1[0] === undefined || this.state.nom2[0] === undefined){

            this.state.nom1[0] = 'No hay ningun usuario'
            this.state.nom2[0] = 'No hay ningun usuario'
            this.state.users.unshift({id:this.state.nom1[0]}, {id:this.state.nom2[0]})
            alert(`no has añadido ningun usuario`)
        }else{

        this.state.users.unshift({id:this.state.nom1[0]}, {id:this.state.nom2[0]})
        alert(`Has añadido a ${this.state.nom1[0] + ' y ' + this.state.nom2[0] } en tu equipo`)}

    }
    eleiminar=()=>{
        console.log('333333333'+ this.state.nom1[0])
        console.log('444444444444'+ this.state.nom2[0])
        alert(`Has eliminado a ${this.state.nom1[0] + ' y ' + this.state.nom2[0] } de tu equipo`)
        this.state.users.shift()
        this.state.users.shift()


    }


    createCity = (state) => {


        var config = {
            headers: {'Authorization':  token}
        };

        if (state.users=== null){

           alert('pollitos')
        }else
        axios.post('http://52.213.25.226:3030/city', state, config)
            .then(res => {
                this.props.addCities(this.state)
                var result=  console.log('res.data' +res.data);
            })
            .catch(err => console.log('No ha funcionado', err));

    }

    render() {

        const users =  this.props.obj.map((usr) => {

                return (
                    <option name="users" value={usr._id}  >{usr.name}</option>)})
        return (


            <div className={"mb-3"}>
                {console.log('siiii' + this.props.objs)}
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
                                <h3 className={"col-sm-2 text-left text-light"}>Adress</h3>
                                <input
                                    className={"stilo ml-3 col-sm-5"}//DIRECCION
                                    type="text"
                                    name={"address"}
                                    value={this.state.address}
                                    placeholder={"Full Adress"}
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
                                    placeholder="Phone" required={true}/>
                            </div>
                        </div>
                        <div className={"divleft"}>
                            <h3 className={"col text-left text-light mt-2"}> Demium team</h3>
                            <div className={"row form-group"}>
                            </div>
                            <div className={"form-group row"}>
                                <h5 className={"col-sm-2 text-left text-light ml-3"}>Team</h5>
                                <select required className={'select'} id={'select'} onClick={()=>this.add(this.state.nom1)} >
                                    {users}
                                </select>
                                <select required className={'select'} id={'select1'} onClick={()=>this.add1(this.state.nom2)} >
                                    {users}
                                </select>
                                <button className="col-sm-2 ml-4 btn btn-primary"  onSubmit={ ()=>this.prev()}
                                        onClick={()=> this.añadir()} >
                                    <h6>Add</h6>
                                </button>
                                {console.log('item'+ this.state.id)}
                                {console.log('item'+ this.state.users)}
                                <button className="col-sm-2 ml-4 btn btn-danger" onClick={()=>this.eleiminar()}>
                                    <h6>Remove</h6>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={"text-right col-dm-2"}>
                        <button onSubmit={this.regDatos} type="submit"  onClick={()=>{this.createCity(this.state)
                        }}className="col-sm-2 ml-4 btn btn-primary">
                            <h5>Create</h5>
                        </button>
                    </div>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state ,props) => {
    return {
        obj: state.user,
        objs: state.movNom
    }

}

const dispastchToProps=(dispatch,props )=>{
    return{
        addCities:(stado)=>dispatch(addCity(stado)),


    }
}

export default connect(mapStateToProps,dispastchToProps)(Formulario);