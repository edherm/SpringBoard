import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, dismissErrors } from "../../../actions/session_actions";

const msp = state => ({
  user: {
    email: "",
    password: ""
  },
  errors: state.errors,
  formType: "Log In"
})

const mdp = dispatch => ({
  action: user => dispatch(login(user)),
  dismissErrors: () => dispatch(dismissErrors())
})

export default connect(msp, mdp)(SessionForm)
