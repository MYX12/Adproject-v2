import React, { Component } from "react"
import AddMemberButton from "./Member/AddMemberButton";
import MemberItem from "./Project/MemberItem";
import {connect} from "react-redux"; 
import {getMembers} from "../actions/MemberActions"; 
import PropTypes from "prop-types";
import MemberService from "../actions/MemberService";
import { Link } from "react-router-dom";
import classnames from "classnames";



class Member extends Component {
  constructor(props){

    super(props);

    this.state={
        members:[],
        name:null,
        errors: {}
    }
    this.retrieveMembers=this.retrieveMembers.bind(this);
    // this.removeMemberClicked=this.removeMemberClicked.bind(this);
    // // this.addMemberClicked=this.addMemberClicked.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
}
retrieveMembers() {

    const { id } = this.props.match.params;

    MemberService.retriveAllMembers(id).then((response) => {

      // console.log(response)

      this.setState({ members: response.data });

    });

  }
  componentDidMount() { 
    console.log("componentDidMount"); 
    this.retrieveMembers(); 
    console.log(this.state); 
  } 
  

  // removeMemberClicked(username) { 
  //   MemberService.removeMember(username).then((response) => { 
  //     this.setState({ message: `Remove of member ${username} is successful `}); 
  //     this.retrieveMembers(); 
  //   }); 
  // } 
 
  // addMemberClicked() { 
  //   this.props.navigate(`/members/-1`); 
  // }

  onSubmit(value) {
    value.preventDefault();
    const username=this.state.username;
    const { id } = this.props.match.params;
    MemberService.addNewMembers(id,username);
    this.retrieveMembers();
  }
  onChange(value) {
    this.setState({ [value.target.name]: value.target.value });
  }

  render() {
    const { id } = this.props.match.params;
    const { errors } = this.state;
    //const { members } = this.props.user;
    return (
        <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Members</h1>
              <br />
              <form onSubmit={this.onSubmit}>
              <div className="form-group">
                                    <input
                                        type="username"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.username
                                        })}
                                        placeholder="enter a user name"
                                        name="username"
                                        onChange={this.onChange}
                                    />
                                    {errors.username && (
                                        <div className="invalid-feedback">{errors.username}</div>
                                    )}
                                </div>
                                <button type="submit" className="btn btn-info btn-block mt-4">
                                  Add a Member
                                </button>
                                
              </form>
              <br />
              <hr />
              <br />
              <hr />
              {this.state.members.map(member => (
                <MemberItem key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*Member.propTypes = {
  user: PropTypes.object.isRequired,
  getMembers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});
*/
export default Member;



