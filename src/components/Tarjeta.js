import React, {Component} from 'react';
import {todo} from '../todo.json';
import Formulario from './Formulario'
import '../taridea.css';
import {connect} from "react-redux";
import axios from "axios";
import user from "../pages/user";
import {deleteCity, addCity, modCity} from "../actions/actions";

class Tarjeta extends Component {
    constructor(props,envios,respu) {
        super(props);

        this.envios = 1;
        this.respu=[]
        this.state = {
            nombre:''
        }



 console.log(this.props.obj)
    }

    deleteC = (id) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDk0NjQ1NDcsImV4cCI6MTU0OTU1MDk0NywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzliY2U4ZTUtYzE1Mi00ZmY2LWIwYWMtZWJhMWI5YzIwNjVlIn0.flTOmy-eaQC97_Wzw0SA6-aF-56DbNhoQSNb82kIuHg"
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

          })
          .catch(err => console.log('No ha funcionado', err));

  }


  encontrarUs=({...id},dos)=>{


      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzU4MjYyMDgxOGYyYzI0M2FlYTNjY2UiLCJpYXQiOjE1NDk0NjQ1NDcsImV4cCI6MTU0OTU1MDk0NywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzliY2U4ZTUtYzE1Mi00ZmY2LWIwYWMtZWJhMWI5YzIwNjVlIn0.flTOmy-eaQC97_Wzw0SA6-aF-56DbNhoQSNb82kIuHg"
      var config = {
          headers: {'Authorization':  token}}



      axios.get(`http://52.213.25.226:3030/user/${id.id}`, config)
          .then(res => {
              console.log('depruebaaa'+res)
              console.log('elidddd'+ res.data.name)

              if (res.data._id === id.id){
                  for(let index in this.props.obj ){
                      console.log('segundo paso'+ this.props.obj[index]._id)
                      if (this.props.obj[index]._id === dos){
                          this.props.modCityy(dos,res.data.name)
                        this.props.obj[index].users[0].id= res.data.name
                          console.log('tercero paso'+  this.props.obj[index].users[0].id)
                      }
                  }


              }
              console.log('el objeto nom es'+  this.state.nombre)


          })
          .catch(err => console.log('No ha funcionado', err));

//= this.encontrarUs(todo.users[0].id)
      //todo.users[0].id = this.state.nombre

  }




    render() {
        this.envios++
        const todo = this.props.obj.map((todo) => {
            return (

                <div className={"col-md-4"}>
                    <div className={"carder card mt-4"}>
                        <div className={"bg-dark"}>
                            <div className={"card-header text-left"}>
                                <h5 className={"text-white"}>{todo.name}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <h5 className={"text-left text-primary ml-3 mt-2"}>{'Adress'}</h5>
                            <p className={"text-left ml-3"}>{todo.address }</p>
                            <p className={"text-left ml-3"}>{todo.description}</p>
                            <p className={"text-left ml-3"}>{'Phone: ' + todo.telephone}</p>
                            <p className={"text-left ml-3"}>{this.envios < this.props.obj.length ? this.encontrarUs(todo['users'][1],todo._id): console.log('gorilita')}</p>
                            <p className={"text-left ml-3"}>{todo.users[1].id }</p>
                            <p className={"text-left ml-3"}>{todo.users[0].id }</p>
                            <p className={"text-right mr-3"}>
                            <button className={"text-rigth badge badge-primary mr-10"} onClick={()=> {
                                this.props.deleteCityy(todo._id)
                                this.deleteC(todo._id)
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
                <div className={" mt-4"}>
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
        modCityy: (id,nom) => {
            dispatch(modCity(id,nom))
        }
    }
}
export default connect(mapStateToProps,dispastchToProps)(Tarjeta);