import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addMember" className="btn btn-lg btn-info">
        Add a Member
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;