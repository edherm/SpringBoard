import { connect } from 'react-redux';
import MessagesIndex from './messages_index';
import { fetchMessages } from '../../actions/message_actions';
import { fetchProject } from '../../actions/project_actions';
import { filterByProject } from '../../util/project_api_util';

const msp = (state, ownProps) => {
  const { projectId, userId } = ownProps.match.params;
  return {
    messages: filterByProject(
      Object.values(state.entities.messages),
      projectId
    ),
    project: state.entities.projects[projectId],
    user: state.entities.users[userId],
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
