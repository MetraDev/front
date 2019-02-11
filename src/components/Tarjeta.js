import React, {Component} from 'react';
import {todo} from '../todo.json';
import Formulario from './Formulario'
import '../taridea.css';
import {connect} from "react-redux";
import axios from "axios";
import {token} from '../index'
import {deleteCity, addCity, modCity} from "../actions/actions";

class Tarjeta extends Component {
    constructor(props,envios,respu) {
        super(props);

        this.envios = 0;
        this.state = {
            nombre:''
        }


 console.log(this.props.obj)
    }

    deleteC = (id) => {

        var config = {

          headers: {'Authorization':  token}
      };
        axios.delete(`http://52.213.25.226:3030/city/${id}`, config)
          .then(res => {
              //let obj =JSON.stringify(res.data.data)
              let arr= res.data.data;
              for (let index in arr){
                  this.props.obj.push(index)
              }
              this.props.deleteCityy(id)

          })
          .catch(err => console.log('No ha funcionado delete', err));
    }

  encontrarUs=({...id},dos,indx)=>{ // id del usuario, id de la tarjeta

        var config = {
          headers: {'Authorization':  token}}

        if(id.id === undefined){
          console.log('el ide es undefined')
      }else

      axios.get(`http://52.213.25.226:3030/user/${id.id}`, config) // DESCARGAMOS DATOS DEL USUARIO
          .then(res => {
              if (res.data._id === id.id){             // si los el ide del usuario coincide con el de la ciudad/user
                  for(let index in this.props.obj ){
                      if (this.props.obj[index]._id === dos){           // si el id de la tarjeta(obj) es igual que el segundo parametro
                          this.props.modCityy(dos,res.data.name,indx)
                                                                                //modificamos el cityuser por el nombre de user
                      }
                  }
              }
          }
          )
          .catch(err => console.log('No ha funcionado traer', err));
    }




    render() {
        this.envios++
        const todo = this.props.obj.map((todo) => {
            return (

                <div className={"col-md-4"}>
                    {console.log('eltodooo' +todo)}
                    <div className={"carder card mt-4"}>
                        <div className={"bg-dark"}>
                            <div className={"card-header text-left"}>
                                <h5 className={"text-white"}>{todo.name}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <h5 className={"text-left text-primary ml-3 mt-2"}>{'Adress'}</h5>
                            <p className={"text-left ml-3"}>{todo.address}</p>
                            <p className={"text-left ml-3"}>{
                                this.envios < this.props.obj.length+1?   // ejecutamos un metodo para sacar el monbre de los usuarios
                                this.encontrarUs(todo.users[1],todo._id,1)
                                :console.log('no fun')}</p>
                            <p className={"text-left ml-3"}>{'Phone: ' + todo.telephone}</p>
                            <p className={"text-left ml-3"}>{
                                this.envios < this.props.obj.length+1 ?     // ejecutamos un metodo para sacar el monbre de los usuarios
                                    this.encontrarUs(todo.users[0],todo._id,0)
                                    :console.log('no fun')}</p>
                            <p className={"text-left ml-3"}>{ todo.users[0].id || todo.users[0]}</p>
                            <p className={"text-left ml-3"}>{ todo.users[1].id ||  todo.users[1]}</p>
                            <p className={"text-right mr-3"}>
                            <button className={"text-rigth badge badge-primary mr-10"} onClick={()=> {this.deleteC(todo._id)
                            }} >
                      <h5 className={"text-light"} >{'VIEW'}</h5>
                            </button></p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className={"container"}>
                <div className={"row mt-4"}>

                    {todo}
                </div>
                <div className={"mb-6"}>
                    <Formulario insertAll={this.insertarForm}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state ) => {
    return {
        obj: state.city
    }

}

const dispastchToProps=(dispatch,props )=>{
    return {
        deleteCityy: (id) => dispatch(deleteCity(id)), // la primera son los props con los que se le llama y la segunda el metodo d Actions
        modCityy: (id,nom,indx) => {
            dispatch(modCity(id,nom,indx))
        }
    }
}
export default connect(mapStateToProps,dispastchToProps)(Tarjeta);