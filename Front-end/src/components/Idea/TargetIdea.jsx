import React, {Component} from 'react';
import '../../taridea.css';
import { viewIdeass, deleteIdea} from "../../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import uuid from "uuid";
import {token} from "../../index";
import axios from "axios";


class TargetIdea extends Component {
    constructor(props) {
        super(props);
        this.state = {

            name: 'Madrid',
            businessModelId: 'España',
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
            teamId: '',
            businessModel:[]
        }
    }



    deleteI = (id) => {

        var config = {

            headers: {'Authorization': token}
        };
        console.log('deletei' ,id)
        axios.delete(`http://52.213.25.226:3030/idea/${id}`, config)
            .then(res => {

                this.props.deleteIdeass(id)
            })
            .catch(err => console.log('No ha funcionado delete', err));
    }



    render() {
        let todo = this.props.idea.map((idea) => {
            return (
                <div className={" col-md-4 mb-3"}>
                    <div className={"carder card  mt-4"}>
                        <div className={""}>
                            <div className={" card-header bg-primary text-right"}>
                                <button className={'text-danger'} onClick={()=> this.deleteI(idea._id)}>X</button>
                            </div>
                        </div>
                        <div className={"card-Body"}>
                            <div className={" form-group row"}>
                                <h6 className={"typeee text-left mt-3 ml-4"}>Type</h6>
                                <h6 className={" text-left mt-3 ml-3"}>{idea.businessModelId.name}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb name text-left ml-4"}>Name</h6>
                                <h6 className={" text-left ml-3"}>{idea.name}</h6>
                            </div>
                            <h5 className={"typeeeb text-left ml-2"}>Description</h5>
                            <p className={"final text-left ml-2"}>{idea.description}</p>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Headquarter</h6>
                                <h6 className={" text-left ml-3"}>{idea.teamId === undefined ?  '' :idea.teamId.cityId === undefined ? '' :idea.teamId.cityId.name }</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Team</h6>
                                <h6 className={" text-left ml-3"}>{idea.teamId === undefined ?  '' :idea.teamId.name }</h6>
                            </div>
                            <p className={"text-right mr-3"}>
                                <button className={"text-rigth btn btn-primary mr-10"} >
                                    <Link to={"/ideaspag"}  onClick={()=>{this.props.view( idea)}}> <h5 className={"text-light"}>{'VIEW'}</h5></Link>

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
        idea: state.viewAdd
    }
}
const dispatchToProps=(dispatch,props )=>{
    return{
        view:(idea)=>dispatch(viewIdeass(idea)),
        deleteIdeass:(id)=>dispatch(deleteIdea(id)),

    }
}

export default connect( mapStateToProps,dispatchToProps)(TargetIdea);



