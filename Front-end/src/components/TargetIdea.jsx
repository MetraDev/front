import React, {Component} from 'react';
import {idea} from '../idea.json';
import '../taridea.css';
import { viewIdeass} from "../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import uuid from "uuid";


class TargetIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:uuid(),
            idea
        }
    }




    render() {
        let todo = this.props.obj.map((idea) => {
            return (
                <div className={" col-md-4 mb-3"}>
                    <div className={"carder card  mt-4"}>
                        <div className={""}>
                            <div className={" card-header bg-primary text-left"}>
                                <h5 className={"text-white"}>{idea.title}</h5>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <div className={" form-group row"}>
                                <h6 className={"typeee text-left mt-3 ml-4"}>Type</h6>
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
                                <button className={"text-rigth btn btn-primary mr-10"} >
                                    <Link to={"/ideaspag"}  onClick={()=>{this.props.view({
                                        id:uuid(),
                                        title:idea.title,
                                        type:idea.type,
                                        Nombre:idea.Nombre,
                                        Description:idea.Description,
                                        Headquarter:idea.Headquarter,
                                        Team:idea.Team})}}> <h5 className={"text-light"}>{'VIEW'}</h5></Link>

                                </button>
                            </p>
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
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        obj: state.viewAdd
    }
}
const dispastchToProps=(dispatch,props )=>{
    return{
        view:(stado)=>dispatch(viewIdeass(stado)),

    }
}

export default connect( mapStateToProps,dispastchToProps)(TargetIdea);
