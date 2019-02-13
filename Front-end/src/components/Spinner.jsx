import React, {Component} from 'react';
import {connect} from "react-redux";
import createStore from '../Redux/create';

class Spinner extends Component{

    constructor(props){
        super(props)
        this.state={
            id:'p',
        users:[]
        }
    }


    introDatos (event)
    {
        const {value, name} = event.target;
        const store = createStore();
        store.dispatch({type:"@ENV-->NOM", id:value})


    }
    regDatos =()=>
    {
        const store = createStore();


                var respo= store.getState().res
            console.log('estooooooooo'+ this.props.user)





    }

    pus (){
        this.state.users.push({id:this.state.id})
    }
    render() {
        const todo = this.props.obj.map((name) => {
            console.log('spinner'+ this.props.obj)
            return (
                <option name="id" value={this.state.id} onClick={this.introDatos}>{name.id}</option>
            )})

        return(


    <div className={"form-group row"}>

    <select  >{todo }{console.log('children' +this.children)}</select>

    <button className="col-sm-2 ml-4 btn btn-primary" onClick={()=> this.pus()}>
        {this.regDatos()}
        <h6>Add</h6>
    </button>
    <button className="col-sm-2 ml-4 btn btn-danger">
        <h6>Remove</h6>
    </button>
    </div>



        )


        }


}
const mapStateToProps = (state, props ) => {
    return {
        obj: state.movNom,

    }

}


export default connect(mapStateToProps,null)(Spinner);