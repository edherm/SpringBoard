import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from "../../actions/session_actions"

const msp = state => ({
  user: {
    email: "",
    password: ""
  },
  errors: state.errors,
  formType: "Log In"
})

const mdp = dispatch => ({
  action: user => dispatch(login(user))
})

export default connect(msp, mdp)(SessionForm)
