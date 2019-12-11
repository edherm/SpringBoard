import React from "react";
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const navRight = currentUser ? (
    <div className="nav-right dropdown" >
      {`${currentUser.email}`}
      <div className="dropdown-content" >
        <button className="logout-button" onClick={() => logout()}>Sign Out</button>
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