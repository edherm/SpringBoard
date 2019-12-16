import React from "react";
import { Link } from "react-router-dom";



export const NavBarLinks = ({currentUser}) => {
  // currentUser ? (
  if (currentUser) {
    return (
      <ul className="nav-links user" >
        <li><Link to={`/${currentUser.id}/projects`}>Home</Link></li>
        {/* <li><a href="#">Pings</a></li>
        <li><a href="#">Hey!</a></li>
        <li><a href="#">Activity</a></li>
        <li><a href="#">My Stuff</a></li>
        <li><a href="#">Find</a></li> */}
      </ul>
    )
  } else {
    return null;
  }
  // ) : (
  //   // <ul className="nav-links new-user">
  //   //   <li><a href="#">How It Works</a></li>
  //   //   <li><a href="#">Before & after</a></li>
  //   //   <li><a href="#">Got clients?</a></li>
  //   //   <li><a href="#">Pricing</a></li>
  //   //   <li><a href="#">Support</a></li>
  //   // </ul>
  // )
}

export default NavBarLinks;