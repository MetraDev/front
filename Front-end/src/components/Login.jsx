import React, {Component} from 'react';
import '../master.css';
import axios from "axios";
import { withRouter } from 'react-router-dom';



class Login extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);

        this.state = {
            email: "",
            password: "",
            strategy: "local",
        }

    }
    routeChange(){
        let path = `/cities`;
        this.props.history.push(path);
    }


    regDatos = (e) => {

        e.preventDefault()


    }


    componentDidMount() {

    axios.post('http://52.213.25.226:3030/authentication/',this.state)
        .then(res => {
            localStorage.setItem('accesToken', res.data.accessToken)
            this.routeChange()


        })
        .catch(err => console.log('No ha funcionado salud', err))

}


    introDatos = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    }




render() {
       return(


           <div lang="en" dir="ltr">
               <title className={'h1'}>From Login | Metra </title>
                   <link rel="stylesheet" href="../master.css"/>
                   <body>
           <div className="login-box">
                   <h1 className={'h1'}>Login here</h1>
                   <form onSubmit={this.regDatos} >
                       <label className={"label"} htmlFor="username">Username</label>
                       <input type="text" placeholder="Enter Username" name={ "email"} value={this.state.email} onChange={this.introDatos}/>
                           <label className={"label"} htmlFor="password" >Password</label>
                           <input type="password" placeholder="Enter Password" name={"password"} value={this.state.password} onChange={this.introDatos}/>
                               <input type="submit"  onClick={()=> this.componentDidMount()} value="Log In"/>
                                   <a href="location">Lost your password</a>
                       <br/>        <a href="#">Don´t have an account?</a>
                   </form>
           </div>
           </body>
           </div>


    )
    }
    }


export default withRouter(Login);

