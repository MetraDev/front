import React, {Component} from 'react';

class Boton extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div className={"text-right col-dm-2"}>
                <button type="submit" className="col-sm-2 ml-4 btn btn-primary">
                    <h5>{this.props.nombre}</h5>
                </button>
            </div>
            )

    }

}
export default Boton;