import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../../actions/MemberService";
import AuthenticationService from "./AuthenticationService";
import { updateUser } from "../../actions/sercurityActions";
import PropTypes from "prop-types"
import classnames from "classnames";
import { connect } from "react-redux";
import { updateProjectTask } from "../../actions/backlogActions";

class EditProfile extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
        user:[],
        id: "",
        userName: "",
        password: "",
        email: "",
        contact: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
      }
    
      componentDidMount() {
        this.refreshUsers();
    
      }
      refreshUsers() {
        let nameofuser = AuthenticationService.getLoggedInUserName();
        MemberService.retriveUserByName(nameofuser).
          then((Response) => {
            this.setState({ user: Response.data });
          });
      }
    
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
      onSubmit(e) {
        e.preventDefault();
        let  nameofuser = AuthenticationService.getLoggedInUserName();
    
        const UpdateUser = {
          id:this.state.user.id,
          userName: this.state.userName,
          password: this.state.password,
          contact: this.state.contact,
          email: this.state.email,
        };
    
        // console.log(UpdateProjectTask);
        this.props.updateUser(
            UpdateUser, this.props.history, nameofuser
        );
        console.log(this.state.id)
        console.log(this.state.email)
        console.log(UpdateUser)
      }
    
      render() {
        return (
          <div className="add-PBI">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h4 className="display-4 text-center">Update Profile</h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      userName:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.userName}
                        value={this.state.userName}
                        name="userName"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Password:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.password}
                        value={this.state.password}
                        name="password"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      Email:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.email}          
                        value={this.state.email}
                        name="email"
                        onChange={this.onChange}
                      />
                    </div><div className="form-group">
                      Contact:
                      <input
                        className="form-control form-control-lg"
                        placeholder={this.state.user.contact}
                        value={this.state.contact}
                        name="contact"
                        onChange={this.onChange}
                      />
                    </div>
             <input
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

EditProfile.propTypes = {
    updateUser: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state => ({
    errors: state.errors,
  });

  export default connect(
    mapStateToProps,
    { updateUser }
  )(EditProfile);