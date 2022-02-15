import React, { Component } from "react";
import { Link } from "react-router-dom";
import MemberService from "../actions/MemberService";
import AuthenticationService from "./UserManagement/AuthenticationService";
import { updateUser } from "../actions/sercurityActions";
import PropTypes from "prop-types"
import classnames from "classnames";
import { connect } from "react-redux";
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      userName:"",
      password:"",
      contact:"",
      email:""

    };
    this.refreshUsers = this.refreshUsers.bind(this);
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
  render() {
    const { errors } = this.state;
    return (
      <>

        <h1 className="center">Welcome!<p> </p>{this.state.user.userName}</h1>
        <br></br>


        <br></br>
        <br></br>
        <form >
          <div className="center">
            <div className="form-group">
              <label>Username: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              {this.state.user.userName}


            </div>
            <div className="form-group">
              <label>Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              {this.state.user.password}


            </div>
            <div className="form-group">
              <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.state.user.email}


            </div>
            <div className="form-group">
              <label>Contact:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              {this.state.user.contact}


            </div>

          </div>
          <div className="container center">
            <React.Fragment>
              <Link to="/editprofile" className="btn btn-lg btn-info center">
                Edit Your profile
              </Link>
            </React.Fragment>
          </div>


        </form>


      </>
    );
  }
}

updateUser.propTypes = {
  updateUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { updateUser }
)(Profile);
