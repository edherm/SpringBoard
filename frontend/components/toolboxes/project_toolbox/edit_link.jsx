import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export const EditLink = ({match}) => {
  return (
    <div className="toolbox-edit-link-container">
      <Link
        className="project toolbox-edit-link"
        to={`${match.url}/edit`}
      >
        ...
      </Link>
    </div>
  )
}