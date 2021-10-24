import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../../actions/message_actions';
import { fetchProject } from '../../../actions/project_actions';

const msp = (state, ownProps) => {
  const { projectId, userId } = ownProps.match.params;
  return {
    errors: Object.values(state.errors.messages),
    message: {
      title: '',
      category: '',
      body: '',
    },
    project: state.entities.projects[projectId],
    projectId,
    userId,
    formType: 'messageCreate',
  };
};

const mdp = (dispatch) => ({
  messageAction: (projectId, message) =>
    dispatch(createMessage(projectId, message)),
  fetchProject: (projectId) => dispatch(fetchProject(projectId)),
});

export default connect(msp, mdp)(MessageForm);
