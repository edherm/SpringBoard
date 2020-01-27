import React from 'react';
import { connect } from "react-redux";
import MessageForm from './message_form';
import { updateMessage, deleteMessage, fetchMessage } from '../../../actions/message_actions';
import { fetchProject } from '../../../actions/project_actions';

class MessageLoad extends React.Component {
  componentDidMount() {
    this.props.fetchMessage(this.props.projectId, this.props.messageId)
  }

  render () {
    const { errors, message, messageId, project, projectId, userId, formType, 
      messageAction, fetchMessage, deleteMessage, fetchProject } = this.props;
    
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
    )
  }
}

const msp = (state, ownProps) => {
  return ({
    errors: Object.values(state.errors.messages),
    message: state.entities.messages[ownProps.match.params.messageId],
    messageId: ownProps.match.params.messageId,
    project: state.entities.projects[ownProps.match.params.projectId],
    projectId: ownProps.match.params.projectId,
    userId: ownProps.match.params.userId,
    formType: "messageEdit"
  })
}

const mdp = dispatch => {
  return ({
    messageAction: (projectId, message) => 
      dispatch(updateMessage(projectId, message)),
    fetchMessage: (projectId, messageId) => 
      dispatch(fetchMessage(projectId, messageId)),
    deleteMessage: (projectId, messageId) =>
      dispatch(deleteMessage(projectId, messageId)),
    fetchProject: projectId =>
      dispatch(fetchProject(projectId))
  })
}

export default connect(msp, mdp)(MessageLoad);