import React from "react";
import { Link } from 'react-router-dom';
import NavBarLinks from "./nav_bar_links";
import NavBarUser from "./nav_bar_user";


 class NavBar extends React.Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      this.props.receiveCurrentUser();
    }
    
    
    render () {
      const { currentUser, logout } = this.props;
      
      let logo = "nav-logo";
      const klass = currentUser ? logo + " user" : logo;
    return (
      <div className="nav-container" >
        <Link to="/" className={klass} >
          <img className="nav-logo-img" src={window.springURL} alt="SpringBoard Logo" />
          <h1 className="nav-logo-title">Springboard</h1>
        </Link>
        <div className="nav-center">
          <NavBarLinks currentUser={currentUser} />
        </div>
        <div className="nav-right">
          <NavBarUser currentUser={currentUser} logout={logout} />
        </div>
      </div>
    )
  }
}

export default NavBar;