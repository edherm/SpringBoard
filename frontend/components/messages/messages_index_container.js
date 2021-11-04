import { connect } from 'react-redux';
import MessagesIndex from './messages_index';
import { fetchMessages } from '../../actions/message_actions';
import { fetchProject } from '../../actions/project_actions';

const msp = (state, ownProps) => {
  const { projectId, userId } = ownProps.match.params;
  return {
    projectId,
    userId,
    project: state.entities.projects[projectId],
    page: 'index',
  };
};

const mdp = (dispatch) => {
  return {
    fetchMessages: (projectId) => dispatch(fetchMessages(projectId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  };
};

export default connect(msp, mdp)(MessagesIndex);
