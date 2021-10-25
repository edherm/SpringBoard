import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarLinks = ({ currentUser }) => {
  if (currentUser) {
    return (
      <ul className="nav-links user">
        <li>
          <Link to={`/${currentUser.id}/projects`}>Home</Link>
        </li>
      </ul>
    );
  } else {
    return null;
  }
};

export default NavBarLinks;
