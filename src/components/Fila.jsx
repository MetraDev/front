import React, {Component} from 'react';
import {user} from '../user.json';
import '../file.css'
import FormUs from "./formUs";
import { connect } from 'react-redux';
import storage from "../storage";


class Fila extends Component {
    constructor(props) {
        super(props);


        this.state = {
            user
        }

    }


    render() {
        const user = this.props.obj.map((user) => {
                return (
                    <tr>
                        <td colSpan={"1"}>{user.name}</td>
                        <td colSpan={"1"}>{user.surname}</td>
                        <td colSpan={"1"}>{user.role}</td>
                        <td colSpan={"1"}>{user.headquarter}</td>
                    </tr>

                )
            }
        )

        return (
            <div>
                <table className={"table table-hover table-dark mt-3"}>
                    <thead className={"thead-dark  table-hover text-left"}>
                    <tr className={"stc"}>
                        <td className={"ml-4"}><h4>Users</h4></td>
                        <td colSpan={"4"} className={""}></td>
                    </tr>
                    <tr>
                        <th width="250" height="39"> Name</th>
                        <th width="250" height="39"> Surname</th>
                        <th width="250" height="39"> Role</th>
                        <th width="250" height="39"> Headquarter</th>
                    </tr>
                    {user}
                    </thead>

                </table>
                <FormUs  />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        obj: state.todo
    }
}
export default connect(mapStateToProps)(Fila);
