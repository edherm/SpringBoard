import { connect } from "react-redux";
import { logout, receiveCurrentUser } from "../../actions/session_actions";
import NavBar from "./nav_bar";

const msp = state => ({
  currentUser: state.entities.users[state.session.currentUser]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  receiveCurrentUser: () => dispatch(receiveCurrentUser)
})

export default connect(msp, mdp)(NavBar);