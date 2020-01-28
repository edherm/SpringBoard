import { connect } from "react-redux";
import MessagesIndex from "./messages_index";
import { fetchMessages } from "../../actions/message_actions";
import { fetchProject } from "../../actions/project_actions";

const msp = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
    project: state.entities.projects[ownProps.match.params.projectId],
    user: state.entities.users[ownProps.match.params.userId],
    page: "index"
  }
}

const mdp = dispatch => {
  return {
    fetchMessages: projectId => 
      dispatch(fetchMessages(projectId)),
    fetchProject: projectId => 
      dispatch(fetchProject(projectId))
  }
}

export default connect(msp, mdp)(MessagesIndex);