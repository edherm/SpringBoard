import { connect } from 'react-redux';
import ProjectForm from './project_form';
import { createProject } from '../../../actions/project_actions';

const msp = (state, ownProps) => ({
  errors: Object.values(state.errors.projects),
  project: {
    name: '',
    description: '',
  },
  formType: 'projectCreate',
});

const mdp = (dispatch) => ({
  projectAction: (project) => dispatch(createProject(project)),
});

export default connect(msp, mdp)(ProjectForm);
