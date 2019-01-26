import React, {Component} from 'react';
import {idea} from '../idea.json';
import '../taridea.css';


class TargetIdea extends Component {
    constructor() {
        super();
        this.state = {
            url:'',
            idea
        }
    }

    insertarForm = (todos) => {
        this.setState({
            todo: [...this.state.todo, todos]
        })
    }
    getPage=()=>{
        switch(this.state.url) {
            case '/formidea':

            default:
                return 'No esta bien'
        }
    }

    render() {
        let todo = this.state.idea.map((idea) => {
            return (
                <div className={"col-md-4 mb-3"}>
                    <div className={"card mt-4"}>
                        <div className={"fondo"}>
                            <div className={"linea card-header bg-primary text-left"}>
                                <h5 className={"text-white"}>{idea.title}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <div className={" form-group row"}>
                                <h6 className={"typeeeb text-left mt-3 ml-4"}>Type</h6>
                                <h6 className={" text-left mt-3 ml-3"}>{idea.type}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb name text-left ml-4"}>Name</h6>
                                <h6 className={" text-left ml-3"}>{idea.Nombre}</h6>
                            </div>
                            <h5 className={"typeeeb text-left ml-2"}>Description</h5>
                            <p className={"final text-left ml-2"}>{idea.Description}</p>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Headquarter</h6>
                                <h6 className={" text-left ml-3"}>{idea.Headquarter}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Team</h6>
                                <h6 className={" text-left ml-3"}>{idea.Team}</h6>
                            </div>
                            <p className={"text-right mr-3"}>
                            <button className={"text-rigth btn btn-primary mr-10"} onClick={()=>this.setState({url:'/formidea'})}>
                      <h5 className={"text-light"}>{'VIEW'}</h5>
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
            </div>)

    }
}

export default TargetIdea