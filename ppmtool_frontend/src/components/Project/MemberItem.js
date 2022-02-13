import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMember } from "../../actions/MemberActions";

class MemberItem extends Component {

    onDeleteClick = id => {
      this.props.removeMember(id);
    };
  

  render() {
    const { member } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{member.userName}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{member.contact}</h3>
              <p>{member.email}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
              <Link to={`/trasferProject/${member.projectIdentifier}/${member.userName}`}>
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Transfer Project to this member </i>
                  </li>
                  </Link>
                  <li
                  className="list-group-item delete"
                  onClick={this.onDeleteClick.bind(
                    this,
                    member.userName
                  )}
                >
                  <i className="fa fa-minus-circle pr-1"> Remove Member</i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MemberItem.propTypes = {
  removeMember: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeMember }
)(MemberItem);