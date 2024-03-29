import React from 'react';
import { connect } from 'react-redux';
import MessageForm from './message_form';
import {
  updateMessage,
  deleteMessage,
  fetchMessage,
} from '../../../actions/message_actions';
import { fetchProject } from '../../../actions/project_actions';

class MessageLoad extends React.Component {
  componentDidMount() {
    this.props.fetchMessage(this.props.messageId);
  }

  render() {
    const {
      errors,
      message,
      messageId,
      project,
      projectId,
      userId,
      formType,
      messageAction,
      fetchMessage,
      deleteMessage,
      fetchProject,
    } = this.props;

    if (!message) return null;

    return (
      <MessageForm
        history={this.props.history}
        match={this.props.match}
        errors={errors}
        message={message}
        messageId={messageId}
        project={project}
        projectId={projectId}
        userId={userId}
        formType={formType}
        messageAction={messageAction}
        fetchMessage={fetchMessage}
        deleteMessage={deleteMessage}
        fetchProject={fetchProject}
      />
    );
  }
}

const msp = (state, ownProps) => {
  const { projectId, userId, messageId } = ownProps.match.params;
  const { messages, projects } = state.entities;
  return {
    errors: Object.values(state.errors.messages),
    message: messages[messageId],
    project: projects[projectId],
    messageId,
    projectId,
    userId,
    formType: 'messageEdit',
  };
};

const mdp = (dispatch) => {
  return {
    messageAction: (message) => dispatch(updateMessage(message)),
    fetchMessage: (messageId) => dispatch(fetchMessage(messageId)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
    fetchProject: (projectId) => dispatch(fetchProject(projectId)),
  };
};

export default connect(msp, mdp)(MessageLoad);
