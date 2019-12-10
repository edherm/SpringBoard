import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = (
    <div className="nav-dropdown">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  )

  return (
    <div>
      <h1 className="header-title">SpringBoard</h1>
      {display}
    </div>
  )
}