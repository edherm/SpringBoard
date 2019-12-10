import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-dropdown">
      <button onClick={() => logout()}>DropdownLogout</button>
    </div>
  ) : (
    <div className="nav-links">
      <Link className="Log-a" to="/login">Sign In</Link>
      <Link className="Sig-a" to="/signup">Try it FREE</Link>
    </div>
  )

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <img className="nav-logo-img" src={window.springURL} alt="SpringBoard Logo" />
        <h1 className="nav-logo-title">Springboard</h1>
      </div>
      {display}
    </div>
  )
}