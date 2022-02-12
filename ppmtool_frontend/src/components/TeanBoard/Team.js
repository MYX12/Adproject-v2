import React, { Component } from "react"
import { propTypes } from "react-bootstrap/esm/Image";
import { connect } from "react-redux";
import { getMembers } from "../../actions/MemberActions";
import PropTypes from "prop-types";
import MemberService from "../../actions/MemberService";



class Team extends Component {
    // componentDidMount() {
    //     const { id } = this.props.match.params;
    //     this.props.getMembers(id);
    //     console.id();
    // }
    constructor(props){
        super(props);
        this.state={
            members:[],
            name:null,
        }
        this.retrieveMembers=this.retrieveMembers.bind(this);
    }
    retrieveMembers() {
        const { id } = this.props.match.params;
        MemberService.retriveAllMembers(id).then((response) => {
          // console.log(response)
          this.setState({ members: response.data });
        });
      }



    render() {
      //  const { members } = this.props.user;
        return (
            <div>
                <div classname="center">
                    <h1 className="center">Team</h1>
                </div>
                <div className="container">
                    <div className="members-layout-list">
                        <div className="members-layout-header center">
                            <button onClick={this.retrieveMembers}
                                className="btn btn-success"> The members of this Project </button>
                        </div>
                        <div className="members-actions-container center">
                            <form>
                                <label>
                                    Name:
                                    <input type="text" />
                                </label>
                            </form>
                            {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                            <button
                                className="btn btn-success"
                            >
                                invite new member
                            </button>
                        </div>
                        {this.state.members.map(member =>
                        (
                            <div className="container">
                                <div className="memebers-show " >
                                    <div className="top-border">
                                        <div className="member-list row">

                                            <div className="col-sm">
                                                <div className="menber-image ">
                                                    img
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div>
                                                    {member.userName}
                                                </div>
                                            </div>
                                            <div className="col-sm">
                                                <div className="_1oWyw480oH9DGq ">
                                                    {member.designation}
                                                </div>


                                            {/* <div classname="memebr-details">
                                                <p className="name-line">
                                                    <span className="full-name">{member.userName}</span>
                                                </p>
                                                <div className="member-role">
                                                    <button className="_1oWyw480oH9DGq">
                                                        {member.designation}
                                                    </button>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>

        )
    }

}


// Team.propTypes = {
//     getMembers: PropTypes.func.isRequired,
//   };


// const mapStateToProps = state => ({
//     User: state.User
//   });

// export default connect(
//     mapStateToProps,
//     { getMembers }
//   )(Team);

export default Team;