import React, {Component} from 'react';

import '../forms.css';

 class  FormAll extends Component {
    constructor(props) {
        super(props);
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

     introDatos = (event) => {
         const {value, name} = event.target;
         console.log(value, name);
         this.setState({
             [name]: value
         });
     }

    render() {
        return (
            <form onSubmit={(e) => this.props.onsubmit(e, 'nombreForm')}>

                {this.props.children.map( child => <child onChange={this.onChange} />)}

                <input type="submit" value={'Enviar'}/>
            </form>
        )
    }
}
export default FormAll;


