import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../actions/RecommendService";


class Profile extends Component {

  render() {
      return (
        <>
          <h1 className="center">Welcome!</h1>
        
          <div className="container-left">
            <div className="user-image">
                image
            </div>
            <div className="user-name">
                username
            </div>
          </div>
          <div className="container-right">
          <form >
              <div className="center">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Password"
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
  