import React from "react";
import { Link } from "react-router-dom";

export const EditLink = ({match, page}) => {
  debugger
  return (
    <div className="toolbox-edit-link-container">
      <Link
        className={`${page} toolbox-edit-link`}
        to={`${match.url}/edit`}
      >
        ...
      </Link>
    </div>
  )
}