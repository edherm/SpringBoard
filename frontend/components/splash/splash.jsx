import React from "react";
import {Link} from "react-router-dom";


export default () => {
  return (
    <div className="splash-container">
      <div className="splash-content-container">
        <div className="splash-header-container">
          <h2>Get it together and manage projects the right way.</h2>
        </div>
        <div className="splash-info-container">
          <p className=""><b className="bold-p">Before SpringBoard:</b> Projects feel scattered, things slip, it’s tough to see where things stand, and people are stressed. <b className="bold-p">After SpringBoard:</b> Everything’s organized in one place, you’re on top of things, progress is clear, and a sense of calm sets in.</p>
        </div>
        <div className="signup">
          <div className="signup-button-container">
            <Link to="/signup" className="signUpLink">Give SpringBoard a Try</Link>
          </div>
          <p className="user-count">1.0042 trillion companies swear by this sweet suite.</p>
        </div>
      </div>
    </div>
  )
}