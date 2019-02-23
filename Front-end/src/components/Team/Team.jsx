import React, {Component} from 'react';
import '../../team.css'
import {addTeam, addUser, modIdea, modTar} from "../../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'
import {token} from '../../index'
import axios from "axios";

class Team extends Component {
    constructor(props) {
        super(props);


        this.state={

            name:this.props.obj.name,
            cityId:this.props.obj.cityId,
            users:this.props.obj.users,
            usersDemium: this.props.obj.cityId && this.props.obj.cityId.users,
            nom1:'',
            nom2:'',
            nom3:this.props.obj.name

        }

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
    añadirCity= (nom) =>{
        this.state.nom2 = JSON.parse(nom)
        console.log('el porque de las ocasas' , this.state.nom2)

        this.setState({cityId:this.state.nom2, usersDemium:this.state.nom2.users})
        console.log('el porque de las ocasas' , this.state.cityId)

    }

    añadirUser = (nom) =>{
        this.state.nom1 = JSON.parse(nom)


        if (this.state.users.some(item => this.state.nom1.name === item.name || this.state.nom1.roleId === item.roleId ))
        {alert('ya hay un role ')
        } else {

            this.setState({users:[...this.state.users ,this.state.nom1]})

        }}



    remove = name => {

        var config = {

            headers: {'Authorization':  token}
        }
        console.log('el remove' , name)
        this.setState({users:this.state.users.filter(item => item.name !== name.name)});
         name.telephone = 'No team'
        axios.put(`http://52.213.25.226:3030/user/${name._id}`, name, config)
            .then(res => {

                this.props.addUsers(res.data, res.data._id)
                }

            )



    };

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

    put=(id,stado)=>{
        var config = {

            headers: {'Authorization':  token}}
            console.log('el estado'+this.state)

        console.log('this.state.users', this.state.users)
        const promises = this.state.users.map(item=>{
            item.telephone = this.state.name
            return axios.put(`http://52.213.25.226:3030/user/${item._id}`, item, config)


        })
        console.log('la promseeeeee' ,promises)
        Promise.all(promises).then(values => {

            let res = values.map ((item,index) => item && item.data)
            console.log('dataas promises' ,res,res._id )
            res.map(item =>{  return this.props.addUsers(item,  item._id)})
            // [3, 1337, "foo"]
        });



        axios.put(`http://52.213.25.226:3030/team/${id}`, this.state, config) // DESCARGAMOS DATOS DEL USUARIO
            .then(res => {
                    // si los el ide del usuario coincide con el de la ciudad/user

                res.data.cityId = this.state.cityId
                this.props.addTeami(res.data,res.data._id)


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

        const ideas = this.props.idea.filter(item =>{if (item.teamId === undefined) return item})
        return (
            <div className={"card-header text-light"}>
                <nav className={"navbar navbar-dark mt-3"}>


                    <h2 className={"text-white"}>Edit team</h2>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    { console.log(this.props.obj)}
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Idea </h4>
                        <p className={"text-light "}>Please select the idea that the team will be developing</p>
                    </div>
                    <div className={"form-group row text-left"}>
                        <h6 className={" col-sm-2"}>Selected idea</h6>
                        <p className={"text-primary col-sm-2"}>{this.props.obj.name}</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2 text-left "}>Change idea</h6>
                        <select className={'select from-control'} id={'select'}
                                name={'nom3'}
                                onChange={this.introDatos} >
                            <option selected={'true' }  disabled>Selecciona una idea</option>
                            {ideas.map((idea) => {
                                return (
                                    <option name={'nom3'} value={JSON.stringify(idea)}>{idea && idea.name}</option>)})}
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=> this.añadirIdea(this.state.nom3)}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Headquarter </h4>
                        <p className={"text-light "}>Please select the headquarter where the team is located</p>
                    </div>
                    <div className={"form-group row text-left"}>
                        <h6 className={"col-sm-2"}>Selected city</h6>
                        <p className={"col-sm-2 text-light"}>{this.state.cityId && this.state.cityId.name}</p>
                    </div><div className={"form-group row text-left"}>
                        <h6 className={"col-sm-2"}>Change city</h6>
                        <select className={'select'} id={'select'}
                                name={'nom2'}
                                onChange={this.introDatos} >
                            <option selected={'true' }  disabled>Selecciona una ciudad</option>
                            {this.props.city.map((city) => {
                                return (
                                    <option name={'nom2'} value={JSON.stringify(city)}>{city.name}{': '}{city.address}</option>)})}
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}
                                onClick={(e)=>{e.preventDefault()
                                    this.añadirCity(this.state.nom2)}}>
                            <h6>SELECT</h6>
                            {console.log('nom2' +this.state.nom2)}
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
                        <option selected={'true' }  disabled>Selecciona un usuario</option>
                        {this.props.user.map((usr) => {
                            return (
                                <option name={'nom1'} value={JSON.stringify(usr)}>{usr.name} {':' + usr.roleId}</option>)})}
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
                        {console.log('los users' ,this.props.obj )}
                        {this.state.users && this.state.users.map(added =>{return(
                            <div>
                                {added && added.name}{added && added.roleId}

                                <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.remove(added)}>Remove</button>
                            </div>)})}
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Demium Team</h4>
                        <p className={"text-light "}>Please select the team members and choose their roles </p>
                    </div>
                    <div>
                        {console.log('los users' ,this.props.obj )}
                        {this.state.usersDemium && this.state.usersDemium.map(added =>{return(
                            <div>
                                {added && added.name}{added && added.roleId}
                            </div>)})}
                    </div>
                    <div className={"text-right"}>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=>this.put(this.props.obj._id,this.state)}>
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
        user: state.user.filter(item => { if( item.roleId === "DP" || item.roleId === "TM" ){console.log(item.roleId)} else return item}),
        idea: state.viewAdd

    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        addTeami:(stado,id)=> dispatch (modTar(stado,id)),
        modIdeas:(stado,id)=>dispatch(modIdea(stado,id)),
        addUsers:(stado,id)=>dispatch(addUser(stado,id)),

    }
}

export default connect(mapStateToProps,dispastchToProps)(Team);