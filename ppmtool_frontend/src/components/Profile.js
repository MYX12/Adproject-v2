import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../actions/MemberService";
import AuthenticationService from "./UserManagement/AuthenticationService";
import { updateUser } from "../actions/sercurityActions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      id: "",
      userName: "",
      password: "",
      contact: "",
      email: "",
    };
    this.refreshUsers = this.refreshUsers.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.refreshUsers();
  }
  refreshUsers() {
    let username = AuthenticationService.getLoggedInUserName();
    MemberService.retriveUserByName(username).
      then((Response) => {
        this.setState({ user: Response.data });
      });

  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    let username = AuthenticationService.getLoggedInUserName();
    e.preventDefault();

    const UpdateUser = {
      id: this.state.id,
      userName: this.state.userName,
      password: this.state.password,
      contact: this.state.contact,
      email: this.state.email,
    };

    // console.log(UpdateProjectTask);
    this.props.UpdateUser(
      updateUser,
      this.props.history,
      username
    );
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
          <form onSubmit={this.onSubmit}>
            <div className="center">
              <div className="form-group">
                username:
                <input
                  type="text"
                  value={this.state.user.userName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                email:
                <input
                  type="text"
                  value={this.state.user.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                password:
                <input
                  type="text"
                  value={this.state.user.password}
                  onChange={this.onChange}
                />
              </div>
              
              <div className="form-group">
                contact:
                  <textarea
                    placeholder="Acceptance Criteria"
                    name="contact"
                    value={this.state.user.contact}
                    onChange={this.onChange}
                  />
                </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block mt-4"
            />

          </form>

        </div>
      </>
    );
  }
}

export default Profile;
