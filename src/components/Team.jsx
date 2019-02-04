import React, {Component} from 'react';
import '../team.css'
import { addTeam} from "../actions/actions";
import {connect} from "react-redux";
import  {Link} from 'react-router-dom'

class Team extends Component {
    constructor(props) {
        super(props);
        this.state={

            idea:'',
            ciudad:'',
            titleceo:'CEO',
            titlecto:'CTO',
            titlecmo:'CMO',
            ceo:'angel',
            cto:'albert',
            cmo:'ana'
        }

    }

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
    remove =(id)=>{
       // const {id} = ev.target;
        console.log(id);
        switch (id) {
            case 1:
                this.setState({
                    ceo:'',
                    titleceo:''

                })
                break;
            case 2:
                this.setState({
                    cto:'',
                    titlecto:''

                })
                break;
            case 3:
                this.setState({
                    cmo:'',
                    titlecmo:''

                })
                break;
            default:
                this.setState({ceo:'',cto:'',cmo:''})

        }
    }

    edit=(n)=>{
        switch (n) {
            case 1:
                let  res1 = prompt('Pon el nombre')
                this.setState({ceo:res1})
                break;
            case 2:
               let  res2 = prompt('Pon el nombre')
                this.setState({cto:res2})
                break;
            case 3:
                let  res3 = prompt('Pon el nombre')
                this.setState({cmo:res3})
                break;
            default:
                alert('nooooooooooooo')
        }


    }

    render() {
        return (
            <div className={"card-header text-light"}>
                <nav className={"navbar navbar-dark mt-3"}>
                    <h2 className={"text-white"}>Edit team</h2>
                </nav>
                <form className={"card-header bg-dark"} onSubmit={this.regDatos}>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Idea </h4>
                        <p className={"text-light "}>Plese select the idea that the team will be developing</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={" col-sm-2"}>Selected idea</h6>
                        <p className={"text-primary col-sm-2"}>Super App</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2 text-left "}>Change idea</h6>
                        <select className={"col-sm-2 form-control text-left "}
                                name={""}
                                value={""}
                                onChange={""}>
                            <option>Saas</option>
                            <option>Ideas</option>
                            <option>Unicorn</option>
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores"}>Headquarter </h4>
                        <p className={"text-light "}>Plese select the headquarter where the team is located</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={"col-sm-2"}>Selected city</h6>
                        <p className={"col-sm-2 text-primary"}>Madrid</p>
                    </div>
                    <div className={"form-gruop row text-left"}>
                        <h6 className={" col-sm-2 text-left"}>Change city</h6>
                        <select className={"col-sm-2 form-control text-left "}
                                name={""}
                                value={""}
                                onChange={""}>
                            <option>Madrid</option>
                            <option>Bilbao</option>
                            <option>Valencia</option>
                        </select>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}>SELECT</button>
                    </div>
                    <div className={"text-left"}>
                        <h4 className={"colores mt-3"}>Team members </h4>
                        <p className={"text-light "}>Plese select the team members and choose their roles </p>
                    </div>
                    <h5 className={"colores text-left"}>Selceted members </h5>
                    <div className={"form-group row"}>
                        <p  className={"col-sm-2  text-left"}>{this.state.ceo}</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.state.titleceo}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(1)}>Edit</button>
                        <button id={1} className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(1)}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2 text-left"}>{this.state.cto}</p>
                        <h5 className={"col-sm-2 text-primary text-left"}>{this.state.titlecto}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(2)}>Edit</button>
                        <button className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(2)}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2  text-left"}>{this.state.cmo}</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>{this.state.titlecmo}</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"} onClick={()=>this.edit(3)}>Edit</button>
                        <button  className={"col-sm-1 ml-4 btn  btn-danger text-light"} onClick={()=>this.remove(3)}>Remove</button>
                    </div>
                    <div className={"text-right"}>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"} onClick={()=>this.props.addTeami(this.state)}>
                            <Link to={"/teamcard"}><h5 className={'text-light'}>Save</h5></Link>
                        </button>
                        <button className={"col-sm-2 ml-4 btn  btn-danger text-light"}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const dispastchToProps=(dispatch,props )=>{
    return{
        addTeami:(stado)=> dispatch (addTeam(stado)),

    }
}

export default connect(null,dispastchToProps)(Team);