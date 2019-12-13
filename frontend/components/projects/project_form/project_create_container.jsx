import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../../actions/project_actions';

const msp = (state, ownProps) => ({
  errors: state.errors,
  project: {
    name: "",
    description: ""
  },
  formType: "projectCreate"
})

const mdp = dispatch => ({
  projectAction: project => dispatch(createProject(project))
})

export default connect(msp, mdp)(ProjectForm);