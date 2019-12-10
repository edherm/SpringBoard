import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <button onClick={() => logout()}>DropdownLogout</button>
    </div>
  ) : (
    <div className="nav-dropdown">
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Try it Free</Link>
    </div>
  )

  return (
    <div>
      <h1 className="header-title">SpringBoard</h1>
      {display}
    </div>
  )
}