import { connect } from 'react-redux';
import { fetchMessage } from '../../actions/message_actions';
import { fetchProject } from '../../actions/project_actions';
import MessageShow from './message_show';

const msp = (state, ownProps) => {
  return {
    message: state.entities.messages[ownProps.match.params.messageId],
    project: state.entities.projects[ownProps.match.params.projectId],
    user: state.entities.users[ownProps.match.params.userId],
    messageId: ownProps.match.params.messageId,
    projectId: ownProps.match.params.projectId,
    userId: ownProps.match.params.userId,
    page: 'show',
  };
};

const mdp = (dispatch) => {
  return {
    fetchMessage: (messageId) => dispatch(fetchMessage(messageId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  };
};

export default connect(msp, mdp)(MessageShow);
