import React, { Component } from "react"
import AuthenticationService from "./AuthenticationService"
import MemberService from "../../actions/MemberService"
import {Redirect, withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom';



class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Users: [],
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }
    retrieveUsers() {
        MemberService.retriveAllUsers().then((response) => {
          // console.log(response)
          this.setState({ Users: response.data });
        });
      }
    loginClicked() {
        this.retrieveUsers()
        this.state.Users.map(user => {
            console.log(user)
            if (this.state.username === user.userName && this.state.password === user.password) {
                AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
                let name = AuthenticationService.getLoggedInUserName();
                this.setState({ showSuccessMessage: true })
                this.setState({ hasLoginFailed: false })
                console.log("login!")
                console.log(name);
              //  this.context.histoty.push("/dashboard")
            }
            else {
                this.setState({ hasLoginFailed: true })
                console.log('falied')
            }
        }
        );
        // if(this.state.username==='' && this.state.password==='')
        // {
        //     AuthenticationService.registerSuccessfulLogin();
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})
        // }
        // else
        // {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        //     console.log('falied')
        // }
    }


    handleUsernameChange(event) {
        this.setState({ username: event.target.value })
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }
    render() {

        return (
            <div>
                <h1 className="center">Login</h1>            
                <div className="container center">
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} className="center"/>
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}></input>
                    password: <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
                    <button onClick={this.loginClicked}>Login</button>
                </div>
                <div className="container center">
                    Don't have an account?
                   <Link to='/register'> create one! </Link>
                </div>
                {this.state.showSuccessMessage && (
                    <div>
                        <Redirect to='/dashboard/'></Redirect>
                    </div>
                )}
            </div>
        )

    }
}
function ShowInvalidCredentials(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }
    return null;
}






export default Login;