import { connect } from 'react-redux';
import ProjectToolbox from "./project_toolbox";
import { fetchProject } from "../../../actions/project_actions";
import { fetchTodoLists } from "../../../actions/todo_list_actions";
import { fetchTodos } from "../../../actions/todo_actions";
import { fetchMessages } from "../../../actions/message_actions";

const msp = (state, ownProps) => {
  const projectId = ownProps.match.params.projectId;
  const userId = ownProps.match.params.userId;

  return { 
    project: state.entities.projects[projectId],
    messages: Object.values(state.entities.messages),
    todoLists: Object.values(state.entities.todo_lists),
    todos: Object.values(state.entities.todos),
    user: state.entities.users[userId]
  }
}

const mdp = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  fetchMessages: projectId => dispatch(fetchMessages(projectId)),
  fetchTodoLists: projectId => dispatch(fetchTodoLists(projectId)),
  fetchTodos: (projectId, todoListId) => dispatch(fetchTodos(projectId, todoListId))
})

export default connect(msp, mdp)(ProjectToolbox);