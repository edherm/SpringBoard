import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-right dropdown" >
      {`${currentUser.email}`}
      <div className="dropdown-content" >
        <button className="logout-button" onClick={() => logout()}>Sign Out</button>
      </div>
    </div>
  ) : (
    <div className="nav-links nav-right">
      <Link className="Log-a" to="/login">Sign In</Link>
      <Link className="Sig-a" to="/signup">Try it FREE</Link>
    </div>
  )

  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo">
        <img className="nav-logo-img" src={window.springURL} alt="SpringBoard Logo" />
        <h1 className="nav-logo-title">Springboard</h1>
      </Link>
      {display}
    </div>
  )
}