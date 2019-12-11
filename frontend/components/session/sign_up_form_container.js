import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, dismissErrors } from "../../actions/session_actions"

const msp = state => ({
  user: {
    email: "",
    password: "",
    name: ""
  },
  errors: state.errors,
  formType: "Sign Up"
})

const mdp = dispatch => ({
  action: user => dispatch(signup(user)),
  clearErrors: () => dispatch(dismissErrors())
})

export default connect(msp, mdp)(SessionForm)
