import React, { Component } from 'react';

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    onChange = (ev, formName) => {
        const { value, name } = ev.target;
        this.setState( (prevState) => {
            return {
                ...prevState,
                [formName]: {
                    ...prevState[formName],
                    [name]: value
                }
            }
        })
    }
    render = () => (
        <form onSubmit={(e) => this.props.onsubmit(e,"formu" )}>

            {this.props.children.map( child => <child onChange={this.onChange} />)}

            <input type="submit" value={'Enviar'}/>
        </form>
    )
}

class Empleo extends Component {
    constructor(props){
        super(props);
        this.state={}
    }

    onsubmit = (ev) => {
        ev.preventDefault();
        const objForm = this.state[ev.target.id];
        this.setState({[ev.target.id]: {}})
    }
    getFormState = (formId) => {
        return this.state[formId];}


    render=()=>{
        return(
            <div>
                <Formulario id={"formu"}  onSubmit={this.onsubmit}>
                    <input type={'text'} name={'nombre'}/>
                </Formulario>

                <Formulario onsubmit={this.onsubmit}>
                    <input type={'text'} name={'city'}/>
                </Formulario>
            </div>)

    }
}

export default Empleo;