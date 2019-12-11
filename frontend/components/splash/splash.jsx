import React from "react";
import {Link} from "react-router-dom";


export default () => {
  return (
    <div className="splash-content">
      <h2>Get it together and manage projects the right way.</h2>
      <p className=""><b className="bold-p">Before SpringBoard:</b> Projects feel scattered, things slip, it’s tough to see where things stand, and people are stressed. <b className="bold-p">After SpringBoard:</b> Everything’s organized in one place, you’re on top of things, progress is clear, and a sense of calm sets in.</p>
      <div className="signup">
        <Link to="/signup" className="signUpLink">Give SpringBoard a Try</Link>
        <p className="user-count">9,469 companies signed up in the last week alone!</p>
      </div>
    </div>
  )
}