import React, {Component} from 'react';
import '../../taridea.css';
import { viewIdeass} from "../../actions/actions";
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

    componentDidMount() {

        var config = {
            headers: {'Authorization':  token}
        };
        axios.get('http://52.213.25.226:3030/businessModel', config)
            .then(res => {
                console.log(''+res.data.data)
                 this.props.obj = this.props.obj.map(idea =>

                 res.data.data.find(bus =>bus._id === idea.businessModelId? idea.businessModelId = bus.name:''))

            })
            .catch(err => console.log('No ha funcionado users', err));


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
                                <h6 className={" text-left mt-3 ml-3"}>{idea.businessModelId}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb name text-left ml-4"}>Name</h6>
                                <h6 className={" text-left ml-3"}>{idea.name}</h6>
                            </div>
                            <h5 className={"typeeeb text-left ml-2"}>Description</h5>
                            <p className={"final text-left ml-2"}>{idea.description}</p>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Headquarter</h6>
                                <h6 className={" text-left ml-3"}>{idea.Headquarter}</h6>
                            </div>
                            <div className={"form-group row"}>
                                <h6 className={"typeeeb text-left ml-4"}>Team</h6>
                                <h6 className={" text-left ml-3"}>{idea.teamId}</h6>
                            </div>
                            <p className={"text-right mr-3"}>
                                <button className={"text-rigth btn btn-primary mr-10"} >
                                    <Link to={"/ideaspag"}  onClick={()=>{this.props.view({
                                        id:uuid(),
                                        title:idea.title,
                                        type:idea.type,
                                        name:idea.name,
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