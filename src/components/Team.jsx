import React, {Component} from 'react';
import '../team.css'

class Team extends Component {
    constructor() {
        super();

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
                        <p className={"col-sm-2  text-left"}>Julia Hartz</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>CEO</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"}>Edit</button>
                        <button className={"col-sm-1 ml-4 btn  btn-danger text-light"}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2 text-left"}>Julia Hartz</p>
                        <h5 className={"col-sm-2 text-primary text-left"}>CTO</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"}>Edit</button>
                        <button className={"col-sm-1 ml-4 btn  btn-danger text-light"}>Remove</button>
                    </div>
                    <div className={"form-group row"}>
                        <p className={"col-sm-2  text-left"}>Julia Hartz</p>
                        <h5 className={"col-sm-2 text-primary text-left "}>CMO</h5>
                        <button className={"col-sm-1 ml-4 btn  btn-primary text-light"}>Edit</button>
                        <button className={"col-sm-1 ml-4 btn  btn-danger text-light"}>Remove</button>
                    </div>
                    <div className={"text-right"}>
                        <button className={"col-sm-2 ml-4 btn  btn-primary text-light"}>Save</button>
                        <button className={"col-sm-2 ml-4 btn  btn-danger text-light"}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Team;