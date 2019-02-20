import React, {Component} from 'react';
import '../../team.css'
import {fromTeam, modIdea} from "../../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import {token} from '../../index'
import axios from "axios";

class FormTeam extends Component {
    constructor(props) {
        super(props);


        this.state={
            name:'No hay idea',
            cityId:{},
            usersDemium:[],
            users:[],

        }

    }

    regDatos = (e) => {

        e.preventDefault();



    }
    añadirCity= (nom) =>{
        this.state.nom2 = JSON.parse(nom)
        console.log('el porque de las ocasas' , this.state.nom2)
        this.setState({cityId:this.state.nom2, usersDemium :this.state.nom2.users})
        console.log('el porque de las ocasas' , this.state.cityId)

    }

    añadirIdea= (nom) =>{
        this.state.nom3 = JSON.parse(nom)
        console.log('el porque de las ocasas' , this.state.nom3.name)

        let idea = this.state.nom3.name
        console.log('el porque de las ocasas' , idea)
        this.setState({
            ['name']: idea
        });
        console.log('el porque de las ocasas' , this.state.name)


    }

    añadirUser = (nom) =>{
        this.state.nom1 = JSON.parse(nom)


        if (this.state.users.some(item => this.state.nom1.name === item.name ))
        {alert('ya hay un role ')
        } else {

            this.setState({users:[...this.state.users ,this.state.nom1]})

        }}



    remove = name => {
        this.setState({users:this.state.users.filter(item => item.name !== name)});
    };

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

            //stado.cityId = stado.cityId._id
        console.log('el estado'+this.state.name)


        axios.post(`http://52.213.25.226:3030/team`, this.state, config) // DESCARGAMOS DATOS DEL USUARIO
            .then(res => {
                    // si los el ide del usuario coincide con el de la ciudad/user
                const idea = res.data.data

                        res.data.cityId = this.state.cityId

                    this.props.fromTeams(res.data)
                this.setState({nom3: {...this.state.nom3, teamId:res.data._id }})

                stado.nom3.teamId =res.data
                console.log(' stado.name.teamId =res.data._id', stado.nom3.teamId)
                axios.put(`http://52.213.25.226:3030/idea/${this.state.nom3._id}`, this.state.nom3, config) // DESCARGAMOS DATOS DEL USUARIO
                    .then(res => {
                            // si los el ide del usuario coincide con el de la ciudad/user
                            res.data.businessModelId = this.state.nom3.businessModelId
                            res.data.teamId = stado.nom3.teamId
                        res.data.teamId.cityId = stado.nom3.teamId.cityId

                            this.props.modIdeas(res.data,this.state.nom3._id)
                        }
                    )
                    .catch(err => console.log('No ha funcionado el put', err));


                }


            )
            .catch(err => console.log('No ha funcionado el put', err));
    }


    render() {

        if (this.state.err === true){

            return(<h1 className={'bg-danger text-dark'}>

                ERROR DE CARGA , VUELVA A INTENTARLO MAS TARDE


            </h1>)
        }else
        return (
            <div className={"card-header text-light"}>
                <nav className={"navbar navbar-dark mt-3"}>
                    <h2 className={"text-white"}>Edit team</h2>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Idea </h4>
                        <p className={"text-light "}>Please select the idea that the team will be developing</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2 text-left "}>Selected idea</h6>
                        <select className={'select from-control'} id={'select'}
                                name={'nom3'}
                                onChange={this.introDatos} >
                            {this.props.idea.map((idea) => {
                                return (
                                    <option name={'nom3'} value={JSON.stringify(idea)}>{idea.name}</option>)})}
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=> this.añadirIdea(this.state.nom3)}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Headquarter </h4>
                        <p className={"text-light "}>Please select the headquarter where the team is located</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={" col-sm-2 text-left"}>Selected city</h6>
                        <select className={'select'} id={'select'}
                                name={'nom2'}
                                onChange={this.introDatos} >
                            {this.props.city.map((city) => {
                                return (
                                    <option name={'nom2'} value={JSON.stringify(city)}>{city.name}{': '}{city.address}</option>)})}
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}
                                onClick={(e)=>{e.preventDefault()
                                    this.añadirCity(this.state.nom2)}}>
                            <h6>SELECT</h6>
                            {console.log('nameeeeeeeeeeee' +this.state.name)}
                            {console.log('nom2' +this.state.cityId)}
                            {console.log('stado' +this.state.usersDemium)}
                        </button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Team members </h4>
                        <p className={"text-light "}>Please select the team members and choose their roles </p>

                    </div>
                    <h5 className={"colores text-left"}>Selected members </h5>
                    <select className={'select'} id={'select'}
                            name={'nom1'}
                            onChange={this.introDatos} >
                        {this.props.user.map((usr) => {
                            return (
                                <option name={'nom1'} value={JSON.stringify(usr)}>{usr.name}</option>)})}
                    </select>
                    <button className="col-sm-2 ml-4 btn btn-primary"
                            onClick={(e)=>{e.preventDefault()
                                this.añadirUser(this.state.nom1)}}>
                        <h6>Add</h6>
                        {console.log('nom1' +this.state.nom1)}
                        {console.log('stado' +this.state.users )}
                        {console.log('el porque de las ocasas rendeeer' , this.state.cityId)}
                    </button>
                    <div>
                        {this.state.users.map(added =>{return(
                            <div>
                                {added.name}{added.roleId}

                                <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.remove(added.name)}>Remove</button>
                            </div>)})}
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Demium Team</h4>
                        <p className={"text-light "}>Please select the team members and choose their roles </p>
                    </div>
                    <div className={"form-group row"}>
                        <p > {this.state.usersDemium.map(usuario =>{return(
                            <p className={"text-left ml-3 "}>
                                {usuario && usuario.name} {usuario && usuario.roleId}
                            </p>)})}</p>
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
        city: state.city,
        user: state.user,
        idea: state.viewAdd


    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        fromTeams:(state)=> dispatch (fromTeam(state)),
        modIdeas:(stado,id)=>dispatch(modIdea(stado,id)),

    }
}

export default connect(mapStateToProps,dispastchToProps)(FormTeam);