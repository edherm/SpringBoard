import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const navRight = currentUser ? (
    <div className="nav-right dropdown" >
      <div className="user-initial" >
        {`${currentUser.name[0].toUpperCase()}`}
      </div>
      <div className="dropdown-content" >
        <h3 className="dropdown-header" >Personal Settings</h3>
        <ul>
          <li><button className="logout-button" onClick={() => logout()}>Sign Out</button></li>
        </ul>
      </div>
    </div>
  ) : (
    <div className="nav-links">
      <Link className="Log-a" to="/login">Sign In</Link>
      <Link className="Sig-a" to="/signup">Try it FREE</Link>
    </div>
  )

  const navLinks = () => {
    return (
      <ul className="nav-links">
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Before & after</a></li>
        <li><a href="#">Got clients?</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Support</a></li>
      </ul>
    )
  }

  return (
    <div className="nav-container">
      <Link to="/" className="nav-logo">
        <img className="nav-logo-img" src={window.springURL} alt="SpringBoard Logo" />
        <h1 className="nav-logo-title">Springboard</h1>
      </Link>
      <div className="nav-right">
        {navLinks()}
        {navRight}
      </div>
    </div>
  )
}