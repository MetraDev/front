import React, {Component} from 'react';

class Spinner extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className={""}>
            <h4 className={"col text-left text-light mt-4"}> {this.props.titulo}</h4>
        <div className={"form-group row"}>
            <h6 className={"col-sm-2 text-left text-light ml-3"}>{this.props.referencia}</h6>
            <select
                name="title"
                className="col-sm-3 form-control bg-danger "

                onChange={this.introDatos}>
                <option>{this.props.opcion1}</option>
                <option>{this.props.opcion2}</option>
            </select>
        </div>
            </div>)

    }

}
export default Spinner;