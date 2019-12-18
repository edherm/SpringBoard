import { connect } from 'react-redux';
import ProjectToolbox from "./project_toolbox";
import { fetchProject } from '../../../actions/project_actions';

const msp = (state, ownProps) => {
  return { project: state.entities.projects[ownProps.match.params.projectId] }
}

const mdp = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId))
})

export default connect(msp, mdp)(ProjectToolbox);