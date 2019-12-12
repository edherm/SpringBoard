import { connect } from 'react-redux';
import ProjectIndex from './project_index';
import { fetchProjects } from '../../../actions/project_actions';

const msp = (state, ownProps) => ({
  projects: Object.values(state.entities.projects),
  userId: ownProps.match.params.userId
});

const mdp = dispatch => ({
  fetchProjects: userId => dispatch(fetchProjects(userId))
});

export default connect(msp, mdp)(ProjectIndex);