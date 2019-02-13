import React, {Component} from 'react';
import Fila from './Fila'

class User extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <div className={"card-header"}>
                <Fila/>
            </div>
        )
    }
}

export default User;