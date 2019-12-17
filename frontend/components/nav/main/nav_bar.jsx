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
      
      // = "nav-logo";
      let linkKlass;
      let containerKlass;
      let navLogoImgKlass;
      let navLogoTitleKlass;

      if (currentUser) {
        linkKlass = "nav-logo-link-user";
        containerKlass = "nav-container-user";
        navLogoTitleKlass = "nav-logo-title-user";
        navLogoImgKlass = "nav-logo-img-user"
      } else {
        linkKlass = "nav-logo-link";
        containerKlass = "nav-container";
        navLogoTitleKlass = "nav-logo-title";
        navLogoImgKlass = "nav-logo-img"
      }
      
      // const linkKlass = currentUser ? logo + " user" : logo;
      // const containerKlass = currentUser ? "-user" : ""
    return (
      <div className={containerKlass} >
        <div className="nav-left">
          <Link to="/" className={linkKlass} >
            <div className="nav-logo-img-container">
              <img className={navLogoImgKlass} src={window.springBoardLitURL} alt="SpringBoard Logo" />
            </div>
            <h1 className={navLogoTitleKlass}>Springboard</h1>
          </Link>
        </div>
        <div className="nav-right">
          <NavBarUser currentUser={currentUser} logout={logout} />
        </div>
      </div>
    )
  }
}

export default NavBar;