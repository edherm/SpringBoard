import React from "react";
import { Link } from 'react-router-dom';

class NavBarUser extends React.Component {
  constructor (props) {
    super(props)
  } 

  componentWillUnmount () {
    this.setState({entities: { users: {}, projects: {} } })
  }

  render () {
    const initials = name => (
      name.split(' ').map(str => str[0]).join('').toUpperCase()
    )
    const { currentUser, logout } = this.props;
    return (
      currentUser ? (
        <div className="nav-right dropdown" >
        <div className="user-initial" >
          {`${initials(currentUser.name)}`}
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
    )
  }
}

  export default NavBarUser;