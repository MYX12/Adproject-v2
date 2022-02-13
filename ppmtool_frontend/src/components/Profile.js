import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../actions/MemberService";
import AuthenticationService from "./UserManagement/AuthenticationService";

class Profile extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      user:[]
    };
    this.refreshUsers=this.refreshUsers.bind(this);

  }

  componentDidMount()
  {
    this.refreshUsers();
  }
  refreshUsers()
  {
    let username=AuthenticationService.getLoggedInUserName();
    MemberService.retriveUserByName(username).
    then((Response)=>
    {
      this.setState({user:Response.data});
    });

  }

  render() {
      return (
        <>
          <h1 className="center">Welcome!</h1>
        
          <div className="container-left">
            <div className="user-image">
                image
            </div>
            <div className="user-name">
                {this.state.user.userName}
            </div>
          </div>
          <div className="container-right">
          <form >
              <div className="center">
                  <div className="form-group">
                    username:
                    <input
                      type="text"
                      value={this.state.user.userName}
                    />
                  </div>
                  <div className="form-group">
                    email:
                    <input
                      type="text"
                      value={this.state.user.email}
                    />
                  </div>
                  <div className="form-group">
                    password:
                    <input
                      type="text"
                      value={this.state.user.password}
                    />
                  </div>
                </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4 btn-proflie"
                  />
                </form>
              
          </div>
        </>
      );
    }
  }
  
  export default Profile;
  