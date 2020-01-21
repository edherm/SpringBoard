import { connect } from 'react-redux';
import ProjectToolbox from "./project_toolbox";
import { fetchProject } from "../../../actions/project_actions";
import { fetchTodoLists } from "../../../actions/todo_list_actions";
import { fetchTodos } from "../../../actions/todo_actions";

const msp = (state, ownProps) => {
  return { 
    project: state.entities.projects[ownProps.match.params.projectId],
    todoLists: Object.values(state.entities.todo_lists),
    todos: Object.values(state.entities.todos)
  }
}

const mdp = dispatch => ({
  fetchProject: projectId => dispatch(fetchProject(projectId)),
  fetchTodoLists: projectId => dispatch(fetchTodoLists(projectId)),
  fetchTodos: (projectId, todoListId) => dispatch(fetchTodos(projectId, todoListId))
})

export default connect(msp, mdp)(ProjectToolbox);